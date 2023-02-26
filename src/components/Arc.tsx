import {useLayoutEffect, useRef} from "react";

function Arc() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    if(!canvasRef.current) {
      return
    }
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D
    ctx.lineWidth = 2
    ctx.strokeStyle = 'red'
    for(let i = 0; i< 9; i++) {
      ctx.beginPath()
      ctx.arc(40 + 90 * i, 40, 40, 0, (40 + 40 * i) / 180 * Math.PI)
      ctx.closePath()
      ctx.stroke()
    }

    for(let i = 0; i< 9; i++) {
      ctx.beginPath()
      ctx.arc(40 + 90 * i, 180, 40, 0, (40 + 40 * i) / 180 * Math.PI)
      ctx.stroke()
    }

    for(let i = 0; i< 9; i++) {
      ctx.beginPath()
      ctx.arc(40 + 90 * i, 360, 40, 0, (40 + 40 * i) / 180 * Math.PI)
      ctx.fill()
    }

    for(let i = 0; i< 9; i++) {
      ctx.beginPath()
      ctx.arc(40 + 90 * i, 580, 40, 0, (40 + 40 * i) / 180 * Math.PI, true)
      ctx.fill()
    }

  }, [])
  return (
      <canvas ref={canvasRef} width={800} height={800}></canvas>
  )
}

export default Arc
