module example.core {

  import Container = PIXI.Container;
  import Sprite = PIXI.Sprite;
  import SystemRenderer = PIXI.SystemRenderer;
  import GameScreen = example.core.GameScreen;
  import Constants = example.core.Constants;
  import EntitySystem = artemis.EntitySystem;

  export class Game {

    public sprites:Container;
    public renderer:SystemRenderer;
    public gameScreen:GameScreen;
    private delta:number=0;
    private previousTime:number=0;

    /**
     * Load assets and start
     */
    public static main() {
      for (var asset in Constants.assets) {
        PIXI.loader.add(asset, Constants.assets[asset]);
      }
      PIXI.loader.load((loader, resources) => new Game(resources));
    }

    /**
     * Create the game instance
     * @param resources
     */
    constructor(resources) {

      /** set the stage */
      this.sprites = new Container();
      this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
        backgroundColor:0x000000
      });

      /** save the resources on the blackboard */
      EntitySystem.blackBoard.setEntry('resources', resources);
      EntitySystem.blackBoard.setEntry('sprites', this.sprites);
      EntitySystem.blackBoard.setEntry('webgl', this.renderer.type === PIXI.RENDERER_TYPE.WEBGL);

      /** setup the environment */
      this.renderer.view.style.position = "absolute";
      document.body.appendChild(this.renderer.view);
      window.addEventListener('resize', this.resize, true);
      window.onorientationchange = this.resize;

      /** start the game */
      this.gameScreen = new GameScreen(this.sprites, resources);
      requestAnimationFrame(this.update);
    }

    /**
     * Game Loop
     * @param time
     */
    update = (time:number) => {
      this.delta = this.previousTime || time;
      this.previousTime = time;
      this.gameScreen.render((time - this.delta) * 0.001);
      this.renderer.render(this.sprites);
      requestAnimationFrame(this.update);
    };

    /**
     * Resize window
     */
    resize = () => {
      var height = window.innerHeight;
      var width = window.innerWidth;
      this.renderer.resize(width, height);
    };

  }
}

