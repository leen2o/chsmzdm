// SMZDM API配置文件示例
// 这个文件定义了要监控的API端点

const API_URLS = [
  // 精选内容 - 使用hmd模式（黑名单外的才推送）
  { 
    url: 'https://damo.smzdm.com/interest/more_page?page=1&size=30&sort=2&brand_ids=35984&damo_hash_id=anzjgyz&damo_type=brand&last_page_sort=&tabs=%7B%22id%22%3A%221729774200605%22%2C%22tab_type%22%3A%224%22%2C%22channel_ids%22%3A%2276%2C801%2C802%2C154%22%2C%22brand_ids%22%3A%2235984%22%2C%22sort%22%3A%222%22%2C%22sub_tab%22%3A%7B%22id%22%3A%221729774211977%22%2C%22fix_tab_type%22%3A2%7D%7D&f=web&device_id=&check_switch=1&sess=&smzdm_id=&project_id=0', 
    type: 'hot', 
    name: '尊乐-什么值得买',
    list: 'hmd'
  },
  { 
    url: 'https://damo.smzdm.com/interest/more_page?page=1&size=30&sort=2&brand_ids=787&damo_hash_id=a49ldqr&damo_type=brand&last_page_sort=&tabs=%7B%22id%22%3A%221729774200605%22%2C%22tab_type%22%3A%224%22%2C%22channel_ids%22%3A%2276%2C801%2C802%2C154%22%2C%22brand_ids%22%3A%22787%22%2C%22sort%22%3A%222%22%2C%22sub_tab%22%3A%7B%22id%22%3A%221729774211977%22%2C%22fix_tab_type%22%3A2%7D%7D&f=web&device_id=&check_switch=1&sess=&smzdm_id=&project_id=0', 
    type: 'hot', 
    name: '双鱼-什么值得买',
    list: 'hmd'
  },
  
  // 移动端主题优惠 - 使用bmd模式（不在黑名单且在白名单才推送）
  { 
    url: 'https://m.smzdm.com/damo_theme/more_page?tag_id=t8jnl0o&page=1&size=20&damo_hash_id=a677134&damo_type=theme&tabs=%7B%22id%22%3A1732778802150%2C%22day%22%3A0%2C%22tab_type%22%3A%226%22%2C%22channel_ids%22%3A%2276%2C801%2C802%2C154%2C3%22%2C%22sort%22%3A%221%22%2C%22sub_tab%22%3A%7B%22id%22%3A1739168096519%2C%22channel_ids%22%3A%2276%2C801%2C154%2C3%2C802%22%2C%22sort%22%3A%221%22%7D%7D&f=web&device_id=', 
    type: 'featured', 
    name: '移动端主题优惠',
    list: 'bmd'
  },
  
  // 热门优惠 - 使用hmd模式
  { url: 'https://faxian.smzdm.com/json_more?filter=h2s0t0f0c1&page=1', type: 'hot', name: '3h热门', list: 'hmd' },
  { url: 'https://faxian.smzdm.com/json_more?filter=h2s0t0f0c1&page=2', type: 'hot', name: '3h热门-第2页', list: 'hmd' },
  { url: 'https://faxian.smzdm.com/json_more?filter=h3s0t0f0c1&page=1', type: 'hot', name: '12h热门', list: 'hmd' },
  { url: 'https://faxian.smzdm.com/json_more?filter=h3s0t0f0c1&page=2', type: 'hot', name: '12h热门-第2页', list: 'hmd' },
  { url: 'https://faxian.smzdm.com/json_more?filter=h4s0t0f0c1&page=1', type: 'hot', name: '24h热门', list: 'hmd' },
  { url: 'https://faxian.smzdm.com/json_more?filter=h4s0t0f0c1&page=2', type: 'hot', name: '24h热门-第2页', list: 'hmd' },
  
  // 线报网 - 使用bmd模式（更严格的过滤）
  { url: 'https://new.xianbao.fun/plus/json/rank/yixiaoshi-hot.json', type: 'xianbao', name: '线报网热门', list: 'bmd' },
  
  // 新增：web类型API - 使用XPath解析
  { 
    url: 'https://www.hxm5.com/s/bug%E4%BB%B7/', 
    type: 'web', 
    xp_t: '//li[@class="card"]/a/h2',
    xp_u: '//li[@class="card"]/a/@href',
    pre_u: '',
    name: '线报屋-bug价(XPath)', 
    list: 'hmd',
    int: "220"
  },
  
  // 新增：web类型API - 使用正则表达式解析
  { 
    url: 'https://www.hxm5.com/s/bug%E4%BB%B7/', 
    type: 'web', 
    reg_t: '<h2>(.*?)</h2>',
    reg_u: 'href="([^"]*)"',
    pre_u: 'https://www.hxm5.com',
    name: '线报屋-bug价(Regex)', 
    list: 'hmd',
    int: "220"
  },
  
  // 可以添加更多API...
  // list字段说明：
  // - 'hmd': 黑名单外的才推送（不在黑名单）
  // - 'bmd': 不在黑名单且在白名单才推送（双重过滤）
  // - 不设置或其他值: 使用原有逻辑（只检查黑名单）
  
  // web类型API字段说明：
  // - type: 'web' - 表示这是网页抓取类型的API
  // - xp_t: XPath表达式，用于提取标题
  // - xp_u: XPath表达式，用于提取链接
  // - reg_t: 正则表达式，用于提取标题（与xpath二选一）
  // - reg_u: 正则表达式，用于提取链接（与xpath二选一）
  // - pre_u: URL前缀，当抓取到的链接是相对路径时用于补全
];

// 导出配置（支持多种格式）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = API_URLS;
}

// 也可以直接返回数组
API_URLS;
