import {
	BIsParent,
	CopyTextToClipboard,
} from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
export function xh(e) {
	const { text: t = "", style: r, children: i } = e;
	if (t == null) {
		return <>{i}</>;
	}
	let a;
	a =
		t instanceof Array
			? t
					.map((e) => (e ? e.toString() : ""))
					.filter((e) => e.length > 0)
					.join("\n")
			: t.toString();
	if (n.Children.count(i) == 1) {
		let e = n.Children.only(i);
		return n.cloneElement(e, {
			"data-copystyle": r,
			"data-copytext": a,
		});
	}
	console.log(
		`Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=${r} copytext=${a}`,
	);
	return <>{i}</>;
}
export function JO(e) {
	let t = e.cloneContents();
	let r = "";
	let n = "";
	let a = false;
	let s = (t.querySelector("[data-activechat=true]") || t).querySelectorAll(
		"[data-copytext]",
	);
	let o = Array.from(s).map((e) => e.getAttribute("data-copystyle") || "msg");
	for (let e = 0; e < s.length; ++e) {
		let t = s[e];
		let l = o[e];
		if (e + 1 < s.length && BIsParent(t, s[e + 1])) {
			continue;
		}
		let c = t.tagName.toLowerCase();
		let m = l.includes("block");
		let u = l.includes("timestamp");
		let d = l.includes("server");
		let A = l.includes("invite");
		let p = l.includes("emote");
		let g = l.includes("no-prefix");
		let h = l.includes("no-suffix");
		let C = l.includes("allow-embedded-newlines");
		let _ = l.includes("block-continue");
		let f = l.includes("merge-adjacent");
		let b = l.includes("force-display");
		let y = l.includes("prepend-innertext");
		let S = l.includes("append-innertext");
		let w = l.includes("prepend-newline");
		let B = l.includes("append-newline");
		let v = l.includes("speaker");
		if (!b) {
			let e = c.match(/img|iframe/) != null;
			let r = t.querySelector("img,iframe") != null;
			if (!t.innerText && !e && !r) {
				continue;
			}
		}
		if (f) {
			if (e > 0 && o[e - 1].includes("merge-adjacent")) {
				g = true;
			}
			if (e + 1 < o.length && o[e + 1].includes("merge-adjacent")) {
				h = true;
			}
		}
		if (v) {
			a = true;
		}
		let I = "";
		let E = "\n";
		if (u || v || v || d || v || d || A || v || d || A || p) {
			if (r.length != 0) {
				I += "\n";
			}
			if (d || A) {
				I += "\t\t";
			}
		} else {
			if (a) {
				I += "\t";
			}
			if (n.includes("msg") && m) {
				w = true;
			}
			if (n.includes("block") && !_) {
				w = true;
			}
		}
		let M = t.getAttribute("data-copytext");
		if (M.length == 0) {
			M = t.innerText;
		} else if (y && t.innerText.length > 0) {
			M = `${t.innerText}${l.includes("-with-newline") ? "\n" : " "}${M}`;
		} else if (S && t.innerText.length > 0) {
			M += `${l.includes("-with-newline") ? "\n" : " "}${t.innerText}`;
		}
		if (M.length != 0) {
			if (w) {
				r += "\n";
			}
			if (!g) {
				r += I;
			}
			r += C ? M : M.replace(/\n/g, E + I);
			if (!h) {
				r += E;
			}
			if (B) {
				r += "\n";
			}
		}
		n = l;
	}
	if (r.length != 0) {
		return r;
	}
}
export function pM(e) {
	const t = document.createRange();
	t.selectNode(e);
	((e) => {
		const t = JO(e);
		CopyTextToClipboard(t);
	})(t);
}
