module example.templates {

  import Point = PIXI.Point;
  import Container = PIXI.Container;

  import GroupManager = artemis.managers.GroupManager;
  import EntitySystem = artemis.EntitySystem;
  import EntityTemplate = artemis.annotations.EntityTemplate;
  import IEntityTemplate = artemis.IEntityTemplate;
  import Entity = artemis.Entity;
  import World = artemis.World;

  import Endless = example.components.Endless;
  import Position = example.components.Position;
  import Constants = example.core.Constants;

  @EntityTemplate('endless')
  export class EndlessTemplate implements IEntityTemplate {

    public buildEntity(entity:Entity, world:World, resource, velocity:number, y:number):Entity {

      entity.addComponent(Position, 0, 0);
      entity.addComponent(Endless, resource.url, velocity, y, (endless) => {
        endless.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));

      });

      world.getManager<GroupManager>(GroupManager).add(entity, Constants.Groups.ENDLESS);
      return entity;
    }
  }
}