window.onload = function () {
    
    Vue.component("mycomponents", {
        template: "#temp",
        data(){
            return {
                count:0
            }
        },
        methods: {
            add(){
                this.count++;
            }
        },
    })
    new Vue({
        el: "#aaa",
        data: {

        },
        method: {

        },
        components: {
            "mycomponent":{
                template: "<div>hahaha</div>", 
                props:['try']
            }
        }
    })
}