import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./5859.js";
import a from "./64608.js";
import s from "./10606.js";
import { mK } from "./13869.js";
import l from "./50376.js";
import { A as A_1 } from "./90765.js";
import u from "./72476.js";
import d from "./16157.js";
const A = d;
export async function o(e) {
	if (u.TS.IN_CLIENT) {
		console.log(`Running game ${e} locally.`);
		window.location.href = `steam://run/${e}`;
	} else {
		console.log(`Cannot identify local client. Prompting user to launch ${e}.`);
		(async (e) => {
			await i.A.Get().QueueAppRequest(e, {});
			const t = i.A.Get().GetApp(e);
			const r = t?.GetName() || "";
			console.log("prompting for", r);
			const a = `${u.TS.STORE_BASE_URL}about/`;
			mK(<G appid={e} strGameName={r} strDownloadSteamUrl={a} />, window);
		})(e);
	}
}
const G = (e) => {
	const t = () => e.closeModal && e.closeModal();
	return (
		<s.x_ onEscKeypress={t} className={A.GotSteamDialog}>
			<a.UC>
				<a.Y9> {Localize("#GotSteam_Title")} </a.Y9>
				<a.nB>
					<a.a3>
						{LocalizeReact(
							"#GotSteam_PromptWithDownloadLink",
							<a href={e.strDownloadSteamUrl} className={A.DownloadSteamUrl}>
								{Localize("#GotSteam_DownloadLinkText")}
							</a>,
							<span className={A.GameName}>{e.strGameName}</span>,
						)}
					</a.a3>
					<div className={A.Buttons}>
						<a
							href={`steam://run/${e.appid}`}
							onClick={t}
							className={A_1(A.Button, A.LeftButton)}
						>
							<div className={A.AnswerText}> {Localize("#GotSteam_Yes")} </div>
							<div className={A.ActionText}>
								{" "}
								{Localize("#GotSteam_Yes_Play")}{" "}
							</div>
						</a>
						<a href={e.strDownloadSteamUrl} onClick={t} className={A.Button}>
							<div className={A.AnswerText}> {Localize("#GotSteam_No")} </div>
							<div className={A.ActionText}>
								{" "}
								{Localize("#GotSteam_No_Download")}{" "}
							</div>
						</a>
					</div>
					<div className={A.Footer}>
						<l.Qte className={A.Logo} />
						{Localize("#GotSteam_Blurb")}
					</div>
				</a.nB>
			</a.UC>
		</s.x_>
	);
};
