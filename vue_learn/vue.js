window.onload = function () {
    var em = new Vue({
        el: "#aaa",
        data: {
            side: "bbb",
            mai: "ccc"
        },
        methods: {
            doc: function () {
                return this.side + "ddd";
            }
        }
    })

    new Vue({
        el: '#bbb',
        data: {
            use: false
        }
    })

    new Vue({
        el:'#ccc',
        data:{
            data1:[
                {name:"123"},
                {name:18},
                {name:0}]
            
        }
    })
}