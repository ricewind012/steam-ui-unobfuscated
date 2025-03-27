import n from "./63696.js";
import i from "./90242.js";
import a, { wJ } from "./45328.js";
import s, { n9 } from "./92059.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import l, { yK } from "./72476.js";
export function J(e) {
	const { type, id, hoverClassName, fnGetIDOverride, fnHoverState, children } =
		e;
	const MRef = n.useRef(null);
	const u = n.useCallback(
		(e) => {
			if (type != "clan") {
				if (fnHoverState) {
					fnHoverState(true);
				}
				if (window.GameHover) {
					window.GameHover(
						fnGetIDOverride ? fnGetIDOverride() : MRef.current,
						e,
						"global_hover",
						{
							type: type,
							id: id,
							v6: 1,
						},
					);
				}
			}
		},
		[type, fnHoverState, fnGetIDOverride, id],
	);
	const d = n.useCallback(
		(e) => {
			if (type != "clan") {
				if (fnHoverState && e.relatedTarget) {
					fnHoverState(false);
				}
				if (window.HideGameHover) {
					window.HideGameHover(
						fnGetIDOverride ? fnGetIDOverride() : MRef.current,
						e,
						"global_hover",
					);
				}
			}
		},
		[type, fnHoverState, fnGetIDOverride],
	);
	if (l.TS.WEB_UNIVERSE == "dev") {
		AssertMsg(
			yK() == "store",
			"StoreGameHoverAnchorSource only works on Store web properties",
		);
	}
	return (
		<div
			ref={MRef}
			className={hoverClassName}
			onMouseEnter={u}
			onMouseLeave={d}
			onFocus={u}
			onBlur={d}
		>
			{children}
		</div>
	);
}
export function u(e) {
	const { id, type, strExtraParams } = e;
	const m = n9();
	const u =
		type == "clan"
			? wJ(
					`${l.TS.STORE_BASE_URL}curator/${id}${
						strExtraParams ? `?${strExtraParams}` : ""
					}`,
					m,
				)
			: wJ(
					`${l.TS.STORE_BASE_URL}${type}/${id}${
						strExtraParams ? `?${strExtraParams}` : ""
					}`,
					m,
				);
	return (
		<J {...e}>
			<i.Ii
				className={e.className}
				href={u}
				target={l.TS.IN_CLIENT || "_blank"}
				rel="noopener noreferrer"
			>
				{e.children}
			</i.Ii>
		</J>
	);
}
