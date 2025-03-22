export class Q {
	m_msLastActive;
	OnTabActivate() {
		this.m_msLastActive = performance.now();
		this.InternalOnTabActivate();
	}
	GetTimeLastActivate() {
		return this.m_msLastActive || 0;
	}
	IsChatRoom() {
		return false;
	}
	IsFriendChat() {
		return false;
	}
	IsBroadcast() {
		return false;
	}
}
