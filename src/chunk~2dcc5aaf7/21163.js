import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./10606.js";
import a from "./1615.js";
import s from "./64608.js";
import o from "./30449.js";
import c, { pg } from "./13869.js";
import m, { R7 } from "./11131.js";
import u, { yZ } from "./34461.js";
const d = 1.5;
const A = 300;
export function e() {
	const [e, setE] = n.useState();
	const [r, setR] = n.useState();
	const [s, setS] = n.useState(false);
	const [l, setL] = n.useState();
	const m = yZ();
	const p = n.useCallback(
		async (e, r, n) => {
			setE(0);
			setR(undefined);
			setL(r);
			let i = false;
			let s = 0;
			const l = setTimeout(() => {
				if (A / 1000 / ((s > 0 ? s : 1) / 100) > d) {
					if (!i) {
						i = true;
						setS(true);
					}
				}
			}, A);
			const u = await e((e) => {
				((e) => {
					setE(e);
					s = e;
				})(e);
			});
			clearTimeout(l);
			if (i || u.eResult != 1) {
				setR(u);
				setS(false);
			} else {
				m(n, u.strTitle);
			}
		},
		[m],
	);
	const _ = s || r !== undefined;
	const f = () => {
		setR(undefined);
	};
	const b = r?.strTitle ?? l;
	return {
		onShowProgressBar: p,
		progressElement: (
			<i.mt active={_} onDismiss={r ? f : undefined}>
				{s && <G progress={e} title={b} />}
				{r?.eResult == 1 && (
					<C
						title={b}
						onClose={f}
						alternateActionText={r.strAlternateAction}
						onAlternateAction={r.fnAlternateAction}
					/>
				)}
				{r && r.eResult != 1 && (
					<H title={b} result={r.eResult} error={r.strError} onClose={f} />
				)}
			</i.mt>
		),
	};
}
function G(e) {
	const { progress, title } = e;
	return (
		<div className={a.ClipProgressDialog}>
			<div className={a.Title}>{title}</div>
			<o.z2 nProgress={progress} />
		</div>
	);
}
function H(e) {
	const { title, result, error, onClose } = e;
	const c = error ?? `${Localize("#ExportClip_Error")} (${result})`;
	return (
		<div className={a.ClipProgressDialog}>
			<div className={a.Title}>{title}</div>
			<div className={a.Error}>{c}</div>
			<s.$n onClick={onClose}>{Localize("#Button_Close")}</s.$n>
		</div>
	);
}
function C(e) {
	const { onClose, title, alternateActionText, onAlternateAction } = e;
	return (
		<div className={a.ClipProgressDialog}>
			<div className={a.Title}>{title}</div>
			<div className={a.ButtonRow}>
				{alternateActionText && (
					<s.jn onClick={onAlternateAction}>{alternateActionText}</s.jn>
				)}
				<s.$n onClick={onClose}>{Localize("#Button_Close")}</s.$n>
			</div>
		</div>
	);
}
export function J() {
	const e = R7();
	return (t, r) => {
		pg(
			<i.o0
				className={a.ErrorDialog}
				strTitle={t}
				strDescription={r}
				bAlertDialog
			/>,
			e.ownerWindow,
		);
	};
}
