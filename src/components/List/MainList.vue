<!-- template para mostrar todos os artigos -->
<template>
    <Loading v-show="!sectionDatas"/>
    <Msg :msg="msg" v-show="contMsg == 1 && size > 0"/>
    <NotFaulty v-show="size == 0" :localStorageDatas="localStorageDatas" />    
    <section>
            <article v-show="sectionDatas && size > 0">
                <div class="card__info">
                    <p class="card__article--title">paginas: <span>{{ pageID }}/{{ pages }}</span></p>
                </div>
                <div class="card__destak" v-for="section in sectionDatas" :key="section.id" v-show="section.headline && section?.featured_media?.thumbnail && section?.categories.length > 0" >
                    <RouterLink :to="{path: `/articulo/${section.id}`}"> 
                        <img :src="section?.featured_media?.thumbnail" :alt="section.title" v-show="section?.featured_media?.thumbnail" class="card__destake--img">
                        <div class="card__article">
                            <span class="card__article--title" v-if="section?.categories.length > 0"> {{ section?.categories[0].name }} </span>
                            <h2 class="card__article--text">{{ section.title }}</h2>
                            <p class="card__article--span">{{ section.headline }}</p>
                        </div>
                    </RouterLink>
                </div>
                <div class="pagination">
                    <aside class="pagination__container">
                        <div class="pagination__left" v-show="pageID > 1">
                            <Button btnName="<<" @callEvent='Previous'/>
                        </div>
    
                        <Pagination :pageID="pageID" :maxPage="pages" @choicePage="onChoicePage"/>
    
                        <div class="pagination__right" v-show="pageID !== pages">
                            <Button btnName=">>" @callEvent='Next' />
                        </div>
                    </aside>
                </div>
            </article>
    </section>
</template>

<script>
import Loading from '../Loader/Loading.vue';
import Button from './Paginacao/Button.vue';
import Pagination from './Paginacao/Pagination.vue';
import Msg from './Msg.vue';
import NotFaulty from '../NotFaulty/NotFaulty.vue';
    export default{
    name: "MainList",
    data() {
        return {
            sectionDatas: null,
            localStorageDatas: null,
            size: null,
            pages: null,
            pageID: 1,
            msg: null,
            contMsg: 0
        };
    },
    methods: {
        //chamada na api retorna uma lista com todos os posts
        async getList() {
            const req = await fetch(`https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?&per_page=15&page=${this.pageID}`);
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

            //criando msg
            this.msg = `Se encontraron ${this.size} artículos`
            this.contMsg = this.contMsg+1
            //limpa msg
            setTimeout(()=> this.contMsg = this.contMsg+1 , 3000)

            // console.log(data);
        },
        Previous(){
            this.sectionDatas = null
            this.pageID = 1;
            if(this.localStorageDatas !== null){
                this.getSearchList();
            }else{
                this.getList();
            }
        },
        Next(){
            this.sectionDatas = null
            this.pageID = this.pages;
            if(this.localStorageDatas !== null){
                this.getSearchList();
            }else{
                this.getList();
            }
        },
        //função de paginação
        onChoicePage(dados){
            this.sectionDatas = null
            this.pageID = dados;
            if(this.localStorageDatas !== null){
                this.getSearchList();
            }else{
                this.getList();
            }
        }
    },
    //chamada de função ao iniciar a pagina
    mounted() {
        this.getLocalList();
    },
    components: {
    Loading,
    Button,
    Pagination,
    Msg,
    NotFaulty
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
    .pagination__container, 
    .pagination__left,
    .pagination__right,
    .pagination__mid{
       display: flex;
       align-items: center;
       justify-content: center;
    }

    .pagination__container{
        border-radius: 15px;
        padding: 0.5em;
        margin: .5em 0;
    }
</style>