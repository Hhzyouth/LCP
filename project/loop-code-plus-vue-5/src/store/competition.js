import { defineStore } from 'pinia';

//存储token或者用户信息
export const useCompetitionStore = defineStore('competition', {
	state: () => {
		return {
			roomId:0,
            isFinished:true
		};
	},
	getters: {},
	actions: {
		//修改token 并将token 存入localStorage
		setRoomId(rid) {
			this.roomId = rid
		},
        setis(is) {
			this.isFinished = is
		},
	}
});