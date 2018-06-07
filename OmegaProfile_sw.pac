var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+sw", {
    "+sw": function() {
        ;
function FindProxyForURL(url, host) 
{
if (!isResolvable(host))
return "DIRECT";
else if (isPlainHostName(host) || dnsDomainIs(host, ".cnki.net") || dnsDomainIs(host, ".duxiu.com") || dnsDomainIs(host, ".sslibrary.com") || dnsDomainIs(host, ".zhizhen.com") || dnsDomainIs(host, ".swufe.edu.cn") || dnsDomainIs(host, ".duxiudsr.com") || dnsDomainIs(host, ".gtarsc.com") || dnsDomainIs(host, ".ghy.cn") || dnsDomainIs(host, ".countrydata.bvdep.com") || dnsDomainIs(host, ".jstor.org") || dnsDomainIs(host, ".ebscohost.com") || dnsDomainIs(host, ".lexisnexis.com") || dnsDomainIs(host, ".proquest.umi.com") || dnsDomainIs(host, ".lexisnexis.com") || dnsDomainIs(host, ".sciencedirect.com") || dnsDomainIs(host, ".bankscope.bvdep.com") || dnsDomainIs(host, ".zlzx.org") || dnsDomainIs(host, "202.115.24.7") || dnsDomainIs(host, ".wanfangdata.com.cn") || dnsDomainIs(host, ".drcnet.com.cn") || dnsDomainIs(host, ".blyun.com") || dnsDomainIs(host, ".chinalawinfo.com") || dnsDomainIs(host, ".bvdep.com") || dnsDomainIs(host, ".ceicdata.com") || dnsDomainIs(host, ".pkulaw.cn") || dnsDomainIs(host, ".webofknowledge.com") || dnsDomainIs(host, ".resset.cn") || dnsDomainIs(host, ".edu") || dnsDomainIs(host, ".gmail.com") || dnsDomainIs(host, ".cnbksy.cn") || dnsDomainIs(host, ".cnrds.cn") || dnsDomainIs(host, ".gtadata.com") || dnsDomainIs(host, ".gtarsc.com"))
return "PROXY lib-proxy2.swufe.edu.cn:80";
else if (isInNet(host, "192.168.0.0", "255.255.0.0")) 
return "PROXY lib-proxy2.swufe.edu.cn:80";
else if (isInNet(host, "202.115.112.0", "255.255.240.0")) 
return "PROXY lib-proxy2.swufe.edu.cn:80";
else if (isInNet(host, "10.0.0.0", "255.0.0.0")) 
return "PROXY lib-proxy2.swufe.edu.cn:80";
else
return "DIRECT";  
}

/* End of PAC */;
        return FindProxyForURL;
    }.call(this)
});