import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import {
	Localize,
	LocalizationManager,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i, { Id } from "./77347.js";
import a from "./96593.js";
import s, { Sw } from "./48289.js";
import o from "./61175.js";
import l from "./46422.js";
import c, { q3 } from "./90095.js";
import m from "./41230.js";
import u from "./63696.js";
import d from "./69164.js";
import A from "./72655.js";
import p from "./61657.js";
import g from "./4690.js";
import h from "./64608.js";
import C from "./50376.js";
import _ from "./35488.js";
import f from "./98995.js";
import b from "./43520.js";
import { A as A_1 } from "./90765.js";
import B from "./52451.js";
import v, { Qn } from "./72476.js";
import I, { $P, Qv } from "./14629.js";
import E from "./85524.js";
import T, { x2 } from "./31706.js";
import { wf } from "./32598.js";
import _k from "./34348.js";
const M = E;
const D = _k;
const N = 18;
function F(e) {
	if (!e) {
		return null;
	}
	return [
		[
			12,
			<>
				<C.o5Q />
			</>,
		],
		[
			13,
			<>
				<C.o5Q />
				<C.aVR />
			</>,
		],
		[
			14,
			<>
				<C.o5Q />
				<C.aVR />
				<C.WX$ />
			</>,
		],
		[
			15,
			<>
				<C.o5Q />
				<C.aVR />
				<C.WX$ />
				<C.jIP />
			</>,
		],
		[
			2,
			<>
				<_.ControllerType
					className={M.SmallerSVG}
					controllerType={32}
					partial={false}
				/>
			</>,
		],
		[
			16,
			<>
				<_.ControllerType
					className={M.SmallerSVG}
					controllerType={34}
					partial={false}
				/>
			</>,
		],
		[
			18,
			<>
				<_.ControllerType
					className={M.SmallerSVG}
					controllerType={45}
					partial={false}
				/>
			</>,
		],
		[
			20,
			<>
				<_.FrankenController
					className={M.BiggerSVG}
					bGreyOutRightSide={false}
				/>
			</>,
		],
	].find((t) => t[0] == e)[1];
}
const G = (e) => {
	const { eFeature, description, name } = e;
	return (
		<f.he
			className={M.CompatDropDownOption}
			toolTipContent={(0, Localize)(description)}
		>
			{F(eFeature)}
			<div className={M.CompatLabel}>{(0, Localize)(name)}</div>
		</f.he>
	);
};
const O = (e) => {
	const { appFilter, fnOnChange } = e;
	const n = [
		{
			data: 12,
			label: (
				<G
					eFeature={12}
					description={
						v.TS.ON_DECK
							? "#DeckVerified_FilterDescription_Verified"
							: "#DeckVerified_FilterDescription_Verified_NotOnDeck"
					}
					name="#DeckVerified_FilterLabel_Verified"
				/>
			),
		},
		{
			data: 13,
			label: (
				<G
					eFeature={13}
					description="#DeckVerified_FilterDescription_Verified_Playable"
					name="#DeckVerified_FilterLabel_Verified_Playable"
				/>
			),
		},
		{
			data: 14,
			label: (
				<G
					eFeature={14}
					description="#DeckVerified_FilterDescription_Verified_Playable_Unknown"
					name="#DeckVerified_FilterLabel_Verified_Playable_Unknown"
				/>
			),
		},
		{
			data: 15,
			label: (
				<G
					eFeature={15}
					description="#DeckVerified_FilterDescription_AllGames"
					name="#DeckVerified_FilterLabel_AllGames"
				/>
			),
		},
	];
	const i = q3(() => appFilter.GetCurrentSteamDeckCompatOption());
	const a = u.useCallback(
		(e) => {
			appFilter.SelectOption(2, e.data, true);
			if (fnOnChange) {
				fnOnChange();
			}
		},
		[appFilter, fnOnChange],
	);
	const s =
		i == 15 ? (
			<div className={M.Default}>
				{(0, Localize)("#AdvancedSearch_SteamDeckOptions")}
			</div>
		) : (
			F(i)
		);
	return (
		<div className={A_1(M.CompatDropDown, M.DeckVerified)}>
			<h.ZU
				strDropDownClassName={M.DropDownContainer}
				strDropDownItemClassName={M.DropDownItems}
				strDefaultLabel={s}
				selectedOption={0}
				onChange={a}
				rgOptions={n}
			/>
		</div>
	);
};
const P = (e) => {
	const { appFilter, fnOnChange } = e;
	const n = q3(() => appFilter.GetCurrentControllerSpecificOption());
	const i = [
		{
			data: undefined,
			label: (
				<G
					eFeature={undefined}
					description={undefined}
					name={
						n == null
							? "#AdvancedSearch_ControllerSpecificFilterOptions"
							: "#FilterElement_None"
					}
				/>
			),
		},
		{
			data: 2,
			label: (
				<G
					eFeature={2}
					description="#FilterElement_Tooltip_PartialControllerSupport"
					name="#FilterElement_PartialControllerSupport"
				/>
			),
		},
		{
			data: 16,
			label: (
				<G
					eFeature={16}
					description="#FilterElement_Tooltip_PS4ControllerSupport"
					name="#FilterElement_PS4ControllerSupport"
				/>
			),
		},
		{
			data: 18,
			label: (
				<G
					eFeature={18}
					description="#FilterElement_Tooltip_PS5ControllerSupport"
					name="#FilterElement_PS5ControllerSupport"
				/>
			),
		},
		{
			data: 20,
			label: (
				<G
					eFeature={20}
					description="#FilterElement_Tooltip_SteamInputAPI"
					name="#FilterElement_SteamInputAPI"
				/>
			),
		},
	];
	const a = u.useCallback(
		(e) => {
			appFilter.SelectOption(2, 2, e.data == 2);
			appFilter.SelectOption(2, 16, e.data == 16);
			appFilter.SelectOption(2, 18, e.data == 18);
			appFilter.SelectOption(2, 20, e.data == 20);
			if (fnOnChange) {
				fnOnChange();
			}
		},
		[appFilter, fnOnChange],
	);
	const s = q3(() => i.find((e) => e.data == n));
	const o =
		s?.data == null ? (
			<div className={M.Default}>
				{(0, Localize)("#AdvancedSearch_ControllerSpecificFilterOptions")}
			</div>
		) : (
			s?.label
		);
	return (
		<div className={A_1(M.CompatDropDown)}>
			<h.ZU
				strDropDownClassName={M.DropDownContainer}
				strDropDownItemClassName={M.DropDownItems}
				strDefaultLabel={o}
				selectedOption={0}
				onChange={a}
				rgOptions={i}
			/>
		</div>
	);
};
export let k = class extends u.Component {
	static contextType = v.QO;
	GetGenreOptions() {
		return [19, 21, 597, 492, 128, 699, 122, 599, 701, 9].map((e) => ({
			bNameIsPrelocalized: true,
			name: a.tw.GetLocalizationForStoreTag(e),
			option: e,
		}));
	}
	GetFilterOptions(e, t) {
		return t.map((t) => ({
			name: $P(e, t),
			option: t,
		}));
	}
	Reset() {
		this.props.appFilter.Reset();
		if (this.props.fnOnChange) {
			this.props.fnOnChange();
		}
	}
	OnSaveClick(e) {
		let t = this.props.appFilter;
		if (this.props.lockedFeatures || this.props.lockedPlayStates) {
			t = new I.E6(this.props.appFilter.ToStorageFormat());
			if (this.props.lockedPlayStates) {
				this.props.lockedPlayStates.forEach((e) =>
					t.SelectOption(1, e.option, e.state),
				);
			}
			if (this.props.lockedFeatures) {
				this.props.lockedFeatures.forEach((e) =>
					t.SelectOption(2, e.option, e.state),
				);
			}
		}
		x2(
			GetOwningWindowForEvent(e),
			((e) => {
				const t = new Intl.ListFormat(
					LocalizationManager.GetPreferredLocales(),
					{
						type: "conjunction",
						style: "long",
					},
				);
				const r = e.GetAllSelectedOptions().map((e) => e.name);
				return t.format(r);
			})(t),
			t,
		).then(() => {
			if (this.props.closeModal) {
				this.props.closeModal();
			}
		});
	}
	render() {
		const e = (
			<span>
				{LocalizeReact(
					"#FilterEdit_SaveDynamicCollectionWithIcon",
					<C.U_V height={20} />,
				)}
			</span>
		);
		const t = this.context?.IN_GAMEPADUI
			? !this.props.appFilter.bIsEmpty
			: o.n6.BIsSearchByTypeActive();
		return (
			<div className={M.Container}>
				<div
					className={A_1(
						M.FilterArea,
						this.props.bUseWideFormat && M.WideFormat,
					)}
				>
					<W
						appFilter={this.props.appFilter}
						fnOnChange={this.props.fnOnChange}
						label={(0, Localize)("#AdvancedSearch_PlayerSection")}
						eGroup={2}
						className={M.Player}
						options={this.GetFilterOptions(2, [7, 8, 9])}
					/>
					<W
						appFilter={this.props.appFilter}
						fnOnChange={this.props.fnOnChange}
						label={(0, Localize)("#AdvancedSearch_StateSection")}
						eGroup={1}
						className={M.PlayState}
						options={this.GetFilterOptions(1, [2, 1, 3, 4])}
						lockedOptions={this.props.lockedPlayStates}
					/>
					<W
						appFilter={this.props.appFilter}
						fnOnChange={this.props.fnOnChange}
						label={(0, Localize)("#AdvancedSearch_HardwareSection")}
						eGroup={2}
						className={M.Hardware}
						options={this.GetFilterOptions(2, [21, 1, 3])}
						lockedOptions={this.props.lockedFeatures}
					>
						<P
							appFilter={this.props.appFilter}
							fnOnChange={this.props.fnOnChange}
						/>
						{!this.context?.IN_GAMEPADUI && (
							<O
								appFilter={this.props.appFilter}
								fnOnChange={this.props.fnOnChange}
							/>
						)}
					</W>
					<W
						appFilter={this.props.appFilter}
						fnOnChange={this.props.fnOnChange}
						label={(0, Localize)("#AdvancedSearch_FeatureSection")}
						eGroup={2}
						className={M.Feature}
						options={this.GetFilterOptions(2, [4, 5, 6, 11, 23])}
						lockedOptions={this.props.lockedFeatures}
					/>
					<W
						appFilter={this.props.appFilter}
						fnOnChange={this.props.fnOnChange}
						label={(0, Localize)("#AdvancedSearch_GenreSection")}
						eGroup={4}
						className={A_1(M.Genre, M.ExtraTall)}
						options={this.GetGenreOptions()}
					/>
					<Q_1
						appFilter={this.props.appFilter}
						fnOnChange={this.props.fnOnChange}
					/>
					<Q
						appFilter={this.props.appFilter}
						fnOnChange={this.props.fnOnChange}
					/>
				</div>
				<d.Z
					className={M.Buttons}
					navEntryPreferPosition={g.iU.PREFERRED_CHILD}
				>
					{this.context?.IN_GAMEPADUI && (
						<h.$n className={M.ClearButton} onClick={this.Reset}>
							{(0, Localize)("#AdvancedSearch_Reset")}
						</h.$n>
					)}
					{!this.props.bHideSaveButton && (
						<d.Z preferredFocus>
							<f.he
								toolTipContent="#FilterEdit_SaveDynamicCollectionButtonDesc"
								direction="bottom"
							>
								<h.jn
									className={M.SaveButton}
									focusable={t}
									disabled={!t}
									onClick={this.OnSaveClick}
								>
									{e}
								</h.jn>
							</f.he>
						</d.Z>
					)}
				</d.Z>
			</div>
		);
	}
};
function Z(e) {
	const { appFilter, selected, eGroup, tagid, fnOnChange } = e;
	const l = u.useCallback(() => {
		appFilter.SelectOption(eGroup, tagid, !selected);
		if (fnOnChange) {
			fnOnChange();
		}
	}, [appFilter, selected, eGroup, tagid, fnOnChange]);
	const m =
		q3(() => selected && eGroup === 6 && s.O$.IsLibraryAccessDenied(tagid)) &&
		(0, Localize)("#FilterElement_Tooltip_FriendLibrary_AccessDenied");
	const A = eGroup === 6;
	const p = q3(() => A && s.O$.GetFriendState(tagid)?.persona.avatar_url);
	const g = q3(() =>
		((e, t) => {
			if (e == 4) {
				return a.tw.GetLocalizationForStoreTag(t);
			} else {
				return $P(e, t);
			}
		})(eGroup, tagid),
	);
	return (
		<d.Z
			className={A_1(M.FilterStoreTag, selected && M.Selected, m && M.Error)}
			onActivate={l}
		>
			{p && <img src={p} width={N} height={N} />}
			<div className={A && M.Name}>{g}</div>
		</d.Z>
	);
}
function X(e) {
	const { options, eGroup, appFilter, fnOnChange } = e;
	const a = appFilter.GetSelectedOptions(eGroup);
	const s = q3(() =>
		a.filter((e) => !options.find((t) => t.option == e)).sort((e, t) => e - t),
	);
	if (a.length == 0 && options.length == 0) {
		return null;
	}
	const o = s.concat(options.map((e) => e.option));
	return (
		<b.VJ>
			<div className={M.SearchOptionsWrapper}>
				<d.Z className={M.SearchOptions} flow-children="row">
					{o.map((e) => (
						<Z
							key={e.toString()}
							appFilter={appFilter}
							selected={a.includes(e)}
							eGroup={eGroup}
							tagid={e}
							fnOnChange={fnOnChange}
						/>
					))}
					{o.length == 0 && <div />}
				</d.Z>
			</div>
		</b.VJ>
	);
}
function U(e) {
	const { filterOption, appFilter, eGroup, onChange, lockedOptions } = e;
	const o =
		eGroup == 6
			? ((m = filterOption.name),
				Id()
					? (0, Localize)("#FilterElement_Tooltip_FriendLibrary", m)
					: (0, Localize)("#FilterElement_Tooltip_FriendLibrary_Offline", m))
			: filterOption.bNameIsPrelocalized
				? (0, Localize)("#FilterElement_Tooltip_StoreTag", filterOption.name)
				: (0, Localize)(`#FilterElement_Tooltip_${filterOption.name}`);
	var m;
	const A = Qv(eGroup, filterOption.option);
	const g = filterOption.bNameIsPrelocalized
		? filterOption.name
		: (0, Localize)(`#FilterElement_${filterOption.name}`);
	const C = lockedOptions?.find((e) => filterOption.option == e.option);
	const _ = !!C;
	const b = q3(() =>
		_ ? C.state : appFilter.BIsSelected(eGroup, filterOption.option),
	);
	let S = A ? (
		<>
			<span>{g}</span>
			<span>*</span>
		</>
	) : (
		g
	);
	const [B, setB] = u.useState();
	const E = u.useCallback(
		(e) =>
			e.detail.button == p.pR.DIR_DOWN && !B && (setB(e.detail.button), true),
		[B],
	);
	u.useEffect(() => {
		if (B) {
			l.oy.NavigationManager.DispatchVirtualButtonClick(B);
		}
	}, [B]);
	const T = u.useCallback(() => {
		setB(undefined);
	}, []);
	return (
		<d.Z
			className={A_1(M.Row, !B && M.NotMoving)}
			key={`checkbox-${eGroup}-${filterOption.option}`}
			onGamepadFocus={T}
			onGamepadDirection={E}
		>
			<f.he toolTipContent={o}>
				<h.Yh
					className={M.Checkbox}
					label={S}
					noFocusRing
					disabled={_}
					checked={b}
					onChange={(e) => onChange(eGroup, filterOption.option, e)}
				/>
			</f.he>
		</d.Z>
	);
}
function W(e) {
	const {
		appFilter,
		label,
		eGroup,
		options,
		className,
		fnOnChange,
		lockedOptions,
		children,
	} = e;
	const c = Qn();
	const MRef = u.useRef(undefined);
	const d = u.useCallback(
		(e, r, n) => {
			appFilter.SelectOption(e, r, n);
			if (fnOnChange) {
				fnOnChange();
			}
		},
		[appFilter, fnOnChange],
	);
	const p = u.useCallback(
		() =>
			!!c &&
			(MRef.current?.scrollIntoView({
				block: "start",
				behavior: "smooth",
			}),
			true),
		[c],
	);
	return (
		<A.YZ
			ref={MRef}
			className={A_1(M.FilterBucket, className)}
			flow-children="column"
			fnScrollIntoViewHandler={p}
		>
			<div className={M.FilterBucketLabel}>{label}</div>
			{children}
			<div className={M.FilterBucketBoxes} tabIndex={-1}>
				{options.map((e) => (
					<U
						key={`checkbox-${eGroup}-${e.option}`}
						filterOption={e}
						appFilter={appFilter}
						eGroup={eGroup}
						onChange={d}
						lockedOptions={lockedOptions}
					/>
				))}
			</div>
		</A.YZ>
	);
}
function V(e) {
	return (e.length == 0 ? [] : a.tw.GetTopStoreTags(e).map((e) => e.nTagId))
		.slice(0, 10)
		.map((e) => ({
			bNameIsPrelocalized: true,
			name: a.tw.GetLocalizationForStoreTag(e),
			option: e,
		}));
}
function H(e) {
	const t = Sw();
	if (e.trim().length == 0) {
		return [];
	}
	let r = e.toLocaleLowerCase();
	let n = t.filter(
		(e) =>
			(e.nickname && e.nickname.toLocaleLowerCase().includes(r)) ||
			(e.persona && e.persona.m_strPlayerName.toLocaleLowerCase().includes(r)),
	);
	let i = n.filter(
		(e) =>
			(e.nickname && e.nickname.toLocaleLowerCase().startsWith(r)) ||
			(e.persona &&
				e.persona.m_strPlayerName.toLocaleLowerCase().startsWith(r)),
	);
	return i
		.concat(n.filter((e) => !i.includes(e)))
		.slice(0, Math.min(n.length, 6))
		.map((e, t) => ({
			bNameIsPrelocalized: true,
			name: $P(6, e.persona && e.persona.GetAccountID()),
			option: e.persona.m_steamid.GetAccountID(),
		}));
}
function J(e) {
	const {
		appFilter,
		eGroup,
		label,
		disabled,
		prompt,
		bShowTags,
		fnOnChange,
		optionsQuery,
	} = e;
	const [m, setM] = u.useState("");
	const g = q3(() => optionsQuery(m));
	const CRef = u.useRef(undefined);
	const _ = Qn();
	const f = u.useCallback(() => {
		CRef.current?.scrollIntoView({
			block: "start",
			behavior: "smooth",
		});
	}, []);
	if (_) {
		return (
			<>
				<d.Z key={label} ref={CRef}>
					<div className={(M.FilterBucketLabel, M.SearchBucketLabel)}>
						{(0, Localize)(label)}
					</div>
					<h.pd
						disabled={disabled}
						className={M.TagInputDialog}
						fnScrollIntoViewHandler={f}
						placeholder={(0, Localize)(prompt)}
						value={m}
						onChange={(e) => setM(e.currentTarget.value)}
						bShowClearAction
					/>
				</d.Z>
				<X
					key="searchresults"
					options={g}
					eGroup={eGroup}
					appFilter={appFilter}
					fnOnChange={fnOnChange}
				/>
			</>
		);
	}
	{
		let e = (e, t, r) => {
			e.SelectOption(t, r, false);
		};
		let l = bShowTags && (
			<div className={A_1(D.SearchFilterInput)}>{wf(appFilter, eGroup, e)}</div>
		);
		return (
			<>
				<W
					appFilter={appFilter}
					fnOnChange={fnOnChange}
					label={(0, Localize)(label)}
					eGroup={eGroup}
					className={A_1(
						M.StoreTag,
						M.DoubleWide,
						m.length > 0 && M.SearchResultsBox,
					)}
					options={g}
				>
					<h.pd
						disabled={disabled}
						placeholder={(0, Localize)(prompt)}
						value={m}
						onChange={(e) => setM(e.currentTarget.value)}
						bShowClearAction
					/>
				</W>
				{l && (
					<A.YZ
						ref={CRef}
						className={A_1(
							M.FilterBucket,
							M.StoreTag,
							M.DoubleWide,
							m.length > 0 && M.SearchResultsBox,
						)}
						flow-children="column"
						fnScrollIntoViewHandler={null}
					>
						{l}
					</A.YZ>
				)}
			</>
		);
	}
}
function Q_1(e) {
	return (
		<J
			appFilter={e.appFilter}
			eGroup={4}
			label="#AdvancedSearch_StoreTagSection"
			prompt="#AdvancedSearch_StoreTagPrompt"
			bShowTags={false}
			fnOnChange={e.fnOnChange}
			optionsQuery={V}
		/>
	);
}
function Q(e) {
	const t = Id();
	const r = t
		? "#AdvancedSearch_FriendsPrompt"
		: "#AdvancedSearch_FriendsPrompt_Offline";
	return (
		<J
			disabled={!t}
			appFilter={e.appFilter}
			eGroup={6}
			label="#AdvancedSearch_FriendsSection"
			prompt={r}
			bShowTags
			fnOnChange={e.fnOnChange}
			optionsQuery={H}
		/>
	);
}
Cg([B.oI], k.prototype, "Reset", null);
Cg([B.oI], k.prototype, "OnSaveClick", null);
k = Cg([m.PA], k);
