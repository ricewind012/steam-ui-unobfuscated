import { useCallback, useEffect, useState } from "react";
import i from "./10606.js";
import { R7 } from "./11131.js";
import { Ln } from "./53807.js";
import { v } from "./55700.js";
import l from "./73375.js";
import { A as BuildClassName } from "./90765.js";
import a from "./96500.js";
const s = a;

interface BrowserViewHostProps {
	onClose;
	classname;
	popup;
	strTitle;
	strURL;
}

interface BrowserViewHostPopupProps {
	strName;
	strURL;
	onClose;
	classname;
	popupWidth;
	popupHeight;
}

export const BrowserViewHostPopup = (props: BrowserViewHostPopupProps) => {
	let { strName, strURL, onClose, classname, popupWidth, popupHeight } = props;
	const [popup, setPopup] = useState();
	return (
		<i.hM
			strTitle={strName}
			onDismiss={onClose}
			popupWidth={popupWidth ?? 824}
			popupHeight={popupHeight ?? 620}
			refPopup={setPopup}
			className={BuildClassName(classname, s.HTMLPopupDialog)}
		>
			<BrowserViewHost
				popup={popup}
				classname={s.BrowserViewHost}
				strTitle={strName}
				strURL={strURL}
				onClose={onClose}
			/>
		</i.hM>
	);
};

const BrowserViewHost = (props: BrowserViewHostProps) => {
	let { onClose, popup, strTitle, strURL } = props;
	const [browserView, bVisible] = v(popup, strTitle, {
		strURL: strURL,
	});
	const openerWnd = R7();
	const onMessage = useCallback(
		(e, msg: string, n) => {
			if (msg == "CloseBrowser" && onClose) {
				onClose();
			}
		},
		[onClose],
	);
	const steamURLCallback = useCallback(
		(e) => !!Ln(e) && !!onClose && (onClose(), true),
		[onClose],
	);
	useEffect(() => {
		if (browserView) {
			browserView.SetSteamURLCallback(steamURLCallback);
			browserView.on("message", onMessage);
			browserView.on("before-close", () => {
				openerWnd.ownerWindow.close();
			});
		}
	}, [browserView, openerWnd, onMessage, steamURLCallback]);
	if (browserView) {
		return (
			<>
				<l.m4
					browser={browserView}
					visible={bVisible}
					style={{
						display: "block",
					}}
					className={props.classname}
				/>
			</>
		);
	} else {
		return null;
	}
};
