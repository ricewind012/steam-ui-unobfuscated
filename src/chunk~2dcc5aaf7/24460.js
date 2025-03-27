import {
	Localize,
	LocalizeReact,
	LocalizeInlineReactWithFallback,
} from "../../actual_src/utils/localization.js";
import n, { useState } from "./63696.js";
import i, { q3 } from "./90095.js";
import a, { PA } from "./41230.js";
import s from "./64608.js";
import o from "./10606.js";
import l, { KM, gt } from "./48289.js";
import m, { vL, I5 } from "./34792.js";
import u, { bG, Qt } from "./18057.js";
import d, { pg } from "./13869.js";
import A from "./87935.js";
import p from "./23924.js";
import h, { R7 } from "./11131.js";
import C, { Qn, hf } from "./72476.js";
import _, { lY } from "./51095.js";
import f from "./26853.js";
import b from "./35488.js";
import { A as A_1 } from "./90765.js";
import S from "./57472.js";
import w, { Wf, mV, Wp } from "./5640.js";
import { QR, qw, IU } from "./89748.js";
import { p8, Hs, ll } from "./63937.js";
import I from "./98325.js";
import E from "./50376.js";
import M from "./17231.js";
import T from "./8573.js";
import { js } from "./17613.js";
import { LH } from "./24295.js";
import D, { M8 } from "./15918.js";
import N from "./68608.js";
import F from "./12176.js";
import G from "./54946.js";
import { I as I_1 } from "./61416.js";
import { KV } from "./46382.js";
import L from "./69164.js";
import { Id, yt } from "./77347.js";
import { vJ } from "./52451.js";
import Q from "./3475.js";
import Z, { n as n_1 } from "./26667.js";
import Y from "./3651.js";
import { $I } from "./89600.js";
import X from "./2306.js";
import J from "./90242.js";
import $ from "./37086.js";
const g = p;
function Z_1(e) {
	return <E.d1w />;
}
function X_1(e) {
	return <E.Bir />;
}
function U(e) {
	return (
		<div className={A_1(I.RoleIcon, e.className)}>
			{e.role == 2 ? <X_1 /> : <Z_1 />}
		</div>
	);
}
function W(e) {
	const { strSteamID, role, persona, isSelf } = e;
	const s = new T.b(strSteamID);
	let o = e.size || "Large";
	const l = M8();
	const m = (() => {
		const e = KV();
		return I_1({
			queryKey: ["communitypreferences"],
			queryFn: async () => {
				const t = F.w.Init(G.tz);
				const r = await G.xt.GetCommunityPreferences(e, t);
				if (r.GetEResult() != 1) {
					throw new Error(
						`Error from GetCommunityPreferences: ${r.GetEResult()} ${r.GetErrorMessage()}`,
					);
				}
				return r.Body();
			},
		});
	})();
	const u = l.data?.get(s.GetAccountID());
	const d = m.data?.preferences().parenthesize_nicknames();
	return (
		<>
			<a
				className={I.ProfileLink}
				href={persona.GetCommunityProfileURL()}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<M.i8
					className={I.Avatar}
					persona={persona}
					size={o}
					statusPosition="right"
				/>
				<N.D
					className={I.PlayerName}
					bIsSelf={isSelf}
					bHideStatus={false}
					bHidePersona={false}
					bParenthesizeNicknames={d}
					bCompactView={false}
					persona={persona}
					strNickname={u}
					eFriendRelationship={3}
				/>
			</a>
			<div className={I.RoleAndIcon}>
				<U className={I.ProfileRoleIcon} role={role} />
				<div className={I.RoleName}>
					{(0, Localize)(`#FamilyManagement_Role_${role}`)}
				</div>
			</div>
		</>
	);
}
function V(e) {
	const { strSteamID, role, bInvitePending, children } = e;
	const s = LH();
	const [o, setO] = useState(false);
	const m = s == strSteamID;
	const u = js(strSteamID);
	p8(u, "#FamilyManagement_ErrorLoadFamilyGeneric");
	if (!u.isSuccess) {
		return null;
	}
	const u_data = u.data;
	return (
		<L.Z className={A_1(I.FamilyMemberRow, m && I.ActiveFamilyMemberRow)}>
			<L.Z
				className={I.FamilyMemberRowTop}
				onActivate={children ? () => setO(!o) : undefined}
			>
				<div className={I.Left}>
					<W strSteamID={strSteamID} role={role} persona={u_data} isSelf={m} />
					{bInvitePending && (
						<div className={I.InvitePending}>
							{(0, Localize)("#FamilyManagement_InvitePending")}
						</div>
					)}
					{m && (
						<span className={I.MeBadge}>
							{(0, Localize)("#FamilyManagement_Me")}
						</span>
					)}
				</div>
				{children && <H bExpanded={o} setExpanded={setO} />}
			</L.Z>
			{o && children}
		</L.Z>
	);
}
function H(e) {
	const { bExpanded, setExpanded } = e;
	return (
		<s.wl
			className={A_1(I.ExpandRowButton, bExpanded && I.Selected)}
			onClick={() => setExpanded(!bExpanded)}
		>
			<E.b8_ direction="down" />
		</s.wl>
	);
}
const Ee = () => {
	const e = bG("ParentalSetup");
	return (
		<s.G5>
			<$.WG
				label={(0, Localize)("#FamilySettings_FamilyView_Header")}
				description={(0, Localize)("#FamilySettings_FamilyView_Desc")}
				onClick={e}
			>
				{(0, Localize)("#FamilySettings_Manage_ButtonText")}
			</$.WG>
		</s.G5>
	);
};
const Te = (e) => {
	const { settings } = e;
	QR();
	Id();
	const r = q3(
		() =>
			settings &&
			settings.vecFamilySharingUsers
				.map((e) => l.O$.GetFriendState(e.nAccountID))
				.reduce((e, t, r, n) => e && !!t?.display_name, true),
	);
	return (
		<>
			<Re />
			{settings !== null && r && (
				<>
					<Ne settings={settings} />
					<Ae_1 settings={settings} />
					<Se settings={settings} />
				</>
			)}
			{settings !== null && !r && (
				<div className={g.ThrobberWrapper}>
					<f.t />
				</div>
			)}
			{settings === null && (
				<s.nB>{(0, Localize)("#FamilySettings_Offline")}</s.nB>
			)}
		</>
	);
};
const Re = () => {
	const e = Qt(A.B7.ResolveURL("FamilySharing"));
	return (
		<$.WG
			label={(0, Localize)("#FamilySettings_Header")}
			description={(0, Localize)("#FamilySettings_Description")}
			onClick={e}
		>
			{(0, Localize)("#FamilySettings_Manage_ButtonText")}
		</$.WG>
	);
};
const Ne = (e) => {
	const { bIsDeviceAuthorizedForFamilySharing, nMaxAuthorizedAccounts } =
		e.settings;
	const IRef = n.useRef(undefined);
	const a = R7();
	return (
		<>
			<X.C
				feature={7}
				ref={IRef}
				className={g.AuthorizeUserField}
				checked={bIsDeviceAuthorizedForFamilySharing}
				label={(0, Localize)("#FamilySettings_AuthorizeLocalDevice")}
				description={(0, Localize)(
					"#FamilySettings_UserListDescription",
					nMaxAuthorizedAccounts,
				)}
				onChange={(e) => {
					if (e) {
						SteamClient.FamilySharing.AuthorizeLocalDevice().then((t) => {
							if (t != 1) {
								let r;
								switch (t) {
									case 18: {
										r = (0, Localize)("#FamilySettings_SteamGuardRequired", t);
										break;
									}
									case 25: {
										r = (0, Localize)("#FamilySettings_LimitExceeded", t);
										break;
									}
									default: {
										r = (0, Localize)("#FamilySettings_FailedToAuthorize", t);
									}
								}
								pg(
									<o.KG
										strTitle={(0, Localize)("#Error_Generic")}
										strDescription={r}
									/>,
									a.ownerWindow ?? window,
									{
										strTitle: (0, Localize)("#Error_Generic"),
										bForcePopOut: true,
									},
								);
								IRef.current.SetChecked(!e, false);
							}
						});
					} else {
						SteamClient.FamilySharing.DeauthorizeLocalDevice().then((t) => {
							if (t != 1) {
								pg(
									<o.KG
										strTitle={(0, Localize)("#Error_Generic")}
										strDescription={(0, Localize)(
											"#FamilySettings_FailedToDeauthorize",
											t,
										)}
									/>,
									a.ownerWindow ?? window,
									{
										strTitle: (0, Localize)("#Error_Generic"),
										bForcePopOut: true,
									},
								);
								IRef.current.SetChecked(!e, false);
							}
						});
					}
				}}
			/>
		</>
	);
};
const Ie = PA((e) => {
	const { accountID, authorized, enabled, nMaxBorrowers } = e;
	const s = l.O$.GetFriendState(accountID);
	const MRef = n.useRef(undefined);
	const u = R7();
	if (!s.display_name) {
		return null;
	}
	return (
		<X.C
			feature={7}
			ref={MRef}
			disabled={!enabled}
			className={g.User}
			label={s.display_name}
			checked={authorized}
			onChange={(e) => {
				SteamClient.FamilySharing.UpdateAuthorizedBorrower(accountID, e).then(
					(t) => {
						if (t == 25) {
							pg(
								<o.KG
									strTitle={(0, Localize)("#Error_Generic")}
									strDescription={(0, Localize)(
										"#FamilySettings_TooManyBorrowers",
										nMaxBorrowers,
									)}
								/>,
								u.ownerWindow ?? window,
								{
									strTitle: (0, Localize)("#Error_Generic"),
									bForcePopOut: true,
								},
							);
							MRef.current.SetChecked(!e, false);
						} else if (t != 1) {
							pg(
								<o.KG
									strTitle={(0, Localize)("#Error_Generic")}
									strDescription={(0, Localize)(
										"#FamilySettings_FailedToUpdateBorrower",
										t,
									)}
								/>,
								u.ownerWindow ?? window,
								{
									strTitle: (0, Localize)("#Error_Generic"),
									bForcePopOut: true,
								},
							);
							MRef.current.SetChecked(!e, false);
						}
					},
				);
			}}
			bottomSeparator="none"
		/>
	);
});
const Ae_1 = (e) => {
	const {
		bIsDeviceAuthorizedForFamilySharing,
		nMaxAuthorizedAccounts,
		vecFamilySharingUsers,
	} = e.settings;
	const a = new Map(vecFamilySharingUsers.map((e) => [e.nAccountID, e]));
	const [o, setO] = n.useState(
		vecFamilySharingUsers
			.map((e) => e.nAccountID)
			.filter((e) => e != l.O$.currentUserSteamID.GetAccountID())
			.sort((e, t) => {
				const r = a.get(e);
				const n = a.get(t);
				if (r.bAuthorized && !n.bAuthorized) {
					return -1;
				} else if (n.bAuthorized && !r.bAuthorized) {
					return 1;
				} else {
					return (
						lY(
							l.O$.GetFriendState(e)?.display_name,
							l.O$.GetFriendState(t)?.display_name,
						) || e - t
					);
				}
			}),
	);
	if (!bIsDeviceAuthorizedForFamilySharing) {
		return null;
	}
	let u;
	if (o.length == 0) {
		u = (
			<s.D0
				className={g.User}
				disabled
				icon={<b.BlockUser />}
				label={(0, Localize)("#FamilySettings_UserList_NoAccounts")}
				bottomSeparator="none"
			/>
		);
	} else {
		const e = vecFamilySharingUsers.reduce(
			(e, t) => (t.bAuthorized ? e + 1 : e),
			0,
		);
		u = o.map((t) => {
			const i = a.get(t);
			return (
				<Ie
					key={t}
					accountID={t}
					authorized={i?.bAuthorized}
					enabled={e < nMaxAuthorizedAccounts || i?.bAuthorized}
					nMaxBorrowers={nMaxAuthorizedAccounts}
				/>
			);
		});
	}
	return (
		<div className={g.UserList}>
			<div className={g.UserListHeader}>
				<div>{(0, Localize)("#FamilySettings_UserList_LeftColumn")}</div>
				<div>{(0, Localize)("#FamilySettings_UserList_RightColumn")}</div>
			</div>
			{u}
		</div>
	);
};
const Se = (e) => {
	const { bIsDeviceAuthorizedForFamilySharing } = e.settings;
	if (bIsDeviceAuthorizedForFamilySharing) {
		return (
			<>
				<S.G
					feature={Q.uX}
					setting="show_family_sharing_notifications"
					label={(0, Localize)("#FamilySettings_ShowNotifications")}
				/>
			</>
		);
	} else {
		return null;
	}
};
const Oe = () => {
	const e = qw().GetFamilyGroupID();
	const t = Hs(e);
	const r = Qn();
	const i = Qt(
		A.B7.ResolveURL("FamilyManagement") + (r ? "?fromsettings=1" : ""),
	);
	if (t.isLoading) {
		return (
			<div className={g.ThrobberContainer}>
				<f.t />
			</div>
		);
	}
	if (t.isError) {
		const e = <b>{qw().GetFamilyGroupName()} </b>;
		return <div> {LocalizeReact("#FamilyGroup_QueryFailed", e)} </div>;
	}
	const a = t.data
		.members()
		.findIndex((e) => e.steamid() === qw().GetCurrentUser().strSteamID);
	const s = t.data.members()[a];
	const o = t.data.members().slice();
	if (a !== -1) {
		o.splice(a, 1);
	}
	return (
		<div className={g.FamilyGroup}>
			<div className={g.FamilyNameRow}>
				<span className={g.YourFamily}>
					{(0, Localize)("#FamilyManagement_YourFamily")}
				</span>
				<div className={g.FamilyName}>{t.data.name()}</div>
			</div>
			{a !== -1 && <V strSteamID={s.steamid()} role={s.role()} />}
			{o.map((e) => (
				<V strSteamID={e.steamid()} role={e.role()} key={e.steamid()} />
			))}
			<$.CS className={g.ManageFamilyButton} onClick={i}>
				{(0, Localize)("#FamilyGroup_ManageFamily")}
			</$.CS>
		</div>
	);
};
function Le() {
	const e = QR();
	const t = Id();
	const r = yt();
	const i = <b>{qw().GetFamilyGroupName()} </b>;
	return (
		<>
			{!t && <s.a3>{LocalizeReact("#FamilyGroup_Offline", i)} </s.a3>}
			{e && (
				<div className={g.OfflineButton}>
					<s.$n onClick={(e) => $I(e, r)}>{(0, Localize)("#GoOnline")}</s.$n>
				</div>
			)}
		</>
	);
}
export function Ci() {
	const e = hf();
	const t = Wf();
	const r = mV();
	const i = !Wp();
	const a = IU();
	const o = Id();
	const l = Qt(A.B7.ResolveURL("FamilyManagement"));
	const d = ll(qw().GetFamilyGroupID());
	const p = vL();
	const h = p?.vecFamilySharingUsers.reduce(
		(e, t) => e || t.bAuthorized,
		false,
	);
	const _ = (!t || !i) && r;
	const f = h;
	if (a) {
		return (
			<$.sh className={g.FamilyPanel}>
				{o && <Oe />}
				{!o && <Le />}
				{e && _ && d == 1 && <Ee />}
			</$.sh>
		);
	} else {
		return (
			<$.sh className={g.FamilyPanel}>
				<div>
					{" "}
					{LocalizeInlineReactWithFallback(
						"#FamilyGroup_TrySteamFamilies",
						<J.Ii onClick={l} />,
					)}
				</div>
				<div className={g.TrySteamFamiliesButtonContainer}>
					<s.jn className={g.TrySteamFamiliesButton} onClick={l}>
						{(0, Localize)("#FamilyGroup_TrySteamFamilies_Button")}
					</s.jn>
					<div className={g.Placeholder}>{"\xA0"}</div>
				</div>
				{e && _ && <Ee />}
				{f && <Te settings={p} />}
			</$.sh>
		);
	}
}
function Me(e) {
	const { dlc, appidParent } = e;
	return (
		<div className={g.AvailableLenderDLCRow}>
			<div className={g.Image}>
				<Y.lx item={dlc} appidParent={appidParent} />
			</div>
			<div className={g.Name}>{dlc.strName}</div>
		</div>
	);
}
function Ue(e) {
	const { steamid64 } = e;
	const r = new T.b(steamid64);
	const i = KM(r);
	const a = gt(r);
	const [s] = I5("bParenthesizeNicknames");
	return (
		<div className={g.AvatarAndPersona}>
			<M.i8 className={g.Avatar} persona={a} statusPosition="right" />
			<N.D
				className={g.PlayerName}
				bIsSelf={false}
				bParenthesizeNicknames={s}
				bHideStatus
				bCompactView={false}
				persona={a}
				eFriendRelationship={3}
				strNickname={i}
			/>
		</div>
	);
}
function De(e) {
	const { vecDLC, appidParent, nRemaining, nCommon } = e;
	let s;
	if (vecDLC.length == 0) {
		s =
			nCommon == 0
				? (0, Localize)("#FamilyGroup_ChoosePreferredLender_NoDLC")
				: (0, Localize)(
						"#FamilyGroup_ChoosePreferredLender_CommonOnly",
						nCommon,
					);
	} else if (nRemaining > 0) {
		s = (0, Localize)(
			"#FamilyGroup_ChoosePreferredLender_DLCAdditional",
			nRemaining,
		);
	}
	return (
		<div className={g.DLCList}>
			{vecDLC.map((e) => (
				<Me dlc={e} appidParent={appidParent} key={e.unAppID} />
			))}
			{s && <div className={g.AvailableLenderDLCRow}>{s}</div>}
		</div>
	);
}
function Ae(e) {
	const { lender, selected, onClick, nTotalLenders, mapDLCCount, appidParent } =
		e;
	const l = lender.vecDLC.filter(
		(e) => mapDLCCount.get(e.unAppID) != nTotalLenders,
	);
	const m = lender.vecDLC.length - l.length;
	l.sort(
		(e, t) =>
			mapDLCCount.get(e.unAppID) - mapDLCCount.get(t.unAppID) ||
			lY(e.strName, t.strName),
	);
	let u = l;
	if (u.length > 3) {
		u = u.slice(0, 2);
	}
	let d = l.length - u.length;
	return (
		<L.Z
			className={A_1(g.AvailableLenderRow, selected && g.Selected)}
			onActivate={onClick}
			autoFocus={selected}
		>
			<div className={g.TopRow}>
				<Ue steamid64={lender.steamid} />
				<div className={g.PreferredCopy}>
					{selected && (0, Localize)("#FamilyGroup_PreferredCopy")}
					<div className={g.Icon}>{selected && <b.Star />}</div>
				</div>
			</div>
			<De vecDLC={u} appidParent={appidParent} nRemaining={d} nCommon={m} />
		</L.Z>
	);
}
function Pe(e) {
	const {
		rgLenders,
		strPreferredLender,
		setPreferredLender,
		details,
		mapDLCCount,
	} = e;
	return (
		<div className={g.AvailableLenderList}>
			{rgLenders
				?.sort(
					(e, t) =>
						t.vecDLC.length - e.vecDLC.length || lY(e.steamid, t.steamid),
				)
				.map((e) => (
					<Ae
						lender={e}
						selected={strPreferredLender == e.steamid}
						key={e.steamid}
						onClick={() => setPreferredLender(e.steamid)}
						nTotalLenders={rgLenders.length}
						mapDLCCount={mapDLCCount}
						appidParent={details.unAppID}
					/>
				))}
		</div>
	);
}
function Ge(e) {
	const { rgLenders } = e;
	const [r, setR] = n.useState(new Map());
	n.useEffect(() => {
		if (rgLenders.length > 0) {
			const e = new Map();
			for (const r of rgLenders) {
				for (let t of r.vecDLC) {
					const r = (e.get(t.unAppID) || 0) + 1;
					e.set(t.unAppID, r);
				}
			}
			setR(e);
		}
	}, [rgLenders]);
	const a = Array.from(r?.values()).reduce(
		(e, r) => e + (r == rgLenders.length ? 1 : 0),
		0,
	);
	return (
		<L.Z className={g.AvailableLenders}>
			<Pe {...e} mapDLCCount={r} nCommonDLC={a} />
			<div className={g.InCommon}>
				{(0, Localize)("#FamilyGroup_ChoosePreferredLender_DLCInCommon", a)}
			</div>
		</L.Z>
	);
}
function He(e) {
	const { onClose, details, appID, rgLenders } = e;
	const [o, setO] = n.useState("");
	const [m, setM] = n.useState("");
	A = appID;
	const d = n_1({
		mutationFn: async (e) =>
			await SteamClient.FamilySharing.SetPreferredLender(A, e),
	});
	var A;
	const p = Id();
	const h = yt();
	const C = details.eDisplayStatus == 4;
	const _ = p && !C;
	n.useEffect(() => {
		if (rgLenders.length > 0) {
			const e =
				rgLenders.find((e) => e.bPreferred)?.steamid || rgLenders[0].steamid;
			setO(e);
		}
	}, [rgLenders]);
	const f = async () => {
		const e = new T.b(o);
		setM("");
		if ((await d.mutateAsync(e.GetAccountID())) == 1) {
			if (onClose) {
				onClose();
			}
		} else {
			setM((0, Localize)("#FamilyGroup_ChoosePreferredLender_Error"));
		}
	};
	return (
		<L.Z className={g.ChoosePreferredLenderDialog}>
			<s.Y9>{(0, Localize)("#FamilyGroup_ChoosePreferredLender_Title")}</s.Y9>
			<s.f3 className={g.Body} autoFocus retainFocus>
				{m && <s.a3 className={g.Error}>{m}</s.a3>}
				{_ && (
					<>
						<s.a3 className={g.PreferredCopyDisc}>
							{(0, Localize)("#FamilyGroup_ChoosePreferredLender_Text")}
						</s.a3>
						<Ge
							rgLenders={rgLenders}
							strPreferredLender={o}
							setPreferredLender={setO}
							details={details}
						/>
						<s.wi>
							<s.CB onOK={f} bOKDisabled={d.isPending} onCancel={onClose} />
						</s.wi>
					</>
				)}
				{!p && (
					<>
						<s.a3>
							{LocalizeReact(
								"#FamilyGroup_Offline",
								<b>{qw().GetFamilyGroupName()}</b>,
							)}{" "}
						</s.a3>
						<s.wi>
							<s.CB
								onOK={(e) => $I(e, h)}
								strOKText={(0, Localize)("#GoOnline")}
								onCancel={onClose}
							/>
						</s.wi>
					</>
				)}
				{p && !_ && (
					<>
						{C && (
							<s.a3>
								{" "}
								{(0, Localize)(
									"#FamilyGroup_ChoosePreferredLender_AppRunning",
								)}{" "}
							</s.a3>
						)}
						<s.wi className={g.OfflineFooter}>
							<s.jn onClick={f}>{(0, Localize)("#Button_OK")}</s.jn>
						</s.wi>
					</>
				)}
			</s.f3>
		</L.Z>
	);
}
export function YZ(e) {
	const { active, onDismiss, appID, details } = e;
	const s = vJ(
		() => active && SteamClient.FamilySharing.GetAvailableLenders(appID),
		[appID, active, details],
	);
	return (
		<o.mt active={s?.length > 0 && active} onDismiss={onDismiss}>
			<He
				appID={details.unAppID}
				details={details}
				rgLenders={s}
				onClose={onDismiss}
			/>
		</o.mt>
	);
}
