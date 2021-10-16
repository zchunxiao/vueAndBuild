export default {
    data() {
        return {
            mixinData: "我是混入的数据"
        }
    },
    props: {},
    mounted() {
        console.log('this:', this);-
        console.log("ddd:",this.fullNameByMethod());
    },
    methods: {
        mixinMethod1() {
            console.log("我是混入的数据")
        }
    },
}