<template>
    <div>
        <button @click="$emit('callsearch')"><img :src="icon" alt="lupa"></button>
    </div>
</template>

<!-- callset manda o input para o component solicitante  -->

<script>
    
    export default{
        name: 'Search',
        data(){
            return{
                icon: '/img/lupa.png',
                emits: ['callsearch']
            }
        }
       
    }
</script>


<style scoped>
    div{
        display: flex;
    }
    button{
        border: none;
        background: transparent;
        cursor: pointer;
    }
    img{
        width: 16px;
        height: 16px;
        opacity : 0.8;
    }
</style>