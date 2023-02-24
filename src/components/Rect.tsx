import { useRef, useLayoutEffect } from 'react'

function Rect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    if (!canvasRef.current) {
      return
    }
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D
    ctx.strokeStyle = 'blue'
    ctx.lineWidth = 10
    ctx.fillStyle = 'red'

    ctx.rect(100, 100, 100, 100)
    // 填充
    ctx.fill()
    // 描边
    ctx.stroke()

    /* --------------------------------- */
    ctx.fillStyle = 'rgba(0,250,0, 0.5)'
    ctx.lineWidth = 6
    ctx.fillRect(150, 150, 100, 100)
    ctx.strokeRect(150, 150, 100, 100)

  }, [])
  return (
    <canvas ref={canvasRef} width={800} height={800}></canvas>
  )
}

export default Rect
