<template>
  <div>
    <!-- <img src="https://img-my.csdn.net/uploads/201202/21/0_1329803699xMy6.gif" /> -->
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>
    <bokeh></bokeh>

    <div class="mobile">最大化查看</div>
    <div class="pyro">
      <div class="before"></div>
      <div class="after"></div>
    </div>

    <h2>Happy Birthday 小吳!</h2>
    <span id="crown">&#127873;</span>
    <div class="candle" id="candle">
      <div id="flame" class="lit"></div>
    </div>

    <div class="cake" id="cake"></div>
    <div class="plate" id="plate"></div>
    <div class="hope" id="hope" @click="popHope">点我许下愿望</div>
    <h1 id="simon">西門哥送來祝福!</h1>

    <audio id="audio" :src="src" :autoplay="autoplay"></audio>
  </div>

</template>

<script>

/** ***************以上是星星的对象**************************/
export default {
  data () {
    return {
      renderData: [],
      name: '',
      password: '',
      age: '',
      isHide: false,
      showSDDiv: '',
      src: 'http://adobewordpress.com/tasarim/include/gold-sound.mp3',
      'autoplay': ''
    }
  },
  mounted () {
    setTimeout(() => {
      let candle = document.getElementById('candle')
      let cake = document.getElementById('cake')
      let plate = document.getElementById('plate')
      let i = 0
      let candleTop = candle.offsetTop
      let cakeTop = cake.offsetTop
      let plateTop = plate.offsetTop

      let interval = setInterval(() => {
        candle.style.top = candleTop + 'px'
        cake.style.top = cakeTop + 'px'
        plate.style.top = plateTop + 'px'
        plateTop--
        cakeTop--
        candleTop--
        plateTop--
        cakeTop--
        candleTop--
        if (i > 250) {
          clearInterval(interval)
          document.getElementById('simon').style.display = 'block'
          document.getElementById('hope').style.display = 'block'
        }
        i++
      }, 1)
    }, 10)
  },
  methods: {

    update () {

    },
    popHope () {
      document.getElementById('crown').style.fontSize = '30px'
      document.getElementById('crown').innerHTML = '赚好多好多money'
      this.autoplay = 'autoplay'
      document.getElementById('audio').play()
      this.animate()
    },
    rand (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    animate () {
      let that = this
      window.$('.clipped-box img').each(function () {
        var self = window.$(this)

        let top = 0
        let left = that.rand(0, document.body.offsetWidth)
        setTimeout(() => {
          let interval = setInterval(() => {
            top = top + 3
            if (top > 1000) {
              clearInterval(interval)
            }
            window.$(self).css({
              'top': (top) + 'px',
              'right': (left) + 'px'
            })
          }, 10)
        }, that.rand(0, 30000))
      })
    }
  }
}
</script>

<style>
@import './style.css';
*,
body,
html {
    margin: 0;
    padding: 0;
    white-space: nowrap;
    position: absolute;
    overflow: hidden;
}
html,
body {
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, #e2b8f7, #d4bafa, #c7bcfb, #b9befb, #acbff9);
}
canvas#rhodo {
    background: black;
}
</style>
