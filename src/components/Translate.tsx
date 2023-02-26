import {useLayoutEffect, useRef} from "react";

/**
 * 前后的translate会叠加
 * ctx.translate(a, b, c, d, e, f)
 * 直接设置状态到这么多，前面的translate会失效
 * ctx.setTranslate(a, b, c, d, e, f)
 */
function Translate() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    if(!canvasRef.current) {
      return
    }
  }, [])
  return (
      <canvas ref={canvasRef} width={800} height={800}></canvas>
  )
}

export default Translate
