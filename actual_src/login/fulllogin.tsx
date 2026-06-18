import {
	createElement,
	Fragment,
	type PropsWithChildren,
	type ReactNode,
	useCallback,
	useEffect,
	useState,
} from "react";

import { D } from "../../src/chunk~2dcc5aaf7/31222.js";
import { uV } from "../../src/chunk~2dcc5aaf7/32700.js";
import { gN as GN, Qk, vX } from "../../src/chunk~2dcc5aaf7/39265.js";
import loginStyles from "../../src/chunk~2dcc5aaf7/53576.js";
import { aj } from "../../src/chunk~2dcc5aaf7/63088.js";
import { $n, jn } from "../../src/chunk~2dcc5aaf7/64608.js";
import { q_, tG, tH } from "../../src/chunk~2dcc5aaf7/87232.js";
import { aJ, qR as QR } from "../../src/chunk~2dcc5aaf7/89791.js";
import { BrowserViewHostPopup } from "../browserview_hostpopup.js";
import { CMInterfaceSharedClientConnection } from "../cminterface.js";
import { LoginStore, useLoginStateObserver } from "../stores/loginstore.js";
import { Localize, LocalizeReact } from "../utils/localization.js";
import { Of as PopupManager, R7 as useOpenerWindowContext } from "./11131.js";
import { c as TitleBar } from "./27773.js";
import { lX as some_popup_fn } from "./31084.js";
import { iE } from "./44846.js";
import { Y2 as B_maybe_IsSteamChina, TS } from "./72476.js";
import { jh as useIsAwaitingInitialNetworkState } from "./77347.js";
import { kt as Kt, tz as Tz } from "./88750.js";
import { A as A_1 } from "./90765.js";
import { EResult } from "@steamclient_types/shared";
import { ELoginState } from "@steamclient_types/User.js";

enum ELoginPage {
	Init,
	UserChooser,
	LoginWithBack,
	Login,
	RemoveConfirmation,
	WaitingForLibrary,
	EnterPin,
}

export default function I(props: LoginContentProps) {
	return FullLogin(props);
}

export function FullLogin(props: LoginContentProps) {
	const [bInitiated, setInitiate] = useState(true);
	const bIsReady = (() => {
		const [bReady, setReady] = useState(false);
		useEffect(() => {
			let rgPromises = [];
			if (!TS.IN_STEAMUI_SHARED_CONTEXT) {
				rgPromises.push(uV(TS.LANGUAGE));
				rgPromises.push(LoginStore.Init());
			}
			Promise.all(rgPromises).then(() => {
				setReady(true);
			});
		}, []);
		return bReady;
	})();
	if (bInitiated) {
		if (bIsReady) {
			return <LoginContent {...props} />;
		} else {
			return null;
		}
	} else {
		return (
			<div
				style={{ color: "white" }}
				onClick={() => {
					setInitiate(true);
				}}
			>
				Initiate
			</div>
		);
	}
}

interface LoginContentProps {
	bHiddenWindow?: boolean;
	includeTitleBar: boolean;
	onLoginComplete?: () => void;
	popup: Window;
	refreshLogin?: boolean;
}

function LoginContent(props: LoginContentProps) {
	const { refreshLogin = TS.IN_LOGIN_REFRESH, bHiddenWindow = false } = props;
	const [eLoginPage, setLoginPage] = useState(ELoginPage.Init);
	const [strAccountName, setAccountName] = useState("");
	useOpenerWindowContext();
	const [removeConfirmationProps, setRemoveConfirmationProps] =
		useState<RemoveConfirmationProps>();
	const bIsAwaitingInitialNetworkState = useIsAwaitingInitialNetworkState();
	const eLoginState = useLoginStateObserver();
	const [strHighlightAccount, setHighlightAccount] = useState<string>();
	const ShowPopupIfNeeded = useCallback(() => {
		if (bHiddenWindow) {
			const t = PopupManager.GetPopupForWindow(props.popup);
			t?.Show(iE.k_EWindowBringToFrontAndForceOS);
		}
	}, [bHiddenWindow, props.popup]);

	useEffect(() => {
		let e =
			!TS.IN_STEAMUI_SHARED_CONTEXT ||
			((eLoginState == ELoginState.WaitingForCredentials ||
				eLoginState == ELoginState.WelcomeDialog) &&
				!bIsAwaitingInitialNetworkState);
		if (eLoginPage == ELoginPage.Init && e) {
			setAccountName("");
			setRemoveConfirmationProps(undefined);
			if (eLoginState == ELoginState.WaitingForLibraryReady) {
				setLoginPage(ELoginPage.WaitingForLibrary);
			} else if (refreshLogin) {
				setLoginPage(ELoginPage.Login);
				ShowPopupIfNeeded();
			} else {
				SteamClient.User.ShouldShowUserChooser()
					.then((bShouldShowUserChooser) => {
						setLoginPage(
							bShouldShowUserChooser
								? ELoginPage.UserChooser
								: ELoginPage.Login,
						);
						ShowPopupIfNeeded();
					})
					.catch((e) => {
						tH(
							"Call to SteamClient.User.ShouldShowUserChooser was rejected with ",
							e,
						);
						setLoginPage(ELoginPage.Login);
						ShowPopupIfNeeded();
					});
			}
		}
	}, [
		eLoginPage,
		bIsAwaitingInitialNetworkState,
		eLoginState,
		refreshLogin,
		ShowPopupIfNeeded,
	]);

	if (bIsAwaitingInitialNetworkState && TS.IN_STEAMUI_SHARED_CONTEXT) {
		return (
			<Qk
				loginState={ELoginState.WaitingForNetwork}
				throbberClassName={loginStyles.StatusThrobber}
			/>
		);
	}
	const onBack =
		eLoginPage != ELoginPage.LoginWithBack ||
		(() => setLoginPage(ELoginPage.UserChooser));
	const onShowSignInForAccount = (strAccountName: string) => {
		setAccountName(strAccountName);
		setLoginPage(ELoginPage.LoginWithBack);
	};
	const onSuccessfulSignIn = () => {
		q_("Signin complete, waiting for library ready");
		props.onLoginComplete?.();
		setLoginPage(ELoginPage.WaitingForLibrary);
	};
	const onPromptForPin = (strAccountName: string) => {
		setAccountName(strAccountName);
		setLoginPage(ELoginPage.EnterPin);
	};
	const onMoreMenu = (
		strAccountName: string,
		strPersonaName: string,
		strAvatarUrl: string,
		i,
	) => {
		let a = some_popup_fn(
			<MoreMenu
				strAccountName={strAccountName}
				strAvatarUrl={strAvatarUrl}
				onRemove={() => {
					setRemoveConfirmationProps({
						strAccountName,
						strPersonaName,
						strAvatarUrl,
					});
					setLoginPage(ELoginPage.RemoveConfirmation);
				}}
			/>,
			i,
		);
		setHighlightAccount(strAccountName);
		a.SetOnHideCallback(() => setHighlightAccount(undefined));
	};
	const onFinished = () => {
		if (LoginStore.GetLoginUsers().length > 0) {
			setLoginPage(ELoginPage.UserChooser);
		} else {
			setLoginPage(ELoginPage.Login);
		}
	};
	const renderSuccessOrLoading = () => (
		<Qk
			loginState={eLoginState}
			throbberClassName={loginStyles.StatusThrobber}
		/>
	);
	let Content: ReactNode;
	let bAnimatedThrobber = false;
	switch (eLoginPage) {
		case ELoginPage.Login:
		case ELoginPage.LoginWithBack: {
			Content = (
				<LoginPage
					defaultAccountName={strAccountName}
					onBack={onBack}
					renderSuccessOrLoading={renderSuccessOrLoading}
					onLoginComplete={onSuccessfulSignIn}
				/>
			);
			break;
		}
		case ELoginPage.UserChooser: {
			Content =
				eLoginState == ELoginState.WaitingForNetwork ||
				eLoginState == ELoginState.WaitingForServerResponse
					? createElement(Qk, {
							loginState: eLoginState,
							throbberClassName: loginStyles.StatusThrobber,
						})
					: createElement(
							UserChooser,
							null,
							createElement(vX, {
								onShowSignInForAccount: onShowSignInForAccount,
								onPromptForPin: onPromptForPin,
								onSuccessfulSignIn: onSuccessfulSignIn,
								bOfflineMode: false,
								bShowHeader: false,
								bShowAccountNames: true,
								nUserCountLimit: 5,
								onMoreMenu: onMoreMenu,
								strHighlightAccount: strHighlightAccount,
							}),
						);
			bAnimatedThrobber = true;
			break;
		}
		case ELoginPage.RemoveConfirmation: {
			Content = (
				<RemoveConfirmation
					{...removeConfirmationProps}
					onFinished={onFinished}
				/>
			);
			break;
		}
		case ELoginPage.EnterPin: {
			Content = createElement(
				PinPrompt,
				null,
				createElement(GN, {
					strAccountName: strAccountName,
					onBack: () => {
						setAccountName("");
						setLoginPage(ELoginPage.UserChooser);
					},
					onShowSignInForAccount: onShowSignInForAccount,
					onSuccessfulSignIn: onSuccessfulSignIn,
					bOfflineMode: false,
				}),
			);
			bAnimatedThrobber = true;
			break;
		}
		default:
		case ELoginPage.Init:
		case ELoginPage.WaitingForLibrary: {
			Content = (
				<Qk
					loginState={eLoginState}
					throbberClassName={loginStyles.StatusThrobber}
				/>
			);
			bAnimatedThrobber = true;
		}
	}
	let className = A_1(
		loginStyles.Login,
		props.includeTitleBar && loginStyles.WithTitle,
		bAnimatedThrobber && loginStyles.AnimatedBackground,
		B_maybe_IsSteamChina() && loginStyles.SteamChina,
		"DesktopUI",
	);

	return (
		<div className={className}>
			{props.includeTitleBar && props.popup && (
				<div className={A_1(loginStyles.TitleContainer)}>
					<TitleBar
						popup={props.popup}
						hideMin={true}
						hideMax={true}
						hideClose={props.refreshLogin}
					/>
				</div>
			)}
			<Content />
		</div>
	);
}

interface MoreMenuProps {
	onRemove: () => void;
}

function MoreMenu(props: MoreMenuProps) {
	return (
		<Tz>
			<Kt onSelected={props.onRemove}>{Localize("#Login_RemoveUser_Menu")}</Kt>
		</Tz>
	);
}

function UserChooser(props: PropsWithChildren) {
	return (
		<div className={A_1(loginStyles.UserChooser, loginStyles.LoginAnimated)}>
			<div className={loginStyles.Content}>
				<QR
					realm={TS.EREALM}
					launcherType={TS.LAUNCHER_TYPE}
					className={loginStyles.HeaderLogo}
				>
					<div className={loginStyles.AvatarContainer}>
						<div className={loginStyles.WhosPlaying}>
							{Localize("#Login_PickUser")}
						</div>
						{props.children}
					</div>
				</QR>
			</div>
		</div>
	);
}

function PinPrompt(props: PropsWithChildren) {
	return (
		<div className={A_1(loginStyles.PinPrompt, loginStyles.LoginAnimated)}>
			<div className={loginStyles.Content}>
				<QR
					realm={TS.EREALM}
					launcherType={TS.LAUNCHER_TYPE}
					className={loginStyles.HeaderLogo}
				>
					<div>{props.children}</div>
				</QR>
			</div>
		</div>
	);
}

interface RemoveConfirmationProps {
	onFinished?: () => void;
	strAccountName: string;
	strPersonaName: string;
}

function RemoveConfirmation(props: RemoveConfirmationProps) {
	return createElement(
		"div",
		{
			className: loginStyles.RemoveConfirmation,
		},
		createElement(
			"div",
			{
				className: loginStyles.Content,
			},
			createElement(QR, {
				realm: TS.EREALM,
				launcherType: TS.LAUNCHER_TYPE,
				className: loginStyles.HeaderLogo,
			}),
			createElement(
				"div",
				{
					className: loginStyles.Warning,
				},
				createElement(
					"div",
					{
						className: loginStyles.Title,
					},
					Localize("#Login_Remove_Title"),
				),
				createElement(
					"div",
					{
						className: loginStyles.Paragraph,
					},
					LocalizeReact(
						"#Login_Remove_Desc1",
						createElement(
							"span",
							{
								className: loginStyles.Highlight,
							},
							props.strPersonaName,
						),
					),
				),
				createElement(
					"div",
					{
						className: loginStyles.Paragraph,
					},
					Localize("#Login_Remove_Desc2"),
				),
			),
			createElement(
				"div",
				{
					className: loginStyles.Buttons,
				},
				createElement(
					jn,
					{
						onClick: async () => {
							await LoginStore.RemoveUser(props.strAccountName);
							props.onFinished?.();
						},
					},
					Localize("#Login_Remove_Remove"),
				),
				createElement(
					$n,
					{
						onClick: props.onFinished,
					},
					Localize("#Button_Cancel"),
				),
			),
		),
	);
}

const k_unCreateAccountPopupWidth = 900;
const k_unCreateAccountPopupHeight = 800;
const k_unHelpPopupWidth = 1024;
const k_unHelpPopupHeight = 768;
const useServiceTransport = TS.IN_LOGIN_REFRESH
	? () => ({
			transport: new D(TS.WEBAPI_BASE_URL).GetServiceTransport(),
			bTransportReady: true,
		})
	: () => {
			const [bTransportReady, setTransportReady] = useState(false);
			let cm = new CMInterfaceSharedClientConnection();
			let transport = cm.GetServiceTransport();
			((cm) => {
				useEffect(() => {
					const errorReportingStore = aj();
					cm.messageHandlers.InstallErrorReportingStore(errorReportingStore);
					errorReportingStore.Init(
						"Client Login",
						CLSTAMP,
						cm.GetServiceTransport(),
					);
				}, [cm]);
			})(cm);
			cm.Connect().then(() => {
				setTransportReady(true);
			});
			return {
				transport,
				bTransportReady,
			};
		};
const k_unCodeHelpPopupWidth = 900;
const k_unCodeHelpPopupHeight = 800;
const k_unAgreementPopupWidth = 900;
const k_unAgreementPopupHeight = 800;

function LoginPage(props) {
	let [refreshInfo, setRefreshInfo] = useState(null);
	const openerWnd = useOpenerWindowContext();
	const [bAccountCreationPopupVisible, setAccountCreationPopupVisible] =
		useState(false);
	const [bSignInHelpPopupVisible, setSignInHelpPopupVisible] = useState(false);
	const { transport, bTransportReady } = useServiceTransport();
	const [strCodeHelpURL, setCodeHelpURL] = useState<string>();
	const [strAgreementURL, setAgreementURL] = useState<string>();
	const bInLoginRefresh = !!props.refreshLogin;
	useEffect(() => {
		if (bInLoginRefresh || TS.IN_LOGIN_REFRESH) {
			SteamClient.Auth.GetRefreshInfo().then((info) => {
				if (info.reason !== EResult.OK) {
					setRefreshInfo(info);
				} else {
					setRefreshInfo(null);
				}
			});
		}
	}, [bInLoginRefresh]);
	const [eResult, setResult] = useState<EResult>(undefined);
	const [nEResultForKey, setEResultForKey] = useState(0);
	if (!bTransportReady) {
		q_("Transport not ready");
		return null;
	}

	const strElementKey = `${refreshInfo?.account_name}${refreshInfo?.reason}${nEResultForKey.toString()}`;
	return createElement(
		Fragment,
		null,
		createElement(aJ, {
			key: strElementKey,
			autoFocus: true,
			transport: transport,
			onSuccess: (t) => {
				tG("received authentication token, using it to sign in to Steam");
				setResult(null);
				SteamClient.Auth.SetLoginToken(
					t.strRefreshToken,
					t.strAccountName,
				).then((resp) => {
					const eResult = resp.result;
					const msg = resp.message;
					tG(`client login returned ${eResult} (${msg})`);
					setResult(eResult);
					if (eResult != EResult.OK) {
						setEResultForKey(nEResultForKey + 1);
					} else {
						props.onLoginComplete?.();
					}
				});
				const data = t.strNewGuardData ?? "";
				if (data) {
					SteamClient.Auth.SetSteamGuardData(t.strAccountName, data);
				}
				openerWnd?.ownerWindow?.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed?.(
					false,
				);
			},
			platform: 1,
			embedded: true,
			refreshInfo: refreshInfo,
			lastResult: eResult,
			secureComputer: LoginStore.secureComputer,
			isProbablySharedPC: LoginStore.isProbablySharedPC,
			defaultAccountName: props.defaultAccountName,
			joinLinkVariant: () => {
				setAccountCreationPopupVisible(true);
				openerWnd?.ownerWindow?.SteamClient.Window.HideWindow();
			},
			helpLinkVariant: () => {
				setSignInHelpPopupVisible(true);
				openerWnd?.ownerWindow?.SteamClient.Window.HideWindow();
			},
			onBack: props.onBack,
			onCodeHelp: (strURL: string) => {
				setCodeHelpURL(strURL);
				openerWnd?.ownerWindow?.SteamClient.Window.HideWindow();
			},
			onShowAgreement: (strURL: string) => {
				setAgreementURL(strURL);
				openerWnd?.ownerWindow?.SteamClient.Window.HideWindow();
			},
			renderSuccess: props.renderSuccessOrLoading,
			renderLoading: props.renderSuccessOrLoading,
		}),
		bAccountCreationPopupVisible &&
			createElement(BrowserViewHostPopup, {
				strName: Localize("#AccountCreation_Title"),
				strURL: `${TS.STORE_BASE_URL}join/`,
				popupWidth: k_unCreateAccountPopupWidth,
				popupHeight: k_unCreateAccountPopupHeight,
				onClose: () => {
					setAccountCreationPopupVisible(false);
					openerWnd?.ownerWindow?.SteamClient.Window.ShowWindow();
					openerWnd?.ownerWindow?.SteamClient.Window.BringToFront();
				},
			}),
		bSignInHelpPopupVisible &&
			createElement(BrowserViewHostPopup, {
				strName: Localize("#SignInHelp_Title"),
				strURL: `${TS.HELP_BASE_URL}wizard/HelpWithLogin`,
				popupWidth: k_unHelpPopupWidth,
				popupHeight: k_unHelpPopupHeight,
				onClose: () => {
					setSignInHelpPopupVisible(false);
					openerWnd?.ownerWindow?.SteamClient.Window.ShowWindow();
					openerWnd?.ownerWindow?.SteamClient.Window.BringToFront();
				},
			}),
		strCodeHelpURL &&
			createElement(BrowserViewHostPopup, {
				strName: Localize("#CodeHelp_Title"),
				strURL: strCodeHelpURL,
				popupWidth: k_unCodeHelpPopupWidth,
				popupHeight: k_unCodeHelpPopupHeight,
				onClose: () => {
					setCodeHelpURL(undefined);
					openerWnd?.ownerWindow?.SteamClient.Window.ShowWindow();
					openerWnd?.ownerWindow?.SteamClient.Window.BringToFront();
				},
			}),
		strAgreementURL &&
			createElement(BrowserViewHostPopup, {
				strName: Localize("#Agreement_Title"),
				strURL: strAgreementURL,
				popupWidth: k_unAgreementPopupWidth,
				popupHeight: k_unAgreementPopupHeight,
				onClose: () => {
					setAgreementURL(undefined);
					openerWnd?.ownerWindow?.SteamClient.Window.ShowWindow();
					openerWnd?.ownerWindow?.SteamClient.Window.BringToFront();
				},
			}),
	);
}
