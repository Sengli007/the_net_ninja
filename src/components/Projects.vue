<template>
 
  <div class="projects">
    <h1 class="subtitle-1 font-weight-bold grey--text">Project</h1>
    
    <v-container fluid class="my-5">

      <v-card
        class="mx-auto mt-4"
        width="100%"
        v-for="project in myProjects" :key="project.title"
      >
        <v-card-text>
         
          <p class="display-1 text--primary">
            {{ project.title }}
          </p>
          <p>{{ project.person }}</p>
          <div class="text--primary">
           {{ project.detail }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            text
            dark
            color="deep-purple accent-4"
          >
            Learn More
          </v-btn>
          <v-btn
            text
            color="success"
          >
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>


    </v-container>
   
   
  </div>
</template>

<script>
  export default {
    data(){
      return {
         projects:[
        {'title':'Create Web Design','person':'The Net Ninja','due_by':'11th May 2020','status':'complete','detail':'lorem sadf;ljlsad sadjf;lsdf klshdfkhsd ksadfhkladhs akfdhlkdsf asdflkhsdakfh kasfdhksdhf'},
        {'title':'Develop Frontend','person':'Wang Yu','due_by':'15th May 2020','status':'complete','detail':'lorem sadf;ljlsad sadjf;lsdf klshdfkhsd ksadfhkladhs akfdhlkdsf asdflkhsdakfh kasfdhksdhf'},
        {'title':'Development Backend','person':'David Li','due_by':'25th May 2020','status':'ongoing','detail':'lorem sadf;ljlsad sadjf;lsdf klshdfkhsd ksadfhkladhs akfdhlkdsf asdflkhsdakfh kasfdhksdhf'},
        {'title':'Development API','person':'Yang Yang','due_by':'25th May 2020','status':'overdue','detail':'lorem sadf;ljlsad sadjf;lsdf klshdfkhsd ksadfhkladhs akfdhlkdsf asdflkhsdakfh kasfdhksdhf'}
      ]
      }
    },

    computed: {
      myProjects(){
        return this.projects.filter(project => {
          return project.person === 'The Net Ninja'
        })
      }
    }
  }
</script>

   