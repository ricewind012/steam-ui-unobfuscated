var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require("./88724.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require(/*webcrack:missing*/ "./72476.js");
var c = require("./12767.js");
const m =
	"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
var u = require("./6496.js");
var d = require("./21045.js");
var A = d;
import { FailAssertion } from "../../actual_src/utils/assert.js";
export const Ul = i.memo(function (e) {
	const {
		strAvatarURL: t,
		size: r = "Medium",
		className: n,
		statusStyle: a,
		statusPosition: s,
		children: l,
		...d
	} = e;
	const g = i.useMemo(() => {
		const e = [];
		if (t) {
			e.push(t);
		}
		e.push(
			(function (e) {
				switch (e) {
					case "X-Small":
					case "Small":
						return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
					case "Medium":
					case "MediumLarge":
						return m;
					case "Large":
					case "X-Large":
					case "FillArea":
						return u.A;
					default:
						FailAssertion(e, `Unhandled size ${e}`);
						return m;
				}
			})(r),
		);
		return e;
	}, [t, r]);
	return i.createElement(
		"div",
		{
			className: (0, o.A)(A.avatarHolder, "avatarHolder", "no-drag", r, n),
			...d,
		},
		i.createElement("div", {
			className: (0, o.A)(A.avatarStatus, "avatarStatus", s),
			style: a,
		}),
		i.createElement(c.c, {
			className: (0, o.A)(A.avatar, "avatar"),
			rgSources: g,
			draggable: false,
		}),
		l,
	);
});
export let i8 = class extends i.Component {
	render() {
		const {
			persona: e,
			size: t = "Medium",
			animatedAvatar: r,
			className: n,
			...a
		} = this.props;
		let c = "";
		if (r && r.image_small && r.image_small.length != 0) {
			c = l.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + r.image_small;
		} else if (e) {
			c = e.avatar_url_medium;
			if (t == "Small" || t == "X-Small") {
				c = e.avatar_url;
			} else if (t == "Large" || t == "X-Large" || t == "FillArea") {
				c = e.avatar_url_full;
			}
		}
		return i.createElement(Ul, {
			strAvatarURL: c,
			size: t,
			className: (0, o.A)((0, s.rO)(e), n),
			...a,
		});
	}
};
i8 = (0, n.Cg)([a.PA], i8);
const C = (0, a.PA)((e) => {
	const { profileItem: t, className: r, bDisableAnimation: n, ...a } = e;
	if (!t || !t.image_small || t.image_small.length == 0) {
		return null;
	}
	let s = n ? t.image_large : t.image_small;
	s ||= t.image_small;
	if (!s.startsWith("https://")) {
		s = l.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + s;
	}
	return i.createElement(
		"div",
		{
			className: (0, o.A)(A.avatarFrame, r, "avatarFrame"),
			...a,
		},
		i.createElement("img", {
			className: A.avatarFrameImg,
			src: s,
		}),
	);
});
export let xz = class extends i.Component {
	m_timer;
	constructor(e) {
		super(e);
		this.state = {
			bAnimate: this.props.loopDuration != "None",
		};
		this.m_timer = 0;
	}
	componentDidMount() {
		if (!this.props.bParentHovered) {
			this.SetupAnimationTimer();
		}
	}
	SetupAnimationTimer() {
		let e = 0;
		switch (this.props.loopDuration) {
			case "Short":
				e = 2500;
				break;
			case "Medium":
				e = 5000;
				break;
			case "Long":
				e = 10000;
		}
		if (e != 0) {
			this.setState({
				bAnimate: this.props.loopDuration != "None",
			});
			this.m_timer = window.setTimeout(
				() =>
					this.setState({
						bAnimate: false,
					}),
				e,
			);
		}
	}
	StopAnimationTimer() {
		if (this.m_timer) {
			window.clearTimeout(this.m_timer);
			this.m_timer = 0;
		}
	}
	onHover() {
		this.SetupAnimationTimer();
	}
	componentWillUnmount() {
		this.StopAnimationTimer();
	}
	componentDidUpdate(e) {
		if (this.props.loopDuration != e.loopDuration) {
			if (this.props.loopDuration == "None") {
				this.setState({
					bAnimate: false,
				});
				this.StopAnimationTimer();
			} else if (this.props.loopDuration == "Infinite") {
				this.setState({
					bAnimate: true,
				});
				this.StopAnimationTimer();
			} else {
				this.setState({
					bAnimate: true,
				});
				this.SetupAnimationTimer();
			}
		}
		if (this.props.bParentHovered != e.bParentHovered) {
			if (
				this.props.bParentHovered &&
				this.props.loopDuration != "None" &&
				this.props.loopDuration != "Infinite"
			) {
				this.setState({
					bAnimate: true,
				});
				this.StopAnimationTimer();
			} else if (this.state.bAnimate) {
				this.SetupAnimationTimer();
			}
		}
	}
	render() {
		let {
			loopDuration: e,
			animatedAvatar: t,
			avatarFrame: r,
			children: n,
			style: a,
			bLimitProfileFrameAnimationTime: s,
			bParentHovered: o,
			...l
		} = this.props;
		if (l.onClick) {
			a = {
				...a,
				cursor: "pointer",
			};
		}
		if (!this.state.bAnimate) {
			t = null;
		}
		return i.createElement(
			"div",
			{
				onMouseEnter: () =>
					this.setState({
						bAnimate: this.props.loopDuration != "None",
					}),
				onMouseLeave: () => this.SetupAnimationTimer(),
			},
			i.createElement(
				i8,
				{
					animatedAvatar: t,
					...l,
				},
				n,
				i.createElement(C, {
					profileItem: r,
					bDisableAnimation: s && !this.state.bAnimate,
				}),
			),
		);
	}
};
xz = (0, n.Cg)([a.PA], xz);
