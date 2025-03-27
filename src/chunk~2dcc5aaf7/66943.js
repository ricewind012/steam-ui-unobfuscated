import { Localize } from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i from "./35488.js";
import a from "./64608.js";
import s from "./83529.js";
import { Iz, cg, cS, Fi, ws, Pi, KO } from "./25467.js";
import m, { k1 } from "./13688.js";
import u from "./42085.js";
import d, { A as A_1 } from "./90765.js";
import A from "./60517.js";
import p from "./57472.js";
import g, { pg } from "./13869.js";
import C from "./10606.js";
import _ from "./42318.js";
const o = s;
export function U3(e) {
	if (e?.name === "SteamController") {
		return <i.ControllerStatus />;
	}
	switch (e.type) {
		case 4:
		case 5: {
			return <i.Headphones />;
		}
		case 6:
		case 7: {
			return <i.Volume100 />;
		}
		case 10:
		case 9: {
			return <i.ControllerStatus />;
		}
		case 2: {
			return <i.Mobile />;
		}
		case 3: {
			return <i.Display />;
		}
		case 8:
		case 0:
		case 1:
		default: {
			return <i.Bluetooth />;
		}
		case 11: {
			return <i.Keyboard />;
		}
	}
}
export function TN(e) {
	const { ...t } = e;
	const r = Iz();
	return (
		<p.G
			feature={7}
			setting="system_bluetooth_enabled"
			disabled={!r}
			icon={<i.Bluetooth />}
			{...t}
		/>
	);
}
export function cQ(e) {
	const [t, r] = cg();
	return (
		<a.y4
			label={Localize("#QuickAccess_Tab_Bluetooth_ShowAllDevices")}
			checked={t}
			onChange={r}
			bottomSeparator="none"
		/>
	);
}
export function LV(e) {
	const { nDeviceId, bottomSeparator } = e;
	const i = cS(nDeviceId);
	const s = Fi(i);
	const [o, m] = ((e) => {
		if (e?.is_pairing) {
			return [
				Localize("#QuickAccess_Tab_Bluetooth_CancelPair"),
				() =>
					A.RF.CancelPair({
						device: e?.id,
					}),
			];
		} else if (e?.is_paired) {
			return [
				Localize("#QuickAccess_Tab_Bluetooth_Info"),
				(t) => pg(<M nDeviceId={e?.id} />, GetOwningWindowForEvent(t)),
			];
		} else {
			return [
				Localize("#QuickAccess_Tab_Bluetooth_Pair"),
				() =>
					A.RF.Pair({
						device: e?.id,
					}),
			];
		}
	})(i);
	if (!i) {
		return null;
	}
	const u = i.is_paired && !i.is_connected;
	return (
		<a.D0
			focusable
			label={s}
			disabled={u}
			onActivate={m}
			onOKActionDescription={o}
			icon={<U3 type={i.etype} name={i.name} />}
			childrenLayout="inline"
			childrenContainerWidth="min"
			bottomSeparator={bottomSeparator}
		>
			<W device={i} />
		</a.D0>
	);
}
function W(e) {
	const { device, bQuickAccess = false } = e;
	const a = device.is_paired && !device.is_connected;
	const s = ws(device);
	if (device.operation_in_progress) {
		return <i.Spinner />;
	} else if (a) {
		if (bQuickAccess) {
			return null;
		} else {
			return (
				<div className={o.NotConnectedLabel}>
					{Localize("#QuickAccess_Tab_Bluetooth_Not_Connected")}
				</div>
			);
		}
	} else if (s) {
		return <i.BatteryWhite acState={1} batteryLevel={s / 100} />;
	} else {
		return null;
	}
}
function B(e) {
	const { device, ...r } = e;
	if (device.wake_allowed_supported) {
		return (
			<a.y4
				{...r}
				label={Localize("#Settings_Bluetooth_AllowWake")}
				checked={device.wake_allowed ?? false}
				onChange={(e) =>
					A.RF.SetWakeAllowed({
						device: device.id,
						allowed: e,
					})
				}
			/>
		);
	} else {
		return null;
	}
}
function V(e) {
	const { device, ...r } = e;
	return (
		<a.y4
			{...r}
			label={Localize("#Settings_Bluetooth_Trusted")}
			checked={device.is_trusted ?? false}
			onChange={(e) =>
				A.RF.SetTrusted({
					device: device.id,
					trusted: e,
				})
			}
		/>
	);
}
function I(e) {
	const { device, ...r } = e;
	const i = cS(device?.id);
	const [s, m] = ((e) => {
		if (e) {
			if (e.is_connected) {
				return [
					Localize("#QuickAccess_Tab_Bluetooth_Disconnect"),
					() =>
						A.RF.Disconnect({
							device: e.id,
						}),
				];
			} else {
				return [
					Localize("#QuickAccess_Tab_Bluetooth_Connect"),
					() =>
						A.RF.Connect({
							device: e.id,
						}),
				];
			}
		} else {
			return [null, null];
		}
	})(i);
	const u = A_1(o.ForceIndentField, o.BluetoothDeviceQuickAccessField);
	if (i) {
		return (
			<a.D0
				{...r}
				className={u}
				disabled={!device.is_connected}
				focusable
				onActivate={m}
				onOKActionDescription={s}
				icon={<U3 type={device.etype} name={i.name} />}
				label={<div className={o.Text}>{i.name}</div>}
				childrenContainerWidth="min"
				padding="compact"
			>
				<W device={i} bQuickAccess />
			</a.D0>
		);
	} else {
		return null;
	}
}
export function ty() {
	const e = (() => {
		const e = k1();
		return n.useCallback(() => e.Settings("Bluetooth"), [e]);
	})();
	const t = Pi();
	const { rPairedDevices } = KO();
	return (
		<_.tH>
			<u.kn>
				<TN
					padding="compact"
					label={Localize("#QuickAccess_Tab_Bluetooth_ToggleLabel")}
					bottomSeparator="none"
					onOptionsButton={e}
					onOptionsActionDescription={Localize(
						"#Settings_Bluetooth_SettingsAction",
					)}
				/>
			</u.kn>
			{t &&
				rPairedDevices.map((t) => (
					<u.kn key={t.id}>
						<I
							device={t}
							bottomSeparator="none"
							onOptionsButton={e}
							onOptionsActionDescription={Localize(
								"#Settings_Bluetooth_SettingsAction",
							)}
						/>
					</u.kn>
				))}
			{t && (
				<u.kn>
					<a.D0
						className={o.ForceIndentField}
						label={Localize("#QuickAccess_Tab_Bluetooth_AddDevice")}
						icon={<i.Add />}
						onActivate={e}
						padding="compact"
						bottomSeparator="none"
					/>
				</u.kn>
			)}
			<a.Nu />
		</_.tH>
	);
}
const M = (e) => {
	const { nDeviceId, closeModal } = e;
	const i = cS(nDeviceId);
	const s = Fi(i);
	const m = i?.is_connected === false;
	const u = i?.is_connected === true;
	const d = n.useCallback(() => {
		A.RF.Connect({
			device: nDeviceId,
		});
		if (closeModal) {
			closeModal();
		}
	}, [closeModal, nDeviceId]);
	const p = n.useCallback(() => {
		A.RF.Disconnect({
			device: nDeviceId,
		});
		if (closeModal) {
			closeModal();
		}
	}, [closeModal, nDeviceId]);
	const g = n.useCallback(() => {
		A.RF.Forget({
			device: nDeviceId,
		});
		if (closeModal) {
			closeModal();
		}
	}, [closeModal, nDeviceId]);
	return (
		<C.eV onCancel={e.closeModal}>
			<a.Y9> {s} </a.Y9>
			<a.f3 className={o.InfoDialogBody}>
				{i && (
					<>
						<a.Nv focusable label={Localize("#Settings_Internet_MAC_Address")}>
							{i?.mac}
						</a.Nv>
						<V device={i} />
						<B device={i} />
						<a.xh
							label={Localize("#QuickAccess_Tab_Bluetooth_Unpair")}
							onClick={g}
						>
							{Localize("#QuickAccess_Tab_Bluetooth_Forget")}
						</a.xh>
						{m && (
							<a.xh
								label={Localize("#QuickAccess_Tab_Bluetooth_ConnectLabel")}
								onClick={d}
								bottomSeparator="none"
								autoFocus
							>
								{Localize("#QuickAccess_Tab_Bluetooth_Connect")}
							</a.xh>
						)}
						{u && (
							<a.xh
								label={Localize("#QuickAccess_Tab_Bluetooth_DisconnectLabel")}
								onClick={p}
								bottomSeparator="none"
								autoFocus
							>
								{Localize("#QuickAccess_Tab_Bluetooth_Disconnect")}
							</a.xh>
						)}
					</>
				)}
			</a.f3>
		</C.eV>
	);
};
