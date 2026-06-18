import React from "react";
import { createRoot } from "react-dom/client";
import throbberStyles from "../src/library/3586.js";
import { Rh as ActiveAccountProvider } from "../src/library/24295.js";
import u from "../src/library/26853.js";
import f from "../src/library/37905.js";
import v from "../src/library/42318.js";
import { ID as BIsChinaLauncher } from "../src/library/44846.js";
import M from "../src/library/46382.js";
import { bs } from "../src/library/52451.js";
import ConfigStuff from "../src/library/72476.js";
import L from "../src/library/72905.js";
import { s as ReactQueryDevtoolsClient } from "../src/library/75144.js";
import y from "../src/library/88696.js";
import { A as BuildClassName } from "../src/library/90765.js";
import B from "../src/library/91435.js";
import { CMInterfaceSharedClientConnection } from "../src/library/cminterface.js";
import some_lib from "./80986.js";
import { q3 } from "./90095.js";
import { ESteamRealm } from "./clienttypes/realm.js";
import { AssertMsg } from "./utils/assert.js";
import {
	GetConfiguredLocale,
	LocalizationManager,
} from "./utils/localization.js";

function AddStyleSheet(href: string, otherEl: HTMLElement) {
	let el = document.createElement("link");
	el.href = href;
	el.type = "text/css";
	el.rel = "stylesheet";
	let elParent = otherEl.parentElement;
	elParent.insertBefore(el, otherEl);
	elParent.removeChild(otherEl);
}

const k_strConfigParamsItem = "steam-dev-configparams";

function NormalizeBool(str: string) {
	return str === "true" || (str !== "false" && (Number(str) || str));
}

const FullLogin = React.lazy(() => import("./login/fulllogin"));
const R = React.lazy(() => import("./sp"));

const k_strIsFirstClientLoadItem = "is-first-client-load";

export function BIsFirstClientLoad() {
	return sessionStorage.getItem(k_strIsFirstClientLoadItem) !== "false";
}

function PreloadThrobber() {
	return (
		<div
			className={BuildClassName(
				throbberStyles.Container,
				throbberStyles.PreloadThrobber,
			)}
		>
			<u.t size="xlarge" static />
			<div className={throbberStyles.ThreeDots}>
				<div
					className={BuildClassName(throbberStyles.Dot, throbberStyles.Dot1)}
				/>
				<div
					className={BuildClassName(throbberStyles.Dot, throbberStyles.Dot2)}
				/>
				<div
					className={BuildClassName(throbberStyles.Dot, throbberStyles.Dot3)}
				/>
			</div>
		</div>
	);
}

interface AppProps {
	cm: any;
}

function App(props: AppProps) {
	const { cm } = props;
	let content = null;
	if (ConfigStuff.IN_LOGIN || ConfigStuff.IN_LOGIN_REFRESH) {
		content = (
			<React.Suspense fallback={<PreloadThrobber />}>
				<v.tH>
					<L.A domain="steamclient">
						<ConfigStuff.ss
							IN_DESKTOPUI={false}
							IN_GAMEPADUI={false}
							IN_VR={false}
						>
							<B.EO>
								<FullLogin cm={cm} />
							</B.EO>
						</ConfigStuff.ss>
					</L.A>
				</v.tH>
			</React.Suspense>
		);
	} else {
		AssertMsg(
			ConfigStuff.IN_STEAMUI_SHARED_CONTEXT,
			"nosteamuisharedjscontext is no longer supported!",
		);
		content = (
			<React.Suspense fallback={null}>
				<R cm={cm} />
			</React.Suspense>
		);
	}
	return (
		<ReactQueryDevtoolsClient debug steamUI>
			<AppContent cm={cm}>{content}</AppContent>
		</ReactQueryDevtoolsClient>
	);
}

function AppContent(props) {
	const { cm, children } = props;
	const useActiveCMInterface = React.useCallback(() => cm, [cm]);
	const useStorage = bs(() => new y.A());
	const useActiveAccount = q3(() => cm.steamid.ConvertTo64BitString());
	const value = React.useMemo(
		() => ({
			useActiveAccount: () => useActiveAccount,
		}),
		[useActiveAccount],
	);
	return (
		<ActiveAccountProvider value={value}>
			<M.VQ useActiveCMInterface={useActiveCMInterface} useStorage={useStorage}>
				{children}
			</M.VQ>
		</ActiveAccountProvider>
	);
}

SteamClient._internal.RegisterForStyleChanges((vecStyles) => {
	const k_strSteamHost = "https://steamloopback.host/";
	let styles = [];
	let vecExistingStyles = document.querySelectorAll<HTMLLinkElement>(
		'link[rel="stylesheet"]',
	);

	for (let sheet of vecExistingStyles) {
		let href = sheet.href;
		let strNormalized = "";
		if (href.startsWith(k_strSteamHost)) {
			strNormalized = href.substr(27);
		}
		let idx = strNormalized.indexOf("?");
		if (idx >= 0) {
			strNormalized = strNormalized.substr(0, idx);
		}
		strNormalized = decodeURI(strNormalized).replace(/\\/g, "/");
		for (let style of vecStyles) {
			if (strNormalized != style) {
				continue;
			}
			const newAbsolute = strNormalized.startsWith("/")
				? strNormalized
				: `/${strNormalized}`;
			styles.push({
				sheet,
				newAbsolute,
			});
			break;
		}
	}

	for (let style of styles) {
		AddStyleSheet(style.newAbsolute, style.sheet);
	}
});

(() => {
	window.cm = new CMInterfaceSharedClientConnection();
	(() => {
		let params = "";
		if (
			["index.html", "sp.html"].some((e) =>
				window.location.pathname.includes(e),
			)
		) {
			params = window.location.search;
			sessionStorage.setItem(k_strConfigParamsItem, params);
			console.log("Storing new config params", params);
		} else {
			params = sessionStorage.getItem(k_strConfigParamsItem);
			console.log("Loading previous config params", params);
		}
		if (params) {
			const parsed_params = some_lib.parse(params.slice(1));
			for (const param in parsed_params) {
				if (Object.getOwnPropertyNames(ConfigStuff).includes(param)) {
					ConfigStuff[param] = NormalizeBool(parsed_params[param]);
				} else if (Object.getOwnPropertyNames(ConfigStuff.iA).includes(param)) {
					ConfigStuff.iA[param] = NormalizeBool(parsed_params[param]);
				} else if (Object.getOwnPropertyNames(f.w).includes(param)) {
					f.w[param] = NormalizeBool(parsed_params[param]);
				} else {
					console.error("Got unknown config property", param);
				}
			}
			const strLocale = GetConfiguredLocale();
			console.log("setting locale:", strLocale);
			if (strLocale) {
				document.documentElement.setAttribute("lang", strLocale);
				LocalizationManager.SetPreferredLocales([strLocale]);
			}
		}
		if (ConfigStuff.EREALM == ESteamRealm.k_ESteamRealmUnknown) {
			ConfigStuff.EREALM = BIsChinaLauncher(ConfigStuff.LAUNCHER_TYPE)
				? ESteamRealm.k_ESteamRealmChina
				: ESteamRealm.k_ESteamRealmGlobal;
		}
	})();
	ConfigStuff.IN_STEAMUI = true;
	(() => {
		let bNeedsRefresh = true;
		if (
			sessionStorage.getItem(k_strIsFirstClientLoadItem) &&
			ConfigStuff.CLIENT_SESSION > 0
		) {
			const t = 30;
			if (Date.now() / 1000 > ConfigStuff.CLIENT_SESSION + t) {
				bNeedsRefresh = false;
			}
		}
		sessionStorage.setItem(
			k_strIsFirstClientLoadItem,
			bNeedsRefresh ? "true" : "false",
		);
	})();
	const root = document.getElementById("root");
	createRoot(root).render(<App cm={window.cm} />);
})();
