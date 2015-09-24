module example.systems {

  import Endless = example.components.Endless;
  import Position = example.components.Position;

  import Aspect = artemis.Aspect;
  import Entity = artemis.Entity;
  import Mapper = artemis.annotations.Mapper;
  import ComponentMapper = artemis.ComponentMapper;
  import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;

  import Sprite = PIXI.Sprite;

  export class EndlessSystem extends EntityProcessingSystem {
    @Mapper(Endless) bm:ComponentMapper<Endless>;

    constructor() {
      super(Aspect.getAspectForAll(Endless));
    }

    public processEach(e:Entity) {
      var endless:Endless = this.bm.get(e);
      var a:Sprite = endless.a;
      var b:Sprite = endless.b;
      var width:number = a.width;
      var position = -(endless.position += endless.velocity * this.world.delta);

      a.position.x = position;
      a.position.x %= width * 2;
      if (a.position.x < 0) {
        a.position.x += width * 2;
      }
      a.position.x -= width;


      b.position.x = position + width;
      b.position.x %= width * 2;
      if (b.position.x < 0) {
        b.position.x += width * 2;
      }
      b.position.x -= width;



    }
  }
}

