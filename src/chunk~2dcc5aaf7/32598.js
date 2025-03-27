import { BIsParent } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./77347.js";
import a from "./48289.js";
import s from "./61175.js";
import o from "./41230.js";
import l from "./63696.js";
import c from "./88750.js";
import m from "./64608.js";
import u from "./35488.js";
import d from "./50376.js";
import A from "./98995.js";
import { A as A_1 } from "./90765.js";
import C from "./52451.js";
import _, { $P, Qv } from "./14629.js";
import f from "./48866.js";
import b from "./34348.js";
const y = b;
let S = class extends l.Component {
	GetTooltipText(e, t) {
		if (t) {
			return t;
		}
		switch (e.eGroup) {
			case 2:
			case 1: {
				return `#FilterElement_Tooltip_${$P(e.eGroup, e.option)}`;
			}
			case 4: {
				return Localize("#FilterElement_Tooltip_StoreTag", e.name);
			}
			case 6: {
				let t;
				t = i.OQ.Get().hasSteamConnection
					? Localize("#FilterElement_Tooltip_FriendLibrary", e.name)
					: Localize("#FilterElement_Tooltip_FriendLibrary_Offline", e.name);
				if (Qv(e.eGroup, e.option)) {
					return (
						<>
							<span className={y.FiltertagUsername}>{t}</span>
							<span className={y.Asterisk}>*</span>
						</>
					);
				} else {
					return t;
				}
			}
		}
		return e.name;
	}
	render() {
		const e = this.props;
		let t;
		let r;
		let n = false;
		let e_name = e.name;
		const s = Qv(e.eGroup, e.option);
		if (e.eGroup === 6) {
			t =
				a.O$.IsLibraryAccessDenied(e.option) &&
				Localize("#FilterElement_Tooltip_FriendLibrary_AccessDenied");
			o = e.option;
			r = a.O$.GetFriendState(o).persona.avatar_url;
			n = true;
		}
		var o;
		return (
			<A.he
				toolTipContent={this.GetTooltipText(e, t)}
				direction="bottom"
				key={`${e.eGroup}-${e.option}`}
				className={A_1(y.FilterTag, t && y.Error)}
			>
				<div className={y.FiltertagSpacer} />
				{r && (
					<div className={y.FiltertagAvatarSpacer}>
						{" "}
						<img src={r} width={18} height={18} />{" "}
					</div>
				)}
				<div className={A_1(n && y.FiltertagUsername)}>{e_name}</div>
				{s && <div className={y.Asterisk}>*</div>}
				{this.props.onClick && (
					<div onClick={this.props.onClick}>
						<d.sED />
					</div>
				)}
				<div className={y.FiltertagSpacer} />
			</A.he>
		);
	}
};
export function wf(e, t, r) {
	let n = e.GetAllSelectedOptions();
	if (t) {
		n = n.filter((e) => e.eGroup == t);
	}
	if (n.length == 0) {
		return null;
	} else {
		return n.map((t) => (
			<S
				key={`${t.eGroup}-${t.option}`}
				{...t}
				onClick={
					r
						? () => {
								r(e, t.eGroup, t.option);
							}
						: undefined
				}
			/>
		));
	}
}
S = Cg([o.PA], S);
export let ye = class extends l.Component {
	m_searchInputRef = l.createRef();
	m_containerDivRef = l.createRef();
	state = {
		bTextSearchHasFocus: false,
	};
	FocusOnSearch() {
		if (
			this.m_searchInputRef.current &&
			this.m_searchInputRef.current.element
		) {
			this.m_searchInputRef.current.element.focus();
			this.m_searchInputRef.current.element.select();
		}
	}
	BIsFocused() {
		return (
			this.m_containerDivRef.current &&
			BIsParent(
				this.m_containerDivRef.current,
				this.m_containerDivRef.current.ownerDocument.activeElement,
			)
		);
	}
	OpenAdvancedSearch() {
		if (!s.n6.BIsTextSearchActive()) {
			s.n6.SetSearchByTypePaneOpen(true);
		}
	}
	CloseAdvancedSearch() {
		s.n6.SetSearchByTypePaneOpen(false);
	}
	OnKeyDown(e) {
		if (e.keyCode == 27) {
			s.n6.ExitSearch();
			this.m_containerDivRef.current.focus();
		}
	}
	OnTextChanged(e) {
		s.n6.SetSearchText(e.target.value);
	}
	OnTextSearchFocused(e) {
		this.setState({
			bTextSearchHasFocus: true,
		});
	}
	OnTextSearchBlur(e) {
		this.setState({
			bTextSearchHasFocus: false,
		});
	}
	OnFilterChange(e) {
		if (s.n6.BIsSearchActive()) {
			if (e.bIsEmpty) {
				s.n6.ResetSearch();
			}
		} else {
			s.n6.StartSearchByType(e);
		}
	}
	OnClearFilterTagClick(e, t, r) {
		e.SelectOption(t, r, false);
		this.OnFilterChange(e);
	}
	render() {
		const e = s.n6.currentAppFilter.searchText || "";
		const t = !s.n6.BIsSearchByTypePaneOpen() && !s.n6.BIsSearchByTypeActive();
		const r = !s.n6.BIsTextSearchActive();
		const n = s.n6.BIsSearchActive() ? s.n6.currentAppFilter : new _.E6();
		return (
			<div
				className={A_1(y.Container, !t && y.ContainerHide)}
				onKeyDown={this.OnKeyDown}
				ref={this.m_containerDivRef}
				tabIndex={-1}
			>
				<div className={y.SearchInput}>
					{t && (
						<m.pd
							ref={this.m_searchInputRef}
							placeholder={Localize("#FilterEdit_SearchPrompt")}
							value={e}
							onChange={this.OnTextChanged}
							onFocus={this.OnTextSearchFocused}
							onBlur={this.OnTextSearchBlur}
							onContextMenu={c.aE}
							bShowClearAction
							bAlwaysShowClearAction={this.state.bTextSearchHasFocus}
						/>
					)}
					{!t && (
						<div className={y.SearchFilterInput}>
							{wf(n, undefined, this.OnClearFilterTagClick) ?? (
								<div key="prompt" className={y.SearchByTypePrompt}>
									{Localize("#AdvancedSearch_PaneTitle")}
								</div>
							)}
							<div
								className={y.SearchFilterInputClear}
								onClick={s.n6.ExitSearch}
							>
								<d.sED />
							</div>
						</div>
					)}
				</div>
				{!this.props.bSmallMode && (
					<div
						className={A_1(
							y.AdvancedSearchContainer,
							!r && y.Disabled,
							s.n6.BIsSearchByTypePaneOpen() && y.Extended,
						)}
					>
						<A.he toolTipContent={Localize("#FilterEdit_AdvancedTooltip")}>
							<div
								className={A_1(
									y.AdvancedSearchButton,
									s.n6.BIsSearchByTypeActive() && y.Active,
								)}
								onClick={this.OpenAdvancedSearch}
							>
								<div>
									<u.Filter />
								</div>
							</div>
						</A.he>
						<div
							className={A_1(
								y.AdvancedSearchPaneContainer,
								s.n6.BIsSearchByTypePaneOpen() && y.Visible,
							)}
						>
							<div
								className={y.AdvancedSearchDismissalOverlay}
								onClick={this.CloseAdvancedSearch}
							/>
							<div className={y.AdvancedSearchPane}>
								<f.k appFilter={n} fnOnChange={() => this.OnFilterChange(n)} />
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
};
Cg([C.oI], ye.prototype, "FocusOnSearch", null);
Cg([C.oI], ye.prototype, "BIsFocused", null);
Cg([C.oI], ye.prototype, "OpenAdvancedSearch", null);
Cg([C.oI], ye.prototype, "CloseAdvancedSearch", null);
Cg([C.oI], ye.prototype, "OnKeyDown", null);
Cg([C.oI], ye.prototype, "OnTextChanged", null);
Cg([C.oI], ye.prototype, "OnTextSearchFocused", null);
Cg([C.oI], ye.prototype, "OnTextSearchBlur", null);
Cg([C.oI], ye.prototype, "OnFilterChange", null);
Cg([C.oI], ye.prototype, "OnClearFilterTagClick", null);
ye = Cg([o.PA], ye);
