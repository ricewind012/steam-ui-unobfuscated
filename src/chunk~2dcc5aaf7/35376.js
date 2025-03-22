var n = require(/*webcrack:missing*/ "./41230.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./64608.js");
var s = require(/*webcrack:missing*/ "./49455.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require(/*webcrack:missing*/ "./72476.js");
var c = require("./46701.js");
export const e = (0, n.PA)((e) => {
	const { onCancel: t, closeModal: r, bOKDisabled: n, onOK: m } = e;
	const u = (0, l.Qn)();
	(0, s.w)(
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
	return i.createElement(
		c.x_,
		{
			onEscKeypress: d,
			className: e.modalClassName,
			bDestructiveWarning: e.bDestructiveWarning,
			bDisableBackgroundDismiss: e.bDisableBackgroundDismiss,
			bHideCloseIcon: e.bHideCloseIcon,
		},
		i.createElement(
			a.U9,
			{
				classNameContent: (0, o.A)(
					"GenericConfirmDialog",
					e.bAllowFullSize && "DialogContentFullSize",
					e.className,
				),
				onSubmit: A,
				bCenterVertically: !u,
			},
			e.children,
		),
	);
});
