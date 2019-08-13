window.onload = function () {
    new Vue({
        el: "#login",
        data: {
            isShow: false,
            toDo: "",
            isRegist: false
        },
        methods: {
            login() {
                this.toDo = "登录";
                this.isShow = true;
                this.isRegist = false;
            },
            regist() {
                this.toDo = "注册"
                this.isShow = true;
                this.isRegist = true;
            },
            close() {
                this.isShow = false;
            }
        },
        components: {
            "set": {
                template: "#use",
                props: ['todo']
            }
        }
    })
}