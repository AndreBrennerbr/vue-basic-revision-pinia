<script setup>
    import { useCounterStore } from '@/stores/counter';
    const count = useCounterStore();
</script>


<template>
    <h1 class="description">Adicione ao Cart:</h1>
    <div class="cont-btn">
        <button @click="count.increment(1)">+1</button> 
        <button @click="count.increment(2)">+2</button>
        <button @click="count.increment(4)">+4</button>
        <button @click="count.increment(8)">+8</button>
        <button @click="count.increment(16)">+16</button>    
    </div>
    <div class="cont-btn m-top">
        <button @click="count.zerar">Zerar</button>
    </div>
</template>

<style scoped>
.cont-btn button{
    padding: 5px;
    width: 4rem;
}

.m-top{
    margin-top: 10px;
}

.cont-btn{
    display: flex;
    justify-content: center;
    align-items:center;
    gap:10px;
}

.description{
    display: flex;
    justify-content: center;
    align-items:center;
    font-weight: bold;

}
</style>