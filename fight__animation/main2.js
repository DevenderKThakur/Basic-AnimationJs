const  canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const canvas__width = canvas.width = 400
const canvas__height = canvas.height = 400

const playerImage = new Image()
playerImage.src = 'Attack.png'
// of the image 
const spriteWidth = 200  //1200
const spriteHeight = 220  //220

let frameX = 0
let frameY = 0
let gameFrame = 0
const staggerFrame = 6

function animate(){
  ctx.clearRect(0,0,canvas__width,canvas__height)
  ctx.fillRect(0,0,canvas__width,canvas__height)
  ctx.drawImage(playerImage,frameX * spriteWidth,frameY * spriteHeight,spriteWidth,spriteHeight,0,0,canvas__width,canvas__height)
  if(gameFrame % staggerFrame ==0){
    if(frameX < 6){
        frameX++
      }else{
        frameX = 0
      }
  }
  gameFrame++
  requestAnimationFrame(animate)
}
animate()