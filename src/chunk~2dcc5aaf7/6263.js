import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./64608.js";
import a from "./10606.js";
import o from "./27987.js";
import c, { QR, iZ } from "./89748.js";
import m, { hn } from "./24274.js";
import u, { Id } from "./77347.js";
import { Qt } from "./18057.js";
import { L2 } from "./5640.js";
const l = o;
export function P3(e) {
	const [t, setT] = n.useState();
	const [i, setI] = n.useState();
	const [l, setL] = n.useState();
	const m = n.useCallback(() => {
		setI(false);
	}, []);
	const u = n.useCallback((e, t, r) => {
		if (t == "PlaytimeExhausted") {
			setI(true);
			setL(r);
		}
	}, []);
	n.useEffect(
		() => SteamClient.Messaging.RegisterForMessages("Parental", u).unregister,
		[u],
	);
	if (i && l) {
		return (
			<a.hM
				strTitle={Localize("#FamilyView_RequestPlaytime_Title")}
				onDismiss={m}
				popupWidth={500}
				popupHeight={350}
				refPopup={setT}
				modal
			>
				<Db onClose={m} strDetails={l} />
			</a.hM>
		);
	} else {
		return null;
	}
}
export function Db(e) {
	const { onClose, strDetails } = e;
	const a = new Date().getDay();
	const o = QR();
	const p = iZ();
	const g = L2();
	const h = Id() && g;
	const [C, setC] = n.useState(<>{"\xA0"}</>);
	const f = n.useCallback(
		(e) => {
			if (e.result === 84) {
				onClose();
			} else {
				setC(Localize("#FamilyView_RequestPlaytime_GenericError", e.result));
			}
		},
		[onClose],
	);
	const b =
		g.temporary_playtime_restrictions !== undefined &&
		g.temporary_playtime_restrictions.rtime_expires >
			new Date().getTime() / 1000
			? g.temporary_playtime_restrictions.restrictions
			: g.playtime_restrictions?.playtime_days[a];
	const y = hn(p.strSteamID, b, onClose, f);
	const S = Qt("steam://open/goonline");
	const w = n.useCallback(() => {
		setC(<>{"\xA0"}</>);
		y.mutate();
	}, [y]);
	let B;
	switch (strDetails) {
		case "minutes": {
			B = Localize("#AppLaunchError_PlaytimeLimitExceeded_Minutes");
			break;
		}
		case "window": {
			B = Localize("#AppLaunchError_PlaytimeLimitExceeded_Window");
			break;
		}
		case "manual": {
			B = Localize("#FamilyView_RequestPlaytime_LimitUpcoming");
		}
	}
	let v = w;
	let I = Localize("#FamilyView_RequestPlaytime_Request");
	if (o) {
		v = S;
		I = Localize("#AppDetails_GoOnline");
	} else if (!h) {
		v = onClose;
		I = Localize("#Button_Close");
	}
	return (
		<>
			<i.Y9>{Localize("#FamilyView_RequestPlaytime_Title")}</i.Y9>
			<i.f3 onCancelButton={onClose}>
				<i.a3>
					<div className={l.ErrorText}>{C}</div>
					<div>{B}</div>
					<div>
						{Localize(
							h
								? "#FamilyView_RequestPlaytime_Description"
								: "#FamilyView_RequestPlaytime_Description_Offline",
						)}
					</div>
				</i.a3>
				<i.wi>
					{(h || o) && <i.CB onOK={v} strOKText={I} onCancel={onClose} />}
					{!h && !o && <i.jn onClick={v}>{I}</i.jn>}
				</i.wi>
			</i.f3>
		</>
	);
}
export function _N(e, t) {
	SteamClient.Messaging.PostMessage("Parental", "PlaytimeExhausted", t);
}
