import { createContext, useContext, useMemo } from "react";

import { FailAssertion } from "@actual_src/utils/assert.js";

const ServiceTransportContext = createContext(undefined);
const ServiceTransportProvider = ServiceTransportContext.Provider;
const useActiveServiceTransportContext = () => {
	const ctx = useContext(ServiceTransportContext);
	if (!ctx) {
		throw new Error(
			"called useActiveServiceTransportContext outside of ServiceTransportProvider",
		);
	}
	return ctx;
};

export function VQ(props) {
	const { useStorage, children } = props;
	let useActiveCMInterface;
	let useActiveSteamInterface;
	if ("useActiveCMInterface" in props) {
		useActiveSteamInterface = useActiveCMInterface = props.useActiveCMInterface;
	} else {
		if (!("useActiveSteamInterface" in props)) {
			FailAssertion(
				props,
				"neither useActiveCMInterface nor useActiveSteamInterface were provided",
			);
			return children;
		}
		useActiveSteamInterface = props.useActiveSteamInterface;
	}

	const value = useMemo(
		() => ({
			useActiveSteamInterface,
			useActiveCMInterface,
			useStorage,
		}),
		[useActiveSteamInterface, useActiveCMInterface, useStorage],
	);
	return (
		<ServiceTransportProvider value={value}>
			{children}
		</ServiceTransportProvider>
	);
}

export const KV = () =>
	useActiveServiceTransportContext()
		.useActiveSteamInterface()
		.GetServiceTransport();
export const rW = () =>
	useActiveServiceTransportContext()
		.useActiveSteamInterface()
		.GetAnonymousServiceTransport();
export const rX = () => useActiveServiceTransportContext().useStorage();
export const TR = () =>
	useActiveServiceTransportContext().useActiveSteamInterface();
export const zv = () => {
	const { useActiveCMInterface } = useActiveServiceTransportContext();
	if (!useActiveCMInterface) {
		throw new Error(
			"called useActiveCMInterface outside of ServiceTransportRoot",
		);
	}
	return useActiveCMInterface();
};
