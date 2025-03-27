import i, { Cg } from "./34629.js";
import a from "./63696.js";
import s, { Gn } from "./89193.js";
import o from "./83599.js";
import { q3 } from "./90095.js";
import c from "./93960.js";
import m from "./45967.js";
let n;
((e) => {
	e[(e.String = 0)] = "String";
	e[(e.Proto = 1)] = "Proto";
	e[(e.Boolean = 2)] = "Boolean";
	e[(e.Float = 3)] = "Float";
	e[(e.Double = 4)] = "Double";
	e[(e.Int32 = 5)] = "Int32";
})((n ||= {}));
class u {
	m_Property;
	m_bRegistered = true;
	constructor(e) {
		Gn(this);
		this.m_Property = e;
		this.m_Property.IncrementListenerCount();
	}
	get value() {
		if (this.m_bRegistered) {
			return this.m_Property.m_value;
		}
	}
	unregister() {
		if (this.m_bRegistered) {
			this.m_Property.DecrementListenerCount();
			this.m_bRegistered = false;
		}
	}
}
Cg([s.sH], u.prototype, "m_bRegistered", undefined);
Cg([c.o], u.prototype, "unregister", null);
class d {
	m_strPath;
	Log;
	m_value = undefined;
	m_unNumListeners = 0;
	m_CallbackHandle = undefined;
	m_bHasInitiatedFirstUpdate = false;
	m_DeferredInitialErrorTimeout = undefined;
	constructor(e) {
		Gn(this);
		this.m_strPath = e;
		this.Log = new o.wd("VRPathProperties", () => e);
		this.Log.Debug("CBasePathProperty created.", this);
	}
	IncrementListenerCount() {
		this.m_unNumListeners++;
		if (this.m_unNumListeners == 1) {
			this.Log.Debug("Registering for path property changes.");
			this.m_CallbackHandle?.unregister();
			this.m_CallbackHandle =
				SteamClient?.OpenVR?.PathProperties?.RegisterForPathPropertyChange?.(
					this.m_strPath,
					() => this.UpdateValueInternal(),
				);
			this.UpdateValueInternal();
		}
	}
	DecrementListenerCount() {
		this.m_unNumListeners--;
		if (this.m_unNumListeners == 0) {
			this.Log.Debug("Unregistering for path property changes.");
			this.m_CallbackHandle?.unregister();
			this.m_CallbackHandle = undefined;
		}
	}
	async UpdateValueInternal() {
		const e = !this.m_bHasInitiatedFirstUpdate;
		this.m_bHasInitiatedFirstUpdate = true;
		try {
			await this.UpdateValue();
			this.Log.Debug("Fetched the latest value.");
			window.clearTimeout(this.m_DeferredInitialErrorTimeout);
		} catch (t) {
			const r = m.qL.IsSteamVRRunning ? o.$b.Warning : o.$b.Debug;
			if (m.qL.IsSteamVRSimulatedOnDesktop) {
				this.Log.Log(
					r,
					"Failed to updated CBasePathProperty, but this is probably expected because we're just simulating the VR dashboard on desktop:",
					t,
				);
			} else if (e) {
				this.m_DeferredInitialErrorTimeout = window.setTimeout(
					() =>
						this.Log.Log(
							r,
							"Failed to update initial value for CBasePathProperty after 5 seconds",
							t,
						),
					5000,
				);
			} else {
				this.Log.Log(r, "Failed to update value for CBasePathProperty", t);
			}
			this.m_value = undefined;
		}
	}
}
Cg([s.sH], d.prototype, "m_value", undefined);
class A extends d {
	m_ePropertyType = n.String;
	async UpdateValue() {
		this.m_value =
			await SteamClient?.OpenVR?.PathProperties?.GetStringPathProperty(
				this.m_strPath,
			);
	}
}
class p extends d {
	m_ePropertyType = n.Proto;
	m_msgClass;
	constructor(e) {
		super(e.getVRPathPropertyKey());
		this.m_msgClass = e;
	}
	async UpdateValue() {
		const e = await SteamClient?.OpenVR?.PathProperties?.GetStringPathProperty(
			this.m_strPath,
		);
		const t = e ? this.m_msgClass.deserializeBinary(e) : undefined;
		this.m_value = t?.toObject();
	}
}
class g extends d {
	m_ePropertyType = n.Boolean;
	async UpdateValue() {
		this.m_value =
			await SteamClient?.OpenVR?.PathProperties?.GetBoolPathProperty(
				this.m_strPath,
			);
	}
}
class h extends d {
	m_ePropertyType = n.Float;
	async UpdateValue() {
		this.m_value =
			await SteamClient?.OpenVR?.PathProperties?.GetFloatPathProperty(
				this.m_strPath,
			);
	}
}
class C extends d {
	m_ePropertyType = n.Double;
	async UpdateValue() {
		this.m_value =
			await SteamClient?.OpenVR?.PathProperties?.GetDoublePathProperty(
				this.m_strPath,
			);
	}
}
class _ extends d {
	m_ePropertyType = n.Int32;
	async UpdateValue() {
		this.m_value =
			await SteamClient?.OpenVR?.PathProperties?.GetInt32PathProperty(
				this.m_strPath,
			);
	}
}
class f {
	m_mapPathProperties = new Map();
	constructor() {
		Gn(this);
	}
	GetOrCreatePathProperty(e, t) {
		const r = typeof e != "string";
		const i = r ? e.getVRPathPropertyKey() : e;
		if (!this.m_mapPathProperties.has(i)) {
			if (r) {
				const t = e;
				this.m_mapPathProperties.set(i, new p(t));
			} else {
				switch (t) {
					case n.String: {
						this.m_mapPathProperties.set(i, new A(i));
						break;
					}
					case n.Boolean: {
						this.m_mapPathProperties.set(i, new g(i));
						break;
					}
					case n.Float: {
						this.m_mapPathProperties.set(i, new h(i));
						break;
					}
					case n.Double: {
						this.m_mapPathProperties.set(i, new C(i));
						break;
					}
					case n.Int32: {
						this.m_mapPathProperties.set(i, new _(i));
					}
				}
			}
		}
		return this.m_mapPathProperties.get(i);
	}
	ListenToStringPathProperty(e) {
		return new u(this.GetOrCreatePathProperty(e, n.String));
	}
	ListenToBooleanPathProperty(e) {
		return new u(this.GetOrCreatePathProperty(e, n.Boolean));
	}
	ListenToDoublePathProperty(e) {
		return new u(this.GetOrCreatePathProperty(e, n.Double));
	}
	ListenToFloatPathProperty(e) {
		return new u(this.GetOrCreatePathProperty(e, n.Float));
	}
	ListenToInt32PathProperty(e) {
		return new u(this.GetOrCreatePathProperty(e, n.Int32));
	}
	ListenToProtoPathProperty(e) {
		return new u(this.GetOrCreatePathProperty(e));
	}
}
export function GU(e) {
	const t = a.useMemo(() => y.ListenToProtoPathProperty(e), [e]);
	a.useEffect(() => t.unregister, [t]);
	return q3(() => t.value);
}
Cg([s.sH], f.prototype, "m_mapPathProperties", undefined);
const y = new f();
