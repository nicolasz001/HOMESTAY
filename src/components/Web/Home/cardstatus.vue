<!----------Make By YourName---------------->
 <template>
<div> 
  <v-layout mrt-20   >
    <v-flex  xs1 md6 offset-sm3 x  >
      <v-card style="  width:350px;  ">
      
        <v-card-title>
          <adddata/>
       
          <div>
                          
          </div>
        </v-card-title>
         
      </v-card>
    </v-flex>
  </v-layout>
 </div>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify"; 
    import adddata from "@/components/Web/Home/adddata";
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
adddata
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