import n from "./63696.js";
const IContext = n.createContext({});
export const T2 = () => n.useContext(IContext).closeParent;
export function hE(e) {
	const { closeModal, children } = e;
	return (
		<IContext.Provider
			value={{
				closeParent: closeModal,
			}}
		>
			{children}
		</IContext.Provider>
	);
}
