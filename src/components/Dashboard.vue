<template>
  <div class="dashboard">
      <h1 class="subheading grey--text">Dashboard Page</h1>
    
      <v-container class="my-5">

        <v-layout row class="mb-3">
           <v-tooltip top>
              <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
                <v-icon small left>folder</v-icon>
                <span class="caption text-lowercase">By Project Name</span>
              </v-btn>
              <span>Sort by project name</span>
           </v-tooltip>
            <v-tooltip top>
               <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
                <v-icon small left>person</v-icon>
                <span class="caption text-lowercase">By Person Name</span>
              </v-btn>
              <span>Sort by person name</span>
            </v-tooltip>
        </v-layout>
        <v-card flat class="pa-2" v-for="project in projects" :key="project.title">
          <v-layout row wrap :class="`pa-3 project ${project.status}`">
            <v-flex xs12 md6>
              <div class="caption grey--text">Project Title</div>
              <div>{{ project.title }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Person</div>
              <div>{{ project.person }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Due by</div>
              <div>{{ project.due_by }}</div>
            </v-flex>
            <v-flex xs12 sm4 md2>
              <div class="caption grey--text">Status</div>
              <div>
                <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      projects:[
        {'title':'Create Web Design','person':'The Net Ninja','due_by':'11th May 2020','status':'complete'},
        {'title':'Develop Frontend','person':'Wang Yu','due_by':'15th May 2020','status':'complete'},
        {'title':'Development Backend','person':'David Li','due_by':'25th May 2020','status':'ongoing'},
        {'title':'Development API','person':'Yang Yang','due_by':'25th May 2020','status':'overdue'}
      ]
    }
  },
  methods:{
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1:1 )
    }
  }
}
</script>

<style>
  .project.complete{
    border-left: 4px solid #50fa61;
  }
  .project.ongoing{
    border-left: 4px solid #73a0f5;
  }
  .project.overdue{
    border-left: 4px solid #f57171;
  }

  .v-chip.complete{
     background: #50fa61;
  }
  .v-chip.ongoing{
    background: #73a0f5;
  }
  .v-chip.overdue{
    background: #f57171;
  }
</style>