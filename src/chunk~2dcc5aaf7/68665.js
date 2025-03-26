var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./69164.js");
var a = require("./72655.js");
var s = require("./96127.js");
var o = require("./95773.js");
var l = require("./98829.js");
var c = require("./64608.js");
import { Localize } from "../../actual_src/utils/localization.js";
var u = require(/*webcrack:missing*/ "./50376.js");
var d = require(/*webcrack:missing*/ "./90765.js");
var A = require("./21105.js");
var p = require("./55116.js");
var g = require(/*webcrack:missing*/ "./72476.js");
var h = require(/*webcrack:missing*/ "./52451.js");
var C = require(/*webcrack:missing*/ "./4690.js");
var _ = require("./2353.js");
export const r = (e) => {
	const {
		label: t,
		eSort: r,
		onChange: u,
		rgPickedFriends: f,
		excludeFriend: y,
		autoFocus: S,
		bDropInvite: w,
		renderChosenFriend: B,
	} = e;
	const v = (0, g.Qn)();
	const [I, E] = (0, n.useState)("");
	const [M, T] = (0, n.useState)(null);
	const R = (t) => {
		if (e.onFriendPicked) {
			e.onFriendPicked(t);
		}
		if (u) {
			u(f.concat(t));
		}
		E("");
	};
	const k = (t) => {
		if (e.onFriendUnpicked) {
			e.onFriendUnpicked(t);
		}
		if (u) {
			const e = f.findIndex((e) => e.accountid === t.accountid);
			if (e !== -1) {
				u(f.slice(0, e).concat(f.slice(e + 1)));
			}
		}
	};
	const D = (0, n.useMemo)(() => {
		const e = o.xm.FriendStore.all_friends.filter(
			(e) => (!y || !y(e)) && !f.some((t) => t.accountid === e.accountid),
		);
		const t = o.xm.ChatStore.FriendChatStore;
		if (r === 0) {
			e.sort((e, r) => {
				let n =
					t.GetFriendLastChatTime(r.accountid) -
					t.GetFriendLastChatTime(e.accountid);
				if (n !== 0) {
					return n;
				} else {
					return s.$c.DefaultFriendSortComparator(e, r);
				}
			});
		} else {
			e.sort((e, t) => e.display_name.localeCompare(t.display_name));
		}
		return e;
	}, [y, r, f]);
	const N = (0, n.useMemo)(() => {
		const e = I && I.trim().toLocaleLowerCase();
		const t = [];
		for (let r = 0; r < D.length && t.length < 500; r++) {
			const n = D[r];
			if (!e || !!n.BMatchesSearchString(e, false)) {
				t.push(n);
			}
		}
		return t;
	}, [I, D]);
	n.useEffect(() => {
		T(N.length > 0 && I.length > 0 ? N[0] : null);
	}, [N]);
	const F = (0, n.useCallback)(
		(e) => {
			if (e && !v) {
				e.scrollIntoView({
					behavior: "auto",
					block: "nearest",
				});
			}
		},
		[v],
	);
	const G = () => {
		const e = f[f.length - 1];
		if (e) {
			k(e);
		}
	};
	const O = f.length > 0;
	const [P, L] = n.useState(false);
	const z = (0, d.A)(
		"FriendPicker",
		O && "FriendPicker_FriendsChosen",
		P && "FriendPicker_Focus",
	);
	const x = B || b;
	const U = f.map((e) =>
		n.createElement(x, {
			friend: e,
			key: e.accountid,
			onClick: () => k(e),
		}),
	);
	const W = n.useRef();
	const V = N.map((e, t) => {
		const r = !v && e == M;
		const a = (0, d.A)("FriendPicker_SuggestedFriend", r && "Focus");
		return n.createElement(
			i.Z,
			{
				className: a,
				onActivate: () => R(e),
				onMouseUp: () => {
					T(e);
					W.current?.Focus();
				},
				key: e.accountid,
				"data-index": t,
				ref: r ? F : undefined,
			},
			n.createElement(l.bP, {
				noActions: true,
				friend: e,
				context: null,
			}),
		);
	});
	const H = n.useRef();
	n.useEffect(() => {
		H.current?.scrollTo({
			top: 0,
			behavior: "auto",
		});
	}, [N]);
	const j = (0, _.U)();
	const { strMinHeightStyle: q, refForResizeObserver: Q } = (0, h.X)();
	const Z = (0, h.Ue)(H, j.refForScrollable);
	return n.createElement(
		i.Z,
		{
			className: z,
			onSecondaryButton: G,
		},
		n.createElement(
			c.eo,
			{
				onChange: ({ currentTarget: { value: e } }) => E(e),
				onKeyDown: (e) => {
					if (e.keyCode === 13) {
						if ((!v && e.currentTarget.value.trim().length) || M != null) {
							e.preventDefault();
							if (M) {
								R(M);
							}
						}
					} else if (
						e.keyCode === 8 &&
						e.currentTarget.selectionEnd === 0 &&
						f.length > 0
					) {
						e.preventDefault();
						G();
					} else if (
						!v &&
						(e.keyCode == 38 ||
							e.keyCode == 40 ||
							e.keyCode == 34 ||
							e.keyCode == 33) &&
						N.length > 0
					) {
						e.preventDefault();
						const t = N.findIndex((e) => e == M);
						let r;
						if (e.keyCode == 38) {
							r = t - 1;
						} else if (e.keyCode == 33) {
							r = Math.max(0, t - 5);
						} else if (e.keyCode == 34) {
							r = Math.min(N.length - 1, t + 5);
						} else if (e.keyCode == 40) {
							r = t + 1;
						}
						if (r < 0) {
							r = 0;
						} else if (r > N.length - 1) {
							r = N.length - 1;
						}
						T(N[r]);
					}
				},
				onFocus: () => L(true),
				onBlur: () => L(false),
				label: t,
				value: I,
				placeholder: O ? "" : Localize("#FriendPicker_StartTyping"),
				autoFocus: S,
				focusOnMount: !v && S,
				ref: W,
			},
			U,
		),
		w &&
			n.createElement(
				"div",
				{
					className: "DialogLabel",
				},
				Localize("#Chat_InviteFriends_DropInvite"),
			),
		n.createElement(
			a.YZ,
			{
				className: "FriendPickerFriendList",
				style: {
					minHeight: v ? undefined : q,
				},
				ref: Q,
			},
			n.createElement("div", {
				className: "insetShadow verticalInsetShadow",
			}),
			n.createElement(
				A.MS,
				{
					ref: Z,
					onGamepadDirection: (e) => e.detail.is_repeat,
					onScroll: j.fnOnScroll,
					className: (0, d.A)(
						"FriendPickerScrollPanel",
						j.strClassNamesForScrollable,
					),
					scrollIntoViewType: C.Yo.NoTransform,
				},
				n.createElement(p.g, null, V),
			),
		),
	);
};
const b = (e) =>
	n.createElement(
		l.Rg,
		{
			friend: e.friend,
			context: null,
		},
		n.createElement(
			i.Z,
			{
				className: "FriendPicker_ChosenFriend",
				onActivate: () => {
					e.onClick(e.friend);
				},
			},
			n.createElement("span", null, e.friend.display_name),
			n.createElement(u.sED, null),
		),
	);
