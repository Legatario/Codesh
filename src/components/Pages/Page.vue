<template>
    <h1>{{ routerID }}</h1>
</template>

<script>
    export default{
        name: 'Page',
        props:['routerID'],
        data(){
            return{
                articuloDala: null,
                routerNumber: null
            }
        },
        methods:{
            //chamada na api para receber o artigo usando o ID
            async getPage(){
                const req = await fetch(`https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts/${this.routerNumber}`);

                const data = await req.json();
                this.articuloDala = data;

                // this.size = data.size
                // this.pages = data.pages
                console.log(data)
                // fim da chamada de api
            },
            getRouter(){
                const callRouter = window.location.pathname.replace(/[/articulo/]/g, '')

                this.routerNumber = callRouter
            }
        },
        mounted(){
            this.getRouter()
            this.getPage()
        }
    }
</script>

<style scoped>

</style>