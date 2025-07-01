import { TS as Config } from "./72476.js";
import { action, makeAutoObservable, observable } from "mobx";
import { useObserver } from "mobx-react-lite";
import { Unregisterable } from "../steamclient/steamclient/shared.js";
import { SpewOutput } from "../steamclient/steamclient/Console.js";
import { bind } from "../utils/bind.js";

export function y9() {
	return useObserver(() => {
		dn.consoleSpew.length;
		return dn.consoleSpew;
	});
}

export function o4() {
	return dn.commandHistory;
}

interface ConsoleSpew_t {
	line: number;
	time: Date;
	spew: { text: string; type: "error" | "info" | "input" }[];
}

class CConsoleStore {
	constructor() {
		makeAutoObservable(this);
	}

	m_listenHandle: Unregisterable = undefined;
	@observable m_rgConsoleSpew: ConsoleSpew_t[] = [];
	m_rgCommandHistory = [];
	m_nLineCounter = 0;

	Init() {
		if (Config.DEV_MODE) {
			this.StartListening();
		}
	}

	StartListening() {
		this.m_listenHandle ||= SteamClient.Console.RegisterForSpewOutput(
			this.OnSteamConsoleSpew,
		);
	}

	StopListening() {
		if (this.m_listenHandle) {
			this.m_listenHandle.unregister();
			this.m_listenHandle = undefined;
		}
	}

	Reset() {
		this.m_rgConsoleSpew = [];
	}

	@bind OnSteamConsoleSpew(spew: SpewOutput) {
		this.AddSpewLine(spew.spew, spew.spew_type);
	}

	@action AddSpewLine(input: string, type: "error" | "info" | "input") {
		const time = new Date();
		if (type == "input") {
			input += "\n";
		}
		let rgSplit = input.split("\n");
		if (this.m_rgConsoleSpew.length > 0 && type !== "input") {
			this.m_rgConsoleSpew[this.m_rgConsoleSpew.length - 1].spew.push({
				text: rgSplit[0],
				type,
			});
			rgSplit = rgSplit.slice(1);
		}
		let rgSpews = rgSplit.map((text) => ({
			line: this.m_nLineCounter++,
			time,
			spew: text
				? [
						{
							text,
							type,
						},
					]
				: [],
		}));
		this.m_rgConsoleSpew.push(...rgSpews);
		this.m_rgConsoleSpew = this.m_rgConsoleSpew.filter(
			(spew, index) =>
				this.m_rgConsoleSpew.length - index <= 1000 ||
				time.getTime() - spew.time.getTime() < 10000,
		);
	}

	get consoleSpew() {
		return this.m_rgConsoleSpew;
	}

	get commandHistory() {
		return this.m_rgCommandHistory;
	}
}

export const dn = new CConsoleStore();
window.consoleStore = dn;
