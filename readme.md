```javascript
import {WebSocket2,Resolver} from  'kila-web-socket';

const url = 'ws://0.0.226.191:6101'

        let socket=new WebSocket2(url);
        socket.open().then(()=>{

            socket.on(new Resolver([],(res)=>{

                console.log(res);
            },3501))
})

```
