<template>
  <div id="app">
    <v-app>
     
       
       
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import axios from "@/axios";
  
export default {
  
  name: "App",
  components: {    },
  data: () => ({}),
  methods: {},
  async mounted() {},
  created() {},
  beforeDestroy() {}
};
</script>