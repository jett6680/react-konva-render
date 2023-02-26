import {useLayoutEffect, useRef} from "react";

/**
 * measureText 计算当前文本的宽度,前提是设置好文字的font属性
 */

const text = '阿打算啊撒大声地AAA111'

function FontMeasure() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    if(!canvasRef.current) {
      return
    }
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D
    ctx.font = '40px bold Monaco'
    ctx.fillStyle = 'red'
    ctx.fillText(text, 100, 100)
    const width = ctx.measureText(text).width
    ctx.fillText('以上文字的宽度是: ' + width, 100, 200)
  }, [])
  return (
      <canvas ref={canvasRef} width={800} height={800}></canvas>
  )
}

export default FontMeasure
