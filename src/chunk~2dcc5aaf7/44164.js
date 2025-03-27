import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i, { z7 } from "./89193.js";
import a, { PA } from "./41230.js";
import s, { useState, useEffect } from "./63696.js";
import o from "./92251.js";
import l from "./31760.js";
import c, { t7 } from "./82594.js";
import m from "./66408.js";
import u from "./88750.js";
import d, { A } from "./90765.js";
import p from "./52451.js";
import g, { G as G_1 } from "./92757.js";
import h, { Qn } from "./72476.js";
import C from "./64608.js";
import _ from "./69164.js";
import f from "./61657.js";
import b from "./34992.js";
import k from "./54268.js";
import N from "./43397.js";
class Y_1 extends s.Component {
	constructor(e) {
		super(e);
		this.state = {
			activeIndex: e.initialActiveIndex || 0,
		};
	}
	render() {
		const { config } = this.props;
		const { activeIndex } = this.state;
		const r =
			config[t] && config[t].renderContent ? config[t].renderContent() : null;
		const n = config.length > 1;
		const i = n
			? ({ detail: { button: t } }) => {
					if (t === f.pR.BUMPER_LEFT) {
						this.setState({
							activeIndex: Math.max(0, this.state.activeIndex - 1),
						});
					} else if (t === f.pR.BUMPER_RIGHT) {
						this.setState({
							activeIndex: Math.min(
								config.length - 1,
								this.state.activeIndex + 1,
							),
						});
					}
				}
			: undefined;
		return (
			<_.Z className={b.Picker} onButtonDown={i}>
				{n && <S>{this.RenderTabs()}</S>}
				{r}
			</_.Z>
		);
	}
	RenderTabs() {
		return this.props.config.map(({ renderTab }, t) => {
			const r = this.state.activeIndex === t;
			return (
				<B
					key={t}
					active={r}
					onClick={() =>
						this.setState({
							activeIndex: t,
						})
					}
				>
					{renderTab(r)}
				</B>
			);
		});
	}
}
function S(e) {
	return (
		<_.Z className={b.Tabs} flow-children="row">
			{e.children}
		</_.Z>
	);
}
function W(e) {
	return <div className={b.Content}>{e.children}</div>;
}
function B(e) {
	const { active, children, onClick } = e;
	return (
		<_.Z
			className={A(b.Tab, active && b.Active)}
			focusClassName={b.Focus}
			onActivate={onClick}
		>
			<div className={A(b.TabContent, active && b.Active)}>{children}</div>
		</_.Z>
	);
}
function V(e) {
	const { items, renderItem, onItemSelect, keyExtractor, renderEmpty } = e;
	let o = items.map((e, a) => (
		<_.Z
			key={keyExtractor(e)}
			className={b.Item}
			onActivate={() => onItemSelect(items[a])}
			autoFocus={a === 0}
			focusClassName={b.Focus}
		>
			{renderItem(items[a])}
		</_.Z>
	));
	if (items.length === 0 && renderEmpty) {
		o = renderEmpty();
	}
	return (
		<_.Z flow-children="grid" className={b.ItemList}>
			{o}
		</_.Z>
	);
}
function I(e) {
	const { title, onFilterChange, filter, onSubmit, ...a } = e;
	return (
		<>
			<W>
				<M title={title}>
					<V {...a} />
				</M>
			</W>
			<T value={filter} onChange={onFilterChange} onSubmit={onSubmit} />
		</>
	);
}
function E(e) {
	const { onFilterChange, filter, sections, title } = e;
	return (
		<>
			<W>
				{title && <div className={b.SectionedPageTitle}>{title}</div>}
				{sections.map(({ title: title_1, ...t }) => (
					<M title={title_1} key={title_1}>
						<V {...t} />
					</M>
				))}
			</W>
			<T value={filter} onChange={onFilterChange} />
		</>
	);
}
function M(e) {
	return (
		<div className={b.Section}>
			<div className={b.SectionTitle}>{e.title}</div>
			<div className={b.SectionContent}>{e.children}</div>
		</div>
	);
}
function T(e) {
	const { value, onChange, onSubmit } = e;
	return (
		<div className={b.FilterInputContainer}>
			<C.pd
				type="text"
				placeholder="Search..."
				className={b.FilterInput}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onSubmit={onSubmit}
			/>
		</div>
	);
}
function R(e) {
	const { className, ...r } = e;
	return <div className={A(className, b.AddonPickerMessage)} {...r} />;
}
const D = k;
export class Nl extends s.PureComponent {
	state = {
		showHover: false,
	};
	m_ref = s.createRef();
	OnMouseEnter(e) {
		this.setState({
			showHover: true,
		});
	}
	OnMouseLeave(e) {
		this.setState({
			showHover: false,
		});
	}
	render() {
		const { emoticon, large, emoticonHoverStore } = this.props;
		const n = `:${emoticon}:`;
		const i =
			large && emoticonHoverStore.BLoaded(emoticon)
				? emoticonHoverStore.Get(emoticon).url
				: l.p.GetEmoticonURL(emoticon, large);
		return (
			<>
				<m.xh text={n} style="merge-adjacent">
					<img
						src={i}
						className={A(D.emoticon, large ? D.large : undefined)}
						data-emoticon={emoticon}
						onMouseEnter={this.OnMouseEnter}
						onMouseLeave={this.OnMouseLeave}
						ref={this.m_ref}
					/>
				</m.xh>
				{this.state.showHover && (
					<G
						target={this.m_ref.current}
						store={emoticonHoverStore}
						emoticon={emoticon}
					/>
				)}
			</>
		);
	}
}
Cg([p.oI], Nl.prototype, "OnMouseEnter", null);
Cg([p.oI], Nl.prototype, "OnMouseLeave", null);
const G = PA((e) => {
	const { target, store, emoticon } = e;
	const i = store.Get(emoticon);
	return (
		<O
			target={target}
			title={`:${emoticon}:`}
			subtitle={i && i.app_name ? i.app_name : undefined}
		>
			<Nl emoticon={emoticon} emoticonHoverStore={store} large />
		</O>
	);
});
const O = ({ target, title, subtitle, children }) => (
	<o.g
		target={target}
		style={{
			zIndex: 1700,
		}}
		className={D.EmoticonHover}
	>
		{children}
		<div className={D.Info}>
			<div className={D.Name}>{title || <span>{"\xA0"}</span>}</div>
			<div className={D.AppName}>{subtitle || <span>{"\xA0"}</span>}</div>
		</div>
	</o.g>
);
function P(e) {
	return e.recent_emoticons;
}
function L(e) {
	return e.recent_stickers;
}
function z(e) {
	return P(e).length + L(e).length > 0;
}
export const Q4 = PA((e) => {
	const {
		emoticonStore,
		emoticonHoverStore,
		roomEffectSettings,
		strFlairGroupID,
		onEmoticonSelected,
		onRoomEffectSelected,
		onStickerSelected,
	} = e;
	((e) => {
		const [t, setT] = useState(e.is_initialized);
		useEffect(() => {
			if (!e.is_initialized) {
				e.UpdateEmoticonList();
				const t = z7(
					() => e.is_initialized,
					() => setT(e.is_initialized),
				);
				return () => t();
			}
			return () => {};
		}, [e]);
	})(emoticonStore);
	const m = [];
	if (z(emoticonStore)) {
		m.push({
			renderTab: (e) => (
				<span
					title={(0, Localize)("#AddonPicker_RecentlyUsed")}
					className={A(D.PickerTab, D.Clock, e && D.ActiveTab)}
				>
					<Ce />
				</span>
			),
			renderContent: () => (
				<H
					store={emoticonStore}
					hoverStore={emoticonHoverStore}
					onEmoticonSelect={(e) => onEmoticonSelected(e.name)}
					onStickerSelect={(e) => onStickerSelected(e.name)}
					flairGroupID={strFlairGroupID}
				/>
			),
		});
	}
	return (
		<u.tz>
			<Y_1
				config={[
					...m,
					{
						renderTab: (e) => (
							<span
								title={(0, Localize)("#AddonPicker_Emoticons")}
								className={A(D.PickerTab, e && D.ActiveTab)}
							>
								<Se />
							</span>
						),
						renderContent: () => (
							<J
								store={emoticonStore}
								hoverStore={emoticonHoverStore}
								onItemSelect={(e) => onEmoticonSelected(e.name)}
								flairGroupID={strFlairGroupID}
							/>
						),
					},
					{
						renderTab: (e) => (
							<span
								title={(0, Localize)("#AddonPicker_Stickers")}
								className={A(D.PickerTab, e && D.ActiveTab)}
							>
								<Ie />
							</span>
						),
						renderContent: () => (
							<Q
								store={emoticonStore}
								onItemSelect={(e) => onStickerSelected(e.name)}
							/>
						),
					},
					{
						renderTab: (e) => (
							<span
								title={(0, Localize)("#AddonPicker_RoomEffects")}
								className={A(D.PickerTab, e && D.ActiveTab)}
							>
								<Le />
							</span>
						),
						renderContent: () => (
							<Z
								store={emoticonStore}
								effectSettings={roomEffectSettings}
								onItemSelect={(e) => onRoomEffectSelected(e.name)}
							/>
						),
					},
				]}
			/>
		</u.tz>
	);
});
export let X6 = class extends s.Component {
	m_disposeEmoticonStore;
	constructor(e) {
		super(e);
		this.state = {
			strSearchText: "",
		};
		let t = this.props.emoticonStore;
		if (!t.is_initialized) {
			t.UpdateEmoticonList();
			this.m_disposeEmoticonStore = z7(
				() => t.is_initialized,
				() => this.forceUpdate(),
			);
		}
	}
	componentWillUnmount() {
		if (this.m_disposeEmoticonStore) {
			this.m_disposeEmoticonStore();
		}
	}
	render() {
		const {
			emoticonStore,
			emoticonHoverStore,
			onEmoticonSelected,
			onStickerSelected,
			strFlairGroupID,
		} = this.props;
		const a = [];
		if (z(emoticonStore)) {
			a.push({
				renderTab: (e) => (
					<span
						title={(0, Localize)("#AddonPicker_RecentlyUsed")}
						className={A(D.PickerTab, D.Clock, e && D.ActiveTab)}
					>
						<Ce />
					</span>
				),
				renderContent: () => (
					<H
						store={emoticonStore}
						hoverStore={emoticonHoverStore}
						onEmoticonSelect={(e) => onEmoticonSelected(e.name)}
						onStickerSelect={(e) => onStickerSelected(e.name)}
						flairGroupID={strFlairGroupID}
					/>
				),
			});
		}
		return (
			<u.tz>
				<Y_1
					config={[
						...a,
						{
							renderTab: (e) => (
								<span
									title={(0, Localize)("#AddonPicker_Emoticons")}
									className={A(D.PickerTab, e && D.ActiveTab)}
								>
									<Se />
								</span>
							),
							renderContent: () => (
								<J
									store={emoticonStore}
									hoverStore={emoticonHoverStore}
									onItemSelect={(e) => onEmoticonSelected(e.name)}
									flairGroupID={strFlairGroupID}
								/>
							),
						},
						{
							renderTab: (e) => (
								<span
									title={(0, Localize)("#AddonPicker_Stickers")}
									className={A(D.PickerTab, e && D.ActiveTab)}
								>
									<Ie />
								</span>
							),
							renderContent: () => (
								<Q
									store={emoticonStore}
									onItemSelect={(e) => onStickerSelected(e.name)}
								/>
							),
						},
					]}
				/>
			</u.tz>
		);
	}
};
X6 = Cg([a.PA], X6);
export class iY extends s.Component {
	m_disposeEmoticonStore;
	constructor(e) {
		super(e);
		this.state = {
			strSearchText: "",
		};
		let t = this.props.emoticonStore;
		if (!t.is_initialized) {
			t.UpdateEmoticonList();
			this.m_disposeEmoticonStore = z7(
				() => t.is_initialized,
				() => this.forceUpdate(),
			);
		}
	}
	componentWillUnmount() {
		if (this.m_disposeEmoticonStore) {
			this.m_disposeEmoticonStore();
		}
	}
	render() {
		return (
			<u.tz>
				<Y_1
					config={[
						{
							renderTab: () => (
								<span
									title={(0, Localize)("#AddonPicker_Emoticons")}
									className={D.PickerTab}
								>
									<Se />
								</span>
							),
							renderContent: () => (
								<Y
									store={this.props.emoticonStore}
									hoverStore={this.props.emoticonHoverStore}
									onItemSelect={(e) => this.props.OnSelected(e.name, false)}
									flairGroupID={this.props.strFlairGroupID}
								/>
							),
						},
					]}
				/>
			</u.tz>
		);
	}
}
export class CE extends s.Component {
	m_disposeEmoticonStore;
	constructor(e) {
		super(e);
		this.state = {
			strSearchText: "",
		};
		let t = this.props.emoticonStore;
		if (!t.is_initialized) {
			t.UpdateEmoticonList();
			this.m_disposeEmoticonStore = z7(
				() => t.is_initialized,
				() => this.forceUpdate(),
			);
		}
	}
	componentWillUnmount() {
		if (this.m_disposeEmoticonStore) {
			this.m_disposeEmoticonStore();
		}
	}
	render() {
		return (
			<u.tz>
				<Y_1
					config={[
						{
							renderTab: () => (
								<span
									title={(0, Localize)("#AddonPicker_Emoticons")}
									className={D.PickerTab}
								>
									<Se />
								</span>
							),
							renderContent: () => (
								<K
									store={this.props.emoticonStore}
									hoverStore={this.props.emoticonHoverStore}
									onItemSelect={(e) => this.props.OnSelected(e.name, false)}
									flairGroupID={this.props.strFlairGroupID}
								/>
							),
						},
					]}
				/>
			</u.tz>
		);
	}
}
class H extends s.Component {
	state = {
		filter: "",
	};
	render() {
		const { store, hoverStore, onEmoticonSelect, onStickerSelect } = this.props;
		const { filter } = this.state;
		const a = [];
		if (P(store)) {
			a.push({
				title: (0, Localize)("#AddonPicker_RecentEmoticons"),
				items: l.p.FilterEmoticons(P(store), filter),
				onItemSelect: onEmoticonSelect,
				renderItem: (e) => <KS emoticon={e} emoticonHoverStore={hoverStore} />,
				keyExtractor: (e) => e.name,
				renderEmpty: () => (
					<R>
						{filter
							? (0, Localize)("#AddonPicker_NoResults")
							: (0, Localize)(
									"#AddonPicker_NoRecent",
									(0, Localize)("#AddonPicker_Emoticons"),
								)}
					</R>
				),
			});
		}
		if (L(store).length) {
			a.push({
				title: (0, Localize)("#AddonPicker_RecentStickers"),
				items: l.p.FilterStickers(L(store), filter),
				onItemSelect: onStickerSelect,
				renderItem: (e) => <EE sticker={e} />,
				keyExtractor: ({ name }) => name,
				renderEmpty: () => (
					<R>
						{filter
							? (0, Localize)("#AddonPicker_NoResults")
							: (0, Localize)(
									"#AddonPicker_NoRecent",
									(0, Localize)("#AddonPicker_Stickers"),
								)}
					</R>
				),
			});
		}
		return (
			<E
				onFilterChange={(e) =>
					this.setState({
						filter: e,
					})
				}
				filter={filter}
				sections={a}
			/>
		);
	}
}
class J extends s.Component {
	state = {
		filter: "",
	};
	render() {
		const { store, hoverStore, onItemSelect, flairGroupID } = this.props;
		const { filter } = this.state;
		const a =
			!filter && flairGroupID
				? store.GetFlairListByGroupID(flairGroupID)
				: store.emoticon_list;
		const o = l.p.FilterEmoticons(a, filter).slice(0, 1000);
		return (
			<I
				title={(0, Localize)("#AddonPicker_Emoticons")}
				items={o}
				onItemSelect={onItemSelect}
				renderItem={(e) => <KS emoticon={e} emoticonHoverStore={hoverStore} />}
				keyExtractor={(e) => e.name}
				onFilterChange={(e) =>
					this.setState({
						filter: e,
					})
				}
				filter={filter}
				onSubmit={() => onItemSelect(o[0])}
				renderEmpty={() =>
					filter ? <R>{(0, Localize)("#AddonPicker_NoResults")}</R> : <Q_1 />
				}
			/>
		);
	}
}
function Q_1() {
	return (
		<>
			<R>
				{(0, Localize)(
					"#AddonPicker_NoneOwned",
					(0, Localize)("#AddonPicker_Emoticons"),
				)}
			</R>
			<R>
				{LocalizeReact(
					"#AddonPicker_AcquireAtPointsShopOrMarket",
					<N.uU href={`${h.TS.STORE_BASE_URL}points/shop/c/emoticons`}>
						{(0, Localize)("#AddonPicker_AcquireAtPointsShop_Link")}
					</N.uU>,
					<N.uU href={`${h.TS.COMMUNITY_BASE_URL}market`}>
						{(0, Localize)("#AddonPicker_AcquireAtPointsShopOrMarket_Link")}
					</N.uU>,
				)}
			</R>
		</>
	);
}
class Q extends s.Component {
	state = {
		filter: "",
	};
	render() {
		const { store, onItemSelect } = this.props;
		const { filter } = this.state;
		const n = l.p.FilterStickers(store.GetStickerList(), filter);
		return (
			<I
				title={(0, Localize)("#EmoticonPicker_StickerHeading")}
				items={n}
				onItemSelect={onItemSelect}
				renderItem={(e) => <EE sticker={e} />}
				keyExtractor={({ name }) => name}
				onFilterChange={(e) =>
					this.setState({
						filter: e,
					})
				}
				filter={filter}
				onSubmit={() => onItemSelect(n[0])}
				renderEmpty={() =>
					filter ? (
						<R>{(0, Localize)("#AddonPicker_NoResults")}</R>
					) : (
						<>
							<R>
								{(0, Localize)(
									"#AddonPicker_NoneOwned",
									(0, Localize)("#AddonPicker_Stickers"),
								)}
							</R>
							<R>
								{LocalizeReact(
									"#AddonPicker_AcquireAtPointsShop",
									<N.uU href={`${h.TS.STORE_BASE_URL}points/shop/c/stickers`}>
										{(0, Localize)("#AddonPicker_AcquireAtPointsShop_Link")}
									</N.uU>,
								)}
							</R>
						</>
					)
				}
			/>
		);
	}
}
class Z extends s.Component {
	state = {
		filter: "",
	};
	render() {
		const { store, effectSettings, onItemSelect } = this.props;
		const { filter } = this.state;
		const i = store.GetEffectList().filter(({ name }) => name.includes(filter));
		return (
			<I
				title={(0, Localize)("#EmoticonPicker_EffectHeading")}
				items={i}
				onItemSelect={onItemSelect}
				renderItem={(e) => (
					<P6 effect={e} roomEffectSettings={effectSettings} />
				)}
				keyExtractor={({ name }) => name}
				onFilterChange={(e) =>
					this.setState({
						filter: e,
					})
				}
				filter={filter}
				onSubmit={() => onItemSelect(i[0])}
				renderEmpty={() =>
					filter ? (
						<R>{(0, Localize)("#AddonPicker_NoResults")}</R>
					) : (
						<>
							<R>
								{(0, Localize)(
									"#AddonPicker_NoneOwned",
									(0, Localize)("#AddonPicker_RoomEffects"),
								)}
							</R>
							<R>
								{LocalizeReact(
									"#AddonPicker_AcquireAtPointsShop",
									<N.uU
										href={`${h.TS.STORE_BASE_URL}points/shop/c/chateffects`}
									>
										{(0, Localize)("#AddonPicker_AcquireAtPointsShop_Link")}
									</N.uU>,
								)}
							</R>
						</>
					)
				}
			/>
		);
	}
}
let Y = class extends s.Component {
	state = {
		filter: "",
	};
	render() {
		const { store, hoverStore, onItemSelect, flairGroupID } = this.props;
		const { filter } = this.state;
		const a = [];
		if (P(store).length) {
			a.push({
				title: (0, Localize)("#AddonPicker_RecentEmoticons"),
				items: l.p.FilterEmoticons(P(store), filter),
				onItemSelect: onItemSelect,
				renderItem: (e) => <KS emoticon={e} emoticonHoverStore={hoverStore} />,
				keyExtractor: (e) => e.name,
				renderEmpty: () => (
					<R>
						{filter
							? (0, Localize)("#AddonPicker_NoResults")
							: (0, Localize)(
									"#AddonPicker_NoRecent",
									(0, Localize)("#AddonPicker_Emoticons"),
								)}
					</R>
				),
			});
		}
		return (
			<E
				onFilterChange={(e) =>
					this.setState({
						filter: e,
					})
				}
				filter={filter}
				sections={[
					...a,
					{
						title: (0, Localize)("#AddonPicker_AllEmoticons"),
						items: l.p
							.FilterStickers(store.emoticon_list, filter)
							.slice(0, 1000),
						onItemSelect: onItemSelect,
						renderItem: (e) => (
							<KS emoticon={e} emoticonHoverStore={hoverStore} />
						),
						keyExtractor: (e) => e.name,
						renderEmpty: () =>
							filter ? (
								<R>{(0, Localize)("#AddonPicker_NoResults")}</R>
							) : (
								<Q_1 />
							),
					},
				]}
			/>
		);
	}
};
Y = Cg([a.PA], Y);
let K = class extends s.Component {
	state = {
		filter: "",
	};
	render() {
		const { store, hoverStore, onItemSelect, flairGroupID } = this.props;
		const { filter } = this.state;
		return (
			<E
				onFilterChange={(e) =>
					this.setState({
						filter: e,
					})
				}
				filter={filter}
				sections={[
					{
						title: (0, Localize)("#ChatEntryButton_Flair"),
						items: l.p.FilterStickers(
							store.GetFlairListByGroupID(flairGroupID),
							filter,
						),
						onItemSelect: onItemSelect,
						renderItem: (e) => (
							<KS emoticon={e} emoticonHoverStore={hoverStore} />
						),
						keyExtractor: (e) => e.name,
						renderEmpty: () =>
							filter ? (
								<R>{(0, Localize)("#AddonPicker_NoResults")}</R>
							) : (
								<Q_1 />
							),
					},
				]}
			/>
		);
	}
};
K = Cg([a.PA], K);
export const KS = (e) => {
	const { emoticon, emoticonHoverStore, large } = e;
	const i = !emoticon.last_used && emoticon.time_received;
	return (
		<div className={D.EmoticonItem}>
			<Nl
				emoticon={emoticon.name}
				emoticonHoverStore={emoticonHoverStore}
				large={large}
			/>
			{i && <ID />}
		</div>
	);
};
export class EE extends s.Component {
	state = {
		showHover: false,
	};
	m_ref = s.createRef();
	render() {
		const { sticker, className, ...r } = this.props;
		const n = G_1(h.TS.COMMUNITY_CDN_URL, sticker.name);
		return (
			<div
				ref={this.m_ref}
				className={A(className, D.StickerButton)}
				onMouseOver={() =>
					this.setState({
						showHover: true,
					})
				}
				onFocus={() =>
					this.setState({
						showHover: true,
					})
				}
				onMouseLeave={() =>
					this.setState({
						showHover: false,
					})
				}
				onBlur={() =>
					this.setState({
						showHover: false,
					})
				}
				{...r}
			>
				<img
					style={{
						width: "100%",
					}}
					src={n}
				/>
				{this.state.showHover && (
					<KW target={this.m_ref.current} sticker={sticker} />
				)}
			</div>
		);
	}
}
export const KW = PA((e) => {
	const {
		target,
		sticker: { name: r, appid: n },
	} = e;
	const [i] = t7(n, {});
	return (
		<O target={target} title={r} subtitle={i?.GetName()}>
			<img
				src={G_1(h.TS.COMMUNITY_CDN_URL, r)}
				className={D.StickerHoverSticker}
			/>
		</O>
	);
});
export class P6 extends s.Component {
	state = {
		showHover: false,
	};
	m_ref = s.createRef();
	render() {
		const { effect, roomEffectSettings, className, ...n } = this.props;
		const i = roomEffectSettings[effect.name];
		return (
			<div
				ref={this.m_ref}
				onMouseOver={() =>
					this.setState({
						showHover: true,
					})
				}
				onFocus={() =>
					this.setState({
						showHover: true,
					})
				}
				onMouseLeave={() =>
					this.setState({
						showHover: false,
					})
				}
				onBlur={() =>
					this.setState({
						showHover: false,
					})
				}
				className={A(className, D.EffectButton)}
				{...n}
			>
				{i.renderEffectIcon()}
				{this.state.showHover && (
					<Te
						target={this.m_ref.current}
						effect={effect}
						roomEffectSettings={roomEffectSettings}
					/>
				)}
			</div>
		);
	}
}
const Te = PA((e) => {
	const {
		target,
		effect: { name: r, appid: n },
		roomEffectSettings,
	} = e;
	const i_r = roomEffectSettings[r];
	const [o] = t7(n, {});
	return (
		<O target={target} title={r} subtitle={o?.GetName()}>
			<div className={D.EffectHoverEffect}>{i_r.renderEffectIcon()}</div>
		</O>
	);
});
export function ID() {
	return (
		<div className={D.NewEmoticonIndicator}>
			<div className={D.NewEmoticonCircle} />
		</div>
	);
}
export function qm(e) {
	if (Qn()) {
		return (
			<svg
				viewBox="0 0 36 36"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...e}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z"
					fill="currentColor"
				/>
				<path
					d="M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z"
					fill="currentColor"
				/>
				<path
					d="M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z"
					fill="currentColor"
				/>
				<path
					d="M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z"
					fill="currentColor"
				/>
				<path d="M21 29H22.1875V31H19L21 29Z" fill="currentColor" />
				<path
					d="M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3981 31 25 31H24.0625V29Z"
					fill="currentColor"
				/>
				<path d="M29 22.1875V21L31 19V22.1875H29Z" fill="currentColor" />
			</svg>
		);
	} else {
		return (
			<svg viewBox="0 0 59 59" width="32" {...e}>
				<switch>
					<g>
						<path
							d="M58 30.2v-.1L23.4 58.5l-.2-.3-.1.1C9.9 55.4 0 43.6 0 29.5 0 13.2 13.2 0 29.5 0S59 13.2 59 29.4l-1 .8zm0-1.5c-5-2.2-16.1-4-26 4.6-9.8 8.4-10.3 18.8-9.2 23.9C10.3 54.2 1 42.9 1 29.5 1 13.8 13.8 1 29.5 1 45 1 57.6 13.3 58 28.7zm-.8.8L23.7 56.9c-1-4.8-.5-14.8 8.9-22.9 9.4-8 19.7-6.6 24.6-4.5z"
							fillRule="evenodd"
							clipRule="evenodd"
							fill="#fff"
						/>
					</g>
				</switch>
			</svg>
		);
	}
}
function Ie(e) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 36 36"
			fill="none"
			{...e}
		>
			<path
				fill="currentColor"
				d="M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z"
			/>
			<path
				fill="currentColor"
				d="M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z"
			/>
			<path
				fill="currentColor"
				d="M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z"
			/>
			<path
				fill="currentColor"
				d="M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z"
			/>
			<path fill="currentColor" d="M21 29H22.1875V31H19L21 29Z" />
			<path
				fill="currentColor"
				d="M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z"
			/>
			<path fill="currentColor" d="M29 22.1875V21L31 19V22.1875H29Z" />
		</svg>
	);
}
export function ZT(e) {
	if (Qn()) {
		return (
			<svg
				width="36"
				height="36"
				viewBox="0 0 36 36"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...e}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M33 18C33 26.2843 26.2843 33 18 33C15.031 33 12.2636 32.1374 9.93446 30.6492L4.35707 32.4107C3.95174 32.5387 3.58168 32.1347 3.74474 31.7421L5.81718 26.7529C4.04426 24.2896 3 21.2667 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18ZM18 9.66667C16.3518 9.66667 14.7407 10.1554 13.3703 11.0711C11.9998 11.9868 10.9317 13.2883 10.301 14.811C9.67028 16.3337 9.50525 18.0092 9.82679 19.6258C10.1483 21.2423 10.942 22.7271 12.1074 23.8926C13.2729 25.058 14.7577 25.8517 16.3743 26.1732C17.9908 26.4948 19.6663 26.3297 21.189 25.699C22.7118 25.0683 24.0132 24.0002 24.9289 22.6298C25.8446 21.2593 26.3333 19.6482 26.3333 18C26.3333 16.9057 26.1178 15.822 25.699 14.811C25.2802 13.7999 24.6664 12.8813 23.8926 12.1074C23.1187 11.3336 22.2001 10.7198 21.189 10.301C20.178 9.88222 19.0944 9.66667 18 9.66667ZM13 16.3333C13 16.0037 13.0978 15.6815 13.2809 15.4074C13.464 15.1333 13.7243 14.9197 14.0289 14.7935C14.3334 14.6674 14.6685 14.6344 14.9918 14.6987C15.3151 14.763 15.6121 14.9217 15.8452 15.1548C16.0783 15.3879 16.237 15.6849 16.3013 16.0082C16.3656 16.3315 16.3326 16.6666 16.2065 16.9711C16.0803 17.2757 15.8667 17.536 15.5926 17.7191C15.3185 17.9023 14.9963 18 14.6667 18C14.2246 18 13.8007 17.8244 13.4882 17.5118C13.1756 17.1993 13 16.7754 13 16.3333ZM21.3333 18C21.0037 18 20.6815 17.9023 20.4074 17.7191C20.1333 17.536 19.9197 17.2757 19.7935 16.9711C19.6674 16.6666 19.6344 16.3315 19.6987 16.0082C19.763 15.6849 19.9217 15.3879 20.1548 15.1548C20.3879 14.9217 20.6849 14.763 21.0082 14.6987C21.3315 14.6344 21.6666 14.6674 21.9711 14.7935C22.2757 14.9197 22.536 15.1333 22.7191 15.4074C22.9023 15.6815 23 16.0037 23 16.3333C23 16.7754 22.8244 17.1993 22.5119 17.5118C22.1993 17.8244 21.7754 18 21.3333 18ZM19.9642 22.1864C20.4851 21.6655 20.7778 20.9589 20.7778 20.2222H15.2222C15.2222 20.9589 15.5149 21.6655 16.0358 22.1864C16.5568 22.7073 17.2633 23 18 23C18.7367 23 19.4433 22.7073 19.9642 22.1864Z"
					fill="currentColor"
				/>
			</svg>
		);
	} else {
		return (
			<svg viewBox="0 -8 60 60" width="32" {...e}>
				<path
					d="M.5 5.5C.5 2.5 3 0 6 0h48c3 0 5.5 2.5 5.5 5.5V35c0 3-2.5 5.5-5.5 5.5h-1.5c-.8 0-1.5.7-1.5 1.5v8.1c0 1.3-1.6 2-2.6 1.1L37.8 40.5H6C3 40.5.5 38 .5 35V5.5zM6 1C3.5 1 1.5 3 1.5 5.5V35c0 2.5 2 4.5 4.5 4.5h32.2l.1.1 10.8 10.8c.3.3.9.1.9-.4v-8c0-1.4 1.1-2.5 2.5-2.5H54c2.5 0 4.5-2 4.5-4.5V5.5C58.5 3 56.5 1 54 1H6zm24 31c6.6 0 12-5.4 12-12S36.6 8 30 8s-12 5.4-12 12 5.4 12 12 12zm0 1c7.2 0 13-5.8 13-13S37.2 7 30 7s-13 5.8-13 13 5.8 13 13 13zm-3.5-15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm8.5-1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM24.5 22c0 2.5 2 4.5 4.5 4.5h2c2.5 0 4.5-2 4.5-4.5h-1c0 1.9-1.6 3.5-3.5 3.5h-2c-1.9 0-3.5-1.6-3.5-3.5h-1z"
					fillRule="evenodd"
					clipRule="evenodd"
					fill="#fff"
				/>
			</svg>
		);
	}
}
function Se(e) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 36 36"
			fill="none"
			{...e}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z"
			/>
		</svg>
	);
}
export function Mj(e) {
	if (Qn()) {
		return (
			<svg
				viewBox="0 0 36 36"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...e}
			>
				<path
					d="M14.5 7L17.2 15.37C17.5375 16.5175 18.4825 17.395 19.63 17.8L28 20.5L19.63 23.2C18.4825 23.5375 17.605 24.4825 17.2 25.63L14.5 34L11.8 25.63C11.4625 24.4825 10.5175 23.605 9.37 23.2L1 20.5L9.37 17.8C10.5175 17.4625 11.395 16.5175 11.8 15.37L14.5 7Z"
					fill="currentColor"
				/>
				<path
					d="M24.9231 2L26.3077 6.33599C26.4923 6.94209 26.9538 7.40833 27.5538 7.59482L31.8462 8.99353L27.5538 10.3922C26.9538 10.5787 26.4923 11.045 26.3077 11.6511L24.9231 15.9871L23.5385 11.6511C23.3538 11.045 22.8923 10.5787 22.2923 10.3922L18 8.99353L22.2923 7.59482C22.8923 7.40833 23.3538 6.94209 23.5385 6.33599L24.9231 2Z"
					fill="currentColor"
				/>
				<path
					d="M7.46154 3L8.15385 5.1913C8.24615 5.47105 8.47692 5.70416 8.75384 5.79741L10.9231 6.49676L8.75384 7.19611C8.47692 7.28936 8.24615 7.52248 8.15385 7.80222L7.46154 9.99352L6.76923 7.80222C6.67692 7.52248 6.44615 7.28936 6.16923 7.19611L4 6.49676L6.16923 5.79741C6.44615 5.70416 6.67692 5.47105 6.76923 5.1913L7.46154 3Z"
					fill="currentColor"
				/>
				<path
					d="M31.4615 12L32.1538 14.1913C32.2462 14.471 32.4769 14.7042 32.7538 14.7974L34.9231 15.4968L32.7538 16.1961C32.4769 16.2894 32.2462 16.5225 32.1538 16.8022L31.4615 18.9935L30.7692 16.8022C30.6769 16.5225 30.4462 16.2894 30.1692 16.1961L28 15.4968L30.1692 14.7974C30.4462 14.7042 30.6769 14.471 30.7692 14.1913L31.4615 12Z"
					fill="currentColor"
				/>
				<path
					d="M26.4615 25L27.1538 27.1913C27.2462 27.471 27.4769 27.7042 27.7538 27.7974L29.9231 28.4968L27.7538 29.1961C27.4769 29.2894 27.2462 29.5225 27.1538 29.8022L26.4615 31.9935L25.7692 29.8022C25.6769 29.5225 25.4462 29.2894 25.1692 29.1961L23 28.4968L25.1692 27.7974C25.4462 27.7042 25.6769 27.471 25.7692 27.1913L26.4615 25Z"
					fill="currentColor"
				/>
			</svg>
		);
	} else {
		return (
			<svg viewBox="0 0 60 38" width="32" {...e}>
				<path
					d="M16 8.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L16 25.1 14.1 20c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L17 25.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L7.5 18c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1zm17.8 15.4l-1.9-5-1.9 5.1c-.2.5-.6 1-1.2 1.2l-5 1.8 5.1 1.9c.5.2 1 .6 1.2 1.2l1.9 5.1 1.9-5.1c.2-.5.6-1 1.2-1.2l5.1-1.9-5.1-1.9c-.7-.2-1.1-.6-1.3-1.2zm-1-5.4c-.3-.9-1.6-.9-1.9 0l-1.9 5.1c-.1.3-.3.5-.6.6l-5.1 1.9c-.9.3-.9 1.6 0 1.9l5.1 1.9c.3.1.5.3.6.6l1.9 5.1c.3.9 1.6.9 1.9 0l1.9-5.1c.1-.3.3-.5.6-.6l5.1-1.9c.9-.3.9-1.6 0-1.9l-5.1-1.9c-.3-.1-.5-.3-.6-.6l-1.9-5.1zM43 4.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L43 21.1 41.1 16c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L44 21.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L34.5 14c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1z"
					fillRule="evenodd"
					clipRule="evenodd"
					fill="#fff"
				/>
			</svg>
		);
	}
}
function Le(e) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 36 36"
			fill="none"
			{...e}
		>
			<path
				fill="currentColor"
				d="M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z"
			/>
			<path
				fill="currentColor"
				d="M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z"
			/>
			<path
				fill="currentColor"
				d="M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z"
			/>
			<path
				fill="currentColor"
				d="M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z"
			/>
			<path
				fill="currentColor"
				d="M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z"
			/>
		</svg>
	);
}
function Ce(e) {
	const { className, ...r } = e;
	return (
		<svg
			className={A("SVGIcon_Button SVGIcon_Clock", className)}
			version="1.1"
			x="0px"
			Y_1="0px"
			width="20px"
			height="20px"
			viewBox="0 0 24 24"
			{...r}
		>
			<path d="M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" />
		</svg>
	);
}
