var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./83957.js");
var a = i;
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require(/*webcrack:missing*/ "./90242.js");
var c = require(/*webcrack:missing*/ "./69164.js");
var m = require("./21105.js");
var u = require("./31222.js");
var d = require(/*webcrack:missing*/ "./37976.js");
var A = require(/*webcrack:missing*/ "./89193.js");
var p = require(/*webcrack:missing*/ "./12176.js");
var g = require(/*webcrack:missing*/ "./72476.js");
var h = require("./75888.js");
class C {
	m_transport;
	m_lPointsAvailable = null;
	m_bPointsBalanceLoadedOrInFlight = false;
	m_mapReactionConfiguration = new Map();
	m_bReactionConfigurationLoadedOrInFlight = false;
	m_eTargetType;
	m_targetID;
	m_mapExistingReactions = new Map();
	constructor(e) {
		(0, A.Gn)(this);
		this.m_transport = e;
	}
	BIsLoggedIn() {
		return g.iA.logged_in;
	}
	async SetTarget(e, t) {
		this.m_targetID = e;
		this.m_eTargetType = t;
		return this.LoadExistingReactions();
	}
	async AddReaction(e) {
		if (!this.BIsLoggedIn()) {
			return {
				eResult: 21,
				strMessage: "Not logged on",
			};
		}
		let t = p.w.Init(h.RY);
		t.Body().set_target_type(this.m_eTargetType);
		t.Body().set_targetid(this.m_targetID);
		t.Body().set_reactionid(e);
		console.log(" ProtoBuf sending...");
		console.log(t);
		console.log("Target ID is..." + t.Body().targetid());
		let r = await h.a9.AddReaction(this.m_transport, t);
		if (r.GetEResult() == 1) {
			this.m_bPointsBalanceLoadedOrInFlight = false;
		}
		return {
			eResult: r.GetEResult(),
			strMessage: "",
		};
	}
	GetUserPointBalance() {
		if (this.BIsLoggedIn()) {
			if (!this.m_bPointsBalanceLoadedOrInFlight) {
				this.LoadUserPointBalance();
			}
			return this.m_lPointsAvailable;
		} else {
			return null;
		}
	}
	async LoadUserPointBalance() {
		if (!this.BIsLoggedIn()) {
			return Promise.resolve(null);
		}
		this.m_bPointsBalanceLoadedOrInFlight = true;
		const e = p.w.Init(h.pt);
		e.SetBodyFields({
			steamid: g.iA.steamid,
		});
		let t = await h.a9.GetSummary(this.m_transport, e);
		if (t.GetEResult() == 1) {
			this.m_lPointsAvailable = d.A.fromString(t.Body().summary().points());
		} else {
			console.error(
				`Error when calling LoyaltyRewardsService.GetSummary: EResult=${t.GetEResult()}`,
			);
		}
	}
	GetAwardConfigurations() {
		if (!this.m_bReactionConfigurationLoadedOrInFlight) {
			this.LoadAwardsConfiguration();
		}
		return this.m_mapReactionConfiguration;
	}
	async LoadAwardsConfiguration() {
		this.m_bReactionConfigurationLoadedOrInFlight = true;
		const e = p.w.Init(h.Sm);
		let t = await h.a9.GetReactionConfig(this.m_transport, e);
		if (t.GetEResult() == 1) {
			let e = t.Body().toObject().reactions;
			for (const t of e) {
				this.m_mapReactionConfiguration.set(t.reactionid, t);
			}
		} else {
			console.error(
				`Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${t.GetEResult()}`,
			);
		}
	}
	GetExistingReactions() {
		return this.m_mapExistingReactions;
	}
	async LoadExistingReactions() {
		if (!this.BIsLoggedIn()) {
			return 21;
		}
		this.m_mapExistingReactions.clear();
		const e = p.w.Init(h.bA);
		e.Body().set_target_type(this.m_eTargetType);
		e.Body().set_targetid(this.m_targetID);
		let t = await h.a9.GetReactions(this.m_transport, e);
		if (t.GetEResult() == 1) {
			t.Body()
				.reactionids()
				.map((e) => this.m_mapExistingReactions.set(e, true));
		}
		return t.GetEResult();
	}
}
(0, n.Cg)([A.sH.ref], C.prototype, "m_lPointsAvailable", undefined);
(0, n.Cg)([A.sH.deep], C.prototype, "m_mapReactionConfiguration", undefined);
(0, n.Cg)([A.sH.deep], C.prototype, "m_mapExistingReactions", undefined);
var _ = require("./64608.js");
var f = require("./10606.js");
var b = require(/*webcrack:missing*/ "./50376.js");
var y = require(/*webcrack:missing*/ "./26853.js");
var S = require(/*webcrack:missing*/ "./90765.js");
var w = require(/*webcrack:missing*/ "./46108.js");
var B = require(/*webcrack:missing*/ "./52451.js");
var v = require("./67060.js");
var I = require("./95745.js");
var E = require("./28017.js");
var M = require("./99624.js");
const T = (e) => {
	const { className: t, ...r } = e;
	return o.createElement(l.fu, {
		className: (0, S.A)(t, M.UnstyledButton),
		...r,
	});
};
var R;
var k;
var D;
(function (e) {
	e[(e.LOADING = 0)] = "LOADING";
	e[(e.SELECTING = 1)] = "SELECTING";
	e[(e.CONFIRM = 2)] = "CONFIRM";
	e[(e.SUBMITTING = 3)] = "SUBMITTING";
	e[(e.DONE = 4)] = "DONE";
	e[(e.ERROR = 5)] = "ERROR";
	e[(e.LOADING_ERROR = 6)] = "LOADING_ERROR";
})((D ||= {}));
const N = (e) =>
	o.createElement(
		"svg",
		{
			viewBox: "0 0 24 24",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			...e,
		},
		o.createElement("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
		}),
	);
class F extends o.PureComponent {
	constructor(e) {
		super(e);
		this.state = {
			bHovered: false,
		};
	}
	handleMouseOver(e) {
		this.setState({
			bHovered: true,
		});
	}
	handleMouseOut() {
		this.setState({
			bHovered: false,
		});
	}
	render() {
		const e = (0, E.e)(
			this.props.reactionType,
			!this.props.bDisableAnimation &&
				(this.state.bHovered || this.props.bForceAnimated),
		);
		return o.createElement("img", {
			className: this.props.className,
			src: e,
			onMouseEnter: this.handleMouseOver,
			onMouseLeave: this.handleMouseOut,
		});
	}
}
(0, n.Cg)([B.oI], F.prototype, "handleMouseOver", null);
(0, n.Cg)([B.oI], F.prototype, "handleMouseOut", null);
let G = class extends o.Component {
	static {
		R = this;
	}
	static s_LoyaltyAwardModalStore;
	static defaultProps = {
		targetType: 1,
	};
	constructor(e) {
		super(e);
		window.fnLoyalty_ShowAwardModal = (t, r, n, i, a) => {
			a ||= 0;
			this.Init(e.serviceTransport);
			this.setState({
				bShowModal: true,
				fnSuccessFunc: n,
				targetid: t,
				ugcType: i,
				initialSelectedReaction: a,
				targetType: r,
			});
		};
		this.state = {
			bLoading: true,
		};
	}
	async Init(e) {
		if (R.s_LoyaltyAwardModalStore) {
			return;
		}
		if (e) {
			R.s_LoyaltyAwardModalStore = new C(e);
			return;
		}
		const t = {
			...(0, g.Tc)("loyaltystore", "application_config"),
			...(await (async function () {
				try {
					const e = await a.get(
						`${(0, g.xv)()}pointssummary/ajaxgetasyncconfig`,
						{
							withCredentials: true,
						},
					);
					if (e.data.success === 1) {
						return e.data.data;
					} else {
						console.error(`Failed to load async config: ${e.data.success}`);
						return {};
					}
				} catch (e) {
					console.error(`Unexpected failure while loading async config: ${e}`);
					return {};
				}
			})()),
		};
		const r = new u.D(g.TS.WEBAPI_BASE_URL, t.webapi_token);
		R.s_LoyaltyAwardModalStore = new C(r.GetServiceTransport());
		this.setState({
			bLoading: false,
		});
	}
	render() {
		const {
			bLoading: e,
			bShowModal: t,
			targetType: r,
			fnSuccessFunc: n,
			targetid: i,
			ugcType: a,
			initialSelectedReaction: s,
		} = this.state;
		if (t) {
			if (e) {
				return o.createElement(
					f.mt,
					{
						className: I.GrantAwardModal,
						active: true,
						onDismiss: () =>
							this.setState({
								bShowModal: false,
							}),
					},
					o.createElement(L, null),
					o.createElement(x, null),
					o.createElement(
						"div",
						{
							className: I.InitialLoading,
						},
						o.createElement(
							"div",
							{
								className: (0, S.A)(I.LoadingContainer, I.Visible),
							},
							o.createElement(W, null),
						),
					),
				);
			} else {
				return o.createElement(P, {
					key: i,
					targetid: i,
					active: t,
					targetType: r,
					ugcType: a,
					onDismiss: () =>
						this.setState({
							bShowModal: false,
						}),
					onSuccess: n,
					store: R.s_LoyaltyAwardModalStore,
					initialSelectedReaction: s,
				});
			}
		} else {
			return null;
		}
	}
};
G = R = (0, n.Cg)([s.PA], G);
export let EX = class extends o.Component {
	static {
		k = this;
	}
	static s_LoyaltyAwardModalStore = null;
	static Initialize(e) {
		if (this.s_LoyaltyAwardModalStore === null) {
			this.s_LoyaltyAwardModalStore = new C(e.GetServiceTransport());
		}
	}
	constructor(e) {
		super(e);
	}
	render() {
		const {
			targetType: e,
			targetid: t,
			bShowModal: r,
			ugcType: n,
			initialSelectedReaction: i,
			onDismiss: a,
		} = this.props;
		return o.createElement(P, {
			key: t,
			targetid: t,
			active: r,
			targetType: e,
			ugcType: n,
			onDismiss: a,
			onSuccess: a,
			store: k.s_LoyaltyAwardModalStore,
			initialSelectedReaction: i,
		});
	}
};
EX = k = (0, n.Cg)([s.PA], EX);
let P = class extends o.Component {
	constructor(e) {
		super(e);
		this.state = {
			selectedReaction: e.initialSelectedReaction || 0,
			ePhase: D.LOADING,
		};
	}
	async componentDidMount() {
		let e = await this.props.store.SetTarget(
			this.props.targetid,
			this.props.targetType,
		);
		if (e == 1) {
			this.setState({
				ePhase: D.SELECTING,
			});
		} else {
			this.setState({
				ePhase: D.LOADING_ERROR,
				eResult: e,
			});
		}
	}
	render() {
		const {
			active: e,
			targetType: t,
			ugcType: r,
			store: n,
			onDismiss: i,
		} = this.props;
		const { selectedReaction: a, ePhase: s, celebrate: c } = this.state;
		if (!e) {
			return null;
		}
		const u = n.GetExistingReactions();
		const d = n.GetAwardConfigurations();
		const A = n.GetUserPointBalance();
		const p = (function (e, t, r) {
			let n = [];
			e.forEach(function (e) {
				if (e.valid_target_types.includes(t)) {
					switch (t) {
						case 1:
						case 3:
						case 4:
						case 5:
							n.push(e.reactionid);
							break;
						case 2:
							if (e.valid_ugc_types.includes(r)) {
								n.push(e.reactionid);
							}
					}
				}
			});
			return n;
		})(d, t, r);
		const h = a === 0 ? null : d.get(a);
		const C = h ? h.points_cost : 0;
		const b = h ? h.points_transferred : 0;
		let y;
		let B = "";
		switch (t) {
			case 1:
				B = (0, w.we)("#GrantAwardDescription_Review");
				break;
			case 2:
				B = (0, w.we)("#GrantAwardDescription_UGC");
				break;
			case 3:
				B = (0, w.we)("#GrantAwardDescription_Profile");
				break;
			case 4:
				B = (0, w.we)("#GrantAwardDescription_ForumTopic");
				break;
			case 5:
				B = (0, w.we)("#GrantAwardDescription_Comment");
		}
		switch (s) {
			case D.LOADING:
			case D.SELECTING:
				{
					const e = a === 0 || u.get(a);
					const t = !A || A.greaterThanOrEqual(C);
					const r = o.createElement(
						_.jn,
						{
							onClick: () =>
								this.setState({
									ePhase: D.CONFIRM,
								}),
							disabled: e,
							focusable: !e,
							title: (0, w.we)(
								e ? "#GrantAward_PromptTooltip" : "#GrantAward_SubmitTooltip",
							),
						},
						(0, w.we)(e ? "#GrantAward_SelectAward" : "#GrantAward_Next"),
					);
					y = o.createElement(
						o.Fragment,
						null,
						o.createElement(L, {
							description: B,
						}),
						o.createElement(x, null),
						p.length === 0 &&
							o.createElement(
								"div",
								{
									className: I.InitialLoading,
								},
								o.createElement(
									"div",
									{
										className: (0, S.A)(I.LoadingContainer, I.Visible),
									},
									o.createElement(W, null),
								),
							),
						o.createElement(
							m.MS,
							{
								className: I.ButtonContainer,
								scrollDirection: "y",
								"flow-children": "grid",
							},
							p.map((e, t) =>
								o.createElement(U, {
									autoFocus: t == 0,
									key: e,
									reaction: e,
									selected: e === a && !u.get(e),
									cost: d.get(e).points_cost,
									alreadyAwarded: u.get(e),
									onClick: () => {
										if (!u.get(e)) {
											this.setState({
												selectedReaction: e === a ? 0 : e,
											});
										}
									},
								}),
							),
						),
						o.createElement(x, null),
						o.createElement(
							z,
							{
								store: n,
							},
							e || t
								? r
								: [
										o.createElement(
											"div",
											{
												key: "msg",
												className: I.NotEnoughPoints,
											},
											(0, w.we)(
												"#GrantAward_CantAfford",
												A.negate().add(C).toNumber().toLocaleString(),
											),
										),
										o.createElement(
											l.Ii,
											{
												key: "button",
												href: `${g.TS.STORE_BASE_URL}points/howitworks`,
											},
											o.createElement(
												_.$n,
												{
													key: "button",
												},
												(0, w.we)("#GrantAward_HowToGetPoints"),
											),
										),
									],
						),
					);
				}
				break;
			case D.CONFIRM:
			case D.SUBMITTING:
			case D.DONE:
				y = o.createElement(
					o.Fragment,
					null,
					o.createElement(L, {
						description: B,
					}),
					o.createElement(x, null),
					o.createElement(
						"div",
						{
							style: {
								position: "relative",
							},
						},
						o.createElement(
							"div",
							{
								className: (0, S.A)(
									I.ConfirmContainer,
									s === D.CONFIRM && I.Visible,
								),
							},
							o.createElement(F, {
								className: I.ConfirmAwardImage,
								reactionType: a,
							}),
							o.createElement(
								"div",
								{
									className: I.ConfirmTextCtn,
								},
								o.createElement(
									"div",
									{
										className: I.ConfirmText,
									},
									(0, w.PP)(
										"#GrantAward_Confirm",
										o.createElement(V, null, C.toLocaleString()),
										o.createElement(
											"span",
											{
												className: I.AwardName,
											},
											(0, E.h)(a),
										),
									),
								),
								o.createElement(
									"div",
									{
										className: I.ConfirmText,
									},
									(0, w.PP)(
										"#GrantAward_Confirm_Details",
										o.createElement(V, null, b.toLocaleString()),
										o.createElement(
											"span",
											{
												className: I.TimePeriod,
											},
											(0, w.we)("#GrantAward_Confirm_DetailsTimePeriod"),
										),
									),
								),
							),
						),
						o.createElement(
							"div",
							{
								className: (0, S.A)(
									I.LoadingContainer,
									s === D.SUBMITTING && I.Visible,
								),
							},
							o.createElement(W, null),
						),
						o.createElement(
							"div",
							{
								className: (0, S.A)(
									I.SuccessContainer,
									s === D.DONE && I.Visible,
								),
							},
							o.createElement(F, {
								className: I.ConfirmAwardImage,
								reactionType: a,
							}),
							o.createElement(
								"div",
								{
									className: I.SuccessText,
								},
								(0, w.we)("#GrantAward_Success"),
							),
						),
					),
					o.createElement(x, null),
					o.createElement(
						z,
						{
							store: n,
						},
						o.createElement(
							_.$n,
							{
								onClick: () =>
									this.setState({
										ePhase: D.SELECTING,
									}),
								disabled: s !== D.CONFIRM,
							},
							(0, w.we)("#GrantAward_Back"),
						),
						o.createElement(
							_.jn,
							{
								onClick: this.GrantAward,
								title: (0, w.we)("#GrantAward_SubmitTooltip"),
								disabled: s !== D.CONFIRM,
							},
							(0, w.we)("#GrantAwardNowButton"),
						),
					),
				);
				break;
			case D.ERROR:
				{
					let e = "";
					switch (this.state.eResult) {
						case 10:
							e = (0, w.we)("#GrantAwardError_Busy");
							break;
						case 32:
							e = (0, w.we)("#GrantAwardError_PersistFailed");
							break;
						case 8:
							e = (0, w.we)("#GrantAwardError_InvalidParam");
							break;
						case 42:
							e = (0, w.we)("#GrantAwardError_NoMatch");
							break;
						case 107:
							e = (0, w.we)("#GrantAwardError_InsufficientFunds");
							break;
						case 15:
							e = (0, w.we)("#GrantAwardError_AccessDenied");
							break;
						case 21:
							e = (0, w.we)("#GrantAwardError_NotLoggedOn");
							break;
						case 29:
							e = (0, w.we)("#GrantAwardError_DuplicateRequest");
							break;
						default:
							e = (0, w.we)("#GrantAwardError_Fail");
					}
					y = o.createElement(
						o.Fragment,
						null,
						o.createElement(L, {
							description: B,
						}),
						o.createElement(x, null),
						o.createElement(
							"div",
							{
								style: {
									position: "relative",
								},
							},
							o.createElement(
								"div",
								{
									className: I.ErrorContainer,
								},
								o.createElement(
									"div",
									{
										className: I.ErrorText,
									},
									e,
								),
							),
						),
						o.createElement(x, null),
						o.createElement(
							z,
							{
								store: n,
							},
							o.createElement(
								_.$n,
								{
									onClick: () =>
										this.setState({
											ePhase: D.SELECTING,
										}),
								},
								(0, w.we)("#GrantAward_Back"),
							),
						),
					);
				}
				break;
			case D.LOADING_ERROR: {
				let e = "";
				switch (this.state.eResult) {
					case 10:
						e = (0, w.we)("#GrantAwardError_Busy");
						break;
					case 21:
						e = (0, w.we)("#GrantAwardError_NotLoggedOn");
						break;
					default:
						e = (0, w.we)("#GrantAwardError_LoadExistingReactions");
				}
				y = o.createElement(
					o.Fragment,
					null,
					o.createElement(L, {
						description: B,
					}),
					o.createElement(x, null),
					o.createElement(
						"div",
						{
							style: {
								position: "relative",
							},
						},
						o.createElement(
							"div",
							{
								className: I.ErrorContainer,
							},
							o.createElement(
								"div",
								{
									className: I.ErrorText,
								},
								e,
							),
						),
					),
					o.createElement(x, null),
				);
			}
		}
		return o.createElement(
			f.mt,
			{
				className: I.GrantAwardModal,
				active: e,
				onDismiss: i,
			},
			o.createElement(
				f.Qs,
				{
					navID: "GrantAward",
					closeModal: i,
				},
				c &&
					o.createElement(v.NW, {
						eType: v.O4.Default,
					}),
				y,
			),
		);
	}
	GrantAward() {
		const { targetid: e, store: t, onSuccess: r } = this.props;
		const { selectedReaction: n } = this.state;
		if (n !== null && n != 0) {
			this.setState({
				ePhase: D.SUBMITTING,
			});
			t.AddReaction(n).then(({ eResult: t, strMessage: i }) => {
				if (t == 1) {
					this.setState(
						{
							ePhase: D.DONE,
							celebrate: true,
						},
						() =>
							setTimeout(() => {
								if (r) {
									r(e, n);
								}
							}, 2000),
					);
				} else {
					this.setState({
						ePhase: D.ERROR,
						eResult: t,
					});
				}
			});
		}
	}
};
(0, n.Cg)([B.oI], P.prototype, "GrantAward", null);
P = (0, n.Cg)([s.PA], P);
const L = ({ description: e }) =>
	o.createElement(
		"div",
		{
			className: I.Header,
		},
		o.createElement(
			"div",
			{
				className: I.Title,
			},
			(0, w.we)("#GrantAwardTitle"),
		),
		o.createElement(
			"div",
			{
				className: I.Description,
			},
			e,
		),
	);
const z = (0, s.PA)(({ store: e, children: t }) => {
	const r = e.GetUserPointBalance();
	const n = r && r.toNumber().toLocaleString();
	return o.createElement(
		"div",
		{
			className: I.Footer,
		},
		o.createElement(
			"div",
			{
				className: I.Left,
			},
			o.createElement(b.vrn, {
				className: I.BalanceIcon,
			}),
			o.createElement(
				"div",
				{
					className: I.BalanceDetails,
				},
				o.createElement(
					"div",
					{
						className: I.BalanceLabel,
					},
					(0, w.we)("#YourBalance"),
				),
				o.createElement(
					"div",
					{
						className: I.BalanceAmount,
					},
					n,
				),
			),
		),
		o.createElement(
			"div",
			{
				className: I.Right,
			},
			o.createElement(
				c.Z,
				{
					className: I.Actions,
					"flow-children": "row",
				},
				o.Children.map(t, (e) =>
					o.createElement(
						"div",
						{
							className: I.Action,
						},
						e,
					),
				),
			),
			o.createElement(
				"a",
				{
					className: I.FooterLink,
					href: `${g.TS.STORE_BASE_URL}points/howitworks`,
				},
				(0, w.we)("#GrantAward_PointsLink"),
			),
		),
	);
});
const x = () =>
	o.createElement("div", {
		className: I.Divider,
	});
class U extends o.PureComponent {
	constructor(e) {
		super(e);
		this.state = {
			bHovered: false,
		};
	}
	handleMouseOver(e) {
		this.setState({
			bHovered: true,
		});
	}
	handleMouseOut() {
		this.setState({
			bHovered: false,
		});
	}
	render() {
		const {
			reaction: e,
			selected: t,
			alreadyAwarded: r,
			cost: n,
			autoFocus: i,
			...a
		} = this.props;
		return o.createElement(
			T,
			{
				type: "button",
				onMouseEnter: this.handleMouseOver,
				onMouseLeave: this.handleMouseOut,
				className: (0, S.A)(I.Button, t && I.Selected, r && I.Disabled),
				autoFocus: i,
				...a,
			},
			o.createElement(
				"div",
				{
					className: I.IconCtn,
				},
				o.createElement(F, {
					reactionType: e,
					bForceAnimated: this.state.bHovered,
					bDisableAnimation: r,
				}),
			),
			o.createElement(
				"div",
				{
					className: I.LabelCtn,
				},
				o.createElement(
					"div",
					{
						className: I.Label,
					},
					(0, E.h)(e),
				),
				o.createElement(
					V,
					{
						className: I.Points,
					},
					n.toLocaleString(),
				),
			),
			r &&
				o.createElement(N, {
					className: I.IconCheckMark,
				}),
		);
	}
}
(0, n.Cg)([B.oI], U.prototype, "handleMouseOver", null);
(0, n.Cg)([B.oI], U.prototype, "handleMouseOut", null);
const W = () =>
	o.createElement(y.t, {
		size: "large",
		className: I.Loading,
	});
const V = (e) => {
	const { children: t, className: r, ...n } = e;
	return o.createElement(
		"span",
		{
			...n,
			className: (0, S.A)(r, I.PointsAmount),
		},
		o.createElement(b.vrn, {
			className: I.PointsAmountIcon,
		}),
		t,
	);
};
