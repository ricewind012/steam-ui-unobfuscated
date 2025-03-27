import r, { Cg } from "./34629.js";
import i from "./93960.js";
import s from "./79769.js";
class o {
	key;
	static sm_lastKey = 0;
	constructor() {
		this.key = `Modal_${o.sm_lastKey++}`;
	}
}
export class _F extends o {
	element;
	ModalUpdatedCallback = new s.lu();
	constructor(e) {
		super();
		this.element = e;
	}
	UpdateModal(e) {
		this.element = e;
		this.ModalUpdatedCallback.Dispatch();
	}
}
export class $9 extends o {
	m_OnElementReadyCallbacks = new s.lu();
	m_OnActiveModalCallbacks = new s.lu();
	constructor() {
		super();
	}
	get OnElementReadyCallbacks() {
		return this.m_OnElementReadyCallbacks;
	}
	get OnModalActiveCallbacks() {
		return this.m_OnActiveModalCallbacks;
	}
	RefModalElement(e) {
		if (e) {
			this.m_OnElementReadyCallbacks.Dispatch(e);
		}
	}
	SetActive(e) {
		this.m_OnActiveModalCallbacks.Dispatch(e);
	}
}
Cg([i.o], $9.prototype, "RefModalElement", null);
export class IA extends _F {
	m_strName;
	m_modalProps;
	m_options;
	constructor(e, t, n, r) {
		super(t);
		this.m_strName = e;
		this.m_modalProps = n;
		this.m_options = r;
	}
	get name() {
		return this.m_strName;
	}
	get modalProps() {
		return this.m_modalProps;
	}
	get options() {
		return this.m_options;
	}
}
