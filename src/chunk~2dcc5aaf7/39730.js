import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import a from "./88750.js";
import s, { PR } from "./68292.js";
import o from "./48289.js";
import l from "./36464.js";
import c, { sT } from "./91720.js";
import m from "./11484.js";
import u from "./35488.js";
import d, { lX } from "./31084.js";
import A, { A as A_1 } from "./90765.js";
import p from "./69164.js";
import g from "./98995.js";
import h from "./90242.js";
import { R7 } from "./11131.js";
export function t$(e) {
	return (
		<>
			{e.options.map(({ label, key, ...r }) => (
				<V key={key} {...r}>
					{label}
				</V>
			))}
		</>
	);
}
export function zu(e) {
	const { children, onSendToChat, chatSendForbiddenMessage, summoningElement } =
		e;
	const c = PR().ChatStore().GetRecentChats();
	const { ownerWindow } = R7();
	n.useEffect(() => {
		const e = (e) => {
			switch (e.key) {
				case "ArrowLeft":
				case "ArrowRight": {
					e.stopPropagation();
					e.preventDefault();
					return true;
				}
			}
			return false;
		};
		ownerWindow.document.addEventListener("keydown", e, true);
		return () => ownerWindow.document.removeEventListener("keydown", e, true);
	}, [ownerWindow]);
	const d =
		typeof chatSendForbiddenMessage == "object"
			? chatSendForbiddenMessage?.strMessage
			: chatSendForbiddenMessage;
	return (
		<a.tz className={m.ShareSheet}>
			<div className={m.ContainerGamepad}>
				{typeof chatSendForbiddenMessage == "object" &&
					chatSendForbiddenMessage.bHeader && (
						<>
							<div className={m.Warning}>
								{chatSendForbiddenMessage.strMessage}
							</div>
							<SL />
						</>
					)}
				{children}
				<SL />
				<div className={m.ChatLabel}>{Localize("#ExportClip_ShareToChat")}</div>
				<p.Z className={m.ChatRow}>
					{c?.length > 0 &&
						c
							.slice(0, 3)
							.map((e) => (
								<B
									key={e.unique_id}
									chat={e}
									onSendToChat={onSendToChat}
									disabled={!!d}
									tooltip={d}
								/>
							))}
					<S
						summoningElement={summoningElement}
						onSendToChat={onSendToChat}
						disabled={!!d}
						tooltip={d}
					/>
				</p.Z>
			</div>
		</a.tz>
	);
}
function B(e) {
	const { chat, onSendToChat, disabled, tooltip } = e;
	const l = chat instanceof s.a$;
	const c = (
		<a.kt
			className={m.Chat}
			onSelected={() => onSendToChat(chat)}
			disabled={disabled}
		>
			<Y chat={chat} disabled={disabled} />
			<div className={A_1(m.Name, l && m.ChatGroupName)}>{chat.name}</div>
		</a.kt>
	);
	if (tooltip) {
		return <g.he toolTipContent={tooltip}>{c}</g.he>;
	} else {
		return c;
	}
}
function Y(e) {
	const { chat, disabled } = e;
	if (chat instanceof s.sn) {
		const e = o.O$.GetFriendState(chat.accountid_partner);
		return (
			<div className={A_1(disabled && m.Disabled)}>
				<l.fH friend={e} size="Medium" statusPosition="none" />
			</div>
		);
	}
	return (
		<div className={A_1(disabled && m.Disabled)}>
			<s.I group={chat} small />
		</div>
	);
}
function S(e) {
	const { summoningElement, onSendToChat, disabled, tooltip } = e;
	const l = (
		<a.kt
			className={m.AllChats}
			onSelected={() =>
				lX(<W onSendToChat={onSendToChat} />, summoningElement, {
					bOverlapHorizontal: true,
				})
			}
			disabled={disabled}
		>
			<u.Chat className={m.AllChatsIcon} />
			<div className={m.Name}>{Localize("#ExportClip_AllChats")}</div>
		</a.kt>
	);
	if (tooltip) {
		return <g.he toolTipContent={tooltip}>{l}</g.he>;
	} else {
		return l;
	}
}
function W(e) {
	const [t, setT] = n.useState();
	const o = (
		t ? PR().ChatStore().GetFilteredChats(t) : PR().ChatStore().GetRecentChats()
	).slice(0, 30);
	return (
		<a.tz className={m.AllChatsMenu}>
			<h.BA
				type="text"
				onChange={(e) => setT(e.currentTarget.value)}
				placeholder={Localize("#ExportClip_AllChats_SearchPlaceholder")}
			/>
			{!o.length && (
				<div className={m.NoResults}>
					{Localize("#ExportClip_AllChats_NoResults")}
				</div>
			)}
			{o.map((t) => (
				<B key={t.unique_id} chat={t} {...e} />
			))}
		</a.tz>
	);
}
export function SL() {
	return <div className={m.ChatDivider} />;
}
function V(e) {
	const { icon, children, disabled, ...s } = e;
	const o = (
		<a.kt className={m.ShareMenuButton} disabled={!!disabled} {...s}>
			{icon}
			<div className={m.ShareMenuLabel}>{children}</div>
		</a.kt>
	);
	if (typeof disabled == "string") {
		return <g.Gq toolTipContent={disabled}>{o}</g.Gq>;
	} else {
		return o;
	}
}
export function H5(e, t, r, n) {
	T(t, r).SetFileToUpload(e, {
		unAssociatedAppID: n,
	});
}
export function GJ(e, t, r, n, a, s) {
	const o = T(t, r);
	const l = s ?? Localize("#ClipUpload_Filename");
	o.StartFileExportToUpload(e, {
		displayFilename: l,
		unAssociatedAppID: a?.GetAppID(),
		onComplete: (e, t) => {
			sT(a, 1, n, t, e);
		},
	});
}
export function H6(e, t, r) {
	T(t, r).SendChatMessage(e);
}
function T(e, t) {
	const r = e instanceof s.sn ? e : e.GetDefaultChatRoom();
	return PR().UIStore().ShowAndOrActivateChat(t, r, true).GetChatView();
}
export function kM(e) {
	if (e) {
		return e.replace(/[\/\.,\\:|]/g, "-");
	} else {
		return e;
	}
}
