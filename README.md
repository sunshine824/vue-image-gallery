# vue-image-gallery

A picture gallery plugin
一个图片画廊组件

## [demo演示](https://sunshine824.github.io/vue-image-gallery/)

![二维码](https://github.com/sunshine824/vue-image-gallery/blob/master/src/erweima.png)

## 安装

```JS
npm install vue-image-gallery --save
```

## 使用

```js
// ES6
import vueImageGallery from 'vue-image-gallery.js'

Vue.use(vueImageGallery)

// 或者直接使用script导入
<script src="./node_modules/vue/dist/vue-image-gallery.js"></script>

// 作为组件的方式使用
<vue-image-gallery></vue-image-gallery>
```

### 配置

```html
   <vue-image-gallery :banner="banner" :distance_min="distanceMin" :icon="icon"></vue-image-gallery>
```

```javascript
data () {
      return {
        banner:[
                  {url:'https://unsplash.it/458/354?image=0',content:'这是一个张图片'},
                  {url:'https://unsplash.it/458/354?image=1',content:'这是二个张图片'},
                  {url:'https://unsplash.it/458/354?image=2',content:'这是三个张图片'},
                  {url:'https://unsplash.it/458/354?image=3',content:'这是四个张图片'},
                  {url:'https://unsplash.it/458/354?image=4',content:'这是五个张图片'},
              ],
        distanceMin:10,
        icon:'xxxx.png'
      }
    }
```

### Props

|    name    |    Description   |   type   |default|
| -----------------  | ---------------- | :--------: | :----------: |
| banner       | 图片集合 |Array| [ {url:'图片地址', content:'图片相关介绍'} ]
| distanceMin        | 最小滚动距离 |Number | 30
| icon        | 下拉图标 |String |

