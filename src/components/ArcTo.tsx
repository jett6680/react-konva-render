import {useLayoutEffect, useRef} from "react";

function dis(x1: number, y1: number, x2: number, y2: number) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
}

/**
 * arcTo 指绘制半径的圆弧跟所给点的相切
 */

function ArcTo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    if(!canvasRef.current) {
      return
    }
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D
    ctx.save()
    ctx.beginPath()
    ctx.arc(400, 400, 300, 0.5 * Math.PI, 1.5 * Math.PI, true)
    ctx.moveTo(400, 100)
    const redis = (400 - 100) * dis(400, 100, 1200, 400) / (1200 - 400)
    ctx.arcTo(1200, 400, 400, 700, redis)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.stroke()
    ctx.restore()
  }, [])
  return (
      <canvas ref={canvasRef} width={800} height={800}></canvas>
  )
}

export default ArcTo
