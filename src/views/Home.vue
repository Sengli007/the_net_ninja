<template>
  <div class="home">
    <h1>This is an Home page</h1>
    <p class="red white--text">.red white--text
    </p>
    <p class="pink lighten-4 red--text text--darken-4">.pink lighten-4 red--text text--darken-4</p>
    <h1 class="display-4">.display-4</h1>
    <h1 class="display-1">.display-1</h1>
    <p class="headline">.headline</p>

    <h1 class="display-4">Btn and Icon</h1>
    <v-btn class="pink white--text">Click Me</v-btn>
    <v-btn depressed color="pink"> depressed </v-btn>
    <v-btn flat color="pink"> flat </v-btn>

    <v-btn depressed class="pink white--text"> 
      <v-icon left>email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text"> 
      <v-icon left small>email</v-icon>
      <span>email small</span>
    </v-btn>

    <v-btn depressed large class="pink white--text"> 
      <v-icon left large>email</v-icon>
      <span>email large</span>
    </v-btn>

    <v-btn small depressed dark color="purple"> 
      <v-icon>favorite</v-icon>
    </v-btn>

    <h1 class="display-4">Visibility</h1>
    <v-btn color="pink" depressed dark class="hidden-md-and-down">.hidden-md-and-down</v-btn>

    <v-btn color="blue" dark class="hidden-md-and-up">.hidden-md-and-up</v-btn>


  </div>
</template>

