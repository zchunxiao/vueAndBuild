export default {
  data(){
      return {
          mixinData:"我是混入的数据"
      }
  },
  props:{},
  methods: {
      mixinMethod1(){
          console.log("我是混入的数据")
      }
  },
}