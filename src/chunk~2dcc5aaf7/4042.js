import { FindAndRemove } from "../../actual_src/utils/arrayutils.js";
import i, { Cg } from "./34629.js";
import a from "./63696.js";
import _o from "./20590.js";
import l from "./52451.js";
import { A } from "./90765.js";
import m from "./26853.js";
let n;
((e) => {
	e[(e.NotLoaded = 0)] = "NotLoaded";
	e[(e.Loading = 1)] = "Loading";
	e[(e.Loaded = 2)] = "Loaded";
})((n ||= {}));
let n_NotLoaded = n.NotLoaded;
let d = [];
export function o(e) {
	if (n_NotLoaded == n.Loaded) {
		e();
		return;
	}
	if (n_NotLoaded == n.NotLoaded) {
		let e = document.createElement("script");
		e.src = "https://www.youtube.com/iframe_api";
		let t = document.getElementsByTagName("script")[0];
		t.parentNode.insertBefore(e, t);
		window.onYouTubeIframeAPIReady = p;
	}
	if (d.findIndex((t) => e == t) < 0) {
		d.push(e);
	}
}
function p() {
	n_NotLoaded = n.Loaded;
	for (let e of d) {
		e();
	}
	d = [];
}
export class N extends a.Component {
	m_strPlayerID = "";
	m_player = null;
	m_playerContainer = null;
	m_bPlayerReady = false;
	static s_nPlayerIndex = 0;
	constructor(e) {
		super(e);
		this.m_strPlayerID = `YoutubePlayer_${N.s_nPlayerIndex++}`;
		this.state = {
			bYoutubeLoaded: false,
		};
	}
	componentWillUnmount() {
		let e;
		this.DestroyPlayer();
		e = this.OnYoutubeScriptsReady;
		FindAndRemove(d, e);
	}
	shouldComponentUpdate(e, t) {
		if (!this.m_player) {
			return false;
		}
		const r = this.props;
		if (
			r.autoplay != e.autoplay ||
			r.controls != e.controls ||
			r.controls != e.controls ||
			r.showInfo != e.showInfo ||
			r.controls != e.controls ||
			r.showInfo != e.showInfo ||
			r.video != e.video
		) {
			this.CreatePlayer(e);
			return false;
		} else {
			if (r.width != e.width || r.height != e.height) {
				if (this.m_bPlayerReady && e.width && e.height) {
					this.m_player.setSize(e.width, e.height);
				}
			}
			return r.forcePause != e.forcePause;
		}
	}
	componentDidUpdate(e) {
		if (e.forcePause != this.props.forcePause) {
			if (this.props.forcePause) {
				this.m_player.pauseVideo();
			} else {
				this.m_player.playVideo();
			}
		}
	}
	DestroyPlayer() {
		if (this.m_player) {
			try {
				if (this.m_player.stopVideo) {
					this.m_player.stopVideo();
				}
				if (this.m_player.destroy) {
					this.m_player.destroy();
				}
			} catch (e) {
			} finally {
				this.m_player = null;
			}
		}
	}
	BindPlayerContainer(e) {
		if (this.m_playerContainer != e) {
			this.m_playerContainer = e;
			this.DestroyPlayer();
			if (this.m_playerContainer) {
				o(this.OnYoutubeScriptsReady);
			}
		}
	}
	OnYoutubeScriptsReady() {
		this.CreatePlayer(this.props);
	}
	CreatePlayer(e) {
		this.DestroyPlayer();
		if (!this.m_playerContainer) {
			return;
		}
		const t = e.autoplay === false ? 0 : 1;
		const r = e.showInfo === true ? 1 : 0;
		const n = e.controls === true ? 1 : 0;
		const i = e.showFullscreenBtn === true ? 1 : 0;
		const a = e.playsInline === true ? 1 : 0;
		let s = {
			width: e.width !== undefined ? String(e.width) : undefined,
			height: e.height !== undefined ? String(e.height) : undefined,
			videoId: e.video,
			playerVars: {
				autoplay: t,
				showinfo: r,
				autohide: 1,
				fs: i,
				modestbranding: 1,
				rel: 0,
				playsinline: a,
				iv_load_policy: 3,
				controls: n,
				start: e.startSeconds,
			},
			events: {
				onReady: this.OnPlayerReady,
				onStateChange: this.OnPlayerStateChange,
				onError: this.OnError,
			},
		};
		let o = this.m_playerContainer.firstElementChild;
		this.m_bPlayerReady = false;
		this.m_player = new YT.Player(o, s);
	}
	OnPlayerReady(e) {
		this.m_bPlayerReady = true;
		if (this.props.onVideoInfoChanged) {
			let e = this.m_player.getVideoData();
			let t = {
				strAuthor: "",
				strTitle: "",
				strVideoID: "",
			};
			if (e.author) {
				t.strAuthor = e.author;
			}
			if (e.title) {
				t.strTitle = e.title;
			}
			if (e.video_id) {
				t.strVideoID = e.video_id;
			}
			this.props.onVideoInfoChanged(t);
		}
		if (this.props.width && this.props.height) {
			this.m_player.setSize(this.props.width, this.props.height);
		}
		if (this.props.autoplay) {
			this.m_player.playVideo();
		}
		if (this.props.onPlayerReady) {
			this.props.onPlayerReady();
		}
	}
	OnPlayerStateChange(e) {
		switch (e.data) {
			case YT.PlayerState.UNSTARTED: {
				break;
			}
			case YT.PlayerState.BUFFERING: {
				if (this.props.onBuffering) {
					this.props.onBuffering();
				}
				break;
			}
			case YT.PlayerState.PLAYING: {
				if (this.props.onPlaying) {
					this.props.onPlaying();
				}
				break;
			}
			case YT.PlayerState.PAUSED: {
				if (this.props.onPaused) {
					this.props.onPaused();
				}
				break;
			}
			case YT.PlayerState.ENDED: {
				if (this.props.onMovieEnd) {
					this.props.onMovieEnd();
				}
			}
		}
	}
	OnError(e) {
		console.log("Youtube: Playback failed", e);
		if (this.props.onError) {
			this.props.onError(e);
		}
	}
	OnPlayerLeftView() {
		if (this.props.autopause && this.m_player && this.m_bPlayerReady) {
			this.m_player.pauseVideo();
		}
	}
	PlayVideo(e) {
		if (this.m_player && this.m_bPlayerReady) {
			if (e) {
				this.m_player.seekTo(0, true);
			}
			this.m_player.playVideo();
		}
	}
	render() {
		const e = (
			<div
				key={this.m_strPlayerID}
				ref={this.BindPlayerContainer}
				className={A("YoutubePlayer", this.props.classnames)}
			>
				<m.t className="YoutubePlayerThrobber" />
			</div>
		);
		if (this.props.autopause) {
			return <_o.Y onLeave={this.OnPlayerLeftView}>{e}</_o.Y>;
		} else {
			return e;
		}
	}
}
Cg([l.oI], N.prototype, "BindPlayerContainer", null);
Cg([l.oI], N.prototype, "OnYoutubeScriptsReady", null);
Cg([l.oI], N.prototype, "CreatePlayer", null);
Cg([l.oI], N.prototype, "OnPlayerReady", null);
Cg([l.oI], N.prototype, "OnPlayerStateChange", null);
Cg([l.oI], N.prototype, "OnError", null);
Cg([l.oI], N.prototype, "OnPlayerLeftView", null);
Cg([l.oI], N.prototype, "PlayVideo", null);
