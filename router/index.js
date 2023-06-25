import modules from './modules'
import Vue from 'vue'
//这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
import Router from 'uni-simple-router'

Vue.use(Router)
//初始化
const router = new Router({
	routes: [...modules] //路由表
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	//这里写登录拦截（我没有写全，如果获取到了token就不用跳转到登录页，就直接next()）

	   if (to.requiresAuth) {
		   
		   var token=window.localStorage.getItem('token');
		   
	   	if (token== null||token == ""||new Date()>window.localStorage.getItem('expired')) {
			
			window.localStorage.setItem('userid', '');
			window.localStorage.setItem('username', '');
			window.localStorage.setItem('token', '');
			window.localStorage.setItem('expired','');
			
			router.push({path:'/pages/index/login'});
	   	}
	   }

	next();
})
// 全局路由后置守卫
router.afterEach((to, from) => {})


export default router;
