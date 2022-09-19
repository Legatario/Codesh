<template>
    <main class="container">
        <Page :routerID="params"/>   
    </main>
</template>

<script>
import { useRoute } from 'vue-router'
import Page from '../components/Pages/Page.vue'    
    export default{
    name: "Articulo",
    data() {
        return {
            params: ""
        };
    },
    mounted() {
        const route = useRoute();
        this.params = route.params.id;
    },
    components: { Page }
}
</script>

<style scoped>

</style>