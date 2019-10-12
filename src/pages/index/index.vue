<template>
  <div>
    <h1>大家好 ， 我是小小吴</h1>
    <div v-if="showSDDiv">
      <h1>你个傻吊还真点,你西门哥在此</h1>
    </div>
    <div class="sd"
         @click="showsd">点我有惊喜</div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      renderData: [],
      name: '',
      password: '',
      age: '',
      isHide: false,
      showSDDiv: false
    }
  },
  methods: {
    send () {
      this.axios('/api/login/getAccount').then(res => {
        console.log('request success', res.data)
        this.renderData = res.data.data
      })
    },
    postsend () {
      this.axios
        .post('/api/login/insertLoginInfo', {
          name: this.name,
          age: this.age
        })
        .then(res => {
          console.log('request success')
        })
    },
    update () {

    },
    showsd () {
      this.showSDDiv = true
    }
  }
}
</script>

<style>
.sd-xx {
  border: 5px solid rebeccapurple;
}
.sd {
  color: antiquewhite;
  font-size: 40px;
  letter-spacing: 3px;
}
.button {
  width: 200px;
  display: block;
  height: 40px;
  line-height: 40px;
  border: 1px solid #42b983;
}
h1 {
  color: red;
}
</style>
