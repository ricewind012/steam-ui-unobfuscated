import n from "./41480.js";
import "./36437.js";
import i from "./84252.js";
import a from "./55116.js";
import s from "./69164.js";
import o from "./63696.js";
import l, { Qn } from "./72476.js";
import c from "./55993.js";
import u from "./12774.js";
import d from "./35376.js";
import A from "./3673.js";
import p from "./46701.js";
import g from "./94790.js";
export let Ju = A.Ju;
export let BR = A.BR;
export let EN = g.E;
export let pY = u.pY;
export let ZH = u.ZH;
export let nd = u.nd;
export let Nm = p.Nm;
export let x_ = p.x_;
export let Q9 = n.Q9;
export let Ee = u.Ee;
export let KG = u.KG;
export let eV = d.e;
export let o0 = u.o0;
export let hM = n.hM;
export let mt = n.mt;
export let _Z = u._Z;
export function Qs(e) {
	const { children, navID, closeModal } = e;
	const m = o.createRef();
	const u = (e) => {
		e.stopPropagation();
		e.preventDefault();
		return true;
	};
	if (Qn() && !l.TS.IN_STEAMUI) {
		return (
			<i.B2
				navID={navID}
				navTreeRef={m}
				onCancelButton={closeModal}
				className={c.GamepadOnlyModalWrapper}
			>
				<a.q>
					<s.Z
						className={c.GamepadOnlyPanelWrapper}
						onGamepadDirection={u}
						focusableIfNoChildren
					>
						{children}
					</s.Z>
				</a.q>
			</i.B2>
		);
	} else {
		return <>{children}</>;
	}
}
