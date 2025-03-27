import n from "./63696.js";
import i from "./78325.js";
import a, { A as A_1 } from "./90765.js";
import s, { $2 } from "./96680.js";
import o from "./11131.js";
import l, { h3, OJ } from "./63439.js";
import c, { Nr } from "./42318.js";
import m from "./91435.js";
import u from "./27773.js";
import { Ue, cZ, wY } from "./52451.js";
import A from "./22176.js";
import g from "./35488.js";
import h from "./98995.js";
import C from "./19696.js";
import _ from "./23600.js";
import f from "./32411.js";
const p = A;
export const BjContext = n.createContext({
	width: undefined,
	height: undefined,
});
export function aS(e, t, r, i) {
	return n.useCallback(
		(n) => {
			let a = {
				width: e,
				height: t,
				minWidth: r,
				minHeight: i,
			};
			n.dimensions = a;
			n.minWidth = r;
			n.minHeight = i;
			return n;
		},
		[e, t, r, i],
	);
}
function S(e) {
	const {
		bPinned,
		bShowPinnedView,
		onTogglePin,
		onPinnedOpacity,
		bFlipped,
		onToggleFlip,
		extraTitleBarActions,
	} = e;
	return (
		<>
			{onTogglePin && (
				<u.g
					className={A_1(p.PinWindowButton, bPinned && p.Pinned)}
					onClick={onTogglePin}
				>
					<h.he
						className={p.WindowButtonTooltip}
						toolTipContent="#UserGameNotes_PinWindow"
						direction="top"
					>
						<g.Pin />
					</h.he>
				</u.g>
			)}
			{onTogglePin && bPinned && !bShowPinnedView && (
				<u.g className={p.OpacityButton} onClick={onPinnedOpacity}>
					<h.he
						className={p.WindowButtonTooltip}
						toolTipContent="#UserGameNotes_WindowOpacity"
						direction="top"
					>
						<g.Opacity />
					</h.he>
				</u.g>
			)}
			{onToggleFlip && (
				<u.g
					className={A_1(p.FlipWindowButton, bFlipped && p.Flipped)}
					onClick={onToggleFlip}
				>
					<h.he
						className={p.WindowButtonTooltip}
						toolTipContent="#UserGameNotes_FlipWindow"
						direction="top"
					>
						<g.Chevron className={A_1(bFlipped && p.Flipped)} />
					</h.he>
				</u.g>
			)}
			{extraTitleBarActions}
		</>
	);
}
export const rG = Nr((e) => {
	const {
		strName,
		strTitle,
		updateParamsBeforeShow,
		onMinimize,
		onMaximize,
		onClose,
		children,
		refPopup,
		bForceWindowFocused,
		bUseSavedDimensions,
		title,
		eCreationFlags,
		bFitToContent,
		className = "",
		titleBarClassName,
		refPinnedPopup,
		bPinned,
		bShowPinnedView,
		bFlipped,
		bShowMin,
		bShowMax,
		bHideResizeGrip,
		bHideWindowControls,
	} = e;
	const z = $2();
	const x = `OverlayPopup_${strName}`;
	const U = h3(x);
	const W = bUseSavedDimensions ? U : {};
	W.onClose = onClose;
	const V = bUseSavedDimensions ? U?.onResize : null;
	const H = n.useCallback(
		(e, t) => {
			if (V) {
				V(e, t);
			}
			e.SteamClient.Window.GetWindowDimensions().then((t) => {
				if (e) {
					e.overlayPopupCachedDimensions = t;
				}
			});
		},
		[V],
	);
	W.onResize = H;
	const j = bUseSavedDimensions ? U?.updateParamsBeforeShow : null;
	const q = n.useCallback(
		(e) => {
			if (j) {
				e = j(e);
			}
			return (e = updateParamsBeforeShow(e));
		},
		[updateParamsBeforeShow, j],
	);
	W.updateParamsBeforeShow = q;
	const Q = (strName ? `${strName}_` : "") + n.useId();
	const { popup, element } = OJ(
		Q,
		{
			title: strTitle || "",
			html_class: `fullheight ModalDialogPopup ${className}`,
			body_class: `fullheight ModalDialogBody ${p.OverlayPopupBody}`,
			popup_class: "fullheight",
			replace_existing_popup: false,
			target_browser: z.params.browserInfo,
			eCreationFlags: eCreationFlags ?? o.Wf.Resizable,
			bPinned: bPinned,
		},
		W,
	);
	const { width, height } = n.useContext(BjContext);
	n.useEffect(() => {
		popup?.SteamClient.Window.GetWindowDimensions().then((e) => {
			const r = e.x > width || e.y > height;
			if (popup && r) {
				console.warn(strName, "fully offscreen, moving back to center");
				popup.SteamClient.Window.MoveTo(
					Math.ceil(Math.max(0, width / 2 - e.width / 2)),
					Math.ceil(Math.max(0, height / 2 - e.height / 2)),
				);
			}
		});
	}, [strName, popup, width, height]);
	let J = Ue(refPopup, refPinnedPopup);
	n.useEffect(() => {
		cZ(J, popup);
		return () => cZ(J, null);
	}, [popup, J]);
	const $ = n.useCallback(
		(e) => {
			popup?.SteamClient.Window.ResizeTo(
				Math.ceil(e.borderBoxSize[0].inlineSize),
				Math.ceil(e.borderBoxSize[0].blockSize),
				true,
			);
		},
		[popup],
	);
	const ee = wY($);
	if (!element) {
		return null;
	}
	const te = !bFitToContent && !bHideResizeGrip;
	const re = <S {...e} />;
	return i.createPortal(
		<o.kc ownerWindow={popup}>
			<_.w bForceWindowFocused={bForceWindowFocused}>
				<div
					className={A_1(
						p.OverlayPopup,
						"PopupFullWindow",
						te && p.Resizable,
						bFitToContent && p.FitToContent,
						bShowPinnedView && p.PinnedView,
						strName,
						bFlipped && p.Flipped,
					)}
					ref={bFitToContent ? ee : undefined}
				>
					{!bHideWindowControls && (
						<div className={A_1(p.WindowControls, bFlipped && p.Flipped)}>
							<f.sl />
							<u.c
								popup={popup}
								className={titleBarClassName}
								bForceWindowFocused={bForceWindowFocused}
								hideMin={!bShowMin}
								hideMax={!bShowMax}
								hideClose={!onClose || bShowPinnedView}
								onMinimize={onMinimize}
								onMaximize={onMaximize}
								onClose={onClose}
								extraActions={re}
							>
								{title}
							</u.c>
						</div>
					)}
					<m.EO bCenterPopupsOnWindow browserInfo={z.params.browserInfo}>
						{children}
					</m.EO>
				</div>
				{te && (
					<C.Z
						className={A_1(p.ResizeGrip, bShowPinnedView && p.PinnedView)}
						popup={popup}
					/>
				)}
			</_.w>
		</o.kc>,
		element,
	);
});
