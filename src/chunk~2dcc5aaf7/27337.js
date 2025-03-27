import n from "./63696.js";
import i from "./23038.js";
import a from "./58254.js";
import { A } from "./90765.js";
const o = 500;
export class H extends n.Component {
	render() {
		let {
			keyExtractor,
			style,
			duration = o,
			className,
			children,
			childRef,
			...u
		} = this.props;
		const d = {
			...(style || {}),
			transitionDuration: `${duration / 1000}s`,
		};
		return (
			<i.A {...u} className={A("crossfade", className)}>
				<a.A
					nodeRef={childRef}
					classNames="crossfade-anim"
					timeout={duration}
					key={keyExtractor()}
					style={d}
				>
					{children}
				</a.A>
			</i.A>
		);
	}
}
export function y(e) {
	const { src, ...r } = e;
	const i = {
		backgroundImage: `url(${src})`,
	};
	const ARef = n.useRef(null);
	return (
		<H style={i} keyExtractor={() => src} childRef={ARef} {...r}>
			<div ref={ARef} className="crossfade-img" />
		</H>
	);
}
