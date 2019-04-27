<!----------Make By YourName---------------->
 <template>
<div> 
  <v-layout mrt-30 xs12   >
    <v-flex  xs12 sm6 offset-sm3   >
      <v-card style="height:130px; width:300px; ">
      
        <v-card-title>
          <v-btn block color=" green" dark >Status</v-btn>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
             
          </div>
        </v-card-title>
        <v-card-actions>
          
          <v-btn class="mrl-180" flat color="orange">แก้ไข</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
 </div>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify"; 
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {

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