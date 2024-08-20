import { defineStore } from 'pinia';

//存储token或者用户信息
export const useUserStore = defineStore('user', {
	state: () => {
		return {
			token: localStorage.getItem('token')?localStorage.getItem('token'):'',
			userId:0,
			nickname:'',
			title:'',
			role:'',
			avatar:'',
			point:0,
			sinPoint:0,
			mulPoint:0,
			weekPoint:0
		};
	},
	getters: {},
	actions: {
		//修改token 并将token 存入localStorage
		setToken(token) {
			console.log("===tokenset==",token)
			this.token = token
			localStorage.setItem('token',token)
			console.log('==========token================')
		},
		setInformation(data){
			this.userId=data.userId,
			this.nickname=data.nickName,
			this.title=data.title,
			this.role=data.role,
			this.avatar=data.avatar
			this.point=data.point
		},
		clearInformation(){
			this.userId=0,
			this.nickname='',
			this.title='',
			this.role='',
			this.avatar='',
			this.point=0,
			this.sinPoint=0
			this.mulPoint=0
			this.weekPoint=0
		},
		setRanks(data){
			this.sinPoint=data.sinPoint,
			this.mulPoint=data.mulPoint,
			this.weekPoint=data.weekPoint
		},
	}
});