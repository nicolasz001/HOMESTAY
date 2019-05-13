<!----------Make By YourName---------------->
 <template>
<div >
   
   <v-flex md  row wrap app>
    <h1 class="mrl-50 mrt-100 xs "  >ข้อมูลทั้งหมด</h1>
     <chart /> 
 
  
    
<detail/>
 
 </v-flex>
 <navbar />
   
  
  </div>
</template>

  <script>
import { get,sync,call } from "vuex-pathify"; 
 import Chart from "@/components/Web/Home/chart";
 import navbar from '@/components/Shere/navbar.vue'
 import detail from "@/views/detail";
export default {
  name: 'Root',
  /*-------------------------Load Component---------------------------------------*/
  components: {
    Chart,
    navbar,detail

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