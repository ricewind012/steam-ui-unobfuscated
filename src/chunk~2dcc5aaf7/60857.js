function n(e) {
	return (
		!!e &&
		typeof e == "object" &&
		!Array.isArray(e) &&
		Object.keys(e).every((t) =>
			((e) => !!e && typeof e == "object" && !!Array.isArray(e) && e.every(i))(
				e[t],
			),
		)
	);
}
function i(e) {
	if (!e || typeof e != "object" || typeof e != "object" || Array.isArray(e)) {
		return false;
	}
	const t = e;
	return (
		typeof t.timestamp == "number" &&
		typeof t.message == "string" &&
		(t.eError === undefined || typeof t.eError == "number")
	);
}
export const C = new (class {
	m_storage;
	m_strStorageKey;
	m_queues;
	m_bInitialized = false;
	async Init(e, t) {
		if (!this.m_bInitialized) {
			this.m_storage = e;
			this.m_strStorageKey = `InflightMessageQueue_${t}`;
			try {
				const t = await e.GetObject(this.m_strStorageKey);
				if (t) {
					if (n(t)) {
						this.m_queues = t;
					} else {
						console.warn(
							`Malformed ${this.m_strStorageKey} found in storage. Resetting.`,
						);
						this.m_queues = {};
						this.WriteToStorage();
					}
				} else {
					this.m_queues = {};
				}
			} catch (e) {
				console.warn(
					"Error while parsing stored message queues. Resetting.",
					e,
				);
				this.m_queues = {};
				this.WriteToStorage();
			}
			this.m_bInitialized = true;
		}
	}
	Update(e, t) {
		if (t.length === 0) {
			delete this.m_queues[e];
		} else {
			this.m_queues[e] = t;
		}
		this.WriteToStorage();
	}
	WriteToStorage() {
		if (Object.keys(this.m_queues).length > 0) {
			this.m_storage.StoreObject(this.m_strStorageKey, this.m_queues);
		} else {
			this.m_storage.RemoveObject(this.m_strStorageKey);
		}
	}
	Get(e) {
		return this.m_queues[e] || [];
	}
})();
export class G {
	m_id;
	m_queue;
	constructor(e) {
		this.m_id = e;
		this.InitFromStorage();
	}
	async InitFromStorage() {
		this.m_queue = await C.Get(this.m_id);
	}
	Add(e) {
		const t = {
			message: e,
			timestamp: Date.now(),
		};
		this.m_queue.push(t);
		this.UpdateStoredQueue();
		return this.GetItemID(t);
	}
	get queued_messages() {
		return this.m_queue.map((e) => ({
			...e,
			id: this.GetItemID(e),
		}));
	}
	RemoveItem(e) {
		const t = this.GetItemIndex(e);
		if (t !== -1) {
			this.m_queue.splice(t, 1);
			this.UpdateStoredQueue();
		} else {
			console.warn("Could not find item to remove from send queue");
		}
	}
	UpdateStoredQueue() {
		C.Update(this.m_id, this.m_queue);
	}
	GetItemID(e) {
		return `${e.message.slice(0, 10)}_${e.timestamp}`;
	}
	GetItemIndex(e) {
		return this.m_queue.findIndex((t) => this.GetItemID(t) === e);
	}
	SetItemFailed(e, t) {
		const r = this.GetItemIndex(e);
		if (r !== -1) {
			this.m_queue[r].eError = t;
			this.UpdateStoredQueue();
		} else {
			console.warn("Could not find item to update from send queue");
		}
	}
}
