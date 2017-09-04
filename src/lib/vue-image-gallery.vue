<template>
    <div class="album-lists">
        <ul class="am-gallery">
            <li class="item" v-for="(item,index) in banner" :key="index" @click="selectOne(index)">
                <div class="am-gallery-item">
                  <span>
                    <img :src="item.url"/>
                  </span>
                </div>
            </li>
        </ul>

        <transition name="list">
            <div class="mask" v-show="isShow">
                <p @click="hide" class="hide">
                    <img :src="icon"/>
                </p>
                <div class="swipe" @touchstart="touchstart" @touchend="touchend">
                    <ul class="img-content" ref="imgs" :style="{width:banner.length*100+'%'}">
                        <li v-for="(item,index) in banner" :key="index" :style="{width:100/banner.length+'%'}">
                            <img :src="item.url"/>
                        </li>
                    </ul>
                </div>
                <div class="img-current">
                    <div class="contents">
                        {{thisContent}}
                    </div>
                    <p class="current">{{current}}/{{banner.length}}</p>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        name: 'vue-image-gallery',
        props: {
            banner: {
                type: Array,
                default: [

                ]
            },
            distance_min: {
                type: Number,
                default: 30
            },
            icon: {
                type: String,
                default: '../../dist/xiangxia.png'
            }
        },
        data() {
            return {
                /*banner:[
                    {url:'https://unsplash.it/458/354?image=0',content:'这是一个张图片'},
                    {url:'https://unsplash.it/458/354?image=1',content:'这是二个张图片'},
                    {url:'https://unsplash.it/458/354?image=2',content:'这是三个张图片'},
                    {url:'https://unsplash.it/458/354?image=3',content:'这是四个张图片'},
                    {url:'https://unsplash.it/458/354?image=4',content:'这是五个张图片'},
                ],*/
                isShow: false,
                current: 1,
                count: 0,
                startTX: 0,
                endTX: 0,
                windowWith: 0,
                distance: 0,
                banlen: 0,
                //distance_min: 30,
                isLoading: true,
                thisContent: ''
            }
        },
        methods: {
            selectOne(index) {
                this.$refs.imgs.style.marginLeft = -(index * 100) + '%'
                this.current = index + 1;
                this.swipe = []
                this.count = index
                this.isShow = true
                this.thisContent = this.banner[this.count].content
            },
            touchstart(e) {
                this.startTX = e.touches[0].clientX
            },
            touchend(e) {
                this.windowWith = document.body.clientWidth
                this.endTX = e.changedTouches[0].clientX
                this.endTX = this.endTX < 0 ? 0 : this.endTX > this.windowWith ? this.windowWith : this.endTX
                this.distance = this.endTX - this.startTX
                this.banlen = this.banner.length

                if (this.distance < 0 && Math.abs(this.distance) > this.distance_min) {
                    const banLen = this.banlen
                    this.count = this.count + 1 >= banLen ? banLen - 1 : this.count + 1
                    this.current = this.current + 1 >= banLen ? banLen : this.current + 1
                    const imgs = this.$refs.imgs
                    imgs.style.marginLeft = -(this.count * 100) + '%'
                } else if (this.distance > 0 && Math.abs(this.distance) > this.distance_min) {
                    this.count = this.count - 1 <= 0 ? 0 : this.count - 1
                    this.current = this.current - 1 <= 0 ? 1 : this.current - 1
                    const imgs = this.$refs.imgs
                    imgs.style.marginLeft = -(this.count * 100) + '%'
                }
                this.thisContent = this.banner[this.count].content
            },
            hide() {
                this.isShow = false
            }
        },
        mounted() {

        }
    }

</script>
<style scoped lang="less">
    .am-gallery {
        padding: 5px 5px 0 5px;
        list-style: none;
    }

    .album-lists .item {
        width: calc(100% / 4.3);
        float: left;
        margin-right: 12px;
        border-radius: 5px;
        margin-bottom: 12px;
        height: 12.5vh;
        overflow: hidden;
        position: relative;
    }

    .album-lists ul {
        overflow: auto;
    }

    .album-lists .item img {
        width: 100%;
        -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .35);
        box-shadow: 0 0 3px rgba(0, 0, 0, .35);
    }

    .mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .95);
        width: 100%;
        overflow: hidden;
        &.list-enter-active, &.list-leave-active {
            transition: all 0.2s linear;
        }
        &.list-enter, &.list-leave-to {
            opacity: 0;
            top: calc(100vh);
        }
        .hide {
            margin: .3rem .2rem;
            display: block;
            width: 36px;
            img {
                width: 100%;
            }
        }
        .swipe {
            width: 100%;
            position: absolute;
            top: 50%;
            margin-top: -45%;
        }
        .img-content {
            width: 500%;
            transition: all 0.2s linear;
            li {
                float: left;
                width: 20%;
                img {
                    width: 100%;
                    display: block;
                }
            }
        }
        .img-current {
            position: fixed;
            bottom: 36px;
            right: 10px;
            width: 100%;
            .contents {
                float: left;
                color: #fff;
                margin-left: 45px;
                width: 80%;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .current {
                float: right;
                font-size: .4rem;
                color: #ccc;
            }
        }
    }
</style>
