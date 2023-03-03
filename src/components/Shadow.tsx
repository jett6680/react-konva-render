import {useLayoutEffect, useRef} from "react";

/**
 * shadowColor 阴影的颜色
 * shadowOffsetX 阴影的x偏移量
 * shadowOffsetY 阴影的y偏移量
 * shadowBlur 阴影的模糊半径
 */

function Shadow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    if(!canvasRef.current) {
      return
    }
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D
    console.log(ctx)
    ctx.save()
    ctx.shadowColor = '#000000'
    ctx.shadowOffsetX = 20
    ctx.shadowOffsetY = 20
    ctx.shadowBlur = 20
    ctx.fillStyle = 'red'
    ctx.rect(200, 200, 400, 400)
    ctx.fill()
    ctx.restore()
  }, [])
  return (
      <canvas ref={canvasRef} width={800} height={800}></canvas>
  )
}

export default Shadow
