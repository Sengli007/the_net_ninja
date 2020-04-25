<template>
  <div class="team">
      <h1 class="subheading grey--text">Team Page</h1>
        <v-container class="my-5">
    
        <h3 class="ml-3">Card and Avatar</h3>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card flat class="text-xs-center ma-3">
              <v-responsive>
                <v-avatar size="100" class="grey lighten-2">
                  <img :src="person.avatar" alt="">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">
                  {{ person.name }}
                </div>
                <div class="grey--text">
                  {{ person.role }}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="grey">
                  <v-icon small left>message</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>

          
          <h3>Grid System</h3>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-btn outline block>1</v-btn>
            </v-flex>
            <v-flex xs4 md2>
              <v-btn outline block>2</v-btn>
            </v-flex>
            <v-flex xs4 md2>
              <v-btn outline block>2</v-btn>
            </v-flex>
            <v-flex xs4 md2>
              <v-btn outline block>2</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex xs4 md3>
            <v-btn outline block>justify-center</v-btn>
          </v-flex>
          <v-flex xs4 md3>
            <v-btn outline block>justify-center</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-space-between>
          <v-flex xs4 md3>
            <v-btn outline block>justify-space-between</v-btn>
          </v-flex>
          <v-flex xs4 md3>
            <v-btn outline block>justify-space-between</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-space-around>
          <v-flex xs4 md3>
            <v-btn outline block>justify-space-around</v-btn>
          </v-flex>
          <v-flex xs4 md3>
            <v-btn outline block>justify-space-around</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {name: 'The Net Ninja', role: 'Web developer', avatar: '/pet1.jpg'},
        {name: 'Yang Yang', role: 'Server Admin', avatar: '/pet1.jpg'},
        {name: 'Rhada', role: 'Accountant', avatar: '/pet1.jpg'},
        {name: 'Wang Yu', role: 'Web Designer', avatar: '/pet1.jpg'},
      ]
    }
  }
}
</script>

<style>

</style>