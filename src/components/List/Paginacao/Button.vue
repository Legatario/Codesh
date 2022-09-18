<template>
    <button class="btn" @click="$emit('callEvent')">{{ btnName }}</button>
</template>

<script>
    export default{
        name: 'Button',
        props:['btnName'],
        emits:['callEvent']
    }
</script>


<style scoped>
    .btn{
        border: none;
        background:  #419fb9;
        color: #fff;
        border:  #fff 1px solid;
        padding: 5px;
        cursor: pointer;
        height: auto;
        border-radius: 20px;
        transition: 1s;
    }

    .btn:hover{
        color:  #183d46;
        border: #183d46 1px solid;
    }
</style>