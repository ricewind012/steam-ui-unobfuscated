import { Localize } from "../../actual_src/utils/localization.js";
import n, { useState, useCallback } from "./63696.js";
import i from "./13128.js";
import s from "./83247.js";
import o from "./50376.js";
import l, { LH } from "./24295.js";
import { jE } from "./3715.js";
import { I } from "./61416.js";
import u from "./64608.js";
import d from "./63032.js";
import A from "./69164.js";
import p, { Qn } from "./72476.js";
import { Qt } from "./18057.js";
import { A as A_1 } from "./90765.js";
import C from "./60291.js";
export function O() {
	const e = "timeline_intro";
	const [t] = useState(() => new d.O());
	const r = LH();
	const i = jE();
	const a = I({
		queryKey: [e, r],
		queryFn: async () => {
			const r = {
				rtSeen: 0,
				rtLinkDismissed: 0,
			};
			try {
				const n = await t.GetObject(e);
				return n || r;
			} catch (e) {
				return r;
			}
		},
	});
	const s = useCallback(
		(n) => {
			const a = i.setQueryData([e, r], n);
			if (a) {
				return t.StoreObject(e, a);
			} else {
				return t.RemoveObject(e);
			}
		},
		[t, r, i],
	);
	const o = useCallback(
		() =>
			s((e) => ({
				...e,
				rtSeen: Date.now() / 1000,
			})),
		[s],
	);
	const u = useCallback(
		() =>
			s((e) => ({
				...e,
				rtLinkDismissed: Date.now() / 1000,
			})),
		[s],
	);
	const A = useCallback(
		() => t.RemoveObject(e).then(() => a.refetch()),
		[t, a],
	);
	return {
		introStateQuery: a,
		markIntroSeen: o,
		markLinkDismissed: u,
		reset: A,
	};
}
export function m(e) {
	const { onRequestClose } = e;
	const r = Qt();
	const l = Qn();
	return (
		<A.Z
			className={i.SinglePageIntro}
			autoFocus
			preferredFocus
			retainFocus
			onCancel={onRequestClose}
		>
			<div className={i.CloseContainer} onClick={onRequestClose}>
				<B />
			</div>
			<div className={i.SinglePageHeading}>
				{Localize("#RecordingIntro_Short_FeatureName")}
			</div>
			<div className={i.Tagline}>
				{Localize("#RecordingIntro_Short_Tagline")}
			</div>
			<div className={i.Bullets}>
				<Y
					icon={s.NC}
					titleToken="#RecordingIntro_Short_Record"
					slugToken="#RecordingIntro_Short_Record_Slug"
				/>
				<Y
					icon={s.eJ}
					titleToken="#RecordingIntro_Short_Replay"
					slugToken="#RecordingIntro_Short_Replay_Slug"
				/>
				<Y
					icon={s.Wd}
					titleToken="#RecordingIntro_Short_Clip"
					slugToken="#RecordingIntro_Short_Clip_Slug"
				/>
				<Y
					icon={C.nr}
					titleToken="#RecordingIntro_Short_Share"
					slugToken="#RecordingIntro_Short_Share_Slug"
				/>
			</div>
			<A.Z flow-children="row" className={i.Actions}>
				{!l && (
					<div className={i.BottomBulletContainer}>
						<Y
							muted
							icon={o.wB_}
							titleToken="#RecordingIntro_Short_Plus"
							slugToken="#RecordingIntro_Short_Plus_Slug"
						/>
					</div>
				)}
				<div className={i.Action}>
					<u.jn autoFocus onClick={onRequestClose}>
						{Localize("#Generic_GotItCalm")}
					</u.jn>
				</div>
				<div className={i.Action}>
					<u.$n
						onClick={() =>
							r(`${p.TS.STORE_BASE_URL}fwlink?id=gamerecordingintro`)
						}
					>
						{Localize("#RecordingIntro_Action_LearnMore")}
					</u.$n>
				</div>
			</A.Z>
		</A.Z>
	);
}
function B() {
	return <o.sED className={i.CloseButton} />;
}
function Y(e) {
	const { Icon, titleToken, slugToken, muted } = e;
	return (
		<div className={A_1(i.Bullet, muted && i.Muted)}>
			<div className={i.IconCircle}>
				<Icon className={i.Icon} />
			</div>
			<div className={i.Content}>
				<div className={i.Title}>{Localize(titleToken)}</div>
				<div className={i.Slug}>{Localize(slugToken)}</div>
			</div>
		</div>
	);
}
