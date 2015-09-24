var example;
(function (example) {
    var core;
    (function (core) {
        var GroupManager = artemis.managers.GroupManager;
        var EndlessSystem = example.systems.EndlessSystem;
        //import MovementSystem = example.systems.MovementSystem;
        var PlayerInputSystem = example.systems.PlayerInputSystem;
        //import SpriteRenderSystem = example.systems.SpriteRenderSystem;
        var GameScreen = (function () {
            //private spriteRenderSystem:SpriteRenderSystem;
            function GameScreen(sprites, res) {
                var world = this.world = new artemis.World();
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
            GameScreen.prototype.render = function (delta) {
                this.world.setDelta(delta);
                this.world.process();
                //this.spriteRenderSystem.process();
            };
            return GameScreen;
        })();
        core.GameScreen = GameScreen;
    })(core = example.core || (example.core = {}));
})(example || (example = {}));
//# sourceMappingURL=GameScreen.js.map