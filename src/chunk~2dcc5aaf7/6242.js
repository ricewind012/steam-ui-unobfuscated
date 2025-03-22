var _n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./79769.js");
var a = require(/*webcrack:missing*/ "./83599.js");
export class n {
	m_fnReducer;
	m_SubscribableValue = (0, i.Jc)(undefined);
	m_mapInputs = new Map();
	m_nNextInputKey = 0;
	m_strNameForLog = null;
	Log = new a.wd("ReducedValue", () => this.m_strNameForLog);
	constructor(e, t) {
		this.m_fnReducer = e;
		this.m_strNameForLog = t;
		this.RecalculateValue();
	}
	get Value() {
		return this.m_SubscribableValue.Value;
	}
	get SubscribableValue() {
		return this.m_SubscribableValue;
	}
	CreateInput(e) {
		const t = this.m_nNextInputKey++;
		return {
			Set: (r) => {
				if (this.m_mapInputs.get(t)?.value !== r) {
					const n =
						a.fi.Get().Loading || a.fi.Get().IsDebugLogEnabled("ReducedValue")
							? new Error().stack
							: null;
					this.m_mapInputs.set(t, {
						value: r,
						strDebugCallstack: n,
						strDebugName: e,
					});
					this.RecalculateValue();
				}
			},
			Delete: () => {
				if (this.m_mapInputs.delete(t)) {
					this.RecalculateValue();
				}
			},
		};
	}
	RecalculateValue() {
		const e = Array.from(this.m_mapInputs.values()) ?? [];
		const t = this.m_fnReducer(e.map((e) => e.value));
		this.Log.Debug(
			"New output value",
			t,
			"from inputs:",
			e.map((e) =>
				e.strDebugCallstack == null
					? e.value
					: {
							value: e.value,
							debugName: e.strDebugName,
							callstack: e.strDebugCallstack
								.split("\n")
								.slice(1)
								.map((e) => e.replace("    at ", "")),
						},
			),
		);
		if (t !== this.Value) {
			this.m_SubscribableValue.Set(t);
		}
	}
}
export function x(e, t) {
	const r = _n.useRef(e);
	const i = _n.useRef();
	if (r.current != e) {
		r.current = e;
		i.current.Delete();
		i.current = undefined;
	}
	if (!i.current && e) {
		i.current = e.CreateInput(t);
	}
	_n.useEffect(
		() => () => {
			i.current?.Delete();
		},
		[e],
	);
	return i.current;
}
