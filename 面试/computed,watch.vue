<template>
  <div>
    <div>{{ message }}</div>
    <div>{{ reverseMessage }}</div>
    <div>{{ sliceMessage }}</div>
    <button @click="change()">change</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello",
      sliceMessage: "1",
    };
  },
  //watch是监听message数据变化,执行函数体内操作
  watch: {
    message: function () {
      this.sliceMessage = this.message.charAt(3);
    },
  },
  //computed是通过判断reverseMessage的依赖来进行调用,当reverseMessage依赖的message发生变化时,所有依赖reversedMessage的绑定也能更新
  computed: {
    reverseMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    change() {
      this.message = "thorns";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>