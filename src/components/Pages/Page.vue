<template>
    <main v-if="articuloDala !== null">
        <div class="category">
            <span>
                {{ articuloDala?.categories[0]?.name }}
            </span>
        </div>

        <article>
            <h1>{{ articuloDala.title }}</h1>
            <p>{{ articuloDala.headline }}</p>

            <div class="banner">
                <img :src="articuloDala?.featured_media?.medium_large" :alt="articuloDala.title">
            </div>

            <section class="content" v-html="articuloDala.content">
            </section>

            <aside>
                <p>Escrito por {{articuloDala?.author?.name}}</p>
                <span>Última actualización: {{articuloDala.published.substr(8, 2).replace(/-/g, ' ')}}/{{articuloDala.published.substr(5, 2).replace(/-/g, ' ')}}/{{articuloDala.published.substr(0, 4).replace(/-/g, ' ')}}</span>
            </aside>
        </article>
        <nav>
            <div class="navContainer" v-if="articuloDala.bibliography">
                <Button btnName="+" @callEvent='navBibliograf' />
                <label for="btnName" @click="navBibliograf">Bibliografía</label>
                <section v-html="articuloDala.bibliography" v-show="navB"></section>
            </div>
        </nav>
    </main>
</template>

<script>
import Button from '../List/Paginacao/Button.vue';
    export default{
    name: "Page",
    props: ["routerID"],
    data() {
        return {
            articuloDala: null,
            routerNumber: null,
            navB: false
        };
    },
    methods: {
        //chamada na api para receber o artigo usando o ID
        async getPage() {
            const req = await fetch(`https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts/${this.routerNumber}`);
            const data = await req.json();
            this.articuloDala = data;
            // this.size = data.size
            // this.pages = data.pages
            console.log(data);
            // fim da chamada de api
        },
        getRouter() {
            const callRouter = window.location.pathname.replace(/[/articulo/]/g, "");
            this.routerNumber = callRouter;
            this.getPage();
        },
        navBibliograf(){
            this.navB = !this.navB
            console.log(this.navB)
        }
    },
    mounted() {
        this.getRouter();
    },
    components: { Button }
}
</script>

<style scoped>

</style>