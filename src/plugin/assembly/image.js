import assembly from './assembly'
export default class MImage extends assembly{
  constructor (
    type='Image',
    name='',
    col=24,
    key='Image'+ new Date().getTime()
  ) {
    super(type,name,col,key);
    this.showFrom = ['name', 'col','src','fit','imageWidth','imageHeight']
    this.src = "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    this.fit = "fill"
    this.imageWidth = 100
    this.imageHeight = 100
    this.rules = [
    ]
  }
}
