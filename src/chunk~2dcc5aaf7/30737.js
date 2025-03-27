import { Localize } from "../../actual_src/utils/localization.js";
import n, { useState } from "./63696.js";
import i from "./10606.js";
import a from "./6472.js";
import o from "./26853.js";
export function vs() {
	const [e, setE] = useState(false);
	const [r, setR] = useState(false);
	const [a, setA] = useState(false);
	const [o, setO] = useState(null);
	const [c, setC] = useState(null);
	const [u, setU] = useState(null);
	const [A, setA_1] = useState(null);
	const [g, setG] = useState(null);
	return {
		bLoading: e,
		bError: r,
		bSuccess: a,
		strError: o,
		strSuccess: c,
		elSuccess: A,
		elError: u,
		strThrobber: g,
		fnSetLoading: setE,
		fnSetError: setR,
		fnSetSuccess: setA,
		fnSetStrError: setO,
		fnSetStrSuccess: setC,
		fnSetElSuccess: setA_1,
		fnSetElError: setU,
		fnSetThrobber: setG,
	};
}
export function Hh(e) {
	const { strDialogTitle, state, closeModal, strThrobber } = e;
	const {
		bLoading,
		bError,
		bSuccess,
		strError,
		strSuccess,
		elSuccess,
		elError,
		strThrobber: strThrobber_1,
	} = state;
	if (bError || strError || strError || elError) {
		return (
			<i.o0
				strTitle={strDialogTitle}
				bAlertDialog
				closeModal={closeModal}
				className={a.SucessErrorDialog}
			>
				{Boolean(strError) && (
					<div className={a.ErrorStylesWithIcon}>
						{strError || (0, Localize)("#Error_ErrorCommunicatingWithNetwork")}
					</div>
				)}
				{Boolean(elError) && elError}
			</i.o0>
		);
	} else if (bSuccess || strSuccess || strSuccess || elSuccess) {
		return (
			<i.o0
				strTitle={strDialogTitle}
				strDescription={
					strSuccess || (0, Localize)("#EventDisplay_Share_Success")
				}
				bAlertDialog
				closeModal={closeModal}
				className={a.SucessErrorDialog}
			>
				<>{Boolean(elSuccess) && elSuccess}</>
			</i.o0>
		);
	} else {
		return (
			<i.o0
				strTitle={strDialogTitle}
				className={a.SucessErrorDialog}
				closeModal={() => {}}
			>
				<o.t
					string={
						strThrobber ||
						strThrobber_1 ||
						strThrobber_1 ||
						(0, Localize)("#Loading")
					}
					size="medium"
					position="center"
				/>
			</i.o0>
		);
	}
}
