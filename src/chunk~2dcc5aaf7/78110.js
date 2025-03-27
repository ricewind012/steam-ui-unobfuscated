import n from "./63696.js";
import i from "./78325.js";
import a, { h3, OJ } from "./63439.js";
import s from "./88750.js";
import o from "./27773.js";
import { cZ } from "./52451.js";
import c, { yk } from "./91435.js";
import m, { R7 } from "./11131.js";
import u from "./94790.js";
import d, { Qn } from "./72476.js";
import A from "./19696.js";
export const w = (e) =>
	t({
		modal: true,
		...e,
	});
export function t(e) {
	const t = R7().ownerWindow;
	const r = Qn();
	const [i, setI] = n.useState(() =>
		r ||
		(e.onlyPopoutIfNeeded === true &&
			e.popupHeight < t.innerHeight * 0.9 &&
			e.popupWidth < t.innerWidth * 0.9 &&
			t.document.visibilityState == "visible")
			? "inline"
			: "popout",
	);
	if (i === "inline") {
		return <u.E active>{e.children}</u.E>;
	} else if (i === "popout") {
		return <H {...e} />;
	} else {
		return null;
	}
}
function H(e) {
	const {
		strName,
		strTitle,
		popupWidth,
		popupHeight,
		browserType,
		onDismiss,
		refPopup,
		children,
		titleBarClassName,
		saveDimensionsKey,
	} = e;
	const y = R7();
	const S = y?.ownerWindow;
	const w = yk();
	const B = {
		...h3(saveDimensionsKey),
		onClose: onDismiss,
	};
	let v = 0;
	if (e.resizable) {
		v |= m.Wf.Resizable;
	}
	const I = `PopupWindow_${strName ? `${strName}_` : ""}${n.useId()}`;
	const { popup, element } = OJ(
		I,
		{
			title: strTitle,
			dimensions: {
				width: popupWidth,
				height: popupHeight,
			},
			html_class: "client_chat_frame fullheight ModalDialogPopup",
			body_class: "fullheight ModalDialogBody",
			popup_class: "fullheight",
			browserType: browserType,
			minWidth: e.minWidth,
			minHeight: e.minHeight,
			replace_existing_popup: true,
			center_on_window: w?.BCenterPopupsOnWindow() ? S : undefined,
			eCreationFlags: v,
			target_browser: w?.GetBrowserInfo(),
		},
		B,
	);
	n.useEffect(() => {
		cZ(refPopup, popup);
		return () => cZ(refPopup, undefined);
	}, [refPopup, popup]);
	n.useEffect(() => {
		if (popup) {
			popup.document.title = strTitle ?? strName;
		}
	}, [popup, strTitle, strName]);
	if (!element) {
		return null;
	}
	const T = e.modal ?? e.onlyPopoutIfNeeded;
	const R = !e.resizable;
	return (
		<>
			{T && <C popup={popup} />}
			{i.createPortal(
				<m.kc ownerWindow={popup}>
					<div className="PopupFullWindow" onContextMenu={s.aE}>
						<o.c
							className={titleBarClassName}
							hideMin={R}
							hideMax={R}
							popup={popup}
							hideActions={!onDismiss}
						/>
						<c.EO
							bCenterPopupsOnWindow={w?.BCenterPopupsOnWindow()}
							browserInfo={w?.GetBrowserInfo()}
						>
							{children}
						</c.EO>
					</div>
					{e.resizable && <A.Z popup={popup} />}
				</m.kc>,
				element,
			)}
		</>
	);
}
function C(e) {
	const { popup } = e;
	return (
		<u.E active>
			<div
				style={{
					position: "fixed",
					left: 0,
					top: 0,
					right: 0,
					bottom: 0,
				}}
				onClick={() => popup.SteamClient?.Window.BringToFront()}
			/>
		</u.E>
	);
}
