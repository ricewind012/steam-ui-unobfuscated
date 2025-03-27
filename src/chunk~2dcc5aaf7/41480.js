import n from "./63696.js";
import i from "./64608.js";
import a from "./94790.js";
import s from "./46701.js";
import o from "./78110.js";
export const mt = ({
	active,
	onDismiss,
	className,
	modalClassName,
	children,
}) => (
	<a.E active={active}>
		<s.x_ onEscKeypress={onDismiss} className={modalClassName}>
			<i.UC className={className}>{children}</i.UC>
		</s.x_>
	</a.E>
);
export function hM(e) {
	const { onDismiss, className, modalClassName, children, ...c } = e;
	return (
		<o.t {...c} onDismiss={onDismiss}>
			<s.x_ onEscKeypress={onDismiss} className={modalClassName}>
				<i.UC className={className}>{children}</i.UC>
			</s.x_>
		</o.t>
	);
}
export const Q9 = (e) =>
	hM({
		modal: true,
		...e,
	});
