// Webpack module ID: TODO

import { useCallback } from "react";
import { _ } from "../../src/chunk~2dcc5aaf7/67338.js";
import { Dt } from "../../src/chunk~2dcc5aaf7/63367.js";
import { tm as CMsgGenerateSystemReportReply } from "../../src/chunk~2dcc5aaf7/51297.js";
import { CI as BIsLinux } from "../../src/library/72476.js";
import { TS as Config } from "../../src/library/43691.js";
import { action, makeAutoObservable, observable } from "mobx";
import { EResult } from "../steamclient/steamclient/shared.js";
import { useObserver } from "mobx-react-lite";

export function Pb() {
	return Config.ON_STEAMOS || BIsLinux();
}

class CSystemReportStore {
	constructor() {
		makeAutoObservable(this);
	}

	@observable m_bIsVisible = false;
	@observable m_state = {
		bRunning: false,
		bSubmitting: false,
		eResult: EResult.Fail,
	};

	get bVisible() {
		return this.m_bIsVisible;
	}

	get state() {
		return this.m_state;
	}

	async Init() {
		const nav = "open/systemreport";
		if (Pb()) {
			Dt.RegisterForRunSteamURL(7, nav, () => this.OnShowSystemReport());
			Dt.RegisterForRunSteamURL(4, nav, () => this.OnShowSystemReport());
		}
		this.Reset();
	}

	OnShowSystemReport() {
		this.Show();
	}

	async Show() {
		if (this.m_state.bRunning) {
			this.m_bIsVisible = true;
		} else {
			this.Reset();
			this.m_bIsVisible = true;
			const reply = await SteamClient.System.Report.GenerateSystemReport();
			this.m_state.eResult = reply.result;
			if (this.m_state.eResult == 1) {
				const obj = CMsgGenerateSystemReportReply.deserializeBinary(
					reply.reply,
				).toObject();
				const resp = await fetch(`/systemreports/${obj.report_id}`);
				if (resp.ok) {
					const e = await resp.text();
					this.m_state.sReportId = obj.report_id;
					this.m_state.sText = e;
				} else {
					this.m_state.eResult = 2;
				}
			}
			this.m_state.bRunning = false;
		}
	}

	@action Reset() {
		this.m_state.bRunning = false;
		this.m_state.bSubmitting = false;
		this.m_state.eResult = 1;
		this.m_state.sText = null;
	}

	Hide() {
		this.m_bIsVisible = false;
	}

	async Submit(strReportID: string) {
		this.m_state.bSubmitting = true;
		const reply = await SteamClient.System.Report.Submit(strReportID);
		this.m_state.bSubmitting = false;
		return reply.result;
	}

	async SaveToDesktop(strReportID: string) {
		return (await SteamClient.System.Report.SaveToDesktop(strReportID)).result;
	}
}
export const Ty = new CSystemReportStore();

export function $8() {
	return [
		useObserver(() => Ty.bVisible),
		useCallback(() => {
			Ty.Hide();
		}, []),
	];
}

export function cp() {
	const state = useObserver(() => Ty.state);
	_(state);
	return state;
}

window.SystemReportStore = Ty;
