import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n, { useState, useEffect, useRef } from "./63696.js";
import i, { W6, zy } from "./49519.js";
import a from "./58254.js";
import s, { AO } from "./93861.js";
import o, { A as A_1 } from "./90765.js";
import l from "./41618.js";
import c from "./88696.js";
import m from "./69164.js";
import u from "./43014.js";
import d from "./35488.js";
import A from "./50376.js";
import { LC } from "./46422.js";
import h from "./10606.js";
import C, { Qh } from "./22004.js";
import { Nx } from "./71033.js";
import { pw } from "./31319.js";
import b from "./14982.js";
import y, { rP, uI } from "./72476.js";
import S from "./53622.js";
const w = 20;
const B = 1;
const v = "Deck_GuidedTourVersionSeen";
function I() {
	const { bShowTour, onComplete } = (() => {
		const e = W6();
		const t = zy();
		const r = t.state && t.state.bShowGuidedTour;
		const n = () => {
			const { bShowGuidedTour, ...n } = t.state || {};
			e.replace(AO(t), n);
		};
		return {
			bShowTour: r,
			onComplete: n,
		};
	})();
	const [r, setR] = useState(false);
	const o = rP();
	useEffect(() => {
		(async () => {
			const e = new c.A();
			const t = await e.GetString(v);
			if (!t) {
				return false;
			}
			const r = parseInt(t);
			if (isNaN(r)) {
				e.RemoveObject(v);
				return false;
			} else {
				return r >= B;
			}
		})().then((e) => setR(!e));
	}, []);
	return {
		bShowTour: (!y.TS.TESLA && !o.IN_VR && r) || bShowTour,
		onComplete: () => {
			setR(false);
			onComplete();
		},
	};
}
export function JD() {
	const { bShowTour, onComplete } = I();
	if (bShowTour) {
		return (
			<h.EN active>
				<M onComplete={onComplete} />
			</h.EN>
		);
	} else {
		return null;
	}
}
function M(e) {
	const { onComplete } = e;
	const [r, setR] = useState(0);
	LC();
	pw();
	Nx();
	useEffect(() => {
		new c.A().StoreString(v, B.toString());
	}, []);
	const SRef = useRef(undefined);
	useEffect(() => {
		window.setTimeout(() => SRef.current.focus(), 100);
	}, []);
	const ORef = useRef(null);
	const u = (() => {
		if (uI()) {
			return [T, G, O, P, L, z, R];
		}
		return [T, G, O, R];
	})();
	const UR = u[r];
	if (!UR) {
		return null;
	}
	const A = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (r + 1 >= u.length) {
			onComplete();
		}
		setR(r + 1);
	};
	const p = r !== 0 && r !== u.length - 1;
	return (
		<m.Z
			focusable
			autoFocus
			noFocusRing
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
			}}
			onButtonDown={A}
			onActivate={A}
			ref={SRef}
		>
			<a.A
				nodeRef={ORef}
				mountOnEnter
				unmountOnExit
				in={p}
				timeout={800}
				classNames={{
					enter: l.PaginationContentEnter,
					enterActive: l.PaginationContentEnterActive,
					exit: l.PaginationContentExit,
					exitActive: l.PaginationContentExitActive,
				}}
			>
				<K divRef={ORef}>
					<V count={u.length - 2} activePage={r - 1} />
					<N />
				</K>
			</a.A>
			<C.FF
				childrenKey={r.toString()}
				childrenClasses={Qh(l, l.ActiveTourPage)}
				directionClass="none"
			>
				<UR />
			</C.FF>
		</m.Z>
	);
}
function T() {
	const e = uI();
	return (
		<K>
			<div className={l.WelcomeTitle}>
				{(0, Localize)(
					e ? "#GuidedTour_Welcome_Title" : "#GuidedTour_BPM_Welcome_Title",
				)}
			</div>
			<D className={l.WelcomeDescription}>
				{(0, Localize)(
					e
						? "#GuidedTour_Welcome_Description"
						: "#GuidedTour_BPM_Welcome_Description",
				)}
			</D>
			<N />
		</K>
	);
}
function R() {
	const e = uI();
	return (
		<K>
			<div className={l.WelcomeTitle}>
				{(0, Localize)(
					e ? "#GuidedTour_SendOff_Title" : "#GuidedTour_BPM_SendOff_Title",
				)}
			</div>
			<D className={l.WelcomeDescription}>
				{(0, Localize)(
					e
						? "#GuidedTour_SendOff_Description"
						: "#GuidedTour_BPM_SendOff_Description",
				)}
			</D>
			<N />
		</K>
	);
}
function K(e) {
	return (
		<div ref={e.divRef} className={l.CenteredContent}>
			{e.children}
		</div>
	);
}
function D(e) {
	const { className, children } = e;
	return <div className={A_1(l.TourText, className)}>{children}</div>;
}
function N() {
	return (
		<div className={l.ContinueMessage}>
			{LocalizeReact(
				"#GuidedTour_ContinueMessage_Template",
				<F>{(0, Localize)("#GuidedTour_ContinueMessage_ActionPress")}</F>,
				<F>{(0, Localize)("#GuidedTour_ContinueMessage_ActionTap")}</F>,
			)}
		</div>
	);
}
function F(e) {
	return <span className={l.MessageAction}>{e.children}</span>;
}
function G() {
	const e = uI();
	const t = e ? <S.W button={u.g4.HomeMenu} /> : null;
	return (
		<W
			position={{
				bottom: 90,
				left: -w / 2,
			}}
			targetDirection="left"
			title={(0, Localize)(
				e
					? "#GuidedTour_SteamButton_Title"
					: "#GuidedTour_BPM_SteamButton_Title",
			)}
			description={LocalizeReact(
				e
					? "#GuidedTour_SteamButton_Description"
					: "#GuidedTour_BPM_SteamButton_Description",
				<S.W button={u.g4.HomeMenu} />,
			)}
			icon={t}
		/>
	);
}
function O() {
	const e = uI();
	const t = e ? <S.W button={u.g4.QuickMenu} /> : null;
	const r = (
		<>
			<S.W button={u.g4.HomeMenu} />
			+
			<S.W button={u.g4.A} />
		</>
	);
	return (
		<W
			position={{
				bottom: 90,
				right: -w / 2,
			}}
			targetDirection="right"
			title={(0, Localize)(
				e
					? "#GuidedTour_QuickAccessButton_Title"
					: "#GuidedTour_BPM_QuickAccessButton_Title",
			)}
			description={LocalizeReact(
				e
					? "#GuidedTour_QuickAccessButton_Description"
					: "#GuidedTour_BPM_QuickAccessButton_Description",
				r,
			)}
			icon={t}
		/>
	);
}
function P() {
	return (
		<W
			position={{
				top: -w / 2,
				right: w / 2,
			}}
			targetDirection="top"
			align="right"
			title={(0, Localize)("#GuidedTour_PowerButton_Title")}
			description={(0, Localize)("#GuidedTour_PowerButton_Description")}
			icon={<d.Power className={l.Icon} />}
		/>
	);
}
function L() {
	return (
		<W
			position={{
				top: -w / 2,
				left: w,
			}}
			targetDirection="top"
			align="left"
			title={(0, Localize)("#GuidedTour_VolumeButtons_Title")}
			description={(0, Localize)("#GuidedTour_VolumeButtons_Description")}
			icon={<A.fSs className={l.Icon} />}
		/>
	);
}
function z() {
	return (
		<W
			position={{
				bottom: -w / 2,
				right: w / 2,
			}}
			targetDirection="bottom"
			align="right"
			title={(0, Localize)("#GuidedTour_SDCard_Title")}
			description={(0, Localize)("#GuidedTour_SDCard_Description")}
			icon={<d.SdCard className={l.Icon} />}
		/>
	);
}
const x = {
	bottom: "column",
	top: "column",
	left: "row",
	right: "row",
};
const U = {
	left: "flex-start",
	right: "flex-end",
};
function W(e) {
	const { icon, title, description, position, targetDirection, align } = e;
	const c = Object.keys(position).reduce(
		(e, t) => ({
			...e,
			[t]: `${position[t]}px`,
		}),
		{},
	);
	const m = targetDirection === "bottom" || targetDirection === "right";
	c.flexDirection = x[s];
	c.alignItems = align ? U[o] : undefined;
	c.textAlign = align;
	const u = <b.kP />;
	const d = (
		<div
			className={l.TourStopTextContainer}
			style={{
				alignItems: c.alignItems,
			}}
		>
			<div className={l.Title}>{title}</div>
			<div className={l.Description}>
				<D>{description}</D>
			</div>
		</div>
	);
	const A = m ? (
		<>
			{d}
			{icon}
			{u}
		</>
	) : (
		<>
			{u}
			{icon}
			{d}
		</>
	);
	return (
		<div style={c} className={l.TourStopContent}>
			{A}
		</div>
	);
}
function V(e) {
	const { count, activePage } = e;
	const i = [];
	for (let e = 0; e < count; e++) {
		i.push(<H key={e} active={activePage === e} />);
	}
	return <div className={l.PageIndicators}>{i}</div>;
}
function H(e) {
	return <div className={A_1(l.PageIndicator, e.active && l.Active)} />;
}
