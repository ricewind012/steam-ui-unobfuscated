import n from "./63696.js";
import i from "./10606.js";
import a from "./96500.js";
import o, { v } from "./55700.js";
import l from "./73375.js";
import c, { A as A_1 } from "./90765.js";
import m, { R7 } from "./11131.js";
import u, { Ln } from "./53807.js";
const s = a;
export const W = (e) => {
	let { strName, strURL, onClose, classname, popupWidth, popupHeight } = e;
	const [u, setU] = n.useState();
	return (
		<i.hM
			strTitle={strName}
			onDismiss={onClose}
			popupWidth={popupWidth ?? 824}
			popupHeight={popupHeight ?? 620}
			refPopup={setU}
			className={A_1(classname, s.HTMLPopupDialog)}
		>
			<A
				popup={u}
				classname={s.BrowserViewHost}
				strTitle={strName}
				strURL={strURL}
				onClose={onClose}
			/>
		</i.hM>
	);
};
const A = (e) => {
	let { onClose, popup, strTitle, strURL } = e;
	const [s, c] = v(popup, strTitle, {
		strURL: strURL,
	});
	const d = R7();
	const A = n.useCallback(
		(e, r, n) => {
			if (r == "CloseBrowser" && onClose) {
				onClose();
			}
		},
		[onClose],
	);
	const p = n.useCallback(
		(e) => !!Ln(e) && !!onClose && (onClose(), true),
		[onClose],
	);
	n.useEffect(() => {
		if (s) {
			s.SetSteamURLCallback(p);
			s.on("message", A);
			s.on("before-close", () => {
				d.ownerWindow.close();
			});
		}
	}, [s, d, A, p]);
	if (s) {
		return (
			<>
				<l.m4
					browser={s}
					visible={c}
					style={{
						display: "block",
					}}
					className={e.classname}
				/>
			</>
		);
	} else {
		return null;
	}
};
