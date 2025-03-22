var n;
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./64608.js");
var s = require("./7872.js");
var o = require(/*webcrack:missing*/ "./46108.js");
var l = require(/*webcrack:missing*/ "./52451.js");
var c = require("./10606.js");
var m = require(/*webcrack:missing*/ "./69164.js");
var u = require("./21091.js");
var d = require("./35488.js");
var A = require("./79905.js");
var p = require("./30449.js");
var g = require(/*webcrack:missing*/ "./31958.js");
function h(e) {
	const { closeModal: t, controllerSettings: r, setControllerSettings: n } = e;
	const A = {
		eCalibrationState: 2,
		nControllerIndex: r.nControllerIndex,
		flAccelStationaryTolerance: 0,
		flGyroStationaryTolerance: 0,
	};
	const [p, g] = i.useState({
		nCountdown: 4,
		eCalibrationState: 5,
		steamInputCalibrationState: A,
	});
	const {
		bTimerCompleted: h,
		fnStopTimer: C,
		fnRestartTimer: _,
	} = (0, l.L$)(1000);
	const f = i.useCallback(
		(e) => {
			if (e.eCalibrationState == 2) {
				let t = r;
				t.flAccelerometerStationaryTolerance = e.flAccelStationaryTolerance;
				t.flGyroStationaryTolerance = e.flGyroStationaryTolerance;
				n(t);
			}
			g({
				nCountdown: 0,
				eCalibrationState: e.eCalibrationState,
				steamInputCalibrationState: e,
			});
		},
		[n, r],
	);
	i.useEffect(() => {
		if (h && p.eCalibrationState == 6) {
			if (p.nCountdown > 0) {
				g({
					nCountdown: p.nCountdown - 1,
					eCalibrationState: 6,
					steamInputCalibrationState: p.steamInputCalibrationState,
				});
				_();
			} else {
				g({
					nCountdown: 0,
					eCalibrationState: 1,
					steamInputCalibrationState: p.steamInputCalibrationState,
				});
				SteamClient.Input.StartGyroSWCalibration(f);
				C();
			}
		}
	}, [p, r.nControllerIndex, h, _, C, f]);
	const b = () => {
		g({
			nCountdown: p.nCountdown - 1,
			eCalibrationState: 6,
			steamInputCalibrationState: p.steamInputCalibrationState,
		});
	};
	const y = () => {
		p.eCalibrationState;
		SteamClient.Input.CancelGyroSWCalibration();
		t();
	};
	return i.createElement(
		c.eV,
		{
			onCancel: y,
		},
		((n) => {
			const { nControllerIndex: l } = r;
			let c;
			switch (n) {
				case 5:
					c = i.createElement(
						m.Z,
						{
							focusable: true,
							autoFocus: true,
							noFocusRing: true,
							onOKButton: b,
							onCancelButton: y,
						},
						i.createElement(
							a.Y9,
							null,
							(0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyroWizard_Title",
							),
						),
						i.createElement(a.D0, {
							icon: i.createElement(d.Information, null),
							label: (0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyroWizard_Page1_Desc1",
							),
							childrenLayout: "inline",
							bottomSeparator: "none",
							indentLevel: 1,
						}),
						i.createElement(a.D0, {
							icon: i.createElement(d.Information, null),
							label: (0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyroWizard_Page1_Desc2",
							),
							childrenLayout: "inline",
							bottomSeparator: "none",
							indentLevel: 1,
							className: s.ExtraSpacing,
						}),
						i.createElement(a.CB, {
							focusButton: "primary",
							strOKText: (0, o.we)("#Button_Continue"),
							onOK: b,
							onCancel: y,
						}),
					);
					break;
				case 6:
					c = i.createElement(
						m.Z,
						{
							focusable: true,
							autoFocus: true,
							noFocusRing: true,
							onCancelButton: y,
						},
						i.createElement(
							a.Y9,
							null,
							(0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyroWizard_Title",
							),
						),
						i.createElement(
							a.a3,
							null,
							(0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyroWizard_Page2_CountDown",
								p.nCountdown,
							),
						),
						i.createElement(
							a.jn,
							{
								autoFocus: true,
								onClick: y,
							},
							(0, o.we)("#Button_Cancel"),
						),
					);
					break;
				case 1:
					c = i.createElement(
						m.Z,
						{
							focusable: true,
							autoFocus: true,
							noFocusRing: true,
							onCancelButton: y,
						},
						i.createElement(
							a.Y9,
							null,
							(0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyroWizard_Title",
							),
						),
						i.createElement(
							a.a3,
							null,
							(0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyroWizard_Page2_CountDown_End",
							),
						),
						i.createElement(
							m.Z,
							null,
							i.createElement(u.qH, {
								...e,
							}),
							i.createElement(u.V4, {
								strLabel:
									"#Settings_ControllerCalibration_Calibrating_StationaryTolerances",
								nControllerIndex: l,
							}),
						),
						i.createElement(
							a.jn,
							{
								autoFocus: true,
								onClick: y,
							},
							" ",
							(0, o.we)("#Button_Cancel"),
							" ",
						),
					);
					break;
				case 2:
					c = i.createElement(
						m.Z,
						{
							focusable: true,
							autoFocus: true,
							noFocusRing: true,
							onCancelButton: y,
						},
						i.createElement(
							a.Y9,
							null,
							(0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyroWizard_Title",
							),
						),
						i.createElement(
							a.a3,
							null,
							(0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyroWizard_Page3_Desc",
							),
						),
						i.createElement(
							m.Z,
							null,
							i.createElement(u.PE, {
								controllerIndex: r.nControllerIndex,
							}),
							i.createElement(u.V4, {
								strLabel: "#Settings_ControllerCalibration_Calibrating_Drift",
								nControllerIndex: l,
							}),
						),
						i.createElement(
							a.jn,
							{
								autoFocus: true,
								onClick: y,
							},
							(0, o.we)("#Button_Cancel"),
						),
					);
					break;
				case 3:
					c = i.createElement(
						m.Z,
						{
							focusable: true,
							autoFocus: true,
							noFocusRing: true,
							onCancelButton: y,
						},
						i.createElement(
							a.Y9,
							null,
							(0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyroWizard_Complete_Title",
							),
						),
						i.createElement(
							a.a3,
							null,
							(0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyroWizard_Complete_Desc",
							),
						),
						i.createElement(
							a.jn,
							{
								autoFocus: true,
								onClick: t,
							},
							(0, o.we)("#Button_OK"),
						),
					);
					break;
				case 4:
					c = i.createElement(
						m.Z,
						{
							focusable: true,
							autoFocus: true,
							noFocusRing: true,
							onCancelButton: y,
						},
						i.createElement(
							a.Y9,
							null,
							(0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyroWizard_Failed_Title",
							),
						),
						i.createElement(
							a.a3,
							null,
							(0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyroWizard_Failed_Desc",
							),
						),
						i.createElement(a.CB, {
							focusButton: "primary",
							strOKText: (0, o.we)("#Button_Rety"),
							onOK: b,
							onCancel: t,
						}),
					);
					break;
				default:
					c = i.createElement(
						m.Z,
						{
							focusable: true,
							autoFocus: true,
							noFocusRing: true,
							onCancelButton: y,
						},
						i.createElement(
							a.jn,
							{
								onClick: t,
							},
							(0, o.we)("#Button_Cancel"),
						),
					);
			}
			return c;
		})(p.eCalibrationState),
	);
}
function C(e) {
	const { closeModal: t, controllerSettings: r } = e;
	const [s, u] = i.useState({
		nCountdown: 4,
		eCalibrationState: n.CountDown,
	});
	const {
		bTimerCompleted: d,
		fnStopTimer: A,
		fnRestartTimer: h,
	} = (0, l.L$)(1000);
	i.useEffect(() => {
		if (d) {
			switch (s.eCalibrationState) {
				case n.CountDown:
					if (s.nCountdown > 0) {
						u({
							nCountdown: s.nCountdown - 1,
							eCalibrationState: n.CountDown,
						});
						h();
					} else {
						SteamClient.Input.CalibrateControllerIMU(r.nControllerIndex);
						u({
							nCountdown: 2,
							eCalibrationState: n.Calibrating,
						});
						h();
					}
					break;
				case n.Calibrating:
					if (s.nCountdown == 0) {
						u({
							nCountdown: 0,
							eCalibrationState: n.Complete_Success,
						});
					} else {
						u({
							nCountdown: s.nCountdown - 1,
							eCalibrationState: n.Calibrating,
						});
						h();
					}
				case n.Complete_Success:
			}
		}
	}, [r.nControllerIndex, s, d, h]);
	const C = () => {
		if (s.eCalibrationState == n.Calibrating) {
			SteamClient.Input.CancelGyroSWCalibration();
		}
		t();
	};
	return i.createElement(
		c.eV,
		{
			onCancel: C,
		},
		i.createElement(
			m.Z,
			{
				focusable: true,
				autoFocus: true,
				noFocusRing: true,
				onCancelButton: C,
			},
			i.createElement(
				a.Y9,
				null,
				((e) => {
					switch (e) {
						case n.CountDown:
							return (0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyro_Header",
							);
						case n.Calibrating:
							return (0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyro_Header_Calibrating",
							);
						case n.Complete_Success:
							return (0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyro_Header_Done",
							);
					}
				})(s.eCalibrationState),
			),
			s.eCalibrationState == n.Calibrating &&
				((_ = s),
				i.createElement(p.hA, {
					focusable: false,
					childrenLayout: "inline",
					childrenContainerWidth: "max",
					bottomSeparator: "none",
					nProgress: (0, g.bT)(_.nCountdown, 2, 0, 0, 100),
					nTransitionSec: 1,
				})),
			i.createElement(
				a.a3,
				null,
				((e) => {
					switch (e) {
						case n.CountDown:
							return (0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyro_Desc",
								s.nCountdown,
							);
						case n.Calibrating:
							return (0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyro_Calibrating",
							);
						case n.Complete_Success:
							return (0, o.we)(
								"#Settings_ControllerCalibration_CalibrateGyro_Done",
							);
					}
				})(s.eCalibrationState),
			),
		),
		i.createElement(a.CB, {
			focusButton: "secondary",
			bOKDisabled: s.eCalibrationState != n.Complete_Success,
			strOKText: (0, o.we)("#Button_OK"),
			onOK: t,
			onCancel: C,
		}),
	);
	var _;
}
export function m5(e) {
	const { controllerSettings: t } = e;
	const r = t.unCapabilities & 2048;
	const [n, s, m] = (0, l.uD)(false);
	const u = t.unCapabilities & 262144;
	if (r) {
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(
				a.xh,
				{
					label: (0, o.we)("#Settings_ControllerCalibration_CalibrateIMU"),
					onClick: () => {
						s();
					},
				},
				(0, o.we)("#Settings_ControllerCalibration_Calibrate"),
			),
			i.createElement(
				c.EN,
				{
					active: n,
				},
				u &&
					i.createElement(h, {
						closeModal: m,
						...e,
					}),
				!u &&
					i.createElement(C, {
						closeModal: m,
						...e,
					}),
			),
		);
	} else {
		return i.createElement(i.Fragment, null);
	}
}
export function mZ(e) {
	const { controllerSettings: t } = e;
	(0, A.QY)(t.nControllerIndex);
	(0, A.ox)(t.nControllerIndex);
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(m5, {
			...e,
		}),
	);
}
(function (e) {
	e[(e.CountDown = 0)] = "CountDown";
	e[(e.Calibrating = 1)] = "Calibrating";
	e[(e.Complete_Success = 2)] = "Complete_Success";
})((n ||= {}));
