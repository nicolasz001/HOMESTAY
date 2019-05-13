 
 <template>
 
  <v-flex  xs4 md12    wrap row   >
    
  <v-content>
    
   
    <h1 class="green wd360   mrt-55  hidden-md-only  "  >รายละเอียดการจองวันนี้ </h1>
 
  
      <v-flex   >
      <v-layout justify-center   >
        <v-container v-bind="{ [`grid-list-${size}`]: true }"  >
          <v-layout row wrap>
            <v-flex v-for="n in 10" :key="n" xs md3 mb-3  >
              <cardstatus/>
              
            </v-flex>
          </v-layout>
          
        </v-container>
          <navbar/>
      </v-layout>
       </v-flex>
        

  
        
   
  </v-content> 
  </v-flex >
</template>

  
<script>
import { get, sync, call } from "vuex-pathify";
import cardstatus from "@/components/Web/Home/cardstatus";
import navbar from '@/components/Shere/navbar.vue'
 
 
 
 
export default {
  name: "home",
  /*-------------------------Load Component---------------------------------------*/
  components: {
    cardstatus  
    ,navbar
  },
  /*-------------------------Set Component---------------------------------------*/
  props: {},
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
    next();
  },
  /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
  computed: {},
  /*-------------------------Methods------------------------------------------*/
  methods: {
    /******* Methods default run ******/
    load: async function() {}
  }
};
</script>

 