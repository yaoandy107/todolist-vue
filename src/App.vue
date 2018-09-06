<template>
  <div id="app">
      <v-toolbar
        color="primary"
        dark
        extended>
        <v-toolbar-side-icon></v-toolbar-side-icon>
      </v-toolbar>
      <!-- 待辦清單 -->
      <v-layout wrap mb-5>
        <v-flex xs8 offset-xs2>
          <v-card class="card--flex-toolbar">
            <!-- 待辦清單標題 -->
            <v-toolbar card>
              <v-toolbar-title class="body-2 grey--text">待辦清單</v-toolbar-title>
              <v-spacer></v-spacer>
              <!-- 搜尋按鈕 -->
              <v-btn icon>
                <v-icon>search</v-icon>
              </v-btn>
            </v-toolbar>

            <v-divider></v-divider>
            
            <!-- 待辦清單列表 -->
            <v-layout column>
              <template
                v-for="(item, index) of todoList">
                <todo-item
                  :key="index"
                  :content="item"
                  :index="index"
                  @delete="deleteTodo">
                </todo-item>
                <v-divider :key="index"></v-divider>
              </template>
            </v-layout>
            <v-text-field 
              v-model="inputTodo"
              label="輸入代辦項目"
              box
              hide-details
              :append-icon="inputTodo ? 'send' : ''"
              @click:append="addTodo"
              @keyup.enter="addTodo">
            </v-text-field>
          </v-card>
        </v-flex>
      </v-layout>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
export default {
  components: {
    'todo-item': TodoItem
  },
  data () {
    return {
      inputTodo: '',
      todoList: [

      ]
    }
  },
  methods: {
    addTodo () {
      if (this.inputTodo !== '') {
        this.todoList.push(this.inputTodo)
        this.inputTodo = ''
      }
    },
    deleteTodo (index) {
      this.todoList.splice(index, 1)
    }
  }
}
</script>

<style>
  .card--flex-toolbar {
    margin-top: -64px;
  }
</style>
