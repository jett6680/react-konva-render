import {useLayoutEffect, useRef} from "react";

/**
 * 二次贝塞尔曲线
 * quadraticCurveTo(cpx, cpy, x, y)
 * (cpx, cpy) 控制点
 * (x, y) 终点
 */
function testQuadraticCurveTo(ctx: CanvasRenderingContext2D) {
  ctx.save()
  ctx.beginPath()
  ctx.arc(400,400,300, 0.5* Math.PI, 1.5 * Math.PI, true)
  ctx.moveTo(400, 100)
  ctx.quadraticCurveTo(800, 300, 400, 700)
  ctx.stroke()
  ctx.restore()
}

/**
 * 三次贝塞尔曲线
 * bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
 * (cp1x, cp1y) 控制点
 * (cp2x, cp2y) 控制点
 * (x, y) 终点
 */

function testBezierCurveTo(ctx: CanvasRenderingContext2D) {
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(0, 400)
  ctx.bezierCurveTo(0, 800, 700, 200, 800, 400)
  ctx.strokeStyle = 'red'
  ctx.lineWidth = 10
  ctx.stroke()
  ctx.restore()
}

function Bezier() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    if(!canvasRef.current) {
      return
    }
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D
    // testQuadraticCurveTo(ctx)
    testBezierCurveTo(ctx)


  }, [])
  return (
      <canvas ref={canvasRef} width={800} height={800}></canvas>
  )
}

export default Bezier
