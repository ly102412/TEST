<template>
	<div>
    <transition :name="transition">
        <router-view class="router-view"></router-view>
    </transition>
	</div>
</template>

<script>
  export default{
    data () {
      return {
        transition: 'slide-left' 
      }
    },
    watch: {
      '$route' (to,from){
          this.transition = this.checkDirecition(to.name, from.name)
            && 'slide-left' || 'slide-right'
          }
    },
    methods: {
      checkDirecition (to, from){
        let map = ['index','detailedList','message','mycoupon','explain','usedcoupon','charge'];
        return (map.indexOf(to) - map.indexOf(from)) > 0;
      }
    }
  }
  
</script>
<style lang="less" scoped>
  .router-view {
    width:100%;
    height:100%;
    min-height: 10rem;
    position: absolute;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
</style>
