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
              <v-btn icon>
                <v-icon>search</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>add</v-icon>
              </v-btn>
            </v-toolbar>

            <v-divider></v-divider>
            
            <!-- 待辦清單列表 -->
            <v-card-text style="min-height: 200px;"></v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .card--flex-toolbar {
    margin-top: -64px;
  }
</style>
