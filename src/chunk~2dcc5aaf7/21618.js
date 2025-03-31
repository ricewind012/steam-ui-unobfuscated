import { AssertMsg } from "../../actual_src/utils/assert.js";
import { Localize } from "../../actual_src/utils/localization.js";
import { BIsDragLeaveOutOfElement } from "../../actual_src/utils/domutils.js";
import { CCallbackList } from "../../actual_src/utils/callbackutils";
import i, { hL, gc } from "./42898.js";
import a, { b6 } from "./37195.js";
import s from "./67599.js";
import o, { CS, vE, op } from "./43780.js";
import l from "./81429.js";
import f from "./63696.js";
import y from "./49787.js";
import w, { wn, T2, $B } from "./18305.js";
import { A as A_1 } from "./90765.js";
import { df, Bc } from "./45264.js";
import { EC, WA, $G, Sy, qq, O8 } from "./38602.js";
import N from "./78325.js";
import F, { st as st_1, wh, y_ as y_1 } from "./87300.js";
import { z as z_1 } from "./30814.js";
import O, { w as w_1 } from "./62738.js";
import P, { sM, tG, JJ } from "./16486.js";
import "./45772.js";
import "./74763.js";
import X, { S as S_1 } from "./17372.js";
import $ from "./64608.js";
import ee from "./10606.js";
import te from "./13869.js";
import oe from "./48139.js";
import ue from "./4452.js";
import Ae from "./91633.js";
import pe from "./12774.js";
import ge from "./94790.js";
import he from "./26853.js";
import {
	CCallbackList,
	SubscribableValue,
} from "../../actual_src/utils/callbackutils";
import be from "./76627.js";
import Re from "./69164.js";
import { ak } from "./69.js";
import { FN } from "./41537.js";
import { Nr } from "./42318.js";
import Fe from "./87429.js";
import Ue, { D5, Ue as Ue_1, cZ, hL, o4, l6, uD } from "./52451.js";
import He, { Qn } from "./72476.js";
import je from "./71594.js";
import qe from "./35488.js";
import Qe from "./98995.js";
import Ze from "./43691.js";
import { SP } from "./51076.js";
import yt from "./10325.js";
import St from "./14628.js";
import wt from "./7204.js";
import Et from "./94361.js";
import { R7 } from "./11131.js";
class m {
	m_nodes = [];
	m_schema;
	constructor(e) {
		this.m_schema = e;
	}
	AppendText(e, t) {
		let r = 0;
		for (let t = e.indexOf("\n", r); t !== -1; t = e.indexOf("\n", r)) {
			if (r != t) {
				this.m_nodes.push(this.m_schema.text(e.substring(r, t)));
			}
			this.m_nodes.push(this.m_schema.nodes.hard_break.createChecked());
			r = t + 1;
		}
		if (r < e.length) {
			this.m_nodes.push(this.m_schema.text(e.substring(r)));
		}
	}
	AppendNode(e) {
		this.m_nodes.push(e);
	}
	GetElements() {
		return this.m_nodes;
	}
}
function u(e) {
	return e
		.filter((e) => e.isText)
		.map((e) => e.text)
		.join();
}
class d extends o.Al {
	m_schemaConfig;
	m_mapPMBBNodes = new Map();
	constructor(e) {
		super(e.bbcode_dictionary, () => new m(e.pm_schema));
		this.m_schemaConfig = e;
		this.m_schemaConfig.bbcode_dictionary.forEach((e) => {
			if ("node" in e.Constructor) {
				this.m_mapPMBBNodes.set(e.Constructor.node.name, e.Constructor);
			}
		});
	}
	get schema() {
		return this.m_schemaConfig.pm_schema;
	}
	ParseBBCode(e) {
		const t = this.Parse(e, this.BBNodeToPMNode.bind(this), true);
		return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
			{},
			this.ConvertLineBreaksToParagraphs(l.FK.fromArray(t)),
		);
	}
	TryCreateNode(e, t, r) {
		let n = l.FK.from(t);
		if (!e.node.validContent(n) && e.acceptNode) {
			let r = t.filter((t) => t.type == e.acceptNode);
			if (!r.length) {
				let n = t;
				if (
					e.acceptNode.isBlock &&
					n.length > 1 &&
					n[n.length - 1].type == this.schema.nodes.hard_break
				) {
					n = n.slice(0, -1);
				}
				const i = this.m_mapPMBBNodes.get(e.acceptNode.name);
				AssertMsg(
					i,
					`Indicated acceptNode type ${e.acceptNode.name} for ${e.node.name} missing`,
				);
				r = i
					? [this.TryCreateNode(i, n, undefined)]
					: [e.acceptNode.create(undefined, n)];
			}
			n = l.FK.from(r);
		}
		return e.node.createAndFill(r, n) || e.node.create(r, n);
	}
	BBNodeToPMNode(e, t, ...r) {
		let n = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args || {}) : undefined;
		try {
			if ("convertContentToAttr" in e && e.convertContentToAttr) {
				if (!n || !n[e.convertContentToAttr]) {
					n = {
						...(n || {}),
						[e.convertContentToAttr]: u(r),
					};
				}
				if ("node" in e) {
					r = [];
				}
			}
			if ("node" in e) {
				return this.TryCreateNode(e, r, n);
			} else {
				return r.map((t) => t.mark([...t.marks, e.mark.create(n)]));
			}
		} catch (e) {
			console.error(`Error parsing [${t.tagname}] tag: ${e}`, e);
			return [];
		}
	}
	ConvertLineBreaksToParagraphs(e) {
		const t = new Map();
		const r = this.m_schemaConfig.pm_schema;
		this.m_mapPMBBNodes.forEach((e) => {
			if (e.acceptNode) {
				t.set(e.acceptNode.name, e.node);
			}
		});
		const n = [];
		const i = {
			nodes: [],
			nodeType: undefined,
			reset() {
				this.nodes = [];
				this.nodeType = undefined;
			},
			accumulate(e, t) {
				if (this.nodeType && e != this.nodeType) {
					this.emit();
				}
				this.nodeType = e;
				this.nodes.push(t);
				return true;
			},
			emit(e = false) {
				const t = this.nodeType || (e ? r.nodes.paragraph : undefined);
				if (t) {
					n.push(t.createChecked({}, this.nodes));
					this.reset();
				}
			},
		};
		e.forEach((e) => {
			const a = e.type == r.nodes.hard_break;
			const s = l.FK.from(e);
			if (a || r.topNodeType.validContent(s)) {
				const t = a && i.nodes.length > 0;
				i.emit();
				if (a) {
					if (!t) {
						n.push(r.nodes.paragraph.createChecked());
					}
				} else {
					n.push(e);
				}
			} else {
				let n;
				n = r.nodes.paragraph.validContent(s)
					? r.nodes.paragraph
					: t.get(e.type.name);
				if (n) {
					i.accumulate(n, e);
				} else {
					AssertMsg(
						false,
						`Couldn't accept ${e.type.name} at root of document, converting to paragraph`,
					);
					n = r.nodes.paragraph;
					i.accumulate(
						r.nodes.paragraph,
						r.text(
							((e) => {
								let t = "";
								e.descendants((e) => {
									if (e.isText) {
										t += e.text;
									}
								});
								return t;
							})(e),
						),
					);
				}
			}
		});
		if (!!i.nodes.length || !n.length) {
			i.emit(true);
		}
		return l.FK.from(n);
	}
}
function A(e, t) {
	return p(t.pm_schema, t.pm_to_bbcode_config, e, []);
}
function p(e, t, r, n) {
	let i = r.marks;
	let a = "";
	const s = t.mapNodes.get(r.type);
	const { tag: l, args: m } = ((e, t) => {
		if (e && e.AttrsToBBArgs) {
			const { tag: r = e.tag, args: n = {} } = e.AttrsToBBArgs(t.attrs, t);
			return {
				tag: r,
				args: n,
			};
		}
		return {
			tag: e?.tag,
			args: {},
		};
	})(s, r);
	if (l) {
		a += CS(l, m);
	}
	r.content.forEach((r) => {
		[a, i] = g(t, i, r.marks, a);
		[a, i] = ((e, t, r, n) => {
			let i;
			for (const a of r) {
				if (!t.includes(a)) {
					i ||= t.slice();
					const r = e.mapMarks.get(a.type);
					AssertMsg(r, "mark missing bbtag");
					if (r) {
						i.push(a);
						const { args: e, tag: t } = h(r, a);
						n += CS(t, e);
					}
				}
			}
			return [n, i ?? t];
		})(t, i, r.marks, a);
		if (r.type.isText) {
			a += vE(r.text || "");
		} else if (r.type == e.nodes.hard_break) {
			a += "\n";
		} else {
			a += p(e, t, r, i);
		}
	});
	[a] = g(t, i, n, a);
	if (l) {
		a += op(l);
	}
	return a;
}
function g(e, t, r, n) {
	const i = [];
	for (const e of t) {
		if (!r.includes(e)) {
			i.push(e);
		}
	}
	if (!i.length) {
		return [n, t];
	}
	const a = t.slice();
	while (
		i.length &&
		(AssertMsg(a.length, "no marks left to close"), a.length)
	) {
		const t = a.pop();
		const r = e.mapMarks.get(t.type);
		const { tag: s } = h(r, t);
		n += op(s);
		const l = i.indexOf(t);
		if (l != -1) {
			i.splice(l, 1);
		}
	}
	return [n, a];
}
function h(e, t) {
	if (e && e.AttrsToBBArgs) {
		const { tag: r = e.tag, args: n = {} } = e.AttrsToBBArgs(t.attrs, t);
		return {
			tag: r,
			args: n,
		};
	}
	return {
		tag: e?.tag,
		args: {},
	};
}
const C = new s.hs("CProseMirrorState - OnChange");
class _ {
	m_bbcode;
	m_currentDoc;
	m_bHasUncomittedChanges = false;
	m_schemaConfig;
	m_bbcodeParser;
	m_onStateChangedCallbacks = new CCallbackList();
	m_fnCommitChanges;
	m_view;
	m_state;
	constructor(e, t, r) {
		this.m_schemaConfig = e;
		this.m_bbcodeParser = new d(e);
		this.m_bbcode = t;
		this.m_fnCommitChanges = r;
		this.m_state = this.ConstructState();
	}
	CommitChanges() {
		if (this.m_currentDoc && this.m_bHasUncomittedChanges) {
			this.m_bbcode = A(this.m_currentDoc, this.m_schemaConfig);
			this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc);
			this.m_bHasUncomittedChanges = false;
		}
	}
	BHasUncomittedChanges() {
		return this.m_bHasUncomittedChanges;
	}
	UpdateState(e) {
		const t = e(this.m_view?.state.tr || this.m_state.tr);
		if (t && t.docChanged) {
			if (this.m_view) {
				this.m_view.dispatch(t);
			} else {
				this.m_state = this.m_state.apply(t);
			}
		}
	}
	get state() {
		return this.m_state;
	}
	get schemaConfig() {
		return this.m_schemaConfig;
	}
	get bbcodeParser() {
		return this.m_bbcodeParser;
	}
	get OnStateChangedCallbacks() {
		return this.m_onStateChangedCallbacks;
	}
	ConstructState() {
		const e = new s.k_({
			key: C,
			view: (e) => {
				console.assert(!this.m_view);
				this.m_view = e;
				return {
					update: (e, t) => this.OnStateChange(t, e.state),
					destroy: () => (this.m_view = undefined),
				};
			},
		});
		const t = [b6(), e];
		return s.$t.create({
			schema: this.m_schemaConfig.pm_schema,
			doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
			plugins: t,
		});
	}
	InstallPlugin(e) {
		const t = this.m_view ? this.m_view.state : this.m_state;
		if (!t.plugins.includes(e)) {
			this.m_state = t.reconfigure({
				plugins: [...t.plugins, e],
			});
			this.m_view?.updateState(t);
		}
		return () => {
			const t = this.m_view ? this.m_view.state : this.m_state;
			this.m_state = t.reconfigure({
				plugins: t.plugins.filter((t) => t != e),
			});
			this.m_view?.updateState(this.m_state);
		};
	}
	OnStateChange(e, t) {
		this.m_state = t;
		if (e.doc && e.doc != t.doc) {
			this.m_currentDoc = t.doc;
			this.m_bHasUncomittedChanges = true;
			this.m_onStateChangedCallbacks.Dispatch(this.m_currentDoc, e.doc);
		}
	}
}
function b(e, t) {
	const { msAutosaveTimeout: r = 1000, msMaxInterval: n = r * 10 } = t || {};
	const [a, s] = f.useState(false);
	const o = f.useRef(0);
	((e, t) => {
		hL(e?.OnStateChangedCallbacks, t);
	})(
		e,
		f.useCallback(() => {
			o.current = performance.now();
			s(true);
		}, []),
	);
	f.useEffect(() => {
		if (!a || !e) {
			return;
		}
		const t = performance.now();
		const i = (a = false) => {
			l = undefined;
			const c = performance.now();
			const m = c - o.current;
			if (a || m >= r || m >= r || c - t >= n) {
				console.log("Committing changes");
				e.CommitChanges();
				s(false);
			} else {
				l = window.setTimeout(i, r - m);
			}
		};
		let l = window.setTimeout(i, r);
		return () => {
			if (l) {
				window.clearTimeout(l);
				i(true);
			}
		};
	}, [a, e, r, n]);
	return {
		bDirty: a,
	};
}
const S = y;
function v(e, t, r = 0) {
	return () => [
		e,
		{
			class: t,
		},
		r,
	];
}
const I = {
	nodes: {
		paragraph: {
			content: "inline*",
			group: "block",
			parseDOM: [
				{
					tag: "p",
				},
			],
			toDOM: v("p", A_1("pm_paragraph", S.Paragraph)),
			bbCode: {
				tag: "p",
				autocloses: true,
			},
		},
		heading: {
			attrs: {
				level: {
					default: 1,
				},
			},
			content: "inline*",
			group: "block",
			defining: true,
			parseDOM: [1, 2, 3, 4, 5].map((e) => ({
				tag: `h${e}`,

				attrs: {
					level: e,
				},
			})),
			toDOM: (e) => [
				`h${e.attrs.level}`,
				{
					class: `BB_Header${e.attrs.level} ${S[`Header${e.attrs.level}`]}`,
				},
				0,
			],
			bbCode: [1, 2, 3, 4, 5].map((e) => ({
				tag: `h${e}`,

				BBArgsToAttrs: () => ({
					level: e,
				}),

				AttrsToBBArgs: (e) => ({
					tag: `h${e.level}`,
				}),
			})),
		},
		image: {
			inline: true,
			attrs: {
				src: {},
				alt: {
					default: null,
				},
				title: {
					default: null,
				},
			},
			group: "inline",
			draggable: true,
			parseDOM: [
				{
					tag: "img[src]",
					getAttrs: (e) => ({
						src: e.getAttribute("src"),
						title: e.getAttribute("title"),
						alt: e.getAttribute("alt"),
					}),
				},
			],
			toDOM(e) {
				const { src: t, alt: r, title: n } = e.attrs;
				return [
					"img",
					{
						src: t,
						alt: r,
						title: n,
						class: S.Image,
					},
				];
			},
			bbCode: {
				tag: "img",
				BBArgsToAttrs: (e) => ({
					src: e.src,
				}),
				AttrsToBBArgs: (e) => ({
					args: {
						src: e.src,
					},
				}),
				convertContentToAttr: "src",
			},
		},
		video: {
			inline: true,
			attrs: {
				webm: {
					default: "",
				},
				mp4: {
					default: "",
				},
				poster: {
					default: "",
				},
				autoplay: {
					default: true,
				},
				controls: {
					default: false,
				},
			},
			group: "inline",
			draggable: true,
			parseDOM: [
				{
					tag: "video",
					getAttrs(e) {
						if (e.tagName !== "video") {
							return;
						}
						const t = e;
						let r = "";
						let n = "";
						for (const e of t.querySelectorAll("source")) {
							if (e.type == "video/mp4") {
								r = e.src;
							} else if (e.type == "video/webm") {
								n = e.src;
							}
						}
						return {
							mp4: r,
							webm: n,
							poster: t.poster || "",
							autoplay: !!t.autoplay,
							controls: !!t.controls,
						};
					},
				},
			],
			toDOM(e) {
				const {
					webm: t,
					mp4: r,
					poster: n,
					autoplay: i,
					controls: a,
				} = e.attrs;
				const s = [];
				if (t) {
					s.push([
						"source",
						{
							src: t,
							type: "video/webm",
						},
					]);
				}
				if (r) {
					s.push([
						"source",
						{
							src: r,
							type: "video/mp4",
						},
					]);
				}
				return [
					"video",
					{
						poster: n,
						autoPlay: !!i,
						controls: !!a,
						loop: !a && !!i,
					},
					s,
				];
			},
			bbCode: {
				tag: "video",
				BBArgsToAttrs: (e) => ({
					webm: e.webm,
					mp4: e.mp4,
					poster: e.poster,
					autoplay: e.autoplay == "true",
					controls: e.controls == "true",
				}),
				AttrsToBBArgs: (e) => ({
					args: {
						webm: e.webm || "",
						mp4: e.mp4 || "",
						poster: e.poster || "",
						autoplay: e.autoplay ? "true" : "false",
						controls: e.controls ? "true" : "false",
					},
				}),
			},
		},
		bullet_list: {
			...w.fF,
			content: "list_item+",
			group: "block",
			toDOM: v("ul", S.List),
			bbCode: {
				tag: "list",
			},
		},
		ordered_list: {
			...w.o8,
			content: "list_item+",
			group: "block",
			toDOM: v("ol", S.OrderedList),
			bbCode: {
				tag: "olist",
			},
		},
		list_item: {
			...w.Aw,
			content: "paragraph block*",
			toDOM: v("li", S.ListItem),
			bbCode: {
				tag: "*",
				autocloses: true,
			},
		},
		code_block: {
			content: "inline*",
			marks: "",
			group: "block",
			code: true,
			defining: true,
			parseDOM: [
				{
					tag: "pre",
					preserveWhitespace: "full",
				},
			],
			toDOM: () => [
				"pre",
				{
					class: S.CodeBlock,
				},
				[
					"code",
					{
						class: S.Code,
					},
					0,
				],
			],
			bbCode: {
				tag: "code",
			},
		},
	},
	marks: {
		strong: {
			parseDOM: [
				{
					tag: "strong",
				},
				{
					tag: "b",
					getAttrs: (e) => e.style.fontWeight != "normal",
				},
				{
					style: "font-weight=400",
					clearMark: (e) => e.type.name == "strong",
				},
				{
					style: "font-weight",
					getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e),
				},
			],
			toDOM: v("b", A_1("BB_Bold", S.Bold)),
			bbCode: {
				tag: "b",
			},
		},
		italic: {
			parseDOM: [
				{
					tag: "i",
				},
				{
					tag: "em",
				},
				{
					style: "font-style=italic",
				},
				{
					style: "font-style=normal",
					clearMark: (e) => e.type.name == "em",
				},
			],
			toDOM: v("i", A_1("BB_Italic", S.Italic)),
			bbCode: {
				tag: "i",
			},
		},
		underline: {
			parseDOM: [
				{
					tag: "u",
				},
				{
					style: "text-decoration=underline",
				},
			],
			toDOM: v("u", A_1("BB_Underline", S.Underline)),
			bbCode: {
				tag: "u",
			},
		},
		strike: {
			parseDOM: [
				{
					style: "text-decoration=line-through",
				},
			],
			toDOM: v("span", A_1("BB_Strike", S.Strike)),
			bbCode: {
				tag: "strike",
			},
		},
		code: {
			parseDOM: [
				{
					tag: "code",
				},
			],
			toDOM: v("code", A_1("BB_Code", S.Code)),
			bbCode: {
				tag: "c",
			},
		},
		link: {
			attrs: {
				href: {},
				title: {
					default: null,
				},
			},
			inclusive: false,
			parseDOM: [
				{
					tag: "a[href]",
					getAttrs: (e) => ({
						href: e.getAttribute("href"),
						title: e.getAttribute("title"),
					}),
				},
			],
			toDOM(e) {
				const { href: t, title: r } = e.attrs;
				return [
					"a",
					{
						href: t,
						title: r,
						class: "BB_Link",
					},
					0,
				];
			},
			bbCode: {
				tag: "url",
				BBArgsToAttrs: (e) => ({
					href: e[""],
				}),
				AttrsToBBArgs: (e) => ({
					args: {
						"": e.href,
					},
				}),
				convertContentToAttr: "href",
			},
		},
	},
};
function E(e, t) {
	if (t) {
		if (Array.isArray(e)) {
			const r = e.filter((e) => t.has(e.tag));
			if (r.length > 0) {
				return r;
			} else {
				return undefined;
			}
		}
		if (t.has(e.tag)) {
			return e;
		} else {
			return undefined;
		}
	}
	return e;
}
const M = I.nodes.image;
const T = {
	nodes: {
		...I.nodes,
		cloudimage: {
			...M,
			parseDOM: [],
			bbCode: {
				...M.bbCode,
				tag: "cloudimg",
			},
		},
	},
	marks: {
		...I.marks,
	},
};
const R = new (class {
	m_ProseMirrorSchema;
	m_mapBBCodeDictionary = new Map();
	m_PMToBBCodeConfig = {
		mapNodes: new Map(),
		mapMarks: new Map(),
	};
	get pm_schema() {
		return this.m_ProseMirrorSchema;
	}
	get bbcode_dictionary() {
		return this.m_mapBBCodeDictionary;
	}
	get pm_to_bbcode_config() {
		return this.m_PMToBBCodeConfig;
	}
	ConvertAttrToBBCodeArgs(e, t) {
		const r = this.m_PMToBBCodeConfig.mapNodes.get(e.type);
		return (r && r.AttrsToBBArgs && r.AttrsToBBArgs(t, e).args) || {};
	}
	constructor(e, t) {
		const r = {
			doc: {
				content: "block+",
			},
			text: {
				group: "inline",
			},
			hard_break: {
				inline: true,
				group: "inline",
				selectable: false,
				linebreakReplacement: true,
				parseDOM: [
					{
						tag: "br",
					},
				],
				toDOM: () => ["br"],
			},
		};
		const n = new Map();
		const i = new Map();
		const a = t ? new Set(t) : undefined;
		for (const t in e.nodes) {
			const { bbCode: i, ...s } = e.nodes[t];
			const o = E(i, a);
			if (o) {
				r[t] = s;
				n.set(t, o);
			}
		}
		const s = {};
		for (const t in e.marks) {
			const { bbCode: r, ...n } = e.marks[t];
			if (!a || !!a.has(r.tag)) {
				s[t] = n;
				i.set(t, r);
			}
		}
		this.m_ProseMirrorSchema = new l.Sj({
			nodes: r,
			marks: s,
		});
		n.forEach((t, r) => {
			const n = this.m_ProseMirrorSchema.nodes[r];
			const i = e.nodes[r];
			const a = Array.isArray(t) ? t : [t];
			let s;
			if (i.content == "list_item+") {
				s = this.m_ProseMirrorSchema.nodes.list_item;
			} else if (i.content?.indexOf("paragraph") != -1) {
				s = this.m_ProseMirrorSchema.nodes.paragraph;
			}
			a.forEach(
				({
					tag: e,
					BBArgsToAttrs: t,
					AttrsToBBArgs: r,
					convertContentToAttr: i,
					...a
				}) => {
					this.m_mapBBCodeDictionary.set(e, {
						Constructor: {
							node: n,
							BBArgsToAttrs: t,
							convertContentToAttr: i,
							acceptNode: s,
						},
						skipFollowingNewline: true,
						...a,
					});
				},
			);
			const { tag: o, AttrsToBBArgs: l } = a[0];
			this.m_PMToBBCodeConfig.mapNodes.set(n, {
				tag: o,
				AttrsToBBArgs: l,
			});
		});
		i.forEach((e, t) => {
			const r = this.m_ProseMirrorSchema.marks[t];
			const { tag: n, BBArgsToAttrs: i, AttrsToBBArgs: a, ...s } = e;
			this.m_mapBBCodeDictionary.set(n, {
				Constructor: {
					mark: r,
					BBArgsToAttrs: i,
				},
				...s,
			});
			this.m_PMToBBCodeConfig.mapMarks.set(r, {
				tag: n,
				AttrsToBBArgs: a,
			});
		});
	}
})(T);
function L(e, t) {
	const { from: r, $from: n, to: i, empty: a } = e.selection;
	if (a) {
		return !!t.isInSet(e.storedMarks || n.marks());
	} else {
		return e.doc.rangeHasMark(r, i, t);
	}
}
function z(e, t, r) {
	let { $from: n, to: i, node: a } = e.selection;
	if (!a && i <= n.end()) {
		a = n.parent;
	}
	return !!a && a.hasMarkup(t, r);
}
function x(e, t, r) {
	const { $from: n, to: i } = e.selection;
	for (let e = n.sharedDepth(i); e > 0; e--) {
		const i = n.node(e);
		if (r === undefined ? i.type === t : i.hasMarkup(t, r)) {
			return n.before(e);
		}
	}
}
function _U(e, t, r = {}) {
	return new P.fV(e, (e, n, i, a) => {
		const s = r instanceof Function ? r(n) : r;
		const o = e.tr;
		if (n[1]) {
			const e = i + n[0].indexOf(n[1]);
			const t = e + n[1].length;
			if (t < a) {
				o.delete(t, a);
			}
			if (e > i) {
				o.delete(i, e);
			}
			a = i + n[1].length;
		}
		o.addMark(i, a, t.create(s));
		o.removeStoredMark(t);
		return o;
	});
}
function W(e, t, r) {
	const n = {
		left: t,
		top: r,
	};
	const i = e.posAtCoords(n);
	if (i?.pos) {
		const t = e.state.doc.resolve(i.pos);
		e.dispatch(e.state.tr.setSelection(s.U3.near(t)));
	}
}
const V = f.createContext(undefined);
function H(e) {
	const { view: t, pmState: r, children: n } = e;
	const i = f.useMemo(
		() => ({
			view: t,
			pmState: r,
		}),
		[t, r],
	);
	return f.createElement(
		V.Provider,
		{
			value: i,
		},
		n,
	);
}
const j = f.memo((e) => {
	const { schema: t, refOnUpdate: r } = e;
	q(
		f.useMemo(
			() =>
				r &&
				new s.k_({
					view: (e) => ({
						update: (...e) => r.current && r.current(...e),
					}),
				}),
			[r],
		),
	);
	q(f.useMemo(() => z_1(), []));
	q(
		f.useMemo(
			() =>
				((e) => {
					const { nodes: t, marks: r } = e;
					const n = st_1(F.I$, (e, r) => {
						if (r) {
							r(
								e.tr
									.replaceSelectionWith(t.hard_break.createChecked())
									.scrollIntoView(),
							);
						}
						return true;
					});
					const i = {
						"Mod-z": a.tN,
						"Mod-y": a.ZS,
						"Shift-Mod-z": a.ZS,
						Backspace: P.dv,
						Escape: F.hy,
						"Mod-Enter": n,
						"Shift-Enter": n,
						"Mod-b": wh(r.strong),
						"Mod-i": wh(r.italic),
						"Mod-u": wh(r.underline),
						"Mod-Shift-x": wh(r.strikethrough),
						"Ctrl-Shift-s": wh(r.strikethrough),
						Enter: wn(t.list_item),
						"Mod-[": T2(t.list_item),
						"Mod-]": $B(t.list_item),
						"Ctrl-Shift-1": y_1(t.heading, {
							level: 1,
						}),
						"Ctrl-Shift-2": y_1(t.heading, {
							level: 2,
						}),
						"Ctrl-Shift-3": y_1(t.heading, {
							level: 3,
						}),
						"Ctrl-Shift-4": y_1(t.heading, {
							level: 4,
						}),
						"Ctrl-Shift-5": y_1(t.heading, {
							level: 5,
						}),
						"Ctrl-Shift-7": y_1(t.ordered_list),
						"Ctrl-Shift-8": y_1(t.bullet_list),
						"Ctrl-Shift-0": y_1(t.paragraph),
					};
					if (r.code) {
						i["Ctrl-Shift-c"] = wh(r.code);
					}
					if (t.code_block) {
						i["Alt-Ctrl-Shift-c"] = y_1(t.code_block);
					}
					if (t.horizontal_rule) {
						i["Mod-_"] = (e, r) => {
							if (r) {
								r(
									e.tr
										.replaceSelectionWith(t.horizontal_rule.create())
										.scrollIntoView(),
								);
							}
							return true;
						};
					}
					return w_1(i);
				})(t),
			[t],
		),
	);
	q(f.useMemo(() => w_1(F.RV), []));
	q(
		f.useMemo(
			() =>
				((e) => {
					const { nodes: t, marks: r } = e;
					return sM({
						rules: [
							tG(
								/^(\d+)\.\s$/,
								t.ordered_list,
								(e) => ({
									order: parseInt(e[1]),
								}),
								(e, t) => t.childCount + t.attrs.order == parseInt(e[1]),
							),
							tG(/^\s*([-+*])\s$/, t.bullet_list),
							_U(/\*([^*]+)\*/, r.strong),
							_U(/_([^_]+)_/, r.italic),
							_U(/~([^~]+)~/, r.strike),
							_U(/`([^`]+)`/, r.code),
							JJ(/^```$/, t.code_block),
							JJ(/^(#{1,5})\s$/, t.heading, (e) => ({
								level: e[1].length,
							})),
							t.horizontal_rule &&
								((n = /^(\*\*\*|---|___)$/),
								(i = t.horizontal_rule),
								new P.fV(n, (e, t, r, n) =>
									e.tr.replaceWith(r, n, i.create()),
								)),
						].filter(Boolean),
					});
					var n;
					var i;
				})(t),
			[t],
		),
	);
	return null;
});
function q(e) {
	const { pmState: t } = f.useContext(V);
	f.useEffect(() => {
		if (t && e) {
			return t.InstallPlugin(e);
		}
	}, [e, t]);
}
function Q() {
	return f.useContext(V)?.view;
}
const Z = f.memo((e) => {
	const { specs: t } = e;
	const [r, n] = f.useState([]);
	const i = f.useRef(0);
	const a = f.useCallback((e) => {
		n((t) => [
			...t,
			{
				id: i.current++,
				nodeView: e,
			},
		]);
		return () => n((t) => t.filter((t) => t.nodeView != e));
	}, []);
	q(
		f.useMemo(() => {
			const e = {};
			t.filter(Boolean).forEach(
				(t) => (e[t.type.name] = (e, r, n) => new K(t, e, r, n, a)),
			);
			return new s.k_({
				props: {
					nodeViews: e,
				},
			});
		}, [t, a]),
	);
	return r.map(({ id: e, nodeView: t }) =>
		f.createElement(Y, {
			key: e,
			nodeView: t,
		}),
	);
});
function Y(e) {
	const {
		element: t,
		spec: r,
		getProps: n,
		onPropsChanged: i,
		actions: a,
		isSelected: s,
	} = e.nodeView;
	const [o, l] = f.useReducer((e) => e + 1, 0);
	f.useEffect(() => i.Register(l).Unregister, [i, l]);
	return N.createPortal(
		f.createElement(r.component, {
			...n(),
			selected: s(),
			...a,
		}),
		t,
	);
}
class K {
	dom;
	onPropsChanged;
	node;
	selected;
	destroy;
	constructor(e, t, r, i, a) {
		this.node = t;
		const s = r.dom.ownerDocument.createElement(
			e.type.isInline ? "span" : "div",
		);
		this.dom = s;
		const { selection: o } = r.state;
		this.selected = i() >= o.from && i() + t.nodeSize <= o.to;
		const l = {
			setAttrs: (e, t) => {
				r.dispatch(r.state.tr.setNodeMarkup(i(), t, e));
			},
			removeNode: () => {
				r.dispatch(r.state.tr.delete(i(), i() + 1));
			},
			focusView: () => {
				window.setTimeout(() => r.focus(), 1);
			},
		};
		const c = new l();
		this.destroy = a({
			element: s,
			spec: e,
			getProps: () => e.readProps(this.node),
			isSelected: () => this.selected,
			onPropsChanged: c,
			actions: l,
		});
		this.onPropsChanged = c.Dispatch.bind(c);
	}
	update(e, t, r) {
		return (
			e.type == this.node.type && ((this.node = e), this.onPropsChanged(), true)
		);
	}
	selectNode() {
		this.selected = true;
		this.onPropsChanged();
	}
	deselectNode() {
		this.selected = false;
		this.onPropsChanged();
	}
}
function re(e) {
	const {
		closeModal: t,
		strTitle: r,
		onOK: n,
		strOKText: i,
		onCancel: a,
		strCancelText: s,
		bOKDisabled: o,
		bCancelDisabled: l,
		strClassNameContent: c = "GenericFormDialog",
		children: m,
	} = e;
	const u = f.useCallback(() => {
		if (a) {
			a();
		}
		t();
	}, [a, t]);
	const d = l || u;
	return f.createElement(
		te.x_,
		{
			onEscKeypress: d,
		},
		f.createElement(
			$.U9,
			{
				onSubmit: n,
				classNameContent: c,
			},
			f.createElement($.Y9, null, r),
			m,
			f.createElement(
				$.wi,
				null,
				f.createElement($.CB, {
					strOKText: i,
					bOKDisabled: o,
					onCancel: d,
					strCancelText: s,
					bCancelDisabled: l,
				}),
			),
		),
	);
}
function ne(e, t) {
	const [r, n] = f.useState(undefined);
	const i = f.useCallback(
		(r) => {
			const i = r.state.selection;
			let a = "";
			let s = "";
			let { from: o, to: l } = i;
			const c = ((e, t, r) => {
				const { parent: n } = r;
				const i = n.childAfter(r.parentOffset);
				const a = i.node?.marks.find((e) => e.type == t);
				if (!a) {
					return;
				}
				let s = r.index() - 1;
				let o = r.start() + i.offset;
				while (s >= 0 && a.isInSet(n.child(s).marks)) {
					o -= n.child(s).nodeSize;
					s -= 1;
				}
				let l = r.index() + 1;
				let c = r.start() + i.offset + i.node.nodeSize;
				while (l < n.childCount && a.isInSet(n.child(l).marks)) {
					c += n.child(l).nodeSize;
					l += 1;
				}
				return {
					from: o,
					to: c,
					slice: e.doc.slice(o, c),
					mark: a,
				};
			})(r.state, e.marks.link, i.$from);
			const m = !!c;
			if (c) {
				s = c.mark.attrs.href;
				if (i.empty) {
					a = c.slice.content.textBetween(0, c.slice.content.size);
					o = c.from;
					l = c.to;
				} else {
					o = Math.max(c.from, i.from);
					l = Math.min(c.to, i.to);
					a = c.slice.content.textBetween(o - c.from, l - c.from);
				}
			} else if (!r.state.selection.empty) {
				a = r.state.doc.cut(
					r.state.selection.from,
					r.state.selection.to,
				).textContent;
				if (a.match(/^https?:\/\//)) {
					s = a;
				}
			}
			let u = {};
			if (t) {
				for (const e in t) {
					const r = t[e];
					const n = c ? r.fnReadValue(c.mark) : r.defaultValue;
					u[e] = n;
				}
			}
			n({
				view: r,
				strLinkText: a,
				strLinkHref: s,
				bIsUpdate: m,
				addtlAttrs: t,
				addtlAttrsValues: u,
				from: o,
				to: l,
			});
		},
		[e.marks.link, t],
	);
	const a = r?.view;
	const s = f.useCallback(() => {
		window.setTimeout(() => a.focus(), 1);
		n(undefined);
	}, [a]);
	return [
		i,
		r &&
			f.createElement(
				ee.EN,
				{
					active: true,
				},
				f.createElement(ie, {
					schema: e,
					closeModal: s,
					...r,
				}),
			),
	];
}
const ie = f.memo((e) => {
	const {
		schema: t,
		strLinkText: r,
		strLinkHref: n,
		bIsUpdate: i,
		addtlAttrs: a,
		addtlAttrsValues: o,
		closeModal: l,
		view: c,
		from: m,
		to: u,
	} = e;
	const [d, A] = f.useState(r);
	const [p, g] = f.useState(n);
	const h = f.useRef(null);
	const C = f.useRef(null);
	const [_, b] = f.useState(o);
	f.useLayoutEffect(() => {
		if (h.current?.value?.length) {
			if (C.current?.value?.length) {
				h.current.Focus();
				h.current.element.select();
			} else {
				C.current.Focus();
			}
		} else {
			h.current?.Focus();
		}
	}, []);
	const y = i
		? (0, Localize)("#FormattingToolbar_EditLink")
		: (0, Localize)("#FormattingToolbar_InsertLink");
	const S = i
		? (0, Localize)("#Button_Save")
		: (0, Localize)("#FormattingToolbar_InsertLink");
	return f.createElement(
		re,
		{
			onOK: () => {
				let e = c.state.tr;
				const r = {
					href: p,
				};
				for (const e in _) {
					r[e] = _[e];
				}
				const n = t.text(d || p, [t.marks.link.create(r)]);
				e = e.replaceRangeWith(m, u, n);
				e = e.setSelection(s.U3.create(e.doc, m + n.nodeSize, m + n.nodeSize));
				c.dispatch(e);
				l();
			},
			closeModal: l,
			strTitle: y,
			strOKText: S,
			bOKDisabled: p.length == 0,
		},
		f.createElement($.pd, {
			ref: h,
			value: d,
			onChange: (e) => A(e.currentTarget.value),
			label: (0, Localize)("#FormattingToolbar_LinkText"),
		}),
		f.createElement($.pd, {
			ref: C,
			value: p,
			onChange: (e) => g(e.currentTarget.value),
			label: (0, Localize)("#FormattingToolbar_LinkAddress"),
		}),
		a &&
			f.createElement(ae, {
				addtlAttrs: a,
				values: _,
				setValues: b,
			}),
	);
});
function ae(e) {
	const { addtlAttrs: t, values: r, setValues: n } = e;
	return f.createElement(
		f.Fragment,
		null,
		Object.keys(t).map((e) =>
			f.createElement(se, {
				key: e,
				attrName: e,
				fnRender: t[e].fnRenderEditor,
				value: r[e],
				setValues: n,
			}),
		),
	);
}
const se = f.memo((e) => {
	const { attrName: t, fnRender: r, value: n, setValues: i } = e;
	return r(
		n,
		f.useCallback(
			(e) =>
				i((r) => ({
					...r,
					[t]: e,
				})),
			[t],
		),
	);
});
const le = f.memo((e) => {
	const { linkMarkType: t, onURLPasted: r, schema: n, onClickURL: i = me } = e;
	const a = f.useRef(i);
	a.current = i;
	const [o, c] = f.useState();
	const [m, u] = f.useState();
	const [d, A] = f.useState();
	const [p, g] = ne(n);
	const h = f.useMemo(
		() =>
			new s.k_({
				props: {
					handleClickOn(e, r, n, i, s, o) {
						if (o && (s.ctrlKey || s.button == 1)) {
							const e = n
								.resolve(r - i)
								.marks()
								.find((e) => e.type == t);
							if (e) {
								a.current(e.attrs.href, s.view);
								s.preventDefault();
								return true;
							}
						}
						return false;
					},
					handleKeyDown: (e, t) =>
						t.key == "k" &&
						(!!t.metaKey || !!t.ctrlKey) &&
						!t.shiftKey &&
						!t.altKey &&
						(p(e), true),
					clipboardTextParser(e, i, a, s) {
						let o;
						let c = [];
						while ((o = e.match(X.O))) {
							if (o.index > 0) {
								c.push(n.text(e.substring(0, o.index)));
							}
							const i = S_1(o[0]);
							const a = r && r(i);
							if (a && a !== "default") {
								if (a !== "remove") {
									c.push(a);
								}
							} else {
								c.push(
									n.text(o[0], [
										t.create({
											href: i,
										}),
									]),
								);
							}
							e = e.substring(o.index + o[0].length);
						}
						if (e.length) {
							c.push(n.text(e));
						}
						return new l.Ji(l.FK.from(c), i.start(), i.end());
					},
					handleDOMEvents: {
						mouseover: (e, t) => {
							for (
								let e = t.target;
								e && e != t.currentTarget;
								e = e.parentElement
							) {
								if (e.nodeName == "A" && "getBoundingClientRect" in e) {
									const t = e.getBoundingClientRect();
									c(t.left + t.width / 2);
									u(t.bottom + 2);
									A(e);
									return;
								}
							}
							A(undefined);
						},
						mouseleave: (e, t) => {
							A(undefined);
							return false;
						},
					},
				},
			}),
		[t, p, r, n],
	);
	q(h);
	let C = null;
	if (d && o && m) {
		C = f.createElement(ce, {
			top: m,
			left: o,
			href: d.getAttribute("href"),
		});
	}
	return f.createElement(f.Fragment, null, C, g);
});
function ce(e) {
	const { top: t, left: r, href: n } = e;
	const [i, a] = f.useState(0);
	const s = f.useRef(null);
	f.useLayoutEffect(() => {
		a(s.current.getBoundingClientRect().width);
	}, [t, r, n]);
	const o = {
		top: `${t}px`,
		left: `${Math.max(r - i / 2, 12)}px`,
	};
	return f.createElement(
		"div",
		{
			className: oe.Hover,
			style: o,
			ref: s,
		},
		f.createElement(
			"div",
			{
				className: oe.Link,
			},
			n,
		),
		f.createElement(
			"div",
			{
				className: oe.LinkHelp,
			},
			(0, Localize)("#UserGameNotes_ClickToOpenLink"),
		),
	);
}
function me(e, t) {
	t.open(e);
}
const de = ue;
function fe(e) {
	e.preventDefault();
}
function ye(e) {
	const {
		children: t,
		ProcessFileUpload: r,
		FetchImageURL: n,
		bAllowImageHotLinking: i = false,
	} = e;
	const [a] = f.useState(() => ({
		manager: new ve(r, n, i),
	}));
	const { manager: s } = a;
	s.SetProps(r, n, i);
	return f.createElement(
		Ie.Provider,
		{
			value: a,
		},
		f.createElement(Me, {
			manager: s,
		}),
		f.createElement(
			Te,
			{
				manager: s,
			},
			t,
		),
	);
}
const Se = f.memo((e) => {
	const { nodeType: t } = e;
	const r = Ee();
	const {
		placeholderElements: n,
		createPlaceholder: i,
		replacePlaceholder: a,
	} = ((e, t = "PlaceholderPlugin") => {
		const [r, n] = f.useState([]);
		const [i] = f.useState(
			() =>
				new s.k_({
					key: new s.hs(t),
					state: {
						init: () => Ae.zF.empty,
						apply(t, r) {
							r = r.map(t.mapping, t.doc);
							const i = t.getMeta(this) || [];
							for (const a of i) {
								if (a?.add) {
									const { id: i, data: s } = a.add;
									const o = (t, r) => {
										const a = document.createElement(e);
										n((e) => [
											...e,
											{
												id: i,
												element: a,
												data: s,
											},
										]);
										return a;
									};
									const l = (e) => {
										n((t) => t.filter((t) => t.element != e));
									};
									const c = Ae.NZ.widget(a.add.pos, o, {
										id: i,
										destroy: l,
									});
									r = r.add(t.doc, [c]);
								} else if (a?.remove) {
									r = r.remove(
										r.find(undefined, undefined, (e) => e.id == a.remove.id),
									);
								}
							}
							return r;
						},
					},
					props: {
						decorations(e) {
							return this.getState(e);
						},
					},
				}),
		);
		q(i);
		const a = Q();
		const o = f.useRef(0);
		const l = f.useCallback(
			(e, r, n) => {
				const s = `${t}_${o.current++}`;
				let l = n || a.state.tr;
				if (r === undefined) {
					if (!l.selection.empty) {
						l.deleteSelection();
					}
					r = l.selection.from;
				}
				const c = n?.getMeta(i) || [];
				l.setMeta(i, [
					...c,
					{
						add: {
							id: s,
							pos: r,
							data: e,
						},
					},
				]);
				if (!n) {
					a.dispatch(l);
				}
				return s;
			},
			[i, t, a],
		);
		const c = f.useCallback(
			(e) => {
				const t = i.getState(a.state);
				const r = t?.find(undefined, undefined, (t) => t.id == e);
				if (r?.length) {
					return r[0].from;
				} else {
					return undefined;
				}
			},
			[a, i],
		);
		const m = f.useCallback(
			(e, t) => {
				const r = c(e);
				return (
					!!r &&
					(t
						? a.dispatch(
								a.state.tr.replaceWith(r, r, t).setMeta(i, [
									{
										remove: {
											id: e,
										},
									},
								]),
							)
						: a.dispatch(
								a.state.tr.setMeta(i, [
									{
										remove: {
											id: e,
										},
									},
								]),
							),
					true)
				);
			},
			[i, c, a],
		);
		return {
			placeholderElements: r,
			createPlaceholder: l,
			findPlaceholder: c,
			replacePlaceholder: m,
		};
	})("span", "FileUploadPlaceholder");
	((e, t) => {
		q(
			f.useMemo(
				() =>
					new s.k_({
						props: {
							handlePaste(r, n, i) {
								if (e.BAllowImageHotLinking()) {
									return false;
								}
								const a = [];
								i.content.descendants((e, r) => {
									if (e.type == t) {
										a.push({
											url: e.attrs.src,
											pos: r,
										});
									}
								});
								if (a.length) {
									let t = r.state.tr;
									if (!t.selection.empty) {
										t.deleteSelection();
									}
									let n = t.selection.from;
									let s = 0;
									for (const r of a) {
										const a = i.content.cut(s, r.pos - 1);
										t.insert(n, a);
										n += a.size;
										e.QueueUploadFileByURL(r.url, n, t);
										s = r.pos + 1;
									}
									t.insert(n, i.content.cut(s));
									t.scrollIntoView();
									r.dispatch(t);
									return true;
								}
							},
							handleDOMEvents: {
								paste(t, r) {
									if (r.clipboardData?.files?.length > 0) {
										r.preventDefault();
										for (const t of r.clipboardData.files) {
											e.UploadFile(t);
										}
										return true;
									}
								},
							},
						},
					}),
				[t, e],
			),
		);
	})(r, t);
	const o = Q();
	f.useEffect(() => r.RegisterEditor(o, i, a), [r, o, i, a]);
	return f.createElement(
		f.Fragment,
		null,
		n.map(({ id: e, element: t, data: r }) =>
			f.createElement(Be, {
				key: e,
				element: t,
				data: r,
			}),
		),
	);
});
class we extends Error {
	constructor(e) {
		super(e);
	}
}
function Be(e) {
	const { element: t, data: r } = e;
	const n = "file" in r ? r.file : undefined;
	const i = f.useMemo(() => n && URL.createObjectURL(n), [n]);
	const a = "url" in r ? r.url : i;
	return N.createPortal(
		f.createElement(
			"span",
			{
				className: be.FileUploadPlaceholder,
			},
			f.createElement(
				"div",
				{
					className: be.Throbber,
				},
				f.createElement(he.t, {
					size: "medium",
					position: "center",
				}),
			),
			f.createElement("img", {
				src: a,
				className: be.PendingImage,
			}),
		),
		t,
	);
}
class ve {
	m_fnProcessFileUpload;
	m_fnFetchImageURL;
	m_bAllowImageHotLinking;
	m_errors = SubscribableValue([]);
	m_view;
	m_fnCreatePlaceholder;
	m_fnReplacePlaceholder;
	constructor(e, t, r) {
		this.m_fnProcessFileUpload = e;
		this.m_fnFetchImageURL = t;
		this.m_bAllowImageHotLinking = r;
	}
	SetProps(e, t, r) {
		this.m_fnProcessFileUpload = e;
		this.m_fnFetchImageURL = t;
		this.m_bAllowImageHotLinking = r;
		AssertMsg(
			!this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
			"Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
		);
	}
	RegisterEditor(e, t, r) {
		AssertMsg(!this.m_view, "Duplicate registration");
		this.m_view = e;
		this.m_fnCreatePlaceholder = t;
		this.m_fnReplacePlaceholder = r;
		return () => {
			if (
				this.m_view == e &&
				this.m_fnCreatePlaceholder == t &&
				this.m_fnReplacePlaceholder == r
			) {
				this.m_view = undefined;
				this.m_fnCreatePlaceholder = undefined;
				this.m_fnReplacePlaceholder = undefined;
			}
		};
	}
	AddError(e) {
		this.m_errors.Set([...this.m_errors.Value, e]);
	}
	GetErrors() {
		return this.m_errors;
	}
	ClearErrors() {
		this.m_errors.Set([]);
	}
	GetViewPosition(e, t) {
		const r = this.m_view?.posAtCoords({
			left: e,
			top: t,
		});
		return r?.pos;
	}
	async UploadFile(e, t) {
		if (!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) {
			this.AddError("No editor registered to handle file upload");
		}
		const r = this.m_fnCreatePlaceholder(
			{
				file: e,
			},
			t,
		);
		return this.ProcessFile(e, r);
	}
	BAllowImageHotLinking() {
		return this.m_bAllowImageHotLinking;
	}
	QueueUploadFileByURL(e, t, r) {
		if (!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) {
			this.AddError("No editor registered to handle file upload");
		}
		if (!this.m_fnFetchImageURL) {
			console.warn(
				"The file upload manager does not have a way to fetch image URLs, so we cannot accept pasted <img> tags.",
			);
			return;
		}
		console.log(`QueueUploadFileByURL: ${e} at pos ${t}`);
		const n = this.m_fnCreatePlaceholder(
			{
				url: e,
			},
			t,
			r,
		);
		this.FetchURLAndProcess(e, n);
	}
	async FetchURLAndProcess(e, t) {
		try {
			const r = new URL(e);
			const n = await this.m_fnFetchImageURL(e);
			const i = new File(
				[n],
				decodeURIComponent(r.pathname?.replace(/^.*\//, "") || "image"),
				{
					type: n.type,
				},
			);
			await this.ProcessFile(i, t);
		} catch (r) {
			this.AddError(`Unable to process URL: ${e}`);
			this.m_fnReplacePlaceholder(t);
		}
	}
	async ProcessFile(e, t) {
		let r;
		try {
			console.log(`Processing file upload: "${e.name}"`);
			r = await this.m_fnProcessFileUpload(e);
		} catch (e) {
			if (e instanceof we) {
				this.AddError(e.message);
			} else {
				this.AddError(`Error proccessing file upload: ${e}`);
			}
		}
		if (r) {
			this.m_fnReplacePlaceholder(t, r);
		} else {
			this.m_fnReplacePlaceholder(t);
		}
	}
}
const Ie = f.createContext(undefined);
function Ee() {
	return f.useContext(Ie).manager;
}
const Me = f.memo((e) => {
	const { manager: t } = e;
	const r = gc(t.GetErrors());
	if (r.length) {
		return f.createElement(
			ge.E,
			{
				active: true,
			},
			f.createElement(pe.o0, {
				bAlertDialog: true,
				strTitle: (0, Localize)("#Error_Generic"),
				strDescription: r.map((e, t) =>
					f.createElement(
						"div",
						{
							key: t,
						},
						e,
					),
				),
				strOKButtonText: (0, Localize)("#Button_OK"),
				onOK: () => t.ClearErrors(),
				onCancel: () => t.ClearErrors(),
			}),
		);
	} else {
		return null;
	}
});
function Te(e) {
	const { manager: t, children: r } = e;
	const n = f.useCallback(
		(e, r) => {
			for (const n of e) {
				t.UploadFile(n, t.GetViewPosition(r.clientX, r.clientY));
			}
		},
		[t],
	);
	const [i, a] = ((e) => {
		const [t, r] = f.useState(false);
		return [
			{
				onDragEnter: f.useCallback((e) => {
					if (
						(e.dataTransfer.files && e.dataTransfer.files[0]) ||
						(e.dataTransfer.types && e.dataTransfer.types[0] == "Files")
					) {
						r(true);
					}
				}, []),
				onDragLeave: f.useCallback((e) => {
					if (BIsDragLeaveOutOfElement(e)) {
						r(false);
					}
				}, []),
				onDragEnd: f.useCallback(() => r(false), []),
				onDragOver: t ? fe : undefined,
				onDrop: f.useCallback(
					(t) => {
						if (t.dataTransfer.files?.length) {
							e(t.dataTransfer.files, t);
							t.preventDefault();
						}
						r(false);
					},
					[e],
				),
			},
			t,
		];
	})(n);
	return f.cloneElement(r, {
		...i,
		...r.props,
	});
}
const Ge = "noborder";
const Oe = "equalcells";
const Pe = Fe.of({
	tableGroup: "block",
	cellContent: "paragraph block*",
	cellAttributes: {
		class: {
			default: S.TableCell,
			setDOMAttr: (e, t) => {
				t.class = e;
			},
		},
	},
});
const Le = {
	BBArgsToAttrs: (e) => {
		const t = {};
		if (e.colspan) {
			t.colspan = parseInt(e.colspan);
		}
		if (e.rowspan) {
			t.rowspan = parseInt(e.rowspan);
		}
		if (e.colwidth) {
			t.colwidth = e.colwidth.split(",").map((e) => parseInt(e));
		}
		return t;
	},
	AttrsToBBArgs: (e) => {
		const t = {};
		if (e.colspan && e.colspan != 1) {
			t.colspan = e.colspan.toString();
		}
		if (e.rowspan && e.rowspan != 1) {
			t.rowspan = e.rowspan.toString();
		}
		if (e.colwidth) {
			t.colwidth = e.colwidth.join(",");
		}
		return {
			args: t,
		};
	},
};
Pe.table;
Pe.table_row;
v("tr", S.TableRow);
Pe.table_cell;
Pe.table_header;
const ze = f.memo((e) => {
	const { schema: t } = e;
	const r = !!("table" in t.nodes) && !!t.nodes.table.spec.tableRole;
	q(
		f.useMemo(
			() =>
				r &&
				Fe.AL({
					View: xe,
				}),
			[r],
		),
	);
	q(f.useMemo(() => r && Fe.LF(), [r]));
	return null;
});
class xe extends Fe.Qg {
	constructor(e, t) {
		super(e, t);
		this.SetTableClass(e);
	}
	update(e) {
		return !!super.update(e) && (this.SetTableClass(e), true);
	}
	SetTableClass(e) {
		this.table.className = A_1(
			S.Table,
			e.attrs[Ge] && S.NoBorder,
			e.attrs[Oe] && S.EqualCells,
		);
	}
}
const We = Nr((e) => {
	const {
		pmState: t,
		className: r,
		refOnUpdate: n,
		refView: i,
		bSpellcheckEnabled: a = true,
		panelProps: s,
		children: o,
	} = e;
	const [l, c] = f.useState();
	const [m, u] = f.useState();
	f.useEffect(() => {
		if (t && l) {
			u(
				new Ae.Lz(l, {
					state: t.state,
				}),
			);
		}
	}, [t, l]);
	f.useEffect(() => () => m?.destroy(), [m]);
	D5(i, m);
	const {
		refDiv: d,
		onActivate: A,
		onGamepadDirection: p,
	} = ((e) => {
		const t = f.useRef();
		const r = FN();
		const n = f.useCallback(() => {
			r.ShowVirtualKeyboard();
			let n = e?.hasFocus();
			if (!n) {
				e.focus();
				let r = e.dom.childNodes;

				for (let i of r) {
					let a = i.offsetTop;
					if (a !== undefined && a >= t.current.scrollTop) {
						let t = i.getBoundingClientRect();
						W(e, t.left, t.top);
						break;
					}
				}
			}
		}, [r, e]);
		const i = f.useCallback((e) => e.currentTarget == e.target, []);
		const a = ak(t, null, null, i);
		return {
			refDiv: t,
			onActivate: n,
			onGamepadDirection: a,
		};
	})(m);
	const g = Ue_1(d, c);
	if (!t) {
		return null;
	}
	const { schemaConfig: h, bbcodeParser: C } = t;
	return f.createElement(
		H,
		{
			view: m,
			pmState: t,
		},
		f.createElement(Re.Z, {
			key: `editordiv_${a}`,
			className: A_1(r, be.Container),
			ref: g,
			spellCheck: a,
			focusable: true,
			onActivate: A,
			onOKActionDescription: (0, Localize)("#UserGameNotes_Edit"),
			onGamepadDirection: p,
			...s,
		}),
		f.createElement(j, {
			refOnUpdate: n,
			schema: h.pm_schema,
		}),
		f.createElement(Ve, {
			parser: C,
			schema: h.pm_schema,
		}),
		f.createElement(ze, {
			schema: h.pm_schema,
		}),
		o,
	);
});
const Ve = f.memo((e) => {
	const { parser: t, schema: r } = e;
	q(
		f.useMemo(
			() =>
				new s.k_({
					props: {
						transformPasted: (e, n) =>
							((e, t, r) => {
								let n = false;
								r.content.forEach((e) => {
									if (e.type == t) {
										n = true;
									}
								});
								if (!n) {
									return r;
								}
								const i = e.ConvertLineBreaksToParagraphs(r.content);
								return l.Ji.maxOpen(i);
							})(t, r.nodes.hard_break, e),
					},
				}),
			[t, r],
		),
	);
	return null;
});
const Ye = () => f.useContext(Xe);
function Ke(e) {
	const { view: t, refUpdateToolbar: r, children: n } = e;
	const i = f.useRef();
	i.current ||= new CCallbackList();
	f.useEffect(() => {
		cZ(r, () => i.current.Dispatch(t));
		return () => cZ(r, undefined);
	}, [t, r]);
	const a = f.useMemo(
		() => ({
			callbacks: i.current,
			view: t,
		}),
		[t],
	);
	if (t) {
		return f.createElement(
			Xe.Provider,
			{
				value: a,
			},
			n,
		);
	} else {
		return null;
	}
}
const Xe = f.createContext(undefined);
function Je() {
	return f.createElement("div", {
		className: be.Gap,
	});
}
function $e() {
	return f.createElement("div", {
		className: be.Spacer,
	});
}
function et(e) {
	return f.createElement(
		"div",
		{
			className: A_1(e.className, be.ToolbarRowOverflowContainer),
		},
		f.createElement(
			Re.Z,
			{
				className: be.ToolbarRow,
				"flow-children": "row",
			},
			e.children,
		),
	);
}
function tt(e) {
	const { nodeType: t, attrs: r, children: n, ...i } = e;
	const { callbacks: a, view: s } = Ye();
	const [o, l] = f.useState(() => z(s.state, t, r));
	const c = f.useCallback((e) => l(z(e.state, t, r)), [t, r]);
	hL(a, c);
	const m = f.useMemo(() => F.y_(t, r), [r, t]);
	return f.createElement(nt, {
		...i,
		command: m,
		toggled: o,
		children: n,
	});
}
function rt(e) {
	const { mark: t, children: r, ...n } = e;
	const { callbacks: i, view: a } = Ye();
	const [s, o] = f.useState(() => L(a.state, t));
	const l = f.useCallback((e) => o(L(e.state, t)), [t]);
	hL(i, l);
	const c = f.useMemo(() => F.wh(t), [t]);
	return f.createElement(nt, {
		...n,
		command: c,
		toggled: s,
		children: r,
	});
}
function nt(e) {
	const { command: t, toggled: r, children: n, ...i } = e;
	const { view: a, callbacks: s } = Ye();
	const [o, l] = f.useState(() => t(a.state));
	hL(
		s,
		f.useCallback((e) => l(t(e.state)), [t]),
	);
	f.useEffect(() => l(t(a.state)), [t, a]);
	const c = !o && !r;
	return f.createElement(
		at,
		{
			...i,
		},
		f.createElement(
			$.$n,
			{
				className: A_1(be.CommandButton, r && be.Toggled),
				onMouseDown: (e) => {
					e.preventDefault();
					t(a.state, a.dispatch, a);
				},
				disabled: c,
				focusable: !c,
			},
			n,
		),
	);
}
function it(e) {
	const {
		onClick: t,
		toggled: r,
		disabled: n,
		children: i,
		className: a,
		...s
	} = e;
	return f.createElement(
		at,
		{
			...s,
		},
		f.createElement(
			$.$n,
			{
				className: A_1(be.CommandButton, r && be.Toggled, a),
				onMouseDown: (e) => {
					e.preventDefault();
					t();
				},
				disabled: n === true,
			},
			i,
		),
	);
}
function at(e) {
	const { tooltip: t, keyboardShortcut: r, children: n } = e;
	if (!t) {
		return n;
	}
	const i = r
		? f.createElement(st, {
				tooltip: t,
				keyboardShortcut: r,
			})
		: t;
	return f.createElement(
		Qe.Gq,
		{
			toolTipContent: i,
			direction: "bottom",
		},
		n,
	);
}
function st(e) {
	const { tooltip: t, keyboardShortcut: r } = e;
	return f.createElement(
		"div",
		{
			className: be.TooltipWithShortcut,
		},
		f.createElement("div", null, (0, Localize)(t)),
		f.createElement(
			"div",
			null,
			f.createElement(ot, {
				keyboardShortcut: r,
			}),
		),
	);
}
function ot(e) {
	const { keyboardShortcut: t } = e;
	const r = t.split("-");
	const n = r.pop();
	return f.createElement(
		f.Fragment,
		null,
		r.map((e, t) =>
			f.createElement(
				f.Fragment,
				{
					key: t,
				},
				f.createElement(
					lt,
					null,
					f.createElement(ct, {
						modifier: e,
					}),
				),
				" + ",
			),
		),
		f.createElement(lt, null, n.toUpperCase()),
	);
}
function lt(e) {
	return f.createElement(
		"span",
		{
			className: be.KeyCap,
		},
		e.children,
	);
}
function ct(e) {
	const { modifier: t } = e;
	switch (t) {
		case "Mod": {
			if (Ze.TS.PLATFORM == "macos") {
				return "⌘";
			} else {
				return "Ctrl";
			}
		}
		case "Shift": {
			Ze.TS.PLATFORM;
			return "Shift";
		}
		case "Ctrl": {
			if (Ze.TS.PLATFORM == "macos") {
				return "Control";
			} else {
				return "Ctrl";
			}
		}
		case "Alt": {
			if (Ze.TS.PLATFORM == "macos") {
				return "Option";
			} else {
				return "Alt";
			}
		}
	}
	return null;
}
function mt(e) {
	const { schema: t, addtlAttrs: r, children: n } = e;
	const { callbacks: i, view: a } = Ye();
	const [s, o] = f.useState(() => L(a.state, t.marks.link));
	const l = f.useCallback((e) => o(L(e.state, t.marks.link)), [t]);
	hL(i, l);
	const [c, m] = ne(t, r);
	return f.createElement(
		f.Fragment,
		null,
		m,
		f.createElement(
			it,
			{
				onClick: () => c(a),
				toggled: s,
				tooltip: "#FormattingToolbar_InsertLink",
				keyboardShortcut: "Mod-k",
			},
			n,
		),
	);
}
function ut() {
	return f.createElement(
		f.Fragment,
		null,
		f.createElement(
			nt,
			{
				tooltip: "#FormattingToolbar_Undo",
				keyboardShortcut: "Mod-z",
				command: a.tN,
			},
			f.createElement(qe.Undo, null),
		),
		f.createElement(
			nt,
			{
				tooltip: "#FormattingToolbar_Redo",
				keyboardShortcut: Ze.TS.PLATFORM == "macos" ? "Mod-Shift-z" : "Mod-y",
				command: a.ZS,
			},
			f.createElement(qe.Redo, null),
		),
	);
}
function dt(e) {
	const { schema: t } = e;
	return f.createElement(
		f.Fragment,
		null,
		f.createElement(
			rt,
			{
				tooltip: "#FormattingToolbar_Bold",
				keyboardShortcut: "Mod-b",
				mark: t.marks.strong,
			},
			f.createElement(qe.TextBold, null),
		),
		f.createElement(
			rt,
			{
				tooltip: "#FormattingToolbar_Italic",
				keyboardShortcut: "Mod-i",
				mark: t.marks.italic,
			},
			f.createElement(qe.TextItalic, null),
		),
		f.createElement(
			rt,
			{
				tooltip: "#FormattingToolbar_Underline",
				keyboardShortcut: "Mod-u",
				mark: t.marks.underline,
			},
			f.createElement(qe.TextUnderline, null),
		),
		"strike" in t.marks &&
			f.createElement(
				rt,
				{
					tooltip: "#FormattingToolbar_Strike",
					keyboardShortcut: "Mod-Shift-x",
					mark: t.marks.strike,
				},
				f.createElement(qe.TextStrikethrough, null),
			),
		"code" in t.marks &&
			f.createElement(
				rt,
				{
					tooltip: "#FormattingToolbar_InlineCode",
					keyboardShortcut: "Ctrl-Shift-c",
					mark: t.marks.code,
				},
				f.createElement(qe.TextCode, null),
			),
	);
}
function At(e) {
	const { schema: t } = e;
	return f.createElement(
		tt,
		{
			tooltip: "#FormattingToolbar_Paragraph",
			keyboardShortcut: "Ctrl-Shift-0",
			nodeType: t.nodes.paragraph,
		},
		f.createElement(qe.TextParagraph, null),
	);
}
function pt(e) {
	const { schema: t, maxLevel: r = 1, levels: n } = e;
	const i = r + n - 1;
	return f.createElement(
		f.Fragment,
		null,
		r <= 1 &&
			f.createElement(
				tt,
				{
					tooltip: "#FormattingToolbar_HeadingLevel1",
					keyboardShortcut: "Ctrl-Shift-1",
					nodeType: t.nodes.heading,
					attrs: {
						level: 1,
					},
				},
				f.createElement(qe.TextH1, null),
			),
		r <= 2 &&
			i >= 2 &&
			f.createElement(
				tt,
				{
					tooltip: "#FormattingToolbar_HeadingLevel2",
					keyboardShortcut: "Ctrl-Shift-2",
					nodeType: t.nodes.heading,
					attrs: {
						level: 2,
					},
				},
				f.createElement(qe.TextH2, null),
			),
		r <= 3 &&
			i >= 3 &&
			f.createElement(
				tt,
				{
					tooltip: "#FormattingToolbar_HeadingLevel3",
					keyboardShortcut: "Ctrl-Shift-3",
					nodeType: t.nodes.heading,
					attrs: {
						level: 3,
					},
				},
				f.createElement(qe.TextH3, null),
			),
		r <= 4 &&
			i >= 4 &&
			f.createElement(
				tt,
				{
					tooltip: "#FormattingToolbar_HeadingLevel4",
					keyboardShortcut: "Ctrl-Shift-4",
					nodeType: t.nodes.heading,
					attrs: {
						level: 4,
					},
				},
				f.createElement(qe.TextH4, null),
			),
		r <= 5 &&
			i >= 5 &&
			f.createElement(
				tt,
				{
					tooltip: "#FormattingToolbar_HeadingLevel5",
					keyboardShortcut: "Ctrl-Shift-5",
					nodeType: t.nodes.heading,
					attrs: {
						level: 5,
					},
				},
				f.createElement(qe.TextH5, null),
			),
	);
}
function gt(e) {
	const { schema: t, showIndentButtonsAsNeeded: r = false } = e;
	const { callbacks: n, view: i } = Ye();
	const { bullet_list: a, ordered_list: s, list_item: o } = t.nodes;
	const l = f.useMemo(() => w.T2(o), [o]);
	const c = f.useMemo(() => w.$B(o), [o]);
	const [m, u] = f.useState(() => l(i.state) || c(i.state));
	hL(
		n,
		f.useCallback(
			(e) => {
				u(l(e.state) || c(e.state));
			},
			[l, c],
		),
	);
	return f.createElement(
		f.Fragment,
		null,
		f.createElement(
			ht,
			{
				tooltip: "#FormattingToolbar_BulletedList",
				keyboardShortcut: "Ctrl-Shift-8",
				list_type: a,
				list_item: o,
			},
			f.createElement(qe.TextBullets, null),
		),
		s && false,
		(!r || m) &&
			f.createElement(
				f.Fragment,
				null,
				f.createElement(
					nt,
					{
						tooltip: "#FormattingToolbar_OutdentList",
						keyboardShortcut: "Mod-[",
						command: l,
					},
					f.createElement(qe.TextOutdent, null),
				),
				f.createElement(
					nt,
					{
						tooltip: "#FormattingToolbar_IndentList",
						keyboardShortcut: "Mod-[",
						command: c,
					},
					f.createElement(qe.TextIndent, null),
				),
			),
	);
}
function ht(e) {
	const { list_type: t, list_item: r, children: n, ...i } = e;
	const { callbacks: a, view: s } = Ye();
	const o = f.useCallback((e) => x(e.state, t) !== undefined, [t]);
	const [l, c] = f.useState(() => o(s));
	const m = f.useMemo(() => w.Sd(t), [t]);
	const u = f.useMemo(() => w.T2(r), [r]);
	hL(
		a,
		f.useCallback(
			(e) => {
				c(o(e));
			},
			[o],
		),
	);
	return f.createElement(
		nt,
		{
			...i,
			toggled: l,
			command: l ? u : m,
		},
		n,
	);
}
function Ct(e) {
	const { schema: t, addtlAttrs: r } = e;
	return f.createElement(
		mt,
		{
			schema: t,
			addtlAttrs: r,
		},
		f.createElement(qe.TextLink, null),
	);
}
function _t(e) {
	const { bSpellcheckEnabled: t, setSpellcheckEnabled: r } = e;
	return f.createElement(
		it,
		{
			tooltip: t
				? "#FormattingToolbar_DisableSpellcheck"
				: "#FormattingToolbar_EnableSpellcheck",
			toggled: t,
			onClick: () => r(!t),
		},
		f.createElement(qe.SpellCheck, null),
	);
}
function bt(e) {
	const {
		schema: t,
		view: r,
		refUpdateToolbar: n,
		className: i,
		bSpellcheckEnabled: a,
		setSpellcheckEnabled: s,
	} = e;
	const [o, l] = SP("FormattingToolbar_Expanded", false);
	return f.createElement(
		Ke,
		{
			refUpdateToolbar: n,
			view: r,
		},
		f.createElement(
			"div",
			{
				className: A_1(be.Toolbar, i),
			},
			f.createElement(
				et,
				null,
				f.createElement(ut, null),
				f.createElement(Je, null),
				f.createElement(dt, {
					schema: t,
				}),
				f.createElement($e, null),
				f.createElement(
					it,
					{
						onClick: () => l(!o),
						tooltip: "#FormattingToolbar_ExpandOptions",
					},
					f.createElement(qe.Chevron, {
						direction: o ? "up" : "down",
					}),
				),
			),
			f.createElement(
				je.R,
				{
					visible: o,
				},
				f.createElement(
					et,
					null,
					f.createElement(At, {
						schema: t,
					}),
					f.createElement(pt, {
						schema: t,
						levels: 5,
					}),
					f.createElement(
						tt,
						{
							nodeType: t.nodes.code_block,
							tooltip: (0, Localize)("#FormattingToolbar_CodeBlock"),
						},
						f.createElement(qe.TextCodeBlock, null),
					),
					f.createElement(Je, null),
					f.createElement(gt, {
						schema: t,
					}),
					f.createElement(Je, null),
					f.createElement(Ct, {
						schema: t,
					}),
					f.createElement($e, null),
					s &&
						f.createElement(_t, {
							bSpellcheckEnabled: a,
							setSpellcheckEnabled: s,
						}),
				),
			),
		),
	);
}
function Bt(e) {
	const { deleteNote: t, hidden: r, pmState: n } = e;
	const [i, a] = f.useState();
	const s = f.useRef();
	const o = EC();
	const l = WA();
	const c = Qn();
	const m = {
		onSecondaryButton: () => t(),
		onSecondaryActionDescription: (0, Localize)("#UserGameNotes_DeleteNote"),
		onDragOver: (e) => e.stopPropagation(),
	};
	f.useEffect(() => {
		if (i && !r) {
			if (
				!!St.TS.IN_CLIENT ||
				!window.matchMedia(`(max-width: ${wt.narrowWidth})`).matches
			) {
				i.focus();
			}
		}
	}, [i, r]);
	return f.createElement(
		f.Fragment,
		null,
		!c &&
			f.createElement(bt, {
				schema: R.pm_schema,
				view: i,
				refUpdateToolbar: s,
				className: yt.Toolbar,
				bSpellcheckEnabled: o,
				setSpellcheckEnabled: l,
			}),
		f.createElement(
			We,
			{
				pmState: n,
				className: yt.EditorInput,
				refOnUpdate: s,
				refView: a,
				bSpellcheckEnabled: o,
				panelProps: m,
			},
			f.createElement(vt, {
				schema: R.pm_schema,
			}),
		),
	);
}
const vt = f.memo((e) => {
	const { schema: t } = e;
	const r = $G();
	const n = f.useMemo(
		() => [
			{
				type: t.nodes.cloudimage,
				component: It,
				readProps: (e) => ({
					src: e.attrs.src,
				}),
			},
		],
		[t.nodes.cloudimage],
	);
	return f.createElement(
		f.Fragment,
		null,
		f.createElement(Se, {
			nodeType: t.nodes.image,
		}),
		f.createElement(le, {
			linkMarkType: t.marks.link,
			schema: t,
			onClickURL: r,
		}),
		f.createElement(Z, {
			specs: n,
		}),
	);
});
function It(e) {
	const { src: t, selected: r } = e;
	const [n, i] = f.useState();
	const a = Sy();
	f.useEffect(() => {
		let e = false;
		a.ResolveImageURL(t).then((t) => {
			if (e) {
				URL.revokeObjectURL(t);
			} else {
				i(t);
			}
		});
		return () => {
			e = true;
			i(undefined);
		};
	}, [a, t]);
	if (n) {
		return f.createElement("img", {
			className: de(S.Image, r && "ProseMirror-selectednode"),
			src: n,
		});
	} else {
		return null;
	}
}
const Tt = 10;
export function U(e) {
	const { note: t, hidden: r = false } = e;
	const [n, i] = f.useState(undefined);
	const a = f.useRef(false);
	const s = Qn();
	const { mutate: o } = df(t, i);
	const [l, c] = f.useState();
	f.useEffect(() => {
		if (!a.current) {
			const e = new _(R, t.content, (e, t) =>
				o({
					title: Gt(t),
					bbcode: e,
				}),
			);
			((e, t) => {
				e.UpdateState((e) => {
					const r = [];
					e.doc.descendants((e, n) => {
						if (
							e.type === t.nodes.image &&
							e.attrs.src?.match(/^\/gamenotes\//)
						) {
							r.push({
								node: e,
								pos: n,
							});
						}
					});
					if (r.length) {
						r.reverse().forEach(({ node: r, pos: n }) => {
							const i = r.attrs.src.replace(/^\/gamenotes\//, "");
							const a = t.nodes.cloudimage.create({
								src: i,
							});
							e = e.replaceWith(n, n + r.nodeSize, a);
						});
						e.setMeta("addToHistory", false);
						return e;
					}
				});
			})(e, R.pm_schema);
			c(e);
		}
	}, [o, t.content]);
	const { bDirty: m } = b(l, {
		msAutosaveTimeout: Tt * 1000,
	});
	f.useEffect(() => {
		if (m && !a.current) {
			a.current = true;
			Et.y.ReportTrackedAction("/GameNotes/NoteModified");
		}
	}, [m]);
	f.useEffect(() => {
		if (r && l) {
			l.CommitChanges();
		}
	}, [r, l]);
	const u = R7().ownerWindow;
	o4(
		u.document,
		f.useCallback(
			(e) => {
				if (e == "hidden") {
					l.CommitChanges();
				}
			},
			[l],
		),
	);
	l6(
		window,
		"beforeunload",
		f.useCallback(
			(e) => {
				if (!He.TS.IN_STEAMUI && l.BHasUncomittedChanges()) {
					l.CommitChanges();
					e.preventDefault();
				}
			},
			[l],
		),
	);
	const d = ((e, t) => {
		const r = Sy();
		return f.useCallback(
			async (n) => {
				const i = await r.UploadImage(`notes_${e}_images/`, n);
				return t.nodes.cloudimage.create({
					src: i,
				});
			},
			[r, e, t],
		);
	})(t.appid, R.pm_schema);
	const A = qq();
	const p = Bc(t, A);
	return f.createElement(
		ye,
		{
			ProcessFileUpload: d,
			bAllowImageHotLinking: true,
		},
		f.createElement(
			"div",
			{
				className: yt.NoteEditorArea,
			},
			f.createElement(kt, {
				error: n,
				dismissError: () => i(undefined),
			}),
			f.createElement(Bt, {
				deleteNote: p.mutate,
				hidden: r,
				pmState: l,
			}),
			!s &&
				f.createElement(Dt, {
					note: t,
					bDirty: m,
				}),
		),
	);
}
function kt(e) {
	const { error: t, dismissError: r } = e;
	if (t) {
		return f.createElement(
			ee.EN,
			{
				active: true,
			},
			f.createElement(ee.o0, {
				bAlertDialog: true,
				strTitle: (0, Localize)("#Error_Generic"),
				strDescription: (0, Localize)("#UserGameNotes_ErrorSavingNotes", t),
				closeModal: r,
			}),
		);
	} else {
		return null;
	}
}
function Dt(e) {
	const { note: t, bDirty: r } = e;
	const [n, i, a] = uD(false);
	const s = O8();
	const o = qq();
	const { mutate: l, isPending: c } = Bc(t, o);
	const m = f.useCallback(() => {
		if (!r && t.not_persisted) {
			l();
		} else {
			i();
		}
	}, [r, t, l, i]);
	return f.createElement(
		"div",
		{
			className: yt.NoteActions,
		},
		n &&
			f.createElement(Ft, {
				note: t,
				closeModal: a,
				deleteNote: l,
				deletePending: c,
			}),
		f.createElement(
			Qe.he,
			{
				toolTipContent: "#UserGameNotes_DeleteNote",
				direction: "top",
			},
			f.createElement(
				$.$n,
				{
					onClick: m,
				},
				f.createElement(qe.Trash, null),
			),
		),
		s &&
			f.createElement(Nt, {
				bDirty: r,
			}),
	);
}
function Nt(e) {
	const { bDirty: t } = e;
	const r = qq();
	if (t) {
		return f.createElement(
			$.jn,
			{
				onClick: () => r(),
				className: yt.CloseWindowButton,
			},
			(0, Localize)("#Button_SaveAndClose"),
		);
	} else {
		return f.createElement(
			$.$n,
			{
				onClick: () => r(),
				className: yt.CloseWindowButton,
			},
			(0, Localize)("#Button_Close"),
		);
	}
}
function Ft(e) {
	const { note: t, closeModal: r, deleteNote: n, deletePending: i } = e;
	return f.createElement(
		ee.EN,
		{
			active: true,
		},
		f.createElement(ee.o0, {
			strTitle: (0, Localize)("#UserGameNotes_DeleteNote"),
			strDescription: (0, Localize)("#UserGameNotes_PromptDelete"),
			onOK: () => n(),
			bOKDisabled: i,
			strOKButtonText: (0, Localize)("#Button_Delete"),
			closeModal: r,
		}),
	);
}
function Gt(e) {
	let t = "";
	for (let r = 0; r < e.content.childCount; r++) {
		const n = e.content.child(r);
		if (n.isText) {
			t += n.text;
		} else {
			t = t.trim();
			if (t.length > 4) {
				return t;
			}
			t = Gt(n);
			if (t.length > 4) {
				return t;
			}
		}
	}
	return t.trim();
}
