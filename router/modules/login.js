// router/modules/login.js
const login = [{
		//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
		path: '/pages/index/login',
		name: 'login',
		requiresAuth: true, //可选配置 （是否权限路由）（我用来做登录拦截，true时没有登录便会跳转到登录页面）
		meta: {
			title: '登录',
		},
	},
]
export default login



