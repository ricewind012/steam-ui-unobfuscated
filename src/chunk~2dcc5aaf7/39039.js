import n from "./83957.js";
import a from "./63696.js";
const i = n;
export function m(e) {
	const TRef = a.useRef(i.CancelToken.source());
	a.useEffect(() => {
		const t_current = TRef.current;
		return () => t_current.cancel(e ? `${e}: unmounting` : "unmounting");
	}, [e]);
	return TRef.current;
}
