<template>
  <div id="app">
      <v-toolbar
        color="primary"
        dark
        extended>
        <v-toolbar-side-icon></v-toolbar-side-icon>
      </v-toolbar>
      <!-- 待辦清單 -->
      <v-layout wrap>
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
              <todo-item 
                v-for="(item, index) of todoList"
                :key="index"
                :content="item">
              </todo-item>
            </v-layout>
            <v-text-field 
              v-model="inputTodo"
              label="Outline"
              box
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
      this.todoList.push(this.inputTodo)
      this.inputTodo = ''
    }
  }
}
</script>

<style>
  .card--flex-toolbar {
    margin-top: -64px;
  }
</style>
