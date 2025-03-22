var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./41537.js");
export const mA = n.createContext(null);
export function ER(e) {
	return n.createElement(
		mA.Provider,
		{
			value: e.instance,
		},
		n.createElement(
			i.F6,
			{
				factory: e.instance.VirtualKeyboardManager,
			},
			e.children,
		),
	);
}
export const $2 = () => n.useContext(mA);
