<template>
    <div class="load">
    <mt-spinner :type="1" color="#2ab040" class="icon-load" :size="32"></mt-spinner>
    <span>加载中...</span>
</div>
</template>
<style lang="scss" scoped>
    @import '../assets/css/common';
    .load{
        position: fixed;
        left:50%;
        bottom:0.5rem;
        color: $color-green;
        font-size: 0.3rem;
        .icon-load{
            display: inline-block;
            position: absolute;
            top:-0.1rem;
            left: -0.75rem;
        }
    }
</style>
<script>
    import {Spinner} from 'mint-ui';
</script>
