import { configure } from "mobx";
import { type ReactNode, memo, useEffect, useMemo } from "react";

import { VQ as NavigationProvider } from "../src/library/35560";
import { wC as WC } from "../src/library/42318.js";
import { TS as Config } from "../src/library/43691.js";
import { rW as useAnonymousServiceTransport } from "../src/library/46382";
import { EO as ModalManagerProvider } from "../src/library/91435.js";

import { oy } from "../chunk~2dcc5aaf7/46422.js";
import { V3 as StoreItemCacheContextProvider } from "../src/chunk~2dcc5aaf7/4855.js";
import { A as CStoreItemCache } from "../src/chunk~2dcc5aaf7/5859.js";
import { u as SteamUIWindows } from "../src/chunk~2dcc5aaf7/10501";
import { BV } from "../src/chunk~2dcc5aaf7/50341";
import { L } from "../src/chunk~2dcc5aaf7/83857.js";
import { KC, gK } from "../src/chunk~2dcc5aaf7/89748.js";

interface StoreItemCacheStuffProps {
	msDelayBatch?: number;
	children: ReactNode;
}

function StoreItemCacheStuff(props: StoreItemCacheStuffProps) {
	const { msDelayBatch, children } = props;
	const pAnonymousServiceTransport = useAnonymousServiceTransport();
	const pContext = useMemo(
		() => ({
			country: Config.COUNTRY,
			language: Config.LANGUAGE,
			realm: Config.EREALM,
		}),
		[],
	);

	useEffect(
		() => CStoreItemCache.Initialize(pAnonymousServiceTransport),
		[pAnonymousServiceTransport],
	);

	return (
		<StoreItemCacheContextProvider
			context={pContext}
			msDelayBatch={msDelayBatch}
			legacyCacheStoreItemData={CStoreItemCache.Get().ReadItem}
		>
			{children}
		</StoreItemCacheContextProvider>
	);
}

const K = memo(() => (
	<WC>
		<L />
		<BV />
	</WC>
));
configure({
	enforceActions: "never",
});

// TODO: somewhere in ricewind012/steam-sharedjscontext-types/normal/shared/interfaces ?
type CConnectionManager = any;

declare global {
	interface Window {
		cm: CConnectionManager;
		ClearBackgroundInterval: typeof clearInterval;
		ClearBackgroundTimeout: typeof clearTimeout;
		SetBackgroundInterval: typeof setInterval;
		SetBackgroundTimeout: typeof setTimeout;
	}
}

(async () => {
	(() => {
		const e = window;
		e.ClearBackgroundInterval = window.clearInterval;
		e.ClearBackgroundTimeout = window.clearTimeout;
		e.SetBackgroundInterval = window.setInterval;
		e.SetBackgroundTimeout = window.setTimeout;
	})();
	const pSteamApp = KC();
	await pSteamApp.Init(window.cm);
})();

interface SPProps {
	cm: CConnectionManager;
}

export default (props: SPProps) => {
	const bFinishedInitStageOne = gK();

	return (
		<>
			<ModalManagerProvider bOnlyPopups>
				<K />
				{bFinishedInitStageOne && (
					<NavigationProvider controller={oy.NavigationManager}>
						<StoreItemCacheStuff>
							<SteamUIWindows cm={props.cm} />
						</StoreItemCacheStuff>
					</NavigationProvider>
				)}
			</ModalManagerProvider>
		</>
	);
};
