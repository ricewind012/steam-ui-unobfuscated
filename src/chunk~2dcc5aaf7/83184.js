import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import i from "./83957.js";
import s from "./63696.js";
import o from "./12176.js";
import l from "./69164.js";
import c from "./61657.js";
import m, { mb } from "./13337.js";
import u from "./46948.js";
import d from "./64608.js";
import A from "./35488.js";
import p from "./10606.js";
import g, { pg } from "./13869.js";
import h from "./26853.js";
import { A as A_1 } from "./90765.js";
import f, { hf } from "./72476.js";
import b from "./28694.js";
let n;
const a = i;
const y = b;
((e) => {
	e[(e.SSA = 0)] = "SSA";
	e[(e.EnterCode = 1)] = "EnterCode";
	e[(e.Info = 2)] = "Info";
	e[(e.Success = 3)] = "Success";
	e[(e.Failure = 4)] = "Failure";
	e[(e.Busy = 5)] = "Busy";
})((n ||= {}));
export const L = (e) => {
	const [t, setT] = s.useState({
		eState: n.EnterCode,
		nErrorCode: 0,
		strProductName: "",
	});
	const [i, setI] = s.useState("");
	const BRef = s.useRef(undefined);
	const S = () => {
		if (e.onCancel) {
			e.onCancel();
		}
		if (e.closeModal) {
			e.closeModal();
		}
	};
	const w = mb(m.Yq);
	s.useEffect(() => {
		if (w && w.time_ssa_updated != 0) {
			if (w.time_ssa_accepted < w.time_ssa_updated) {
				setT({
					eState: n.SSA,
					nErrorCode: 0,
					strProductName: "",
				});
			} else {
				setT({
					eState: n.EnterCode,
					nErrorCode: 0,
					strProductName: "",
				});
			}
		} else {
			setT({
				eState: n.Busy,
				nErrorCode: 0,
				strProductName: "",
			});
		}
	}, [w]);
	const B = s.useCallback((e) => e?.TakeFocusAndShowKeyboard(), []);
	const v = async () => {
		const e = o.w.Init(u.jQ);
		e.Body().set_activation_code(i);
		e.Body().set_is_request_from_client(true);
		try {
			setT({
				eState: n.Busy,
				nErrorCode: 0,
				strProductName: "",
			});
			let t = await u.nd.RegisterCDKey(
				m.Yq.CMInterface.GetServiceTransport(),
				e,
			);
			let i = "";
			if (t.Body().purchase_receipt_info().line_items().length > 0) {
				i = t
					.Body()
					.purchase_receipt_info()
					.line_items()[0]
					.line_item_description();
			}
			if (t.Body().purchase_result_details() == 0) {
				setT({
					eState: n.Success,
					nErrorCode: 0,
					strProductName: i,
				});
			} else {
				setT({
					eState: n.Failure,
					nErrorCode: t.Body().purchase_result_details(),
					strProductName: i,
				});
			}
		} catch (e) {
			setT({
				eState: n.Failure,
				nErrorCode: 4,
				strProductName: "",
			});
		}
	};
	const [I, setI_1] = s.useState("");
	s.useEffect(() => {
		(async () => {
			const e = await a.get(
				`${f.TS.STORE_BASE_URL}subscriber_agreement/${f.TS.LANGUAGE}?deck_ssa=1`,
			);
			setI_1(e.data);
		})();
	}, []);
	const M = hf();
	let T = "";
	let R = "";
	if (t.eState == n.Failure) {
		switch (t.nErrorCode) {
			case 14: {
				T = "#Activate_InvalidCode_Headline";
				R = "#Activate_InvalidCode";
				break;
			}
			case 15: {
				T = "#Activate_Subscription_Rejected_Headline";
				R = "#Activate_Subscription_Rejected";
				break;
			}
			case 53: {
				T = "#Activate_RateLimited_Headline";
				R = "#Activate_RateLimited";
				break;
			}
			case 4: {
				T = "#Activate_ServiceUnavailable_Headline";
				R = "#Activate_ServiceUnavailable";
				break;
			}
			case 13: {
				T = "#Activate_RestrictedCountry_Headline";
				R = "#Activate_RestrictedCountry";
				break;
			}
			case 9: {
				T = "#Activate_AlreadyPurchased_Headline";
				R = "#Activate_AlreadyPurchased";
				break;
			}
			case 24: {
				T = "#Activate_MustOwnOtherApp_Headline";
				R = "#Activate_MustOwnOtherApp";
				break;
			}
			case 36: {
				T = "#Activate_MustLoginPS3_Headline";
				R = "#Activate_MustLoginPS3";
			}
		}
	}
	return (
		<p.eV className={y.ActivateProductDialog} onOK={v} onCancel={S}>
			{t.eState == n.SSA && (
				<l.Z
					className={y.SSAPopupContainer}
					onGamepadDirection={(e) => {
						if (BRef.current) {
							switch (e.detail.button) {
								case c.pR.DIR_UP: {
									BRef.current.scrollBy({
										top: -100,
										behavior: "smooth",
									});
									return true;
								}
								case c.pR.DIR_DOWN: {
									BRef.current.scrollBy({
										top: 100,
										behavior: "smooth",
									});
									return true;
								}
							}
						}
						return false;
					}}
				>
					<d.Y9>{(0, Localize)("#Settings_Library_ProdKey_Activate")}</d.Y9>
					<d.a3 className={y.AgreementPrompt}>
						{(0, Localize)("#Settings_Library_SSA_Agree")}
					</d.a3>
					<l.Z ref={BRef} className={y.SSAContainer}>
						<div
							dangerouslySetInnerHTML={{
								__html: I,
							}}
						/>
					</l.Z>
					<d.wi>
						<d.CB
							bOKDisabled={false}
							onOK={() => m.Yq.AcceptSSA(0)}
							onCancel={S}
							strOKText={(0, Localize)("#Settings_Library_SSA_Agree_Confirm")}
							focusButton="primary"
						/>
					</d.wi>
				</l.Z>
			)}
			{!M && t.eState == n.Info && (
				<div className={y.ProductActivationInfoContainer}>
					<div className={y.ModalHeader}>
						<d.Y9>
							<A.Information className={y.InfoIcon} />
							{(0, Localize)("#Settings_Library_ProdKey_Info_Title")}
						</d.Y9>
						<l.Z
							focusable
							className={y.CloseButtonContainer}
							onActivate={() =>
								setT({
									eState: n.EnterCode,
									nErrorCode: 0,
									strProductName: "",
								})
							}
						>
							<A.Close className={y.CloseButton} />
						</l.Z>
					</div>
					<d.a3 className={y.InfoBody}>
						{(0, Localize)("#Settings_Library_ProdKey_Info_Details")}
					</d.a3>
					<div className={y.InfoExampleHeader}>
						{(0, Localize)("#Settings_Library_ProdKey_Info_Examples")}
					</div>
					<div className={y.InfoExample}>
						{(0, Localize)("#Settings_Library_ProdKey_Info_Example_1")}
					</div>
					<div className={y.InfoExample}>
						{(0, Localize)("#Settings_Library_ProdKey_Info_Example_2")}
					</div>
					<div className={y.InfoExample}>
						{(0, Localize)("#Settings_Library_ProdKey_Info_Example_3")}
					</div>
					<d.jn
						className={y.InfoAcceptButton}
						autoFocus
						onClick={() =>
							setT({
								eState: n.EnterCode,
								nErrorCode: 0,
								strProductName: "",
							})
						}
					>
						{(0, Localize)("#Generic_GotItCalm")}
					</d.jn>
				</div>
			)}
			{t.eState == n.EnterCode && (
				<l.Z className={y.ActivateProductContainer}>
					<div className={A_1(y.HeaderContainer, "DialogHeader")}>
						<d.Y9 className={y.CodeInputHeader}>
							{(0, Localize)("#Settings_Library_ProdKey_EnterProductCode")}
							{!M && (
								<l.Z
									focusable
									className={y.InfoIconContainer}
									onActivate={() =>
										setT({
											eState: n.Info,
											nErrorCode: 0,
											strProductName: "",
										})
									}
								>
									<A.Information className={y.InfoIcon} />
								</l.Z>
							)}
						</d.Y9>
					</div>
					{M && (
						<div className={y.ProductActivationInfoContainerDesktop}>
							<d.a3 className={y.InfoBody}>
								{(0, Localize)("#Settings_Library_ProdKey_Info_Details")}
							</d.a3>
							<div className={y.InfoExampleHeader}>
								{(0, Localize)("#Settings_Library_ProdKey_Info_Examples")}
							</div>
							<div className={y.InfoExample}>
								{(0, Localize)("#Settings_Library_ProdKey_Info_Example_1")}
							</div>
							<div className={y.InfoExample}>
								{(0, Localize)("#Settings_Library_ProdKey_Info_Example_2")}
							</div>
							<div className={y.InfoExample}>
								{(0, Localize)("#Settings_Library_ProdKey_Info_Example_3")}
							</div>
						</div>
					)}
					<d.pd
						className={y.CodeInput}
						autoFocus
						refKeyboardHandle={B}
						onChange={(e) => setI(e.target.value)}
					/>
					<d.wi>
						<d.CB bOKDisabled={i.length == 0} onOK={v} onCancel={S} />
					</d.wi>
				</l.Z>
			)}
			{t.eState == n.Failure && (
				<>
					<d.Y9>{(0, Localize)(T, t.strProductName)}</d.Y9>
					<d.a3
						className={y.ResultBody}
						style={{
							whiteSpace: "pre-line",
						}}
					>
						{(0, Localize)(R, t.strProductName)}
					</d.a3>
					<d.jn
						className={y.ResultAcceptButton}
						autoFocus
						onClick={() =>
							setT({
								eState: n.EnterCode,
								nErrorCode: 0,
								strProductName: "",
							})
						}
					>
						{(0, Localize)("#Button_TryAgain")}
					</d.jn>
				</>
			)}
			{t.eState == n.Success && (
				<>
					<d.Y9>
						{t.strProductName
							? LocalizeReact(
									"#Activate_SubscriptionSuccess_Headline_WithProduct",
									<span className={y.ProductName}>{t.strProductName}</span>,
								)
							: (0, Localize)("#Activate_SubscriptionSuccess_Headline")}
					</d.Y9>
					<d.a3
						className={y.ResultBody}
						style={{
							whiteSpace: "pre-line",
						}}
					>
						{(0, Localize)("#Activate_SubscriptionSuccess")}
					</d.a3>
					<d.jn
						className={y.ResultAcceptButton}
						autoFocus
						onClick={() => {
							if (e.onSuccess) {
								e.onSuccess();
							}
							if (e.closeModal) {
								e.closeModal();
							}
						}}
					>
						{(0, Localize)("#Button_OK")}
					</d.jn>
				</>
			)}
			{t.eState == n.Busy && <h.t />}
		</p.eV>
	);
};
export function U(e) {
	return pg(<L />, e, {});
}
