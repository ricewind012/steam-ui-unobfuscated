import n, { useState, useEffect } from "./63696.js";
import i from "./64608.js";
import { VI } from "./34792.js";
export function C(e) {
	const { setting, onChange, onBlur, ...o } = e;
	const [l, c] = VI(setting);
	const [m, setM] = useState(l);
	useEffect(() => {
		setM(l);
	}, [l]);
	return (
		<i.pd
			{...o}
			value={m}
			onChange={(e) => {
				setM(e.target.value);
				if (onChange) {
					onChange(e);
				}
			}}
			onBlur={(e) => {
				c(e.target.value);
				if (onBlur) {
					onBlur(e);
				}
			}}
		/>
	);
}
