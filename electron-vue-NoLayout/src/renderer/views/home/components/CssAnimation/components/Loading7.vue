<template>
    <div id="preloader_3"></div>
</template>

<script>
export default {
    name: 'loading7'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#preloader_3{
    position:relative;
}
#preloader_3:before{
    width:20px;
    height:20px;
    border-radius:20px;
    background:blue;
    content:'';
    position:absolute;
    background:#9b59b6;
    animation: preloader_3_before 1.5s infinite ease-in-out;
}
#preloader_3:after{
    width:20px;
    height:20px;
    border-radius:20px;
    background:blue;
    content:'';
    position:absolute;
    background:#2ecc71;
    animation: preloader_3_after 1.5s infinite ease-in-out;
} 
@keyframes preloader_3_before {
    0% {transform: translateX(0px) rotate(0deg)}
    50% {transform: translateX(50px) scale(1.2) rotate(260deg); background:#2ecc71;border-radius:0px;}
      100% {transform: translateX(0px) rotate(0deg)}
}
@keyframes preloader_3_after {
    0% {transform: translateX(0px)}
    50% {transform: translateX(-50px) scale(1.2) rotate(-260deg);background:#9b59b6;border-radius:0px;}
    100% {transform: translateX(0px)}
}
</style>