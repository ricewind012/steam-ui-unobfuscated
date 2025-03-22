var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./49455.js");
var o = require(/*webcrack:missing*/ "./88750.js");
var l = require(/*webcrack:missing*/ "./98995.js");
var c = require("./43152.js");
var m = require("./45967.js");
var u = require(/*webcrack:missing*/ "./90095.js");
const d = "DEBUG_LibrarySettingsZoo_";
class A {
	constructor() {
		(0, a.Gn)(this);
	}
	m_mapToggles = new a.Es();
	async Init() {
		this.m_mapToggles = new a.Es([
			[
				20,
				{
					strLabel: "Simulate VR UI on Desktop",
					strDescription:
						"VR UI instance will be created, using desktop popups instead of VR overlays.",
					eShowInPanel: 4,
				},
			],
			[
				21,
				{
					strLabel: "VR Dashboard Bar has Many Tabs",
					strDescription:
						"Adds many tabs to the VR Dashboard Bar to test layout overflow.",
					eShowInPanel: 4,
				},
			],
			[
				0,
				{
					strLabel: '"Sticky" Hovers',
					strDescription:
						"Hovers will remain open to facilitate debugging and styling.",
					fnOnChange: (e) => {
						(0, l.Vr)(e);
					},
				},
			],
			[
				8,
				{
					strLabel: "Sticky Context Menus",
					strDescription:
						"Context menus will remain open to facilitate debugging and styling.",
					fnOnChange: (e) => {
						(0, o.$b)(e);
					},
				},
			],
			[
				15,
				{
					strLabel: "Sticky Keyboard",
					strDescription:
						"Keyboard will remain open on focus lost to facilitate debugging and styling.",
					fnOnChange: (e) => {
						(0, c.hk)(e);
					},
				},
			],
			[
				19,
				{
					strLabel: "Force Popup Context Menus",
					strDescription:
						"All context menus will be created as popups rather than DOM elements.",
					fnOnChange: (e) => {
						(0, o.fd)(e);
					},
				},
			],
			[
				1,
				{
					strLabel: "Apps Have Tons of Friends",
					strDescription:
						"If an app shows friends, duplicate entries in the list of friends so there are a ton of them (useful for testing display/styling).",
				},
			],
			[
				2,
				{
					strLabel: "Allow Repeat Apps",
					strDescription:
						"When the next query happens, ask the server to allow multiple instances of apps to appear.",
					eShowInPanel: 1,
				},
			],
			[
				3,
				{
					strLabel: "No Minimum",
					strDescription:
						"When the next query happens, ask the server to ignore the per-category minimum number of friends that we normally require.",
					eShowInPanel: 1,
				},
			],
			[
				4,
				{
					strLabel: "Slow Query",
					strDescription:
						"When the next query happens, delay sending the query message for 10s, to make sure the throbber shows up.",
					eShowInPanel: 1,
				},
			],
			[
				5,
				{
					strLabel: "Break Images",
					strDescription:
						"Use broken image URLs for logos and headers in friends activity app components.",
					eShowInPanel: 1,
				},
			],
			[
				6,
				{
					strLabel: "Debug Spew",
					strDescription: "Emit extra debugging info.",
					eShowInPanel: 1,
				},
			],
			[
				7,
				{
					strLabel: "Force Showing Owned DLC",
					strDescription:
						"This will only show DLC that you have added to your account for the currently selected app. Civ 5 and Stellaris are good games to test with.",
					eShowInPanel: 0,
				},
			],
			[
				17,
				{
					strLabel: "Force Showing New Content Spotlight",
					strDescription:
						"This will only show DLC if there is some available on the store for the current app",
					eShowInPanel: 0,
				},
			],
			[
				16,
				{
					strLabel: "Show Already Viewed Featured Events",
					strDescription:
						"This will show already viewed (and timed out) featured news events",
					eShowInPanel: 0,
				},
			],
			[
				9,
				{
					strLabel: "Force Empty",
					strDescription:
						"Force the section to be empty, as though the user had no qualifying results.",
					eShowInPanel: 1,
				},
			],
			[
				10,
				{
					strLabel: "Ignore App History",
					strDescription:
						"When the next query happens, ask the server to ignore all previous history of displayed apps.",
					eShowInPanel: 1,
				},
			],
			[
				11,
				{
					strLabel: "Force Fresh Query",
					strDescription:
						"When the next query happens, ask the server to ignore memoized results and re-run the job.",
					eShowInPanel: 1,
				},
			],
			[
				12,
				{
					strLabel: "Ignore Unowned Limit",
					strDescription:
						"Don't impose a limit on how many unowned titles are returned in the results.",
					eShowInPanel: 1,
				},
			],
			[
				13,
				{
					strLabel: "Don't Filter",
					strDescription:
						"Don't filter Play Next results to eliminate blocked or recently-played games.",
					eShowInPanel: 2,
				},
			],
			[
				14,
				{
					strLabel: "Slow Query",
					strDescription:
						"Artifically delay next Play Next query, to exercise loading/throbber codepath.",
					eShowInPanel: 2,
				},
			],
			[
				18,
				{
					strLabel: "Mark all notifications read",
					strDescription:
						" After opening the green envelope menu mark all notifications as read.",
					eShowInPanel: 3,
				},
			],
		]);
		this.m_mapToggles.forEach((e, t) => {
			e.currentValue = !!e.defaultValue;
		});
		(0, a.fm)(() => {
			m.qL?.SetSimulatingVROnDesktop(this.GetToggle(20));
		});
	}
	GetToggle(e) {
		return this.GetToggleSetting(e)?.currentValue || false;
	}
	GetToggleSetting(e) {
		(0, s.w)(
			this.m_mapToggles.size == 0 || this.m_mapToggles.has(e),
			`Invalid toggle '${e}' -- did someone forget to add it to the map?`,
		);
		return this.m_mapToggles.get(e);
	}
	GetAllToggles() {
		return Array.from(this.m_mapToggles.entries());
	}
	GetTogglesForPanel(e) {
		return this.GetAllToggles().filter(([t, r]) => r.eShowInPanel == e);
	}
	SetToggle(e, t) {
		(0, s.w)(
			this.m_mapToggles.has(e),
			`Invalid toggle '${e}' -- did someone forget to add it to the map?`,
		);
		const r = this.m_mapToggles.get(e);
		r.currentValue = !!t;
		const n = d + r.strLabel;
		window.sessionStorage.setItem(n, r.currentValue.toString());
		if (r.fnOnChange) {
			r.fnOnChange(r.currentValue);
		}
	}
}
export function Dw(e) {
	const t = (0, u.q3)(() => hG.GetToggle(e));
	const r = i.useCallback((t) => hG.SetToggle(e, t), [e]);
	return i.useMemo(() => [t, r], [t, r]);
}
(0, n.Cg)([a.sH], A.prototype, "m_mapToggles", undefined);
(0, n.Cg)([a.XI.bound], A.prototype, "SetToggle", null);
export const hG = new A();
window.settingsZooStore = hG;
