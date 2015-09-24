module example.templates {

  import Point = PIXI.Point;
  import Container = PIXI.Container;

  import GroupManager = artemis.managers.GroupManager;
  import EntitySystem = artemis.EntitySystem;
  import EntityTemplate = artemis.annotations.EntityTemplate;
  import IEntityTemplate = artemis.IEntityTemplate;
  import Entity = artemis.Entity;
  import World = artemis.World;

  import Position = example.components.Position;
  import Sprite = example.components.Sprite;
  import Player = example.components.Player;
  import Constants = example.core.Constants;

  @EntityTemplate('player')
  export class PlayerTemplate implements IEntityTemplate {

    public buildEntity(entity:Entity, world:World, resource, x:number, y:number):Entity {

      entity.addComponent(Position, x, y);
      entity.addComponent(Sprite, resource.spineData, (sprite:Sprite) => {

        sprite.spine.scale.x = sprite.spine.scale.y = 0.3;
        sprite.spine.position.x = x;
        sprite.spine.position.y = y;
        sprite.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));
        entity.addComponent(Player, sprite.spine);

      });
      world.getManager<GroupManager>(GroupManager).add(entity, Constants.Groups.PLAYER);
      return entity;
    }
  }
}