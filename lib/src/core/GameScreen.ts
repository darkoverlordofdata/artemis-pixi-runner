module example.core {

  import World = artemis.World;
  import EntitySystem = artemis.EntitySystem;
  import GroupManager = artemis.managers.GroupManager;

  import Constants = example.core.Constants;
  import EndlessSystem = example.systems.EndlessSystem;
  //import MovementSystem = example.systems.MovementSystem;
  import PlayerInputSystem = example.systems.PlayerInputSystem;
  //import SpriteRenderSystem = example.systems.SpriteRenderSystem;

  export class GameScreen {

    private world:World;

    //private spriteRenderSystem:SpriteRenderSystem;

    constructor(sprites, res) {

      var world:World = this.world = new artemis.World();

      world.setManager(new GroupManager());
      world.setSystem(new EndlessSystem());
      //world.setSystem(new MovementSystem());
      world.setSystem(new PlayerInputSystem());

      //this.spriteRenderSystem = world.setSystem(new SpriteRenderSystem(sprites), true);

      world.initialize();
      world.createEntityFromTemplate('endless', res.background, 60, 0).addToWorld();
      world.createEntityFromTemplate('endless', res.foreground, 100, res.background.data.height).addToWorld();
      world.createEntityFromTemplate('player', res.player, 340, 500).addToWorld();

    }

    public render(delta:number) {

      this.world.setDelta(delta);
      this.world.process();
      //this.spriteRenderSystem.process();
    }
  }
}

