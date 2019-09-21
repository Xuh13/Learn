<template>
    <div>
        <h2>Mine</h2>
        <div>Name:{{$route.params.name}}</div>
        <div>Age:{{$route.params.age}}</div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        created() {
            // console.log(this.$route.params.name);
        },
    }
</script>

<style lang="scss" scoped>

</style>