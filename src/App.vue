<template>
    <div id="app">
        <vue-image-gallery :banner="banner" :distanceMin="distanceMin" :icon="icons"></vue-image-gallery>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                banner: ['http://img1.imgtn.bdimg.com/it/u=950408042,948824975&fm=11&gp=0.jpg', 'http://img3.imgtn.bdimg.com/it/u=4109419760,2883302339&fm=11&gp=0.jpg', 'http://img0.imgtn.bdimg.com/it/u=2212695692,2311176260&fm=26&gp=0.jpg'],
                distanceMin: 10,
                icons: '../../dist/xiangxia.png'
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
