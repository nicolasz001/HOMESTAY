 
 <template>
  <v-flex xs12 md12    wrap row   >
  <v-content>
     
    <v-parallax
      dark
      src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/47437203_948578151995409_1615773761976401920_o.jpg?_nc_cat=106&_nc_ht=scontent.fbkk12-1.fna&oh=6c10d8c3f7582655c065dc21de06c60d&oe=5D327F95"
      height="900"
      jumbotron
    
    >
    <h1 class="green wd320 hg60  mrt-35 mr-60 "  >รายละเอียดการจองห้อง </h1>
 
  
      <v-flex   >
      <v-layout justify-center   >
        <v-container v-bind="{ [`grid-list-${size}`]: true }"  >
          <v-layout row wrap>
            <v-flex v-for="n in 15" :key="n" xs2 md3  >
              <cardstatus/>
              
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
       </v-flex>
    </v-parallax>
   
  </v-content> 
  </v-flex >
</template>

  
<script>
import { get, sync, call } from "vuex-pathify";
import cardstatus from "@/components/Web/Home/cardstatus";
 
 
 
 
export default {
  name: "home",
  /*-------------------------Load Component---------------------------------------*/
  components: {
    cardstatus  
    ,
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

 