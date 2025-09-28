{ url: 'https://top.baidu.com/board?tab=movie', type: 'web', reg_t: '<div class="c-single-text-ellipsis">(.*?)</div>',reg_u: '<div class="c-single-text-ellipsis">(.*?)</div>',pre_u: 'https://chat.baidu.com/search?word=',name: '百度电影热榜', list: 'hmd',int: "600"}
{ url: 'https://top.baidu.com/board?platform=pc&sa=pcindex_a_right', type: 'web', reg_t: '<div class="c-single-text-ellipsis">(.*?)</div>',reg_u: '<div class="c-single-text-ellipsis">(.*?)</div>',pre_u: 'https://chat.baidu.com/search?word=',name: '百度新闻热榜', list: 'hmd',int: "600"}
{ url: 'https://www.qianggou5.com/price/', type: 'web', reg_t: '<div class="span7"><b>最后更新时间：</b>&nbsp;(.*?)</div>',reg_u: '<div class="span7"><b>最后更新时间：</b>&nbsp;(.*?)</div>',pre_u: 'https://www.qianggou5.com/price/#',name: '手机行情报价更新', list: 'hmd',int: "600"}
{ url: 'https://gemini.google/release-notes/', type: 'web', reg_t: '</h1>(.*?)<h3',reg_u: '</h1>(.*?)<h3',pre_u: 'https://gemini.google/release-notes/#',name: 'gemini更新', list: 'hmd',int: "1200"}
{ url: 'https://www.lianshi.gov.cn/NewsList/16.html', type: 'web', reg_t: '<span class=["\']list_news_bt["\']><a href=["\'].*?["\'] target=["\']_blank["\']>(.*?)</a>',reg_u: '<span class=["\']list_news_bt["\']><a href=["\'](.*?)["\'] target=["\']_blank["\']>.*?</a>',pre_u: 'https://www.lianshi.gov.cn/',name: '廉石', list: 'hmd',int: "600"},
{ url: 'https://www.jssjw.gov.cn/col/col232/index.html', type: 'web', reg_t: 'href=["\'].*?["\'] class=["\']bt_link["\'] title=["\'](.*?)["\'] target=["\']_blank["\']>',reg_u: 'href=["\'](.*?)["\'] class=["\']bt_link["\'] title=".*?" target=["\']_blank["\']>',pre_u: 'https://www.jssjw.gov.cn',name: '清风扬帆', list: 'hmd',int: "600"},
{ url: 'https://www.hxm5.com/s/%E5%A4%A7%E6%AF%9B/', type: 'web', xp_t: '//li[@class="card"]/a/h2',xp_u: '//li[@class="card"]/a/@href',pre_u: 'https://www.hxm5.com',name: '线报屋-大毛', list: 'hmd',int: "120"},
{ url: 'https://www.hxm5.com/s/%E5%B0%8F%E7%B1%B317/', type: 'web', xp_t: '//li[@class="card"]/a/h2',xp_u: '//li[@class="card"]/a/@href',pre_u: 'https://www.hxm5.com',name: '线报屋-小米17', list: 'hmd',int: "120"},
{ url: 'https://www.hxm5.com/s/iphone%2017/', type: 'web', xp_t: '//li[@class="card"]/a/h2',xp_u: '//li[@class="card"]/a/@href',pre_u: 'https://www.hxm5.com',name: '线报屋-iphone17', list: 'hmd',int: "120"},
{ url: 'https://www.hxm5.com/s/%E9%80%9F%E5%BA%A6/', type: 'web', xp_t: '//li[@class="card"]/a/h2',xp_u: '//li[@class="card"]/a/@href',pre_u: 'https://www.hxm5.com',name: '线报屋-速度', list: 'hmd',int: "120"},
{ url: 'https://www.hxm5.com/s/bug%E4%BB%B7/', type: 'web', xp_t: '//li[@class="card"]/a/h2',xp_u: '//li[@class="card"]/a/@href',pre_u: 'https://www.hxm5.com',name: '线报屋-bug价', list: 'hmd',int: "120"},
//{ url: 'https://new.xianbao.fun/plus/json/push.json', type: 'xianbao', name: '线报网-全部', list:'bmd' ,int:"100"},  
//{ url: 'https://new.xianbao.fun/plus/json/push_10.json', type: 'xianbao', name: '线报网-微博线报', list:'bmd' ,int:"120"},
//{ url: 'https://new.xianbao.fun/plus/json/push_11.json', type: 'xianbao', name: '线报网-小嘀咕', list:'bmd' ,int:"140"},
//{ url: 'https://new.xianbao.fun/plus/json/push_16.json', type: 'xianbao', name: '线报网-赚客吧', list:'bmd' ,int:"160"},
//{ url: 'https://new.xianbao.fun/plus/json/push_18.json', type: 'xianbao', name: '线报网-新赚吧', list:'bmd' ,int:"180"},
//{ url: 'https://new.xianbao.fun/plus/json/push_19.json', type: 'xianbao', name: '线报网-什么值得买', list:'bmd' ,int:"200"},
//{ url: 'https://new.xianbao.fun/plus/json/push_23.json', type: 'xianbao', name: '线报网-豆瓣线报', list:'bmd' ,int:"220"}, 
