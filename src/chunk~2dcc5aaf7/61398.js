import { Localize } from "../../actual_src/utils/localization.js";
import n from "./85243.js";
import i, { Bx } from "./55489.js";
import a from "./96593.js";
import s from "./63696.js";
import o from "./16117.js";
import l, { sf } from "./44846.js";
import c from "./8090.js";
import m from "./1521.js";
import u from "./43691.js";
import p from "./69164.js";
import g from "./72655.js";
import h from "./64608.js";
import C from "./10606.js";
import _, { pg } from "./13869.js";
import f from "./26853.js";
import { A as A_1 } from "./90765.js";
import { CH, hL } from "./52451.js";
import { hf } from "./72476.js";
import B from "./70446.js";
function D_1(e) {
	const { text, language } = e;
	const n = s.useMemo(
		() =>
			new Map([
				...Array.from(o.W4),
				[
					"img",
					{
						Constructor: A,
						autocloses: false,
					},
				],
			]),
		[],
	);
	const i = s.useCallback((e) => new m.OJ(new m.R8(), 0), []);
	const ARef = s.useRef();
	ARef.current ||= new c.B(n, i, u.TS.LANGUAGE);
	const a_current = ARef.current;
	if (language) {
		a_current.UpdateOverrideLanguage(sf(language));
	}
	return a_current.ParseBBCode(text, {});
}
function A(e) {
	const t = e.children?.toString();
	if (t) {
		return <img src={t} />;
	} else {
		return null;
	}
}
const v = B;
export function Fe(e) {
	pg(<U {...e} />, e.ownerWindow || window, {});
}
export function U(e) {
	const t = () => {
		e.onCancel();
		if (e.closeModal) {
			e.closeModal();
		}
	};
	return (
		<_.x_ bGamepadUIScrollWithin onEscKeypress={t} padding="none">
			<h.U9 classNameContent={A_1("GenericConfirmDialog", v.EulaModalDialog)}>
				<h.Y9>{(0, Localize)("#EulaDialog_Header")}</h.Y9>
				<h.nB>
					<M {...e} onCancel={t} />
				</h.nB>
			</h.U9>
		</_.x_>
	);
}
function M(e) {
	const { appid, eulaWorkflow, onCancel, closeModal } = e;
	const o = eulaWorkflow.useEulaApprovalState();
	const LRef = s.useRef(o.cancelFn);
	LRef.current = o.cancelFn;
	s.useEffect(
		() => () => {
			if (LRef.current) {
				LRef.current();
			}
		},
		[],
	);
	let c = (0, Localize)(
		"#Installer_Eula",
		a.tw.GetAppOverviewByAppID(appid)?.display_name,
	);
	const m = () => {
		if (o.cancelFn) {
			o.cancelFn();
		}
		if (onCancel) {
			onCancel();
		}
	};
	const URef = s.useRef(undefined);
	s.useLayoutEffect(() => {
		if (o.bDone && closeModal) {
			closeModal();
		}
	}, [o.bDone, closeModal]);
	if (o.bDone) {
		return null;
	}
	const d = eulaWorkflow.GetEULALoader();
	return (
		<p.Z className={v.EulaDialogContent} onCancel={m}>
			<h.a3>
				<div className={v.EulaIntro}>{c}</div>
			</h.a3>
			{d && (
				<T
					loader={d}
					onCancel={() => {
						URef.current?.TakeFocus();
					}}
				/>
			)}
			<h.wi>
				<p.Z navRef={URef}>
					<h.CB
						focusButton="secondary"
						onCancel={m}
						onOK={o.continueFn}
						strOKText={(0, Localize)("#Installer_EulaAccept")}
					/>
				</p.Z>
			</h.wi>
		</p.Z>
	);
}
function T(e) {
	const { loader, onCancel } = e;
	const [n, setN] = s.useState(loader.GetLanguage());
	const a = loader.GetEULAData();
	const o = CH();
	hL(loader.GetOnReadyCallbacks(), o);
	s.useEffect(() => {
		loader.SetLanguage(n);
		loader.LoadEULA();
	}, [loader, n]);
	if (loader.BHadError()) {
		return <R loader={loader} />;
	} else if (a) {
		return <K StoreData={a} setLanguage={setN} onCancel={onCancel} />;
	} else {
		return (
			<div className={v.EULAThrobber}>
				<f.t position="center" />
			</div>
		);
	}
}
function R(e) {
	const { loader } = e;
	const r = s.useCallback(() => loader.Retry(), [loader]);
	return (
		<p.Z className={v.EULAError}>
			<p.Z>{(0, Localize)("#Installer_EulaError")}</p.Z>
			<p.Z>
				<h.$n onClick={r} autoFocus>
					{(0, Localize)("#Button_Retry")}
				</h.$n>
			</p.Z>
		</p.Z>
	);
}
function K(e) {
	const { StoreData, setLanguage, onCancel } = e;
	return (
		<>
			<D
				eulaLanguage={StoreData.eulaLang}
				rgLanguages={StoreData.rgLanguages}
				setLanguage={setLanguage}
			/>
			<g.f7
				className={A_1(v.EULAScrolling)}
				noFocusRing={false}
				scrollBehavior="smooth"
				scrollStepPercent={60}
				onCancelButton={onCancel}
			>
				<p.Z focusableIfNoChildren noFocusRing className={v.EULAContent}>
					<D_1 text={StoreData.content} />
				</p.Z>
			</g.f7>
		</>
	);
}
function D(e) {
	const { rgLanguages, eulaLanguage, setLanguage } = e;
	const i = hf();
	const a = s.useMemo(
		() =>
			rgLanguages?.map((e) => ({
				data: e,
				label: (0, Localize)(`#language_selection_${e}`),
			})),
		[rgLanguages],
	);
	const o = s.useCallback((e) => setLanguage(e.data), [setLanguage]);
	if (!rgLanguages || rgLanguages.length < 2) {
		return null;
	} else {
		return (
			<div className={v.LanguageFieldContainer}>
				<h.Vb
					layout="inline"
					bottomSeparator="none"
					label={(0, Localize)("#EulaDialog_Language")}
					rgOptions={a}
					selectedOption={eulaLanguage}
					onChange={o}
					contextMenuPositionOptions={{
						bMatchWidth: !i,
					}}
				/>
			</div>
		);
	}
}
function N(e) {
	Bx(n.I5.Opaque, "OpaqueGenericConfirmDialog");
	return <C.o0 {...e} />;
}
export function rg(e) {
	const { strTitle, strDescription, strOKButtonText, onOK, onCancel } = e;
	const o = (
		<span
			style={{
				whiteSpace: "pre-line",
			}}
		>
			{" "}
			{strDescription}{" "}
		</span>
	);
	const l = (
		<N
			strTitle={strTitle}
			strDescription={o}
			onOK={onOK}
			onCancel={onCancel}
			strOKButtonText={strOKButtonText}
		/>
	);
	pg(l, e.ownerWindow || window, {});
}
