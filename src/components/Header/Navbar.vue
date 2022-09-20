<template>
    <header>
        <div class="wrapper container">
            <RouterLink to="/" id="logoUrl">
                <img :alt="alt" class="logo" :src="logo" id="logo" />    
            </RouterLink>

            <nav>
                <Search @callsearch="callNav"/>
                <RouterLink to="/">Salud</RouterLink>
                <RouterLink to="/listviews">Artículos</RouterLink>
            </nav>
          </div>
          <div class="search" v-if="show">
            <div class="serarch__container">
              <img :src="icon" alt="searc" id="iconSearch">
              <input type="text" class="search__input"  v-on:keyup.enter="onEnter" v-model="inputSearch">
            </div>
          </div>
    </header>
</template>

<script>
import Search from './Search.vue';
    export default{
    name: "Navbar",
    props: ["logo", "alt"],
    components: { 
        Search
     },
     data(){
      return{
        icon: 'https://github.com/Legatario/Codesh/blob/master/public/img/lupa.png?raw=true',
        show: false,
        inputSearch:''
      }
     },
     methods:{
      //cria um painel com o input para o usuario digitar, ou remove esse painel
        callNav(){
          this.show = !this.show
        },
        // função para colocar o que o usuario digitou no localStorage e posicionar o usuario para a pagina de listas
        onEnter(){
          if(this.inputSearch !== ''){
            localStorage.setItem('searchInput', this.inputSearch);
            this.inputSearch = '';
            this.show = !this.show
            window.location.pathname == "/Codesh/listviews" ? this.$router.go('/listviews') : this.$router.push('/listviews')
          }
        }
     }
}
</script>

<style scoped>
    header{
        margin-top: 0px;
        box-shadow: rgb(0 0 0 / 25%) 0px -4px 24px;
        transition: transform 0.8s ease 0s;
    }
    .wrapper{
      background: #fff;
      padding: 15px ;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      transition: .5s;
    }
  
     #logoUrl{
      margin: auto;
      margin-left: 0;
    }
    nav{
      display: flex;
    }
    nav a{
      color: #419fb9;
      text-decoration: none;
      margin: 12px;
      transition: .5s;
    }
    nav a:hover{
      color: #ff93c7;
    }

    .search{
      width: 100%;
      display: flex;
      padding: 1em 0;
      align-content: center;
      justify-content: center;
      align-items: center;
      transition: .5s;
    }

    #iconSearch{
      width: 16px;
      height: 16px;
      opacity : 0.8;
      margin: 0 0.5em;
    }
    .serarch__container{
      background: rgb(226, 223, 223);
      border-radius: 15px;
      display: flex;
      align-items: center;
    }
    .search__input{
      border: none;
      min-width: 400px;
      padding: 5px;
      color: #183d46;
      background: rgb(226, 223, 223);
      border-radius: 15px; 
    }
    .search__input:focus{
      outline: none;
    }
    @media(max-width: 500px){

      .serarch__container{
        width: 80%;
      }
      .search__input{
        min-width: 150px;
      }
    }
    @media(max-width: 400px){
      .wrapper{
        padding: 15px 5px;
      }
      nav{
        font-size: 14px;
      }
      nav a{
        margin: 12px 10px
      }
    }
  </style>