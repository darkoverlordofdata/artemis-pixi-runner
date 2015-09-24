module example.core {

  export class Constants {

    public static FRAME_WIDTH:number = window.innerWidth;
    public static FRAME_HEIGHT:number = window.innerHeight;

    public static Groups = {
      PLAYER: "player",
      ENDLESS: "endless"
    };

    public static assets = {
      background: 'res/iP4_BGtile.jpg',
      foreground: 'res/iP4_ground.png',
      player: 'res/Pixie.json'
    };


  }
}

