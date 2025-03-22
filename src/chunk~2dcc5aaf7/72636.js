var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./28864.js");
var a = require("./18914.js");
var s = require(/*webcrack:missing*/ "./72476.js");
var o = require(/*webcrack:missing*/ "./11131.js");
var l = require("./96680.js");
var c = require(/*webcrack:missing*/ "./3524.js");
export function O(e) {
	const { instance: t, ownerWindow: r, children: m } = e;
	const u = t.IsVRWindow();
	n.useEffect(() => t.Init(), [t]);
	const d = n.useMemo(
		() => ({
			IN_GAMEPADUI: true,
			IN_DESKTOPUI: false,
			IN_VR: u ?? false,
		}),
		[u],
	);
	n.useEffect(() => {
		if (r) {
			r.ConfigContext = d;
		}
	}, [r, d]);
	const A = n.useRef(undefined);
	const p = (0, i.Ue)(A, e.refFocusNavContext);
	n.useEffect(() => t.InitFocusNavContext(A.current), [t]);
	return n.createElement(
		a.RT,
		null,
		n.createElement(
			s.ss,
			{
				...d,
			},
			n.createElement(
				o.kc,
				{
					ownerWindow: r,
				},
				n.createElement(
					l.ER,
					{
						instance: t,
					},
					n.createElement(
						c.b5,
						{
							ownerWindow: r,
							refFocusNavContext: p,
							suppressGamepadInput: u,
						},
						m,
					),
				),
			),
		),
	);
}
