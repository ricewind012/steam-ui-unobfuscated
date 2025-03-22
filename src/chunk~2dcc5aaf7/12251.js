const n = new (class {
	m_transport = null;
	m_registry = null;
	SetDefaultTransport(e) {
		if (this.m_transport != null) {
			console.error(
				"Multiple attempts to set a default WebUI transport: overriding previous",
			);
		}
		this.m_transport = e;
	}
	GetDefaultTransport() {
		return this.m_transport;
	}
	SetDefaultHandlerRegistry(e) {
		if (this.m_registry != null) {
			console.error(
				"Multiple attempts to set a default WebUI message handler registry: overriding previous",
			);
		}
		this.m_registry = e;
	}
	GetDefaultHandlerRegistry() {
		return this.m_registry;
	}
})();
export function OI() {
	return n;
}
