import '@/style/index.scss';
import onLayout from '@/layout/index';
import {WebSocket2,Resolver} from  './../../dist/js/webSocket.js';

const components = []; //组件
onLayout(function ($wrap) {

    components.map((el) => {


        el($wrap, {});

        const url = 'ws://47.110.226.191:6101'

        let socket=new WebSocket2(url);
        socket.open().then(()=>{

            socket.on(new Resolver([],(res)=>{

                console.log(res);
            },3501))
        })

    })

});