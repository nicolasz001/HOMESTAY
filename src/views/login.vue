<!----------Make By YourName---------------->
<template>
    <v-parallax
      dark
      src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/47437203_948578151995409_1615773761976401920_o.jpg?_nc_cat=106&_nc_ht=scontent.fbkk12-1.fna&oh=6c10d8c3f7582655c065dc21de06c60d&oe=5D327F95"
      height="900"
      jumbotron
    >

<v-container    wd700  hg20 >
    
 
    
             
  <v-form  
    ref="form"
    v-model="valid"
    lazy-validation
     
   
  >
<br>

  <h1   >เข้าสู่ระบบ</h1> <br>
    <v-text-field  
    
      v-model="name"
      :counter="10"
      :rules="UsernameR"
      label="Username"
      required
    ></v-text-field>

    <v-text-field
      v-model="pass"
      :rules="passRules"
      label="Password"
      required
    ></v-text-field>
 
 
<br>
    <v-btn  
      
      color="success"
      @click="validate"
      green
    >
      Submit
    </v-btn>

  
     
  </v-form>
  
  </v-container>
  </v-parallax>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify"; 
export default {
    data: () => ({
      valid: true,
      name: '',
      UsernameR: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      pass: '',
      passRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: true,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false
    }),

    
    
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
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
    //   reset () {
    //     this.$refs.form.reset()
    //   },
    //   resetValidation () {
    //     this.$refs.form.resetValidation()
    //   }
    
   
 
    
    /******* Methods default run ******/
 
},
    }
    
    
</script>