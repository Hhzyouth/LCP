import { createSocket } from "../https/websocket";
import { useSocketStore } from "../store/websocket";

const store=useSocketStore()
let socket=null
export const createWebSocket=()=>{
    socket=createSocket()

    socket.addEventListener("open", function (event) {
        
    });
      
    socket.addEventListener("message", function (event) {
        console.log("Message from server ", event.data);
        store.message=event.data
    });
}

export const add=(message)=>{
    console.log(message);
    
    if (socket!=null){
        socket.send(message)
    }
}
export const close=()=>{
    if (socket!=null){
        console.log("socket close");
        socket.close()
    }
}