import n from "./63696.js";
import i, { PA } from "./41230.js";
import a from "./20189.js";
import o from "./64608.js";
import l from "./35488.js";
import { Ri } from "./43397.js";
const s = a;
export function aU(e) {
	const { title, children } = e;
	return (
		<div className={s.PanelSection}>
			{title && (
				<div className={s.PanelSectionTitle}>
					<div className={s.Text}>{title}</div>
					{e.spinner && <l.Spinner />}
				</div>
			)}
			{children}
		</div>
	);
}
PA((e) => {
	const { checked, onChange, icon, children } = e;
	return (
		<o.y4
			label={children}
			onChange={onChange}
			checked={checked instanceof Function ? checked() : checked}
			padding="compact"
			icon={icon}
		/>
	);
});
PA((e) => {
	const e_value = e.value;
	return (
		<o.d3
			layout="inline"
			{...e}
			value={e_value instanceof Function ? e_value() : e_value}
		/>
	);
});
export const kn = Ri(s.PanelSectionRow);
