import { CCallbackList } from "../utils/callbackutils/callbacklist";

export class CAppInfoStore {
	m_CMInterface: any;
	m_mapAppInfo: Map<number, AppInfo_t>;
	m_mapRichPresenceLoc: any;
	m_cAppInfoRequestsInFlight: number;
	m_setPendingAppInfo: Set<unknown>;
	m_PendingAppInfoPromise: any;
	m_PendingAppInfoResolve: any;
	m_CacheStorage: any;
	m_fnCallbackOnAppInfoLoaded: CCallbackList;

	BHavePendingAppInfoRequests(): boolean;
	EnsureAppInfoForAppIDs(rgAppIDs: any[]): Promise<any>;
	FlushPendingAppInfo(): Promise<void>;
	GetAppInfo(appid: any): any;
	GetCacheKeyForAppID(appid: any): string;
	GetRichPresenceLocAsync(e: any): any;
	GetRichPresenceLoc(e: any): any;
	IsLoadingAppID(appid: any): boolean;
	LoadAppInfoBatchFromLocalCache(rgAppInfoBatch: any[]): Promise<any[]>;
	LoadAppInfoBatch(rgAppInfoBatch: any[]): Promise<void>;
	Localize(appid: any, strToken: string, r: any): any;
	OnAppOverviewChange(e: any): void;
	OnGetAppsResponse(msg: any): void;
	OnRichPresenceLocUpdate(e: any, t: any): void;
	QueueAppInfoRequest(e: any): any;
	QueueRichPresenceLocRequest(e: any): any;
	RegisterCallbackOnLoad(callback: () => void): void;
	SaveAppInfoBatchToLocalCache(rgAppInfoBatch: any[]): Promise<void>;
	SetCacheStorage(storage: any): void;
}
