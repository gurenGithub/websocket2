
class Resolver {
  constructor (data, receiveCallback, code) {
    this.receiveCallback = receiveCallback
    this.code = code
    this.data = data

    if (!code) {
      throw 'Resolver code 不能为空'
    }
  }
  setData(data){
    this.data=data
  }
  setCode(code){

    this.code=code
  }
  getData () {
    return this.data
  }
  getCode () {
    return this.code
  }
  send (data) {
    return data || this.getData()
  }
  receive (res) {
    return this.receiveCallback && this.receiveCallback(res)
  }
}

export default Resolver
