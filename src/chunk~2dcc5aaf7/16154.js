import n from "./83957.js";
import a from "./12176.js";
const i = n;
export function H(e) {
	if (i.isCancel(e)) {
		return {
			strErrorMsg: `Action Cancelled:${e}`,
			errorCode: 52,
		};
	}
	if (
		e.response !== undefined &&
		e.response.data &&
		typeof e.response.data == "object"
	) {
		if ("msg" in e.response.data) {
			return {
				strErrorMsg: e.response.data.msg,
				errorCode: e.response.data.success,
			};
		}
		if ("err_msg" in e.response.data) {
			return {
				strErrorMsg: e.response.data.err_msg,
				errorCode: e.response.data.success,
			};
		}
		if ("message" in e.response.data) {
			return {
				strErrorMsg: e.response.data.message,
				errorCode: e.response.data.success,
			};
		}
		if ("success" in e.response.data) {
			return {
				strErrorMsg: `error code: ${e.response.data.success}`,
				errorCode: e.response.data.success,
			};
		}
	} else if (typeof e.data == "object") {
		if ("msg" in e.data) {
			return {
				strErrorMsg: e.data.msg,
				errorCode: e.data.success,
			};
		}
		if ("err_msg" in e.data) {
			return {
				strErrorMsg: e.data.err_msg,
				errorCode: e.data.success,
			};
		}
		if ("message" in e.data) {
			return {
				strErrorMsg: e.data.message,
				errorCode: e.data.success,
			};
		}
		if ("success" in e.data) {
			return {
				strErrorMsg: `error code: ${e.data.success}`,
				errorCode: e.data.success,
			};
		}
	} else {
		if (e.success !== undefined && e.msg !== undefined) {
			return {
				strErrorMsg: e.msg,
				errorCode: e.success,
			};
		}
		if (e.success !== undefined && e.message !== undefined) {
			return {
				strErrorMsg: e.message,
				errorCode: e.success,
			};
		}
		if (e.success !== undefined && e.err_msg !== undefined) {
			return {
				strErrorMsg: e.err_msg,
				errorCode: e.success,
			};
		}
		if (typeof e == "string" && e.length > 1024) {
			console.groupCollapsed("GetMsgAndErrorCodeFromResponse cannot parse: ");
			console.warn(e);
			console.groupEnd();
		} else {
			if (typeof e == "object" && e instanceof a.w) {
				return {
					strErrorMsg: `${e.GetErrorMessage()}`,
					errorCode: e.GetEResult(),
				};
			}
			console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
		}
	}
	if (typeof e == "object" && "status" in e) {
		return {
			strErrorMsg: `Unknown Error: ${e}\nStatus Code:${e.status}`,
			errorCode: 2,
		};
	} else {
		return {
			strErrorMsg: `Unknown Error: ${e}`,
			errorCode: 2,
		};
	}
}
