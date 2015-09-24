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
        var Endless = example.components.Endless;
        var Aspect = artemis.Aspect;
        var Mapper = artemis.annotations.Mapper;
        var EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
        var EndlessSystem = (function (_super) {
            __extends(EndlessSystem, _super);
            function EndlessSystem() {
                _super.call(this, Aspect.getAspectForAll(Endless));
            }
            EndlessSystem.prototype.processEach = function (e) {
                var endless = this.bm.get(e);
                var a = endless.a;
                var b = endless.b;
                var width = a.width;
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
            };
            __decorate([
                Mapper(Endless)
            ], EndlessSystem.prototype, "bm");
            return EndlessSystem;
        })(EntityProcessingSystem);
        systems.EndlessSystem = EndlessSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=EndlessSystem.js.map