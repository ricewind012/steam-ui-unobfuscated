import r, { hL } from "./42898.js";
import i, { cZ, Ue } from "./28864.js";
import s from "./63696.js";
import o, { sl } from "./28869.js";
import a, { O } from "./79734.js";
import c, { Vu } from "./35560.js";
import l, { nN } from "./3524.js";
import u, { KF } from "./87481.js";
export const B2 = s.forwardRef((e, t) => {
	const {
		navID,
		onActivated,
		onDeactivated,
		navTreeRef,
		enabled,
		modal,
		virtualFocus,
		parentEmbeddedNavTree,
		onGlobalButtonDown,
		disableFocusClasses,
		disabledRoot,
		"flow-children": f,
		..._
	} = e;
	const { elemProps, navOptions, gamepadEvents } = sl(_);
	return s.createElement(
		d,
		{
			navID: navID,
			onActivated: onActivated,
			onDeactivated: onDeactivated,
			navTreeRef: navTreeRef,
			enabled: enabled,
			modal: modal,
			virtualFocus: virtualFocus,
			parentEmbeddedNavTree: parentEmbeddedNavTree,
			onGlobalButtonDown: onGlobalButtonDown,
			disableFocusClasses: disableFocusClasses,
			disabledRoot: disabledRoot,
			"flow-children": f,
			...navOptions,
			...gamepadEvents,
		},
		s.createElement("div", {
			...elemProps,
			ref: t,
		}),
	);
});
function d(e) {
	const {
		navID,
		onActivated,
		onDeactivated,
		navTreeRef,
		enabled = true,
		modal = false,
		virtualFocus = false,
		children,
		parentEmbeddedNavTree,
		onGlobalButtonDown,
		disableFocusClasses = false,
		disabledRoot = false,
		"flow-children": M,
		...S
	} = e;
	const { elemProps, navOptions, gamepadEvents } = sl(S);
	const { refDiv, tree } = ((e) => {
		const {
			navID: navID_1,
			virtualFocus: virtualFocus_1,
			parentEmbeddedNavTree: parentEmbeddedNavTree_1,
			disabledRoot: disabledRoot_1,
			enabled: enabled_1,
			modal: modal_1,
			navTreeRef: navTreeRef_1,
			onGlobalButtonDown: onGlobalButtonDown_1,
		} = e;
		const p = Vu();
		const g = nN() || p.GetDefaultContext();
		const f = s.useContext(o.TJ);
		const [_] = s.useState(() =>
			p.NewGamepadNavigationTree(
				g,
				navID_1,
				parentEmbeddedNavTree_1 ?? f?.Tree,
			),
		);
		let w = s.useRef(null);
		_.SetUseVirtualFocus(virtualFocus_1);
		_.SetModal(modal_1);
		_.SetIsEmbeddedInLegacyTree(!!parentEmbeddedNavTree_1);
		_.SetOnGlobalButtonDown(onGlobalButtonDown_1);
		s.useEffect(() => _.RegisterNavigationItem(_.Root, w.current), [_, w]);
		s.useEffect(() => {
			_.SetIsEnabled(enabled_1);
		}, [_, enabled_1]);
		s.useEffect(() => {
			if (!disabledRoot_1) {
				return p.RegisterGamepadNavigationTree(
					_,
					w.current.ownerDocument.defaultView,
				);
			}
		}, [p, _, disabledRoot_1]);
		s.useEffect(() => {
			cZ(navTreeRef_1, _);
			return () => cZ(navTreeRef_1, null);
		}, [navTreeRef_1, _]);
		return {
			refDiv: w,
			tree: _,
		};
	})({
		navID: navID,
		virtualFocus: virtualFocus,
		parentEmbeddedNavTree: parentEmbeddedNavTree,
		disabledRoot: disabledRoot,
		enabled: enabled,
		modal: modal,
		onGlobalButtonDown: onGlobalButtonDown,
		navTreeRef: navTreeRef,
	});
	hL(tree.OnActivateCallbacks, onActivated);
	hL(tree.OnDeactivateCallbacks, onDeactivated);
	KF(gamepadEvents, refDiv, tree);
	s.useLayoutEffect(() => {
		const e = O(M);
		tree.Root.SetProperties({
			...navOptions,
			layout: e,
		});
	});
	const k = Ue(refDiv, children.ref);
	return s.createElement(
		p,
		{
			tree: disabledRoot || tree,
			disableFocusClasses: disableFocusClasses || disabledRoot,
		},
		s.createElement(
			o.TJ.Provider,
			{
				value: disabledRoot || tree.Root,
			},
			s.cloneElement(children, {
				id: navID,
				"data-react-nav-root": navID,
				ref: k,
			}),
		),
	);
}
const HContext = s.createContext({
	bActiveTree: false,
	bActiveTreeWithinContext: false,
	bDisableFocusClasses: false,
});
function p(e) {
	const { tree, disableFocusClasses = false, children } = e;
	const [i, o] = s.useState(tree?.BIsActive() || false);
	const [a, c] = s.useState(tree?.BIsActiveWithinContext() || false);
	s.useEffect(
		() =>
			tree
				? (o(tree.BIsActive()),
					c(tree.BIsActiveWithinContext()),
					tree.OnActiveStateChangedCallbacks.Register(() => {
						o(tree.BIsActive());
						c(tree.BIsActiveWithinContext());
					}).Unregister)
				: (o(false), void c(false)),
		[tree],
	);
	const l = s.useMemo(
		() => ({
			bActiveTree: i,
			bActiveTreeWithinContext: a,
			bDisableFocusClasses: disableFocusClasses,
		}),
		[i, disableFocusClasses, a],
	);
	return s.createElement(
		HContext.Provider,
		{
			value: l,
		},
		children,
	);
}
export function qR() {
	return s.useContext(HContext);
}
