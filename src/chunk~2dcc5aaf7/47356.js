var n;
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./10606.js");
var s = require("./64608.js");
var o = require(/*webcrack:missing*/ "./69164.js");
import { Localize } from "../../actual_src/utils/localization.js";
var c = require("./89748.js");
var m = require("./13869.js");
var u = require("./81994.js");
var d = require("./11536.js");
var A = require("./72655.js");
var p = require("./55116.js");
var g = require("./18057.js");
var h = require(/*webcrack:missing*/ "./42318.js");
var C = require(/*webcrack:missing*/ "./90765.js");
var _ = require(/*webcrack:missing*/ "./72476.js");
export function Qo(e) {
	let t = i.createElement(
		i.Fragment,
		null,
		Localize("#SteamUI_ValveSurvey_PromptLabel"),
		i.createElement(
			"div",
			{
				className: d.Prompt,
			},
			Localize("#SteamUI_ValveSurvey_PromptLabel2"),
		),
	);
	(0, m.pg)(
		i.createElement(a.o0, {
			className: d.HardwareSurveyDialog,
			strTitle: Localize("#SteamUI_ValveSurvey_Title"),
			strDescription: t,
			onOK: () => {
				(0, m.pg)(
					i.createElement(B, {
						owningWindow: e,
					}),
					e,
				);
			},
			onCancel: () => {
				(0, c.qw)().OptOutOfSurvey();
			},
			strOKButtonText: Localize("#SteamUI_ValveSurvey_Prompt_Yes"),
			strCancelButtonText: Localize("#SteamUI_ValveSurvey_Prompt_No"),
		}),
		e,
	);
}
function b(e) {
	const t = (0, g.bG)("HardwareSurvey");
	return i.createElement(a.o0, {
		closeModal: e.closeModal,
		className: d.HardwareSurveyDialog,
		strTitle: Localize("#SteamUI_ValveSurvey_Title"),
		strDescription: Localize("#SteamUI_ValveSurvey_ResultsLabel"),
		onOK: t,
		strOKButtonText: Localize("#SteamUI_ValveSurvey_ResultsButton"),
		strCancelButtonText: Localize("#SteamUI_ValveSurvey_FinishButton"),
	});
}
export function gh(e) {
	(0, m.pg)(i.createElement(b, null), e);
}
function S(e) {
	let { surveyEntry: t } = e;
	if (typeof t == "string") {
		return i.createElement("div", null, Localize("#" + t));
	}
	{
		const e = t.vecArgs.map((e) => (e[0] == "#" ? Localize(e) : e));
		return i.createElement("div", null, Localize("#" + t.strName, ...e));
	}
}
export function qJ(e) {
	let { surveyData: t } = e;
	return i.createElement(
		o.Z,
		{
			className: d.HardwareSurveySection,
			focusable: true,
		},
		i.createElement("h3", null, Localize("#" + t.strSectionName), " "),
		t.vecEntries.map((e, t) =>
			i.createElement(S, {
				key: t,
				surveyEntry: e,
			}),
		),
	);
}
function B(e) {
	let [t, r] = i.useState([]);
	const n = i.useCallback((e) => {
		r(e);
	}, []);
	const s = i.useCallback(() => {
		(0, c.qw)().SendSurvey();
		e.closeModal();
		gh(e.owningWindow);
	}, [e]);
	i.useEffect(() => {
		SteamClient.User.RunSurvey(n);
	}, [n]);
	return i.createElement(
		a.o0,
		{
			className: d.HardwareSurveyDialog,
			strTitle: Localize("#SteamUI_ValveSurvey_Title"),
			strDescription:
				t.length == 0
					? undefined
					: Localize("#SteamUI_ValveSurvey_SummaryLabel"),
			onCancel: e.closeModal,
			onOK: s,
			strOKButtonText: Localize("#SteamUI_ValveSurvey_SendSurvey"),
			bOKDisabled: t.length == 0,
		},
		t.length == 0 && i.createElement(u.j, null),
		t.length != 0 &&
			i.createElement(
				A.f7,
				{
					className: d.HardwareSurveySections,
					scrollStepPercent: 60,
				},
				i.createElement(
					p.g,
					null,
					t.map((e, t) =>
						i.createElement(qJ, {
							key: t,
							surveyData: e,
						}),
					),
				),
			),
	);
}
(function (e) {
	e[(e.k_NotVisible = 0)] = "k_NotVisible";
	e[(e.k_Prompt = 1)] = "k_Prompt";
	e[(e.k_GatheringData = 2)] = "k_GatheringData";
	e[(e.k_SentResults = 3)] = "k_SentResults";
})((n ||= {}));
export const bT = (0, h.Nr)(function () {
	const [e, t] = i.useState(n.k_NotVisible);
	const [r, s] = i.useState();
	const o = (0, _.hf)();
	const c = i.useCallback(() => {
		t(n.k_Prompt);
	}, []);
	i.useEffect(() => {
		let e = SteamClient.User.RegisterForShowHardwareSurvey(c);
		return () => {
			t(n.k_NotVisible);
			e.unregister();
		};
	}, [c]);
	const m = i.useCallback(() => {
		t(n.k_NotVisible);
	}, []);
	const u = i.useCallback(() => {
		t(n.k_GatheringData);
	}, []);
	const A = i.useCallback(() => {
		t(n.k_SentResults);
	}, []);
	const p = i.useCallback(() => {
		t(n.k_NotVisible);
	}, []);
	if (e != n.k_NotVisible && o) {
		return i.createElement(
			a.hM,
			{
				strTitle: Localize("#SteamUI_ValveSurvey_Title"),
				onDismiss: m,
				popupWidth: 600,
				popupHeight: 500,
				refPopup: s,
				className: d.MarketingMessagesDialog,
			},
			i.createElement(I, {
				state: e,
				onClose: m,
				onContinue: u,
			}),
			i.createElement(E, {
				state: e,
				onClose: m,
				onContinue: A,
			}),
			i.createElement(M, {
				state: e,
				onClose: m,
				onContinue: p,
			}),
		);
	} else {
		return null;
	}
});
function I(e) {
	if (e.state != n.k_Prompt) {
		return null;
	} else {
		return i.createElement(
			"div",
			{
				className: (0, C.A)(d.HardwareSurveyDialog, d.Desktop),
			},
			i.createElement(s.Y9, null, Localize("#SteamUI_ValveSurvey_Title")),
			i.createElement(
				s.a3,
				null,
				Localize("#SteamUI_ValveSurvey_PromptLabel"),
				i.createElement(
					"div",
					{
						className: d.Prompt,
					},
					Localize("#SteamUI_ValveSurvey_PromptLabel2"),
				),
			),
			i.createElement(
				s.wi,
				null,
				i.createElement(s.CB, {
					onOK: () => {
						e.onContinue();
					},
					strOKText: Localize("#SteamUI_ValveSurvey_Prompt_Yes"),
					onCancel: () => {
						e.onClose();
						(0, c.qw)().OptOutOfSurvey();
					},
					strCancelText: Localize("#SteamUI_ValveSurvey_Prompt_No"),
				}),
			),
		);
	}
}
function E(e) {
	let { state: t, onClose: r, onContinue: a } = e;
	let [o, m] = i.useState([]);
	const g = i.useCallback((e) => {
		m(e);
	}, []);
	const h = i.useCallback(() => {
		(0, c.qw)().SendSurvey();
		a();
	}, [a]);
	i.useEffect(() => {
		if (t == n.k_GatheringData) {
			SteamClient.User.RunSurvey(g);
		}
	}, [t, g]);
	if (t != n.k_GatheringData) {
		return null;
	} else {
		return i.createElement(
			"div",
			{
				className: (0, C.A)(d.HardwareSurveyDialog, d.Desktop),
			},
			i.createElement(
				s.Y9,
				{
					className: d.DialogHeader,
				},
				Localize("#SteamUI_ValveSurvey_Title"),
			),
			i.createElement(
				s.nB,
				{
					className: d.DialogBodyText,
				},
				o.length == 0 && i.createElement(u.j, null),
				o.length != 0 &&
					i.createElement(
						i.Fragment,
						null,
						i.createElement(
							"div",
							null,
							Localize("#SteamUI_ValveSurvey_SummaryLabel"),
						),
						i.createElement(
							A.f7,
							{
								className: d.HardwareSurveySections,
								scrollStepPercent: 60,
							},
							i.createElement(
								p.g,
								null,
								o.map((e, t) =>
									i.createElement(qJ, {
										key: t,
										surveyData: e,
									}),
								),
							),
						),
					),
			),
			i.createElement(
				s.wi,
				null,
				i.createElement(s.CB, {
					onOK: h,
					strOKText: Localize("#SteamUI_ValveSurvey_SendSurvey"),
					onCancel: r,
				}),
			),
		);
	}
}
function M(e) {
	let { state: t, onClose: r, onContinue: a } = e;
	const o = (0, g.bG)("HardwareSurvey");
	const c = i.useCallback(() => {
		o();
		a();
	}, [a, o]);
	if (t != n.k_SentResults) {
		return null;
	} else {
		return i.createElement(
			"div",
			{
				className: (0, C.A)(d.HardwareSurveyDialog, d.Desktop),
			},
			i.createElement(
				s.Y9,
				{
					className: d.DialogHeader,
				},
				Localize("#SteamUI_ValveSurvey_Title"),
			),
			i.createElement(
				s.a3,
				{
					className: d.DialogBodyText,
				},
				Localize("#SteamUI_ValveSurvey_ResultsLabel"),
			),
			i.createElement(
				s.wi,
				null,
				i.createElement(s.CB, {
					onOK: c,
					strOKText: Localize("#SteamUI_ValveSurvey_ResultsButton"),
					onCancel: r,
					strCancelText: Localize("#SteamUI_ValveSurvey_FinishButton"),
				}),
			),
		);
	}
}
