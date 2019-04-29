<template> 
<div id="app"
       >


<router-link to="home">Home</router-link><br>
<router-link to="login">Login</router-link><br>
<router-link to="detail">Detail</router-link><br>
<router-link to="graph">Graph</router-link><br>
 
 

         <router-view/>
         
   </div>


    
</template>

<script>
    import axios from "@/axios"
    import navbar from '@/components/Shere/navbar';
    import footer from '@/components/Shere/footer';
    export default {
        name: "App",
        components: { navbar  },
        data: () => ({}),
        methods: {
            
        },
        async mounted() {
             
         },
        created() {
 
        },
        beforeDestroy() {
         
        }
    }
</script>
