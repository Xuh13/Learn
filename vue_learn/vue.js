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
        el: '#ccc',
        data: {
            data1: [{
                    name: "123"
                },
                {
                    name: 18
                },
                {
                    name: 0
                }
            ]

        }
    })

    new Vue({
        el: "#model",
        data: {
            text: "haha"
        }
    })

    new Vue({
        el: "#ddd",
        data: {
            hobby: [],
            school: "理工"
        }
    })

    new Vue({
        el: "#eee",
        data: {
            text: "",
            show: [{
                name:"123",
                change:false,
                dlt:true
            }]
        },
        methods: {
            add() {

                this.show.push({
                    name :this.text,
                    change:false,
                    dlt:true
                });
                this.text = "";
            },
            color(index) {
                index.change = !index.change;
            },
            delate(index){
               index.dlt=!index.dlt;
            }
        }
    })
}