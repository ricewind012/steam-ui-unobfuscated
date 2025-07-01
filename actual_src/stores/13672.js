import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import * as i from "./83957.js";
import s, { PA } from "./41230.js";
import * as o from "./63696.js";
import * as l from "./90242.js";
import * as c from "./69164.js";
import * as m from "./21105.js";
import * as u from "./31222.js";
import * as d from "./37976.js";
import A, { Gn } from "./89193.js";
import * as p from "./12176.js";
import g, { Tc, xv } from "./72476.js";
import * as h from "./75888.js";
import * as _ from "./64608.js";
import * as f from "./10606.js";
import * as b from "./50376.js";
import * as y from "./26853.js";
import { A as A_1 } from "./90765.js";
import * as B from "./52451.js";
import * as v from "./67060.js";
import * as I from "./95745.js";
import * as E from "../awards/utils.js";
import * as M from "./99624.js";
var a = i;
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
		Gn(this);
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
				.map((e) => {
					return this.m_mapExistingReactions.set(e, true);
				});
		}
		return t.GetEResult();
	}
}
Cg([A.sH.ref], C.prototype, "m_lPointsAvailable", undefined);
Cg([A.sH.deep], C.prototype, "m_mapReactionConfiguration", undefined);
Cg([A.sH.deep], C.prototype, "m_mapExistingReactions", undefined);
const T = (e) => {
	const { className, ...r } = e;
	return <l.fu className={A_1(className, M.UnstyledButton)} {...r} />;
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
const N = (e) => {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...e}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z"
			/>
		</svg>
	);
};
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
		const e = E.GetReactionImageURL(
			this.props.reactionType,
			!this.props.bDisableAnimation &&
				(this.state.bHovered || this.props.bForceAnimated),
		);
		return (
			<img
				className={this.props.className}
				src={e}
				onMouseEnter={this.handleMouseOver}
				onMouseLeave={this.handleMouseOut}
			/>
		);
	}
}
Cg([B.oI], F.prototype, "handleMouseOver", null);
Cg([B.oI], F.prototype, "handleMouseOut", null);
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
			...Tc("loyaltystore", "application_config"),
			...(await (async function () {
				try {
					const e = await a.get(`${xv()}pointssummary/ajaxgetasyncconfig`, {
						withCredentials: true,
					});
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
			bLoading,
			bShowModal,
			targetType,
			fnSuccessFunc,
			targetid,
			ugcType,
			initialSelectedReaction,
		} = this.state;
		if (bShowModal) {
			if (bLoading) {
				return (
					<f.mt
						className={I.GrantAwardModal}
						active
						onDismiss={() => {
							return this.setState({
								bShowModal: false,
							});
						}}
					>
						<L />
						<X />
						<div className={I.InitialLoading}>
							<div className={A_1(I.LoadingContainer, I.Visible)}>
								<W />
							</div>
						</div>
					</f.mt>
				);
			} else {
				return (
					<P
						key={targetid}
						targetid={targetid}
						active={bShowModal}
						targetType={targetType}
						ugcType={ugcType}
						onDismiss={() => {
							return this.setState({
								bShowModal: false,
							});
						}}
						onSuccess={fnSuccessFunc}
						store={R.s_LoyaltyAwardModalStore}
						initialSelectedReaction={initialSelectedReaction}
					/>
				);
			}
		} else {
			return null;
		}
	}
};
G = R = Cg([s.PA], G);
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
			targetType,
			targetid,
			bShowModal,
			ugcType,
			initialSelectedReaction,
			onDismiss,
		} = this.props;
		return (
			<P
				key={targetid}
				targetid={targetid}
				active={bShowModal}
				targetType={targetType}
				ugcType={ugcType}
				onDismiss={onDismiss}
				onSuccess={onDismiss}
				store={k.s_LoyaltyAwardModalStore}
				initialSelectedReaction={initialSelectedReaction}
			/>
		);
	}
};
EX = k = Cg([s.PA], EX);
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
		const { active, targetType, ugcType, store, onDismiss } = this.props;
		const { selectedReaction, ePhase, celebrate } = this.state;
		if (!active) {
			return null;
		}
		const u = store.GetExistingReactions();
		const d = store.GetAwardConfigurations();
		const A = store.GetUserPointBalance();
		const p = (function (e, t, r) {
			let n = [];
			e.forEach(function (e) {
				if (e.valid_target_types.includes(t)) {
					switch (t) {
						case 1:
						case 3:
						case 4:
						case 5: {
							n.push(e.reactionid);
							break;
						}
						case 2: {
							if (e.valid_ugc_types.includes(r)) {
								n.push(e.reactionid);
							}
						}
					}
				}
			});
			return n;
		})(d, targetType, ugcType);
		const h = selectedReaction === 0 || d.get(selectedReaction);
		const C = h ? h.points_cost : 0;
		const b = h ? h.points_transferred : 0;
		let y;
		let B = "";
		switch (targetType) {
			case 1: {
				B = (0, Localize)("#GrantAwardDescription_Review");
				break;
			}
			case 2: {
				B = (0, Localize)("#GrantAwardDescription_UGC");
				break;
			}
			case 3: {
				B = (0, Localize)("#GrantAwardDescription_Profile");
				break;
			}
			case 4: {
				B = (0, Localize)("#GrantAwardDescription_ForumTopic");
				break;
			}
			case 5: {
				B = (0, Localize)("#GrantAwardDescription_Comment");
			}
		}
		switch (ePhase) {
			case D.LOADING:
			case D.SELECTING:
				{
					const e = selectedReaction === 0 || u.get(selectedReaction);
					const t = !A || A.greaterThanOrEqual(C);
					const r = (
						<_.jn
							onClick={() => {
								return this.setState({
									ePhase: D.CONFIRM,
								});
							}}
							disabled={e}
							focusable={!e}
							title={(0, Localize)(
								e ? "#GrantAward_PromptTooltip" : "#GrantAward_SubmitTooltip",
							)}
						>
							{(0, Localize)(
								e ? "#GrantAward_SelectAward" : "#GrantAward_Next",
							)}
						</_.jn>
					);
					y = (
						<>
							<L description={B} />
							<X />
							{p.length === 0 && (
								<div className={I.InitialLoading}>
									<div className={A_1(I.LoadingContainer, I.Visible)}>
										<W />
									</div>
								</div>
							)}
							<m.MS
								className={I.ButtonContainer}
								scrollDirection="y"
								flow-children="grid"
							>
								{p.map((e, t) => {
									return (
										<U
											autoFocus={t == 0}
											key={e}
											reaction={e}
											selected={e === selectedReaction && !u.get(e)}
											cost={d.get(e).points_cost}
											alreadyAwarded={u.get(e)}
											onClick={() => {
												if (!u.get(e)) {
													this.setState({
														selectedReaction: e === selectedReaction ? 0 : e,
													});
												}
											}}
										/>
									);
								})}
							</m.MS>
							<X />
							<Z store={store}>
								{e || t
									? r
									: [
											<div key="msg" className={I.NotEnoughPoints}>
												{(0, Localize)(
													"#GrantAward_CantAfford",
													A.negate().add(C).toNumber().toLocaleString(),
												)}
											</div>,
											<l.Ii
												key="button"
												href={`${g.TS.STORE_BASE_URL}points/howitworks`}
											>
												<_.$n key="button">
													{(0, Localize)("#GrantAward_HowToGetPoints")}
												</_.$n>
											</l.Ii>,
										]}
							</Z>
						</>
					);
				}
				break;
			case D.CONFIRM:
			case D.SUBMITTING:
			case D.DONE: {
				y = (
					<>
						<L description={B} />
						<X />
						<div
							style={{
								position: "relative",
							}}
						>
							<div
								className={A_1(
									I.ConfirmContainer,
									ePhase === D.CONFIRM && I.Visible,
								)}
							>
								<F
									className={I.ConfirmAwardImage}
									reactionType={selectedReaction}
								/>
								<div className={I.ConfirmTextCtn}>
									<div className={I.ConfirmText}>
										{LocalizeReact(
											"#GrantAward_Confirm",
											<V>{C.toLocaleString()}</V>,
											<span className={I.AwardName}>
												{E.GetLocTokenForReactionType(selectedReaction)}
											</span>,
										)}
									</div>
									<div className={I.ConfirmText}>
										{LocalizeReact(
											"#GrantAward_Confirm_Details",
											<V>{b.toLocaleString()}</V>,
											<span className={I.TimePeriod}>
												{(0, Localize)("#GrantAward_Confirm_DetailsTimePeriod")}
											</span>,
										)}
									</div>
								</div>
							</div>
							<div
								className={A_1(
									I.LoadingContainer,
									ePhase === D.SUBMITTING && I.Visible,
								)}
							>
								<W />
							</div>
							<div
								className={A_1(
									I.SuccessContainer,
									ePhase === D.DONE && I.Visible,
								)}
							>
								<F
									className={I.ConfirmAwardImage}
									reactionType={selectedReaction}
								/>
								<div className={I.SuccessText}>
									{(0, Localize)("#GrantAward_Success")}
								</div>
							</div>
						</div>
						<X />
						<Z store={store}>
							<_.$n
								onClick={() => {
									return this.setState({
										ePhase: D.SELECTING,
									});
								}}
								disabled={ePhase !== D.CONFIRM}
							>
								{(0, Localize)("#GrantAward_Back")}
							</_.$n>
							<_.jn
								onClick={this.GrantAward}
								title={(0, Localize)("#GrantAward_SubmitTooltip")}
								disabled={ePhase !== D.CONFIRM}
							>
								{(0, Localize)("#GrantAwardNowButton")}
							</_.jn>
						</Z>
					</>
				);
				break;
			}
			case D.ERROR:
				{
					let e = "";
					switch (this.state.eResult) {
						case 10: {
							e = (0, Localize)("#GrantAwardError_Busy");
							break;
						}
						case 32: {
							e = (0, Localize)("#GrantAwardError_PersistFailed");
							break;
						}
						case 8: {
							e = (0, Localize)("#GrantAwardError_InvalidParam");
							break;
						}
						case 42: {
							e = (0, Localize)("#GrantAwardError_NoMatch");
							break;
						}
						case 107: {
							e = (0, Localize)("#GrantAwardError_InsufficientFunds");
							break;
						}
						case 15: {
							e = (0, Localize)("#GrantAwardError_AccessDenied");
							break;
						}
						case 21: {
							e = (0, Localize)("#GrantAwardError_NotLoggedOn");
							break;
						}
						case 29: {
							e = (0, Localize)("#GrantAwardError_DuplicateRequest");
							break;
						}
						default: {
							e = (0, Localize)("#GrantAwardError_Fail");
						}
					}
					y = (
						<>
							<L description={B} />
							<X />
							<div
								style={{
									position: "relative",
								}}
							>
								<div className={I.ErrorContainer}>
									<div className={I.ErrorText}>{e}</div>
								</div>
							</div>
							<X />
							<Z store={store}>
								<_.$n
									onClick={() => {
										return this.setState({
											ePhase: D.SELECTING,
										});
									}}
								>
									{(0, Localize)("#GrantAward_Back")}
								</_.$n>
							</Z>
						</>
					);
				}
				break;
			case D.LOADING_ERROR: {
				let e = "";
				switch (this.state.eResult) {
					case 10: {
						e = (0, Localize)("#GrantAwardError_Busy");
						break;
					}
					case 21: {
						e = (0, Localize)("#GrantAwardError_NotLoggedOn");
						break;
					}
					default: {
						e = (0, Localize)("#GrantAwardError_LoadExistingReactions");
					}
				}
				y = (
					<>
						<L description={B} />
						<X />
						<div
							style={{
								position: "relative",
							}}
						>
							<div className={I.ErrorContainer}>
								<div className={I.ErrorText}>{e}</div>
							</div>
						</div>
						<X />
					</>
				);
			}
		}
		return (
			<f.mt className={I.GrantAwardModal} active={active} onDismiss={onDismiss}>
				<f.Qs navID="GrantAward" closeModal={onDismiss}>
					{celebrate && <v.NW eType={v.O4.Default} />}
					{y}
				</f.Qs>
			</f.mt>
		);
	}
	GrantAward() {
		const { targetid, store, onSuccess } = this.props;
		const { selectedReaction } = this.state;
		if (selectedReaction !== null && selectedReaction != 0) {
			this.setState({
				ePhase: D.SUBMITTING,
			});
			store.AddReaction(selectedReaction).then(({ eResult, strMessage }) => {
				if (eResult == 1) {
					this.setState(
						{
							ePhase: D.DONE,
							celebrate: true,
						},
						() => {
							return setTimeout(() => {
								if (onSuccess) {
									onSuccess(targetid, selectedReaction);
								}
							}, 2000);
						},
					);
				} else {
					this.setState({
						ePhase: D.ERROR,
						eResult: eResult,
					});
				}
			});
		}
	}
};
Cg([B.oI], P.prototype, "GrantAward", null);
P = Cg([s.PA], P);
const L = ({ description }) => {
	return (
		<div className={I.Header}>
			<div className={I.Title}>{(0, Localize)("#GrantAwardTitle")}</div>
			<div className={I.Description}>{description}</div>
		</div>
	);
};
const Z = PA(({ store, children }) => {
	const r = store.GetUserPointBalance();
	const n = r && r.toNumber().toLocaleString();
	return (
		<div className={I.Footer}>
			<div className={I.Left}>
				<b.vrn className={I.BalanceIcon} />
				<div className={I.BalanceDetails}>
					<div className={I.BalanceLabel}>{(0, Localize)("#YourBalance")}</div>
					<div className={I.BalanceAmount}>{n}</div>
				</div>
			</div>
			<div className={I.Right}>
				<c.Z className={I.Actions} flow-children="row">
					{o.Children.map(children, (e) => {
						return <div className={I.Action}>{e}</div>;
					})}
				</c.Z>
				<a
					className={I.FooterLink}
					href={`${g.TS.STORE_BASE_URL}points/howitworks`}
				>
					{(0, Localize)("#GrantAward_PointsLink")}
				</a>
			</div>
		</div>
	);
});
const X = () => {
	return <div className={I.Divider} />;
};
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
		const { reaction, selected, alreadyAwarded, cost, autoFocus, ...a } =
			this.props;
		return (
			<T
				type="button"
				onMouseEnter={this.handleMouseOver}
				onMouseLeave={this.handleMouseOut}
				className={A_1(
					I.Button,
					selected && I.Selected,
					alreadyAwarded && I.Disabled,
				)}
				autoFocus={autoFocus}
				{...a}
			>
				<div className={I.IconCtn}>
					<F
						reactionType={reaction}
						bForceAnimated={this.state.bHovered}
						bDisableAnimation={alreadyAwarded}
					/>
				</div>
				<div className={I.LabelCtn}>
					<div className={I.Label}>
						{E.GetLocTokenForReactionType(reaction)}
					</div>
					<V className={I.Points}>{cost.toLocaleString()}</V>
				</div>
				{alreadyAwarded && <N className={I.IconCheckMark} />}
			</T>
		);
	}
}
Cg([B.oI], U.prototype, "handleMouseOver", null);
Cg([B.oI], U.prototype, "handleMouseOut", null);
const W = () => {
	return <y.t size="large" className={I.Loading} />;
};
const V = (e) => {
	const { children, className, ...n } = e;
	return (
		<span {...n} className={A_1(className, I.PointsAmount)}>
			<b.vrn className={I.PointsAmountIcon} />
			{children}
		</span>
	);
};
