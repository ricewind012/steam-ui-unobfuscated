import n from "./2053.js";
import { Xf } from "./31319.js";
import s from "./63696.js";
import o from "./85243.js";
import l from "./69164.js";
import c from "./42318.js";
import m from "./10606.js";
import { A as A_1 } from "./90765.js";
import { iW, Wh, ez } from "./31800.js";
import A, { Bx } from "./55489.js";
import p from "./55116.js";
import { rP } from "./72476.js";
const i = n;
const h = 300;
export function M(e) {
	const {
		className,
		onEscKeypress,
		padding,
		bGamepadUIScrollWithin,
		children,
	} = e;
	Bx(o.I5.Overlay, "GamepadModalPosition");
	iW(true, "GamepadModalPosition");
	Xf("hidden", "GamepadModalPosition");
	Wh(null, "GamepadModalPosition");
	ez(true, "GamepadModalPosition");
	const _ = rP();
	const f = padding ?? "standard";
	const b = A_1(
		i.ModalPosition,
		f == "standard" && i.WithStandardPadding,
		bGamepadUIScrollWithin && i.ScrollWithin,
		_.IN_VR && i.VR,
		className,
	);
	const { fnClick, refElem } = ((e) => {
		const TRef = s.useRef(undefined);
		const RRef = s.useRef(Date.now());
		const n = rP().IN_VR;
		s.useEffect(() => {
			if (n) {
				return;
			}
			const e = TRef.current?.ownerDocument?.defaultView;
			if (!e) {
				return;
			}
			const i = () => (RRef.current = Date.now());
			e.addEventListener("focus", i);
			return () => {
				e.removeEventListener("focus", i);
			};
		}, [n]);
		const i = s.useCallback(
			(t) => {
				const i = Date.now() - RRef.current;
				if (!!n || !(i < h)) {
					if (t.target === t.currentTarget) {
						e?.();
					}
				}
			},
			[n, e],
		);
		return {
			refElem: TRef,
			fnClick: i,
		};
	})(onEscKeypress);
	return (
		<l.Z
			className={b}
			onCancelButton={onEscKeypress}
			focusableIfNoChildren
			ref={refElem}
		>
			<l.Z
				onClick={fnClick}
				focusable={false}
				className={i.ModalClickToDismiss}
			/>
			<p.q>
				<c.tH>{children}</c.tH>
			</p.q>
		</l.Z>
	);
}
export function I(e) {
	return (
		<m.Nm.Provider
			value={{
				ModalPosition: M,
			}}
		>
			{e.children}
		</m.Nm.Provider>
	);
}
