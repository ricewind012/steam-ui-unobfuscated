var n = require(/*webcrack:missing*/ "./83957.js");
var i = n;
export const g = new (class {
	async AxiosWrapper(e, t, r) {
		let n;
		let i = (e) => {
			if (e.data == "steam_auth_completed" && n) {
				n(true);
			}
		};
		window.addEventListener("message", i);
		try {
			while (true) {
				let i = await e();
				if (i.data.eresult == 16 && r.retrycount > 0) {
					console.log("Ajax request got timeout, retry count", r.retrycount);
					r.retrycount = r.retrycount - 1;
					if (r.retrydelayMS) {
						await new Promise((e) => setTimeout(e, r.retrydelayMS));
					}
				} else {
					if (!i.headers["x-notloggedin"]) {
						return i.data;
					}
					{
						console.log(t, "Ajax request not logged in, waiting for auth");
						let e = new Promise((e, t) => {
							n = e;
						});
						let a = new Promise((e, t) => {
							window.setTimeout(
								() => e(false),
								r.retrydelayMS ? r.retrydelayMS : 1000,
							);
						});
						if (!(await Promise.race([e, a]))) {
							console.error(t, "Auth timed out");
							return i.data;
						}
						console.log(t, "Auth complete, retrying");
					}
				}
			}
		} finally {
			window.removeEventListener("message", i);
		}
	}
	async get(e, t) {
		const { retrycount: r, retrydelayMS: n, withCredentials: a, ...s } = t;
		return this.AxiosWrapper(
			() =>
				i.get(e, {
					withCredentials: true,
					...s,
				}),
			e,
			t,
		);
	}
	async post(e, t, r) {
		const { retrycount: n, retrydelayMS: a, withCredentials: s, ...o } = r;
		return this.AxiosWrapper(
			() =>
				i.post(e, t, {
					withCredentials: true,
					...o,
				}),
			e,
			r,
		);
	}
})();
window.steamAjaxRequest = g;
