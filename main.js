import Vue from 'vue'
import App from './App'
import Vant from 'vant'
import axios from 'axios'



Vue.use(Vant);

import router from './router';
import {
	RouterMount
} from 'uni-simple-router';

//import './debounce/debounce.js'

import codeHelper from './static/configure/codeHelper';
import apiUrl from './static/configure/url';
Vue.prototype.codeHelper=getCodeHelper();
Vue.prototype.apiUrl=getBaseUrl();
//Vue.prototype.debounce= debounce(fn,wait);

Vue.config.productionTip = false

App.mpType = 'app'

import i18n from './lang/index'
Vue.prototype._i18n = i18n

const app = new Vue({
    i18n,
		...App
})
import {Toast} from 'vant';

import { Locale } from 'vant';

axios.interceptors.request.use(
	config => {
		let token = window.localStorage.getItem('token');
		if (token != null && token != "" && new Date() <= window.localStorage.getItem('expired')) {
			config.headers.Authorization = "Bearer " + token;
		}

		//config.headers.connection="keep-alive";

		return config;
	},
	error => {
		return Promise.reject(error)
	}
)

axios.interceptors.response.use(

	response => {

		if (response.config.url.startsWith(getBaseUrl().middleapiUrl)) {

			if (response.data.toString().indexOf("<Code><Value>Sender</Value></Code")>-1) {
				Toast({
					message:response.data.substring(response.data.indexOf('<Text xml:lang="zh-CN">')+23,response.data.indexOf('</Text>'))
				});
				return response;
			}
		}

		if (response.data == false) {
			Toast({
				message: "error"
			});
		}
		return response;
	},
	error => {
		if (error.response) {
			switch (error.response.status) {
				case 401:
					window.localStorage.setItem('userid', '');
					window.localStorage.setItem('username', '');
					window.localStorage.setItem('token', '');
					window.localStorage.setItem('expired', '');
					router.push({
						path: '/pages/index/login'
					});
				case 403:
					Toast({
						message: error.response.data.error.message
					});
				default:
					Toast({
						message: error.response.data.error.message
					});
			}

		}

		return error.response

	}
)


RouterMount(app, '#app');

//app.$mount();
