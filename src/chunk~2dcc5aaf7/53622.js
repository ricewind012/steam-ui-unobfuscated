import n, { Uq } from "./52192.js";
import i, { w } from "./98385.js";
import a from "./22091.js";
import s, { PA } from "./41230.js";
import o from "./63696.js";
import l, { ck } from "./43014.js";
import c from "./13743.js";
import m, { A as A_1 } from "./90765.js";
import u from "./46422.js";
import d from "./35552.js";
const A = d;
export const W = PA((e) => {
	const { button, bKnockout, ...i } = e;
	let s = bKnockout;
	let m = u.oy.ActiveControllerIndex;
	if (m < 0 && a.Fd.Get().GetControllers()?.length > 0) {
		m = a.Fd.Get().GetControllers()[0].nControllerIndex;
	}
	const d = u.oy.MostRecentlyActiveController;
	const A = a.Fd.Get().GetControllers();
	let [p, setP] = o.useState(4);
	o.useEffect(() => {
		setP(A.find((e) => e.nControllerIndex == m)?.eControllerType);
	}, [m, A]);
	let h = p ?? 4;
	if (d?.bNintendoLayout && p != 39 && p != 40) {
		h = 38;
	} else if (p == 47) {
		h = 34;
	}
	if (button == l.g4.HomeMenu) {
		let e = "";
		switch (h) {
			case 33:
			case 34:
			case 45:
			case 48: {
				e = "/steaminputglyphs/ps4_button_logo.svg";
				break;
			}
			case 2:
			case 3:
			case 43:
			case 49: {
				e = "/steaminputglyphs/sc_button_steam.svg";
				break;
			}
			case 38:
			case 42:
			case 39:
			case 40:
			case 41: {
				e = "/steaminputglyphs/switchpro_button_home.svg";
				break;
			}
			case 4: {
				return <c.$m button={button} size={c.xY.Small} />;
			}
			default: {
				e = "/steaminputglyphs/xbox_button_logo.svg";
			}
		}
		return <img src={Uq(e)} {...i} />;
	}
	if (bKnockout) {
		switch (button) {
			case l.g4.A:
			case l.g4.B:
			case l.g4.X:
			case l.g4.Y: {
				s = (!!bKnockout && p == 34) || undefined;
				break;
			}
			default: {
				s = undefined;
			}
		}
	}
	let C = d?.bUseReversedLayout;
	let _ = button;
	if (C) {
		switch (button) {
			case l.g4.A: {
				_ = l.g4.B;
				break;
			}
			case l.g4.B: {
				_ = l.g4.A;
				break;
			}
			case l.g4.X: {
				_ = l.g4.Y;
				break;
			}
			case l.g4.Y: {
				_ = l.g4.X;
			}
		}
	}
	const f = ((e) => {
		switch (e) {
			default:
			case l.g4.A: {
				return {
					eControllerModeInput: 12,
					eControllerSource: 4,
				};
			}
			case l.g4.B: {
				return {
					eControllerModeInput: 10,
					eControllerSource: 4,
				};
			}
			case l.g4.X: {
				return {
					eControllerModeInput: 11,
					eControllerSource: 4,
				};
			}
			case l.g4.Y: {
				return {
					eControllerModeInput: 9,
					eControllerSource: 4,
				};
			}
			case l.g4.Select: {
				return {
					eControllerModeInput: 51,
					eControllerSource: 5,
				};
			}
			case l.g4.Start: {
				return {
					eControllerModeInput: 52,
					eControllerSource: 5,
				};
			}
			case l.g4.LeftBumper: {
				return {
					eControllerModeInput: 53,
					eControllerSource: 5,
				};
			}
			case l.g4.RightBumper: {
				return {
					eControllerModeInput: 54,
					eControllerSource: 5,
				};
			}
			case l.g4.LeftTrigger: {
				return {
					eControllerModeInput: 13,
					eControllerSource: 6,
				};
			}
			case l.g4.RightTrigger: {
				return {
					eControllerModeInput: 13,
					eControllerSource: 7,
				};
			}
			case l.g4.LeftStick: {
				return {
					eControllerModeInput: 0,
					eControllerSource: 3,
				};
			}
			case l.g4.LeftStickClick: {
				return {
					eControllerModeInput: 13,
					eControllerSource: 3,
				};
			}
			case l.g4.Up: {
				return {
					eControllerModeInput: 1,
					eControllerSource: 3,
				};
			}
			case l.g4.Down: {
				return {
					eControllerModeInput: 5,
					eControllerSource: 3,
				};
			}
			case l.g4.Left: {
				return {
					eControllerModeInput: 7,
					eControllerSource: 3,
				};
			}
			case l.g4.Right: {
				return {
					eControllerModeInput: 3,
					eControllerSource: 3,
				};
			}
			case l.g4.RightStick: {
				return {
					eControllerModeInput: 0,
					eControllerSource: 12,
				};
			}
			case l.g4.RightStickClick: {
				return {
					eControllerModeInput: 13,
					eControllerSource: 12,
				};
			}
			case l.g4.LeftTrackpad: {
				return {
					eControllerModeInput: 0,
					eControllerSource: 1,
				};
			}
			case l.g4.LeftTrackpadClick: {
				return {
					eControllerModeInput: 13,
					eControllerSource: 1,
				};
			}
			case l.g4.RightTrackpad: {
				return {
					eControllerModeInput: 0,
					eControllerSource: 2,
				};
			}
			case l.g4.RightTrackpadClick: {
				return {
					eControllerModeInput: 13,
					eControllerSource: 2,
				};
			}
			case l.g4.RearLeftUpper: {
				return {
					eControllerModeInput: 57,
					eControllerSource: 5,
				};
			}
			case l.g4.RearLeftLower: {
				return {
					eControllerModeInput: 55,
					eControllerSource: 5,
				};
			}
			case l.g4.RearRightUpper: {
				return {
					eControllerModeInput: 58,
					eControllerSource: 5,
				};
			}
			case l.g4.RearRightLower: {
				return {
					eControllerModeInput: 56,
					eControllerSource: 5,
				};
			}
		}
	})(_);
	return (
		<n.UT
			controllerType={h}
			controllerSource={f.eControllerSource}
			controllerModeInput={f.eControllerModeInput}
			knockout={s}
			{...i}
		/>
	);
});
export const X = PA((e) => {
	const { button, ...r } = e;
	const n = w(button);
	const s = o.useCallback(
		(e) => {
			u.oy.NavigationManager.DispatchVirtualButtonClick(ck(button));
			e.preventDefault();
			e.stopPropagation();
		},
		[button],
	);
	const d = a.Fd.Get().GetControllers();
	let g = u.oy.ActiveControllerIndex;
	if (g < 0 && a.Fd.Get().GetControllers()?.length > 0) {
		g = a.Fd.Get().GetControllers()[0].nControllerIndex;
	}
	let [h, setH] = o.useState(4);
	o.useEffect(() => {
		setH(d.find((e) => e.nControllerIndex == g)?.eControllerType ?? 4);
	}, [g, d]);
	const _ = h != 4 || (button != l.g4.HomeMenu && button != l.g4.QuickMenu);
	if (n) {
		return (
			<div
				className={A_1(A.ActionButtonLegend)}
				onClick={s}
				onTouchEnd={s}
				{...r}
			>
				<div className={A.ActionButtonGlyph}>
					{_ ? (
						<W button={button} className={A.FooterGlyphSize} />
					) : (
						<c.$m button={button} type={c.wt.Light} />
					)}
				</div>
				<div className={A.ActionButtonLabel}>{n}</div>
			</div>
		);
	} else {
		return null;
	}
});
