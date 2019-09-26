import Socket from './index'
import ByteBuffer from './ByteBuffer'
import BaseResolver from './resolver/base'

const socketUrl = ''
class WebSocket2 {
  constructor (url) {
    // console.log('')
    this.socketMarket = new Socket({}) // 初始化socket函数
    this.resolveris = []
    this.url = url || socketUrl
  }

  // 添加解析器，默认有发送解析器跟接收解析器，可不实现send(){}方法
  addResolver (resolver) {
    if (!(resolver instanceof BaseResolver)) {
      throw '解析器必须实现Resolver类'
    }
    this.resolveris.push(resolver)
  }

  open () {
    return new Promise((resolve, reject) => {
      this.socketMarket.connect(this.url).then(() => {
        this.listen()
        resolve({})
      }, reject)
    })
  }
  listen () {
    let me = this
    // return new Promise((resolve, reject) => {

    this.socketMarket.socket.addEventListener('message', e => {
      // console.log(e)
      const message = new Uint8Array(e.data)

      const buf = new ByteBuffer(Buffer.from(message))
      const receiveCode = buf.readUInt16LE()
      // console.log(receiveCode)
      me.resolveris.map(el => {
        if (receiveCode === el.getCode()) {
          el.receive(buf, e)
        }
      })
    })
    // })
  }
  close () {
    this.socketMarket.destory()
  }

  send (resolver, data) {
    this.addResolver(resolver)
    let sendData = resolver && resolver.send(data)
    this.socketMarket.send(sendData)
  }
  on (resolver) {
    this.addResolver(resolver)
  }
}

export default WebSocket2
