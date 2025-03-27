import {
	Localize,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./61657.js";
import a, { OQ } from "./31958.js";
import s from "./48289.js";
import o, { b$ } from "./90242.js";
import l from "./7558.js";
import c from "./83599.js";
const u = new c.wd("AppGridFastScroll").Debug;
let d;
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
		c = OQ((c ?? o) - r, -1, 100);
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
		h = OQ((h ?? d) - r, 0, c);
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
	const SRef = n.useRef(undefined);
	const CRef = n.useRef(undefined);
	const MRef = n.useRef(new Map());
	const [A, setA] = n.useState("");
	const _Ref = n.useRef(b$());
	n.useEffect(() => {
		SRef.current = undefined;
		CRef.current = undefined;
	}, [t]);
	const f = n.useCallback((t, r) => e[t].children[r], [e]);
	const b = n.useCallback(() => {
		const s_current = SRef.current;
		const c_current = CRef.current;
		const n = MRef.current.get(`${s_current}_${c_current}`);
		if (n) {
			u("Focusing", s_current, c_current, e[t].children[r].display_name, n);
			n.TakeFocus();
		} else {
			u(s_current, c_current, "not ready for focus yet");
		}
	}, [e]);
	const y = n.useCallback((e) => {
		if (!e) {
			SRef.current = undefined;
			CRef.current = undefined;
		}
	}, []);
	const SRef_1 = n.useRef(undefined);
	const w = n.useCallback(() => SRef_1.current !== undefined, []);
	const B = n.useCallback(
		(e, t, r) => {
			if (r) {
				MRef.current.set(`${e}_${t}`, r);
			} else {
				MRef.current.delete(`${e}_${t}`);
			}
			if (
				!w() &&
				e == SRef.current &&
				t == CRef.current &&
				!!r &&
				!r.BHasFocus()
			) {
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
			u("Focus placeholder", _Ref.current.current);
			_Ref.current.current?.TakeFocus();
			t = OQ(t, 0, e.length);
			const e_t = e[t];
			n = OQ(n, 0, e_t.children.length - 1);
			let m = e_t.refSection.current.offsetTop;
			const d = Math.floor(n / e_t.refItemsPerRow.current);
			m += d * (e_t.childHeight + e_t.nGridRowGap);
			const A = window.getComputedStyle(r);
			const p = parseInt(A.getPropertyValue("scroll-padding-top")) || 0;
			m = m - p + 8;
			return new Promise((e, a) => {
				const o = () => {
					SRef.current = t;
					CRef.current = n;
					u("Scrolled to", r.scrollTop);
					SRef_1.current = undefined;
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
					SRef_1.current = new l.JV(
						r,
						{
							scrollTop: m,
						},
						e,
					);
					SRef_1.current.Start();
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
				const s = a(e[0], CRef.current, r);
				if (s.bFinished) {
					return true;
				}
				n = s.nextItem;
				i = 0;
				o = s.nextTargetName;
			} else if (e.length > 1) {
				const t = OQ(SRef.current + r, 0, e.length - 1);
				u("Move from", SRef.current, "to", t);
				if (SRef.current == t) {
					return true;
				}
				i = t;
				n = 0;
				o = e[t].subSectionName;
			}
			u("Scroll to", n, f(0, n).display_name);
			setA(o);
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
				setA(n.nextTargetName);
				const e = v(0, n.nextItem, true);
				return (
					e !== false &&
					(e !== true &&
						e.then(() => {
							b();
							setA("");
						}),
					true)
				);
			}
			return true;
		},
		[t, e, v, b],
	);
	const MRef_1 = n.useRef(0);
	return {
		onItemFocused: (e, t) => {
			u("Focused", e, t, f(e, t).display_name);
			SRef.current = e;
			CRef.current = t;
		},
		onGamepadButtonDown: n.useCallback(
			(e) => {
				if (
					e.detail.button == i.pR.TRIGGER_LEFT ||
					e.detail.button == i.pR.TRIGGER_RIGHT
				) {
					u(
						SRef.current,
						CRef.current,
						f(SRef.current, CRef.current)?.display_name,
					);
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
								setA("");
							}),
						true)
					);
				}
				if (
					(e.detail.button == i.pR.DIR_UP ||
						e.detail.button == i.pR.DIR_DOWN) &&
					(e.detail.is_repeat && MRef_1.current++, MRef_1.current >= 5)
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
								u("Fast scroll complete, repeats", MRef_1.current);
								if (MRef_1.current < 5) {
									u("Fast scroll complete, taking focus");
									b();
									setA("");
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
				u(e.detail.button, MRef_1.current);
				if (
					e.detail.button == i.pR.DIR_UP ||
					e.detail.button == i.pR.DIR_DOWN
				) {
					if (MRef_1.current > 4) {
						u("Exiting fast scroll");
						if (SRef_1.current === undefined) {
							b();
						}
						setA("");
					}
				}
				MRef_1.current = 0;
			},
			[b],
		),
		onFocusWithin: y,
		scrollIntoViewHandler: w,
		strFastScrollTo: A,
		bindNavRef: B,
		navRefPlaceholder: _Ref,
		FastScrollTo: E,
	};
}
((e) => {
	e[(e.Up = -1)] = "Up";
	e[(e.Down = 1)] = "Down";
})((d ||= {}));
