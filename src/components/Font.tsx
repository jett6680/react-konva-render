import {useLayoutEffect, useRef} from "react";


/**
 * ctx.font =
 *          font-style: normal | italic | oblique
 *          font-variant: normal | small-caps
 *          font-weight: bold | bolder | normal | lighter
 *          font-size: 字号
 *          font-family: 支持多字号，以逗号分割，另外支持@font-face的自定义字体
 */

/**
 * 调整文本的水平对齐方式
 * textAlign: left | center | right
 * textBaseline: top | middle | bottom
 *  | alphabetic(针对拉丁字母对齐)
 *  | ideographic (方块字，例如中文等)
 *  | hanging (针对印度文等)
 */

const text = '大家好，我是Powerjett!???'

function drawLine(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.closePath()
  ctx.lineWidth = 2
  ctx.strokeStyle = 'blue'
  ctx.stroke()
}

function drawFillText(ctx:CanvasRenderingContext2D) {
  ctx.save()
  ctx.font = 'small-caps italic 40px bold Monaco'
  ctx.fillStyle = 'red'
  ctx.fillText(text, 100, 100)
  ctx.restore()
}

function drawStrokeText(ctx:CanvasRenderingContext2D) {
  ctx.save()
  ctx.font = 'bold 40px Monaco'
  ctx.lineWidth = 1
  ctx.strokeStyle = 'blue'
  ctx.strokeText(text, 100, 200)
  ctx.restore()
}

function drawStrokeFillText(ctx:CanvasRenderingContext2D) {
  ctx.save()
  ctx.font = 'bold 40px Monaco'
  ctx.lineWidth = 1
  ctx.strokeStyle = 'blue'
  ctx.fillStyle = 'red'
  ctx.fillText(text, 100, 300)
  ctx.strokeText(text, 100, 300)
  ctx.restore()
}

function drawLinearGradientText(ctx:CanvasRenderingContext2D) {
  ctx.save()
  const linearGradient = ctx.createLinearGradient(100, 400, 600, 400)
  linearGradient.addColorStop(0.0, '#ffffff')
  linearGradient.addColorStop(0.25, 'yellow')
  linearGradient.addColorStop(0.5, 'blue')
  linearGradient.addColorStop(0.75, 'green')
  linearGradient.addColorStop(1.0, '#ff0000')
  ctx.font = 'bold 40px Monaco'
  ctx.fillStyle = linearGradient
  ctx.fillText(text, 100, 400)
  ctx.restore()
}

function drawTextAlign(ctx:CanvasRenderingContext2D) {
  ctx.save()
  ctx.font = '40px bold Monaco'
  ctx.fillStyle = 'red'
  ctx.textAlign = 'left'
  ctx.fillText('textAlign=left', 400, 500)
  ctx.textAlign = 'center'
  ctx.fillText('textAlign=center', 400, 600)
  ctx.textAlign = 'right'
  ctx.fillText('textAlign=right', 400, 700)

  // 参考线
  drawLine(ctx, 400, 0, 400, 800)

  ctx.restore()
}

function drawTextBaseLine(ctx:CanvasRenderingContext2D) {
  ctx.save()
  ctx.font = '40px bold Monaco'
  ctx.fillStyle = 'red'

  ctx.textBaseline = 'top'
  ctx.fillText('textBaseline=top', 100, 100)
  drawLine(ctx, 0, 100, 800, 100)

  ctx.textBaseline = 'middle'
  ctx.fillText('textBaseline=middle', 100, 200)
  drawLine(ctx, 0, 200, 800, 200)

  ctx.textBaseline = 'bottom'
  ctx.fillText('textBaseline=bottom', 100, 300)
  drawLine(ctx, 0, 300, 800, 300)

  ctx.restore()
}

function Font() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    if(!canvasRef.current) {
      return
    }
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D
    // drawFillText(ctx)
    // drawStrokeText(ctx)
    // drawStrokeFillText(ctx)
    // drawLinearGradientText(ctx)
    drawTextAlign(ctx)
    drawTextBaseLine(ctx)
  }, [])
  return (
      <canvas ref={canvasRef} width={800} height={800}></canvas>
  )
}

export default Font
