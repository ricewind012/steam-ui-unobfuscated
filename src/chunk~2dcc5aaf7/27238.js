import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./22222.js";
import a from "./64608.js";
import s from "./10606.js";
import o, { pg } from "./13869.js";
import { Ev, yp } from "./77347.js";
import m from "./61824.js";
import { oM } from "./46422.js";
import A, { V } from "./43802.js";
import { _ as __1 } from "./67338.js";
import { A as A_1 } from "./90765.js";
const u = m;
export function U(e) {
	pg(<C accessPoint={e} />, window);
}
const C = (e) => {
	const { accessPoint } = e;
	__1(accessPoint);
	const r = Ev();
	const o = accessPoint?.type == i.WO.Wireless;
	const m = () => {
		V({
			accessPoint: accessPoint,
			onSuccess: e.closeModal,
		});
	};
	const h = () => {
		accessPoint.Disconnect();
		if (e.closeModal) {
			e.closeModal();
		}
	};
	const C = () => {
		accessPoint.Forget();
		if (e.closeModal) {
			e.closeModal();
		}
	};
	const y = accessPoint?.isConnectable ?? false;
	const S = accessPoint?.isDisconnectable ?? false;
	const w = [];
	if (accessPoint?.isForgettable ?? false) {
		w.push(<a.$n onClick={C}>{Localize("#Settings_Internet_Forget")}</a.$n>);
	}
	if (y) {
		w.push(<a.jn onClick={m}>{Localize("#Settings_Internet_Connect")}</a.jn>);
	}
	if (S) {
		w.push(
			<a.jn onClick={h}>{Localize("#Settings_Internet_Disconnect")}</a.jn>,
		);
	}
	const B = oM();
	const v = w.length == 1;
	return (
		<s.eV onCancel={e.closeModal}>
			<a.f3 className={u.InfoDialogBody}>
				<a.BC
					label={
						<a.Y9 className={A_1(u.Header, !v && u.CenteredHeader)}>
							{accessPoint?.displayName ??
								Localize("#Internet_Network_Type_Unknown")}
						</a.Y9>
					}
					childrenLayout={v ? "inline" : "below"}
					childrenContainerWidth="fixed"
					alignItems="right"
					spacing="extra"
					highlightOnFocus={false}
				>
					{w}
				</a.BC>
				{accessPoint == null && (
					<>
						<a.D0
							disabled
							label={Localize("#Internet_Settings_Network_Not_Found")}
						/>
					</>
				)}
				{accessPoint != null && (
					<>
						{o && r && (
							<a.y4
								disabled={!accessPoint.isForgettable}
								label={Localize("#Settings_Internet_Autoconnect_Toggle")}
								checked={accessPoint.isAutoconnectEnabled}
								onChange={(e) => accessPoint.SetAutoconnectEnabled(e)}
							/>
						)}
						<a.Nv focusable label={Localize("#Settings_Internet_Status")}>
							{((e) => {
								switch (e) {
									case i.$J.NotPresent: {
										return Localize("#Internet_Network_State_NotFound");
									}
									case i.$J.Failed: {
										return Localize("#Internet_Network_State_Failed");
									}
									case i.$J.Disconnected: {
										return Localize("#Internet_Network_State_Disconnected");
									}
									case i.$J.Disconnecting: {
										return Localize("#Internet_Network_State_Disconnecting");
									}
									case i.$J.Connecting: {
										return Localize("#Internet_Network_State_Connecting");
									}
									case i.$J.Connected: {
										return Localize("#Internet_Network_State_Connected");
									}
									case i.$J.Retrying: {
										return Localize("#Internet_Network_State_Retrying");
									}
								}
							})(accessPoint.state)}
						</a.Nv>
						<a.Nv focusable label={Localize("#Settings_Internet_MAC_Address")}>
							{accessPoint.macAddress}
						</a.Nv>
						<_ accessPoint={accessPoint} />
						<F accessPoint={accessPoint} />
						{B && <B accessPoint={accessPoint} />}
					</>
				)}
			</a.f3>
			<a.wi>
				<a.BC
					alignItems="center"
					highlightOnFocus={false}
					bottomSeparator="none"
				>
					<a.jn autoFocus={!r} onClick={e.closeModal}>
						{Localize("#Button_OK")}
					</a.jn>
				</a.BC>
			</a.wi>
		</s.eV>
	);
};
function _(e) {
	const t = e.accessPoint?.IPv4Addresses ?? [];
	if (t.length == 0) {
		return null;
	}
	let r = [];
	for (let e of t) {
		r.push(
			<a.Nv
				key={`${e.ip}ip`}
				focusable
				label={Localize("#Settings_Internet_IP_Address")}
			>
				{yp(e.ip)}
			</a.Nv>,
		);
		r.push(
			<a.Nv
				key={`${e.netmask}mask`}
				focusable
				label={Localize("#Settings_Internet_Subnet_Mask")}
			>
				{yp(e.netmask)}
			</a.Nv>,
		);
	}
	return (
		<>
			<a.lr>{Localize("#Settings_Internet_IPv4_Address")}</a.lr>
			<a.Nv
				key="dhcp"
				focusable
				label={Localize("#Settings_Internet_IP_Address_Assignment")}
			>
				{e.accessPoint?.IPv4DHCPEnabled
					? Localize("#Settings_Internet_IP_Address_Assignment_Automatic")
					: Localize("#Settings_Internet_IP_Address_Assignment_Manual")}
			</a.Nv>
			{r}
		</>
	);
}
function F(e) {
	const t = e.accessPoint?.IPv6Addresses ?? [];
	if (t.length == 0) {
		return null;
	} else {
		return (
			<>
				<a.lr>{Localize("#Settings_Internet_IPv6_Address")}</a.lr>
				{t.map((e) => (
					<a.Nv
						key={e.ip}
						focusable
						label={Localize("#Settings_Internet_IP_Address")}
					>
						{e.ip}
					</a.Nv>
				))}
			</>
		);
	}
}
function B(e) {
	return (
		<>
			<a.lr>Valve Only Info</a.lr>
			<a.Nv focusable label="eSecurity">
				{e.accessPoint?.wirelessAPInfo?.esecurity ?? "None"}
			</a.Nv>
		</>
	);
}
