<!--  -->
<template>
  <div class="home">
    <p class="text">透过字体给读者更多关爱</p>
    <div v-color:[params]="color">首页</div>
    <HelloWorld />
    <child name="zhangsan" age="14" />
    <el-button type="success" class="btn">按钮</el-button>
    <input v-model="firstName" />
    <p>{{ fullName }}</p>
    <p>{{ fullNameByMethod() }}</p>
    <router-link to="/page1">页面1</router-link>
  </div>
</template>

<script>
import child from "./components/child.vue";
import mixins from "@/mixins";
import { fetchList } from "@/api/home";
export default {
  data() {
    return {
      num: 1,
      color: "yellow",
      params: "left",
      firstName: "zhang",
      lastName: "san",
    };
  },

  components: {
    child,
  },
  mixins: [mixins],
  //   directives: {
  //     color: {
  //       bind: function(el,binding) {
  //         //钩子函数
  //         el.style.color =binding.value
  //         console.log("bind");
  //       },

  //     },
  //   },
  computed: {
    fullName() {
      return `${this.firstName}:${this.lastName}`;
    },
  },

  created() {},

  mounted() {
    console.log("this:", this);
    fetchList("101225558706,100799240619").then((res) => {
      console.log("res:", res);
    });
  },

  watch: {
    num: {
      immediate: true,
      handler(newVal, oldVal) {
        console.log("newVal,oldVal:", newVal, oldVal);
      },
      deep: true,
    },
  },
  methods: {
    fullNameByMethod() {
      const { firstName, lastName } = this;
      return `${firstName}:${lastName}`;
    },
  },
};
</script>
<style scoped lang="scss">
.home {
  font-family: "my-font";
  // color: $theme-color;
}
.text{
  font-size: 40px;
}
</style>
