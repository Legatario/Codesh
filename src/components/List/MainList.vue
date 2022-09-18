<!-- template para mostrar todos os artigos -->
<template>
    <Loading v-show="!sectionDatas"/>
    <section>
            <article v-show="sectionDatas">
                <div class="card__info">
                    <p class="card__article--title">talla: <span>{{ size }}</span></p>
                    <p class="card__article--title">paginas: <span>{{ pageID }}/{{ pages }}</span></p>
                </div>
                <div class="card__destak" v-for="section in sectionDatas" :key="section.id" v-show="section.headline && section?.featured_media?.thumbnail" >
                    <a href="#">
                        <img :src="section?.featured_media?.thumbnail" :alt="section.title" v-show="section?.featured_media?.thumbnail" class="card__destake--img">
                        <div class="card__article">
                            <span class="card__article--title"> {{ section?.categories[0].name }} </span>
                            <h2 class="card__article--text">{{ section.title }}</h2>
                            <p class="card__article--span">{{ section.headline }}</p>
                        </div>
                    </a>
                </div>
                <!-- <div class="pagination">
                    <div class="pagination__left" v-show="pageID > 1">
                        <Button btnName="Anterior" @callEvent='Previous'/>
                    </div>
                    <div class="pagination__mid">
                        <span>{{ pageID }}</span>
                    </div>
                    <div class="pagination__right" v-show="pageID !== pages">
                        <Button btnName="Seguinte" @callEvent='Next' />
                    </div>
                </div> -->
                <Pagination :pageID="pageID" :maxPage="pages" @choicePage="onChoicePage"/>
            </article>
    </section>
</template>

<script>
import Loading from '../Loader/Loading.vue';
import Button from './Paginacao/Button.vue';
import Pagination from './Paginacao/Pagination.vue';
    export default{
    name: "MainList",
    data() {
        return {
            sectionDatas: null,
            localStorageDatas: null,
            size: null,
            pages: null,
            pageID: 10
        };
    },
    methods: {
        //chamada na api retorna uma lista com todos os posts
        async getList() {
            const req = await fetch("https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?&per_page=15");
            // const req = await fetch("https://api.beta.mejorconsalud.com/wp-json/mc/v1/")
            const data = await req.json();
            this.sectionDatas = data.data;
            this.size = data.size
            this.pages = data.pages
            // console.log(data)
            // fim da chamada de api
        },
        //função para buscar se o usuario fez uma busca, ele pega a informação pelo local storage depois dessa busca limpa o storage
        getLocalList() {
            let getTest = localStorage.getItem("searchInput");
            if (getTest !== null) {
                this.localStorageDatas = getTest;
                localStorage.clear();
                console.log(this.localStorageDatas);
                this.getSearchList();
            }
            else {
                this.getList();
            }
        },
        //função de busca na api atraves do que o usuario digitou
        async getSearchList() {
            const req = await fetch(`https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?search=${this.localStorageDatas}&page=${this.pageID}`);
            // const req = await fetch("https://api.beta.mejorconsalud.com/wp-json/mc/v1/")
            const data = await req.json();
            this.sectionDatas = data.data;
            this.size = data.size
            this.pages = data.pages
            console.log(data);
        },
        Previous(){
            console.log('1')
        },
        Next(){
            console.log('2')
        },
        onChoicePage(dados){
            console.log(dados)
        }
    },
    //chamada de função ao iniciar a pagina
    mounted() {
        this.getLocalList();
    },
    components: {
    Loading,
    Button,
    Pagination
}
}
</script>

<style scoped>

    .card__destak{
        border-bottom: 1px solid #ccc;
        margin-left: 2em;
        margin-right: 2em;
    }
    .card__destak:hover{
        background: rgba(0,0,0, .1);
    }
    .card__info{
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #ccc;
        margin-left: 2em;
        margin-right: 2em;
        margin-top:5em;
    }
    .pagination, 
    .pagination__left,
    .pagination__right,
    .pagination__mid{
       display: flex;
       align-items: center;
       justify-content: center;
    }

    .pagination__left{
        margin: auto;
        margin-left: 0;
    }

    .pagination__right{
        margin: auto;
        margin-right: 0;
    }

    .pagination{
        margin-top: 1em;
        margin-bottom: 3em;
    }

</style>