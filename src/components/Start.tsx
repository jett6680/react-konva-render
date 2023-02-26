import {useLayoutEffect, useRef} from "react";

// 绘制一个五角心
function drawStart(ctx: CanvasRenderingContext2D, r: number, R: number, x: number, y: number) {
  ctx.beginPath()
  for(let i = 0; i< 5; i++) {
    ctx.lineTo(
        Math.cos((18 + 72 *i) / 180 * Math.PI) * R + x,
        - Math.sin((18 + 72 *i) / 180 * Math.PI) * R + y
    )
    ctx.lineTo(
        Math.cos((54 + 72 *i) / 180 * Math.PI) * r + x,
        - Math.sin((54 + 72 *i) / 180 * Math.PI) * r + y
    )
  }
  ctx.closePath()
  ctx.lineWidth = 1
  ctx.strokeStyle = '#ef9a2c'
  ctx.fillStyle = '#ec880a'
  ctx.fill()
  ctx.stroke()
}

function Start() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    if (!canvasRef.current) {
      return
    }
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D
    console.log(ctx)
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    for(let i = 0; i< 100; i++) {
      const R = Math.random() * 10 + 10
      const x = Math.random() *  canvasRef.current.width
      const y = Math.random() * canvasRef.current.height
      drawStart(ctx, R / 2, R, x, y)
    }
  }, [])
  return (
      <canvas ref={canvasRef} width={800} height={800}></canvas>
  )
}

export default Start
