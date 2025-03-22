var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./5859.js");
var a = require("./64608.js");
var s = require("./10606.js");
var _o = require("./13869.js");
var l = require(/*webcrack:missing*/ "./50376.js");
var c = require(/*webcrack:missing*/ "./90765.js");
var m = require(/*webcrack:missing*/ "./46108.js");
var u = require(/*webcrack:missing*/ "./72476.js");
var d = require("./16157.js");
var A = d;
export async function o(e) {
	if (u.TS.IN_CLIENT) {
		console.log(`Running game ${e} locally.`);
		window.location.href = "steam://run/" + e;
	} else {
		console.log(`Cannot identify local client. Prompting user to launch ${e}.`);
		(async function (e) {
			await i.A.Get().QueueAppRequest(e, {});
			const t = i.A.Get().GetApp(e);
			const r = t?.GetName() || "";
			console.log("prompting for", r);
			const a = u.TS.STORE_BASE_URL + "about/";
			(0, _o.mK)(
				n.createElement(g, {
					appid: e,
					strGameName: r,
					strDownloadSteamUrl: a,
				}),
				window,
			);
		})(e);
	}
}
const g = (e) => {
	const t = () => e.closeModal && e.closeModal();
	return n.createElement(
		s.x_,
		{
			onEscKeypress: t,
			className: A.GotSteamDialog,
		},
		n.createElement(
			a.UC,
			null,
			n.createElement(a.Y9, null, " ", (0, m.we)("#GotSteam_Title"), " "),
			n.createElement(
				a.nB,
				null,
				n.createElement(
					a.a3,
					null,
					(0, m.PP)(
						"#GotSteam_PromptWithDownloadLink",
						n.createElement(
							"a",
							{
								href: e.strDownloadSteamUrl,
								className: A.DownloadSteamUrl,
							},
							(0, m.we)("#GotSteam_DownloadLinkText"),
						),
						n.createElement(
							"span",
							{
								className: A.GameName,
							},
							e.strGameName,
						),
					),
				),
				n.createElement(
					"div",
					{
						className: A.Buttons,
					},
					n.createElement(
						"a",
						{
							href: "steam://run/" + e.appid,
							onClick: t,
							className: (0, c.A)(A.Button, A.LeftButton),
						},
						n.createElement(
							"div",
							{
								className: A.AnswerText,
							},
							" ",
							(0, m.we)("#GotSteam_Yes"),
							" ",
						),
						n.createElement(
							"div",
							{
								className: A.ActionText,
							},
							" ",
							(0, m.we)("#GotSteam_Yes_Play"),
							" ",
						),
					),
					n.createElement(
						"a",
						{
							href: e.strDownloadSteamUrl,
							onClick: t,
							className: A.Button,
						},
						n.createElement(
							"div",
							{
								className: A.AnswerText,
							},
							" ",
							(0, m.we)("#GotSteam_No"),
							" ",
						),
						n.createElement(
							"div",
							{
								className: A.ActionText,
							},
							" ",
							(0, m.we)("#GotSteam_No_Download"),
							" ",
						),
					),
				),
				n.createElement(
					"div",
					{
						className: A.Footer,
					},
					n.createElement(l.Qte, {
						className: A.Logo,
					}),
					(0, m.we)("#GotSteam_Blurb"),
				),
			),
		),
	);
};
