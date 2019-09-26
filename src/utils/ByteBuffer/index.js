import NewBuffer from 'buffer'
import Int64 from './Int64'
const Buffer = NewBuffer.Buffer
const MIN_BUFFER_SIZE = 102400
class ByteBuffer {
  constructor (buf) {
    if (buf == null) {
      buf = Buffer.alloc(MIN_BUFFER_SIZE)
      this.writeMode = true
    }
    this.buf = buf
    this.position = 0
  }

  remain () {
    return this.buf.length - this.position
  }

  read (func, size) {
    const v = this.buf[func](this.position)
    this.position += size
    return v
  }

  write (func, value, size) {
    if (this.writeMode) {
      // 超出，扩容
      if (this.position + size > this.buf.length) {
        const exLength = Math.ceil((this.position + size) / MIN_BUFFER_SIZE) * MIN_BUFFER_SIZE
        const newBuf = Buffer.alloc(exLength)
        this.buf.copy(newBuf)
        this.buf = newBuf
      }
      this.buf[func](value, this.position)
      this.position += size
    } else {
      throw new Error('不是写入模式')
    }
  }

  readInt8 () {
    return this.read('readInt8', 1)
  }

  readInt16BE () {
    return this.read('readInt16BE', 2)
  }

  readInt16LE () {
    return this.read('readInt16LE', 2)
  }

  readInt32BE () {
    return this.read('readInt32BE', 4)
  }

  readInt32LE () {
    return this.read('readInt32LE', 4)
  }

  readInt64LE () {
    const x = this.read('readInt32LE', 4)
    const y = this.read('readInt32LE', 4)

    const i64 = new Int64(y, x)
    return i64.toNumber(true)
  }

  readUInt64LE () {
    const x = this.read('readInt32LE', 4)
    const y = this.read('readInt32LE', 4)

    const i64 = new Int64(y, x)
    return i64.toNumber(true)
  }

  readUInt8 () {
    return this.read('readUInt8', 1)
  }

  readUInt16BE () {
    return this.read('readUInt16BE', 2)
  }

  readUInt16LE () {
    return this.read('readUInt16LE', 2)
  }

  readUInt32BE () {
    return this.read('readUInt32BE', 4)
  }

  readUInt32LE () {
    return this.read('readUInt32LE', 4)
  }

  readFloatBE () {
    return this.read('readFloatBE', 4)
  }

  readFloatLE () {
    return this.read('readFloatLE', 4)
  }

  readDoubleBE () {
    return this.read('readDoubleBE', 8)
  }

  readDoubleLE () {
    return this.read('readDoubleLE', 8)
  }

  writeInt8 (value) {
    return this.write('writeInt8', value, 1)
  }

  writeInt16BE (value) {
    return this.write('writeInt16BE', value, 2)
  }

  writeInt16LE (value) {
    return this.write('writeInt16LE', value, 2)
  }

  writeInt32BE (value) {
    return this.write('writeInt32BE', value, 4)
  }

  writeInt32LE (value) {
    return this.write('writeInt32LE', value, 4)
  }

  writeInt64LE (value) {
    const i64 = new Int64(value)
    const buf = i64.toBuffer()
    // console.log(buf[7])
    const offsets = [7, 6, 5, 4, 3, 2, 1, 0]
    let x = ''
    for (x of offsets) {
      this.write('writeUInt8', buf[x], 1)
    }
  }

  writeUInt8 (value) {
    return this.write('writeUInt8', value, 1)
  }

  writeUInt16BE (value) {
    return this.write('writeUInt16BE', value, 2)
  }

  writeUInt16LE (value) {
    return this.write('writeUInt16LE', value, 2)
  }

  writeUInt32BE (value) {
    return this.write('writeUInt32BE', value, 4)
  }

  writeUInt32LE (value) {
    return this.write('writeUInt32LE', value, 4)
  }

  writeFloatBE (value) {
    return this.write('writeFloatBE', value, 4)
  }

  writeFloatLE (value) {
    return this.write('writeFloatLE', value, 4)
  }

  writeDoubleBE (value) {
    return this.write('writeDoubleBE', value, 8)
  }

  writeDoubleLE (value) {
    return this.write('writeDoubleLE', value, 8)
  }

  readStringBE () {
    const len = this.readUInt16BE()
    const result = this.buf.toString('utf-8', this.position, this.position + len)
    this.position += len
    return result
  }

  readStringLE () {
    const len = this.readUInt16LE()
    const result = this.buf.toString('utf-8', this.position, this.position + len)
    this.position += len
    return result
  }

  writeStringBE (str) {
    const buf = Buffer.from(str)
    const len = buf.length
    this.writeInt16BE(len)
    this.buf.write(str, this.position)
    this.position += len
  }

  writeStringLE (str) {
    const buf = Buffer.from(str)
    const len = buf.length
    this.writeInt16LE(len)
    this.buf.write(str, this.position)
    this.position += len
  }

  length () {
    return this.buf.length
  }

  toBuffer () {
    return this.buf.slice(0, this.position)
  }

  toPackageBufferBE () {
    const newBuf = Buffer.alloc(this.position + 2)
    this.buf.copy(newBuf, 2)
    newBuf.writeInt16BE(newBuf.length, 0)
    return newBuf
  }

  toPackageBufferLE () {
    const newBuf = Buffer.alloc(this.position + 2)
    this.buf.copy(newBuf, 2)
    newBuf.writeInt16LE(newBuf.length, 0)
    return newBuf
  }
}
export default ByteBuffer
