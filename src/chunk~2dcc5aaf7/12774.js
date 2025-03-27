import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./41230.js";
import a from "./63696.js";
import s from "./88750.js";
import o from "./64608.js";
import l, { pg } from "./13869.js";
import u from "./35376.js";
export function ZH(e, t, r, n, i, s, o) {
	return new Promise((l, c) => {
		e(
			<O0
				strTitle={t}
				strDescription={r}
				strOKButtonText={n}
				strCancelButtonText={i}
				onOK={l}
				onCancel={c}
				bDestructiveWarning={s}
			>
				{o}
			</O0>,
		);
	});
}
export function nd(e, t, r, n, i) {
	return new Promise((s, o) => {
		e(
			<O0
				bAlertDialog
				strTitle={t}
				strDescription={r}
				strOKButtonText={n}
				onOK={s}
				onCancel={s}
			>
				{i}
			</O0>,
		);
	});
}
export let O0 = class extends a.Component {
	Cancel(e) {
		return () => {
			if (e) {
				e();
			}
			if (this.props.closeModal) {
				this.props.closeModal();
			}
		};
	}
	render() {
		const {
			strTitle,
			strDescription,
			strOKButtonText,
			strCancelButtonText,
			onGamepadCancel,
			strMiddleButtonText,
			onMiddleButton,
			bAlertDialog,
			children,
			...A
		} = this.props;
		const p = strOKButtonText || Localize("#Button_Close");
		let g = (
			<o.CB
				bOKDisabled={this.props.bOKDisabled}
				bCancelDisabled={this.props.bCancelDisabled}
				strOKText={strOKButtonText}
				onCancel={this.Cancel(this.props.onCancel)}
				strCancelText={strCancelButtonText}
			/>
		);
		if (bAlertDialog) {
			g = <o.jn>{p}</o.jn>;
		} else if (onMiddleButton) {
			g = (
				<o.VQ
					bOKDisabled={this.props.bOKDisabled}
					bCancelDisabled={this.props.bCancelDisabled}
					strOKText={strOKButtonText}
					onCancel={this.Cancel(this.props.onCancel)}
					strCancelText={strCancelButtonText}
					onUpdate={() => {
						onMiddleButton();
						if (this.props.closeModal) {
							this.props.closeModal();
						}
					}}
					strUpdateText={strMiddleButtonText}
					bUpdateDisabled={this.props.bMiddleDisabled}
				/>
			);
		}
		return (
			<u.e {...A}>
				<o.Y9> {strTitle || <>{"\xA0"}</>} </o.Y9>
				<o.f3
					onCancelButton={this.Cancel(onGamepadCancel || this.props.onCancel)}
				>
					<o.a3>
						{strDescription}
						{children}
					</o.a3>
					<o.wi>{g}</o.wi>
				</o.f3>
			</u.e>
		);
	}
};
O0 = Cg([i.PA], O0);
export let KG = class extends a.Component {
	render() {
		const e = {
			strTitle: Localize("#Error_FailureNotice"),
			strDescription: Localize("#Error_GenericFailureDescription"),
			bAlertDialog: true,
			bDestructiveWarning: true,
			onOK: () => {},
			onCancel: () => {},
			...this.props,
		};
		return <O0 {...e} />;
	}
};
export function pY(e, t) {
	pg(<KG strDescription={e} />, t);
}
KG = Cg([i.PA], KG);
export let Ee = class extends a.Component {
	render() {
		let e = {
			onOK: () => {},
			onCancel: () => {},
			bAlertDialog: true,
			...this.props,
		};
		e.strDescription = (
			<span
				style={{
					whiteSpace: "pre-line",
				}}
			>
				{" "}
				{e.strDescription}{" "}
			</span>
		);
		return <O0 {...e} />;
	}
};
export function Zw(e, t, r) {
	pg(<Ee strTitle={e} strDescription={t} />, r);
}
Ee = Cg([i.PA], Ee);
export const _Z = (e) => {
	const {
		strDisplayNameLocToken,
		confirmDialogContent,
		skipConfirm,
		onSelected,
		...o
	} = e;
	const u = a.useCallback(
		(e) => {
			((e, t, r, n) => {
				pg(
					<O0
						strTitle={Localize(t)}
						strDescription={r ?? Localize("#Dialog_AreYouSure")}
						onOK={n}
					/>,
					e,
				);
			})(
				GetOwningWindowForEvent(e),
				strDisplayNameLocToken,
				confirmDialogContent,
				() => onSelected(e),
			);
		},
		[strDisplayNameLocToken, confirmDialogContent, onSelected],
	);
	return (
		<s.kt {...o} onSelected={skipConfirm ? onSelected : u}>
			{Localize(e.strDisplayNameLocToken)}
		</s.kt>
	);
};
