import {useLayoutEffect, useRef} from "react";

function Line() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    if (!canvasRef.current) {
      return
    }
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D
    console.log(ctx)

    ctx.beginPath()
    ctx.moveTo(100, 100)
    ctx.lineTo(400, 400)
    ctx.lineTo(400, 100)
    ctx.closePath()
    ctx.lineJoin = 'miter'
    ctx.lineWidth = 10
    ctx.strokeStyle = '#ff0000'

    ctx.stroke()

  }, [])
  return (
      <canvas ref={canvasRef} width={800} height={800}></canvas>
  )
}

export default Line
