var r = require("./4690.js");
export function O(e) {
	switch (e) {
		case "column":
			return r.xj.COLUMN;
		case "column-reverse":
			return r.xj.COLUMN_REVERSE;
		case "row":
			return r.xj.ROW;
		case "row-reverse":
			return r.xj.ROW_REVERSE;
		case "grid":
			return r.xj.GRID;
		default:
			return r.xj.NONE;
	}
}
