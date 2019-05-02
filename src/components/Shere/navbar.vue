<!----------Make By YourName---------------->
 <template>
 
   <v-flex  xs12   id="inspire" >
  
       
       <v-navigation-drawer  
      stateless 
      value="true"   app
      
                
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title><router-link mrl to="Home">Home</router-link></v-list-tile-title>
        </v-list-tile>
  
        <v-list-group
          prepend-icon="account_circle"
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile>
  
          <v-list-group
         
            sub-group
           
          >
            <v-list-tile slot="activator">
              <v-list-tile-title @click="$router.push('/home')"> จองห้องพัก</v-list-tile-title>
            </v-list-tile>
  
            <v-list-tile
              v-for="(admin, i) in admins"
              :key="i"
              
           
            >
            
              
            </v-list-tile>
          </v-list-group>
  
          <v-list-group
            sub-group
           
          >
            <v-list-tile slot="activator">
              <v-list-tile-title  @click="$router.push('/detail')">ข้อมูลการจองห้องพัก</v-list-tile-title>
            </v-list-tile>
  
            <v-list-tile
              v-for="(crud, i) in cruds"
              :key="i"
            
            >
                      
              
              
                
              
            </v-list-tile>
             
          </v-list-group>
          
          <v-list-group
            sub-group
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-title @click="$router.push('/lineChart')">ข้อมูลกราฟ</v-list-tile-title>
            </v-list-tile>
  
          
               
          
            </v-list-tile>
          </v-list-group>
          <v-list-group
            sub-group
           
          >
            <v-list-tile slot="activator">
              <v-list-tile-title  @click="$router.push('/test')">test</v-list-tile-title>
            </v-list-tile>
  
             
           
            </v-list-tile>
          </v-list-group>
          
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
 
   </v-flex>
  
 

</template>

    
<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
  data: () => ({
    admins: [
      ['Management', 'people_outline'],
      ['Settings', 'settings']
    ],
    cruds: [
      ['Create', 'add'],
      ['Read', 'insert_drive_file'],
      ['Update', 'update'],
      ['Delete', 'delete']
    ]
  }),
 

  props: {
    source: String
  },
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
    /*-------------------------Set Component---------------------------------------*/
    props: {

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
    computed: {

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>

