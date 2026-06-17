import {
	createContext,
	memo,
	useContext,
	useEffect,
	useMemo,
	useRef,
} from "react";
import u from "./3673.js";
import o from "./15123.js";
import { D5 } from "./28864.js";
import l from "./36437.js";
import c from "./42318.js";
import s from "./78325.js";
import a from "./88808.js";

const ModalManagerContext = createContext({});

export const EO = memo((props) => {
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
	} = props;
	const modalMgr = useRef();
	modalMgr.current ||= new u.SZ();
	let y = (
		<l.L
			{...M}
			DialogWrapper={DialogWrapper}
			ModalManager={modalMgr.current}
			bUseDialogElement={bUseDialogElement}
			bRegisterModalManager={bRegisterManagersWithWindow}
			rctActiveContextMenus={<ContextMenuComponent />}
		/>
	);
	if (
		props.bRenderOverlayAtRoot &&
		typeof document != "undefined" &&
		"body" in document
	) {
		y = s.createPortal(y, document.body);
	}
	D5(refModalManager, modalMgr.current);
	if (bUsePopups !== undefined) {
		modalMgr.current?.SetUsePopups(bUsePopups);
	}
	if (bCenterPopupsOnWindow !== undefined) {
		modalMgr.current?.SetCenterPopupsOnWindow(bCenterPopupsOnWindow);
	}
	if (bOnlyPopups !== undefined) {
		modalMgr.current?.SetOnlyPopups(bOnlyPopups);
	}
	modalMgr.current.SetBrowserInfo(browserInfo);
	const value = useMemo(
		() => ({
			ModalManager: modalMgr.current,
			DialogWrapper: DialogWrapper,
		}),
		[DialogWrapper],
	);
	return (
		<ModalManagerContext.Provider value={value}>
			<o.D
				refContextMenuManager={refContextMenuManager}
				bRegisterMenuManager={bRegisterManagersWithWindow}
			>
				<c.tH>{y}</c.tH>
				{props.children}
			</o.D>
		</ModalManagerContext.Provider>
	);
});

export function yk() {
	return useContext(ModalManagerContext).ModalManager;
}

export function oJ() {
	return useContext(ModalManagerContext).DialogWrapper;
}

export function uH(e) {
	const t = yk();
	useEffect(() => {
		if (e) {
			return u.BR.RegisterModalManager(t, e);
		}
	}, [e, t]);
}
