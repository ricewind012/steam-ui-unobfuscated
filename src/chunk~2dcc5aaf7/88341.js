var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./44846.js");
var a = require(/*webcrack:missing*/ "./83957.js");
var s = a;
var o = require(/*webcrack:missing*/ "./89193.js");
var l = require(/*webcrack:missing*/ "./63696.js");
var c = require("./333.js");
var m = require(/*webcrack:missing*/ "./8573.js");
var u = require("./33223.js");
var d = require("./39039.js");
var A = require(/*webcrack:missing*/ "./53833.js");
var p = require(/*webcrack:missing*/ "./49455.js");
var g = require("./16154.js");
var h = require(/*webcrack:missing*/ "./79769.js");
require(/*webcrack:missing*/ "./52451.js");
var C = require(/*webcrack:missing*/ "./41180.js");
var _ = require(/*webcrack:missing*/ "./72476.js");
var f = require(/*webcrack:missing*/ "./36885.js");
var b = require("./21920.js");
var y = require(/*webcrack:missing*/ "./93960.js");
var S = require(/*webcrack:missing*/ "./43691.js");
var w = require("./39082.js");
var B = require("./71472.js");
class v {
	m_filesToUpload = o.sH.array();
	m_strUploadPath = null;
	m_fnUploadSuccessCallback = null;
	m_bSynchronousUpload = false;
	constructor(e, t, r) {
		(0, o.Gn)(this);
		this.m_strUploadPath = e;
		this.m_fnUploadSuccessCallback = t;
		this.m_bSynchronousUpload = r;
	}
	GetFnOnUploadSuccess() {
		return this.m_fnUploadSuccessCallback;
	}
	SetFnOnUploadSuccess(e) {
		this.m_fnUploadSuccessCallback = e;
	}
	GetUploadPath() {
		return this.m_strUploadPath;
	}
	SetUploadPath(e) {
		this.m_strUploadPath = e;
	}
	GetUploadImages() {
		return this.m_filesToUpload;
	}
	ClearImages() {
		this.m_filesToUpload = o.sH.array();
	}
	DeleteUploadImage(e) {
		const t = this.m_filesToUpload.findIndex(
			(t) => e.file == t.file && e.uploadTime == t.uploadTime,
		);
		if (t >= 0) {
			this.m_filesToUpload.splice(t, 1);
			this.m_filesToUpload = [...this.m_filesToUpload];
		}
	}
	isImageFile(e) {
		return e.type.startsWith("image/");
	}
	isVideoFile(e) {
		return e.type.startsWith("video/");
	}
	isSubtitleTextFile(e) {
		return (
			e.type.startsWith("text/") ||
			(e.type == "" && e.name.split("?")[0].endsWith(".vtt")) ||
			(e.type == "" && e.name.split("?")[0].endsWith(".srt"))
		);
	}
	async AddImageForLanguage(e, t, r, n) {
		let i = false;
		await new Promise((a) => {
			if (this.isImageFile(e)) {
				const s = new FileReader();
				s.onload = () => {
					const o = new Image();
					o.onload = () => {
						const s = new w.i9(e, t, o, r, n);
						this.m_filesToUpload = [...this.m_filesToUpload, s];
						i = true;
						a();
					};
					o.onerror = (e) => {
						console.error(
							"CCloudImageUploader failed to load the image, details",
							e,
						);
						i = false;
						a();
					};
					o.src = s.result.toString();
				};
				s.readAsDataURL(e);
			} else if (this.isVideoFile(e)) {
				const n = document.createElement("video");
				n.preload = "metadata";
				n.addEventListener("loadedmetadata", () => {
					const s = new w._u(e, t, n, r);
					this.m_filesToUpload = [...this.m_filesToUpload, s];
					i = true;
					a();
				});
				n.onerror = (e) => {
					console.error(
						"CCloudImageUploader failed to load the video, details",
						e,
					);
					i = false;
					a();
				};
				n.src = URL.createObjectURL(e);
			} else if (this.isSubtitleTextFile(e)) {
				this.m_filesToUpload = [...this.m_filesToUpload, new w.DA(e, t, r)];
				i = true;
				a();
			} else {
				console.error(
					"CCloudImageUploader failed to determine file type, not image, video or subtitle",
					e,
					e.type,
				);
				i = false;
			}
		});
		return i;
	}
	async UploadAllImages(e, t, r, n, i) {
		const a = {};
		let s = {};
		for (const e of this.m_filesToUpload) {
			if (e.status === "pending") {
				const t = e.IsValidAssetType(r, n, i);
				if (!t.error && !t.needsCrop) {
					e.status = "uploading";
					const r = `${e.uploadTime}/${e.file.name}`;
					a[r] = this.UploadFile(e.file, e.file.name, e.language, t.match);
					if (this.m_bSynchronousUpload) {
						s[r] = await a[r];
					}
				}
			}
		}
		if (!this.m_bSynchronousUpload) {
			s = await (0, h.RR)(a);
		}
		Object.keys(s).forEach((r) => {
			const n = s[r];
			const i = this.m_filesToUpload.find(
				(e) => `${e.uploadTime}/${e.file.name}` === r,
			);
			if (i) {
				if (n && n.success === 1) {
					i.status = "success";
					const r = (0, B.P)(n.language, t, e);
					this.m_fnUploadSuccessCallback(
						n.image_hash,
						n.file_name,
						r,
						(function (e) {
							switch (e) {
								case 2:
									return "image/gif";
								case 1:
									return "image/jpeg";
								case 3:
									return "image/png";
								case 4:
									return "video/mp4";
								case 5:
									return "video/webm";
								case 6:
									return "text/vtt";
								case 7:
									return "text/srt";
								case 10:
									return "image/webp";
							}
							return null;
						})(n.file_type),
						i.type,
						i.width,
						i.height,
					);
				} else {
					i.status = "failed";
					i.message = n.message;
				}
			}
		});
		return s;
	}
	async UploadFile(e, t, r, n, i, a) {
		let o = null;
		const l = new FormData();
		l.append("assetfile", e, t);
		l.append("sessionid", S.TS.SESSIONID);
		l.append("elangauge", "" + r);
		l.append("originalname", t);
		if (i?.length > 0) {
			l.append("resize", i.map((e) => e.width + "x" + e.height).join(","));
		}
		if (n) {
			l.append("arttype", n);
		}
		const c = I(t);
		if (!c) {
			return {
				success: 8,
				message: "Invalid file extension, cannot determine mimetype",
			};
		}
		l.append("mimetype", c);
		try {
			o = await s.post(this.m_strUploadPath, l, {
				withCredentials: true,
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
		} catch (e) {
			const t = (0, g.H)(e);
			console.log("CCloudImageUploader.UploadFile failed ", t, e);
			o = e.response;
		}
		return o?.data;
	}
}
function I(e) {
	const t = e.toLowerCase();
	if (t.endsWith(".jpg")) {
		return "image/jpeg";
	} else if (t.endsWith(".png")) {
		return "image/png";
	} else if (t.endsWith(".gif")) {
		return "image/gif";
	} else if (t.endsWith(".mp4")) {
		return "video/mp4";
	} else if (t.endsWith(".webm")) {
		return "video/webm";
	} else if (t.endsWith(".srt")) {
		return "text/srt";
	} else if (t.endsWith(".vtt")) {
		return "text/vtt";
	} else if (t.endsWith(".webp")) {
		return "image/webp";
	} else {
		return null;
	}
}
(0, n.Cg)([o.sH], v.prototype, "m_filesToUpload", undefined);
(0, n.Cg)([y.o], v.prototype, "GetUploadImages", null);
(0, n.Cg)([y.o], v.prototype, "ClearImages", null);
(0, n.Cg)([y.o], v.prototype, "DeleteUploadImage", null);
(0, n.Cg)([y.o], v.prototype, "AddImageForLanguage", null);
(0, n.Cg)([y.o], v.prototype, "UploadAllImages", null);
export var wI;
export function AS(e, t, r, n = false) {
	if (r) {
		for (let i of r) {
			if (n ? (0, c.s4)(e, t, i) : (0, c.yu)(e, t, i)) {
				return i;
			}
		}
	}
}
(function (e) {
	e.full = "";
	e.background_main = "_960x311";
	e.background_mini = "_480x156";
	e.capsule_main = "_400x225";
	e.spotlight_main = "_1054x230";
})((wI ||= {}));
export const pb = [
	"localized_image_group",
	"link_capsule",
	"product_mobile_banner_override",
	"product_banner_override",
	"sale_section_title",
	"schedule_track_art",
	"localized_background_art",
];
export class i6 {
	constructor() {
		(0, o.Gn)(this);
		if (_.TS.WEB_UNIVERSE == "dev") {
			window.g_ClanImageStore = this;
		}
	}
	m_mapClanToImages = new Map();
	m_mapClanImageLoadPromises = new Map();
	m_imageListChangeCallback = new Map();
	m_mapClanImageLoadState = new Map();
	m_mapImageIDToResolution = new Map();
	m_curLocImageGroup = null;
	m_curLocImageGroupType = null;
	BHasImageResolution(e) {
		return this.m_mapImageIDToResolution.has(e.imageid);
	}
	GetImageResolution(e) {
		return this.m_mapImageIDToResolution.get(e.imageid);
	}
	SetImageResolution(e, t) {
		this.m_mapImageIDToResolution.set(e.imageid, t);
	}
	GetImageListCallbackForClanAccountID(e) {
		if (!this.m_imageListChangeCallback.has(e)) {
			this.m_imageListChangeCallback.set(e, new h.lu());
		}
		return this.m_imageListChangeCallback.get(e);
	}
	static GetExtensionStringForFileType(e) {
		switch (e) {
			case 1:
				return ".jpg";
			case 2:
				return ".gif";
			case 3:
				return ".png";
			case 5:
				return ".webm";
			case 4:
				return ".mp4";
			case 7:
				return ".srt";
			case 6:
				return ".vtt";
			case 10:
				return ".webp";
		}
	}
	static GetExtensionString(e) {
		return i6.GetExtensionStringForFileType(e.file_type) || ".jpg";
	}
	static GetExtensionTypeFromURL(e) {
		return (0, b.yh)(e);
	}
	static GetHashAndExt(e) {
		if (e) {
			return e.image_hash + i6.GetExtensionString(e);
		} else {
			return null;
		}
	}
	static GetThumbHashAndExt(e) {
		if (e) {
			return e.thumbnail_hash + i6.GetExtensionString(e);
		} else {
			return null;
		}
	}
	m_vecClanImageDragListener = new Array();
	AddClanImageDragListener(e) {
		if (this.m_vecClanImageDragListener.indexOf(e) == -1) {
			this.m_vecClanImageDragListener.push(e);
		}
	}
	RemoveClanImageDragListener(e) {
		let t = this.m_vecClanImageDragListener.indexOf(e);
		if (t != -1) {
			this.m_vecClanImageDragListener.splice(t, 1);
		}
	}
	GetClanImageDragListener() {
		return this.m_vecClanImageDragListener;
	}
	BHasLoadedClanImages(e) {
		return this.m_mapClanToImages.has(e.GetAccountID());
	}
	async LoadClanImages(e, t, r) {
		const n = e.GetAccountID();
		if (!!t || !this.m_mapClanImageLoadPromises.has(n)) {
			this.m_mapClanImageLoadPromises.set(
				n,
				this.InternalLoadClanImages(e, t, r),
			);
		}
		return this.m_mapClanImageLoadPromises.get(n);
	}
	async InternalLoadClanImages(e, t, r) {
		let n = e.GetAccountID();
		(0, p.w)(e && n != 0, "ClanSteamID missing:" + e);
		if (e && (!this.m_mapClanToImages.has(n) || t)) {
			let t = {};
			let i = null;
			const a =
				_.TS.COMMUNITY_BASE_URL +
				"/gid/" +
				e.ConvertTo64BitString() +
				"/getimages/";
			i = await s.get(a, {
				params: t,
				withCredentials: true,
				cancelToken: r ? r.token : null,
			});
			for (let e of i.data.images) {
				e.clanAccountID = n;
			}
			(0, o.h5)(() => {
				this.m_mapClanImageLoadState.set(n, {
					loaded: true,
				});
				this.m_mapClanToImages.set(n, i.data.images);
				this.GetImageListCallbackForClanAccountID(n).Dispatch(i.data.images);
			});
		}
		return this.m_mapClanToImages.get(n);
	}
	GetLoadState(e) {
		return this.m_mapClanImageLoadState.get(e.GetAccountID());
	}
	GetClanImages(e) {
		return this.GetClanImagesByAccount(e.GetAccountID());
	}
	GetClanImagesByAccount(e) {
		let t = this.m_mapClanToImages.get(e);
		return t || new Array();
	}
	GetFilteredClanImages(e, t) {
		let r = pU.GetClanImages(e);
		return this.GetFilteredClanImagesList(r, t);
	}
	GetFilteredClanImagesList(e, t) {
		if (t && t.trim().length > 0) {
			t = t.trim().toLowerCase();
			let r = new Array();
			for (let n of e) {
				if (n.file_name && n.file_name.toLowerCase().indexOf(t) >= 0) {
					r.push(n);
				}
			}
			return r;
		}
		return e;
	}
	GetClanImageByID(e, t) {
		let r = e.GetAccountID();
		let n = this.m_mapClanToImages.get(r);
		if (n) {
			return n.find((e) => e.imageid == t);
		} else {
			return null;
		}
	}
	GetClanImageByURL(e, t) {
		let r = e.GetAccountID();
		let n = this.m_mapClanToImages.get(r);
		if (n) {
			return n.find((e) => e.thumb_url == t || e.url == t);
		} else {
			return null;
		}
	}
	GetClanImageByFile(e, t) {
		let r = e.GetAccountID();
		let n = this.m_mapClanToImages.get(r);
		if (n) {
			return n.find((e) => e.file_name == t.name);
		} else {
			return null;
		}
	}
	GetClanImageByImageHash(e, t) {
		let r = e.GetAccountID();
		let n = this.m_mapClanToImages.get(r);
		if (n) {
			return n.find((e) => e.image_hash == t);
		} else {
			return null;
		}
	}
	async DeleteClanImageByID(e, t) {
		let r = {
			sessionid: _.TS.SESSIONID,
			imageid: t,
		};
		let n = e.GetAccountID();
		let i = await s.get(
			_.TS.COMMUNITY_BASE_URL +
				"/gid/" +
				e.ConvertTo64BitString() +
				"/deleteimage/",
			{
				params: r,
			},
		);
		if (!i || i.status != 200 || i.data.success != 1) {
			return i.data;
		}
		let a = this.m_mapClanToImages.get(n);
		let o = a.findIndex((e, r, n) => e.imageid == t);
		if (o >= 0) {
			a.splice(o, 1);
			this.GetImageListCallbackForClanAccountID(n).Dispatch([...a]);
		}
		return i.data;
	}
	async DeleteClanImage(e, t) {
		return this.DeleteClanImageByID(e, t.imageid);
	}
	static GetHashFromHashAndExt(e) {
		let t = e.substring(e.lastIndexOf("."));
		return e.substring(0, e.length - t.length);
	}
	static GetExtensionStringFromHashAndExt(e) {
		return e.substring(e.lastIndexOf("."));
	}
	static GenerateArtworkURLFromHashAndExtensions(e, t, r = wI.full, n, a) {
		if (r != wI.full || n) {
			let s = t.substring(t.lastIndexOf("."));
			let o = t.substring(0, t.length - s.length);
			if (n && a == "localized_image_group") {
				return (
					(0, f.mJ)() +
					e.GetAccountID() +
					"/" +
					o +
					"/" +
					(0, i.x6)((0, i.Lg)(n)) +
					s
				);
			} else {
				return (0, f.mJ)() + e.GetAccountID() + "/" + o + r + s;
			}
		}
		return (0, f.mJ)() + e.GetAccountID() + "/" + t;
	}
	static GenerateEditableArtworkURLFromHashAndExtension(e, t, r) {
		let n =
			_.TS.COMMUNITY_BASE_URL +
			"gid/" +
			e.ConvertTo64BitString() +
			"/showclanimage/?image_hash_and_ext=" +
			t;
		if (r) {
			n += "&lang=" + r;
		}
		return n;
	}
	static GetMimeType(e) {
		return I(e);
	}
	async AsyncGetImageResolution(e, t, r, n, i) {
		const a =
			t +
			i6.GetExtensionString({
				file_type: r,
			});
		const s = i6.GenerateEditableArtworkURLFromHashAndExtension(e, a);
		return await this.AsyncGetImageResolutionInternal(s, n, i);
	}
	async AsyncGetImageResolutionInternal(e, t, r) {
		let n = {
			success: undefined,
		};
		let i = new Image();
		i.crossOrigin = "anonymous";
		i.onerror = (t) => {
			if (!r) {
				n.err_msg =
					"Load fail on url " + e + " with error: " + (0, g.H)(t).strErrorMsg;
				console.error(n.err_msg);
			}
			n.success = 2;
		};
		i.onload = () => {
			n.width = i.width;
			n.height = i.height;
			(0, p.w)(
				n.width > 0 && n.height > 0,
				"unexpected image resolution discovered for strURL: " + e,
			);
			n.success = 1;
		};
		i.src = e;
		t.token.promise.catch((e) => {
			i.onload = () => {};
			n.success = 52;
		});
		let a = 0;
		while (n.success === undefined && a < 100) {
			await (0, C.IP)(100);
			a += 1;
		}
		if (a >= 100) {
			n.success = 16;
			n.err_msg = "We timed out processing images";
		}
		return n;
	}
	async AsyncOverlay(e, t, r, n, i, a) {
		let s;
		let o;
		let l = new Image();
		l.crossOrigin = "anonymous";
		l.onerror = (e) => {
			s = "Load fail on url " + r + " with error: " + (0, g.H)(e).strErrorMsg;
			console.error(s);
		};
		l.onload = () => {
			let e = new Image();
			e.crossOrigin = "anonymous";
			e.onerror = (e) => {
				s = "Load fail on url " + t + " with error: " + (0, g.H)(e).strErrorMsg;
				console.error(s);
			};
			e.onload = () => {
				try {
					let t = document.createElement("canvas");
					let r = t.getContext("2d");
					t.width = i;
					t.height = a;
					r.drawImage(e, 0, 0, i, a);
					let n = (i - l.width) / 2;
					let s = (a - l.height) / 2;
					r.drawImage(l, n, s);
					t.toBlob((e) => (o = e), "image/jpeg");
				} catch (e) {
					s = "Failed during image processing for " + n + " with " + e;
				}
			};
			e.src = t;
		};
		l.src = r;
		let c = 0;
		while (o === undefined && c < 100) {
			await (0, C.IP)(100);
			c += 1;
		}
		if (c >= 100 && o === undefined) {
			s = "AsyncOverlay - We timed out processing images";
		}
		if (s) {
			console.log(s);
			throw {
				success: 2,
				err_msg: s,
			};
		}
		let m = new u.V(e);
		let d = await m.UploadFile({
			uploadFile: o,
			filename: n,
			width: a,
			height: a,
		});
		return d.image_hash + i6.GetExtensionString(d);
	}
	async BDoesClanImageFileExistsOnCDNOrOrigin(e, t, r, n) {
		let i =
			_.TS.COMMUNITY_BASE_URL +
			"gid/" +
			t.ConvertTo64BitString() +
			"/hasclanimagefile";
		let a = {
			image_hash_and_ext: r,
			lang: "" + n,
		};
		return (
			(
				await s.get(i, {
					params: a,
					cancelToken: e && e.token,
				})
			).data.success == 1
		);
	}
	SetPrimaryImageForImageGroup(e, t) {
		if (
			!this.m_curLocImageGroup ||
			this.m_curLocImageGroup.primaryImage.imageid != e.imageid ||
			t != this.m_curLocImageGroupType
		) {
			this.m_curLocImageGroup = {
				primaryImage: e,
				localized_images: [],
			};
			this.m_curLocImageGroupType = t;
			this.m_curLocImageGroup.localized_images = (0, A.$Y)(
				this.m_curLocImageGroup.localized_images,
				31,
				null,
			);
		}
	}
	GetPrimaryImageForImageGroup() {
		return this.m_curLocImageGroup?.primaryImage;
	}
	ClearImageGroup() {
		this.m_curLocImageGroup = null;
		this.m_curLocImageGroupType = null;
	}
	GetLocalizedImageGroupForEdit() {
		return this.m_curLocImageGroup;
	}
	GetLocalizedImageGroupForEditAsURL(e, t) {
		if (this.m_curLocImageGroup) {
			let r = this.m_curLocImageGroup.primaryImage;
			if (this.m_curLocImageGroup.localized_images[t]) {
				return this.m_curLocImageGroup.localized_images[t];
			} else {
				return i6.GenerateArtworkURLFromHashAndExtensions(
					e,
					i6.GetHashAndExt(r),
				);
			}
		}
		return null;
	}
	GetLocalizedImageGroupForEditAsImgArray(e) {
		return this.GetAllLocalizedGroupImages();
	}
	async DetermineAvailableLocalizationForGroup(e) {
		let t = this.m_curLocImageGroup.primaryImage;
		let r = m.b.InitFromClanID(t.clanAccountID);
		let n = i6.GetHashAndExt(t);
		let i = [];
		for (let t = 0; t < 31; ++t) {
			i.push(this.BDoesClanImageFileExistsOnCDNOrOrigin(e, r, n, t));
		}
		let a = await Promise.all(i);
		(0, o.h5)(() => {
			for (let e = 0; e < 31; ++e) {
				if (a[e]) {
					this.m_curLocImageGroup.localized_images[e] =
						i6.GenerateArtworkURLFromHashAndExtensions(
							r,
							n,
							wI.full,
							e,
							this.m_curLocImageGroupType,
						);
				}
			}
		});
	}
	SetLocalizedImageGroupAtLang(e, t, r) {
		if (this.m_curLocImageGroup) {
			this.m_curLocImageGroup.localized_images[e] = r
				? i6.GenerateArtworkURLFromHashAndExtensions(
						t,
						r,
						wI.full,
						e,
						this.m_curLocImageGroupType,
					)
				: null;
		}
	}
	AddLocalizeImageUploaded(e, t) {
		let r = this.m_curLocImageGroup.primaryImage;
		if (r.image_hash == e) {
			let e = m.b.InitFromClanID(r.clanAccountID);
			let n = i6.GetHashAndExt(r);
			this.m_curLocImageGroup.localized_images[t] =
				i6.GenerateArtworkURLFromHashAndExtensions(
					e,
					n,
					wI.full,
					t,
					this.m_curLocImageGroupType,
				);
		}
	}
	GetAllLocalizedGroupImages() {
		return (
			(this.m_curLocImageGroup && this.m_curLocImageGroup.localized_images) ||
			[]
		);
	}
}
(0, n.Cg)([o.sH], i6.prototype, "m_mapClanToImages", undefined);
(0, n.Cg)([o.sH], i6.prototype, "m_mapClanImageLoadState", undefined);
(0, n.Cg)([o.sH], i6.prototype, "m_curLocImageGroup", undefined);
export const pU = new i6();
export function mr(e) {
	const t = m.b.InitFromClanID(e);
	const r = (0, d.m)("useLoadClanImages");
	const [n, i] = (0, l.useState)(() => pU.BHasLoadedClanImages(t));
	(0, l.useEffect)(() => {
		const t = m.b.InitFromClanID(e);
		if (!pU.BHasLoadedClanImages(t)) {
			pU.LoadClanImages(t, false, r).then(() => i(true));
		}
	}, [e, r]);
	return n;
}
