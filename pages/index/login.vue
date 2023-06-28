<template>
	<div class="login">
		<van-form @submit="onSubmit">
			<div class="white_line"></div>
			<div class="logo"> <img src="/static/logo.png" alt="井松科技" /></div>

			<div round block v-show="needLang" class="lang" @click="onClick">
				{{i18n.lang}}
			</div>

			<div class="white_line"></div>
			<div class="white_line"></div>

			<van-cell-group class="login">
				<van-field v-model="name" :label="i18n.username" :placeholder="i18n.usermessage"
				           :rules="[{ required: true, message: i18n.usermessage}]" required />
			</van-cell-group>

			<van-cell-group>
				<van-field v-model="pwd" type="password" :label="i18n.pwd" :placeholder="i18n.pwdmessage"
				           :rules="[{ required: true, message: i18n.pwdmessage }]" required />
			</van-cell-group>
			<div class="white_line"></div>
			<div class="remember">
				<van-checkbox v-model="checked" shape="square" label-disabled>{{i18n.rember}}</van-checkbox>
			</div>

			<div style="margin: 2rem;">
				<van-button round block type="info" native-type="submit">
					{{ i18n.submit }}
				</van-button>
			</div>

		</van-form>
	</div>
</template>

<script>
	import axios from 'axios';
	import {
		Toast
	} from 'vant';

	import cj from '../../node_modules/crypto-js/crypto-js.js';

	export default {
		data() {
			return {
				name: '',
				pwd: '',
				checked: false,
				needLang: false
			}
		},
		computed: {
			i18n() {
				return this.$t('login')
			}
		},
		onLoad() {
			this.toToast('Welcome');
			var name = window.localStorage.getItem('name');

			var pwd = window.localStorage.getItem('pwd');

			if (name != null && name != '') {
				this.name = name;

			}
			if (pwd != null && pwd != '') {
				this.pwd = pwd;

			}

		},
		mounted: function() {
			uni.setNavigationBarTitle({
				title: this.$t('login').title
			});
		},
		methods: {
			toToast(txt) {
				this.$toast({
					message: txt,
					position: 'middle'
				});
			},
			onSubmit() {
				let _this = this;
				let passWord = this.pwd; //.length == 32 ? this.pwd : cj.MD5(this.pwd).toString();
				axios.post(this.apiUrl.securityapiUrl + '/Account/getLoginToken', {
						username: this.name,
						password: passWord
					})
					.then(function(response) {
					    console.log(response,"---------------")
						if (response.data.code == 200) { //Login OK!
							window.localStorage.setItem('name', _this.name);
							if (_this.checked == true) {
								window.localStorage.setItem('pwd', passWord);
							} else {
								window.localStorage.setItem('pwd', '');
							}

							window.localStorage.setItem('userid', response.data.userId);
							window.localStorage.setItem('username', response.data.userName);
							window.localStorage.setItem('token', response.data.data.token);
							uni.navigateTo({
								url: "/pages/home/index",
							});
						} else {
							Toast({
								message: "登录失败"
							});
						}
					})
					.catch(function(error) { // 请求失败处理
						console.log(error);
						Toast({
							message: "请求失败！"
						});
					});

			},
			onClick() {
				uni.redirectTo({
					url: '/pages/index/language'
				});
			}
		},

	}
</script>

<style>
	.login{
		background: linear-gradient(to top, #eef2f3, #8e9eab);
	}

	.van-form{
		height: 100vh;
		padding: 0 5vw;
	}

	.remember {
		float: right;
		margin-right: 1rem;
		font-size: 8px
	}

	.logo {
		text-align: center;
		margin: 10vh auto;
	}

	.logo img{
		width: 50vw;
	}

	.lang {
		text-align: right;
		margin: 1rem auto 1rem auto;
		font-size: 15px;
		/*color:#007AFF;*/
		color: blue;
		padding: 0.5rem;
	}

	.white_line {
		height: 16px;
	}
</style>
