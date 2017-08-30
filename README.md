# vue-image-gallery

A picture gallery plugin
一个图片画廊组件

## demo演示

[demo](https://sunshine824.github.io/vue-image-gallery/)

## 安装

```JS
npm install vue-image-gallery -S
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
   <vue-image-gallery :banner="banner" :distanceMin="distanceMin" :icon="icon"></vue-image-gallery>
```

```javascript
data () {
      return {
        banner:['http://img1.imgtn.bdimg.com/it/u=950408042,948824975&fm=11&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=4109419760,2883302339&fm=11&gp=0.jpg','http://img0.imgtn.bdimg.com/it/u=2212695692,2311176260&fm=26&gp=0.jpg'],
        distanceMin:10,
        icon:'xxxx.png'
      }
    }
```

### Props

|    name    |    Description   |   type   |default|
| -----------------  | ---------------- | :--------: | :----------: |
| banner       | 图片集合 |Array| []
| distanceMin        | 最小滚动距离 |Number | 30
| icon        | 下拉图标 |String |

