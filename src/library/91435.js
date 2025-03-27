import { D5 } from "./28864.js";
import i from "./63696.js";
import s from "./78325.js";
import o from "./15123.js";
import a from "./88808.js";
import c from "./42318.js";
import l from "./36437.js";
import u from "./3673.js";
const MContext = i.createContext({});
export const EO = i.memo((e) => {
	const {
		children,
		bRenderOverlayAtRoot,
		refModalManager,
		DialogWrapper,
		bUseDialogElement = true,
		ContextMenuComponent = a.k,
		refContextMenuManager,
		browserInfo,
		bUsePopups,
		bOnlyPopups,
		bCenterPopupsOnWindow,
		bRegisterManagersWithWindow = true,
		...M
	} = e;
	const S = i.useRef();
	S.current ||= new u.SZ();
	let y = (
		<l.L
			{...M}
			DialogWrapper={DialogWrapper}
			ModalManager={S.current}
			bUseDialogElement={bUseDialogElement}
			bRegisterModalManager={bRegisterManagersWithWindow}
			rctActiveContextMenus={<ContextMenuComponent />}
		/>
	);
	if (
		e.bRenderOverlayAtRoot &&
		typeof document != "undefined" &&
		"body" in document
	) {
		y = s.createPortal(y, document.body);
	}
	D5(refModalManager, S.current);
	if (bUsePopups !== undefined) {
		S.current?.SetUsePopups(bUsePopups);
	}
	if (bCenterPopupsOnWindow !== undefined) {
		S.current?.SetCenterPopupsOnWindow(bCenterPopupsOnWindow);
	}
	if (bOnlyPopups !== undefined) {
		S.current?.SetOnlyPopups(bOnlyPopups);
	}
	S.current.SetBrowserInfo(browserInfo);
	const E = i.useMemo(
		() => ({
			ModalManager: S.current,
			DialogWrapper: DialogWrapper,
		}),
		[DialogWrapper],
	);
	return (
		<MContext.Provider value={E}>
			<o.D
				refContextMenuManager={refContextMenuManager}
				bRegisterMenuManager={bRegisterManagersWithWindow}
			>
				<c.tH>{y}</c.tH>
				{e.children}
			</o.D>
		</MContext.Provider>
	);
});
export function yk() {
	return i.useContext(MContext).ModalManager;
}
export function oJ() {
	return i.useContext(MContext).DialogWrapper;
}
export function uH(e) {
	const t = yk();
	i.useEffect(() => {
		if (e) {
			return u.BR.RegisterModalManager(t, e);
		}
	}, [e, t]);
}
