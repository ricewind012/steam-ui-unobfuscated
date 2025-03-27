import * as o from "./63696.js";
import * as n from "./72993.js";
import * as s from "./43397.js";
export default o.forwardRef(
	(
		{
			steamID,
			localSteamID,
			watchLocation,
			bWebRTC,
			style,
			onRequestClose,
			actions,
			onTheaterMode,
			onLocalStreamChange,
			bVerticalBroadcastChat,
		},
		p,
	) => {
		const g = localSteamID || steamID;
		return (
			<div
				ref={p}
				style={{
					display: "flex",
					flexDirection: "column",
					...style,
				}}
			>
				<div className="BroadcastSection">
					<n.default
						key={g}
						steamIDBroadcast={g}
						watchLocation={watchLocation}
						bWebRTC={bWebRTC}
						onRequestClose={onRequestClose}
						actions={actions}
						onTheaterMode={onTheaterMode}
						onOpenLinkInNewWindow={s.EP}
					/>
					<div className="videoContainerSizer" />
				</div>
				<div className="BroadcastDetailsSection">
					<n.BroadcastDetails
						steamID={g}
						onLocalStreamChange={onLocalStreamChange}
						bVerticalBroadcastChat={bVerticalBroadcastChat}
					/>
				</div>
			</div>
		);
	},
);
