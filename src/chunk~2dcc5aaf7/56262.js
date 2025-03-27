import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";

import {
	Localize,
	LocalizeRtime32ToShorterDate,
	LocalizeReact,
	LocalizeInlineReactWithFallback,
} from "../../actual_src/utils/localization.js";

import n, { Cg } from "./34629.js";
import i from "./91486.js";
import a, { ul } from "./36464.js";
import s, { Bb } from "./32700.js";
import o, { Qt } from "./18057.js";
import l from "./14982.js";
import c from "./85360.js";
import m from "./46422.js";
import u from "./78057.js";
import d from "./96593.js";
import A from "./96000.js";
import p, { MD, eC, Z5 } from "./97893.js";
import g from "./48289.js";
import h from "./5640.js";
import C from "./87935.js";
import { TE, zI } from "./13200.js";
import f, { $2 } from "./96680.js";
import b, { PA } from "./41230.js";
import { q3 } from "./90095.js";
import S from "./63696.js";
import { W6 } from "./49519.js";
import { lX } from "./31084.js";
import { R7 } from "./11131.js";
import I from "./90242.js";
import E from "./69164.js";
import M from "./8573.js";
import "./74995.js";
import T from "./10975.js";
import { t7 } from "./82594.js";
import k from "./46217.js";
import D from "./35488.js";
import N from "./50376.js";
import F from "./98995.js";
import { A as A_1 } from "./90765.js";
import { dm } from "./34428.js";
import z, { l as l_1 } from "./80254.js";
import x from "./52451.js";
import U, { Qn } from "./72476.js";
import W from "./20797.js";
import V, { zq } from "./5808.js";
import H, { f as f_1 } from "./81884.js";
import j from "./56726.js";
import q from "./2326.js";
import Q from "./96821.js";
import K from "./88696.js";
import X from "./22091.js";
import { VI } from "./34792.js";
import { qw } from "./89748.js";
import ee, { zX } from "./28346.js";
import te from "./45967.js";
import { Uy } from "./55571.js";
import ne from "./10294.js";
import ie from "./24460.js";
import ae from "./44191.js";
import { br } from "./18869.js";
import { Id, If } from "./77347.js";
var Z = Q;
var Y;
const le = false;
const ce = {
	linux:
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAWhJREFUeNrMlLEuREEUhv9BKOxu6EXrAWQRISqJWhQKlHQiEo8gEYVOYXNJZC3RqxUqEoKKamXFA5CQyLL5FM5uxu7sbLOFk9zkzsx/vznn/nPGAWpndKjNUQM65/48ksYkHUgqSfqSVJZUlJSTlA3ofwOQXzaQBk5oHUdApoHjAw123QL07b1fVaHNgLHM7oFRIAMMetpCEAhMRGDvBkmATSt3yDIEGAkB8xHgGTAHzFg2KWAHWLP1XJXT5Tk+FTkNe5IqktI27jXnu2083eCylfMRyC4xnQO2gV1g337Bg2nKzUzpszIeTXQOpPxU7SRMAhfepmGg95ED+oFFYNmbnwdeA1U8hUxZBRaAnjr4hh2Xw4hpNVP8Xr6VlJf0AswCAzbfKWlY0lLEtCTYesCp7fgMrABbwDpwGcmu0Kr1bkz4CdwBbxFYvPVsIQMct+VyqDNj3IwoARU7GkUzIBvQC5D79zf2zwD3iiwiPxUy2wAAAABJRU5ErkJggg==",
	osx: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVBRDg3RTRCNENCMzExRTNCRjc1OUVCNjQzQTc5MUY3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVBRDg3RTRDNENCMzExRTNCRjc1OUVCNjQzQTc5MUY3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUFEODdFNDk0Q0IzMTFFM0JGNzU5RUI2NDNBNzkxRjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUFEODdFNEE0Q0IzMTFFM0JGNzU5RUI2NDNBNzkxRjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6imCnEAAAA6UlEQVR42szUPwtBURjHcVfKJGVT7DLYvQCTkoGSspq8CZPNzmyQIq+AskgsFgtegZRCSTi+cibudZ+rmzz1Gc7pnF+dv4ZSyuNmGW4Heh6BQjGM0Ps0ThoWxEI9q+ZGYFGHjRH+NNZqD7MoIYQVlkjhihvO6KCt25Z76EdVvdcRB5P+it2SSxYTzWqGqF1gX8krLTmUoTBsp0/+LdD75fUNICG52E0HSza9Qq+BGWwdhE7sAn2oOwhsSV5KBGtB2AZx6dNLYa8nXjDFHFfdd0LeydN7VBk5DNCFDwUkdbvxk//w/wPvAgwAuYpVKbKt5hQAAAAASUVORK5CYII=",
	windows:
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENENEIzRkRDOEM2MTFFNzkzQkNCNkJENzEzMDIzQ0UiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENENEIzRkNDOEM2MTFFNzkzQkNCNkJENzEzMDIzQ0UiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUZCNDhBREI0Q0IzMTFFM0FCM0ZDMUU2OTVGNUEwRUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUZCNDhBREM0Q0IzMTFFM0FCM0ZDMUU2OTVGNUEwRUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5YkRRHAAABB0lEQVR42mL8//8/AzUB47AyUBCIxYFYAojloFgBiJmBOBGXgcJQDSAsD8QyQHwSiIuAWB+IhYCYFc2iZ0AsDeeBDITibUD8Coh//0cFFf/xg9tIZjCwINnkCMQcaLb/AeJfQPwdiDmJCRcmJPY3akQKsoGM2CINjxxZBjJBxRmJNAMlltOwhOE/ID4KxJZAzILDwA9AvAibgbegaQ09UpqAuBJPpNwHYjMYB9lWMSDmR1MMso0LmqDZcBj4GZf//2JR/Bdq6F88YfgXl4HM1E422NIhC9Qioi1DDkMbIJaE5l9Yxgfl0XdQy3CFIRuppQ0ztKAQh1ogD8VyUD4oW9oNnQIWIMAAJM2E2lF9QHUAAAAASUVORK5CYII=",
};
export let XC = class extends S.Component {
	static {
		Y = this;
	}
	static contextType = U.QO;
	static s_setGameInfoVisible = new Set();
	static s_rgFakeDetails = [
		"",
		"UpdatingAppInfo",
		"ShowEula",
		"UpdatingDRM",
		"GettingLegacyKey",
		"SynchronizingCloud",
		"VerifyingFiles",
		"CreatingProcess",
		"WaitingGameWindow",
		"DownloadingDepots",
		"DownloadingWorkshop",
		"DelayLaunch",
		"RunningInstallScript",
	];
	constructor(e) {
		let t;
		super(e);
		this.state = {
			bShowGameInfo:
				e.overview.BIsModOrShortcut() ||
				Y.s_setGameInfoVisible.has(this.props.overview.appid),
			nGameActionDetailsOverride: 0,
			fakeOverview: t,
			gameInfoHeight: 0,
			suppressTransition: true,
		};
	}
	OnMouseUp(e) {}
	OnContextMenu(e) {
		le;
	}
	render() {
		let {
			className,
			overview,
			details,
			stickyheader,
			bInPage,
			strGameActionDetailsOverride,
			onGameInfoToggle,
			onSeek,
			bShowInfoExpanded,
			bShowingLaunchDetails,
			...m
		} = this.props;
		overview = this.props.overview;
		let u = (0, Localize)("#GameAction_ViewDetails");
		if (this.props.bShowInfoExpanded && !this.props.stickyheader) {
			u = (0, Localize)("#GameAction_ViewDetails_Collapse");
		} else if (this.props.stickyheader) {
			u = (0, Localize)("#GameAction_ViewDetails_ScrollUp");
		}
		return (
			<div
				className={A_1(
					className,
					Z.Container,
					bInPage && Z.InPage,
					stickyheader && Z.StickyHeader,
					overview.display_status == 13 && Z.Presale,
				)}
				{...m}
			>
				<div
					className={A_1(Z.PlayBar, Z.Glassy)}
					onMouseUp={undefined}
					onContextMenu={undefined}
				>
					<E.Z className={Z.InnerContainer}>
						<div className={Z.Row}>
							<Le overview={overview} strGameActionDetailsOverride={false} />
							<Uy
								overview={overview}
								details={this.props.details}
								strGameActionDetailsOverride={false}
								onSeek={this.props.onSeek}
							/>
							<div className={Z.RightControls}>
								<div className={Z.AppButtonsContainer}>
									<H2 {...this.props} />
									<K1 overview={overview} details={this.props.details} />
									{!overview.BIsModOrShortcut() && (
										<F.he
											direction="bottom"
											className={A_1(
												Z.MenuButton,
												this.props.bShowInfoExpanded && Z.MenuActive,
											)}
											onClick={this.props.onGameInfoToggle}
											toolTipContent={u}
										>
											<div className={Z.DotDotDot}>
												{this.props.stickyheader ? (
													<N.i3G angle={0} />
												) : (
													<N.$$j />
												)}
											</div>
										</F.he>
									)}
									<Pe_1 {...this.props} />
								</div>
							</div>
						</div>
						<BA {...this.props} />
					</E.Z>
				</div>
				<div
					className={A_1(
						Z.StickyHeaderShadow,
						this.props.stickyheader ? Z.Visible : "",
					)}
				/>
			</div>
		);
	}
};
Cg([x.oI], XC.prototype, "OnMouseUp", null);
XC = Y = Cg([b.PA], XC);
export let Uy = class extends S.Component {
	BIsPermanentlyUnavailable() {
		if (this.props.overview.BIsAppBlocked()) {
			return true;
		}
		switch (this.props.overview.display_status) {
			case 12:
			case 13:
			case 14:
			case 17: {
				return true;
			}
		}
		return false;
	}
	render() {
		return (
			<div
				className={A_1(
					Z.StatusAndStats,
					this.BIsPermanentlyUnavailable() && Z.PermanentlyUnavailable,
				)}
			>
				<Qj
					overview={this.props.overview}
					statusPanelType={this.props.statusPanelType}
					details={this.props.details}
					strGameActionDetailsOverride={this.props.strGameActionDetailsOverride}
				/>
				{!qw().BIsOfflineMode() && !this.BIsPermanentlyUnavailable() && (
					<div className={Z.StatusNameContainer}>
						<Oe {...this.props} />
						<Pe {...this.props} />
					</div>
				)}
			</div>
		);
	}
};
export function H2(e) {
	const t = $2();
	const r = Qn();
	const n = (function (e) {
		const [t, setT] = S.useState();
		const [n, setN] = S.useState(false);
		const [a, setA] = S.useState();
		const o = f_1(e, t);
		const l = "LaunchOptionTipsShown";
		const c = 3;
		const m =
			typeof a == "number" &&
			a < c &&
			typeof o.value == "number" &&
			o.value != -1 &&
			!n;
		S.useEffect(() => {
			new K.A().GetString(l).then((e) => {
				let t = parseInt(e ?? "0");
				if (isNaN(t)) {
					t = 0;
				}
				setA(t);
			});
			const e = setTimeout(() => {
				return setN(true);
			}, 12000);
			return () => {
				return clearTimeout(e);
			};
		}, []);
		S.useEffect(() => {
			SteamClient.Apps.GetLaunchOptionsForApp(e).then(setT);
		}, [e]);
		S.useEffect(() => {
			if (m) {
				new K.A().StoreString(l, (a + 1).toString());
			}
		}, [m, a]);
		return m;
	})(e.overview.appid);
	return (
		<div className={Z.MenuButtonContainer}>
			<Ae overview={e.overview} />
			<F.he
				direction="bottom"
				className={Z.MenuButton}
				onClick={(n) => {
					if (ne.Ih.BKioskModeLocked()) {
						return;
					}
					const i = {
						...zq(),
						bOverlapHorizontal: true,
						bOverlapVertical: false,
					};
					lX(
						<V.uU
							{...e}
							client="selected"
							launchSource={100}
							bInGamepadUI={r}
							omitPrimaryAction
							ownerWindow={t?.BrowserWindow}
						/>,
						n.currentTarget,
						i,
					);
				}}
				toolTipContent={(0, Localize)("#GameAction_Manage")}
				bDisabled={ne.Ih.BKioskModeLocked()}
			>
				<k.wB />
				{n && (
					<l.r9
						className={Z.LaunchOptionCallout}
						pulseMagnitude={2}
						bobberMagnitude={1.3}
					/>
				)}
				{n && !e.bShowingLaunchDetails && (
					<div className={Z.LaunchOptionCalloutMessageContainer}>
						<l.kg className={Z.LaunchOptionCalloutMessage}>
							{(0, Localize)("#GameAction_Manage_LaunchOptionCallout")}
						</l.kg>
					</div>
				)}
			</F.he>
		</div>
	);
}
function Ae(e) {
	const { overview } = e;
	if (Uy(overview.BIsModOrShortcut() || overview.appid)) {
		return (
			<F.he
				className={Z.PrivateAppActiveIndicator}
				toolTipContent={(0, Localize)("#GameAction_ThisAppIsPrivate")}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
					<circle cx="8" cy="8" r="8" fill="#D94126" />
				</svg>
				<D.FeatureHidden className={Z.FeatureHidden} />
			</F.he>
		);
	} else {
		return null;
	}
}
Uy = Cg([b.PA], Uy);
let Pe_1 = class extends S.Component {
	ToggleFavorite() {
		const e = this.props.overview.appid;
		A.md.SetAppsAsFavorite([e], !A.md.BIsFavorite(e));
	}
	render() {
		let e;
		let t = A.md.BIsFavorite(this.props.overview.appid);
		e = t
			? (0, Localize)("#GameAction_UnFavorite")
			: (0, Localize)("#GameAction_Favorite");
		return (
			<F.he
				direction="bottom"
				className={A_1(Z.MenuButton, Z.FavoriteButton, t && Z.Favorited)}
				onClick={this.ToggleFavorite}
				toolTipContent={e}
			>
				<k.B1 filled={t} />
			</F.he>
		);
	}
};
Cg([x.oI], Pe_1.prototype, "ToggleFavorite", null);
Pe_1 = Cg([b.PA], Pe_1);
export class Mm extends S.Component {
	render() {
		const { className, progressPct, ...r } = this.props;
		return (
			<div className={A_1(Z.DetailsProgressContainer, className)} {...r}>
				<div
					className={Z.DetailsProgressBar}
					style={{
						width: Math.min(100, progressPct) + "%",
					}}
				/>
			</div>
		);
	}
}
export function K1(e) {
	const t = Qn();
	const [r] = VI("controller_generic_support");
	const [n] = VI("controller_xbox_support");
	const [i] = VI("controller_ps_support");
	const [a] = VI("controller_switch_support");
	let s = r ? 4 : 0;
	s += n ? 2 : 0;
	if (
		i == 2 ||
		(i == 1 && X.Fd.Get().BPSControllerSupportMismatch(e.overview, false))
	) {
		s += 1;
	}
	s += a ? 8 : 0;
	const l = W6();
	const u = q3(() => {
		return X.Fd.Get().GetControllers()?.length > 0;
	});
	let d = <N.bPr />;
	const A =
		(X.Fd.Get().GetController(m.oy.MostRecentlyActiveControllerIndex) ?? u)
			? X.Fd.Get().GetControllers()[0]
			: undefined;
	switch (A?.eControllerType) {
		case 31:
		case 32:
		case 46:
		case 34:
		case 45:
		case 48: {
			d = <D.ControllerType controllerType={A.eControllerType} />;
		}
	}
	if (t) {
		c.v3.EnsureEditingConfiguration(
			e.overview.appid,
			m.oy.MostRecentlyActiveControllerIndex,
		);
		const t = () => {
			return l.push(
				o.BV.GamepadUI.ControllerConfigurator.Main(e.overview.appid),
			);
		};
		const r = () => {
			T.eZ.PlayNavSound(T.PN.DefaultOk);
			t();
		};
		return (
			<E.Z actionDescriptionMap={null}>
				<F.he
					direction="bottom"
					className={A_1(Z.MenuButton, Z.ControllerConfigButton)}
					onClick={r}
				>
					{d}
				</F.he>
			</E.Z>
		);
	}
	if (u) {
		return (
			<F.he
				direction="bottom"
				className={A_1(Z.MenuButton, Z.ControllerConfigButton)}
				onClick={() => {
					SteamClient.Apps.ShowControllerConfigurator(e.overview.appid);
					if (t) {
						c.v3.ClearEditingConfiguration();
					}
				}}
			>
				{d}
			</F.he>
		);
	} else {
		return null;
	}
}
let Ce = class extends S.Component {
	render() {
		const e = u.H.GetAchievements(this.props.details.unAppID);
		if (!e.nTotal) {
			return null;
		}
		if (h.jR.BIsFeatureBlocked(3)) {
			return null;
		}
		if (!this.props.overview.installed && e.nAchieved == 0) {
			return null;
		}
		let t = e.nAchieved / e.nTotal == 1;
		return (
			<div
				className={A_1(Z.GameStat, Z.MiniAchievements)}
				onClick={() => {
					this.props.onSeek("achievements");
				}}
			>
				<div className={A_1(Z.GameStatIcon, Z.AchievementSVG)}>
					<N.OiG fullcolor={t} />
				</div>
				<div className={A_1(Z.GameStatRight, Z.AchievementRight)}>
					<div className={A_1(Z.PlayBarLabel, Z.AchievementLabel)}>
						{(0, Localize)("#AppDetails_SectionTitle_Achievements")}
					</div>
					<div className={Z.AchievementProgressRow}>
						<div className={A_1(Z.PlayBarDetailLabel, Z.AchievementCountLabel)}>
							{e.nAchieved}/{e.nTotal}
						</div>
						<Mm progressPct={(e.nAchieved * 100) / e.nTotal} />
					</div>
				</div>
			</div>
		);
	}
};
function _e(e) {
	switch (e) {
		case 0:
		case 2: {
			return (0, Localize)("#AppDetails_CloudStatus_Unknown");
		}
		case 1: {
			return (0, Localize)("#AppDetails_CloudStatus_Disabled");
		}
		case 3: {
			return (0, Localize)("#AppDetails_CloudStatus_Synchronized");
		}
		case 4: {
			return (0, Localize)("#AppDetails_CloudStatus_Checking");
		}
		case 5: {
			return (0, Localize)("#AppDetails_CloudStatus_OutOfSync");
		}
		case 6: {
			return (0, Localize)("#AppDetails_CloudStatus_Uploading");
		}
		case 7: {
			return (0, Localize)("#AppDetails_CloudStatus_Downloading");
		}
		case 8: {
			return (0, Localize)("#AppDetails_CloudStatus_SyncFailed");
		}
		case 9: {
			return (0, Localize)("#AppDetails_CloudStatus_Conflict");
		}
		case 10: {
			return (0, Localize)("#AppDetails_CloudStatus_PendingElsewhere");
		}
	}
}
export function C4(e) {
	switch (e) {
		case 0:
		case 2: {
			return (0, Localize)("#AppDetails_CloudStatus_Tooltip_Unknown");
		}
		case 1: {
			return (0, Localize)("#AppDetails_CloudStatus_Tooltip_Disabled");
		}
		case 3: {
			return (0, Localize)("#AppDetails_CloudStatus_Tooltip_Synchronized");
		}
		case 4: {
			return (0, Localize)("#AppDetails_CloudStatus_Tooltip_Checking");
		}
		case 5: {
			return (0, Localize)("#AppDetails_CloudStatus_Tooltip_OutOfSync");
		}
		case 10: {
			return (0, Localize)("#AppDetails_CloudStatus_Tooltip_PendingElsewhere");
		}
		case 6: {
			return (0, Localize)("#AppDetails_CloudStatus_Tooltip_Uploading");
		}
		case 7: {
			return (0, Localize)("#AppDetails_CloudStatus_Tooltip_Downloading");
		}
		case 8: {
			return (0, Localize)("#AppDetails_CloudStatus_Tooltip_SyncFailed");
		}
		case 9: {
			return (0, Localize)("#AppDetails_CloudStatus_Tooltip_Conflict");
		}
	}
}
export function $u(e) {
	let t = {};
	switch (e) {
		case 0:
		case 1:
		case 2: {
			break;
		}
		case 3: {
			t.uploaded = true;
			break;
		}
		case 4:
		case 6:
		case 7: {
			t.save = true;
			break;
		}
		case 5:
		case 10:
		case 8:
		case 9: {
			t.error = true;
		}
	}
	t.className = Z.CloudIconSVG;
	return t;
}
function Ye(e) {
	const { icon, label, children } = e;
	const i = A_1(e.classNames, Z.GameStat, Z.LastPlayed);
	const a = A_1(
		e.force_icon && Z.HideWhenNarrow,
		Z.GameStatRight,
		Z.LastPlayedRight,
	);
	return (
		<F.he toolTipContent={e.strTooltip}>
			<E.Z focusable={false} className={i} onClick={e.on_click}>
				{icon && (
					<div
						className={A_1(
							e.force_icon ? Z.GameStatIconForced : Z.GameStatIcon,
							e.force_icon ? Z.PlaytimeIconForced : Z.PlaytimeIcon,
						)}
					>
						{icon}
					</div>
				)}
				<div className={a}>
					<div className={A_1(Z.PlayBarLabel, Z.LastPlayedLabel)}>{label}</div>
					<div className={A_1(Z.PlayBarDetailLabel, Z.LastPlayedInfo)}>
						{children}
					</div>
				</div>
			</E.Z>
		</F.he>
	);
}
function Se(e, t) {
	TE(
		{
			appid: e,
			onCancel: () => {},
			keepLocal: () => {
				SteamClient.Cloud.ResolveAppSyncConflict(e, true);
			},
			keepRemote: () => {
				SteamClient.Cloud.ResolveAppSyncConflict(e, false);
			},
			onOK: () => {},
			bOnAppLaunch: false,
		},
		t,
	);
}
function we(e, t) {
	zI(
		{
			appid: e,
			onCancel: () => {},
			onOK: () => {
				SteamClient.Cloud.RetryAppSync(e);
			},
			bOnAppLaunch: false,
		},
		t,
	);
}
Ce = Cg([b.PA], Ce);
export const sD = PA(function (e) {
	let t = R7();
	let r = t?.ownerWindow ?? window;
	if (
		!e.details.bCloudEnabledForApp ||
		!e.details.bCloudEnabledForAccount ||
		!e.details.bCloudEnabledForAccount ||
		!e.details.bHasAnyLocalContent
	) {
		return null;
	}
	let n = d.tw.GetAppOverviewByAppID(e.details.unAppID);
	if (!n || n.BIsModOrShortcut()) {
		return null;
	}
	const i = e.details.eCloudStatus;
	const a = $u(i);
	let s = i == 7 || i == 6 || i == 6 || i == 4;
	let o = i == 9 || i == 10 || i == 10 || i == 5 || i == 10 || i == 5 || i == 8;
	let l = i == 9;
	let c = i == 10;
	return (
		<E.Z
			focusable={o}
			className={A_1(o && Z.CloudSyncProblem, Z.CloudStatusRow)}
			onActivate={() => {
				if (o) {
					if (l) {
						Se(e.details.unAppID, r);
					} else if (!c) {
						we(e.details.unAppID, r);
					}
				}
			}}
			onFocus={e.onFocus}
			noFocusRing
		>
			<span className={A_1(s && Z.CloudSynching, Z.CloudStatusIcon)}>
				<D.CloudSync {...a} />
			</span>
			<span className={Z.CloudStatusLabel}>
				{(0, Localize)("#AppProperties_SteamCloudSection") + ": " + _e(i)}{" "}
			</span>
		</E.Z>
	);
});
function ve(e) {
	return (
		<Ye
			classNames={A_1(Z.SuperimposedGridItems)}
			force_icon
			icon={<D.CloudSync />}
			label={(0, Localize)("#AppDetails_SectionTitle_CloudStatus")}
		>
			<j.eJ className={Z.ClickablePlayBarItem}>{_e(e)}</j.eJ>
		</Ye>
	);
}
function Ie(e) {
	if (
		e.details.bCloudEnabledForApp &&
		e.details.bCloudEnabledForAccount &&
		e.details.bHasAnyLocalContent
	) {
		return (
			<div className={Z.PlayBarCloudStatusContainer}>
				<Ee {...e} />
				{ve(3)}
				{ve(4)}
				{ve(6)}
				{ve(7)}
			</div>
		);
	} else {
		return null;
	}
}
function Ee(e) {
	let t = R7();
	let r = t?.ownerWindow ?? window;
	let n = d.tw.GetAppOverviewByAppID(e.details.unAppID);
	if (!n || n.BIsModOrShortcut()) {
		return null;
	}
	const i = e.details.eCloudStatus;
	const a = $u(i);
	let s = i == 9 || i == 10 || i == 10 || i == 5 || i == 10 || i == 5 || i == 8;
	let o = i == 9;
	let l = i == 10;
	const c = () => {
		if (o) {
			Se(e.details.unAppID, r);
		} else if (!l) {
			we(e.details.unAppID, r);
		}
	};
	const m = C4(i);
	if (s) {
		return (
			<Ye
				classNames={A_1(
					Z.SuperimposedGridItems,
					Z.Visible,
					Z.CloudStatusSyncFail,
				)}
				force_icon
				strTooltip={m}
				on_click={c}
				icon={<D.CloudSync {...a} />}
				label={(0, Localize)("#AppDetails_SectionTitle_CloudStatus")}
			>
				<j.eJ className={Z.ClickablePlayBarItem}>{_e(i)}</j.eJ>
			</Ye>
		);
	} else {
		return (
			<Ye
				classNames={A_1(Z.SuperimposedGridItems, Z.Visible)}
				force_icon
				strTooltip={m}
				icon={<D.CloudSync {...a} />}
				label={(0, Localize)("#AppDetails_SectionTitle_CloudStatus")}
			>
				{_e(i)}
			</Ye>
		);
	}
}
function Me(e) {
	if (e.details.bHasAnyLocalContent || !e.details.lDiskSpaceRequiredBytes) {
		return null;
	} else {
		return (
			<Ye label={(0, Localize)("#AppDetails_SectionTitle_DiskSpaceRequired")}>
				{dm(e.details.lDiskSpaceRequiredBytes)}
			</Ye>
		);
	}
}
function Te(e) {
	const t = br();
	if (e.details.eDisplayStatus != 11 && e.details.eDisplayStatus != 4) {
		return null;
	}
	if (
		e.details.strSelectedBeta == "" ||
		e.details.strSelectedBeta == "public"
	) {
		return null;
	}
	const r = e.details.vecBetas.reduce((t, r) => {
		return r.strName == e.details.strSelectedBeta ? r.strDescription : t;
	}, "");
	return (
		<Ye
			label={(0, Localize)("#AppDetails_SectionTitle_SelectedBeta")}
			strTooltip={(0, Localize)(
				"#AppDetails_SectionTitle_SelectedBetaTooltip",
				e.details.strSelectedBeta,
				r,
			)}
		>
			<div
				className={Z.AppDetailsSelectedBeta}
				onClick={() => {
					t.AppProperties(e.details.unAppID, ae.h.Betas);
				}}
			>
				{e.details.strSelectedBeta}
			</div>
		</Ye>
	);
}
let Re = class extends S.Component {
	getLastPlayed() {
		if (
			this.props.details.rtLastTimePlayed < 31536000 ||
			this.props.details.nPlaytimeForever == 0
		) {
			return null;
		} else {
			return LocalizeRtime32ToShorterDate(this.props.details.rtLastTimePlayed);
		}
	}
	render() {
		if (this.getLastPlayed()) {
			return (
				<Ye
					label={
						this.props.bIsApplicationOrTool
							? (0, Localize)("#AppDetails_SectionTitle_LastLaunched")
							: (0, Localize)("#AppDetails_SectionTitle_LastPlayed")
					}
				>
					{this.getLastPlayed()}
				</Ye>
			);
		} else {
			return null;
		}
	}
};
Re = Cg([b.PA], Re);
let Ke = class extends S.Component {
	NavToRedeem(e) {
		GetOwningWindowForEvent(e).location.href =
			C.B7.BuildSteamURL("ClaimEntitlements");
	}
	render() {
		const e = (0, Localize)("#AppDetails_ClaimContent");
		return (
			<div>
				<E.Z>
					<E.Z className={A_1(Z.LongButton, Z.ClaimButtonContainer)}>
						<I.Ii
							noFocusRing
							className={A_1(Z.ClaimButton, Z.ButtonChild)}
							onClick={this.NavToRedeem}
							href={C.B7.GetStoreURL() + "account/claimentitlements"}
						>
							{e.length > 0 && <div className={A_1(Z.ButtonText)}>{e}</div>}
						</I.Ii>
					</E.Z>
				</E.Z>
			</div>
		);
	}
};
Cg([x.oI], Ke.prototype, "NavToRedeem", null);
Ke = Cg([b.PA], Ke);
let De = class extends S.Component {
	render() {
		if (this.props.details.nPlaytimeForever) {
			return (
				<div className={A_1(Z.GameStat, Z.Playtime)}>
					<div className={A_1(Z.GameStatIcon, Z.PlaytimeIcon)}>
						<N.eNX />
					</div>
					<div className={A_1(Z.GameStatRight, Z.PlaytimeRight)}>
						<div className={A_1(Z.PlayBarLabel, Z.PlaytimeLabel)}>
							{this.props.bIsApplicationOrTool
								? (0, Localize)("#AppDetails_SectionTitle_UsageTime")
								: (0, Localize)("#AppDetails_SectionTitle_PlayTime")}
						</div>
						<div className={A_1(Z.PlayBarDetailLabel, Z.PlaytimeInfo)}>
							{l_1(this.props.details.nPlaytimeForever)}
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
};
De = Cg([b.PA], De);
let Ne = class extends S.Component {
	render() {
		return (
			<div className={A_1(Z.GameStat, Z.Playtime)}>
				<div className={A_1(Z.GameStatIcon, Z.PlaytimeIcon)}>
					<N.eNX />
				</div>
				<div className={A_1(Z.GameStatRight, Z.PlaytimeRight)}>
					<div className={A_1(Z.PlayBarLabel, Z.PlaytimeLabel)}>
						{(0, Localize)("#AppDetails_SectionTitle_PlayTimeLeft")}
					</div>
					<div className={A_1(Z.PlayBarDetailLabel, Z.PlaytimeInfo)}>
						{l_1(this.props.timeLeftMin)}
					</div>
				</div>
			</div>
		);
	}
};
Ne = Cg([b.PA], Ne);
export const BA = PA(function (e) {
	const { details, overview } = e;
	const [n, setN] = S.useState(false);
	const s = Qt(C.B7.ResolveURL("FamilyManagement"));
	function l() {
		return (
			new M.b(details.strOwnerSteamID).GetAccountID() ==
			g.O$.currentUserSteamID.GetAccountID()
		);
	}
	const c = new M.b(details.strLockedBySteamID);
	let m = new M.b();
	let u = "#AppDetails_LibraryInUse";
	let d = false;
	let A = false;
	if (qw().BIsInFamilyGroup()) {
		d = details.bHasDifferentCopies;
		if (c.BIsValid() && c != g.O$.currentUserSteamID) {
			m = c;
			u = l()
				? "#FamilyGroup_GameOwnerLocked"
				: "#FamilyGroup_GameBorrowerLocked";
		} else if (l()) {
			if (!details.bHasDifferentCopies) {
				return null;
			}
			u = "#AppDetails_SharedPreferred_Owned";
		} else if (
			details.bIsExcludedFromSharing ||
			(function () {
				const e = new M.b(details.strOwnerSteamID);
				return (
					!details.bIsSubscribedTo &&
					!!qw().BIsFamilyGroupMember(e.GetAccountID())
				);
			})()
		) {
			if (details.bIsFreeApp || overview.BIsDemo) {
				return null;
			}
			u = "#FamilyGroup_GameExcluded";
		} else {
			if (!details.bIsSubscribedTo) {
				return null;
			}
			if (details.bHasDifferentCopies) {
				m = new M.b(details.strOwnerSteamID);
				u = "#AppDetails_SharedPreferred";
			} else {
				u = "#FamilyGroup_GameAvailable";
			}
		}
	} else {
		if (qw().BIsOfflineMode()) {
			return null;
		}
		m = c;
		if (!l()) {
			m = new M.b(details.strOwnerSteamID);
			u = "#AppDetails_InSharedLibrary";
		}
		if (!m.BIsValid()) {
			return null;
		}
		if (details.bIsSubscribedTo) {
			A = true;
		}
	}
	let p = m.BIsValid() ? g.O$.GetFriendState(m) : null;
	const h = m.BIsValid() && (
		<E.Z
			onActivate={() => {
				return ul(p);
			}}
		>
			<q.a0
				className={Z.AvatarAndPersona}
				friend={p}
				appid={0}
				bHideRichPresence
			/>
		</E.Z>
	);
	return (
		<div>
			<E.Z className={A_1(Z.Row, Z.SharedLibrary)}>
				{LocalizeReact(u, h)}
				{d && (
					<I.Ii
						className={Z.ChooseButton}
						onClick={() => {
							setN(true);
						}}
					>
						{(0, Localize)("#AppProperties_ChoosePreferredLender")}
					</I.Ii>
				)}
				{d && (
					<ie.YZ
						active={n}
						onDismiss={() => {
							setN(false);
						}}
						appID={details.unAppID}
						details={details}
					/>
				)}
			</E.Z>
			{A && (
				<E.Z className={A_1(Z.Row, Z.OldSharingWarning)}>
					<div>
						{" "}
						{LocalizeInlineReactWithFallback(
							"#FamilyGroup_OldSharingWarning",
							<I.Ii className={Z.ChooseButton} onClick={s} />,
						)}
					</div>
				</E.Z>
			)}
		</div>
	);
});
export let Qj = class extends S.Component {
	m_TimerID;
	m_hRegisterForGameActionStart = null;
	m_hRegisterForGameActionEnd = null;
	m_bMounted = false;
	constructor(e) {
		super(e);
		this.state = {
			unGameActionID: 0,
			strGameActionDetails: "",
		};
		this.m_TimerID = 0;
	}
	componentDidMount() {
		this.m_hRegisterForGameActionStart =
			SteamClient.Apps.RegisterForGameActionStart(this.onGameActionStart);
		this.m_hRegisterForGameActionEnd =
			SteamClient.Apps.RegisterForGameActionEnd(this.onGameActionEnd);
		SteamClient.Apps.GetGameActionForApp(
			this.props.overview.GetGameID(),
			this.onGameActionStart,
		);
	}
	componentWillUnmount() {
		this.m_bMounted = true;
		this.setState({
			unGameActionID: 0,
			strGameActionDetails: "",
		});
		clearInterval(this.m_TimerID);
		this.m_TimerID = 0;
		if (this.m_hRegisterForGameActionStart) {
			this.m_hRegisterForGameActionStart.unregister();
			this.m_hRegisterForGameActionStart = null;
		}
		if (this.m_hRegisterForGameActionEnd) {
			this.m_hRegisterForGameActionEnd.unregister();
			this.m_hRegisterForGameActionEnd = null;
		}
	}
	onTimerTick() {
		SteamClient.Apps.GetGameActionDetails(
			this.state.unGameActionID,
			this.onGetGameActionDetails,
		);
	}
	onGameActionStart(e, t, r) {
		if (!this.m_bMounted) {
			if (t == this.props.overview.GetGameID() && e != 0) {
				this.setState({
					unGameActionID: e,
					strGameActionDetails: "",
				});
				SteamClient.Apps.GetGameActionDetails(
					this.state.unGameActionID,
					this.onGetGameActionDetails,
				);
				if (this.m_TimerID == 0) {
					this.m_TimerID = window.setInterval(this.onTimerTick, 250);
				}
			}
		}
	}
	onGetGameActionDetails(e) {
		if (this.m_bMounted) {
			return;
		}
		let t = "";
		let r = 0;
		let n = parseInt(e.strNumDone);
		let i = parseInt(e.strNumTotal);
		if (i > 0 && n <= i) {
			r = Math.floor((n * 100) / i);
		}
		if (e.strActionName == "LaunchApp") {
			switch (e.strTaskName) {
				case "UpdatingAppInfo":
				case "ShowEula":
				case "UpdatingDRM":
				case "GettingLegacyKey":
				case "SynchronizingCloud":
				case "VerifyingFiles":
				case "CreatingProcess":
				case "WaitingGameWindow": {
					t = (0, Localize)("#LaunchApp_Action_" + e.strTaskName);
					break;
				}
				case "DownloadingDepots":
				case "DownloadingWorkshop":
				case "ProcessingShaderCache":
				case "DelayLaunch": {
					t = (0, Localize)("#LaunchApp_Action_" + e.strTaskName, r);
					break;
				}
				case "RunningInstallScript": {
					t = (0, Localize)(
						"#LaunchApp_Action_" + e.strTaskName,
						e.strTaskDetails,
					);
				}
			}
		}
		this.setState({
			strGameActionDetails: t,
		});
	}
	onGameActionEnd(e) {
		if (this.state.unGameActionID == e) {
			this.setState({
				unGameActionID: 0,
				strGameActionDetails: "",
			});
			clearInterval(this.m_TimerID);
			this.m_TimerID = 0;
		}
	}
	GetStatus() {
		if (this.props.overview.BIsAppBlocked()) {
			return (0, Localize)("#DisplayStatus_ParentalBlocked");
		}
		switch (this.props.overview.selected_per_client_data.display_status) {
			case 1:
			case 2:
			case 3:
			case 5:
			case 23:
			case 19:
			case 22:
			case 38:
			case 18:
			case 39:
			case 25:
			case 21:
			case 24:
			case 20:
			case 12:
			case 26: {
				return Bb(this.props.overview.selected_per_client_data.display_status);
			}
			case 17: {
				if (qw().BIsInFamilyGroup()) {
					return "";
				} else {
					return Bb(
						this.props.overview.selected_per_client_data.display_status,
					);
				}
			}
			case 10:
			case 13:
			case 16: {
				return <RR app={this.props.overview} />;
			}
			case 14: {
				return (
					<div className={Z.InvalidPlatform}>
						<span>{(0, Localize)("#DisplayStatus_InvalidPlatform")}</span>
						<div className={Z.Icons}>
							{this.props.details.vecPlatforms.map((e) => {
								return <img className={Z.Icon} key={e} src={ce[e]} />;
							})}
						</div>
					</div>
				);
			}
			case 7:
			case 6: {
				if (p.hj.DownloadOverview.update_appid == this.props.details.unAppID) {
					if (p.hj.DownloadOverview.update_state === "None") {
						return Bb(
							this.props.overview.selected_per_client_data.display_status,
						);
					} else {
						return (0, Localize)(
							"#Downloads_State_" + p.hj.DownloadOverview.update_state,
						);
					}
				} else {
					return Bb(
						this.props.overview.selected_per_client_data.display_status,
					);
				}
			}
			case 11: {
				if (
					this.props.overview.selected_per_client_data
						.update_available_but_disabled_by_app
				) {
					return (0, Localize)(
						"#DisplayStatus_UpdateAvailableButDisabledByApp",
					);
				}
			}
		}
		return "";
	}
	BIsDownloading() {
		switch (this.props.overview.selected_per_client_data.display_status) {
			case 6:
			case 7:
			case 22:
			case 18:
			case 23:
			case 19:
			case 24:
			case 20: {
				return true;
			}
		}
		return (
			!!this.props.overview.BIsSelectedClientLocal() &&
			p.hj.DownloadOverview.update_appid == this.props.details.unAppID &&
			!p.hj.DownloadOverview.update_is_upload
		);
	}
	GetProgressBarPct() {
		if (!this.props.overview.BIsSelectedClientLocal()) {
			if (this.props.overview.selected_per_client_data.status_percentage > 0) {
				return this.props.overview.selected_per_client_data.status_percentage;
			} else {
				return -1;
			}
		}
		if (p.hj.DownloadOverview.update_appid == this.props.details.unAppID) {
			return MD(p.hj.DownloadOverview);
		}
		const e = p.hj.GetDownloadItemForAppId(this.props.overview.appid);
		if (e) {
			return eC(e);
		}
		switch (this.props.overview.selected_per_client_data.display_status) {
			case 23:
			case 19:
			case 22:
			case 18:
			case 24:
			case 20: {
				return this.props.overview.selected_per_client_data.status_percentage;
			}
		}
		return -1;
	}
	GetDetailsText() {
		if (this.props.strGameActionDetailsOverride) {
			return this.props.strGameActionDetailsOverride;
		}
		if (this.state.unGameActionID != 0) {
			return this.state.strGameActionDetails;
		}
		if (
			this.props.overview.BIsSelectedClientLocal() &&
			p.hj.DownloadOverview.update_appid == this.props.details.unAppID
		) {
			switch (p.hj.DownloadOverview.update_state) {
				case "Unpacking":
				case "Patching": {
					if (Z5(p.hj.DownloadOverview) > 0) {
						return (0, Localize)(
							"#Downloads_State_PercentComplete",
							MD(p.hj.DownloadOverview),
						);
					}
				}
			}
			return (0, Localize)(
				"#Downloads_State_" + p.hj.DownloadOverview.update_state,
			);
		}
		let e = this.props.overview.GetPerClientData("selected");
		if (Number(e.bytes_total)) {
			switch (e.display_status) {
				case 7:
				case 6: {
					if (this.props.overview.BIsPerClientDataLocal(e)) {
						return "";
					}
				}
				case 23:
				case 19:
				case 22:
				case 18:
				case 24:
				case 20: {
					return (0, Localize)(
						"#Downloads_State_Bytes_Of_Bytes",
						dm(Number(e.bytes_downloaded)),
						dm(Number(e.bytes_total)),
					);
				}
				case 38:
				case 39: {
					return (0, Localize)(
						"#Steam_AppUpdateError_" + this.props.details.eAppUpdateError,
					);
				}
			}
		}
		return "";
	}
	GoToDownloads(e) {
		GetOwningWindowForEvent(e).location.href = "steam://open/downloads";
	}
	render() {
		const e = this.GetStatus();
		const t = this.GetDetailsText();
		const r = this.GetProgressBarPct();
		let n = this.props.overview.BIsUnreleased();
		let i = qw().BIsOfflineMode();
		let a =
			this.props.overview.selected_per_client_data.display_status == 22 ||
			this.props.overview.selected_per_client_data.display_status == 18;
		let s = this.BIsDownloading();
		let o = (s || r > 0) && this.props.statusPanelType != 1;
		if (!e && !t) {
			return null;
		}
		let l = A_1(Z.PlayBarLabel, Z.DetailsSectionStatus);
		if (n) {
			l = A_1(Z.DetailsSectionStatus, Z.ComingSoon);
		}
		if (this.props.statusPanelType === 2) {
			return (
				<div className={A_1(Z.OnlyDownloadBar, this.props.className)}>
					{o && (
						<Mm
							className={A_1(a && Z.DownloadPaused, Z.DownloadProgressBar)}
							progressPct={r < 0 ? 0 : r}
						/>
					)}
				</div>
			);
		} else {
			return (
				<div
					className={A_1(
						Z.DetailsSection,
						s && Z.Downloading,
						i && Z.OfflineMode,
						this.props.className,
					)}
					onClick={s ? this.GoToDownloads : undefined}
				>
					<div className={l}>{e}</div>
					{!n && t.length > 0 && (
						<div className={A_1(Z.PlayBarDetailLabel, Z.DetailsSectionExtra)}>
							{t != e && t}
							{o && (
								<Mm
									className={A_1(a && Z.DownloadPaused, Z.DownloadProgressBar)}
									progressPct={r < 0 ? 0 : r}
								/>
							)}
						</div>
					)}
				</div>
			);
		}
	}
};
Cg([x.oI], Qj.prototype, "onTimerTick", null);
Cg([x.oI], Qj.prototype, "onGameActionStart", null);
Cg([x.oI], Qj.prototype, "onGetGameActionDetails", null);
Cg([x.oI], Qj.prototype, "onGameActionEnd", null);
Qj = Cg([b.PA], Qj);
let Oe = class extends S.Component {
	static contextType = U.QO;
	BUserHasContentToClaim(e) {
		let t = false;
		let r = 0;
		let n = u.H.GetAppDetails(e);
		if (n) {
			for (let e of n.vecChildConfigApps) {
				let t = u.H.GetAppDetails(e);
				if (t) {
					if (t.bIsSubscribedTo && t.unEntitledContentApp != 0) {
						r = t.unEntitledContentApp;
					}
				} else {
					u.H.RegisterForAppData(e);
				}
			}
			if (r != 0) {
				let e = u.H.GetAppDetails(r);
				if (e && e.bIsSubscribedTo) {
					t = true;
				} else {
					u.H.RegisterForAppData(r);
				}
			}
		} else {
			u.H.RegisterForAppData(e);
		}
		return r != 0 && !t;
	}
	render() {
		let e;
		let t = d.tw
			.GetAppOverviewByAppID(this.props.details.unAppID)
			.BIsApplicationOrTool();
		let r = this.props.overview;
		let n = this.props.details;
		if (typeof r.selected_per_client_data.playtime_left == "number") {
			e = r.selected_per_client_data.playtime_left;
		}
		if (n.unTimedTrialSecondsAllowed > 0) {
			e = Math.ceil(
				(n.unTimedTrialSecondsAllowed - n.unTimedTrialSecondsPlayed) / 60,
			);
		}
		let i = e !== undefined;
		const n_bHasAnyLocalContent = n.bHasAnyLocalContent;
		let s = this.BUserHasContentToClaim(this.props.details.unAppID);
		return (
			<div className={Z.GameStatsSection}>
				{s && <Ke {...this.props} />}
				{n_bHasAnyLocalContent && <Te {...this.props} />}
				{!this.context?.IN_GAMEPADUI && <Ie {...this.props} />}
				{!n_bHasAnyLocalContent && <Me {...this.props} />}
				<Re {...this.props} bIsApplicationOrTool={t} />
				{!i && <De {...this.props} bIsApplicationOrTool={t} />}
				{i && <Ne timeLeftMin={e} />}
				<Ce {...this.props} onSeek={this.props.onSeek} />
				<Xe overview={this.props.overview} />
			</div>
		);
	}
};
Oe = Cg([b.PA], Oe);
class Pe extends S.Component {
	render() {
		return (
			<div className={Z.PlayBarIconAndGame}>
				<i.z
					app={this.props.overview}
					eAssetType={4}
					className={Z.PlayBarGameIcon}
				/>
				<span className={Z.PlayBarGameName}>
					{this.props.details.strDisplayName}
				</span>
			</div>
		);
	}
}
let Le = class extends S.Component {
	render() {
		return (
			<div className={Z.ActionSection}>
				<W.aV {...this.props} bShowStreamingSelector bFakeActions={le} />
			</div>
		);
	}
};
export function RR(e) {
	const { app, bCompact } = e;
	const n = Id();
	const i = If();
	const [a, o] = t7(
		app.appid,
		{
			include_release: true,
		},
		i,
	);
	if (
		!app ||
		(app.display_status != 10 &&
			app.display_status != 13 &&
			app.display_status != 16)
	) {
		return null;
	} else if (n && o != 1) {
		if (a && a.BIsComingSoon()) {
			if (a.BIsCustomComingSoonDisplay()) {
				return (0, Localize)(
					"#DisplayStatus_CustomReleaseDate",
					a.GetFormattedSteamReleaseDate(),
				);
			} else {
				return (0, Localize)(
					"#DisplayStatus_ReleaseDate",
					a.GetFormattedSteamReleaseDate(),
				);
			}
		} else {
			return (0, Localize)("#DisplayStatus_PresaleOnly");
		}
	} else {
		return Bb(app.display_status, bCompact);
	}
}
function Xe(e) {
	const t = Qn();
	const r = q3(() => {
		return X.Fd.Get().GetControllers()?.length > 0;
	});
	if (e.overview.BIsModOrShortcut() || U.TS.ON_DECK || U.TS.ON_DECK || !t) {
		return null;
	}
	if (!r && !te.qL?.HasVRHMDBeenSeen()) {
		return null;
	}
	const n = [1, 2, 16, 18, 20, 3];
	if (
		!n.some((t) => {
			return zX(e.overview, t);
		})
	) {
		return null;
	}
	const i = zX(e.overview, 3)
		? "#AppDetails_SectionTitle_Hardware"
		: "#AppDetails_SectionTitle_Controller";
	return (
		<div className={A_1(Z.HideWhenNarrow, Z.ControllerSupportInfo)}>
			<div className={A_1(Z.PlayBarLabel, Z.AchievementLabel)}>
				{(0, Localize)(i)}
			</div>
			<div className={A_1(Z.ControllerSupportRow)}>
				{n.map((t, r) => {
					return <ee.n$ key={r} overview={e.overview} feature={t} minimode />;
				})}
			</div>
		</div>
	);
}
Le = Cg([b.PA], Le);
