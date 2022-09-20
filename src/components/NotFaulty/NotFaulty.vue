<template>
    <section class="notFaulty__img">
        <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg?format=750w" alt="404">
        <article class="notFaulty__container">
            <h1 class="notFaulty__container--title">AWW... NO LLORES.</h1>
            <p class="notFaulty__container--text">No se encontraron resultados para {{ localStorageDatas }}</p>
        </article>
    </section>
</template>

<script>
    export default{
        name: 'NotFaulty',
        props:['localStorageDatas']
    }
</script>

<style scoped>
    .notFaulty__img{
        padding: 15px 0;
        min-height: 50vw;
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
    }
    .notFaulty__img img{
        width: 60%;
        height: 100%;
    }
    .notFaulty__container--title{
        text-align: center;
        font-size: 2.5vw;
        margin-bottom: .5em;
    }
    .notFaulty__container--text{
        text-align: center;
        font-size: .9vw;
        color: rgb(151, 150, 150)
    }
    @media(max-width: 800px){
        .notFaulty__img{
            flex-direction: column;
            min-height: 80vw;
        }
        .notFaulty__img img{
            width: 60%;
            height: 100%;
        }
        .notFaulty__container--title{
            font-size: 9vw;
        }
        .notFaulty__container--text{
            font-size: 4vw;
        }
        .notFaulty__container{
            margin: 2em 0;
        }
    }
    @media(max-width: 400px){
        .notFaulty__img{
            min-height: 100vw;
            padding: 3rem 0;
        }
        .notFaulty__img img{
        width: 100%;
        height: 100%;
    }
    }
</style>