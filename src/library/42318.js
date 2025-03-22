var r = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var s = require("./52451.js");
export function Nr(e) {
	return function (t) {
		return i.createElement(
			tH,
			null,
			i.createElement(e, {
				...t,
			}),
		);
	};
}
export function wC(e) {
	return i.createElement(
		i.Fragment,
		null,
		i.Children.map(e.children, (e) => i.createElement(tH, null, e)),
	);
}
export class tH extends i.Component {
	state = {};
	reactErrorHandler = undefined;
	constructor(e) {
		super(e);
		this.state.lastErrorKey = e.errorKey;
	}
	static sm_ErrorReportingStore;
	static InstallErrorReportingStore(e) {
		this.sm_ErrorReportingStore = e;
	}
	componentDidCatch(e, t) {
		const n = tH.sm_ErrorReportingStore;
		if (n) {
			n.ReportError(e).then(
				(e) =>
					e &&
					this.setState({
						identifierHash: e.identifierHash,
					}),
			);
		} else {
			console.warn(
				"No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server",
			);
		}
		this.setState({
			error: {
				error: e,
				info: t,
			},
			lastErrorKey: this.props.errorKey,
		});
	}
	Reset() {
		this.setState({
			error: undefined,
		});
	}
	render() {
		const { children: e, fallback: t, errorKey: n } = this.props;
		const { error: r, identifierHash: s, lastErrorKey: o } = this.state;
		if (r && n == o) {
			if (t !== undefined) {
				if (typeof t == "function") {
					return t(r.error);
				} else {
					return t;
				}
			} else if (
				tH.sm_ErrorReportingStore &&
				tH.sm_ErrorReportingStore.reporting_enabled
			) {
				return i.createElement(u, {
					error: r,
					identifierHash: s,
					store: tH.sm_ErrorReportingStore,
					onRefresh: this.Reset,
				});
			} else {
				return i.createElement(l, {
					error: r,
					onDismiss: this.Reset,
				});
			}
		} else {
			return e || null;
		}
	}
}
(0, r.Cg)([s.oI], tH.prototype, "Reset", null);
const l = ({ error: e, onDismiss: t }) => {
	let n = e.error ? e.error.stack : "Stack missing";
	let r = e.info ? e.info.componentStack : "";
	let s = (e.error && e.error.message) || "unknown error";
	return i.createElement(
		m,
		null,
		i.createElement(d, null, 'Error: "', s, '"'),
		"\xA0\xA0\xA0",
		i.createElement(
			"span",
			{
				style: {
					textDecoration: "underline",
					cursor: "pointer",
				},
				onClick: t,
			},
			"(x) Dismiss",
		),
		i.createElement("br", null),
		i.createElement(h, null, n),
		i.createElement(h, null, "The error occurred while rendering:", r),
	);
};
const u = (e) => {
	const { error: t, onRefresh: n, identifierHash: r, store: s } = e;
	const o = (t.error && t.error.message) || "unknown error";
	const a = `${s.product}_${s.version}_${r}`;
	return i.createElement(
		m,
		null,
		i.createElement(
			d,
			null,
			"Something went wrong while displaying this content. ",
			i.createElement(
				"span",
				{
					style: {
						textDecoration: "underline",
						cursor: "pointer",
					},
					onClick: n,
				},
				"Refresh",
			),
		),
		i.createElement(h, null, "Error Reference: ", a),
		i.createElement(h, null, o),
	);
};
const m = ({ children: e }) =>
	i.createElement(
		"div",
		{
			style: {
				overflow: "auto",
				marginLeft: "15px",
				color: "white",
				fontSize: "16px",
				userSelect: "auto",
				backgroundColor: "black",
			},
			className: "ErrorBoundary",
		},
		e,
	);
const d = ({ children: e }) =>
	i.createElement(
		"h1",
		{
			style: {
				fontSize: "20px",
				display: "inline-block",
				marginTop: "15px",
				userSelect: "auto",
			},
		},
		e,
	);
const h = ({ children: e }) =>
	i.createElement(
		"pre",
		{
			style: {
				marginTop: "15px",
				opacity: 0.7,
				userSelect: "auto",
			},
		},
		e,
	);
