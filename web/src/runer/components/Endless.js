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
    var components;
    (function (components) {
        var PooledComponent = artemis.PooledComponent;
        var Pooled = artemis.annotations.Pooled;
        var Sprite = PIXI.Sprite;
        var Endless = (function (_super) {
            __extends(Endless, _super);
            function Endless() {
                _super.apply(this, arguments);
            }
            Endless.prototype.initialize = function (path, velocity, offset, lambda) {
                this.position = 0;
                this.velocity = velocity;
                this.path = path;
                this.a = Sprite.fromImage(path);
                this.b = Sprite.fromImage(path);
                if (offset !== 0) {
                    this.a.position.y = this.b.position.y = offset - this.a.height;
                }
                if (lambda)
                    lambda(this);
            };
            Endless.prototype.addTo = function (layer) {
                layer.addChild(this.a);
                layer.addChild(this.b);
            };
            Endless.prototype.removeFrom = function (layer) {
                layer.removeChild(this.a);
                layer.removeChild(this.b);
            };
            Endless.className = 'Endless';
            Endless = __decorate([
                Pooled()
            ], Endless);
            return Endless;
        })(PooledComponent);
        components.Endless = Endless;
        Endless.prototype.path = '';
        Endless.prototype.a = null;
        Endless.prototype.b = null;
        Endless.prototype.position = 0;
        Endless.prototype.velocity = 1;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=Endless.js.map