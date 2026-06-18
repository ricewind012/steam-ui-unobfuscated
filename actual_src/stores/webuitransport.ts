// Webpack module ID: 99235

import { makeAutoObservable, observable } from "mobx";
import { useObserver } from "mobx-react-lite";

import { bind } from "@actual_src/utils/bind.js";

import { N } from "./31930.js";
import { YX } from "./51297.js";
import { wd as CLogger } from "./83599.js";
import { EResult } from "@steamclient_types/shared.js";

const logger = new CLogger("WebUITransportStore");

class CWebUITransportStore {
	@observable m_bConnected = false;
	m_transport;
	m_nConnectCount = 0;

	constructor() {
		makeAutoObservable(this);
	}

	GetTransport() {
		return this.m_transport;
	}

	async Init() {
		this.m_transport = N;
		await this.m_transport.Init();
		this.m_transport.SetStatusEventHandler(this.OnConnectionStatus);
		this.m_transport.SetReconnectErrorHandler(this.OnReconnectError);
		if ((await this.m_transport.MakeReady()).result != EResult.OK) {
			await this.NotifyTransportFailure();
		}
	}

	@bind
	OnConnectionStatus(e) {
		logger.Info(
			"Connection status:",
			e.bConnected ? "connected" : "disconnected",
		);
		this.m_bConnected = e.bConnected;
		if (this.m_bConnected) {
			this.m_nConnectCount++;
		}
	}

	@bind
	OnReconnectError(e) {
		this.NotifyTransportFailure();
	}

	NotifyTransportFailure() {
		const msg = new YX();
		msg.set_connect_count(this.m_nConnectCount);
		return SteamClient.WebUITransport.NotifyTransportFailure(
			msg.serializeBase64String(),
		);
	}

	InstallErrorReportingStore(store) {
		this.m_transport.messageHandlers.InstallErrorReportingStore(store);
	}
}

export const WebUITransportStore = new CWebUITransportStore();

export function useIsWebUITransportConnectedObserver() {
	return {
		bConnected: useObserver(() => WebUITransportStore.m_bConnected),
	};
}
