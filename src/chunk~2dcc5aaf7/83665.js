import n from "./63696.js";
import i from "./58254.js";
export function M(e) {
	const { children, ...r } = e;
	const ARef = n.useRef(null);
	return (
		<i.A nodeRef={ARef} {...r}>
			{e.children(ARef)}
		</i.A>
	);
}
