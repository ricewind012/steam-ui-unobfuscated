import n from "./31760.js";
import i from "./12176.js";
import a from "./82755.js";
export class r extends n.p {
	m_CMInterface;
	Init(e) {
		this.m_CMInterface = e;
		this.m_CMInterface.messageHandlers.RegisterEMessageAction(
			9331,
			a.q8,
			(e) => {
				let t = [];
				for (let r of e.Body().emoticons()) {
					let e = r.name();
					if (e.startsWith("^")) {
						t.push({
							name: e,
						});
					} else {
						let n = {
							name: e.substr(1, e.length - 2),
						};
						let i = n.name.toLowerCase();
						if (i != n.name) {
							n.name_normalized = i;
						}
						if (r.time_last_used()) {
							n.last_used = r.time_last_used();
						}
						if (r.use_count()) {
							n.use_count = r.use_count();
						}
						if (r.time_received()) {
							n.time_received = r.time_received();
						}
						if (r.appid()) {
							n.appid = r.appid();
						}
						t.push(n);
					}
				}
				this.OnEmoticonListReceived(t);
				const r = e.Body().toObject();
				if (r.stickers) {
					this.m_rgStickers = r.stickers.map((e) => e);
				}
				if (r.effects) {
					this.m_rgEffects = r.effects.map(({ name, ...t }) => ({
						name: name,
						...t,
					}));
				}
				let n = this.m_rgStickers
					.map((e) => e.time_received)
					.reduce((e, t) => Math.max(e, t), Number.MIN_SAFE_INTEGER);
				let i = this.m_rgEffects
					.map((e) => e.time_received)
					.reduce((e, t) => Math.max(e, t), Number.MIN_SAFE_INTEGER);
				this.m_rtLastStickerOrEffect = Math.max(n, i);
			},
		);
	}
	BInitialized() {
		return !!this.m_CMInterface;
	}
	GetServerTime() {
		return this.m_CMInterface.GetServerRTime32();
	}
	RequestEmoticonListInternal() {
		this.m_CMInterface.RunWhenLoggedOn(() => {
			let e = i.w.Init(a.Ql, 9330);
			this.m_CMInterface.Send(e);
		});
	}
}
