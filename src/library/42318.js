import r, { Cg } from "./34629.js";
import i from "./63696.js";
import s from "./52451.js";
export function Nr(E) {
	return (t) => (
		<TH>
			<E {...t} />
		</TH>
	);
}
export function wC(e) {
	return (
		<>
			{i.Children.map(e.children, (e) => (
				<TH>{e}</TH>
			))}
		</>
	);
}
export class TH extends i.Component {
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
		const tH_sm_ErrorReportingStore = TH.sm_ErrorReportingStore;
		if (tH_sm_ErrorReportingStore) {
			tH_sm_ErrorReportingStore.ReportError(e).then(
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
		const { children, fallback, errorKey } = this.props;
		const { error, identifierHash, lastErrorKey } = this.state;
		if (error && errorKey == lastErrorKey) {
			if (fallback !== undefined) {
				if (typeof fallback == "function") {
					return fallback(error.error);
				} else {
					return fallback;
				}
			} else if (
				TH.sm_ErrorReportingStore &&
				TH.sm_ErrorReportingStore.reporting_enabled
			) {
				return (
					<U
						error={error}
						identifierHash={identifierHash}
						store={TH.sm_ErrorReportingStore}
						onRefresh={this.Reset}
					/>
				);
			} else {
				return <L error={error} onDismiss={this.Reset} />;
			}
		} else {
			return children || null;
		}
	}
}
Cg([s.oI], TH.prototype, "Reset", null);
const L = ({ error, onDismiss }) => {
	let n = error.error ? error.error.stack : "Stack missing";
	let r = error.info ? error.info.componentStack : "";
	let s = (error.error && error.error.message) || "unknown error";
	return (
		<M>
			<D>Error: "{s}"</D>
			{"\xA0\xA0\xA0"}
			<span
				style={{
					textDecoration: "underline",
					cursor: "pointer",
				}}
				onClick={onDismiss}
			>
				(x) Dismiss
			</span>
			<br />
			<H>{n}</H>
			<H>
				The error occurred while rendering:
				{r}
			</H>
		</M>
	);
};
const U = (e) => {
	const { error, onRefresh, identifierHash, store } = e;
	const o = (error.error && error.error.message) || "unknown error";
	const a = `${store.product}_${store.version}_${identifierHash}`;
	return (
		<M>
			<D>
				{"Something went wrong while displaying this content. "}
				<span
					style={{
						textDecoration: "underline",
						cursor: "pointer",
					}}
					onClick={onRefresh}
				>
					Refresh
				</span>
			</D>
			<H>
				{"Error Reference: "}
				{a}
			</H>
			<H>{o}</H>
		</M>
	);
};
const M = ({ children }) => (
	<div
		style={{
			overflow: "auto",
			marginLeft: "15px",
			color: "white",
			fontSize: "16px",
			userSelect: "auto",
			backgroundColor: "black",
		}}
		className="ErrorBoundary"
	>
		{children}
	</div>
);
const D = ({ children }) => (
	<h1
		style={{
			fontSize: "20px",
			display: "inline-block",
			marginTop: "15px",
			userSelect: "auto",
		}}
	>
		{children}
	</h1>
);
const H = ({ children }) => (
	<pre
		style={{
			marginTop: "15px",
			opacity: 0.7,
			userSelect: "auto",
		}}
	>
		{children}
	</pre>
);
