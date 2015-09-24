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
    var templates;
    (function (templates) {
        var GroupManager = artemis.managers.GroupManager;
        var EntitySystem = artemis.EntitySystem;
        var EntityTemplate = artemis.annotations.EntityTemplate;
        var Endless = example.components.Endless;
        var Position = example.components.Position;
        var Constants = example.core.Constants;
        var EndlessTemplate = (function () {
            function EndlessTemplate() {
            }
            EndlessTemplate.prototype.buildEntity = function (entity, world, resource, velocity, y) {
                entity.addComponent(Position, 0, 0);
                entity.addComponent(Endless, resource.url, velocity, y, function (endless) {
                    endless.addTo(EntitySystem.blackBoard.getEntry('sprites'));
                });
                world.getManager(GroupManager).add(entity, Constants.Groups.ENDLESS);
                return entity;
            };
            EndlessTemplate = __decorate([
                EntityTemplate('endless')
            ], EndlessTemplate);
            return EndlessTemplate;
        })();
        templates.EndlessTemplate = EndlessTemplate;
    })(templates = example.templates || (example.templates = {}));
})(example || (example = {}));
//# sourceMappingURL=EndlessTemplate.js.map