import r from "./63696.js";
import i, { Fj } from "./736.js";
import s from "./50376.js";
import o, { A } from "./90765.js";
import a, { GD, jt } from "./90685.js";
import { Pr } from "./72476.js";
function L(e) {
	const { popup, onMaximize, bOSX } = e;
	const l = GD(popup);
	const u = r.useCallback(() => {
		if (onMaximize) {
			onMaximize();
		} else if (Fj(popup, "Window.ToggleMaximize")) {
			popup.SteamClient.Window.ToggleMaximize();
		}
	}, [popup, onMaximize]);
	return (
		<G
			className={A(
				l ? "restoreButton" : "maximizeButton",
				"windowControlButton",
			)}
			onClick={u}
		>
			{!bOSX && (l ? <s.ZWw /> : <s.hz4 />)}
		</G>
	);
}
function U(e) {
	const { popup, onMinimize, bOSX } = e;
	const o = r.useCallback(() => {
		popup.SteamClient.Window.Minimize();
	}, [popup]);
	return (
		<G className="minimizeButton windowControlButton" onClick={onMinimize ?? o}>
			{!bOSX && <s.Xjb />}
		</G>
	);
}
function M(e) {
	const { popup, onClose, bOSX } = e;
	const a = r.useCallback(() => {
		if (popup) {
			if (Fj(popup, "Window.Close")) {
				popup.SteamClient.Window.Close();
			} else {
				popup.close();
			}
		}
	}, [popup]);
	return (
		<G className="closeButton windowControlButton" onClick={onClose ?? a}>
			{!bOSX && <s.sED />}
		</G>
	);
}
export function G(e) {
	const { className, onClick, children } = e;
	const s = r.useCallback(
		(e) => {
			if (onClick) {
				e.stopPropagation();
				onClick(e);
			}
		},
		[onClick],
	);
	return (
		<div className={A("title-area-icon", className)} onClick={s}>
			<div className="title-area-icon-inner">{children}</div>
		</div>
	);
}
export function c(e) {
	const {
		className,
		style,
		hideActions,
		hideClose,
		hideMin,
		hideMax,
		bOSX = Pr(),
		bForceWindowFocused,
		onMinimize,
		onMaximize,
		onClose,
		extraActions,
		popup,
		children,
	} = e;
	const M = jt(popup);
	return (
		<div
			className={A(
				"TitleBar",
				"title-area",
				bOSX && "OSX",
				(M || bForceWindowFocused) && "WindowFocus",
				className,
			)}
			style={style}
		>
			<div className="title-area-highlight" />
			<div className="title-area-children">{children}</div>
			{!hideActions && (
				<>
					{extraActions && (
						<div className="title-bar-actions extra-actions">
							{extraActions}
						</div>
					)}
					<div className="title-bar-actions window-controls">
						{!hideClose && <M popup={popup} onClose={onClose} bOSX={bOSX} />}
						{!hideMax && (
							<L popup={popup} onMaximize={onMaximize} bOSX={bOSX} />
						)}
						{!hideMin && (
							<U popup={popup} onMinimize={onMinimize} bOSX={bOSX} />
						)}
					</div>
				</>
			)}
		</div>
	);
}
