import {useLayoutEffect, useRef, useCallback} from "react";

/**
 * globalAlpha 设置绘制的透明度
 */
const operations = [
  "color",
  "color-burn",
  "color-dodge",
  "copy",
  "darken",
  "destination-atop",
  "destination-in",
  "destination-out",
  "destination-over",
  "difference",
  "exclusion",
  "hard-light",
  "hue",
  "lighten",
  "lighter",
  "luminosity",
  "multiply",
  "overlay",
  "saturation",
  "screen",
  "soft-light",
  "source-atop",
  "source-in",
  "source-out",
  "source-over",
  "xor"
]

function draw(canvasRef: any, operation: any) {
  if (!canvasRef.current) {
    return
  }
  const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D

  ctx.clearRect(0, 0, 800, 800)

  ctx.save()
  ctx.font = 'bold 30px Menlo'
  ctx.fillStyle = '#000000'
  ctx.fillText(`globalCompositeOperation=${operation}`, 100, 100)
  ctx.restore()

  ctx.save()
  ctx.fillStyle = 'blue'
  ctx.fillRect(200, 200, 400, 400)
  ctx.restore()


  ctx.save()

  ctx.globalCompositeOperation = operation
  ctx.fillStyle = 'red'

  ctx.beginPath()
  ctx.moveTo(400, 400)
  ctx.lineTo(700, 500)
  ctx.lineTo(400, 700)
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}

function Global() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    draw(canvasRef, 'source-over')
  }, [])

  const handleChange: any = useCallback((value: string) => {
    draw(canvasRef, value)
  }, [])

  return (
      <div style={{ display: 'flex' }}>
        <div>
          {
            operations.map((item: string) => (
                <span
                    key={item}
                    style={{
                      color: 'blue',
                      margin: '0 10px',
                      padding: '10px 0',
                      cursor: 'pointer',
                      userSelect: 'none',
                      display: 'block'
                    }}
                    onClick={() => handleChange(item)}
                >
                {item}
              </span>
            ))
          }
        </div>
        <div style={{ flex: 1 }}>
          <canvas ref={canvasRef} width={800} height={800}></canvas>
        </div>
      </div>
  )
}

export default Global
