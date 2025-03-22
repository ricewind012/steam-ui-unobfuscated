var n = require("./89748.js");
var i = require("./18057.js");
var a = require("./96593.js");
var s = require("./48289.js");
var o = require("./87935.js");
var l = require(/*webcrack:missing*/ "./63696.js");
var c = require("./64608.js");
var m = require("./10606.js");
var u = require("./13869.js");
var d = require(/*webcrack:missing*/ "./90765.js");
var A = require(/*webcrack:missing*/ "./46108.js");
var p = require(/*webcrack:missing*/ "./72476.js");
var g = require("./39500.js");
var h = g;
const C = "#BorrowGameDialog_Title";
export function J(e, t) {
	const r = a.tw.GetAppOverviewByGameID(e);
	if (r) {
		const n = s.O$.GetFriendState(r.owner_account_id);
		if (n) {
			(0, u.pg)(
				l.createElement(f, {
					gameid: e,
					owner: n,
				}),
				t || window,
				{
					strTitle: (0, A.we)(C),
				},
			);
		}
	}
}
const f = (e) => {
	const { gameid: t, owner: r, closeModal: a } = e;
	const s = (0, p.Qn)();
	const u = (0, n.IU)();
	const g = () => {
		if (a) {
			a();
		}
	};
	const _ = (0, i.Qt)(
		o.B7.BuildStoreAppURL(Number.parseInt(t), "gamepadborrowgamedialog"),
	);
	const f = (0, i.Qt)(
		o.B7.BuildStoreAppURL(Number.parseInt(t), "borrowgamedialog"),
	);
	const b = (0, i.Qt)(o.B7.ResolveURL("FamilyManagement"));
	const y = (0, i.Qt)(
		o.B7.ResolveURL("FamilyManagement") +
			"?inviteuser=" +
			r.steamid.ConvertTo64BitString(),
	);
	const S = l.useCallback(() => {
		if (a) {
			a();
		}
		if (u) {
			y();
		} else {
			b();
		}
	}, [a, y, b, u]);
	const w = l.useCallback(() => {
		if (a) {
			a();
		}
		if (s) {
			_();
		} else {
			f();
		}
	}, [a, s, _, f]);
	const B = r.display_name;
	let v = u
		? "#BorrowGameDialog_Description_InFamily"
		: "#BorrowGameDialog_Description_NoFamily";
	let I = u
		? "#BorrowGameDialog_Button_InFamily"
		: "#BorrowGameDialog_Button_NoFamily";
	return l.createElement(
		m.eV,
		{
			onCancel: g,
		},
		l.createElement(
			"div",
			{
				className: h.BorrowGameDialog,
			},
			l.createElement(
				c.Y9,
				{
					className: h.ModalHeader,
				},
				(0, A.we)(C),
			),
			l.createElement(
				c.nB,
				null,
				l.createElement("div", null, (0, A.we)(v, B)),
				l.createElement(
					"div",
					{
						className: (0, d.A)(h.BodySection),
					},
					l.createElement(
						c.jn,
						{
							className: h.RequestButton,
							onClick: S,
						},
						(0, A.we)(I),
					),
				),
				l.createElement(
					c.wi,
					null,
					l.createElement(
						c.dR,
						null,
						l.createElement(
							c.$n,
							{
								onClick: w,
							},
							(0, A.we)("#BorrowGameDialog_Purchase"),
						),
						l.createElement(
							c.$n,
							{
								onClick: g,
							},
							(0, A.we)("#Button_Cancel"),
						),
					),
				),
			),
		),
	);
};
