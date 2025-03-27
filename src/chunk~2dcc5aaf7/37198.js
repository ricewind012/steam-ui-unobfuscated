import n, { useState, useEffect } from "./63696.js";
import i from "./5482.js";
import a, { A as A_1 } from "./90765.js";
import s from "./72476.js";
import o, { Cg } from "./34629.js";
import l, { Gn } from "./89193.js";
import c from "./12176.js";
import m from "./36523.js";
import { q3 } from "./90095.js";
import d from "./90869.js";
import p from "./65136.js";
import h from "./89791.js";
import C from "./64608.js";
class A extends d.gf {
	m_eStatus = 0;
	constructor(e) {
		super(
			e.transport,
			(t) => {
				this.m_eStatus = t.bSuccess ? 3 : 4;
				e.onComplete(t);
			},
			e.onDeviceDetails,
		);
		Gn(this);
	}
	async Start() {
		if (this.m_eStatus !== 0) {
			console.error(
				"Cannot start an already started auth session. Create a new session instance.",
			);
			return 2;
		}
		this.m_eStatus = 1;
		try {
			await this.m_transport.MakeReady();
			const e = c.w.Init(m.R9);
			e.SetEMsg(9804);
			try {
				e.Body().set_device_details(await this.GetDeviceDetails());
			} catch (e) {
				console.error("Failed to GetDeviceDetails");
				console.log(e);
			}
			e.Body().set_website_id(s.TS.WEBSITE_ID);
			const t = await m.kX.BeginAuthSessionViaQR(this.m_transport, e);
			const r = t.GetEResult();
			const n = t.Hdr().transport_error();
			if (r !== 1) {
				console.error(
					`Failed to start auth session. Result: ${r} Transport: ${n}`,
				);
				this.m_eFailureState = d.eF.Generic;
				this.m_onCompleteCallback({
					bSuccess: false,
				});
				return r;
			}
			const { client_id, challenge_url, interval, request_id } = t
				.Body()
				.toObject();
			this.m_strClientID = client_id;
			this.m_strChallengeURL = challenge_url;
			this.m_msPollInterval = interval * 1000;
			this.m_rgRequestID = request_id;
			this.m_eStatus = 2;
			this.StartPolling(false);
			return r;
		} catch (e) {
			console.error(`Failed to start auth session: ${JSON.stringify(e)}`);
			this.m_eFailureState = d.eF.Generic;
			this.m_onCompleteCallback({
				bSuccess: false,
			});
			return 2;
		}
	}
	Stop() {
		this.StopPolling();
		this.m_eStatus = 5;
	}
	GetChallengeURL() {
		return this.m_strChallengeURL;
	}
	GetStatus() {
		return this.m_eStatus;
	}
}
Cg([l.sH], A.prototype, "m_eStatus", undefined);
const g = p;
export function V(e) {
	const { transport, onComplete, onStatusChange, platform, deckStyling } = e;
	const m = s.TS.IN_STEAMUI ? h.sW : h.P5;
	const {
		eStatus,
		strChallengeURL,
		bHadRemoteInteraction,
		reset,
		setTokenToRevoke,
	} = ((e) => {
		const [t, setT] = useState(new A(e));
		useEffect(() => {
			t.Start();
			return () => {
				t.Stop();
			};
		}, [t]);
		return q3(() => ({
			strChallengeURL: t.GetChallengeURL(),
			eFailureState: t.GetFailureState(),
			eStatus: t.GetStatus(),
			bHadRemoteInteraction: t.BHadRemoteInteraction(),
			reset: () => setT(new A(e)),
			setTokenToRevoke: t.SetTokenToRevoke,
		}));
	})({
		transport: transport,
		onComplete: onComplete,
		onDeviceDetails: m,
	});
	useEffect(
		() => onStatusChange && onStatusChange(eStatus),
		[onStatusChange, eStatus],
	);
	const B = eStatus === 2 ? strChallengeURL : s.TS.STORE_BASE_URL;
	const v =
		eStatus === 0 || eStatus === 1 || eStatus === 1 || bHadRemoteInteraction;
	const I = eStatus === 4;
	const E = eStatus === 3;
	const M = E ? <W /> : I ? <Y reset={reset} /> : v ? <B size="small" /> : null;
	const T = v || I || I || E;
	useEffect(() => {
		if (e.refreshInfo?.login_token_id) {
			setTokenToRevoke(e.refreshInfo.login_token_id);
		}
	}, [e.refreshInfo, setTokenToRevoke]);
	const R = s.TS.EUNIVERSE !== 1;
	return (
		<div className={g.Column}>
			<div
				style={{
					position: "relative",
				}}
			>
				<i.rg
					borderWidth={0}
					activeBitColor="#212328"
					inactiveBitColor={R ? "magenta" : "white"}
					quality={f(B)}
					className={A_1(
						g.LoginQR,
						deckStyling && g.QRLoginDeck,
						T && g.Blur,
						R && g.NonPublic,
					)}
				>
					{B}
				</i.rg>
				{T && (
					<div className={g.Overlay}>
						<div className={g.Box}>{M}</div>
					</div>
				)}
			</div>
		</div>
	);
}
function f(e) {
	if (e.length <= 90) {
		return i.Cc.Q;
	} else {
		return undefined;
	}
}
function B(e) {
	const { size } = e;
	return (
		<div
			className={A_1(
				g.Loading,
				size == "small" && g.Small,
				(size == "medium" || !size) && g.Medium,
				size == "large" && g.Large,
			)}
		/>
	);
}
function Y(e) {
	return (
		<C.$n onClick={e.reset} className={g.QRFailure}>
			<S />
		</C.$n>
	);
}
function S(e) {
	return (
		<svg
			version="1.1"
			id="Layer_2"
			xmlns="http://www.w3.org/2000/svg"
			style={{
				width: "40px",
				height: "40px",
				cursor: "pointer",
			}}
			x="0px"
			Y="0px"
			width="256px"
			height="256px"
			viewBox="0 0 256 256"
		>
			<path
				fill="none"
				stroke="#fff"
				strokeWidth="30"
				strokeLinecap="round"
				strokeMiterlimit="10"
				d="M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895"
			/>
			<polygon
				points="147.639,108.361 245.755,10.166 245.834,108.361"
				fill="#fff"
			/>
		</svg>
	);
}
function W() {
	return (
		<svg
			version="1.1"
			id="base"
			xmlns="http://www.w3.org/2000/svg"
			style={{
				width: "45px",
				height: "45px",
			}}
			x="0px"
			Y="0px"
			width="256px"
			height="256px"
			viewBox="0 0 256 256"
		>
			<polyline
				fill="none"
				stroke="#fff"
				strokeWidth="24"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				points="49.5,147.75 95,210.75 206.5,45.25 "
			/>
		</svg>
	);
}
