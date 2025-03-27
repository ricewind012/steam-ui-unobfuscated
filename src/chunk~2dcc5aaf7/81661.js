import { Localize } from "../../actual_src/utils/localization.js";
import n, { useState, useEffect, useCallback } from "./63696.js";
import i, { PA } from "./41230.js";
import a from "./55116.js";
import s from "./69164.js";
import l, { A as A_1 } from "./90765.js";
import c, { DF, Z3, Sz } from "./52451.js";
import m, { qw } from "./89748.js";
import u from "./32773.js";
import A from "./87913.js";
import { u6 } from "./43152.js";
import g from "./42318.js";
import h from "./4690.js";
import { N4, nM } from "./77347.js";
import _ from "./94746.js";
import f from "./14982.js";
import b from "./88696.js";
import { Vg } from "./57421.js";
import { Cn } from "./50350.js";
const d = u;
const W = (e) => (
	<div className={d.FriendsChatsOffline}>
		<div className={d.Title}>{(0, Localize)("#FriendsList_SignedOut")}</div>
		<div className={d.Details}>
			{(0, Localize)("#FriendsList_SignedOut_Detail")}
		</div>
	</div>
);
const B = (e) => (
	<div className={d.FriendsChatsOffline}>
		<div className={d.Title}>{(0, Localize)("#FriendsList_OfflineMode")}</div>
		<div className={d.Details}>
			{(0, Localize)("#FriendsList_OfflineMode_Detail")}
		</div>
	</div>
);
const V = PA((e) => {
	const TRef = n.useRef(undefined);
	const r = A.LN.loaded;
	const i = A.LN.signedOut;
	const a = qw().BIsOfflineMode();
	const o = N4();
	const c = nM();
	if (e.bNoFallback && !r) {
		return null;
	} else {
		return (
			<s.Z
				noFocusRing
				className={A_1(
					e.className,
					c && "ShowStaleWarning",
					"friendsui-container",
				)}
				ref={TRef}
				scrollIntoViewType={h.Yo.NoTransform}
			>
				{r && !i && !a && e.renderFunc && <e.renderFunc />}
				{i && !e.bNoFallback && <W />}
				{a && !e.bNoFallback && <B />}
				{!i && !a && !o && !e.bNoFallback && <_.I />}
			</s.Z>
		);
	}
});
export const p5 = PA((e) => (
	<g.tH>
		<V
			className={d.FriendsList}
			renderFunc={() =>
				A.LN.RenderFriendsListComponent({
					bQuickAccess: true,
				})
			}
		/>
	</g.tH>
));
function E(e) {
	const { visible } = e;
	const r = u6();
	const i = n.useCallback(() => visible, [visible]);
	const ARef = n.useRef(undefined);
	let o = {
		display: e.visible ? "block" : "none",
	};
	n.useEffect(() => {
		if (visible && !ARef.current?.BFocusWithin()) {
			ARef.current?.TakeFocus();
		}
	}, [visible]);
	const [c] = Vg();
	const [m, u] = Cn(c);
	const A = {
		"--gamepad-page-gutter-width": `${u}px`,
		...o,
	};
	return (
		<s.Z
			navRef={ARef}
			className={A_1(d.FriendsChatsContainer, r && "VirtualKeyboardVisible")}
			style={A}
			flow-children="row"
			fnCanTakeFocus={i}
			navEntryPreferPosition={h.iU.PREFERRED_CHILD}
		>
			<g.tH>{e.children}</g.tH>
		</s.Z>
	);
}
export const ZY = PA((e) => {
	const t = n.useCallback(() => A.LN.RenderFriendsListAndChatsComponent(), []);
	const r = DF(e.visible, 300000);
	return (
		<E visible={e.visible}>
			<F visible={e.visible} />
			<a.g>{r && <V className={d.FriendsChats} renderFunc={t} />}</a.g>
		</E>
	);
});
export const Mu = PA((e) => (
	<V
		className={d.RemotePlayTogetherControls}
		renderFunc={() => A.LN.RenderRemotePlayTogetherControls()}
	/>
));
export const u2 = PA((e) => (
	<div className={d.InvitesListWrapper}>
		<V className={d.InvitesList} renderFunc={() => A.LN.RenderInvitesList()} />
	</div>
));
export const RA = PA((e) => (
	<V
		className={d.FriendsVoiceList}
		renderFunc={() => A.LN.RenderFriendsListVoiceControls()}
	/>
));
export const Cy = PA((e) => (
	<V
		className={d.VoiceChatStatusHeader}
		bNoFallback
		renderFunc={() => A.LN.RenderFriendsVoiceChatHeader(e)}
	/>
));
export const Dx = PA((e) => {
	let { className, ...r } = e;
	return (
		<V
			className={className}
			bNoFallback
			renderFunc={() => A.LN.RenderFriendsUnreadChatMessagesHeader(r)}
		/>
	);
});
function F(e) {
	const { visible } = e;
	const [r, i] = ((e) => {
		const t = 1;
		const [r, setR] = useState(false);
		Z3(() => setR(true), 30000, []);
		const [a, setA] = useState(true);
		useEffect(() => {
			const e = new b.A();
			e.GetString(G).then((r) => {
				const n = parseInt(r);
				if (isNaN(n)) {
					e.StoreString(G, "1");
					setA(false);
				} else if (n < t) {
					e.StoreString(G, (n + 1).toString());
					setA(false);
				}
			});
		}, []);
		const o = useCallback(() => {
			setA(true);
			new b.A().StoreString(G, t.toString());
		}, []);
		const l = Sz(e);
		useEffect(() => {
			if (l && !e) {
				setA(true);
			}
		}, [l, e]);
		return [!a && !r, o];
	})(visible);
	if (r && visible) {
		return (
			<>
				<f.r9 className={d.StatusChangeHint} hollowRadius={15} />
				<div className={d.StatusChangeHintMessage} onClick={i}>
					<f.kg>{(0, Localize)("#FriendsList_StatusChange_Hint")}</f.kg>
				</div>
			</>
		);
	} else {
		return null;
	}
}
const G = "TimesSeenStatusChangeCallout";
