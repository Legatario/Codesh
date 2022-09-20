<template>
    <Loading v-show="!articleDatas"/>
    <div class="carrosel">
        <div class="card__container" v-for="article, index, in articleDatas" :key="article.id" v-show="article.headline && article?.featured_media?.thumbnail && index <= 5" >
            <RouterLink :to="{path: `/articulo/${article.id}`}">
                <img :src="article?.featured_media?.thumbnail" :alt="article.title" v-show="article?.featured_media?.thumbnail" class="card__container--img">
                <div class="card__article">
                    <h2 class="card__article--title">{{ article?.categories[0].name }}</h2>
                    <p class="card__article--text">{{ article.title }}</p>
                </div>
            </RouterLink>
        </div>
    </div>

    <main class="gridHightlight">
        <div class="gridHightlight__content" v-for="(mainArticle, index) in mainArticleDatas" :key="mainArticle.id" v-show=" index <= 4 && mainArticle?.featured_media?.thumbnail">
            <RouterLink :to="{path: `/articulo/${mainArticle.id}`}"> 
                <img :src="mainArticle?.featured_media?.thumbnail" :alt="mainArticle.title" v-show="mainArticle?.featured_media?.thumbnail" class="gridHightlight__content--img">
                <div class="gridHightlight__article">
                    <h2 class="gridHightlight__article--title">{{ mainArticle.title }}</h2>
                    <p class="gridHightlight__article--text">{{ mainArticle.headline }}</p>
                </div>
            </RouterLink>
        </div>
    </main>

    <section>
        <h1 id="destak">Destacados</h1>
            <article>
                <div class="card__destak" v-for="section in sectionDatas" :key="section.id" v-show="section.headline && section?.featured_media?.thumbnail" >
                    <RouterLink :to="{path: `/articulo/${section.id}`}"> 
                        <img :src="section?.featured_media?.thumbnail" :alt="section.title" v-show="section?.featured_media?.thumbnail" class="card__destake--img">
                        <div class="card__article">
                            <span class="card__article--title"> {{ section?.categories[0].name }} </span>
                            <h2 class="card__article--text">{{ section.title }}</h2>
                            <p class="card__article--span">{{ section.headline }}</p>
                        </div>
                    </RouterLink>
                </div>
            </article>
    </section>

</template>

<script>
import Loading from '../Loader/Loading.vue';
    export default{
    name: "Dashboard",
    data() {
        return {
            pages: null,
            articleDatas: null,
            mainArticleDatas: null,
            sectionDatas: null
        };
    },
    methods: {
        //chamada na api para pegar o total de pages
        async getSalut() {
            const req = await fetch("https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts");
            // const req = await fetch("https://api.beta.mejorconsalud.com/wp-json/mc/v1/")
            const data = await req.json();
            this.pages = (data.pages) - 1;
            this.getSalutNew();
        },
        //chamada de api para pegar as ultimas noticias com um delay de uma uma pagina
        async getSalutNew() {
            const req = await fetch(`https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?&page=${this.pages}`);
            const data = await req.json();
            this.articleDatas = data.data;
        },
        //chamada na api para mostar os artigos page 2 e per_page fui usado para entender estes comandos
        async getMain() {
            const req = await fetch("https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?&page=2per_page=6");
            const data = await req.json();
            this.mainArticleDatas = data.data;
        },
        //chama na api para pegar os posts mais relevantes
        async getDestak() {
            const req = await fetch("https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?&orderby=relevance");
            const data = await req.json();
            this.sectionDatas = data.data;
        },
        //função para entender a API
        // async getConsult() {
        //     const req = await fetch("https://api.beta.mejorconsalud.com/wp-json/mc/v1/");
        //     const data = await req.json();
        //     console.log(data);
        // }
    },
    mounted() {
        // this.getConsult();
        this.getSalut();
        this.getMain();
        this.getDestak();
    },
    components: { Loading }
}
</script>

<style>
    .carrosel{
        display: flex;
        margin: 8px 0;
        padding: 0;
        justify-content: space-between;
        align-content: stretch;
        overflow-x: auto;
        margin-left: -16px;
        margin-right: -16px;
        margin-bottom: 8px;
        padding-left: 26px;
        padding-right: 16px;
        width: 99%;
    }
    .card__container{
        min-width: 213px;
        max-width: 213px;
        flex: 1 1 25%;
        border: 1px solid transparent;
        margin-right: 16px;
    }
    .card__container a,
    .gridHightlight__content a,
    .card__destak a{
        cursor: pointer;
        color: -webkit-link;
        text-decoration: none;
        outline: none;
    }
    .card__container--img{
        width: 100%;
        height: 200px;
    }
    .card__article{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        margin-left: 1em;
    }
    .card__article--title{
        font-size: 12px;
        color: #419fb9;
    }
    .card__article--text,
    .gridHightlight__article--title{
        color: #183d46;
        font-size: 22px;
        line-height: 1.2;
        font-weight: bold;
    }
    .gridHightlight__article--title{
        font-size: 20px;
    }
    .card__article--text:hover,
    .gridHightlight__article--title:hover{
        transition: color 250ms ease-in-out;
        color: #d4649a
    }

    .gridHightlight__article--text,
    .card__article--span{
        font-size: 16px;
        color: #414141;
        line-height: 1.7;
    }
    .gridHightlight{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        padding: 10px;
        margin: 0 auto;
    }
    .gridHightlight >div:first-child{
        grid-column: 1/2;
        grid-row: 1/4;
        display: flex;
        flex-direction: row-reverse;
    }
    
    .gridHightlight__content a,
    .card__destak a{
        display: flex;
        width: 100%;
        min-height: 130px;
        
    }
    .gridHightlight__article{
        padding: 8px 4px 8px 12px;
    }
    .gridHightlight__article--text{
        margin-top: 4px
    }
    .gridHightlight >div:first-child a{
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 500px;
        align-items: center;
    }
    .gridHightlight a img{
        height: 138px;
        width: 160px;
    }
    .card__destake--img{
        max-width: 150px;
        max-height: 150px;
    }
    .gridHightlight >div:first-child a img{
        width: 100% !important;
        height: 70%;
        padding-left: 12px;
    }

    .card__destak{
        padding: 1em;

    }
    #destak{
        text-align: center;
        border-bottom: 1px dotted #d4649a;
        margin: 2rem 5em
    }
    @media(max-width: 800px){
        .gridHightlight{
            display: flex;
            flex-direction: column;
        }
        .gridHightlight >div:first-child{
            display: flex;
            justify-content: center;
        }
        .gridHightlight >div:first-child a{
            display: flex;
            justify-content: center;
            max-height: 250px;
            max-width: 500px;
            align-items: center;
        }
    }
    @media(max-width: 600px){
        .card__destak a{
            flex-direction: column;
        }
        .card__destake--img{
            height: auto;
            width: 100%;
            max-width: 100%;
            max-height: 100%;

        }
        #destak{
            margin: 2rem 16px;
        }
        .card__article{
            margin-top: 1em;
        }
        .gridHightlight >div:first-child a img{
            height: 0 auto;
        }

    }
    @media(max-width: 400px){
        .gridHightlight__content a{
            flex-direction: column;
        }
    }
</style>