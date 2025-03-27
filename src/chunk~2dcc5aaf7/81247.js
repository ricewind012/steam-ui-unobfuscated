import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./64608.js";
import s, { Dt, fu, vM } from "./24496.js";
import { dm } from "./34428.js";
import l from "./42318.js";
require(/*webcrack:missing*/ "./58663.js").Message;
export function r() {
	const [e, t] = Dt();
	if (!e.bSupported) {
		return null;
	}
	const r = e.bRunning
		? Localize("#Settings_System_TrimAll_Running")
		: Localize("#Settings_System_TrimAll_Run");
	return (
		<i.xh
			disabled={e.bRunning}
			label={Localize("#Settings_System_TrimAll_Label")}
			description={Localize("#Settings_System_TrimAll_Description")}
			onClick={() => t()}
		>
			{r}
		</i.xh>
	);
}
function M(e) {
	const { drive } = e;
	const r = fu(drive.id);
	let a = "";
	if (drive.is_ejectable) {
		a += " eject";
	}
	return (
		<l.tH>
			<i.T8 name="" value="" />
			<i.T8 name="id" value={drive.id.toString()} />
			<i.T8 name="sModel" value={drive.model} />
			<i.T8 name="sVendor" value={drive.vendor} />
			<i.T8 name="sSerial" value={drive.serial} />
			<i.T8 name="nSizeBytes" value={dm(Number(drive.size_bytes), 1)} />
			<i.T8 name="sFeatures" value={a} />
			{r.map((e) => (
				<U key={e.id} blockDevice={e} />
			))}
		</l.tH>
	);
}
function U(e) {
	const { blockDevice } = e;
	let r = "";
	if (blockDevice.is_formattable) {
		r += " format";
	}
	if (blockDevice.is_read_only) {
		r += " ro";
	}
	if (blockDevice.is_root_device) {
		r += " rootdevice";
	}
	return (
		<l.tH>
			<i.T8 name="--> id" value={blockDevice.id.toString()} />
			<i.T8 name="    sPath" value={blockDevice.path} />
			<i.T8 name="    sFriendlyPath" value={blockDevice.friendly_path} />
			<i.T8 name="    rMountPath" value={blockDevice.mount_paths.join()} />
			<i.T8 name="    sLabel" value={blockDevice.label} />
			<i.T8
				name="    nSizeBytes"
				value={dm(Number(blockDevice.size_bytes), 1)}
			/>
			<i.T8 name="    sFeatures" value={r} />
			<i.T8
				name="    eContentType"
				value={
					((s = blockDevice.content_type),
					`unknown EStorageBlockContentType ( ${s} )`)
				}
			/>
			<i.T8
				name="    eFileSystemType "
				value={
					((a = blockDevice.filesystem_type),
					`unknown EStorageBlockFileSystemType ( ${a} )`)
				}
			/>
		</l.tH>
	);
	var a;
	var s;
}
export function q(e) {
	const t = vM();
	if (t.isSuccess) {
		return (
			<>
				{t.data.drives.map((e) => (
					<M key={e.id} drive={e} />
				))}
			</>
		);
	} else {
		return <div>Error fetching data</div>;
	}
}
