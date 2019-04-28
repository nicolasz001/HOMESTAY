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
       

      <router-view/>
    </v-app>
  </div>
</template>

<script>
import axios from "@/axios";
import navbar from "@/components/Shere/navbar";
 
 
export default {
  



  name: "App",
  components: { navbar  },
  data: () => ({}),
  methods: {},
  async mounted() {},
  created() {},
  beforeDestroy() {}
};
</script>
