import n from "./63696.js";
import i from "./65104.js";
import a from "./83247.js";
import { A } from "./90765.js";
export function y(e) {
	let { type, heading, body, rightColumn } = e;
	let c = null;
	c =
		type == "info" ? <a.R2 className={i.Icon} /> : <a.eT className={i.Icon} />;
	let m = A(
		i.WarningBox,
		type == "info" && i.Info,
		type == "warning" && i.Warning,
		type == "error" && i.Error,
	);
	return (
		<div className={m}>
			{c}
			<div className={i.Explainer}>
				<div className={i.Heading}>{heading}</div>
				<div className={i.Body}>{body}</div>
			</div>
			{rightColumn}
		</div>
	);
}
