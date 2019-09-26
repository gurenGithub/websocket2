import ByteBuffer from './../ByteBuffer'
import BaseResolver from './base'
const MSG_TRADE_HERO_QUOTE = 3802 // 请求报价
// const MSG_TRADE_HERO_REQUEST_QUOTE = 3501 // 请求报价结果

class Resolver extends BaseResolver {
  constructor (data, receiveCallback) {
    super(data, receiveCallback, MSG_TRADE_HERO_QUOTE)
  }
  send (data) {
    let logs = []
    data = data || this.getData()
    const buf = new ByteBuffer()
    buf.writeUInt16LE(this.getCode())
    logs.push('writeUInt16LE>>' + this.getCode())
    buf.writeUInt16LE(data.length)
    logs.push('writeUInt16LE>>' + data.length)
    data.map(el => {
      buf.writeStringLE(el)
      logs.push('writeStringLE>>' + el)
    })
    console.log(logs.join(';'))
    return buf.toBuffer()
  }
}

export default Resolver
