import { Localize } from "../../actual_src/utils/localization.js";
import i from "./63696.js";
import a from "./10606.js";
import s from "./64608.js";
import o from "./69164.js";
import c, { qw } from "./89748.js";
import m, { pg } from "./13869.js";
import u from "./81994.js";
import d from "./11536.js";
import A from "./72655.js";
import p from "./55116.js";
import g, { bG } from "./18057.js";
import h, { Nr } from "./42318.js";
import { A as A_1 } from "./90765.js";
import { hf } from "./72476.js";
let n;
export function Qo(e) {
	let t = (
		<>
			{Localize("#SteamUI_ValveSurvey_PromptLabel")}
			<div className={d.Prompt}>
				{Localize("#SteamUI_ValveSurvey_PromptLabel2")}
			</div>
		</>
	);
	pg(
		<a.o0
			className={d.HardwareSurveyDialog}
			strTitle={Localize("#SteamUI_ValveSurvey_Title")}
			strDescription={t}
			onOK={() => {
				pg(<B owningWindow={e} />, e);
			}}
			onCancel={() => {
				qw().OptOutOfSurvey();
			}}
			strOKButtonText={Localize("#SteamUI_ValveSurvey_Prompt_Yes")}
			strCancelButtonText={Localize("#SteamUI_ValveSurvey_Prompt_No")}
		/>,
		e,
	);
}
function B_1(e) {
	const t = bG("HardwareSurvey");
	return (
		<a.o0
			closeModal={e.closeModal}
			className={d.HardwareSurveyDialog}
			strTitle={Localize("#SteamUI_ValveSurvey_Title")}
			strDescription={Localize("#SteamUI_ValveSurvey_ResultsLabel")}
			onOK={t}
			strOKButtonText={Localize("#SteamUI_ValveSurvey_ResultsButton")}
			strCancelButtonText={Localize("#SteamUI_ValveSurvey_FinishButton")}
		/>
	);
}
export function gh(e) {
	pg(<B_1 />, e);
}
function S(e) {
	let { surveyEntry } = e;
	if (typeof surveyEntry == "string") {
		return <div>{Localize(`#${surveyEntry}`)}</div>;
	}
	{
		const e = surveyEntry.vecArgs.map((e) => (e[0] == "#" ? Localize(e) : e));
		return <div>{Localize(`#${surveyEntry.strName}`, ...e)}</div>;
	}
}
export function QJ(e) {
	let { surveyData } = e;
	return (
		<o.Z className={d.HardwareSurveySection} focusable>
			<h3>{Localize(`#${surveyData.strSectionName}`)} </h3>
			{surveyData.vecEntries.map((e, t) => (
				<S key={t} surveyEntry={e} />
			))}
		</o.Z>
	);
}
function B(e) {
	let [t, setT] = i.useState([]);
	const n = i.useCallback((e) => {
		setT(e);
	}, []);
	const s = i.useCallback(() => {
		qw().SendSurvey();
		e.closeModal();
		gh(e.owningWindow);
	}, [e]);
	i.useEffect(() => {
		SteamClient.User.RunSurvey(n);
	}, [n]);
	return (
		<a.o0
			className={d.HardwareSurveyDialog}
			strTitle={Localize("#SteamUI_ValveSurvey_Title")}
			strDescription={
				t.length == 0 || Localize("#SteamUI_ValveSurvey_SummaryLabel")
			}
			onCancel={e.closeModal}
			onOK={s}
			strOKButtonText={Localize("#SteamUI_ValveSurvey_SendSurvey")}
			bOKDisabled={t.length == 0}
		>
			{t.length == 0 && <u.j />}
			{t.length != 0 && (
				<A.f7 className={d.HardwareSurveySections} scrollStepPercent={60}>
					<p.g>
						{t.map((e, t) => (
							<QJ key={t} surveyData={e} />
						))}
					</p.g>
				</A.f7>
			)}
		</a.o0>
	);
}
((e) => {
	e[(e.k_NotVisible = 0)] = "k_NotVisible";
	e[(e.k_Prompt = 1)] = "k_Prompt";
	e[(e.k_GatheringData = 2)] = "k_GatheringData";
	e[(e.k_SentResults = 3)] = "k_SentResults";
})((n ||= {}));
export const bT = Nr(() => {
	const [e, setE] = i.useState(n.k_NotVisible);
	const [r, setR] = i.useState();
	const o = hf();
	const c = i.useCallback(() => {
		setE(n.k_Prompt);
	}, []);
	i.useEffect(() => {
		let e = SteamClient.User.RegisterForShowHardwareSurvey(c);
		return () => {
			setE(n.k_NotVisible);
			e.unregister();
		};
	}, [c]);
	const m = i.useCallback(() => {
		setE(n.k_NotVisible);
	}, []);
	const u = i.useCallback(() => {
		setE(n.k_GatheringData);
	}, []);
	const A = i.useCallback(() => {
		setE(n.k_SentResults);
	}, []);
	const p = i.useCallback(() => {
		setE(n.k_NotVisible);
	}, []);
	if (e != n.k_NotVisible && o) {
		return (
			<a.hM
				strTitle={Localize("#SteamUI_ValveSurvey_Title")}
				onDismiss={m}
				popupWidth={600}
				popupHeight={500}
				refPopup={setR}
				className={d.MarketingMessagesDialog}
			>
				<I state={e} onClose={m} onContinue={u} />
				<E state={e} onClose={m} onContinue={A} />
				<M state={e} onClose={m} onContinue={p} />
			</a.hM>
		);
	} else {
		return null;
	}
});
function I(e) {
	if (e.state != n.k_Prompt) {
		return null;
	} else {
		return (
			<div className={A_1(d.HardwareSurveyDialog, d.Desktop)}>
				<s.Y9>{Localize("#SteamUI_ValveSurvey_Title")}</s.Y9>
				<s.a3>
					{Localize("#SteamUI_ValveSurvey_PromptLabel")}
					<div className={d.Prompt}>
						{Localize("#SteamUI_ValveSurvey_PromptLabel2")}
					</div>
				</s.a3>
				<s.wi>
					<s.CB
						onOK={() => {
							e.onContinue();
						}}
						strOKText={Localize("#SteamUI_ValveSurvey_Prompt_Yes")}
						onCancel={() => {
							e.onClose();
							qw().OptOutOfSurvey();
						}}
						strCancelText={Localize("#SteamUI_ValveSurvey_Prompt_No")}
					/>
				</s.wi>
			</div>
		);
	}
}
function E(e) {
	let { state, onClose, onContinue } = e;
	let [o, setO] = i.useState([]);
	const g = i.useCallback((e) => {
		setO(e);
	}, []);
	const h = i.useCallback(() => {
		qw().SendSurvey();
		onContinue();
	}, [onContinue]);
	i.useEffect(() => {
		if (state == n.k_GatheringData) {
			SteamClient.User.RunSurvey(g);
		}
	}, [state, g]);
	if (state != n.k_GatheringData) {
		return null;
	} else {
		return (
			<div className={A_1(d.HardwareSurveyDialog, d.Desktop)}>
				<s.Y9 className={d.DialogHeader}>
					{Localize("#SteamUI_ValveSurvey_Title")}
				</s.Y9>
				<s.nB className={d.DialogBodyText}>
					{o.length == 0 && <u.j />}
					{o.length != 0 && (
						<>
							<div>{Localize("#SteamUI_ValveSurvey_SummaryLabel")}</div>
							<A.f7 className={d.HardwareSurveySections} scrollStepPercent={60}>
								<p.g>
									{o.map((e, t) => (
										<QJ key={t} surveyData={e} />
									))}
								</p.g>
							</A.f7>
						</>
					)}
				</s.nB>
				<s.wi>
					<s.CB
						onOK={h}
						strOKText={Localize("#SteamUI_ValveSurvey_SendSurvey")}
						onCancel={onClose}
					/>
				</s.wi>
			</div>
		);
	}
}
function M(e) {
	let { state, onClose, onContinue } = e;
	const o = bG("HardwareSurvey");
	const c = i.useCallback(() => {
		o();
		onContinue();
	}, [onContinue, o]);
	if (state != n.k_SentResults) {
		return null;
	} else {
		return (
			<div className={A_1(d.HardwareSurveyDialog, d.Desktop)}>
				<s.Y9 className={d.DialogHeader}>
					{Localize("#SteamUI_ValveSurvey_Title")}
				</s.Y9>
				<s.a3 className={d.DialogBodyText}>
					{Localize("#SteamUI_ValveSurvey_ResultsLabel")}
				</s.a3>
				<s.wi>
					<s.CB
						onOK={c}
						strOKText={Localize("#SteamUI_ValveSurvey_ResultsButton")}
						onCancel={onClose}
						strCancelText={Localize("#SteamUI_ValveSurvey_FinishButton")}
					/>
				</s.wi>
			</div>
		);
	}
}
