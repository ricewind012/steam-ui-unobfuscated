import { Localize } from "../../actual_src/utils/localization.js";
import n from "./18057.js";
import i from "./50350.js";
import a from "./63696.js";
import s from "./10975.js";
import o from "./22047.js";
import l from "./13869.js";
import m, { Xf } from "./31319.js";
import u, { qw } from "./89748.js";
import d from "./12491.js";
import A, { A as A_1 } from "./90765.js";
import { Nr } from "./42318.js";
import g from "./78110.js";
import { r4 } from "./50876.js";
import C, { nT } from "./24287.js";
import _ from "./67444.js";
import b from "./44351.js";
import y from "./12316.js";
import S from "./90242.js";
import w from "./1470.js";
const f = _;
function B() {
	a.useEffect(() => {
		s.eZ.PlayNavSound(s.PN.ShowModal);
		return () => {
			s.eZ.PlayNavSound(s.PN.HideModal);
		};
	}, []);
}
export function wB() {
	B();
	let e = r4();
	let t = qw().BHasCurrentUser();
	Xf(t ? "show-icon" : "hidden", "Settings");
	return (
		<i.dj>
			<o.q title={Localize("#Settings_Title")} pages={e} />
		</i.dj>
	);
}
export function BB(e) {
	const {
		className,
		closeModal,
		initialRoute,
		hideTopBar,
		fnSetNavigateToPage,
	} = e;
	B();
	let u = r4();
	return (
		<l.x_ onEscKeypress={closeModal} hideTopBar={hideTopBar}>
			<n.Cc initialRoute={n.BV.Settings[i]()}>
				<d.hE closeModal={closeModal}>
					<o.q
						title={Localize("#Settings_Title")}
						pages={u}
						className={A_1(f.SettingsModal, className)}
						fnSetNavigateToPage={fnSetNavigateToPage}
					/>
				</d.hE>
			</n.Cc>
		</l.x_>
	);
}
export const er = Nr(() => {
	const [e, t] = nT();
	const [r, setR] = a.useState();
	a.useEffect(() => {
		C.Ti.SetPopup(r);
	}, [r]);
	const i = a.useCallback(() => {
		t(false);
	}, [t]);
	if (e) {
		return (
			<g.w
				strTitle={Localize("#Settings_Title")}
				onDismiss={i}
				refPopup={setR}
				popupWidth={850}
				popupHeight={722}
				minWidth={850}
				minHeight={722}
				resizable
				modal={false}
				titleBarClassName={f.SettingsTitleBar}
			>
				<BB
					initialRoute={C.Ti.sTargetPage}
					fnSetNavigateToPage={C.Ti.SetNavigateToPage}
					closeModal={i}
					className={f.DesktopPopup}
				/>
			</g.w>
		);
	} else {
		return null;
	}
});
export function CS(e) {
	const { className } = e;
	return <b.$n {...e} className={A_1(f.SettingsDialogButton, className)} />;
}
export function WG(e) {
	const { className } = e;
	return <y.xh {...e} className={A_1(f.SettingsDialogButton, className)} />;
}
export function sh(e) {
	const { className, disableFade, ...n } = e;
	return (
		<b.nB
			{...n}
			className={A_1(className, !disableFade && f.SettingsDialogBodyFade)}
		/>
	);
}
export function Pq(e) {
	return <div className={f.SettingsDialogBodyText}>{e.children}</div>;
}
export function Tv(e) {
	return <div className={f.SettingsDialogDescriptionText} {...e} />;
}
export function tX(e) {
	return <b.iK className={f.SettingsDialogSubHeader} {...e} />;
}
export function Oy(e) {
	return <S.Ii {...e} className={A_1(f.SettingsLink, e.className)} />;
}
export function oN(e) {
	return <w.E as={WG} {...e} />;
}
