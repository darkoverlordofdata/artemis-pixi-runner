var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var systems;
    (function (systems) {
        var Player = example.components.Player;
        var Position = example.components.Position;
        var Sprite = example.components.Sprite;
        var Aspect = artemis.Aspect;
        var Mapper = artemis.annotations.Mapper;
        var EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
        var PlayerInputSystem = (function (_super) {
            __extends(PlayerInputSystem, _super);
            function PlayerInputSystem() {
                var _this = this;
                _super.call(this, Aspect.getAspectForAll(Position, Sprite, Player));
                this.timeToFire = 0;
                this.onTouchStart = function (event) {
                    event = event.changedTouches ? event.changedTouches[0] : event;
                    try {
                        if (document.documentElement['requestFullscreen']) {
                            document.documentElement['requestFullscreen']();
                        }
                        else if (document.documentElement['mozRequestFullScreen']) {
                            document.documentElement['mozRequestFullScreen']();
                        }
                        else if (document.documentElement['webkitRequestFullscreen']) {
                            document.documentElement['webkitRequestFullscreen']();
                        }
                        else if (document.documentElement['msRequestFullscreen']) {
                            document.documentElement['msRequestFullscreen']();
                        }
                    }
                    catch (e) { }
                    _this.jump = true;
                    _this.mouseVector = {
                        x: parseInt(event.clientX),
                        y: parseInt(event.clientY)
                    };
                    return true;
                };
                this.onTouchMove = function (event) {
                    event = event.changedTouches ? event.changedTouches[0] : event;
                    _this.mouseVector = {
                        x: parseInt(event.clientX),
                        y: parseInt(event.clientY)
                    };
                    return true;
                };
                this.onTouchEnd = function (event) {
                    _this.jump = false;
                };
            }
            PlayerInputSystem.prototype.initialize = function () {
                document.addEventListener('touchstart', this.onTouchStart, true);
                document.addEventListener('touchmove', this.onTouchMove, true);
                document.addEventListener('touchend', this.onTouchEnd, true);
                document.addEventListener('mousedown', this.onTouchStart, true);
                document.addEventListener('mousemove', this.onTouchMove, true);
                document.addEventListener('mouseup', this.onTouchEnd, true);
            };
            PlayerInputSystem.prototype.processEach = function (e) {
                if (this.mouseVector === undefined)
                    return;
                var sprite = this.sm.get(e);
                if (this.jump) {
                    sprite.jump();
                }
            };
            PlayerInputSystem.FireRate = 0.1;
            __decorate([
                Mapper(Position)
            ], PlayerInputSystem.prototype, "pm");
            __decorate([
                Mapper(Sprite)
            ], PlayerInputSystem.prototype, "sm");
            return PlayerInputSystem;
        })(EntityProcessingSystem);
        systems.PlayerInputSystem = PlayerInputSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=PlayerInputSystem.js.map