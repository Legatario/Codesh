<!-- componente de msg pegando o texto que foi enviado -->

<template>
    <div class="message-container">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default{
        name: 'Msg',
        props:{
            msg: String
        }
    }
</script>

<style scoped>
    .message-container{
        color: #004085;
        background: #cce5ff;
        border: 2px solid #b8daff;
        border-radius: 5px;
        max-width: 400px;
        margin: 30px auto;
        padding: 10px;
        text-align: center;

    }
    @media(max-width: 400px){
        .message-container{
            max-width: 80%;
        }
    }
</style>