import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./78325.js";
import a from "./50376.js";
import s from "./35488.js";
import { A as A_1 } from "./90765.js";
import l, { $2 } from "./96680.js";
import c, { OJ } from "./63439.js";
import m, { yq } from "./11131.js";
import { VI } from "./34792.js";
import A, { Qt } from "./18057.js";
import p, { wY } from "./52451.js";
import g from "./32313.js";
const h = g;
function C(e) {
	const { broadcastStatus, bDesktopBanner, onResize } = e;
	const [l] = VI("broadcast_show_upload_stats");
	const c = Qt("steam://settings/broadcast");
	const m = n.useCallback(
		(e) => {
			onResize(
				Math.ceil(e.borderBoxSize[0].inlineSize),
				Math.ceil(e.borderBoxSize[0].blockSize),
			);
		},
		[onResize],
	);
	const g = wY(m);
	if (broadcastStatus) {
		return (
			<div
				className={h.BroadcastStatusDetails}
				ref={g}
				onClick={bDesktopBanner ? c : undefined}
			>
				<div className={h.BroadcastStatusLine}>
					<a.EQ9
						className={A_1(
							h.Icon,
							h.Microphone,
							broadcastStatus.bMicrophoneActive && h.Active,
						)}
						off={!broadcastStatus.bMicrophoneEnabled}
					/>
					<a.jlt
						className={A_1(
							h.Icon,
							h.Live,
							broadcastStatus.bIsBroadcasting && h.Active,
						)}
					/>
					<div className={h.LiveText}>{Localize("#BroadcastStatus_Live")}</div>
					{broadcastStatus.nRequests > 0 && (
						<>
							<div className={A_1(h.Icon, h.Requests)}>
								<a.MxO />
							</div>
							{broadcastStatus.nRequests}
						</>
					)}
					<s.FamilySharing className={h.Icon} />
					<div>{broadcastStatus.nViewers}</div>
				</div>
				{l && (
					<div className={A_1(h.BroadcastStatusLine, h.Stats)}>
						<div className={h.Stat}>
							{Localize(
								"#BroadcastStatus_UploadRate",
								broadcastStatus.nUploadKbps,
							)}
						</div>
						<div className={h.Stat}>
							{Localize(
								"#BroadcastStatus_FrameRate",
								broadcastStatus.nCurrentFPS,
							)}
						</div>
					</div>
				)}
			</div>
		);
	} else {
		return null;
	}
}
export function e(e) {
	const { bDesktopBanner } = e;
	const r = $2();
	const [a] = VI("broadcast_permissions");
	const [s] = VI("broadcast_show_live_reminder");
	const [d, setD] = n.useState();
	const p = n.useCallback((e) => {
		setD(e);
	}, []);
	const g =
		(d?.bIsBroadcasting || d?.nRequests > 0 || (s && a == 3)) &&
		bDesktopBanner == d?.bIsRecordingDesktop;
	n.useEffect(() => {
		const e = SteamClient.Broadcast.RegisterForBroadcastStatus(p);
		return () => e.unregister();
	}, [p]);
	const _ = m.Wf.Composited | m.Wf.Hidden | yq(m.Dr.Notification);
	const { popupObj, popup, element } = OJ("broadcaststatus", {
		title: "broadcaststatus",
		dimensions: {
			width: 1,
			height: 1,
		},
		body_class: A_1(h.BroadcastStatusBody, bDesktopBanner && h.Desktop),
		eCreationFlags: bDesktopBanner ? _ & ~m.Wf.Composited : _,
		target_browser: r.params.browserInfo,
		bNoInitialShow: true,
	});
	const S = r.BrowserWindow.screen.availWidth;
	const w = n.useCallback(
		(e, r) => {
			if (bDesktopBanner) {
				popup.SteamClient.Window.MoveTo(Math.ceil(S / 2 - e / 2), 0);
			} else {
				popup.SteamClient.Window.MoveTo(Math.ceil(S - e), 0);
			}
		},
		[popup, S, bDesktopBanner],
	);
	const B = n.useCallback(
		(e, t) => {
			popup.SteamClient.Window.ResizeTo(e, t, true);
			w(e, t);
		},
		[popup, w],
	);
	n.useEffect(() => {
		if (g) {
			if (popup) {
				popup.SteamClient.Window.ShowWindow();
			} else {
				popupObj.Show();
			}
		} else {
			popup?.SteamClient.Window.HideWindow();
		}
	}, [popup, popupObj, g]);
	if (element) {
		return i.createPortal(
			<C broadcastStatus={d} bDesktopBanner={bDesktopBanner} onResize={B} />,
			element,
		);
	} else {
		return null;
	}
}
