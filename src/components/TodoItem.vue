<template>
  <v-container>
    <v-layout row>
      <div class="body-1 ma-auto">{{content}}</div>
      <v-spacer></v-spacer>
      <v-btn 
        icon
        @click="handleDelete">
        <v-icon>clear</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: [
    'content',
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
