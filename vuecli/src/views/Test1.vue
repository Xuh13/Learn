<template>
    <div>
        <h1>Test1</h1>
        <span>{{$store.getters.sum}}{{$route.params.name}}{{$route.params.job}}</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>