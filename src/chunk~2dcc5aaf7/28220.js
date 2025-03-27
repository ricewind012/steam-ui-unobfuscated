import n from "./63696.js";
import i, { g7 } from "./2773.js";
import a from "./98995.js";
import s from "./58608.js";
import o from "./96360.js";
import l, { A as A_1 } from "./90765.js";
export function x(e) {
	const { gameID, tags, attributes } = e;
	const { rgMetadata, rgDemoted } = g7(tags, attributes);
	return (
		<div className={s.PhaseTags}>
			{rgMetadata.map((e, r) => (
				<M key={`${g(e)}_${r}`} metadata={e} gameID={gameID} />
			))}
			{rgDemoted.length > 0 && (
				<div className={s.TextTags}>
					{rgDemoted.map(({ name }) => name).join(", ")}
				</div>
			)}
		</div>
	);
}
function M(e) {
	const { metadata, gameID } = e;
	switch (metadata.type) {
		case "attribute": {
			return <U {...metadata.attribute} />;
		}
		case "tags": {
			return <D tags={metadata.tags} gameID={gameID} />;
		}
		default: {
			return metadata;
		}
	}
}
function U(e) {
	const { group, value } = e;
	return (
		<a.he toolTipContent={`${group} - ${value}`}>
			<div className={s.PhaseAttribute}>{value}</div>
		</a.he>
	);
}
function D(e) {
	const { tags, gameID } = e;
	return (
		<div className={s.TagGroup}>
			{tags.map((e) => (
				<A key={e.name} {...e} gameID={gameID} />
			))}
		</div>
	);
}
function A(e) {
	const { icon, name, gameID, group, bFilterMatch } = e;
	const m = typeof bFilterMatch == "boolean";
	const u = A_1(m && bFilterMatch && s.Bright, m && !bFilterMatch && s.Dim);
	return (
		<a.he toolTipContent={`${group} - ${name}`} className={u}>
			<N icon={icon} gameID={gameID} />
		</a.he>
	);
}
export function N(e) {
	const { icon, gameID } = e;
	return <o.XR icon={icon} gameID={gameID} className={s.PhaseListIcon} />;
}
function g(e) {
	switch (e.type) {
		case "attribute": {
			return `attr_${e.attribute.group}`;
		}
		case "tags": {
			return `tags_${e.tags[0].group}`;
		}
		default: {
			return "";
		}
	}
}
