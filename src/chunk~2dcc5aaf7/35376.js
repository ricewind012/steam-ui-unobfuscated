import n, { PA } from "./41230.js";
import i from "./63696.js";
import a from "./64608.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import { A } from "./90765.js";
import { Qn } from "./72476.js";
import c from "./46701.js";
export const e = PA((e) => {
	const { onCancel: t, closeModal: r, bOKDisabled: n, onOK: m } = e;
	const u = Qn();
	AssertMsg(
		r || t,
		`Either closeModal or onCancel should be passed to GenericDialog. Classes: ${e.className} ${e.modalClassName}`,
	);
	const d = i.useCallback(() => {
		if (!t || !t()) {
			if (r) {
				r();
			}
		}
	}, [t, r]);
	const A = i.useCallback(async () => {
		if (!n) {
			if (m) {
				await m();
			}
			if (r) {
				r();
			}
		}
	}, [n, m, r]);
	return (
		<c.x_
			onEscKeypress={d}
			className={e.modalClassName}
			bDestructiveWarning={e.bDestructiveWarning}
			bDisableBackgroundDismiss={e.bDisableBackgroundDismiss}
			bHideCloseIcon={e.bHideCloseIcon}
		>
			<a.U9
				classNameContent={A(
					"GenericConfirmDialog",
					e.bAllowFullSize && "DialogContentFullSize",
					e.className,
				)}
				onSubmit={A}
				bCenterVertically={!u}
			>
				{e.children}
			</a.U9>
		</c.x_>
	);
});
