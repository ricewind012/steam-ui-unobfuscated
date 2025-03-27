import {
	Localize,
	LocalizeInlineReactWithFallback,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i, { forwardRef, useState, useEffect, useCallback } from "./63696.js";
import a from "./41230.js";
import s, { AH, jy, Kw, k2, KM, WB } from "./5808.js";
import o, { lX } from "./31084.js";
import l from "./88750.js";
import c from "./90242.js";
import m from "./26853.js";
import u, { A as A_1 } from "./90765.js";
import A, { Z3 } from "./52451.js";
import p, { Qn } from "./72476.js";
import g from "./44658.js";
import C from "./78057.js";
import _, { Np } from "./32700.js";
import f from "./46217.js";
import b from "./69164.js";
import y from "./10975.js";
import S from "./64608.js";
import w from "./67512.js";
import v from "./35376.js";
import E, { pg } from "./13869.js";
import M from "./46422.js";
import T from "./14982.js";
import R from "./88696.js";
import k from "./76356.js";
import D from "./35488.js";
import F, { br } from "./18869.js";
import G, { $2 } from "./96680.js";
import O, { VA } from "./10294.js";
import P from "./37086.js";
import L from "./44351.js";
import z from "./41480.js";
import x from "./55717.js";
import U from "./5482.js";
import W from "./14628.js";
import { jb } from "./18057.js";
import Y from "./98995.js";
import K from "./50376.js";
const h = g;
const B = w;
function I(e) {
	const {
		strTitle,
		strDescription,
		onPrimary,
		onSecondary,
		onCancel,
		closeModal,
		bDisableSecondary,
		strPrimaryButtonText,
		strSecondaryButtonText,
		strCancelButtonText,
		bPrimaryRequiresConfirm = false,
		strPrimaryConfirmText,
		className,
	} = e;
	const [h, setH] = i.useState(false);
	const _ = i.useCallback(() => {
		if (closeModal) {
			closeModal();
		}
	}, [closeModal]);
	const f = i.useCallback(() => {
		onSecondary();
		_();
	}, [onSecondary, _]);
	const b = i.useCallback(() => {
		if (onCancel) {
			onCancel();
		}
		_();
	}, [onCancel, _]);
	const y = i.useCallback(() => {
		if (!bPrimaryRequiresConfirm || h) {
			onPrimary();
			_();
		} else {
			setH(true);
		}
	}, [onPrimary, _, bPrimaryRequiresConfirm, h]);
	const w = A_1(B.StackedThreeButtonDialog, className);
	const I = A_1(B.PrimaryButton, h && B.RequestConfirm);
	const E =
		h && strPrimaryConfirmText ? strPrimaryConfirmText : strPrimaryButtonText;
	return (
		<>
			<v.e closeModal={closeModal} className={w}>
				<S.Y9>{strTitle}</S.Y9>
				<S.f3 onCancelButton={b}>{strDescription}</S.f3>
				<S.wi>
					<div className={B.ButtonContainer}>
						<S.xv
							className={B.StackedButtons}
							strPrimaryButtonText={E}
							onPrimary={y}
							classNamePrimary={I}
							strSecondaryButtonText={strSecondaryButtonText}
							onSecondary={f}
							bDisableSecondary={bDisableSecondary}
							strCancelButtonText={strCancelButtonText}
							onCancel={b}
						/>
					</div>
				</S.wi>
			</v.e>
		</>
	);
}
function H(e) {
	switch (e) {
		case "phone": {
			return Localize("#RemotePlay_Explainer_Description_Phone");
		}
		case "tablet": {
			return Localize("#RemotePlay_Explainer_Description_Tablet");
		}
		case "tv": {
			return Localize("#RemotePlay_Explainer_Description_TV");
		}
		default: {
			console.warn(`Unknown remote play anywhere support cateogry "${e}"`);
			return "";
		}
	}
}
function J(e) {
	const { overview, onDismiss, ...n } = e;
	const a = jb();
	const s = `${W.TS.STORE_BASE_URL}mobile`;
	const o = zZ(overview);
	let l = "";
	if (!o.length) {
		o.push("phone");
	}
	switch (o.length) {
		case 0: {
			console.error(
				`Request to show remote play explainer dialog for app (${overview.appid}) that does not support remote play`,
			);
			return null;
		}
		case 1: {
			l = H(o[0]);
			break;
		}
		case 2: {
			const [e, r] = o;
			l = Localize("#RemotePlay_Explainer_Description_Two", H(e), H(r));
			break;
		}
		default: {
			if (o.length > 3) {
				console.error(
					"Did not expect more than 3 remote play categories. Only know how to display 3 at a time.",
				);
			}
			const [n, i, a] = o;
			l = Localize("#RemotePlay_Explainer_Description_Three", H(n), H(i), H(a));
		}
	}
	const c = Localize(
		"#RemotePlay_Explainer_Description",
		overview.display_name,
		l,
	);
	const m = () => a(`${s}#steam_link_section`);
	return (
		<z.mt {...n} onDismiss={onDismiss}>
			<P.sh>
				<L.Y9>{Localize("#RemotePlay_Explainer_Title")}</L.Y9>
				<div>{c}</div>
				<div className={x.InsetContainer}>
					<div>
						<b>{Localize("#RemotePlay_Explainer_HowWorks_Title")}</b>
					</div>
					<div>
						{LocalizeInlineReactWithFallback(
							"#RemotePlay_Explainer_HowWorks_1",
							<b />,
							<P.Oy onClick={m} />,
						)}
					</div>
					<div>
						{LocalizeInlineReactWithFallback(
							"#RemotePlay_Explainer_HowWorks_2",
							<b />,
							<P.Oy onClick={m} />,
						)}
					</div>
					<div>
						{LocalizeInlineReactWithFallback(
							"#RemotePlay_Explainer_HowWorks_3",
							<b />,
						)}
					</div>
					<div className={x.LinksContainer}>
						<U.rg className={x.QR}>{s}</U.rg>
						<div className={x.Right}>
							<b>{Localize("#RemotePlay_Explainer_GetApp")}</b>
							<div>
								{LocalizeReact(
									"#RemotePlay_Explainer_GetApp_Desc",
									<P.Oy>{s}</P.Oy>,
								)}
							</div>
							<div className={x.AppStoreContainer}>
								<Q_1 />
								<Q />
							</div>
						</div>
					</div>
				</div>
				<L.wi>
					<L.CB
						onCancel={onDismiss}
						strCancelText={Localize("#Button_Close")}
						onOK={() => {
							a(`${W.TS.STORE_BASE_URL}remoteplay#anywhere`);
							onDismiss();
						}}
						strOKText={Localize("#RemotePlay_LearnMore_Button")}
					/>
				</L.wi>
			</P.sh>
		</z.mt>
	);
}
function Q_1() {
	return (
		<Z
			imgURL={`${W.TS.STORE_CDN_URL}public/images/mobile/localizedimages/appleappstore/apple_store_${W.TS.LANGUAGE}.png`}
			href="https://itunes.apple.com/app/steam-link/id1246969117"
		/>
	);
}
function Q() {
	return (
		<Z
			imgURL={`${W.TS.STORE_CDN_URL}public/images/mobile/localizedimages/googleplaystore/google_play_store_${W.TS.LANGUAGE}.png`}
			href="https://play.google.com/store/apps/details?id=com.valvesoftware.steamlink"
			className={x.Google}
		/>
	);
}
function Z(e) {
	const { imgURL, href, className } = e;
	const a = jb();
	return (
		<img
			className={A_1(className, x.AppStoreLink)}
			onClick={() => a(href)}
			src={imgURL}
		/>
	);
}
export const aV = forwardRef((props, ref) => {
	const r = br();
	const n = $2();
	return <$ {...props} navigator={r} instance={n} ref={ref} />;
});
export function Iy(e) {
	const {
		launchApp,
		otherRunningGames,
		fnLaunchBoth,
		fnKillAndLaunch,
		fnCancelLaunch,
		closeModal,
	} = e;
	const l = otherRunningGames[0].display_name;
	const t_display_name = launchApp.display_name;
	const r_length = otherRunningGames.length;
	const u = VA();
	const A =
		r_length > 1
			? Localize("#GameAction_Launch_Multiple_Description_Multiple")
			: Localize("#GameAction_Launch_Multiple_Description", l);
	const p =
		r_length > 1
			? Localize(
					"#GameAction_Launch_Multiple_CloseAndLaunch_Multiple",
					t_display_name,
				)
			: Localize(
					"#GameAction_Launch_Multiple_CloseAndLaunch",
					l,
					t_display_name,
				);
	const g = (
		<div className={h.SaveWarning}>
			{Localize("#GameAction_Launch_Multiple_Warning")}
		</div>
	);
	return (
		<I
			className={h.LaunchMultipleAppsDialog}
			strTitle={Localize("#GameAction_Launch_Multiple_Title", t_display_name)}
			strDescription={
				<>
					{A}
					<br />
					{g}
				</>
			}
			strPrimaryButtonText={p}
			onPrimary={fnKillAndLaunch}
			bPrimaryRequiresConfirm
			strPrimaryConfirmText={Localize(
				"#GameAction_Launch_Multiple_CloseAndLaunch_Confirm",
			)}
			strSecondaryButtonText={Localize(
				"#GameAction_Launch_Multiple_LaunchSimultaneous",
				t_display_name,
			)}
			onSecondary={fnLaunchBoth}
			bDisableSecondary={u}
			strCancelButtonText={Localize("#GameAction_Launch_Multiple_Cancel")}
			onCancel={fnCancelLaunch}
			closeModal={closeModal}
		/>
	);
}
let $ = class extends i.Component {
	static contextType = p.QO;
	constructor(e) {
		super(e);
		this.state = {
			bShowRemotePlayExplainer: false,
		};
	}
	PerformAppAction(e, t) {
		e();
		if (t) {
			y.eZ.PlayNavSound(y.PN.LaunchGame);
		}
	}
	OnClick(e, t) {
		const r = AH(this.props.instance, this.props.overview, "selected");
		const n = jy(r, this.props.overview, "selected", 100, e);
		if (n) {
			let t = true;
			let a = false;
			if (this.context?.IN_GAMEPADUI) {
				switch (r) {
					case "Play":
					case "Launch":
					case "Connect":
					case "Stream": {
						a = true;
					}
				}
				if (r == "Play" || r == "Launch") {
					const r = M.oy.RunningApps.filter(
						(e) =>
							(e.app_type & 1) != 0 && e.appid != this.props.overview.appid,
					);
					const r_length = r.length;
					const o = (this.props.overview.app_type & 1) != 0;
					if (r_length > 0 && o && p.TS.ON_DECK) {
						t = false;
						const s = () => {
							for (const e of r) {
								SteamClient.Apps.TerminateApp(e.gameid, false);
							}
							this.PerformAppAction(n, a);
						};
						const o = (
							<Iy
								launchApp={this.props.overview}
								otherRunningGames={r}
								fnKillAndLaunch={s}
								fnLaunchBoth={() => this.PerformAppAction(n, a)}
								fnCancelLaunch={() => {}}
							/>
						);
						pg(o, e, {});
					}
				}
			}
			if (t) {
				this.PerformAppAction(n, a);
			}
		}
		if (
			this.props.bNavigateToApp &&
			this.props.overview.selected_per_client_data.display_status == 11
		) {
			this.props.navigator.App(this.props.overview.appid);
		}
		if (t) {
			t.stopPropagation();
			t.preventDefault();
		}
	}
	m_elActionButtonRef = i.createRef();
	FocusActionButton() {
		if (this.m_elActionButtonRef.current) {
			this.m_elActionButtonRef.current.focus();
		}
	}
	ShowStreamingMenu(e) {
		lX(
			<Te
				overview={this.props.overview}
				onStreamingTargetSelected={(e, t) => {
					SteamClient.Apps.SetStreamingClientForApp(
						this.props.overview.appid,
						e.clientid,
					);
				}}
				onShowRemotePlayInfo={this.ShowRemotePlayInfo}
			/>,
			this.m_elActionButtonRef.current,
			{
				bOverlapHorizontal: true,
			},
		);
		e.stopPropagation();
		e.preventDefault();
	}
	ShowRemotePlayInfo() {
		this.setState({
			bShowRemotePlayExplainer: true,
		});
	}
	HideRemotePlayInfo() {
		this.setState({
			bShowRemotePlayExplainer: false,
		});
	}
	render() {
		if (this.props.overview.selected_per_client_data.display_status == 13) {
			return null;
		}
		const {
			overview,
			buttonStyle,
			className,
			bShowStreamingSelector,
			strGameActionDetailsOverride,
			bFakeActions,
			bNavigateToApp,
			onFocus,
			navigator,
			instance,
			...f
		} = this.props;
		const y = buttonStyle == "long";
		let S = AH(this.props.instance, overview, "selected");
		let w = Kw(overview, "selected");
		let B = !S && !w;
		const v =
			bShowStreamingSelector &&
			(overview.per_client_data.length > 1 || ie(this.props.overview));
		if (C.H.BHasRecentlyLaunched(overview.appid)) {
			S = null;
			w = "Launching";
			B = true;
		}
		let I = "";
		if (S || w) {
			I = Np(S ?? w);
		}
		const E = this.context?.IN_GAMEPADUI && S == "ResumeGameInProgress";
		const M = (e) => {
			const t = jy(
				"Stop",
				this.props.overview,
				"selected",
				100,
				GetOwningWindowForEvent(e),
			);
			if (t) {
				t();
			}
		};
		const T = S ?? w;
		const R = k2(T) || KM(T);
		const F =
			this.context?.IN_GAMEPADUI &&
			R &&
			k.I.GetActiveLaunches().get(overview.appid.toString());
		const G =
			S == "Play" ||
			S == "Launch" ||
			S == "Launch" ||
			S == "Stream" ||
			S == "Launch" ||
			S == "Stream" ||
			S == "Connect";
		const O = (e) => this.OnClick(GetOwningWindowForEvent(e), e);
		const P = (
			<b.Z
				className={A_1(
					className,
					y && h.LongButton,
					h.PlayButtonContainer,
					!S && h.Disabled,
					G && h.Green,
					v && h.ShowingStreaming,
				)}
				{...f}
			>
				<c.ml
					noFocusRing
					autoFocus={this.context?.IN_GAMEPADUI}
					className={A_1(h.PlayButton, h.ButtonChild, !T && h.NoAction)}
					ref={this.m_elActionButtonRef}
					onMouseUp={bFakeActions ? O : undefined}
					onClick={bFakeActions || O}
					onFocus={onFocus}
				>
					{F && <D.Spinner />}
					{!F && T && WB(T)}
					{I.length > 0 && (
						<div className={A_1(h.ButtonText, B && h.ButtonThrobberPadding)}>
							{I}
						</div>
					)}
					{B && (
						<div className={h.ThrobberContainer}>
							<m.t className={h.Throbber} position="center" size="small" />
						</div>
					)}
				</c.ml>
				{E && (
					<b.Z
						focusable
						className={h.ShutdownAppButton}
						onActivate={(e) => M(e)}
						noFocusRing
					>
						{WB("Stop")}
					</b.Z>
				)}
				{v && (
					<Ee
						overview={overview}
						onMouseUp={bFakeActions ? this.ShowStreamingMenu : undefined}
						onClick={bFakeActions || this.ShowStreamingMenu}
					/>
				)}
				<J
					overview={this.props.overview}
					active={this.state.bShowRemotePlayExplainer}
					onDismiss={this.HideRemotePlayInfo}
				/>
			</b.Z>
		);
		if (S === "Stream") {
			const e = this.props.overview.selected_per_client_data.client_name;
			if (e) {
				const t = Localize("#StreamingClient_StreamFrom", e);
				return <Y.Gq toolTipContent={t}>{P}</Y.Gq>;
			}
		}
		return P;
	}
};
function Ee(e) {
	const { onMouseUp, onClick, overview } = e;
	const [a, o] = ((e) => {
		const t = 3;
		const [r, setR] = useState(false);
		Z3(() => setR(true), 30000, []);
		const [a, setA] = useState(true);
		const l = Qn();
		const c = $2();
		useEffect(() => {
			if (!e) {
				return;
			}
			const r = AH(c, e, "selected");
			if (l && r === "Install" && e.per_client_data.length > 1) {
				const e = new R.A();
				e.GetString(le).then((r) => {
					const n = parseInt(r);
					if (isNaN(n)) {
						e.StoreString(le, "1");
						setA(false);
					} else if (n < t) {
						e.StoreString(le, (n + 1).toString());
						setA(false);
					}
				});
			}
		}, [c, e, l]);
		const m = useCallback(() => {
			setA(true);
			new R.A().StoreString(le, t.toString());
		}, []);
		const u = k.I.GetActiveLaunches().has(e?.appid?.toString());
		return [!a && !r && !u, m];
	})(overview);
	const l = (e) => {
		if (a) {
			o();
		}
		if (onClick) {
			onClick(e);
		}
	};
	return (
		<c.ml
			noFocusRing
			className={A_1(h.StreamingSelector, h.ButtonChild)}
			onMouseUp={(e) => {
				if (a) {
					o();
				}
				if (onMouseUp) {
					onMouseUp(e);
				}
			}}
			onClick={l}
		>
			<f.V5 />
			{a && (
				<T.r9
					className={h.StreamingCallout}
					pulseMagnitude={2}
					bobberMagnitude={1.3}
				/>
			)}
			{a && (
				<div className={h.StreamingCalloutMessageContainer} onClick={l}>
					<T.kg className={h.StreamingCalloutMessage}>
						{Localize("#RemotePlay_Tip_Callout")}
					</T.kg>
				</div>
			)}
		</c.ml>
	);
}
function Te(e) {
	const { overview, onStreamingTargetSelected, onShowRemotePlayInfo } = e;
	const a = !Qn() && ie(overview);
	return (
		<l.tz>
			{overview.per_client_data.map((n) => (
				<Se
					appid={overview.appid}
					key={n.clientid}
					client={n}
					isLocalClient={overview.BIsPerClientDataLocal(n)}
					onSelected={(e) => onStreamingTargetSelected(n, e)}
					selected={
						overview.selected_clientid == n.clientid ||
						(e.overview.BIsSelectedClientLocal() && n.clientid == "0")
					}
				/>
			))}
			{a && (
				<>
					<l.K5 />
					<Ne overview={overview} onSelected={onShowRemotePlayInfo} />
				</>
			)}
		</l.tz>
	);
}
Cg([A.oI], $.prototype, "PerformAppAction", null);
Cg([A.oI], $.prototype, "OnClick", null);
Cg([A.oI], $.prototype, "FocusActionButton", null);
Cg([A.oI], $.prototype, "ShowStreamingMenu", null);
Cg([A.oI], $.prototype, "ShowRemotePlayInfo", null);
Cg([A.oI], $.prototype, "HideRemotePlayInfo", null);
$ = Cg([a.PA], $);
const re = {
	generic: [
		"#StreamingClient_AnotherDevice",
		"#StreamingClient_LinkDesc_Generic",
	],
	phone: ["#StreamingClient_Phone", "#StreamingClient_LinkDesc_Specific_Phone"],
	tablet: [
		"#StreamingClient_TabletDevice",
		"#StreamingClient_LinkDesc_Specific_Tablet",
	],
	tv: ["#StreamingClient_TV", "#StreamingClient_LinkDesc_Specific_TV"],
	mobile: [
		"#StreamingClient_MobileDevice",
		"#StreamingClient_LinkDesc_Specific_Mobile",
	],
};
function Ne(e) {
	const { overview, onSelected } = e;
	const n = zZ(overview);
	if (!n.length) {
		return null;
	}
	let a = "generic";
	if (n.length === 1) {
		a = n[0];
	} else if (n.length === 2 && n.includes("phone") && n.includes("tablet")) {
		a = "mobile";
	}
	const [s, o] = re[a];
	const l = Localize(s);
	const c = Localize(o);
	return (
		<Oe onSelected={onSelected}>
			<div>
				<div>{l}</div>
				<div className={h.RemotePlayAnywhereDescription}>{c}</div>
			</div>
		</Oe>
	);
}
function ie(e) {
	return zZ(e).length > 0;
}
export function zZ(e) {
	const t = [];
	for (const r of e.store_category) {
		switch (r) {
			case 41: {
				t.push("phone");
				break;
			}
			case 42: {
				t.push("tablet");
			}
		}
	}
	return t;
}
function Se(e) {
	const { client, isLocalClient, onSelected, selected } = e;
	let s = Localize("#StreamingClient_StreamFrom", client.client_name);
	if (isLocalClient) {
		s = p.TS.ON_DECK
			? Localize("#StreamingClient_ThisDeck")
			: Localize("#StreamingClient_ThisComputer");
	}
	return (
		<Oe onSelected={onSelected}>
			<span className={h.CheckContainer}>{selected && <K.X4B />}</span>
			<span className={h.StreamingTargetLabel}>{s}</span>
		</Oe>
	);
}
function Oe(e) {
	return <l.kt {...e} className={h.StreamingContextMenuItem} />;
}
const le = "TimesSeenStreamingCallout";
