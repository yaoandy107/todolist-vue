<template>
  <v-app>
      <v-toolbar
        color="primary"
        dark
        extended>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>BlackMaple's TODO</v-toolbar-title>
      </v-toolbar>
      <!-- 待辦清單 -->
      <v-layout wrap mb-5>
        <v-flex xs8 offset-xs2>
          <v-card class="card--flex-toolbar">
            <!-- 待辦清單標題 -->
            <v-toolbar card prominent>
              <v-toolbar-title class="body-2 grey--text">待辦清單</v-toolbar-title>
              <v-spacer></v-spacer>
              <!-- 搜尋按鈕 -->
              <v-btn icon>
                <v-icon>search</v-icon>
              </v-btn>
            </v-toolbar>

            <v-divider></v-divider>
            
            <!-- 待辦清單列表 -->
            <v-layout column style="min-height: 50px;">
              <template
                v-for="(item, index) of todoList">
                <todo-item
                  :key="item.id"
                  :todo="item"
                  :index="index"
                  @delete="deleteTodo">
                </todo-item>
                <v-divider :key="index"></v-divider>
              </template>
            </v-layout>
            <v-text-field 
              v-model="inputTodo"
              label="把要丟給黑楓的工作輸入進來吧～"
              box
              hide-details
              :append-icon="inputTodo ? 'send' : ''"
              @click:append="addTodo"
              @keyup.enter="addTodo">
            </v-text-field>
          </v-card>
        </v-flex>
      </v-layout>
  </v-app>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import db from './firebase/firestoreInit'
import firebase from 'firebase'
export default {
  components: {
    'todo-item': TodoItem
  },
  data () {
    return {
      inputTodo: '',
      todoList: [
        
      ],
      todoCollection: null
    }
  },
  methods: {
    addTodo () {
      if (this.inputTodo !== '') {
        this.todoList.push({
          content: this.inputTodo
        })
        this.todoCollection.add({
          content: this.inputTodo,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        this.inputTodo = ''
      }
    },
    deleteTodo (index) {
      this.todoCollection.doc(this.todoList[index].id).delete()
      this.todoList.splice(index, 1)
    },
    initFirestore () {
      this.todoCollection = db.collection('todo');
      this.todoCollection
        .orderBy('timestamp')
        .onSnapshot((todoRef) => {
            const todos = [];
            todoRef.forEach((doc) => {
                const todo = doc.data();
                todo.id = doc.id;
                todos.push(todo);
            });
            this.todoList = todos;
        });
    }
  },
  created () {
    this.initFirestore()
  }
}
</script>

<style>
  .card--flex-toolbar {
    margin-top: -64px;
  }
</style>
