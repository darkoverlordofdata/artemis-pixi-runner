module example.systems {

  import Player = example.components.Player;
  import Position = example.components.Position;
  import Sprite = example.components.Sprite;

  import Aspect = artemis.Aspect;
  import ComponentMapper = artemis.ComponentMapper;
  import Entity = artemis.Entity;
  import Mapper = artemis.annotations.Mapper;
  import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
  import Constants = example.core.Constants;
  import Container = PIXI.Container;

  export class PlayerInputSystem extends EntityProcessingSystem  {
    private static FireRate = 0.1;

    @Mapper(Position) pm:ComponentMapper<Position>;
    @Mapper(Sprite) sm:ComponentMapper<Sprite>;

    private jump:boolean;
    private timeToFire:number=0;
    private mouseVector;

    constructor() {
      super(Aspect.getAspectForAll(Position, Sprite, Player));
    }


    public initialize() {

      document.addEventListener('touchstart', this.onTouchStart, true);
      document.addEventListener('touchmove', this.onTouchMove, true);
      document.addEventListener('touchend', this.onTouchEnd, true);

      document.addEventListener('mousedown', this.onTouchStart, true);
      document.addEventListener('mousemove', this.onTouchMove, true);
      document.addEventListener('mouseup', this.onTouchEnd, true);

    }
    
    private onTouchStart = (event) => {
      event = event.changedTouches ? event.changedTouches[0] : event;

      try {
        if (document.documentElement['requestFullscreen']) {
          document.documentElement['requestFullscreen']();
        } else if (document.documentElement['mozRequestFullScreen']) {
          document.documentElement['mozRequestFullScreen']();
        } else if (document.documentElement['webkitRequestFullscreen']) {
          document.documentElement['webkitRequestFullscreen']();
        } else if (document.documentElement['msRequestFullscreen']) {
          document.documentElement['msRequestFullscreen']();
        }
      } catch (e) {}

      this.jump = true;
      this.mouseVector = {
        x: parseInt(event.clientX),
        y: parseInt(event.clientY)
      };
      return true;
    };

    private onTouchMove = (event) => {
      event = event.changedTouches ? event.changedTouches[0] : event;
      this.mouseVector = {
        x: parseInt(event.clientX),
        y: parseInt(event.clientY)
      };
      return true;
    };

    private onTouchEnd = (event) => {
      this.jump = false;
    };

    protected processEach(e:Entity) {

      if (this.mouseVector === undefined) return;
      var sprite:Sprite = this.sm.get(e);
      
      if (this.jump) {
        sprite.jump();
      }
      
    }
  }
}
