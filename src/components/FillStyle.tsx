
import {useLayoutEffect, useRef} from "react";

/** 线性渐变 **/
function drawLinearGradient(ctx: CanvasRenderingContext2D) {
  ctx.save()
  const linear = ctx.createLinearGradient(0, 0, 400, 400)
  linear.addColorStop(0.0, '#ffffff')
  linear.addColorStop(0.25, 'yellow')
  linear.addColorStop(0.5, 'blue')
  linear.addColorStop(0.75, 'green')
  linear.addColorStop(1.0, '#ff0000')
  ctx.fillStyle = linear
  ctx.fillRect(0,0, 400, 400)
  ctx.restore()
}

/** 径向渐变 **/
function drawRadialGradient(ctx: CanvasRenderingContext2D) {
  ctx.save()
  const radial = ctx.createRadialGradient(600, 600, 0, 600, 600, 200)
  radial.addColorStop(0.0, '#ffffff')
  radial.addColorStop(0.25, 'yellow')
  radial.addColorStop(0.5, 'blue')
  radial.addColorStop(0.75, 'green')
  radial.addColorStop(1.0, '#ff0000')
  ctx.fillStyle = radial
  ctx.fillRect(400,400, 400, 400)
  ctx.restore()
}

function drawPattern(ctx: CanvasRenderingContext2D, img: HTMLImageElement) {
  ctx.save()
  const pattern = ctx.createPattern(img, 'repeat') as CanvasPattern
  ctx.fillStyle = pattern
  ctx.fillRect(0, 400, 400, 400)
  ctx.restore()
}

/**
 * fillStyle 可以赋值 color | gradient | image | canvas | video
 */
function FillStyle() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    if(!canvasRef.current) {
      return
    }
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D
    drawLinearGradient(ctx)
    drawRadialGradient(ctx)
    const img = new Image()
    img.src = './logo192.png'
    img.onload = () => {
      drawPattern(ctx, img)
    }
    
  }, [])
  return (
      <canvas ref={canvasRef} width={800} height={800}></canvas>
  )
}

export default FillStyle
