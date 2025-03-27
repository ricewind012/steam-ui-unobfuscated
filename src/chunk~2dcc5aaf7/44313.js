import n from "./63696.js";
import i from "./64608.js";
import a from "./50376.js";
import s from "./83599.js";
import "./10606.js";
import "./13869.js";
import o from "./91969.js";
import { CH } from "./42898.js";
const l = o;
export function e(e) {
	(() => {
		const e = CH();
		const t = n.useMemo(() => s.fi.Get().RegisterForSettingsChanges(e), [e]);
		n.useEffect(() => {
			t.Unregister();
			return s.fi.Get().RegisterForSettingsChanges(e).Unregister;
		}, [e, t]);
	})();
	const t = [...s.fi.Get().LogNames];
	const r = t.filter((e) => s.fi.Get().IsDebugLogEnabled(e));
	const o = t.sort().map((e) => {
		const t = r.includes(e);
		return {
			data: e,
			label: (
				<div className={l.DropDownRow}>
					<div className={l.IconContainer}>{t && <a.Jlk />}</div>
					<div className={l.Label}>{e}</div>
				</div>
			),
		};
	});
	return (
		<>
			<i.m
				rgOptions={o}
				label="Enabled Debug Logs"
				onChange={(e) => s.fi.Get().ToggleDebugLogEnabled(e.data)}
				selectedOption={null}
				renderButtonValue={() => `${r.length} enabled`}
			/>
			<i.dR>
				<i.$n onClick={() => s.fi.Get().SetAllDebugLogsEnabled(true)}>
					Enable All
				</i.$n>
				<i.$n onClick={() => s.fi.Get().SetAllDebugLogsEnabled(false)}>
					Disable All
				</i.$n>
			</i.dR>
			<br />
			<i.RF
				label="Include backtrace in logs"
				checked={s.fi.Get().IncludeBacktraceInLog}
				onChange={(e) => s.fi.Get().SetIncludeBacktraceInLog(e)}
			/>
		</>
	);
}
