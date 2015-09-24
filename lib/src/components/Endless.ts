module example.components {

  import Container = PIXI.Container;
  import Component = artemis.Component;
  import PooledComponent = artemis.PooledComponent;
  import Pooled = artemis.annotations.Pooled;
  import Sprite = PIXI.Sprite;

  @Pooled()
  export class Endless extends PooledComponent {
    public static className = 'Endless';

    public path:string;
    public a:Sprite;
    public b:Sprite;
    public position:number;
    public velocity:number;

    public initialize(path?:string, velocity?:number, offset?:number, lambda?:Function) {
      this.position = 0;
      this.velocity = velocity;
      this.path = path;
      this.a = Sprite.fromImage(path);
      this.b = Sprite.fromImage(path);

      if (offset !== 0) {
        this.a.position.y = this.b.position.y = offset - this.a.height;
      }
      if (lambda) lambda(this);
    }

    addTo(layer:Container) {
      layer.addChild(this.a);
      layer.addChild(this.b);
    }

    removeFrom(layer:Container) {
      layer.removeChild(this.a);
      layer.removeChild(this.b);
    }


  }

  Endless.prototype.path = '';
  Endless.prototype.a = null;
  Endless.prototype.b = null;
  Endless.prototype.position = 0;
  Endless.prototype.velocity = 1;

}

