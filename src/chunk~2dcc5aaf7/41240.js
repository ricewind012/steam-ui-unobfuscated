import { FailAssertion, AssertMsg } from "../../actual_src/utils/assert.js";
import { md } from "./80222.js";
export function ER(e) {
	if ("appid" in e) {
		return `app_${e.appid}`;
	} else if ("packageid" in e) {
		return `package_${e.packageid}`;
	} else if ("bundleid" in e) {
		return `bundle_${e.bundleid}`;
	} else if ("tagid" in e) {
		return `tag_${e.tagid}`;
	} else if ("creatorid" in e) {
		return `creator_${e.creatorid}`;
	} else if ("hubcategoryid" in e) {
		return `hubcategory_${e.hubcategoryid}`;
	} else {
		FailAssertion(e, "Unknown store item id type");
		return "";
	}
}
export function HJ(e, t) {
	switch (e) {
		case 0: {
			return `app_${t}`;
		}
		case 1: {
			return `package_${t}`;
		}
		case 2: {
			return `bundle_${t}`;
		}
		case 4: {
			return `tag_${t}`;
		}
		case 5: {
			return `creator_${t}`;
		}
		case 6: {
			return `hubcategory_${t}`;
		}
		case 3:
		case -1: {
			return "";
		}
		default: {
			FailAssertion(e, `Unknown EStoreItemType ${e} ${md(e)} `);
			return "";
		}
	}
}
const o = /^(app|package|bundle|mtx|tag|creator|hubcategory)_(\d*)$/;
export function zj(e) {
	const t = e.match(o);
	if (t) {
		switch (t[1]) {
			case "app": {
				return {
					appid: parseInt(t[2]),
				};
			}
			case "package": {
				return {
					packageid: parseInt(t[2]),
				};
			}
			case "bundle": {
				return {
					bundleid: parseInt(t[2]),
				};
			}
			case "tag": {
				return {
					tagid: parseInt(t[2]),
				};
			}
			case "creator": {
				return {
					creatorid: parseInt(t[2]),
				};
			}
			case "hubcategory": {
				return {
					hubcategoryid: parseInt(t[2]),
				};
			}
		}
	}
	AssertMsg(false, `Failed to parse StoreItemID ${e}`);
}
export function RH(e) {
	const t = e.match(o);
	if (t) {
		switch (t[1]) {
			case "app": {
				return {
					item_type: 0,
					id: parseInt(t[2]),
				};
			}
			case "package": {
				return {
					item_type: 1,
					id: parseInt(t[2]),
				};
			}
			case "bundle": {
				return {
					item_type: 2,
					id: parseInt(t[2]),
				};
			}
			case "tag": {
				return {
					item_type: 4,
					id: parseInt(t[2]),
				};
			}
			case "creator": {
				return {
					item_type: 5,
					id: parseInt(t[2]),
				};
			}
			case "hubcategory": {
				return {
					item_type: 6,
					id: parseInt(t[2]),
				};
			}
		}
	}
	return {
		item_type: -1,
		id: t ? parseInt(t[2]) : 0,
	};
}
export function Jz(e) {
	const t = e.item_type ?? -1;
	const r = e.id || 0;
	switch (t) {
		case 0: {
			return {
				appid: r,
			};
		}
		case 1: {
			return {
				packageid: r,
			};
		}
		case 2: {
			return {
				bundleid: r,
			};
		}
		case 4: {
			return {
				tagid: r,
			};
		}
		case 5: {
			return {
				creatorid: r,
			};
		}
		case 6: {
			return {
				hubcategoryid: r,
			};
		}
		case 3:
		case -1: {
			return;
		}
		default: {
			FailAssertion(t, `Unknown EStoreItemType ${t} ${md(t)} `);
			return;
		}
	}
}
