import * as i from /*webcrack:missing*/ "./63696.js";
import * as n from /*webcrack:missing*/ "./44926.js";
import * as a from /*webcrack:missing*/ "./91720.js";
import * as s from /*webcrack:missing*/ "./93092.js";
import * as l from /*webcrack:missing*/ "./64608.js";
import * as o from /*webcrack:missing*/ "./46108.js";
import * as m from "./11995.js";
export default function c(e) {
	const { clipToUpload: r, finishUpload: t } = e;
	const [n, o] = i.useState(false);
	const [c, u] = i.useState();
	const { fnUploadClip: g } = (0, a.Sm)();
	const [B, _] = i.useState();
	if (!r) {
		return null;
	}
	return i.createElement(
		"div",
		{
			className: m.ClipUploadStatus,
		},
		i.createElement(s.d, {
			clipID: r.clip_id,
		}),
		!n &&
			i.createElement(
				l.$n,
				{
					onClick: async () => {
						o(true);
						const { eResult: e, strURL: i } = await g(r.clip_id, "", "", 3);
						t(i);
						o(false);
					},
				},
				"Upload",
			),
		n &&
			i.createElement(d, {
				clipToUpload: r,
			}),
	);
}
function d(e) {
	const { clipToUpload: r } = e;
	const [t, a] = i.useState();
	const [s, l] = i.useState();
	i.useEffect(
		() =>
			n.xM.RegisterForNotifyUploadProgress((e) => {
				if (e.Body().eresult() === undefined) {
					a(e.Body().progress() * 100);
				} else {
					a(undefined);
				}
				return 1;
			}).unregister,
		[],
	);
	let m = (0, o.we)("#Chat_Uploading", r.clip_id);
	let c = {
		width: t + "%",
	};
	return i.createElement(
		"div",
		{
			className: "chatFileUploadProgressContainer",
		},
		i.createElement(
			"div",
			{
				className: "chatFileUploadProgressName",
			},
			m,
		),
		i.createElement(
			"div",
			{
				className:
					"chatFileUploadProgressBarContainer DialogProgressBar_ProgressBarContainer",
			},
			i.createElement("div", {
				className: "DialogProgressBar_Value",
				style: c,
			}),
		),
	);
}
