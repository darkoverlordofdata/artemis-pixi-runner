var example;
(function (example) {
    var core;
    (function (core) {
        var Constants = (function () {
            function Constants() {
            }
            Constants.FRAME_WIDTH = window.innerWidth;
            Constants.FRAME_HEIGHT = window.innerHeight;
            Constants.Groups = {
                PLAYER: "player",
                ENDLESS: "endless"
            };
            Constants.assets = {
                background: 'res/iP4_BGtile.jpg',
                foreground: 'res/iP4_ground.png',
                player: 'res/Pixie.json'
            };
            return Constants;
        })();
        core.Constants = Constants;
    })(core = example.core || (example.core = {}));
})(example || (example = {}));
//# sourceMappingURL=Constants.js.map