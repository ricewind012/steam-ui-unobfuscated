var n;
var i = require(/*webcrack:missing*/ "./83957.js");
var a = i;
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require(/*webcrack:missing*/ "./12176.js");
var l = require(/*webcrack:missing*/ "./69164.js");
var c = require(/*webcrack:missing*/ "./61657.js");
var m = require("./13337.js");
var u = require("./46948.js");
var d = require("./64608.js");
var A = require("./35488.js");
var p = require("./10606.js");
var g = require("./13869.js");
var h = require(/*webcrack:missing*/ "./26853.js");
var C = require(/*webcrack:missing*/ "./90765.js");
var _ = require(/*webcrack:missing*/ "./46108.js");
var f = require(/*webcrack:missing*/ "./72476.js");
var b = require("./28694.js");
var y = b;
(function (e) {
	e[(e.SSA = 0)] = "SSA";
	e[(e.EnterCode = 1)] = "EnterCode";
	e[(e.Info = 2)] = "Info";
	e[(e.Success = 3)] = "Success";
	e[(e.Failure = 4)] = "Failure";
	e[(e.Busy = 5)] = "Busy";
})((n ||= {}));
export const L = (e) => {
	const [t, r] = s.useState({
		eState: n.EnterCode,
		nErrorCode: 0,
		strProductName: "",
	});
	const [i, g] = s.useState("");
	const b = s.useRef(undefined);
	const S = () => {
		if (e.onCancel) {
			e.onCancel();
		}
		if (e.closeModal) {
			e.closeModal();
		}
	};
	const w = (0, m.mb)(m.Yq);
	s.useEffect(() => {
		if (w && w.time_ssa_updated != 0) {
			if (w.time_ssa_accepted < w.time_ssa_updated) {
				r({
					eState: n.SSA,
					nErrorCode: 0,
					strProductName: "",
				});
			} else {
				r({
					eState: n.EnterCode,
					nErrorCode: 0,
					strProductName: "",
				});
			}
		} else {
			r({
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
			r({
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
				r({
					eState: n.Success,
					nErrorCode: 0,
					strProductName: i,
				});
			} else {
				r({
					eState: n.Failure,
					nErrorCode: t.Body().purchase_result_details(),
					strProductName: i,
				});
			}
		} catch (e) {
			r({
				eState: n.Failure,
				nErrorCode: 4,
				strProductName: "",
			});
		}
	};
	const [I, E] = s.useState("");
	s.useEffect(() => {
		(async () => {
			const e = await a.get(
				`${f.TS.STORE_BASE_URL}subscriber_agreement/${f.TS.LANGUAGE}?deck_ssa=1`,
			);
			E(e.data);
		})();
	}, []);
	const M = (0, f.hf)();
	let T = "";
	let R = "";
	if (t.eState == n.Failure) {
		switch (t.nErrorCode) {
			case 14:
				T = "#Activate_InvalidCode_Headline";
				R = "#Activate_InvalidCode";
				break;
			case 15:
				T = "#Activate_Subscription_Rejected_Headline";
				R = "#Activate_Subscription_Rejected";
				break;
			case 53:
				T = "#Activate_RateLimited_Headline";
				R = "#Activate_RateLimited";
				break;
			case 4:
				T = "#Activate_ServiceUnavailable_Headline";
				R = "#Activate_ServiceUnavailable";
				break;
			case 13:
				T = "#Activate_RestrictedCountry_Headline";
				R = "#Activate_RestrictedCountry";
				break;
			case 9:
				T = "#Activate_AlreadyPurchased_Headline";
				R = "#Activate_AlreadyPurchased";
				break;
			case 24:
				T = "#Activate_MustOwnOtherApp_Headline";
				R = "#Activate_MustOwnOtherApp";
				break;
			case 36:
				T = "#Activate_MustLoginPS3_Headline";
				R = "#Activate_MustLoginPS3";
		}
	}
	return s.createElement(
		p.eV,
		{
			className: y.ActivateProductDialog,
			onOK: v,
			onCancel: S,
		},
		t.eState == n.SSA &&
			s.createElement(
				l.Z,
				{
					className: y.SSAPopupContainer,
					onGamepadDirection: (e) => {
						if (b.current) {
							switch (e.detail.button) {
								case c.pR.DIR_UP:
									b.current.scrollBy({
										top: -100,
										behavior: "smooth",
									});
									return true;
								case c.pR.DIR_DOWN:
									b.current.scrollBy({
										top: 100,
										behavior: "smooth",
									});
									return true;
							}
						}
						return false;
					},
				},
				s.createElement(
					d.Y9,
					null,
					(0, _.we)("#Settings_Library_ProdKey_Activate"),
				),
				s.createElement(
					d.a3,
					{
						className: y.AgreementPrompt,
					},
					(0, _.we)("#Settings_Library_SSA_Agree"),
				),
				s.createElement(
					l.Z,
					{
						ref: b,
						className: y.SSAContainer,
					},
					s.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: I,
						},
					}),
				),
				s.createElement(
					d.wi,
					null,
					s.createElement(d.CB, {
						bOKDisabled: false,
						onOK: () => m.Yq.AcceptSSA(0),
						onCancel: S,
						strOKText: (0, _.we)("#Settings_Library_SSA_Agree_Confirm"),
						focusButton: "primary",
					}),
				),
			),
		!M &&
			t.eState == n.Info &&
			s.createElement(
				"div",
				{
					className: y.ProductActivationInfoContainer,
				},
				s.createElement(
					"div",
					{
						className: y.ModalHeader,
					},
					s.createElement(
						d.Y9,
						null,
						s.createElement(A.Information, {
							className: y.InfoIcon,
						}),
						(0, _.we)("#Settings_Library_ProdKey_Info_Title"),
					),
					s.createElement(
						l.Z,
						{
							focusable: true,
							className: y.CloseButtonContainer,
							onActivate: () =>
								r({
									eState: n.EnterCode,
									nErrorCode: 0,
									strProductName: "",
								}),
						},
						s.createElement(A.Close, {
							className: y.CloseButton,
						}),
					),
				),
				s.createElement(
					d.a3,
					{
						className: y.InfoBody,
					},
					(0, _.we)("#Settings_Library_ProdKey_Info_Details"),
				),
				s.createElement(
					"div",
					{
						className: y.InfoExampleHeader,
					},
					(0, _.we)("#Settings_Library_ProdKey_Info_Examples"),
				),
				s.createElement(
					"div",
					{
						className: y.InfoExample,
					},
					(0, _.we)("#Settings_Library_ProdKey_Info_Example_1"),
				),
				s.createElement(
					"div",
					{
						className: y.InfoExample,
					},
					(0, _.we)("#Settings_Library_ProdKey_Info_Example_2"),
				),
				s.createElement(
					"div",
					{
						className: y.InfoExample,
					},
					(0, _.we)("#Settings_Library_ProdKey_Info_Example_3"),
				),
				s.createElement(
					d.jn,
					{
						className: y.InfoAcceptButton,
						autoFocus: true,
						onClick: () =>
							r({
								eState: n.EnterCode,
								nErrorCode: 0,
								strProductName: "",
							}),
					},
					(0, _.we)("#Generic_GotItCalm"),
				),
			),
		t.eState == n.EnterCode &&
			s.createElement(
				l.Z,
				{
					className: y.ActivateProductContainer,
				},
				s.createElement(
					"div",
					{
						className: (0, C.A)(y.HeaderContainer, "DialogHeader"),
					},
					s.createElement(
						d.Y9,
						{
							className: y.CodeInputHeader,
						},
						(0, _.we)("#Settings_Library_ProdKey_EnterProductCode"),
						!M &&
							s.createElement(
								l.Z,
								{
									focusable: true,
									className: y.InfoIconContainer,
									onActivate: () =>
										r({
											eState: n.Info,
											nErrorCode: 0,
											strProductName: "",
										}),
								},
								s.createElement(A.Information, {
									className: y.InfoIcon,
								}),
							),
					),
				),
				M &&
					s.createElement(
						"div",
						{
							className: y.ProductActivationInfoContainerDesktop,
						},
						s.createElement(
							d.a3,
							{
								className: y.InfoBody,
							},
							(0, _.we)("#Settings_Library_ProdKey_Info_Details"),
						),
						s.createElement(
							"div",
							{
								className: y.InfoExampleHeader,
							},
							(0, _.we)("#Settings_Library_ProdKey_Info_Examples"),
						),
						s.createElement(
							"div",
							{
								className: y.InfoExample,
							},
							(0, _.we)("#Settings_Library_ProdKey_Info_Example_1"),
						),
						s.createElement(
							"div",
							{
								className: y.InfoExample,
							},
							(0, _.we)("#Settings_Library_ProdKey_Info_Example_2"),
						),
						s.createElement(
							"div",
							{
								className: y.InfoExample,
							},
							(0, _.we)("#Settings_Library_ProdKey_Info_Example_3"),
						),
					),
				s.createElement(d.pd, {
					className: y.CodeInput,
					autoFocus: true,
					refKeyboardHandle: B,
					onChange: (e) => g(e.target.value),
				}),
				s.createElement(
					d.wi,
					null,
					s.createElement(d.CB, {
						bOKDisabled: i.length == 0,
						onOK: v,
						onCancel: S,
					}),
				),
			),
		t.eState == n.Failure &&
			s.createElement(
				s.Fragment,
				null,
				s.createElement(d.Y9, null, (0, _.we)(T, t.strProductName)),
				s.createElement(
					d.a3,
					{
						className: y.ResultBody,
						style: {
							whiteSpace: "pre-line",
						},
					},
					(0, _.we)(R, t.strProductName),
				),
				s.createElement(
					d.jn,
					{
						className: y.ResultAcceptButton,
						autoFocus: true,
						onClick: () =>
							r({
								eState: n.EnterCode,
								nErrorCode: 0,
								strProductName: "",
							}),
					},
					(0, _.we)("#Button_TryAgain"),
				),
			),
		t.eState == n.Success &&
			s.createElement(
				s.Fragment,
				null,
				s.createElement(
					d.Y9,
					null,
					t.strProductName
						? (0, _.PP)(
								"#Activate_SubscriptionSuccess_Headline_WithProduct",
								s.createElement(
									"span",
									{
										className: y.ProductName,
									},
									t.strProductName,
								),
							)
						: (0, _.we)("#Activate_SubscriptionSuccess_Headline"),
				),
				s.createElement(
					d.a3,
					{
						className: y.ResultBody,
						style: {
							whiteSpace: "pre-line",
						},
					},
					(0, _.we)("#Activate_SubscriptionSuccess"),
				),
				s.createElement(
					d.jn,
					{
						className: y.ResultAcceptButton,
						autoFocus: true,
						onClick: () => {
							if (e.onSuccess) {
								e.onSuccess();
							}
							if (e.closeModal) {
								e.closeModal();
							}
						},
					},
					(0, _.we)("#Button_OK"),
				),
			),
		t.eState == n.Busy && s.createElement(h.t, null),
	);
};
export function U(e) {
	return (0, g.pg)(s.createElement(L, null), e, {});
}
