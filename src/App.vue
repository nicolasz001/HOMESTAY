<<<<<<< HEAD
<template> 
<div id="app"
       >

=======
<template>
  <div id="app">
    <v-app>
     
      <router-link to="home">Home</router-link>
      <br>
      <router-link to="login">Login</router-link>
      <br>
      <router-link to="detail">Detail</router-link>
      <br>
      <router-link to="datepicker">test</router-link>
      <br>
       
>>>>>>> 91c403798f26e408973f7313f2b507ae3f72f426

      <router-view/>
    </v-app>
  </div>
</template>

<script>
import axios from "@/axios";
import navbar from "@/components/Shere/navbar";
 
 
export default {
  



<<<<<<< HEAD
    
</template>

<script>
    import axios from "@/axios"
    import navbar from '@/components/Shere/navbar';
    import footer from '@/components/Shere/footer';
    export default {
        name: "App",
        components: { navbar  },
        data: () => ({}),
        methods: {
            
        },
        async mounted() {
             
         },
        created() {
 
        },
        beforeDestroy() {
         
        }
    }
=======
  name: "App",
  components: { navbar  },
  data: () => ({}),
  methods: {},
  async mounted() {},
  created() {},
  beforeDestroy() {}
};
>>>>>>> 91c403798f26e408973f7313f2b507ae3f72f426
</script>
