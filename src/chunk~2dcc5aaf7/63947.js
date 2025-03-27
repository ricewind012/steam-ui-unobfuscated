import { Localize } from "../../actual_src/utils/localization.js";
import { CopyTextToClipboard } from "../../actual_src/utils/domutils.js";
import n, { T } from "./78057.js";
import i, { PA } from "./41230.js";
import a from "./63696.js";
import s from "./64608.js";
import o from "./10606.js";
import l, { pg } from "./13869.js";
import m from "./69164.js";
import { A as A_1 } from "./90765.js";
import A from "./29597.js";
const p = A;
export function F(e, t, r, n) {
	pg(<H app={t} onClose={n} bShowDontShowCheckbox={r} />, e);
}
const H = PA((e) => {
	const { app, bShowDontShowCheckbox, onClose, closeModal } = e;
	const A = T(app.appid);
	const g = A?.bSupportsCDKeyCopyToClipboard;
	const [h, setH] = a.useState(false);
	const [_, set] = a.useState("");
	const b = a.useCallback(
		(e) => {
			if (g) {
				CopyTextToClipboard(e);
				set(e);
				setTimeout(() => set(""), 2000);
			}
		},
		[g],
	);
	const y = a.useCallback(() => {
		if (onClose) {
			onClose(h);
		}
		if (closeModal) {
			closeModal();
		}
	}, [h, onClose, closeModal]);
	a.useEffect(() => {
		SteamClient.Apps.RequestLegacyCDKeysForApp(app.appid);
	}, [app.appid]);
	if (A) {
		return (
			<o.eV className={p.CDKeysDialog} onCancel={y}>
				<s.Y9>{(0, Localize)("#GameAction_ShowCDKeys")}</s.Y9>
				<s.nB>
					<s.nB>
						<div className={p.Description}>
							{(0, Localize)(
								g
									? "#GameAction_ShowCDKeys_Desc"
									: "#GameAction_ShowCDKeys_Desc_NoCopy",
								app.display_name,
							)}
						</div>
						<div className={p.KeyList}>
							{A.vecLegacyCDKeys.map((e, t) => {
								if (e.eResult != 1 || !e.strKey || !e.strKey || !e.strName) {
									return null;
								}
								const r = _ == e.strKey;
								return (
									<m.Z
										focusable
										key={t}
										className={p.CDKeyOption}
										onActivate={() => b(e.strKey)}
									>
										<div className={p.KeyName}>{e.strName}</div>
										<div className={A_1(p.KeyValue, r && p.CopyAnimation)}>
											{r
												? (0, Localize)("#GameAction_ShowCDKeys_Copied")
												: e.strKey}
										</div>
									</m.Z>
								);
							})}
						</div>
						{bShowDontShowCheckbox && (
							<s.Yh
								controlled
								checked={h}
								onChange={setH}
								label={(0, Localize)("#GameAction_ShowCDKeys_DontShowAgain")}
							/>
						)}
					</s.nB>
					<s.$n onClick={y}>{(0, Localize)("#Generic_Close")}</s.$n>
				</s.nB>
			</o.eV>
		);
	} else {
		return null;
	}
});
