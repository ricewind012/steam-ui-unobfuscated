var n = require(/*webcrack:missing*/ "./72476.js");
var i = require("./93023.js");
var a = require(/*webcrack:missing*/ "./49455.js");
export const sc = 0;
const o = "061818254b2c99ac49e6626adb128ed1282a392f";
export const IU = 120;
export class by {
	m_unAppID;
	m_bInitialized = false;
	m_strName;
	m_strIconURL;
	m_dtUpdatedFromServer;
	m_eAppType;
	constructor(e) {
		this.m_unAppID = e;
	}
	get appid() {
		return this.m_unAppID;
	}
	get is_initialized() {
		return this.m_bInitialized;
	}
	get is_valid() {
		return this.m_bInitialized && !!this.m_strName;
	}
	get name() {
		return this.m_strName;
	}
	get icon_url_no_default() {
		return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, o);
	}
	get icon_url() {
		return this.BuildAppURL(this.m_strIconURL, o);
	}
	get time_updated_from_server() {
		return this.m_dtUpdatedFromServer;
	}
	get apptype() {
		return this.m_eAppType;
	}
	BIsApplicationOrTool() {
		return this.apptype == 4 || this.apptype == 2;
	}
	BuildAppURL(e, t) {
		if (e) {
			return (
				n.TS.MEDIA_CDN_COMMUNITY_URL +
				"images/apps/" +
				this.appid +
				"/" +
				e +
				".jpg"
			);
		} else {
			return (0, i.t)(t);
		}
	}
	DeserializeFromMessage(e) {
		this.m_bInitialized = true;
		this.m_strName = e.name();
		this.m_strIconURL = e.icon();
		this.m_dtUpdatedFromServer = new Date();
		this.m_eAppType = e.app_type();
	}
	DeserializeFromAppOverview(e) {
		if (e.icon_hash() && e.app_type() != 1073741824) {
			this.m_bInitialized = true;
			this.m_strName = e.display_name();
			this.m_strIconURL = e.icon_hash();
			this.m_dtUpdatedFromServer = new Date();
			this.m_eAppType = e.app_type();
		} else {
			this.m_bInitialized = false;
		}
	}
	DeserializeFromCacheObject(e) {
		try {
			this.m_strName = e.strName;
			this.m_strIconURL = e.strIconURL;
			this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer);
			this.m_eAppType = e.eAppType;
			this.m_bInitialized = true;
		} catch {}
	}
	SerializeToCacheObject() {
		(0, a.w)(
			this.m_bInitialized,
			"Attempting to serialize an uninitialized AppInfo object for caching!",
		);
		if (this.m_bInitialized) {
			return {
				strName: this.m_strName,
				strIconURL: this.m_strIconURL,
				strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
				eAppType: this.m_eAppType,
			};
		} else {
			return null;
		}
	}
}
