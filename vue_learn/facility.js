window.onload = function () {
    new Vue({
        el: "#app",
        data: {
            payList: [{
                    name: '沙发',
                    price: '100'
                },
                {
                    name: 'wifi',
                    price: '50'
                },
                {
                    name: '电脑',
                    price: '200'
                },
            ],
            totalList: [{
                name: '群力花园豪华型',
                price: '400'
            }],
            isCheck: false
        },
        methods: {
            clear() {
                if(this.isCheck){
                    this.totalList.splice(1);
                }
            },
            total() {
                var a = 0;
                this.totalList.forEach((obj) => {
                    a += parseInt(obj.price);
                });
                return a;
            }
        }
    })
}