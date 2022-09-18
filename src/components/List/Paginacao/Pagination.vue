<template>
    <nav class="navList" :v-show="maxPage > 0">
        <div class="prev">
            <div class="prev-btn" v-for="(p, index) in pageID" :key="index">
                <button v-if="index <= limitationList && p-1 != 0" @click="paginationFunction(pageID-index)"> {{ pageID-index }} </button>
            </div>
        </div>
        <button class="current">{{ pageID }}</button>
        <div class="next">
            <div class="next-btn" v-for="(index) in maxPage" :key="index">
                <button v-if="index <= limitationList && pageID+index < maxPage" @click="paginationFunction(pageID+index)"> {{ pageID+index }} </button>
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        name: 'Pagination',
        props:['pageID','maxPage'],
        data(){
            return{
                limitationList: 5,
            }
        },
        methods:{
            paginationFunction(dados){
            this.$emit(`choicePage`, dados)
        }
        }
    }
</script>

<style scoped>
    .navList{
        display: flex;
        justify-content: center;
    }
    .prev{
        display: flex;
        flex-direction: row-reverse;
    }
    .next{
        display: flex;
    }
</style>