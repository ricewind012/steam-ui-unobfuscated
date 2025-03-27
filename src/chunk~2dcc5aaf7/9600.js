import { Localize } from "../../actual_src/utils/localization.js";
import n, { IU } from "./89748.js";
import { Qt } from "./18057.js";
import a from "./96593.js";
import s from "./48289.js";
import o from "./87935.js";
import l from "./63696.js";
import c from "./64608.js";
import m from "./10606.js";
import u, { pg } from "./13869.js";
import { A } from "./90765.js";
import { Qn } from "./72476.js";
import g from "./39500.js";
const h = g;
const C = "#BorrowGameDialog_Title";
export function J(e, t) {
	const r = a.tw.GetAppOverviewByGameID(e);
	if (r) {
		const n = s.O$.GetFriendState(r.owner_account_id);
		if (n) {
			pg(<F gameid={e} owner={n} />, t || window, {
				strTitle: Localize(C),
			});
		}
	}
}
const F = (e) => {
	const { gameid, owner, closeModal } = e;
	const s = Qn();
	const u = IU();
	const g = () => {
		if (closeModal) {
			closeModal();
		}
	};
	const _ = Qt(
		o.B7.BuildStoreAppURL(Number.parseInt(gameid), "gamepadborrowgamedialog"),
	);
	const f = Qt(
		o.B7.BuildStoreAppURL(Number.parseInt(gameid), "borrowgamedialog"),
	);
	const b = Qt(o.B7.ResolveURL("FamilyManagement"));
	const y = Qt(
		`${o.B7.ResolveURL(
			"FamilyManagement",
		)}?inviteuser=${owner.steamid.ConvertTo64BitString()}`,
	);
	const S = l.useCallback(() => {
		if (closeModal) {
			closeModal();
		}
		if (u) {
			y();
		} else {
			b();
		}
	}, [closeModal, y, b, u]);
	const w = l.useCallback(() => {
		if (closeModal) {
			closeModal();
		}
		if (s) {
			_();
		} else {
			f();
		}
	}, [closeModal, s, _, f]);
	const r_display_name = owner.display_name;
	let v = u
		? "#BorrowGameDialog_Description_InFamily"
		: "#BorrowGameDialog_Description_NoFamily";
	let I = u
		? "#BorrowGameDialog_Button_InFamily"
		: "#BorrowGameDialog_Button_NoFamily";
	return (
		<m.eV onCancel={g}>
			<div className={h.BorrowGameDialog}>
				<c.Y9 className={h.ModalHeader}>{Localize(C)}</c.Y9>
				<c.nB>
					<div>{Localize(v, r_display_name)}</div>
					<div className={A(h.BodySection)}>
						<c.jn className={h.RequestButton} onClick={S}>
							{Localize(I)}
						</c.jn>
					</div>
					<c.wi>
						<c.dR>
							<c.$n onClick={w}>{Localize("#BorrowGameDialog_Purchase")}</c.$n>
							<c.$n onClick={g}>{Localize("#Button_Cancel")}</c.$n>
						</c.dR>
					</c.wi>
				</c.nB>
			</div>
		</m.eV>
	);
};
