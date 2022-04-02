<template>
    <div id="preloader_5"></div>
</template>

<script>
export default {
    name: 'loading9'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#preloader_5{
    position:relative;
    width:30px;
    height:30px;
    background:#3498db;
    border-radius:50px;
    animation: preloader_5 1.5s infinite linear;
}
#preloader_5:after{
    position:absolute;
    width:60px;
    height:60px;
    border-top:10px solid #9b59b6;
    border-bottom:10px solid #9b59b6;
    border-left:10px solid transparent;
    border-right:10px solid transparent;
    border-radius:60px;
    content:'';
    top:-15px;
    left:-15px;
    animation: preloader_5_after 1.5s infinite linear;
}
@keyframes preloader_5 {
    0% {transform: rotate(0deg);}
    50% {transform: rotate(180deg);background:#2ecc71;}
    100% {transform: rotate(360deg);}
}
@keyframes preloader_5_after {
    0% {border-top:10px solid #9b59b6;border-bottom:10px solid #9b59b6;}
    50% {border-top:10px solid #3498db;border-bottom:10px solid #3498db;}
    100% {border-top:10px solid #9b59b6;border-bottom:10px solid #9b59b6;}
}
</style>