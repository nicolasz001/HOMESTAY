<template> 
<v-app>
        <navbar/>
        <router-view/>
    </v-app>
</template>

<script>
    import axios from "@/axios"
    import navbar from '@/components/Shere/navbar';
    export default {
        name: "App",
        components: { navbar},
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
