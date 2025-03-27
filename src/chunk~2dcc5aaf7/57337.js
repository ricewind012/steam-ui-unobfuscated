import { Localize } from "../../actual_src/utils/localization.js";
import i from "./64608.js";
import a from "./63696.js";
import s from "./78325.js";
import o from "./11131.js";
import l, { OJ } from "./63439.js";
import m, { l6 } from "./52451.js";
import u from "./13869.js";
import d, { wm } from "./53807.js";
import { $2 } from "./96680.js";
let n;
function P(e) {
	const {
		bAlertDialog,
		strURL,
		strMessage,
		ownerWindow,
		targetBrowserInfo,
		browser,
		onClose,
	} = e;
	const _ = (() => {
		const e = $2();
		return e.IsDesktopOverlayWindow() || e.IsGamepadUIOverlayWindow();
	})();
	const f = `${targetBrowserInfo.m_unPID}_Alert`;
	const b = o.Wf.NoTaskbarIcon;
	const { popup, element } = OJ(f, {
		title: f,
		html_class: "fullheight ModalDialogPopup",
		body_class: "fullheight ModalDialogBody",
		popup_class: "fullheight",
		target_browser: targetBrowserInfo,
		dimensions: {
			width: 500,
			height: 250,
		},
		eCreationFlags: b,
		center_on_window: ownerWindow,
		bModal: true,
	});
	const w = a.useCallback(() => {
		browser.DialogResponse(false);
		onClose();
	}, [browser, onClose]);
	const B = a.useCallback(() => {
		browser.DialogResponse(true);
		onClose();
	}, [browser, onClose]);
	const v = a.useCallback(
		(e) => {
			if (e.key == "Escape") {
				w();
				e.preventDefault();
				e.stopPropagation();
			}
		},
		[w],
	);
	l6(popup, "keydown", v, {
		capture: true,
	});
	a.useEffect(() => {
		if (popup && !_) {
			popup.SteamClient.Window.SetModal(true);
			popup.SteamClient.Window.BringToFront();
		}
	}, [popup, _]);
	if (!element) {
		return null;
	}
	const I = wm(strURL);
	return s.createPortal(
		<div className="PopupFullWindow">
			<u.x_ onEscKeypress={w}>
				<i.UC>
					<i.Y9>{Localize("#BrowserJSDialog_Header", I)}</i.Y9>
					<i.a3>{strMessage}</i.a3>
					<i.wi>
						{bAlertDialog && <i.$n onClick={w}>{Localize("#Button_OK")}</i.$n>}
						{!bAlertDialog && (
							<i.CB
								onOK={B}
								strOKText={Localize("#Button_OK")}
								onCancel={w}
								strCancelText={Localize("#Button_Cancel")}
							/>
						)}
					</i.wi>
				</i.UC>
			</u.x_>
		</div>,
		element,
	);
}
export function b(e, t, r) {
	const [i, setI] = a.useState(n.k_None);
	const [o, setO] = a.useState();
	const CRef = a.useRef(undefined);
	const m = a.useCallback((e) => {
		setO(e);
		setI(n.k_Alert);
	}, []);
	const u = a.useCallback((e) => {
		setO(e);
		setI(n.k_Confirm);
	}, []);
	const d = a.useCallback((e, t) => {
		CRef.current = e;
	}, []);
	a.useEffect(() => {
		if (r) {
			r.on("alert-dialog", m);
			r.on("confirm-dialog", u);
			r.on("finished-request", d);
			let e = r;
			return () => {
				e.off("alert-dialog", m);
				e.off("confirm-dialog", u);
				e.off("finished-request", d);
			};
		}
	}, [r, m, u, d]);
	if (i != n.k_None) {
		return (
			<P
				bAlertDialog={i == n.k_Alert}
				ownerWindow={e}
				targetBrowserInfo={t}
				browser={r}
				onClose={() => setI(n.k_None)}
				strURL={CRef.current}
				strMessage={o}
			/>
		);
	} else {
		return null;
	}
}
((e) => {
	e[(e.k_None = 0)] = "k_None";
	e[(e.k_Alert = 1)] = "k_Alert";
	e[(e.k_Confirm = 2)] = "k_Confirm";
})((n ||= {}));
