<template>
    <div>
        <div class="rotate-animate"></div>
    </div>
</template>

<script>
export default {
    name: 'loading'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .rotate-animate {
        border:16px solid #f3f3f3;
        border-radius:50%;
        border-top:16px solid #2842d8;
        width:60px;
        height:60px;
        animation:rotate 1s linear infinite;
    }
    @keyframes rotate{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform:rotate(360deg);
        }
    }
</style>