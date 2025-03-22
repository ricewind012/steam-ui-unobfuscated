export class q {
	m_appid;
	m_strCollectionId;
	constructor(e, t) {
		this.m_appid = e;
		this.m_strCollectionId = t;
	}
	get appid() {
		return this.m_appid;
	}
	get strCollectionId() {
		return this.m_strCollectionId;
	}
	get key() {
		return `${this.appid}:${this.strCollectionId}`;
	}
}
