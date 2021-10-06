export default {
    bind: function(el,binding) {
        //钩子函数
        el.style.color =binding.value
        console.log("bind");
      } 
}