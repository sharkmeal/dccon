configData = {
	numChatMax				: 20,
	personalColor			:	/*false*/true,
	badgeVisible			: true,
	themeURI					: "",
	theme: "default",
	themeName					: "",
	msgExistDuration	: 60,
	msgAniDuration		: -1,
	debugLevel				:	1,
	useDisplayName		: true,
	loadCheerImgs			: true,
	loadTwitchCons		: true,
	loadDcCons				: true,
	dcConsURI					: "",
	subMonthsMsg			: "☆ {!0:{months} 개월 }구독{0: 시작}! ☆",
	cheersMsg         : "☆ {!0:{bits} 비트 }후원 ! ☆",
	clipReplaceMsg		: "[ 클립 ]",
	webSocket					: "wss://irc-ws.chat.twitch.tv:443",
	nick							: "justinfan16831",
	pass							: "foobar",
	channel						: "#sharkmeal",
	retryInterval			: 2,
	allMessageHandle: /*false*/true,
	badgeChannelId: 107478608,
	muteUser					: ["Nightbot"],
	deleteBanMsg			: true,
	commands					: [
		{exe:"clear", msg:"!!clear"},
		{exe:"theme", msg:"!!theme"}
	],
	replaceMsgs				: [
		{orig:/^![a-zA-Z]+/, to:"{no_display}"}			// 봇 호출 영문 메세지 미표시
	]
};