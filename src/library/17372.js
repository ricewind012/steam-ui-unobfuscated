export const O =
	/((?:(?:https?:)|(?:www[.,])|(?:[!#-;=?-Z\\\^-~]+[\.,](?:(?:[a-zA-Z]{2,4}[\.?]*[\/\\\?#])|(?:(?:biz|com|gallery|in|name|net|online|org|tech|trade|xyz)(?=\W|$)))))(?:[^ː\s"<>\[\]]*[^\\s"<>\[\],.ː:])?)/;
const i = /^(steam|ftp|https?):\/\//;
export function S(e) {
	if (i.test(e)) {
		return e;
	} else {
		return "https://" + e;
	}
}
