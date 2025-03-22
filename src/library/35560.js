var r = require(/*webcrack:missing*/ "./63696.js");
var i = require("./42898.js");
const s = r.createContext(undefined);
export function VQ(e) {
	const { controller: t } = e;
	r.useEffect(() => {
		t.Init();
	}, [t]);
	return r.createElement(
		s.Provider,
		{
			value: t,
		},
		e.children,
	);
}
export function Vu() {
	return r.useContext(s);
}
export function QI() {
	return (0, i.gc)(Vu()?.GetShowDebugFocusRing()) ?? false;
}
