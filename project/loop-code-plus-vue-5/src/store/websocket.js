import { defineStore } from 'pinia';

//存储token或者用户信息
export const useSocketStore = defineStore('socket', {
	state: () => {
		return {
			message:''
		};
	},
	getters: {},
	actions: {
		//修改token 并将token 存入localStorage
		setMessage(m) {
			this.myMessage = m
            console.log(m);
            
		},
	}
});