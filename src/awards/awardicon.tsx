import { PureComponent } from "react";

import {
	type EReactionType,
	GetLocTokenForReactionType,
	GetReactionImageURL,
} from "./utils.js";
import { he as ToolTip } from "../library/98995.js";
import { Yp as LocalizePlural } from "../library/46108.js";
import { A as ClassMap } from "../library/90765.js";
declare const styles: any;

interface ReactionAward_t {
	count: number;
	reaction_type: EReactionType;
}

interface AwardIconProps {
	reaction: ReactionAward_t;
}

export class AwardIcon extends PureComponent<AwardIconProps> {
	render() {
		const strToolTipText = LocalizePlural(
			"#RewardsReaction_Tooltip",
			this.props.reaction.count || 0,
			GetLocTokenForReactionType(this.props.reaction.reaction_type),
		);

		return (
			<ToolTip
				className={ClassMap(styles.InfoContainer, styles.IconContainer)}
				toolTipContent={strToolTipText}
			>
				<img
					className={styles.IconImg}
					src={GetReactionImageURL(this.props.reaction.reaction_type, false)}
				/>
				{this.props.reaction.count && (
					<div className={styles.ReactionCount}>
						{this.props.reaction.count}
					</div>
				)}
			</ToolTip>
		);
	}
}

interface AwardIconListProps {
	reactions: ReactionAward_t[];
}

export class AwardIconList extends PureComponent<AwardIconListProps> {
	render() {
		const vecList = [];
		for (const reaction of this.props.reactions) {
			vecList.push(
				<AwardIcon key={reaction.reaction_type} reaction={reaction} />,
			);
		}
		return <div className={styles.IconList}>{vecList}</div>;
	}
}
