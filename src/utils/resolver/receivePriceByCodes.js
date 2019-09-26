import BaseResolver from './base'
const MSG_TRADE_HERO_QUOTE_RE = 3801 // 报价下发
// const MSG_TRADE_HERO_REQUEST_QUOTE = 3501 // 请求报价结果

class Resolver extends BaseResolver {
  constructor (receiveCallback) {
    super({}, receiveCallback, MSG_TRADE_HERO_QUOTE_RE)
  }
  receive (buf, e) {
    const code = buf.readStringLE()
    const iTimestamp = buf.readInt32LE()
    const iBid = buf.readInt64LE()
    const iAsk = buf.readInt64LE()
    const div = 1000000.0
    const fBid = iBid / div
    const fAsk = iAsk / div
    // console.log(code, iTimestamp, iBid, iAsk)

    return this.receiveCallback({ code: code, time: iTimestamp, bid: fBid, ask: fAsk })
  }
}

export default Resolver
