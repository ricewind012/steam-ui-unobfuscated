import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i, { Nr } from "./42318.js";
import s from "./63367.js";
import o from "./10606.js";
import l from "./64608.js";
import c from "./92445.js";
import u, { R7 } from "./11131.js";
import d from "./35488.js";
import A from "./26853.js";
import { A as A_1 } from "./90765.js";
import { br } from "./18869.js";
import h from "./43691.js";
const m = c;
export function V(e) {
	const t = e && e[0] == '"' ? e.slice(1, -1) : e || "";
	return SteamClient.System.OpenFileDialog({
		strTitle: Localize("#AddNonSteam_PickAppTitle"),
		rgFilters: _(),
		strInitialFile: t,
	});
}
function _() {
	switch (h.TS.PLATFORM) {
		case "windows": {
			return [
				{
					strFileTypeName: Localize("#AddNonSteam_Filter_Exe_Windows"),
					rFilePatterns: ["*.exe"],
					bUseAsDefault: true,
				},
				{
					strFileTypeName: Localize("#AddNonSteam_Filter_All"),
					rFilePatterns: ["*.*"],
				},
			];
		}
		case "macos": {
			return [
				{
					strFileTypeName: Localize("#AddNonSteam_Filter_Exe_MacOS"),
					rFilePatterns: ["*.app"],
					bUseAsDefault: true,
				},
				{
					strFileTypeName: Localize("#AddNonSteam_Filter_All"),
					rFilePatterns: ["*"],
				},
			];
		}
		case "linux": {
			return [
				{
					strFileTypeName: Localize("#AddNonSteam_Filter_Exe_Linux"),
					rFilePatterns: ["*.application", "*.exe", "*.sh", "*.AppImage"],
					bUseAsDefault: true,
				},
				{
					strFileTypeName: Localize("#AddNonSteam_Filter_All"),
					rFilePatterns: ["*"],
				},
			];
		}
		default: {
			return [
				{
					strFileTypeName: Localize("#AddNonSteam_Filter_All"),
					rFilePatterns: ["*"],
				},
			];
		}
	}
}
export const p = Nr(() => {
	const [e, setE] = n.useState(false);
	const [r, setR] = n.useState();
	n.useEffect(
		() =>
			s.Dt.RegisterForRunSteamURL(7, "open/addnonsteamgame", (e, r) => {
				setE(true);
			}).unregister,
		[],
	);
	const c = n.useCallback(() => {
		setE(false);
	}, [setE]);
	if (!e) {
		return null;
	}
	const u = Localize("#AddNonSteam_Title");
	return (
		<o.hM
			strTitle={u}
			onDismiss={c}
			resizable
			popupWidth={700}
			popupHeight={650}
			minWidth={600}
			minHeight={400}
			refPopup={setR}
			className={m.AddNonSteamGameDialog}
		>
			<l.Y9 className={m.DialogHeader}>{u}</l.Y9>
			<Y />
		</o.hM>
	);
});
let b;
function Y(e) {
	const [t, setT] = n.useState();
	const i = R7();
	const [s, setS] = n.useState(b.Name);
	const [c, setC] = n.useState("");
	const A = br();
	n.useEffect(() => {
		SteamClient.Apps?.ScanForInstalledNonSteamApps().then(setT);
	}, [setT]);
	const [h, setH] = n.useState(new Set());
	const f = (e, t, r) => {
		if (t) {
			if (!h.has(e.strCmdline) && (h.add(e.strCmdline), setH(new Set(h)), r)) {
				const t = i.ownerWindow.document.getElementById(e.strCmdline);
				if (t) {
					t.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			}
		} else if (h.delete(e.strCmdline)) {
			setH(new Set(h));
		}
	};
	const y = () => {
		if (h.size == 0) {
			return;
		}
		let e = false;
		for (let r of h) {
			const n = t.find((e) => e.strCmdline == r);
			if (n) {
				SteamClient.Apps?.AddShortcut(
					n.strAppName,
					n.strExePath,
					n.strArguments,
					n.strCmdline,
				).then((t) => {
					if (!e) {
						e = true;
						A.App(t);
					}
				});
			} else {
				console.log("Could not find app in our list", r);
			}
		}
		i.ownerWindow.close();
	};
	let v;
	let I;
	switch (s) {
		case b.Name: {
			v = "up";
			break;
		}
		case b.NameReverse: {
			v = "down";
			break;
		}
		case b.Path: {
			I = "up";
			break;
		}
		case b.PathReverse: {
			I = "down";
		}
	}
	let E = [];
	const M = c.toLocaleLowerCase();
	for (let e of t ?? []) {
		if (
			!(c.length > 0) ||
			!!e.strAppName.toLocaleLowerCase().includes(M) ||
			!!e.strAppName.toLocaleLowerCase().includes(M) ||
			!!e.strExePath.toLocaleLowerCase().includes(M)
		) {
			E.push(e);
		}
	}
	E.sort((e, t) =>
		((e, t, r) => {
			switch (e) {
				case b.Name: {
					return t.strAppName.localeCompare(r.strAppName);
				}
				case b.NameReverse: {
					return r.strAppName.localeCompare(t.strAppName);
				}
				case b.Path: {
					return t.strExePath.localeCompare(r.strExePath);
				}
				case b.PathReverse: {
					return r.strExePath.localeCompare(t.strExePath);
				}
			}
			return 0;
		})(s, e, t),
	);
	return (
		<l.lV onSubmit={y}>
			<div className={A_1(m.AddNonSteamGameDialogContent, m.Desktop)}>
				<l.a3 className={m.DialogBodyText}>
					{Localize("#AddNonSteam_Desc")}
				</l.a3>
				<l.pd
					onChange={(e) => setC(e.currentTarget.value)}
					placeholder={Localize("#AddNonSteam_Filter_Placeholder")}
					bShowClearAction
					value={c}
				/>
				<div className={m.Header}>
					<div className={m.Checkbox} />
					<div className={m.Icon} />
					<div
						className={m.AppName}
						onClick={() => {
							if (s == b.Name) {
								setS(b.NameReverse);
							} else {
								setS(b.Name);
							}
						}}
					>
						{Localize("#AddNonSteam_Program")}
						<W dir={v} />
					</div>
					<div
						className={m.ExePath}
						onClick={() => {
							if (s == b.Path) {
								setS(b.PathReverse);
							} else {
								setS(b.Path);
							}
						}}
					>
						{Localize("#AddNonSteam_Location")}
						<W dir={I} />
					</div>
				</div>
				<div className={m.GameList}>
					{!t && <S />}
					{E?.map((e) => (
						<B
							key={e.strCmdline}
							app={e}
							bIsSelected={h.has(e.strCmdline)}
							setSelected={(t) => f(e, t)}
						/>
					))}
				</div>
				<div className={m.Footer}>
					<l.$n
						onClick={async () => {
							setC("");
							const e = await V();
							if (!e) {
								return;
							}
							const n = t.find((t) => t.strExePath == e);
							if (n) {
								f(n, true, true);
							} else {
								let n = await SteamClient.Apps.GetShortcutDataForPath(e);
								if (typeof n == "number") {
									console.error("Failed to get shortcut data for app", e);
									return;
								}
								setT([...t, n]);
								f(n, true, true);
							}
						}}
						disabled={t === undefined}
						className={m.BrowseButton}
					>
						{Localize("#AddNonSteam_Browse")}
					</l.$n>
					<div className={m.Spacer} />
					<l.jn disabled={h.size == 0} onClick={y}>
						{Localize("#AddNonSteam_AddSelected")}
					</l.jn>
					<l.$n onClick={i.ownerWindow.close}>
						{Localize("#Button_Cancel")}
					</l.$n>
				</div>
			</div>
		</l.lV>
	);
}
function S(e) {
	return (
		<div className={m.LoadingContainer}>
			<div>
				<A.t
					size="medium"
					position="center"
					string={Localize("#AddNonSteam_Loading")}
				/>
			</div>
		</div>
	);
}
function W(e) {
	if (e.dir) {
		return (
			<div className={m.SortArrowContainer}>
				<d.Carat className={m.Arrow} direction={e.dir} />
			</div>
		);
	} else {
		return null;
	}
}
function B(e) {
	const { app, bIsSelected, setSelected } = e;
	return (
		<div
			className={m.GameRow}
			id={app.strCmdline}
			onClick={() => setSelected(!bIsSelected)}
		>
			<div className={m.Checkbox}>
				<l.Yh checked={bIsSelected} onChange={setSelected} />
			</div>
			<div className={m.IconContainer}>
				{!!app.strIconDataBase64 && (
					<img src={`data:image/png;base64, ${app.strIconDataBase64}`} />
				)}
			</div>
			<div className={m.AppName}>{app.strAppName}</div>
			<div className={m.ExePath}>{app.strCmdline}</div>
		</div>
	);
}
((e) => {
	e[(e.Name = 0)] = "Name";
	e[(e.NameReverse = 1)] = "NameReverse";
	e[(e.Path = 2)] = "Path";
	e[(e.PathReverse = 3)] = "PathReverse";
})((b ||= {}));
