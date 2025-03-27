import n, { useState, useRef, useEffect } from "./63696.js";
import i from "./50376.js";
import a, { A as A_1 } from "./90765.js";
import s, { E } from "./52922.js";
import _o from "./10606.js";
import l from "./20555.js";
import d, { c as c_1 } from "./38837.js";
import A from "./92076.js";
const c = l;
function M(e) {
	const { closeModal, rgImageURL } = e;
	const [i, setI] = n.useState(0);
	const s = n.useCallback(() => {
		setI(i == 0 ? rgImageURL.length - 1 : i - 1);
	}, [i, rgImageURL.length]);
	const l = n.useCallback(() => {
		if (i + 1 >= rgImageURL.length) {
			setI(0);
		} else {
			setI(i + 1);
		}
	}, [i, rgImageURL.length]);
	return (
		<_o.eV
			bAllowFullSize
			bOKDisabled
			closeModal={closeModal}
			bHideCloseIcon
			modalClassName={c.PopupScreenshotModal}
		>
			<U
				index={i}
				numElements={rgImageURL.length}
				fnForward={l}
				fnBackwards={s}
				fnClose={closeModal}
				bCircular
			/>
			<div className={c.PopupScreenshotContainer}>
				<img className={c.PopupScreenshot} src={rgImageURL[i]} />
			</div>
		</_o.eV>
	);
}
function U(e) {
	const { index, numElements, fnForward, fnBackwards, fnClose, bCircular } = e;
	E("ArrowLeft", fnBackwards);
	E("Left", fnBackwards);
	E("ArrowRight", fnForward);
	E("Right", fnForward);
	E("Escape", () => fnClose && fnClose());
	E("Esc", () => fnClose && fnClose());
	let d = numElements > 1;
	return (
		<div className={c.ButtonCtn}>
			{d && (
				<>
					<div
						className={A_1(
							c.ButtonIcon,
							index !== 0 || bCircular || c.Disabled,
						)}
						onClick={fnBackwards}
					>
						<i.V5W angle={270} />
					</div>
					<div
						className={A_1(
							c.ButtonIcon,
							index !== numElements - 1 || bCircular || c.Disabled,
						)}
						onClick={fnForward}
					>
						<i.V5W angle={90} />
					</div>
				</>
			)}
			<div className={c.ButtonIcon} onClick={fnClose}>
				<i.X />
			</div>
		</div>
	);
}
const p = 1.3;
const g = 3;
const h = 256;
export function o(e) {
	const [t, setT] = useState(false);
	const [s, setS] = useState({
		naturalWidth: 0,
		naturalHeight: 0,
		displayWidth: 0,
		displayHeight: 0,
	});
	const CRef = useRef();
	const [u, C] = (() => {
		const [e, setE] = n.useState(undefined);
		const r = n.useCallback(() => setE(undefined), []);
		const i = (
			<_o.EN active={e !== undefined}>
				<M closeModal={r} rgImageURL={e} />
			</_o.EN>
		);
		return [setE, i];
	})();
	useEffect(() => {
		if (
			s.naturalWidth > s.displayWidth * p &&
			s.naturalHeight > s.displayHeight * p &&
			s.naturalWidth > h
		) {
			if (s.naturalWidth / s.naturalHeight < g) {
				setT(true);
			}
		}
	}, [s]);
	if (t) {
		return (
			<span className={A.PreviewCtn}>
				{C}
				<span className={A.SVG}>
					<i.YNO />
				</span>
				<img
					{...e}
					className={A_1({
						[e.className]: Boolean(e.className),
						[A.ExpandableHover]: true,
					})}
					onClick={(t) => u([e.src])}
				/>
			</span>
		);
	} else {
		return (
			<img
				{...e}
				ref={CRef}
				onLoad={(e) => {
					if (!e.currentTarget.closest("a") && !c_1()) {
						const { naturalWidth, naturalHeight, width, height } =
							e.currentTarget;
						setS({
							naturalWidth: naturalWidth,
							naturalHeight: naturalHeight,
							displayWidth: width,
							displayHeight: height,
						});
					}
				}}
			/>
		);
	}
}
