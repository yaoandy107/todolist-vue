<template>
  <v-layout row class="mx-4 my-2">
    <div class="body-1 ma-auto">{{todo.content}}</div>
    <v-spacer></v-spacer>
    <div v-if="todo.timestamp" class="ma-auto caption">時間：{{todo.timestamp.toDate().toLocaleString()}}</div>
    <v-btn 
      icon
      @click="handleDelete">
      <v-icon>clear</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  props: [
    'todo',
    'index'
  ],
  methods: {
    handleDelete () {
      this.$emit('delete', this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
