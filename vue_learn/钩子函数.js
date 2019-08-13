window.onload = function () {
    let vm = new Vue({
        el: "#aaa",
        data: {
            count: 0,
            studentList:[]
        },
        methods: {
            add(){
                this.count++;
            },
            destroye(){
                //销毁Vue实例
                this.$destroy(true);
            }
        },
        beforeCreate() {
            console.log("beforeCreate",this.$el,this.$data)
        },
        created() {
            console.log("created",this.$el,this.$data)
        },
        beforeMount() {
            console.log("beforeMount",this.$el,this.$data)
        },
        mounted() {
            console.log("mounted",this.$el,this.$data)
        },
        beforeUpdate() {
            console.log("beforeUpdate",this.$el,this.$data)
        },
        updated() {
            console.log("updated",this.$el,this.$data)
        },
        beforeDestroy() {
            console.log("beforeDestroy",this.$el,this.$data)
        },
        destroyed() {
            console.log("destroyed",this.$el,this.$data)
        },
    })
}