var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require(/*webcrack:missing*/ "./50376.js");
var s = require(/*webcrack:missing*/ "./83599.js");
require("./10606.js");
require("./13869.js");
var o = require("./91969.js");
var l = o;
var c = require(/*webcrack:missing*/ "./42898.js");
export function e(e) {
	(function () {
		const e = (0, c.CH)();
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
			label: n.createElement(
				"div",
				{
					className: l.DropDownRow,
				},
				n.createElement(
					"div",
					{
						className: l.IconContainer,
					},
					t && n.createElement(a.Jlk, null),
				),
				n.createElement(
					"div",
					{
						className: l.Label,
					},
					e,
				),
			),
		};
	});
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(i.m, {
			rgOptions: o,
			label: "Enabled Debug Logs",
			onChange: (e) => s.fi.Get().ToggleDebugLogEnabled(e.data),
			selectedOption: null,
			renderButtonValue: () => `${r.length} enabled`,
		}),
		n.createElement(
			i.dR,
			null,
			n.createElement(
				i.$n,
				{
					onClick: () => s.fi.Get().SetAllDebugLogsEnabled(true),
				},
				"Enable All",
			),
			n.createElement(
				i.$n,
				{
					onClick: () => s.fi.Get().SetAllDebugLogsEnabled(false),
				},
				"Disable All",
			),
		),
		n.createElement("br", null),
		n.createElement(i.RF, {
			label: "Include backtrace in logs",
			checked: s.fi.Get().IncludeBacktraceInLog,
			onChange: (e) => s.fi.Get().SetIncludeBacktraceInLog(e),
		}),
	);
}
