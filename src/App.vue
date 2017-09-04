<template>
    <div id="app">
        <vue-image-gallery :banner="banners" :distance_min="distanceMin" :icon="icons"></vue-image-gallery>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                banners:[
                    {url:'https://unsplash.it/458/354?image=0',content:'这是一个张图片'},
                    {url:'https://unsplash.it/458/354?image=1',content:'这是二个张图片'},
                    {url:'https://unsplash.it/458/354?image=2',content:'这是三个张图片'},
                    {url:'https://unsplash.it/458/354?image=3',content:'这是四个张图片'},
                    {url:'https://unsplash.it/458/354?image=4',content:'这是五个张图片'},
                ],
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
