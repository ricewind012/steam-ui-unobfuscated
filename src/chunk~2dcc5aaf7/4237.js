var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./61657.js");
var a = require(/*webcrack:missing*/ "./31958.js");
var s = require("./48289.js");
var o = require(/*webcrack:missing*/ "./90242.js");
var l = require("./7558.js");
var c = require(/*webcrack:missing*/ "./83599.js");
import {
	Localize,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";
const u = new c.wd("AppGridFastScroll").Debug;
var d;
function A(e) {
	const t = e[0].toLowerCase();
	if (t < "a") {
		return "#";
	} else {
		return t;
	}
}
function p(e, t, r, n, i) {
	let a;
	let s = "";
	let o = false;
	const l = e.children[t];
	const c = (e, t) => {
		if (e <= "a" && t == d.Up) {
			return "#";
		}
		if (e < "a" && t == d.Down) {
			return "a";
		}
		const r = String.fromCharCode(e.charCodeAt(0) + t);
		if (r < "a" || r > "z") {
			return e;
		} else {
			return r;
		}
	};
	const m = (e, t) => (t == "#" ? e[0] < "a" : e[0]?.toLowerCase() == t);
	if (i) {
		a = e.children.findIndex((e) => m(e.sort_as, i) && (!n || n(e)));
		if (a == -1) {
			o = true;
		}
		s = i;
	} else {
		const t = A(l.sort_as);
		let i;
		let u;
		do {
			i = u;
			u = c(u || t, r);
			if (i == u) {
				break;
			}
			a = e.children.findIndex((e) => m(e.sort_as, u) && (!n || n(e)));
		} while (a == -1);
		if (a == -1 || u == t) {
			o = true;
		}
		s = u;
	}
	return {
		nextItem: a,
		nextTargetName: s,
		bFinished: o,
	};
}
function g(e, t, r) {
	let n;
	let i = "";
	let s = false;
	const o = e.children[t].GetAchievementPercentage();
	let l;
	let c;
	do {
		l = c;
		c = (0, a.OQ)((c ?? o) - r, -1, 100);
		if (l == c) {
			break;
		}
		n = e.children.findIndex((e) => e.GetAchievementPercentage() == c);
	} while (n == -1);
	if (n == -1 || o == c) {
		s = true;
	}
	i =
		c == -1
			? Localize("#Library_SortByPctAchievementsNoAchievements_Tag")
			: Localize("#Library_SortByPctAchievementsComplete_Tag", c);
	return {
		nextItem: n,
		nextTargetName: i,
		bFinished: s,
	};
}
function h(e, t, r) {
	let n;
	let i = "";
	let o = false;
	const l = e.children[t];
	const c = s.O$.GetMaxCountFriendsInGame();
	const u = (e) => e.GetFriendsPlaying() == 0;
	const d = l.GetFriendsPlaying();
	if (d == 0) {
		const n = p(e, t, r, u);
		if (!n.bFinished) {
			return n;
		}
	}
	let g;
	let h;
	do {
		g = h;
		h = (0, a.OQ)((h ?? d) - r, 0, c);
		if (g == h) {
			break;
		}
		n = e.children.findIndex((e) => e.GetFriendsPlaying() == h);
	} while (n == -1);
	if (n == -1 || h == d) {
		o = true;
	}
	i =
		h == 0 && d != 0
			? A(e.children[n].sort_as)
			: LocalizePlural("#AppPortraitHover_FriendsPlaying", h);
	return {
		nextItem: n,
		nextTargetName: i,
		bFinished: o,
	};
}
export function J(e, t, r) {
	const s = n.useRef(undefined);
	const c = n.useRef(undefined);
	const m = n.useRef(new Map());
	const [A, C] = n.useState("");
	const _ = n.useRef((0, o.b$)());
	n.useEffect(() => {
		s.current = undefined;
		c.current = undefined;
	}, [t]);
	const f = n.useCallback((t, r) => e[t].children[r], [e]);
	const b = n.useCallback(() => {
		const t = s.current;
		const r = c.current;
		const n = m.current.get(t + "_" + r);
		if (n) {
			u("Focusing", t, r, e[t].children[r].display_name, n);
			n.TakeFocus();
		} else {
			u(t, r, "not ready for focus yet");
		}
	}, [e]);
	const y = n.useCallback((e) => {
		if (!e) {
			s.current = undefined;
			c.current = undefined;
		}
	}, []);
	const S = n.useRef(undefined);
	const w = n.useCallback(() => S.current !== undefined, []);
	const B = n.useCallback(
		(e, t, r) => {
			if (r) {
				m.current.set(e + "_" + t, r);
			} else {
				m.current.delete(e + "_" + t);
			}
			if (!w() && e == s.current && t == c.current && !!r && !r.BHasFocus()) {
				u("Bound focused item, taking focus", e, t, r);
				b();
			}
		},
		[b, w],
	);
	const v = n.useCallback(
		(t, n, i) => {
			if (w()) {
				return true;
			}
			u("Focus placeholder", _.current.current);
			_.current.current?.TakeFocus();
			t = (0, a.OQ)(t, 0, e.length);
			const o = e[t];
			n = (0, a.OQ)(n, 0, o.children.length - 1);
			let m = o.refSection.current.offsetTop;
			const d = Math.floor(n / o.refItemsPerRow.current);
			m += d * (o.childHeight + o.nGridRowGap);
			const A = window.getComputedStyle(r);
			const p = parseInt(A.getPropertyValue("scroll-padding-top")) || 0;
			m = m - p + 8;
			return new Promise((e, a) => {
				const o = () => {
					s.current = t;
					c.current = n;
					u("Scrolled to", r.scrollTop);
					S.current = undefined;
					e();
				};
				if (i) {
					r.scrollTo({
						top: m,
					});
					window.setTimeout(() => {
						o();
					}, 100);
				} else {
					const e = {
						msDuration: 350,
						timing: "cubic-in-out",
						onComplete: o,
					};
					S.current = new l.JV(
						r,
						{
							scrollTop: m,
						},
						e,
					);
					S.current.Start();
				}
			});
		},
		[w, e, r],
	);
	const I = n.useCallback(
		(r) => {
			if (w()) {
				return true;
			}
			let n;
			let i;
			let o;
			if (e.length == 1) {
				let a;
				if (t == 1) {
					a = p;
				} else if (t == 2) {
					a = g;
				} else {
					if (t != 10) {
						return false;
					}
					a = h;
				}
				const s = a(e[0], c.current, r);
				if (s.bFinished) {
					return true;
				}
				n = s.nextItem;
				i = 0;
				o = s.nextTargetName;
			} else if (e.length > 1) {
				const t = (0, a.OQ)(s.current + r, 0, e.length - 1);
				u("Move from", s.current, "to", t);
				if (s.current == t) {
					return true;
				}
				i = t;
				n = 0;
				o = e[t].subSectionName;
			}
			u("Scroll to", n, f(0, n).display_name);
			C(o);
			return v(i, n);
		},
		[w, f, v, e, t],
	);
	const E = n.useCallback(
		(r) => {
			if (t != 1 || e.length != 1) {
				return false;
			}
			const n = p(e[0], 0, d.Down, undefined, r);
			if (!n.bFinished) {
				C(n.nextTargetName);
				const e = v(0, n.nextItem, true);
				return (
					e !== false &&
					(e !== true &&
						e.then(() => {
							b();
							C("");
						}),
					true)
				);
			}
			return true;
		},
		[t, e, v, b],
	);
	const M = n.useRef(0);
	return {
		onItemFocused: (e, t) => {
			u("Focused", e, t, f(e, t).display_name);
			s.current = e;
			c.current = t;
		},
		onGamepadButtonDown: n.useCallback(
			(e) => {
				if (
					e.detail.button == i.pR.TRIGGER_LEFT ||
					e.detail.button == i.pR.TRIGGER_RIGHT
				) {
					u(s.current, c.current, f(s.current, c.current)?.display_name);
					const t = e.detail.button == i.pR.TRIGGER_RIGHT ? d.Down : d.Up;
					const r = I(t);
					return (
						r !== false &&
						(e.stopPropagation(),
						e.preventDefault(),
						r !== true &&
							r.then(() => {
								u("Fast scroll complete, taking focus");
								b();
								C("");
							}),
						true)
					);
				}
				if (
					(e.detail.button == i.pR.DIR_UP ||
						e.detail.button == i.pR.DIR_DOWN) &&
					(e.detail.is_repeat && M.current++, M.current >= 5)
				) {
					let t;
					if (e.detail.button == i.pR.DIR_DOWN) {
						u("Fast scroll down");
						t = d.Down;
					} else {
						u("Fast scroll up");
						t = d.Up;
					}
					const r = I(t);
					return (
						r !== false &&
						(e.stopPropagation(),
						e.preventDefault(),
						r !== true &&
							r.then(() => {
								u("Fast scroll complete, repeats", M.current);
								if (M.current < 5) {
									u("Fast scroll complete, taking focus");
									b();
									C("");
								}
							}),
						true)
					);
				}
				return false;
			},
			[I, f, b],
		),
		onGamepadButtonUp: n.useCallback(
			(e) => {
				u(e.detail.button, M.current);
				if (
					e.detail.button == i.pR.DIR_UP ||
					e.detail.button == i.pR.DIR_DOWN
				) {
					if (M.current > 4) {
						u("Exiting fast scroll");
						if (S.current === undefined) {
							b();
						}
						C("");
					}
				}
				M.current = 0;
			},
			[b],
		),
		onFocusWithin: y,
		scrollIntoViewHandler: w,
		strFastScrollTo: A,
		bindNavRef: B,
		navRefPlaceholder: _,
		FastScrollTo: E,
	};
}
(function (e) {
	e[(e.Up = -1)] = "Up";
	e[(e.Down = 1)] = "Down";
})((d ||= {}));
