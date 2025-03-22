var n = require(/*webcrack:missing*/ "./63696.js");
const i = n.createContext({});
export const T2 = () => n.useContext(i).closeParent;
export function hE(e) {
	const { closeModal: t, children: r } = e;
	return n.createElement(
		i.Provider,
		{
			value: {
				closeParent: t,
			},
		},
		r,
	);
}
