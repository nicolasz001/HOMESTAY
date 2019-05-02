<template> 
<v-app>
  
 
     
<!-- <router-link mrl to="Home">home</router-link>
<router-link to="login">login</router-link>
<router-link to="detail">detail</router-link>
<router-link to="test">test</router-link> -->
 
  <navbar/>
    
      <router-view/>
   
 
  </v-app>
</template>

<script>
import axios from "@/axios";
import navbar from "@/components/Shere/navbar";
 

 
 
export default {
  



  name: "App",
  components: { navbar   },
  data: () => ({}),
  methods: {},
  async mounted() {},
  created() {},
  beforeDestroy() {}
};
</script>
