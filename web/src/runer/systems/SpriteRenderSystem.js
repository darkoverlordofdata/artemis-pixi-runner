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
        var Position = example.components.Position;
        var Sprite = example.components.Sprite;
        var Aspect = artemis.Aspect;
        var EntitySystem = artemis.EntitySystem;
        var Mapper = artemis.annotations.Mapper;
        var SpriteRenderSystem = (function (_super) {
            __extends(SpriteRenderSystem, _super);
            function SpriteRenderSystem(sprites) {
                _super.call(this, Aspect.getAspectForAll(Position, Sprite));
                this.sprites = sprites;
            }
            SpriteRenderSystem.prototype.checkProcessing = function () {
                return true;
            };
            SpriteRenderSystem.prototype.processEntities = function (entities) {
                for (var i = 0, l = entities.size(); i < l; i++) {
                    this.processEach(entities.get(i));
                }
            };
            SpriteRenderSystem.prototype.processEach = function (e) {
                if (this.pm.has(e)) {
                    var position = this.pm.get(e);
                }
            };
            SpriteRenderSystem.prototype.inserted = function (e) {
                //var sprite:Sprite = this.sm.get(e);
                //sprite.sprite_['layer'] = sprite.layer;
                //
                //this.sprites.children.sort((a, b) => {
                //  if (a['layer'] < b['layer']) return -1;
                //  if (a['layer'] > b['layer']) return 1;
                //  return 0;
                //});
            };
            SpriteRenderSystem.prototype.removed = function (e) {
                //  var c:Sprite = <Sprite> e.getComponentByType(Sprite);
                //  c.removeFrom(this.sprites);
            };
            __decorate([
                Mapper(Position)
            ], SpriteRenderSystem.prototype, "pm");
            __decorate([
                Mapper(Sprite)
            ], SpriteRenderSystem.prototype, "sm");
            return SpriteRenderSystem;
        })(EntitySystem);
        systems.SpriteRenderSystem = SpriteRenderSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=SpriteRenderSystem.js.map