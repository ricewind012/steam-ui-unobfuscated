import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./10606.js";
import a from "./3475.js";
import o, { gB } from "./24274.js";
import l, { A as A_1 } from "./90765.js";
import c from "./21426.js";
import u, { QR, iZ } from "./89748.js";
import d, { Qt } from "./18057.js";
import A, { Id } from "./77347.js";
import p from "./20037.js";
import g, { rP } from "./72476.js";
import h from "./10294.js";
import C, { $ } from "./6232.js";
import _, { R7 } from "./11131.js";
const m = c;
function f(e) {
	return e >= "0" && e <= "9";
}
function B(e) {
	const { onUnlock, closeModal } = e;
	const [a, setA] = n.useState("");
	const [c, setC] = n.useState("");
	const DRef = n.useRef(undefined);
	const A = rP();
	const h = A.IN_GAMEPADUI || A.IN_VR;
	const C = n.useCallback((e) => {
		if (
			!e.target.value ||
			(f(e.target.value.slice(-1)) && e.target.value.length <= 4)
		) {
			setC(e.target.value);
		}
	}, []);
	const _ = n.useCallback(
		(e) => {
			SteamClient.Parental.UnlockParentalLock(e, true).then((e) => {
				switch (e) {
					case 1: {
						if (closeModal) {
							closeModal();
						}
						if (onUnlock) {
							onUnlock();
						}
						break;
					}
					case 25: {
						setC("");
						setA((0, Localize)("#FamilyView_UnlockDialog_LimitExceeded"));
						DRef.current.focus();
						break;
					}
					default: {
						setC("");
						setA((0, Localize)("#FamilyView_UnlockDialog_WrongPIN"));
						DRef.current.focus();
					}
				}
			});
		},
		[closeModal, onUnlock],
	);
	if (h) {
		return (
			<p.K
				className={m.ParentalPINDialog}
				title={(0, Localize)("#FamilyView_Dialog_Title")}
				description={(0, Localize)("#FamilyView_UnlockDialog_Description")}
				errorText={a}
				digits={4}
				validateDigit={f}
				onResult={_}
				onCancel={closeModal}
			/>
		);
	} else {
		return (
			<i.o0
				className={m.ParentalUnlock}
				onCancel={closeModal || (() => {})}
				onOK={() => _(c)}
				bOKDisabled={c.length < 4}
				bAlertDialog={!closeModal}
				strOKButtonText={(0, Localize)("#Button_OK")}
				strTitle={(0, Localize)("#FamilyView_Dialog_Title")}
			>
				<div className={m.Body}>
					<div className={m.ErrorText}>{a || <span>{"\xA0"}</span>}</div>
					<div className={m.Description}>
						{(0, Localize)("#FamilyView_UnlockDialog_Description")}
					</div>
					<input
						className={A_1(m.TextInput)}
						ref={DRef}
						value={c}
						type="password"
						autoFocus
						onChange={C}
					/>
				</div>
			</i.o0>
		);
	}
}
function Y(e) {
	const { feature, closeModal } = e;
	const [l, setL] = n.useState(<>{"\xA0"}</>);
	const p = Id();
	const g = QR();
	const h = iZ();
	const C = feature === a.JC || !feature;
	const _ = n.useCallback(
		(e) => {
			if (e.result !== 84) {
				setL(
					(0, Localize)(
						"#FamilyView_RequestFeatureAccess_GenericError",
						e.result,
					),
				);
			} else {
				closeModal();
			}
		},
		[closeModal],
	);
	const f = gB(h.strSteamID, feature, closeModal, _);
	const b = n.useCallback(() => {
		setL(<>{"\xA0"}</>);
		f.mutate();
	}, [f]);
	const y = Qt("steam://open/goonline");
	let S = b;
	let w = (0, Localize)("#FamilyView_RequestFeatureAccess");
	let B = (0, Localize)("#FamilyView_RequestFeatureAccess_Request");
	if (C) {
		S = closeModal;
		w = (0, Localize)("#FamilyView_RequestFeatureAccess_AlwaysBlocked");
	} else if (g) {
		S = y;
		B = (0, Localize)("#AppDetails_GoOnline");
	} else if (!p) {
		S = closeModal;
		B = undefined;
		w = (0, Localize)("#FamilyView_RequestFeatureAccess_Offline");
	}
	return (
		<i.o0
			className={m.ParentalUnlock}
			bOKDisabled={C}
			onCancel={closeModal}
			onOK={S}
			bAlertDialog={!p && !g}
			strOKButtonText={B}
			strTitle={(0, Localize)("#FamilyView_Dialog_Title")}
		>
			<div className={m.Body}>
				<div className={m.ErrorText}>{l}</div>
				<div className={m.Description}>{w}</div>
			</div>
		</i.o0>
	);
}
function S(e) {
	const { onUnlock, closeModal } = e;
	const [a, setA] = n.useState("");
	const [c, setC] = n.useState("");
	const DRef = n.useRef(undefined);
	const A = rP();
	const C = A.IN_GAMEPADUI || A.IN_VR;
	const _ = n.useCallback((e) => {
		if (
			!e.target.value ||
			(f(e.target.value.slice(-1)) && e.target.value.length <= 4)
		) {
			setC(e.target.value);
		}
	}, []);
	const b = n.useCallback(
		(e) => {
			if (h.Ih.BKioskModeUnlock(e)) {
				if (closeModal) {
					closeModal();
				}
				if (onUnlock) {
					onUnlock();
				}
				return;
			}
			setC("");
			setA((0, Localize)("#FamilyView_UnlockDialog_WrongPIN"));
		},
		[closeModal, onUnlock],
	);
	if (C) {
		return (
			<p.K
				className={m.ParentalPINDialog}
				title={(0, Localize)("#KioskMode_Dialog_Title")}
				description={(0, Localize)("#KioskMode_UnlockDialog_Description")}
				errorText={a}
				digits={4}
				validateDigit={f}
				onResult={b}
				onCancel={closeModal}
			/>
		);
	} else {
		return (
			<i.o0
				className={m.ParentalUnlock}
				onCancel={closeModal || (() => {})}
				onOK={() => b(c)}
				bOKDisabled={c.length < 4}
				bAlertDialog={!closeModal}
				strOKButtonText={(0, Localize)("#Button_OK")}
				strTitle={(0, Localize)("#KioskMode_Dialog_Title")}
			>
				<div className={m.Body}>
					<div className={m.ErrorText}>{a || <span>{"\xA0"}</span>}</div>
					<div className={m.Description}>
						{(0, Localize)("#KioskMode_UnlockDialog_Description")}
					</div>
					<input
						className={A_1(m.TextInput)}
						ref={DRef}
						value={c}
						type="password"
						autoFocus
						onChange={_}
					/>
				</div>
			</i.o0>
		);
	}
}
function W(e) {
	const { closeModal } = e;
	return (
		<i.o0
			className={m.RemotePlayStoreBlockedDialog}
			onCancel={closeModal || (() => {})}
			onOK={closeModal}
			bAlertDialog
			strOKButtonText={(0, Localize)("#Button_OK")}
			strTitle={(0, Localize)("#RemotePlay_StoreFunctionalityBlocked_Title")}
		>
			<div className={m.Body}>
				<div className={m.Description}>
					{(0, Localize)("#RemotePlay_StoreFunctionalityBlocked_Description")}
				</div>
			</div>
		</i.o0>
	);
}
export function g5(e) {
	const { closeModal, onUnlock, feature } = e;
	const e_blockReason = e.blockReason;
	const SRef = n.useRef(undefined);
	SRef.current = closeModal;
	const ORef = n.useRef(undefined);
	ORef.current = onUnlock;
	n.useEffect(() => {
		if (e_blockReason == 0) {
			ORef.current?.();
			SRef.current?.();
		}
	}, [e_blockReason]);
	switch (e_blockReason) {
		case 4: {
			return <S onUnlock={onUnlock} closeModal={closeModal} />;
		}
		case 3: {
			return <W closeModal={closeModal} />;
		}
		case 1: {
			return <B onUnlock={onUnlock} closeModal={closeModal} />;
		}
		case 2: {
			return <Y feature={feature} closeModal={closeModal} />;
		}
		default: {
			return null;
		}
	}
}
export function wT() {
	const e = R7();
	return n.useCallback(
		(t, r, n) => {
			$(e?.ownerWindow ?? window, t, r, n);
		},
		[e],
	);
}
