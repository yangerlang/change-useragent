var objSelect = document.getElementById('useragentlist');

objSelect.addEventListener('change', function() {
	var index = objSelect.selectedIndex;
	if (index === 1) {
		localStorage.setItem(
			"changeuseragent", "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 MicroMessenger/6.5.5 NetType/WIFI Language/zh_CN"
		);
	} else if (index === 2) {
		localStorage.setItem(
			"changeuseragent", "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1"
		);
	} else if (index === 3) {
		localStorage.setItem(
			"changeuseragent", "Mozilla/5.0 (Linux; Android 5.1.1; OPPO A33m Build/LMY47V) AppleWebkit/537.36 (KHTML,like Gecko) Chrome/57.0.2987.132 Mobile Safari/537.36"
		);
	} else if (index === 4) {
		localStorage.setItem(
			"changeuseragent", "Mozilla/5.0 (Linux; Android 5.1.1; OPPO A33m Build/LMY47V) AppleWebkit/537.36 (KHTML,like Gecko) Chrome/57.0.2987.132 Mobile Safari/537.36"
		);
	} else if (index === 5) {
		localStorage.setItem(
			"changeuseragent", "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 MicroMessenger/6.5.5 NetType/WIFI Language/zh_CN"
		);
	} else {
		localStorage.setItem(
			"changeuseragent", navigator.userAgent
		);
	}
})
