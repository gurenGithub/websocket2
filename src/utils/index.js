import NP from 'number-precision'
// import ByteBuffer from './ByteBuffer'

const url = ''

class KilaSocket {
  constructor (options) {
    options = options || {}
    this.isSupport = typeof window.WebSocket !== 'undefined'
    this.socket = null
    this.callback = options.callback || new window.Function()
    this.heartbeatTimer = null

    this.reConnectCount = 0
    this.connectTimeout = 500
    this.failCount = 1
  }

  static NP () {
    return NP
  }

  /**
   * 连接服务器
   */
  connect (socketUrl) {
    this.socket = new window.WebSocket(socketUrl || url)
    this.socket.binaryType = 'arraybuffer'

    return new Promise((resolve, reject) => {
      this.socket.addEventListener('open', e => {
        console.log('connected')
        this._sendHeartbeat()
        resolve()
      })
      this.socket.addEventListener('error', e => {
        console.log('error')
        // this.reconnect()
      })
      this.socket.addEventListener('close', e => {
        console.log('close')
        this.socket = null
        this.reconnect()
        reject(new Error('close'))
      })
    })
  }

  /**
   * 重连
   */
  reconnect () {
    if (this.reConnectCount >= 6 * this.failCount) {
      this.failCount = 2
      if (this.connectTimeout >= 30000) {
        this.connectTimeout = 30000
      } else {
        this.connectTimeout = this.connectTimeout * this.failCount
      }
    }
    this.reConnectCount++
    setTimeout(() => {
      setTimeout(() => {
        this.destory()
        this.callback()
      }, 1)
    }, this.connectTimeout)
  }

  send (data) {
    if (!this.socket || this.socket.readyState !== window.WebSocket.OPEN) {
      return false
    }
    this.socket.send(data)
  }

  destory () {
    if (this.socket && this.socket.readyState !== window.WebSocket.CLOSED) {
      this.socket.close()
    }
    this.socket = null
    clearInterval(this.heartbeatTimer)
  }

  /**
   * 发送心跳
   */
  _sendHeartbeat () {
    if (!this.socket) {
      return false
    }
    this.heartbeatTimer = setInterval(() => {
      this.send('')
    }, 1000 * 10)
  }
}

export default KilaSocket
