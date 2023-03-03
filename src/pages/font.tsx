import {useLayoutEffect, useRef} from "react";

function Font() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useLayoutEffect(() => {
    if (!canvasRef.current) {
      return
    }
    const ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D
    //
    // ctx.save();
    // ctx.beginPath();
    // ctx.arc( 200, 200, 30, 0, Math.PI * 2, false );
    // ctx.closePath();
    // ctx.fillStyle = "#fff" ;
    // ctx.fill();
    // ctx.restore();
    //
    // ctx.save()
    // ctx.globalCompositeOperation = "source-atop" ;
    // ctx.beginPath();
    // ctx.arc( 200, 200, 30, 0, Math.PI * 2, false );
    // ctx.arc( 200, 200, 40, 0, Math.PI * 2, true );
    // ctx.closePath();
    // ctx.shadowColor = "rgba(0, 0, 0, 0.6)" ;
    // ctx.shadowOffsetX = 0 ;
    // ctx.shadowOffsetY = 5 ;
    // ctx.shadowBlur = 10 ;
    // ctx.fillStyle = "#ffffff" ;
    // ctx.fill();
    // ctx.restore()

    /**
     * 绘制文字的内阴影
     */

    const drawText = '文字特效'
    const bufferCanvasWidth = 1200
    const bufferCanvasHeight = 800
    ctx.save()
    const createCanvas1 = document.createElement("canvas");
    createCanvas1.width = bufferCanvasWidth
    createCanvas1.height = bufferCanvasHeight
    createCanvas1.id = "createCanvas111";
    const createContext1 = createCanvas1.getContext('2d') as CanvasRenderingContext2D
    createContext1.font = "150px Arival";
    createContext1.fillStyle = "rgba(255,255,255,1)"; // 不能透明，设置填充颜色
    createContext1.fillText(drawText, 10, 150);
    createContext1.globalCompositeOperation = "source-over";
    createContext1.fillStyle = /*strokeStyle ||*/ "rgba(255,0,0,1)";
    createContext1.fillText(drawText, 10, 150);
    ctx.drawImage(
        createCanvas1,
        0,
        0,
        bufferCanvasWidth,
        bufferCanvasHeight
    );
    ctx.save();
    ctx.globalCompositeOperation = "source-atop";
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowOffsetX = 20;
    ctx.shadowOffsetY = 20;
    ctx.shadowBlur = 4;
    // createCanvas 绘制的是源图像，下面的原理类似上面圆形内阴影案例中单独使用“Opposite Winding”绘制出大圆和小圆的结果
    const createCanvas = document.createElement("canvas");
    createCanvas.width = bufferCanvasWidth
    createCanvas.height= bufferCanvasHeight
    const createContext = createCanvas.getContext('2d') as CanvasRenderingContext2D
    createContext.save();
    createContext.font = "150px Arival";
    createContext.lineWidth = 40;
    createContext.fillStyle = "#fff"; // 不能透明，设置填充颜色
    createContext.fillText(drawText, 10, 150);
    createContext.globalCompositeOperation = "source-out";
    createContext.strokeStyle = "#08f"; // 不能透明，随便设置颜色
    createContext.strokeText(drawText, 10, 150);
    createContext.restore();
    ctx.drawImage(
        createCanvas,
        0,
        0,
        bufferCanvasWidth,
        bufferCanvasHeight
    );
    ctx.restore()

    ctx.restore()
  }, [])

  return (
      <canvas ref={canvasRef} width={1200} height={800}></canvas>
  )
}

export default Font
