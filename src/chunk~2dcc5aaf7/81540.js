import { Localize } from "../../actual_src/utils/localization.js";
import i from "./63696.js";
import a from "./64608.js";
import s from "./7872.js";
import l, { L$, uD } from "./52451.js";
import c from "./10606.js";
import m from "./69164.js";
import u from "./21091.js";
import d from "./35488.js";
import A, { QY, ox } from "./79905.js";
import p from "./30449.js";
import g, { bT } from "./31958.js";
let n;
function H(e) {
	const { closeModal, controllerSettings, setControllerSettings } = e;
	const A = {
		eCalibrationState: 2,
		nControllerIndex: controllerSettings.nControllerIndex,
		flAccelStationaryTolerance: 0,
		flGyroStationaryTolerance: 0,
	};
	const [p, setP] = i.useState({
		nCountdown: 4,
		eCalibrationState: 5,
		steamInputCalibrationState: A,
	});
	const { bTimerCompleted, fnStopTimer, fnRestartTimer } = L$(1000);
	const f = i.useCallback(
		(e) => {
			if (e.eCalibrationState == 2) {
				let t = controllerSettings;
				t.flAccelerometerStationaryTolerance = e.flAccelStationaryTolerance;
				t.flGyroStationaryTolerance = e.flGyroStationaryTolerance;
				setControllerSettings(t);
			}
			setP({
				nCountdown: 0,
				eCalibrationState: e.eCalibrationState,
				steamInputCalibrationState: e,
			});
		},
		[setControllerSettings, controllerSettings],
	);
	i.useEffect(() => {
		if (bTimerCompleted && p.eCalibrationState == 6) {
			if (p.nCountdown > 0) {
				setP({
					nCountdown: p.nCountdown - 1,
					eCalibrationState: 6,
					steamInputCalibrationState: p.steamInputCalibrationState,
				});
				fnRestartTimer();
			} else {
				setP({
					nCountdown: 0,
					eCalibrationState: 1,
					steamInputCalibrationState: p.steamInputCalibrationState,
				});
				SteamClient.Input.StartGyroSWCalibration(f);
				fnStopTimer();
			}
		}
	}, [
		p,
		controllerSettings.nControllerIndex,
		bTimerCompleted,
		fnRestartTimer,
		fnStopTimer,
		f,
	]);
	const b = () => {
		setP({
			nCountdown: p.nCountdown - 1,
			eCalibrationState: 6,
			steamInputCalibrationState: p.steamInputCalibrationState,
		});
	};
	const y = () => {
		p.eCalibrationState;
		SteamClient.Input.CancelGyroSWCalibration();
		closeModal();
	};
	return (
		<c.eV onCancel={y}>
			{((n) => {
				const { nControllerIndex } = controllerSettings;
				let c;
				switch (n) {
					case 5: {
						c = (
							<m.Z
								focusable
								autoFocus
								noFocusRing
								onOKButton={b}
								onCancelButton={y}
							>
								<a.Y9>
									{(0, Localize)(
										"#Settings_ControllerCalibration_CalibrateGyroWizard_Title",
									)}
								</a.Y9>
								<a.D0
									icon={<d.Information />}
									label={(0, Localize)(
										"#Settings_ControllerCalibration_CalibrateGyroWizard_Page1_Desc1",
									)}
									childrenLayout="inline"
									bottomSeparator="none"
									indentLevel={1}
								/>
								<a.D0
									icon={<d.Information />}
									label={(0, Localize)(
										"#Settings_ControllerCalibration_CalibrateGyroWizard_Page1_Desc2",
									)}
									childrenLayout="inline"
									bottomSeparator="none"
									indentLevel={1}
									className={s.ExtraSpacing}
								/>
								<a.CB
									focusButton="primary"
									strOKText={(0, Localize)("#Button_Continue")}
									onOK={b}
									onCancel={y}
								/>
							</m.Z>
						);
						break;
					}
					case 6: {
						c = (
							<m.Z focusable autoFocus noFocusRing onCancelButton={y}>
								<a.Y9>
									{(0, Localize)(
										"#Settings_ControllerCalibration_CalibrateGyroWizard_Title",
									)}
								</a.Y9>
								<a.a3>
									{(0, Localize)(
										"#Settings_ControllerCalibration_CalibrateGyroWizard_Page2_CountDown",
										p.nCountdown,
									)}
								</a.a3>
								<a.jn autoFocus onClick={y}>
									{(0, Localize)("#Button_Cancel")}
								</a.jn>
							</m.Z>
						);
						break;
					}
					case 1: {
						c = (
							<m.Z focusable autoFocus noFocusRing onCancelButton={y}>
								<a.Y9>
									{(0, Localize)(
										"#Settings_ControllerCalibration_CalibrateGyroWizard_Title",
									)}
								</a.Y9>
								<a.a3>
									{(0, Localize)(
										"#Settings_ControllerCalibration_CalibrateGyroWizard_Page2_CountDown_End",
									)}
								</a.a3>
								<m.Z>
									<u.qH {...e} />
									<u.V4
										strLabel="#Settings_ControllerCalibration_Calibrating_StationaryTolerances"
										nControllerIndex={nControllerIndex}
									/>
								</m.Z>
								<a.jn autoFocus onClick={y}>
									{" "}
									{(0, Localize)("#Button_Cancel")}{" "}
								</a.jn>
							</m.Z>
						);
						break;
					}
					case 2: {
						c = (
							<m.Z focusable autoFocus noFocusRing onCancelButton={y}>
								<a.Y9>
									{(0, Localize)(
										"#Settings_ControllerCalibration_CalibrateGyroWizard_Title",
									)}
								</a.Y9>
								<a.a3>
									{(0, Localize)(
										"#Settings_ControllerCalibration_CalibrateGyroWizard_Page3_Desc",
									)}
								</a.a3>
								<m.Z>
									<u.PE controllerIndex={controllerSettings.nControllerIndex} />
									<u.V4
										strLabel="#Settings_ControllerCalibration_Calibrating_Drift"
										nControllerIndex={nControllerIndex}
									/>
								</m.Z>
								<a.jn autoFocus onClick={y}>
									{(0, Localize)("#Button_Cancel")}
								</a.jn>
							</m.Z>
						);
						break;
					}
					case 3: {
						c = (
							<m.Z focusable autoFocus noFocusRing onCancelButton={y}>
								<a.Y9>
									{(0, Localize)(
										"#Settings_ControllerCalibration_CalibrateGyroWizard_Complete_Title",
									)}
								</a.Y9>
								<a.a3>
									{(0, Localize)(
										"#Settings_ControllerCalibration_CalibrateGyroWizard_Complete_Desc",
									)}
								</a.a3>
								<a.jn autoFocus onClick={closeModal}>
									{(0, Localize)("#Button_OK")}
								</a.jn>
							</m.Z>
						);
						break;
					}
					case 4: {
						c = (
							<m.Z focusable autoFocus noFocusRing onCancelButton={y}>
								<a.Y9>
									{(0, Localize)(
										"#Settings_ControllerCalibration_CalibrateGyroWizard_Failed_Title",
									)}
								</a.Y9>
								<a.a3>
									{(0, Localize)(
										"#Settings_ControllerCalibration_CalibrateGyroWizard_Failed_Desc",
									)}
								</a.a3>
								<a.CB
									focusButton="primary"
									strOKText={(0, Localize)("#Button_Rety")}
									onOK={b}
									onCancel={closeModal}
								/>
							</m.Z>
						);
						break;
					}
					default: {
						c = (
							<m.Z focusable autoFocus noFocusRing onCancelButton={y}>
								<a.jn onClick={closeModal}>
									{(0, Localize)("#Button_Cancel")}
								</a.jn>
							</m.Z>
						);
					}
				}
				return c;
			})(p.eCalibrationState)}
		</c.eV>
	);
}
function C(e) {
	const { closeModal, controllerSettings } = e;
	const [s, setS] = i.useState({
		nCountdown: 4,
		eCalibrationState: n.CountDown,
	});
	const { bTimerCompleted, fnStopTimer, fnRestartTimer } = L$(1000);
	i.useEffect(() => {
		if (bTimerCompleted) {
			switch (s.eCalibrationState) {
				case n.CountDown: {
					if (s.nCountdown > 0) {
						setS({
							nCountdown: s.nCountdown - 1,
							eCalibrationState: n.CountDown,
						});
						fnRestartTimer();
					} else {
						SteamClient.Input.CalibrateControllerIMU(
							controllerSettings.nControllerIndex,
						);
						setS({
							nCountdown: 2,
							eCalibrationState: n.Calibrating,
						});
						fnRestartTimer();
					}
					break;
				}
				case n.Calibrating: {
					if (s.nCountdown == 0) {
						setS({
							nCountdown: 0,
							eCalibrationState: n.Complete_Success,
						});
					} else {
						setS({
							nCountdown: s.nCountdown - 1,
							eCalibrationState: n.Calibrating,
						});
						fnRestartTimer();
					}
				}
				case n.Complete_Success:
			}
		}
	}, [controllerSettings.nControllerIndex, s, bTimerCompleted, fnRestartTimer]);
	const C = () => {
		if (s.eCalibrationState == n.Calibrating) {
			SteamClient.Input.CancelGyroSWCalibration();
		}
		closeModal();
	};
	return (
		<c.eV onCancel={C}>
			<m.Z focusable autoFocus noFocusRing onCancelButton={C}>
				<a.Y9>
					{((e) => {
						switch (e) {
							case n.CountDown: {
								return (0, Localize)(
									"#Settings_ControllerCalibration_CalibrateGyro_Header",
								);
							}
							case n.Calibrating: {
								return (0, Localize)(
									"#Settings_ControllerCalibration_CalibrateGyro_Header_Calibrating",
								);
							}
							case n.Complete_Success: {
								return (0, Localize)(
									"#Settings_ControllerCalibration_CalibrateGyro_Header_Done",
								);
							}
						}
					})(s.eCalibrationState)}
				</a.Y9>
				{s.eCalibrationState == n.Calibrating &&
					((_ = s),
					(
						<p.hA
							focusable={false}
							childrenLayout="inline"
							childrenContainerWidth="max"
							bottomSeparator="none"
							nProgress={bT(_.nCountdown, 2, 0, 0, 100)}
							nTransitionSec={1}
						/>
					))}
				<a.a3>
					{((e) => {
						switch (e) {
							case n.CountDown: {
								return (0, Localize)(
									"#Settings_ControllerCalibration_CalibrateGyro_Desc",
									s.nCountdown,
								);
							}
							case n.Calibrating: {
								return (0, Localize)(
									"#Settings_ControllerCalibration_CalibrateGyro_Calibrating",
								);
							}
							case n.Complete_Success: {
								return (0, Localize)(
									"#Settings_ControllerCalibration_CalibrateGyro_Done",
								);
							}
						}
					})(s.eCalibrationState)}
				</a.a3>
			</m.Z>
			<a.CB
				focusButton="secondary"
				bOKDisabled={s.eCalibrationState != n.Complete_Success}
				strOKText={(0, Localize)("#Button_OK")}
				onOK={closeModal}
				onCancel={C}
			/>
		</c.eV>
	);
	var _;
}
export function M5(e) {
	const { controllerSettings } = e;
	const r = controllerSettings.unCapabilities & 2048;
	const [n, s, m] = uD(false);
	const u = controllerSettings.unCapabilities & 262144;
	if (r) {
		return (
			<>
				<a.xh
					label={(0, Localize)("#Settings_ControllerCalibration_CalibrateIMU")}
					onClick={() => {
						s();
					}}
				>
					{(0, Localize)("#Settings_ControllerCalibration_Calibrate")}
				</a.xh>
				<c.EN active={n}>
					{u && <H closeModal={m} {...e} />}
					{!u && <C closeModal={m} {...e} />}
				</c.EN>
			</>
		);
	} else {
		return <></>;
	}
}
export function mZ(e) {
	const { controllerSettings } = e;
	QY(controllerSettings.nControllerIndex);
	ox(controllerSettings.nControllerIndex);
	return (
		<>
			<M5 {...e} />
		</>
	);
}
((e) => {
	e[(e.CountDown = 0)] = "CountDown";
	e[(e.Calibrating = 1)] = "Calibrating";
	e[(e.Complete_Success = 2)] = "Complete_Success";
})((n ||= {}));
