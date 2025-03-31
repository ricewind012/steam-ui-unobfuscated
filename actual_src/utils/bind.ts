// Webpack module ID: 93960

/**
 * This is a typescript decorator.  Decorate a class method with @bind to make sure the method is always invoked in
 * 	the context of the object instance it's declared in.
 *
 * This allows you to use it in react without worrying about the reference changing.
 *
 * example:
 *
 * 		@bind onTextInput( event ) { ... }
 *
 * 		render() {
 *			return <input OnInput={ this.onTextInput } />;
 * 		}
 *
 */
export function bind(/*target,*/ propertyKey, descriptor) {
	return {
		get() {
			let fnBound = descriptor.value.bind(this);
			if (!Object.prototype.hasOwnProperty.call(this, propertyKey)) {
				Object.defineProperty(this, propertyKey, {
					value: fnBound,
				});
			}
			return fnBound;
		},
	};
}
