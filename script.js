var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

function drawCanv() {
  const bg = ctx.createLinearGradient(0, 0, 0, canvas.width)
  bg.addColorStop(0, "rgba(0,0,0,1)")
  bg.addColorStop(0.5, "rgba(1,12,69,1)")
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}
drawCanv()

var cloud_count = 0
var cloudsa = []
class Clouds {
  constructor() {
    this.x = Math.floor(Math.random() * 5000)
    this.y = Math.floor(Math.random() * 150) - 120
    this.dx = Math.random() - 0.5
  }
  move() {
    this.x += this.dx
    if (this.x > canvas.width + 1000) {
      this.x = -1000
    }
  }
  draw(ctx) {
    ctx.drawImage(cloud, 0, 0, 800, 600, this.x, this.y, 200, 150)
    console.log(this.x, this.y)
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  cloud_count = Math.round(canvas.width / 200)
  cloudsa = []
  for (let i = 0; i < cloud_count; i++) {
    cloudsa.push(new Clouds())
  }
}
resizeCanvas()

var loaded = 0
bga = new Image()
bga.src = "img/bga.png"
bga.onload = function () {
  loaded++
  tryToDraw()
}

grass = new Image()
grass.src = "img/grass.png"
grass.onload = function () {
  loaded++
  tryToDraw()
}

mcl = new Image()
mcl.src = "img/mcl.png"
mcl.onload = function () {
  loaded++
  tryToDraw()
}

mcl1 = new Image()
mcl1.src = "img/mcl1.png"
mcl1.onload = function () {
  loaded++
  tryToDraw()
}

rail = new Image()
rail.src = "img/skolavdfrail.png"
rail.onload = function () {
  loaded++
  tryToDraw()
}

ffence = new Image()
// console.log(ffence)
ffence.src = "img/fence_small.png"
ffence.onload = function () {
  loaded++
  tryToDraw()
}

cage = new Image()
cage.src = "img/cage_low.png"
cage.onload = function () {
  loaded++
  tryToDraw()
}
cage_normal = new Image()
cage_normal.src = "img/cage_normal_small.png"
cage_normal.onload = function () {
  loaded++
  tryToDraw()
}

lamp_light = new Image()
lamp_light.src = "img/lamp_light_low.png"
lamp_light.onload = function () {
  loaded++
  tryToDraw()
}

circle_white = new Image()
circle_white.src = "img/circlewhite.png"
circle_white.onload = function () {
  loaded++
  tryToDraw()
}

circle_red = new Image()
circle_red.src = "img/circlered.png"
circle_red.onload = function () {
  loaded++
  tryToDraw()
}

rainbow_stripe = new Image()
rainbow_stripe.src = "img/rainbow_spritesheet.png"
rainbow_stripe.onload = function () {
  loaded++
  tryToDraw()
}

pyramid = new Image()
pyramid.src = "img/pyramid.png"
pyramid.onload = function () {
  loaded++
  tryToDraw()
}

pyramid_light = new Image()
pyramid_light.src = "img/pyramidlight.png"
pyramid_light.onload = function () {
  loaded++
  tryToDraw()
}

thomas = new Image()
thomas.src = "img/thomas.png"
thomas.onload = function () {
  loaded++
  tryToDraw()
}

guyman = new Image()
guyman.src = "img/guyman.png"
guyman.onload = function () {
  loaded++
  tryToDraw()
}

wheelstan = new Image()
wheelstan.src = "img/wheelstand.png"
wheelstan.onload = function () {
  loaded++
  tryToDraw()
}

wheel = new Image()
wheel.src = "img/wheel.png"
wheel.onload = function () {
  loaded++
  tryToDraw()
}

basket = new Image()
basket.src = "img/basket.png"
basket.onload = function () {
  loaded++
  tryToDraw()
}

cloud = new Image()
cloud.src = "img/cloud.png"
cloud.onload = function () {
  loaded++
  tryToDraw()
}

function tryToDraw() {
  if (loaded == 20) {
    var wq = 0
    var ju = canvas.width / 512
    for (var i = 0; i < ju; i++) {
      ctx.drawImage(bga, wq, canvas.height - 190, 724, 148)
      wq += 512
    }
    var idf = canvas.width / 102
    var pod = 0
    for (var i = 0; i < idf; i++) {
      ctx.drawImage(lamp_light, pod - 37, 30)
      pod += 102
    }
    var af = 0
    var gg = canvas.width / 736
    for (var i = 0; i < gg; i++) {
      ctx.drawImage(grass, af, canvas.height - 50)
      af += 736
    }
    var b = 0
    var br = 0
    var ds = canvas.width / 100
    for (var i = 0; i < ds; i++) {
      ctx.drawImage(ffence, br, 180)
      br += 100
    }
    for (var i = 0; i < ds; i++) {
      ctx.drawImage(rail, b, 240)
      b += 100
    }
    ctx.fillStyle = "#030303"
    ctx.fillRect(canvas.width - 900, canvas.height - 500, 800, 400)
    ctx.fillStyle = "#0F0F0F"
    ctx.fillRect(canvas.width - 950, canvas.height - 100, 900, 50)
  }
}

function wheelDraw() {
  ctx.drawImage(wheel, 0, 0, 1919, 1079, -1919 / 2, -1079 / 2, 1919, 1079)
}

function basketDraw() {
  ctx.save()
  ctx.translate(-(this.width / 2), 0)
  ctx.drawImage(basket, 0, 0, 55, 62, -55 / 2, 0, 55, 62)
  ctx.restore()
}

var uizt = [0, 45, 90, 135, 180, 225, 270, 315, 360]
function basketRotate() {
  for (var i = 0; i < 8; i++) {
    ctx.save()
    ctx.translate(480, canvas.height - 380)
    ctx.rotate((ojkdf + uizt[i]) * (Math.PI / 180))
    ctx.translate(250, 0)
    ctx.rotate(-(ojkdf + uizt[i]) * (Math.PI / 180))
    basketDraw()
    ctx.restore()
  }
}

var ojkdf = 0
var ojga = 0
function wheelRotate() {
  ojga++
  if (ojkdf == 360) {
    ojkdf = 0
  }
  if (ojga >= 4) {
    ojkdf++
    ojga = 0
  }
  ctx.save()
  ctx.translate(480, canvas.height - 380)
  ctx.rotate(ojkdf * (Math.PI / 180))
  wheelDraw()
  ctx.restore()
}

function wheelRotateAnim() {
  basketRotate()
  wheelRotate()
  requestAnimationFrame(wheelRotateAnim)
}

const rainbowWidth = 400
const rainbowHeight = 49
const scalee = 0.2
const corrda = [
  542, 458, 626, 374, 743, 701, 659, 617, 575, 425, 383, 341, 299, 257,
]
const corrba = [
  110, 110, 110, 110, 158, 230, 302, 374, 446, 446, 374, 302, 230, 158,
]
const rotata = [0, 0, 0, 0, 120, 120, 120, 120, 120, 240, 240, 240, 240, 240]
var count = 0
var frame = 0
var framey = 0

function genRainbowStripe() {
  ctx.drawImage(
    rainbow_stripe,
    frame * rainbowWidth,
    framey * (rainbowHeight + 10),
    rainbowWidth,
    rainbowHeight,
    (-rainbowWidth * scalee) / 2,
    (-rainbowHeight * scalee) / 2,
    rainbowWidth * scalee,
    rainbowHeight * scalee
  )
}

function rainbowStripe() {
  for (var i = 0; i < 14; i++) {
    ctx.save()
    ctx.translate(canvas.width - corrda[i], canvas.height - corrba[i])
    ctx.rotate(rotata[i] * (Math.PI / 180))
    genRainbowStripe()
    count++
    if (count == 100) {
      count = 0
      frame++
    }
    if (framey == 2 && frame > 0) {
      count = 0
      frame = 0
      framey = 0
    }
    if (frame >= 4) {
      count = 0
      frame = 0
      framey++
    }
    ctx.restore()
  }
}

var hugg = true
sessionStorage.setItem("count", "2")
var timer
function rainbowStripeAnimate() {
  if (hugg == true) {
    rainbowStripe()
    if (sessionStorage.getItem("count") == "2") {
      // console.log("sup")
      setTimeout(() => (hugg = false), 3500)
      sessionStorage.setItem("count", "0")
    }
  } else {
    if (sessionStorage.getItem("count") == "0") {
      timer = setTimeout(() => (hugg = true), 500)
      sessionStorage.setItem("count", "2")
    }
  }
  requestAnimationFrame(rainbowStripeAnimate)
}

var ljg = true
function daftDance() {
  if (ljg == true) {
    ctx.drawImage(thomas, canvas.width - 998, canvas.height - 549, 996, 540)
    setTimeout(() => (ljg = false), 476)
  } else if (ljg == false) {
    ctx.drawImage(thomas, canvas.width - 998, canvas.height - 547, 996, 540)
    setTimeout(() => (ljg = true), 476)
  }
}

var fgj = true
function punkDance() {
  if (fgj == true) {
    ctx.drawImage(guyman, canvas.width - 998, canvas.height - 549, 996, 540)
    setTimeout(() => (fgj = false), 500)
  } else if (fgj == false) {
    ctx.drawImage(guyman, canvas.width - 998, canvas.height - 547, 996, 540)
    setTimeout(() => (fgj = true), 500)
  }
}

var fd = true
function lights_switch() {
  var we = 870
  var gf = 475
  // console.log(fd)
  if (sessionStorage.getItem("lkval") == "true") {
    // console.log("waiting")
    fd = null
    setTimeout(() => (fd = true), 476)
    setTimeout(() => (fd = false), 476)
  } else if (sessionStorage.getItem("lkval") == "false") {
    if (fd == true) {
      for (var l = 0; l < 3; l++) {
        for (var i = 0; i < 25; i++) {
          ctx.drawImage(
            circle_red,
            canvas.width - we,
            canvas.height - gf,
            20,
            20
          )
          ctx.drawImage(
            circle_red,
            canvas.width - we,
            canvas.height - gf + 30,
            20,
            20
          )
          ctx.drawImage(
            circle_white,
            canvas.width - we,
            canvas.height - gf + 60,
            20,
            20
          )
          ctx.drawImage(
            circle_white,
            canvas.width - we,
            canvas.height - gf + 90,
            20,
            20
          )
          we -= 30
        }
        we = 870
        gf -= 120
      }
      setTimeout(() => (fd = false), 476)
    } else if (fd == false) {
      for (var l = 0; l < 3; l++) {
        for (var i = 0; i < 25; i++) {
          ctx.drawImage(
            circle_white,
            canvas.width - we,
            canvas.height - gf,
            20,
            20
          )
          ctx.drawImage(
            circle_white,
            canvas.width - we,
            canvas.height - gf + 30,
            20,
            20
          )
          ctx.drawImage(
            circle_red,
            canvas.width - we,
            canvas.height - gf + 60,
            20,
            20
          )
          ctx.drawImage(
            circle_red,
            canvas.width - we,
            canvas.height - gf + 90,
            20,
            20
          )
          we -= 30
        }
        we = 870
        gf -= 120
      }
      setTimeout(() => (fd = true), 476)
    }
  }
}
lights_switch()

// var og = Math.floor(Math.random() * 150)
// var uopx = 0
// function drawCloud() {
//   for (var i = 0; i < canvas.width / 20; i++) {
//     if (uopx == canvas.width) {
//       uopx = Math.floor(Math.random() * 100) - 1000
//     }
//     ctx.save()
//     ctx.globalAlpha = 0.02
//     ctx.drawImage(cloud, uopx, og, 200, 50)
//     ctx.restore()
//   }
//   uopx++
// }

var lk = "false"
sessionStorage.setItem("lkval", "false")
var ng = Math.floor(Math.random() * 10)
function lights_rng() {
  var we = 870
  var gf = 475
  if (lk == "true") {
    for (var l = 0; l < 12; l++) {
      for (var i = 0; i < 25; i++) {
        ng = Math.floor(Math.random() * 100)
        if (ng < 90) {
          we -= 30
        } else if (ng >= 90) {
          ctx.drawImage(
            circle_white,
            canvas.width - we,
            canvas.height - gf,
            20,
            20
          )
          we -= 30
        } else {
          // console.log("error")
        }
      }
      gf -= 30
      we = 870
    }
    setTimeout(() => sessionStorage.setItem("lkval", (lk = "false")), 2000)
  } else if (lk == "false") {
    setTimeout(() => sessionStorage.setItem("lkval", (lk = "true")), 2000)
  }
}

const iodjf = [1195, 1156, 1119, 1082, 1044, 802, 841, 878, 915, 953]
const iodjy = [395, 461, 527, 593, 659, 395, 461, 527, 593, 659]

function pyramidLights() {
  if (sessionStorage.getItem("lkval") == "true") {
    for (var i = 0; i < 10; i++) {
      ng = Math.floor(Math.random() * 100)
      if (ng < 90) {
        // console.log("lol")
      } else if (ng >= 90) {
        ctx.drawImage(
          pyramid_light,
          canvas.width - iodjf[i],
          canvas.height - iodjy[i],
          996,
          540
        )
      }
    }
  } else if (sessionStorage.getItem("lkval") == "false") {
    // console.log("lol")
  }
}

var dx = -1000
var ddx = -1500
var dadsa = Math.round(Math.floor(Math.random() * 30) + 20)
var afds = Math.round(Math.floor(Math.random() * 30) + 20)
function animateFor() {
  drawCanv()
  cloudsa.forEach((clouds) => clouds.draw(ctx))
  cloudsa.forEach((clouds) => clouds.move())
  ctx.fillStyle = "#222"
  ctx.fillRect(0, 240, canvas.width, 55)
  requestAnimationFrame(animateFor)
  var idf = canvas.width / 51
  var pod = 0
  for (var i = 0; i < idf; i++) {
    ctx.drawImage(cage, pod, 30)
    ctx.drawImage(cage_normal, pod + 51, 30)
    pod += 102
  }
  ctx.drawImage(mcl, dx, 210, 211, 50)
  ctx.drawImage(mcl1, ddx, 210, 211, 50)
  dx += dadsa
  ddx += afds
  if (dx > canvas.width + 10000) {
    dx = -1000
    ddx = -1500
    dadsa = Math.round(Math.floor(Math.random() * 30) + 20)
    afds = Math.round(Math.floor(Math.random() * 30) + 20)
    // console.log(dadsa)
    // console.log(afds)
  }
  tryToDraw()
  lights_switch()
  lights_rng()
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
  ctx.fillRect(canvas.width - 900, canvas.height - 500, 800, 400)
  daftDance()
  punkDance()
  ctx.drawImage(pyramid, canvas.width - 998, canvas.height - 549, 996, 540)
  ctx.drawImage(wheelstan, -480, canvas.height - 1130)
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
  ctx.fillRect(canvas.width - 900, canvas.height - 500, 800, 400)
  pyramidLights()
}

animateFor()
rainbowStripeAnimate()
wheelRotateAnim()

addEventListener("resize", () => {
  resizeCanvas()
  drawCanv()
})
