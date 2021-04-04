if (typeof(php_data.ac_settings.site_tracking) != "undefined" && php_data.ac_settings.site_tracking == "1") {
	if(typeof(php_data.ac_settings.tracking_actid) === "undefined" || php_data.ac_settings.tracking_actid === ''){
		console.log('Site tracking account not found');
	}
	else{
		(function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");

		vgo('setAccount', php_data.ac_settings.tracking_actid);

		vgo('setTrackByDefault', php_data.ac_settings.site_tracking_default == "1");

		if (typeof trackcmp_email !== 'undefined') {
			vgo('setEmail', trackcmp_email);
		}

		vgo('process');

		function acEnableTracking() {
			let expiration = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
			document.cookie = "ac_enable_tracking=1;samesite=none;secure; expires= " + expiration + "; path=/";
			vgo('process', 'allowTracking');
		}

		if (php_data.ac_settings.site_tracking_default == "1" || /(^|; )ac_enable_tracking=([^;]+)/.test(document.cookie)) {
			acEnableTracking();
		}
	}
}
