<template>
    <section class="section">
        <div class="loader"></div>
    </section>
</template>

<script>
    export default{
        name: 'Loading'
    }
</script>

<style scoped>
    .section{
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        height: 80vw;
    }
    .loader{
        border: 8px solid rgba(0, 0, 0, 0.1);
        border-top-color: #419fb9;
        border-radius: 50%;
        height: 60px;
        width: 60px;
        animation: loader 1s linear infinite;
    }

    @keyframes loader{
        to{
            transform: rotate(360deg);
        }
    }
    @media(max-width: 800px){
        .section{
            height: 100vw;
        }
    }
    @media(max-width: 400px){
        .section{
            height: 200vw;
        }
    }
</style>

