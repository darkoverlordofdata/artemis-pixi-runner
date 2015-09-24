module example.components {
	
	import Container = PIXI.Container;
	import Component = artemis.Component;
	import PooledComponent = artemis.PooledComponent;
	import Pooled = artemis.annotations.Pooled;

	@Pooled()
	export class Player extends PooledComponent {
  	public static className = 'Player';

		public spine;

		public initialize(spine?, lambda?:Function) {

			this.spine = spine;
			if (lambda) lambda(this);
		}
	}

	Player.prototype.spine = null;
}
