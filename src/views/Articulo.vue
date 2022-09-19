<template>
    <main class="container">
        <h1>{{params}}</h1>    
    </main>
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
            this.params = route.params.id
        }
       
    }
</script>

<style scoped>

</style>