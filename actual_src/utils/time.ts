// Webpack module ID: 41180

/**
 * Constants for number of seconds in period
 */
export const Seconds = {
	PerYear: 31536000,
	PerMonth: 2628000,
	PerWeek: 604800,
	PerDay: 86400,
	PerHour: 3600,
	PerMinute: 60,
};

/**
 * Returns true if both dates are on the same day
 */
export function IsDateSameDay(lhs: Date, rhs: Date) {
	return (
		lhs.getFullYear() == rhs.getFullYear() &&
		lhs.getMonth() == rhs.getMonth() &&
		lhs.getDate() == rhs.getDate()
	);
}

/** @returns true if both dates are in the same year */
export function IsDateSameYear(lhs: Date, rhs: Date) {
	return lhs.getFullYear() == rhs.getFullYear();
}

export function RoundToBeginningOfMonth(dt: Date) {
	return new Date(dt.getFullYear(), dt.getMonth(), 1, 0, 0, 0, 0);
}

export function Sleep(nDurationMS: number) {
	return new Promise((resolve) => setTimeout(resolve, nDurationMS));
}

export function GetUnixTime() {
	return Math.floor(Date.now() / 1000);
}

export function ToUnixTime(dt: Date) {
	return Math.floor(dt.getTime() / 1000);
}

export function Timestamp(dt: Date) {
	const t = Math.round(dt / 1000);
	const n = Math.floor(t % 60);
	const r = Math.floor((t / 60) % 60);
	const i = Math.floor(t / 3600);
	let s = false;
	let str = "";
	if (i > 0) {
		str += i + ":";
		s = true;
	}
	str += s && r < 10 ? "0" + r + ":" : r + ":";
	str += n < 10 ? "0" + n : n;
	return str;
}
