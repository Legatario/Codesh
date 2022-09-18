<template>
    <h1>oie</h1>
</template>

<script>
import { useRoute } from 'vue-router'    
    export default{
        name: 'Articulo',
        data(){
            return{
                params: ''
            }
        },
        mounted(){
            const route = useRoute()
            console.warn("route", route.params.id);
            this.params = route.params.id
            console.log(this.params)
        }
       
    }
</script>

<style scoped>

</style>