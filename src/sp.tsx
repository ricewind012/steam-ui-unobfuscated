import { configure } from "mobx";
import { useMemo, useEffect, memo, type ReactNode } from "react";

import { VQ } from "./library/35560.js";
import { wC as WC } from "./library/42318.js";
import { TS as Config } from "./library/43691.js";
import { rW } from "./library/46382.js";
import { EO } from "./library/91435.js";

import { V3 } from "./chunk~2dcc5aaf7/4855.js";
import { A as CStoreItemCache } from "./chunk~2dcc5aaf7/5859.js";
import { u as U } from "./chunk~2dcc5aaf7/10501.js";
import { oy } from "./chunk~2dcc5aaf7/46422.js";
import { KC, gK } from "./chunk~2dcc5aaf7/89748.js";
import { BV } from "./chunk~2dcc5aaf7/50341.js";
import { L } from "./chunk~2dcc5aaf7/83857.js";

interface WProps {
	msDelayBatch?: number;
	children: ReactNode;
}

function W(props: WProps) {
	const { msDelayBatch, children } = props;
	const pAnonymousServiceTransport = rW();
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
		<V3
			context={pContext}
			msDelayBatch={msDelayBatch}
			legacyCacheStoreItemData={CStoreItemCache.Get().ReadItem}
		>
			{children}
		</V3>
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
			<EO bOnlyPopups>
				<K />
				{bFinishedInitStageOne && (
					<VQ controller={oy.NavigationManager}>
						<W>
							<U cm={props.cm} />
						</W>
					</VQ>
				)}
			</EO>
		</>
	);
};
