<template>
	<div>
		<div>
			<table>
				<tr>
					<td>{{'姓名'}}</td>
					<td>{{'年龄'}}</td>
				</tr>
				<tr v-for="item in renderData">
					<td>{{item.name}}</td>
					<td>{{item.age}}</td>
				</tr>
			</table>
		</div>
		<div>
			<input v-model="name" />
			<input v-model="age" />
		</div>
		<div>{{'welcome to vue node mongo db project'}}</div>
		<div class="button" @click="send">send request</div>
		<div class="button" @click="postsend">insert login info request</div>
		<!--<div class="button" @click="postsend">post send request</div>-->
	</div>
</template>

<script>
	export default {
		data(){
			return {
				renderData:[],
				name:'',
				password:'',
				age:''
			}
		},
		methods:{
			send(){
				this.axios('http://127.0.0.1:8080/api/login/getAccount').then((res)=>{
					console.log('request success',res.data)
					this.renderData = res.data.data
				})
			},
			postsend(){
				this.axios.post('http://127.0.0.1:8080/api/login/insertLoginInfo',{name:this.name , age:this.age}).then((res)=>{
					console.log('request success')
				})
			}
		}
	}
</script>

<style>
	.button{
		width: 200px;
		display: block;
		height: 40px;
		line-height: 40px;
		border: 1px solid #42B983;
	}
</style>