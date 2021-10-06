<!--  -->
<template>
  <div>我是子组件:{{name}}</div>
</template>

<script>
export default {
  name: "child",
  data() {
    return {};
  },
  props: {
    name: {
      required: true,
      default: "zhangsan",
      type: String,
      validator(val) {
        return ["zhangsan","lisi", "wangwu"].indexOf(val) > -1;
      },
    },
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {},
};
</script>
<style scoped></style>
