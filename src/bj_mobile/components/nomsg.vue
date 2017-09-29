<template>
    <div class="List_none">
        <i></i>
        <p>{{msg}}</p>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../assets/css/common';
    .List_none {
        width: 100%;
        position: absolute;
        top: 3.8rem;
        overflow: hidden;
        i {
            width: 0.87rem;
            height: 0.93rem;
            display: block;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            margin:0 auto;
        }
        p {
            text-align: center;
            font-size: 0.28rem;
            color: $color-boder;
            margin-top: 0.3rem;
        }
    }

</style>
<script>
    export default{
        props:['msg']
    }
</script>
