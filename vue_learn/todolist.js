window.onload = function () {
    var vm = new Vue({
        el: "#container",
        data: {
            proList: [{
                    name: 'aaa',
                    price: 111,
                    isSelect: false
                },
                {
                    name: 'bbb',
                    price: 222,
                    isSelect: false
                },
                {
                    name: 'ccc',
                    price: 333,
                    isSelect: false
                },
                {
                    name: 'ddd',
                    price: 444,
                    isSelect: false
                }
            ],
            showList: [{
                    name: 'aaa',
                    price: 111,
                    isSelect: false
                },
                {
                    name: 'bbb',
                    price: 222,
                    isSelect: false
                },
                {
                    name: 'ccc',
                    price: 333,
                    isSelect: false
                },
                {
                    name: 'ddd',
                    price: 444,
                    isSelect: false
                }
            ],
            name: '',
            price: '',
            seaVal: '',
            totalPrice: 0
        },
        methods: {
            add() {
                this.proList.push({
                    name: this.name,
                    price: parseInt(this.price),
                    isSelect: false
                });
                this.showList = [...this.proList];
                this.name = '';
                this.price = '';
            },
            search() {
                var searchList = this.proList.filter((obj, index) => {
                    return obj.name.includes(this.seaVal);
                })
                this.showList = [...searchList];
            },
            change(obj) {
                obj.isSelect = !obj.isSelect;
                this.proList = [...this.showList];
                if(obj.isSelect){
                    this.totalPrice += obj.price;
                }
                else{
                    this.totalPrice -= obj.price;
                }
            },
            delate() {
                totalPrice = 0;
                var result = this.proList.filter(function (obj) {
                    return obj.isSelect == false;
                });
                this.proList = [...result];
                this.showList = [...result];
                this.total();
            },
            total() {
                var total_price = 0;
                this.showList.forEach(function (obj, index) {
                    if (obj.isSelect==true) {
                        total_price += obj.price;
                    }
                });
                this.totalPrice = total_price;
            }
        }
    })
}