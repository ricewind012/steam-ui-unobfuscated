import n from "./63696.js";
import { Ue } from "./28864.js";
import a from "./18914.js";
import s from "./72476.js";
import o from "./11131.js";
import l from "./96680.js";
import c from "./3524.js";
export function O(e) {
	const { instance, ownerWindow, children } = e;
	const u = instance.IsVRWindow();
	n.useEffect(() => instance.Init(), [instance]);
	const d = n.useMemo(
		() => ({
			IN_GAMEPADUI: true,
			IN_DESKTOPUI: false,
			IN_VR: u ?? false,
		}),
		[u],
	);
	n.useEffect(() => {
		if (ownerWindow) {
			ownerWindow.ConfigContext = d;
		}
	}, [ownerWindow, d]);
	const ARef = n.useRef(undefined);
	const p = Ue(ARef, e.refFocusNavContext);
	n.useEffect(() => instance.InitFocusNavContext(ARef.current), [instance]);
	return (
		<a.RT>
			<s.ss {...d}>
				<o.kc ownerWindow={ownerWindow}>
					<l.ER instance={instance}>
						<c.b5
							ownerWindow={ownerWindow}
							refFocusNavContext={p}
							suppressGamepadInput={u}
						>
							{children}
						</c.b5>
					</l.ER>
				</o.kc>
			</s.ss>
		</a.RT>
	);
}
