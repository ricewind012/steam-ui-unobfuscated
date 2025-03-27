import n from "./63696.js";
import { A } from "./90765.js";
import a from "./33175.js";
const s = a;
export const _ = n.forwardRef(
	({ imgURL, glow, pauseAnimation, hidden, alt, className }, c) => {
		const [m, setM] = n.useState(false);
		if (hidden) {
			return <div className={s.HiddenLabel}>?</div>;
		}
		const d = m && glow;
		return (
			<div
				ref={c}
				className={A(
					s.AchievementIconWrapper,
					className,
					pauseAnimation && s.RareAchievementNoAnimation,
				)}
			>
				{d && (
					<div className={s.RareAchievementIconGlowContainerRoot}>
						<div className={s.RareAchievementIconGlowContainer}>
							<div className={s.RareAchievementIconGlow} />
						</div>
					</div>
				)}
				<img
					className={A(s.Icon, d && s.IconGlow)}
					src={imgURL}
					loading="lazy"
					alt={alt}
					onLoad={() => setM(true)}
				/>
			</div>
		);
	},
);
