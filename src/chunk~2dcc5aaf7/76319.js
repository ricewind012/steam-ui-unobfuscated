import n from "./63696.js";
import i from "./94361.js";
export function p(e) {
	const { children, name } = e;
	let a;
	a = name;
	n.useEffect(() => {
		i.y.ReportTrackedComponent(a);
	}, [a]);
	return <>{children}</>;
}
export function L(e) {
	i.y.ReportTrackedAction(e);
}
