import { createContext, useContext, useEffect } from "react";
import { gc } from "./42898.js";

const NavigationContext = createContext(undefined);

export function VQ(props) {
	const { controller } = props;
	useEffect(() => {
		controller.Init();
	}, [controller]);
	return (
		<NavigationContext.Provider value={controller}>
			{props.children}
		</NavigationContext.Provider>
	);
}

export function Vu() {
	return useContext(NavigationContext);
}

export function QI() {
	return gc(Vu()?.GetShowDebugFocusRing()) ?? false;
}
