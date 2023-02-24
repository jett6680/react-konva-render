import { useRef, useLayoutEffect } from 'react'

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    if (!canvasRef.current) {
      return
    }
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D
    ctx.beginPath()
    ctx.moveTo(100, 100)
    ctx.lineTo(300, 100)
    ctx.lineTo(300, 200)
    // ctx.lineTo(100, 100)
    // closePath可以闭合 到起点
    ctx.closePath()

    ctx.strokeStyle = 'blue'
    ctx.lineWidth = 10
    ctx.fillStyle = 'yellow'

    // 填充
    ctx.fill()
    // 描边
    ctx.stroke()
  }, [])
  return (
    <canvas ref={canvasRef} width={800} height={800}></canvas>
  )
}

export default Canvas