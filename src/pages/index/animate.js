/** ****star.js******/
/** **以下是星星的对象**********************************/
var star = function (cxt) // 定义星的对象
{
  this.x = -1
  this.y = -1 // 表示横纵坐标
  this.style = ''
  this.r = -1
  this.scale = 1 // 表示缩放倍数
  this.angle = 0 // 旋转的角度
  this.angle1 = 0 // 辅助参数
  this.getPos = function () // 获取随机坐标
  {
    var xx = 20 + 1200 * Math.random()
    var yy = 20 + 250 * Math.random()
    this.x = Math.ceil(xx); this.y = Math.ceil(yy) // 获取了随机坐标
  }
  this.getAngle = function () // 得到随机的角度
  {
    this.angle = Math.random() * Math.PI
  }
  this.getR = function () // 获取半径
  {
    var i = 1 + 4 * Math.random()
    this.r = Math.ceil(i) // 获取随机半径
  }
  this.getColor = function () // 获取随机颜色
  {
    var n = Math.random()
    if (n < 0.5) { this.style = 'white'; } else { this.style = '#BBAAB1'; } // 灰白色
  }
  this.drawPartStar = function () // 部分
  {
    cxt.save()
    cxt.beginPath()
    cxt.lineCap = 'round'; cxt.lineWidth = 5
    cxt.fillStyle = this.style
    cxt.translate(this.x, this.y) // 位移
    cxt.rotate(this.angle1)
    // cxt.globalAlpha = this.alpha; //设置透明度
    cxt.moveTo(0, 0)
    var xx = 0 - this.r * Math.sin(36 / 180 * 3.14)
    var yy = 0 - this.r * Math.cos(36 / 180 * 3.14)
    cxt.lineTo(xx, yy)
    xx = 0
    yy = 0 - this.r * Math.cos(36 / 180 * 3.14) - this.r * Math.sin(36 / 180 * 3.14) * Math.tan(72 / 180 * 3.14)
    cxt.lineTo(xx, yy)
    xx = this.r * Math.sin(36 / 180 * 3.14)
    yy = 0 - this.r * Math.cos(36 / 180 * 3.14)
    cxt.lineTo(xx, yy)
    cxt.lineTo(0, 0)
    cxt.closePath()
    cxt.fill()
    cxt.restore()
  }
  this.drawStar = function () // 绘制完整的花
  {
    for (var i = 0; i <= 4; i++) {
      this.angle1 = i * 72 / 180 * 3.14 + this.angle
      this.drawPartStar()
    }
  }
  this.init = function () // 初始化函数
  {
    this.getPos()
    this.getR()
    this.getColor()
    this.getAngle()
  }
}

export default star
