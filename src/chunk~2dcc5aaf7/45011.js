import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./22222.js";
import a from "./64608.js";
import s, { pg } from "./13869.js";
import l, { qm, sr } from "./77347.js";
import { $ } from "./27756.js";
import m from "./69164.js";
import u from "./10606.js";
import { R7 } from "./11131.js";
export function B(e) {
	pg(<P />, e);
}
function P(e) {
	const t = qm();
	const [r, setR] = n.useState(t);
	const A = R7();
	const p = r.proxy_mode == i.Xu.k_EHTTPProxyMode_Manual;
	const h = r.port == 0 ? "" : r.port;
	const r_exclude_local = r.exclude_local;
	const _ = sr(r);
	const f = () => {
		if (e.closeModal) {
			e.closeModal();
		}
	};
	const BRef = n.useRef(undefined);
	n.useEffect(() => {
		BRef.current?.TakeFocus();
	}, []);
	return (
		<u.eV onCancel={f}>
			<a.Y9>
				<div className="DialogHeader">
					{(0, Localize)("#Settings_Internet_Proxy_Settings")}
				</div>
			</a.Y9>
			<a.nB>
				<m.Z preferredFocus>
					<a.y4
						checked={p}
						onChange={(e) =>
							setR({
								...r,
								proxy_mode: e
									? i.Xu.k_EHTTPProxyMode_Manual
									: i.Xu.k_EHTTPProxyMode_None,
							})
						}
						label={(0, Localize)("#Settings_Internet_Enable_HTTPProxy")}
						navRef={BRef}
					/>
				</m.Z>
				{p && (
					<a.qq
						label={(0, Localize)("#Settings_Internet_ManualProxyAddress")}
						value={r.address}
						maxLength={200}
						placeholder="http://proxy"
						onChange={(e) =>
							setR({
								...r,
								address: e.target.value,
							})
						}
					/>
				)}
				{p && (
					<a.qq
						label={(0, Localize)("#Settings_Internet_Port")}
						value={h}
						maxLength={5}
						placeholder=""
						onChange={(e) =>
							setR({
								...r,
								port: g(e.target.value),
							})
						}
						mustBeNumeric
					/>
				)}
				{p && (
					<a.y4
						checked={r_exclude_local}
						onChange={(e) =>
							setR({
								...r,
								exclude_local: e,
							})
						}
						label={(0, Localize)(
							"#Settings_Internet_ManualProxyExcludeLoopback",
						)}
						bottomSeparator="none"
					/>
				)}
			</a.nB>
			<a.wi>
				<a.CB
					strOKText={(0, Localize)("#Login_Continue")}
					onOK={async () => {
						const { bSuccess, bRestartRequired } =
							await l.OQ.Get().SetProxyInfo(r);
						let i;
						if (bRestartRequired) {
							i = A.ownerWindow;
							$({
								strDescription: (0, Localize)("#Settings_Internet_RestartBody"),
								strCancelButtonText: (0, Localize)(
									"#Settings_Internet_RestartLater",
								),
								ownerWindow: i,
							});
						}
						if (bSuccess && e.closeModal) {
							e.closeModal();
						}
					}}
					onCancel={f}
					bOKDisabled={!_}
				/>
			</a.wi>
		</u.eV>
	);
}
function g(e) {
	if (e == null || e === "") {
		return 0;
	}
	const t = parseInt(e);
	if (isNaN(t)) {
		return 0;
	} else {
		return t;
	}
}
