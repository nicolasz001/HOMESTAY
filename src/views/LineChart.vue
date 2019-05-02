<!----------Make By YourName---------------->
 <template>
<div>
 
     <v-parallax
          app
          dark
          src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/47437203_948578151995409_1615773761976401920_o.jpg?_nc_cat=106&_nc_ht=scontent.fbkk12-1.fna&oh=6c10d8c3f7582655c065dc21de06c60d&oe=5D327F95"
          height="900"
          jumbotron
        >
        
<chart/>
   
  </v-parallax>
  
  </div>
</template>

  <script>
  import { get,sync,call } from "vuex-pathify"; 
 import Chart from "@/components/Web/Home/chart";
export default {
  name: 'Root',
  /*-------------------------Load Component---------------------------------------*/
  components: {
    Chart

  },
  /*-------------------------Set Component---------------------------------------*/
props:{

},
  /*-------------------------DataVarible---------------------------------------*/
  data() {
  return {

    };
  }, 
  /*-------------------------Run Methods when Start this Page------------------------------------------*/
   async mounted() {
  /**** Call loading methods*/
      this.load(); 
  },
  /*-------------------------Run Methods when Start Routed------------------------------------------*/
   async beforeRouteEnter(to, from, next) { 
    next()
  },
  /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
  computed:{

},
  /*-------------------------Methods------------------------------------------*/
methods:{
  /******* Methods default run ******/
  load:async function(){
}
},
  }
</script>