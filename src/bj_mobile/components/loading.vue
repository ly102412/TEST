<template>
	<div class="loader_mask">
        <div class="loader">
            <mt-spinner type="fading-circle" color="#2ab040" :size="60"></mt-spinner>
        </div>
    </div>
</template>
<script>
    import {Spinner} from 'mint-ui';
</script>
<style lang="scss" scoped>
    @import '../assets/css/common';
    .loader_mask{
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        .loader{
            width: 1.8rem;
            height: 1.8rem;
            float: right;
            position: fixed;
            left: 50%;
            top: 50%;
            margin-left: -0.9rem;
            margin-top: -0.9rem;
            overflow: hidden;
            background-color: rgba(0,0,0,0.12);

            border-radius: 0.2rem;
            z-index: 10000;
            span{
                position: absolute;
                left: 50%;
                top:50%;
                margin-left: -30px;
                margin-top: -30px;
            }
        }
    }
</style>















