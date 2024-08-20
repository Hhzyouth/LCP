import { defineStore } from 'pinia';

//存储token或者用户信息
export const useControllerStore = defineStore('controller', {
	state: () => {
		return {
			myProblemTabsActiveName:'problem'
		};
	},
	getters: {},
	actions: {
		//修改token 并将token 存入localStorage
		setMyProblemTabsActiveName(activeName) {
			this.myProblemTabsActiveName = activeName
		},
	}
});