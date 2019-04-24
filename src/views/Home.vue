<!----------Make By YourName---------------->
 <template>
<div>
<slide/>
</div>
</template>

  
<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import slide from '@/components/Web/Home/slide';
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
slide
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
