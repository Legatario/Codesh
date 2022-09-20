<template>
    <Loading v-show="!articuloDala"/>
    <NotFaulty localStorageDatas="esta página" v-show="articuloDala !== null && !articuloDala.title"/>
    <main v-if="articuloDala !== null && articuloDala.title" class="mainPage">
        <div class="category">
            <span class="category__title">
                {{ articuloDala?.categories[0]?.name }}
            </span>
            <div class="category__tags" v-for="tag in articuloDala?.tags" :key="tag.id">
                <span class="category__tags--span">></span>
                <p class="category__tags--text">{{ tag.name }}</p>
            </div>
        </div>

        <article class="pageConteiner">
            <h1 class="pageConteiner__title">{{ articuloDala.title }}</h1>
            <p class="pageConteiner__text">{{ articuloDala.headline }}</p>

            <div class="banner">
                <img :src="articuloDala?.featured_media?.medium_large" :alt="articuloDala.title" class="banner__img">
            </div>

            <section class="content" v-html="articuloDala.content">
            </section>

            <aside class="autor__info">
                <p class="autor__info--text">Escrito por <span class="autor__info--span">{{articuloDala?.author?.name}}</span></p>
                <p class="autor__info--span">Última actualización: <span class="autor__info--text">{{articuloDala.published.substr(8, 2).replace(/-/g, ' ')}}/{{articuloDala.published.substr(5, 2).replace(/-/g, ' ')}}/{{articuloDala.published.substr(0, 4).replace(/-/g, ' ')}}</span></p>
            </aside>
        </article>
        <nav>
            <div class="navContainer" v-if="articuloDala.bibliography">
                <div class="navContainer__outline"></div>
                <div class="navContainer__btn">
                    <Button btnName="+" @callEvent='navBibliograf' />
                    <label for="btnName" @click="navBibliograf">Bibliografía</label>
                </div>
                <section v-html="articuloDala.bibliography" v-show="navB" class="navContainer__list"></section>
                <div class="navContainer__outline"></div>
            </div>
        </nav>
    </main>
</template>

<script>
import Button from '../List/Paginacao/Button.vue';
import Loading from '../Loader/Loading.vue';
import NotFaulty from '../NotFaulty/NotFaulty.vue';
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
            console.log(data)      
            // fim da chamada de api
        },
        //bucando id pelo window antes de fazer a requisição 
        getRouter() {
            const callRouter = window.location.pathname.replace(/[/articulo/]/g, "");
            this.routerNumber = callRouter;
            this.getPage();
        },
        //toggle para o componente de bibliografia
        navBibliograf(){
            this.navB = !this.navB
        }
    },
    mounted() {
        this.getRouter();
    },
    components: { Button, Loading, NotFaulty }
}
</script>

<style scoped>

.mainPage{
    margin: 5em 1.5rem;
    max-width: 850px;
}
.category{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    font-weight: bold;
    padding: 16px 0;
}
.category__title{
    color: #b1b1b1;
    text-transform: uppercase;
}
.category__tags{
    display: flex;
    align-items: center;
    align-content: center;
}
.category__tags--span{
    color: #d4649a;
    padding: 0 0.5em;
    font-size: 18px;
}
.category__tags{
    color: #b1b1b1;
    font-size: 12px;
    text-transform: uppercase;
}
.category__tags:last-child{
    color: #d4649a;
}
.pageConteiner__title{
    font-size: 40px;
    line-height: 1;
    letter-spacing: -0.02em;
    font-weight: bold;
    color: #419fb9;
}
.pageConteiner__text{
    margin: 20px 0 20px;
    color: #414141;
    font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
    font-size: 18px;
    line-height: 1.5em;
    border-left: 4px solid rgb(255, 147, 199);
    padding-left: 20px;
}
.banner__img{
    width: 100%;
    height: auto;
    object-fit: cover;
}

.content{
    font-size: 16px;
    font-family: Merriweather, "Noto Serif", Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

:deep(.content p){
    margin: 12px 0;
    color: #414141;
    line-height: 2em;
    letter-spacing: 0.02em;
}
:deep(.content a){
    color: #414141;
    line-height: 2em;
    text-decoration: none;
    cursor:auto;
}
:deep(.content h2){
    margin: 24px 0 10px;
    padding: 8px 0 0;
    color: #419fb9;
    font-size: 32px;
    letter-spacing: 0.02em;
}
:deep(.content h3){
    margin: 24px 0 10px;
    padding: 8px 0 0;
    color: #419fb9;
    font-size: 24px;
    letter-spacing: 0.02em;
}
:deep(.content h4){
    margin: 24px 0 10px;
    padding: 8px 0 0;
    color: #419fb9;
    font-size: 20px;
}
:deep(.navContainer__list ul),
:deep(.content ul),
:deep(.content ol){
    list-style: none;
    margin-left: 24px;
    margin-right: 24px;
    line-height: 1.8;
}
:deep(.navContainer__list li),
:deep(.content li){
    list-style-type: disc;
    padding: 4px 0;
    color: #414141;
}
:deep(.content img){
    width: 100%;
    height: auto;
    object-fit: cover;
}

.navContainer__outline{
    background: repeating-linear-gradient( -45deg, transparent 0px, transparent 2px, #daf2f9 2px, #daf2f9 4px );
    width: 100%;
    height: 8px;
}

.navContainer__btn{
    padding: 16px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #414141;
}
.navContainer__btn label{
    margin-left: 4px;
    cursor: pointer;
}
.autor__info{
    margin: 8px 0 5px;
    padding: 0 0 8px;
    font-family: Merriweather, "Noto Serif", Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    color: #414141;
    font-size: 14px;
}
.autor__info--span{
    padding: 4px 0;
    color:#d4649a;
    font-weight: bold;
}
.autor__info--text{
    color: #414141;
    font-weight: normal;
    padding: 4px 0;
}

@media(max-width: 400px){
    :deep(.navContainer__list li){
        font-size: 13px;
    }
}
</style>