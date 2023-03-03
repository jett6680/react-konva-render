import {useLayoutEffect, useRef} from "react";
// 裁剪
function Clip() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const draw = () => {
    if (!canvasRef.current) {
      return
    }
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D
    const x = Math.random() * 400
    const y = Math.random() * 400
    const scale = Math.random() * 2
    ctx.clearRect(0,0,800,800)

    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, 800, 800)


    ctx.save()

    ctx.save()
    ctx.scale(scale, scale)
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(x, y, 100, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fill()
    ctx.restore()
    ctx.clip()

    ctx.font = 'bold 40px Menlo'
    ctx.fillStyle = 'red'
    ctx.fillText('asadasCanvas!!!', 100, 400)
    ctx.restore()
  }

  useLayoutEffect(() => {
    draw()
    setInterval(() => {
      draw()
    }, 300)
  }, [])
  return (
      <canvas ref={canvasRef} width={800} height={800}></canvas>
  )
}

export default Clip
