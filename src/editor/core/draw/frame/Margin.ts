import { IEditorOption } from "../../../interface/Editor"
import { Draw } from "../Draw"

export class Margin {

  private options: Required<IEditorOption>

  constructor(draw: Draw) {
    this.options = draw.getOptions()
  }

  public render(ctx: CanvasRenderingContext2D) {
    const { width, height } = this.options
    const { marginIndicatorColor, marginIndicatorSize, margins } = this.options
    ctx.save()
    ctx.strokeStyle = marginIndicatorColor
    ctx.beginPath()
    const leftTopPoint: [number, number] = [margins[3], margins[0]]
    const rightTopPoint: [number, number] = [width - margins[1], margins[0]]
    const leftBottomPoint: [number, number] = [margins[3], height - margins[2]]
    const rightBottomPoint: [number, number] = [width - margins[1], height - margins[2]]
    // 上左
    ctx.moveTo(leftTopPoint[0] - marginIndicatorSize, leftTopPoint[1])
    ctx.lineTo(...leftTopPoint)
    ctx.lineTo(leftTopPoint[0], leftTopPoint[1] - marginIndicatorSize)
    // 上右
    ctx.moveTo(rightTopPoint[0] + marginIndicatorSize, rightTopPoint[1])
    ctx.lineTo(...rightTopPoint)
    ctx.lineTo(rightTopPoint[0], rightTopPoint[1] - marginIndicatorSize)
    // 下左
    ctx.moveTo(leftBottomPoint[0] - marginIndicatorSize, leftBottomPoint[1])
    ctx.lineTo(...leftBottomPoint)
    ctx.lineTo(leftBottomPoint[0], leftBottomPoint[1] + marginIndicatorSize)
    // 下右
    ctx.moveTo(rightBottomPoint[0] + marginIndicatorSize, rightBottomPoint[1])
    ctx.lineTo(...rightBottomPoint)
    ctx.lineTo(rightBottomPoint[0], rightBottomPoint[1] + marginIndicatorSize)
    ctx.stroke()
    ctx.restore()
  }

}