import { useUserStore } from "../store/user";
const store=useUserStore()
export const createSocket = ()=>{return new WebSocket(`ws://192.168.115.15:8080/myWS?userid=${store.userId}`)};