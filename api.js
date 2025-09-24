// 测试当前API配置解析是否包含web类型

// 模拟从GitHub获取的API配置内容（基于日志中显示的格式）
const apiConfigContent = `
{ url: 'https://www.hxm5.com/s/bug%E4%BB%B7/', type: 'web', xp_t: '//li[@class="card"]/a/h2',xp_u: '//li[@class="card"]/a/@href',pre_u: '',name: '线报屋-bug价(XPath)', list: 'hmd', int: "220"},
{ url: 'https://www.hxm5.com/s/bug%E4%BB%B7/', type: 'web', reg_t: '<h2[^>]*>(.*?)</h2>',reg_u: '<a[^>]*href="([^"]*)"[^>]*>',pre_u: 'https://www.hxm5.com',name: '线报屋-bug价(Regex)', list: 'hmd', int: "220"},
{ url: 'https://new.xianbao.fun/plus/json/push.json', type: 'xianbao', name: '线报网-全部', list: 'bmd', int: "100"},
{ url: 'https://new.xianbao.fun/plus/json/push_10.json', type: 'xianbao', name: '线报网-微博线报', list: 'bmd', int: "120"},
{ url: 'https://new.xianbao.fun/plus/json/push_11.json', type: 'xianbao', name: '线报网-小嘀咕', list: 'bmd', int: "140"},
{ url: 'https://new.xianbao.fun/plus/json/push_16.json', type: 'xianbao', name: '线报网-赚客吧', list: 'bmd', int: "160"},
{ url: 'https://new.xianbao.fun/plus/json/push_18.json', type: 'xianbao', name: '线报网-新赚吧', list: 'bmd', int: "180"},
{ url: 'https://new.xianbao.fun/plus/json/push_19.json', type: 'xianbao', name: '线报网-什么值得买', list: 'bmd', int: "200"},
{ url: 'https://new.xianbao.fun/plus/json/push_23.json', type: 'xianbao', name: '线报网-豆瓣线报', list: 'bmd', int: "220"},
`;

// 使用与background.js相同的解析逻辑
function parseApiConfigFile(content) {
    try {
        const apiUrls = [];
        const lines = content.split('\n');

        for (const line of lines) {
            const trimmed = line.trim();

            // 跳过空行和注释行
            if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('#')) {
                continue;
            }

            // 手动解析对象字段（完全避免eval和Function）
            if (trimmed.includes('url:') && trimmed.includes('type:') && trimmed.includes('name:')) {
                console.log(`🔍 尝试解析行: ${trimmed.substring(0, 100)}...`);

                const apiConfig = {};

                // 简化的字段提取函数 - 处理嵌套引号
                const extractField = (fieldName) => {
                    // 查找字段名的位置
                    const fieldPattern = new RegExp(`${fieldName}\\s*:\\s*`, 'i');
                    const fieldMatch = trimmed.match(fieldPattern);
                    if (!fieldMatch) return null;

                    const startIndex = trimmed.indexOf(fieldMatch[0]) + fieldMatch[0].length;
                    const remaining = trimmed.substring(startIndex);

                    // 确定引号类型
                    let quote = '';
                    let value = '';

                    if (remaining.startsWith("'")) {
                        quote = "'";
                    } else if (remaining.startsWith('"')) {
                        quote = '"';
                    } else if (remaining.startsWith('`')) {
                        quote = '`';
                    } else {
                        // 无引号，提取到逗号或结束
                        const match = remaining.match(/^([^,}]+)/);
                        if (match) {
                            return match[1].trim();
                        }
                        return null;
                    }

                    // 简单方法：查找下一个相同的引号
                    let i = 1; // 跳过开始引号
                    while (i < remaining.length) {
                        const char = remaining[i];

                        if (char === quote) {
                            // 检查是否是转义的引号
                            if (i > 0 && remaining[i - 1] === '\\') {
                                value += char;
                            } else {
                                // 找到结束引号
                                break;
                            }
                        } else {
                            value += char;
                        }
                        i++;
                    }

                    return value.trim();
                };

                // 提取所有字段
                const url = extractField('url');
                const type = extractField('type');
                const name = extractField('name');
                const xpT = extractField('xp_t');
                const xpU = extractField('xp_u');
                const regT = extractField('reg_t');
                const regU = extractField('reg_u');
                const preU = extractField('pre_u');
                const list = extractField('list');
                const int = extractField('int');

                // 构建配置对象
                if (url) apiConfig.url = url;
                if (type) apiConfig.type = type;
                if (name) apiConfig.name = name;
                if (xpT) apiConfig.xp_t = xpT;
                if (xpU) apiConfig.xp_u = xpU;
                if (regT) apiConfig.reg_t = regT;
                if (regU) apiConfig.reg_u = regU;
                if (preU !== null) apiConfig.pre_u = preU; // 允许空字符串
                if (list) apiConfig.list = list;
                if (int) apiConfig.int = int;

                // 验证必需字段
                if (apiConfig.url && apiConfig.type && apiConfig.name) {
                    apiUrls.push(apiConfig);
                    console.log(`✅ 解析API配置: ${apiConfig.name} (${apiConfig.type})`);

                    // 显示web类型的特殊字段
                    if (apiConfig.type === 'web') {
                        if (apiConfig.xp_t && apiConfig.xp_u) {
                            console.log(`   XPath模式: 标题=${apiConfig.xp_t}, 链接=${apiConfig.xp_u}`);
                        }
                        if (apiConfig.reg_t && apiConfig.reg_u) {
                            console.log(`   Regex模式: 标题=${apiConfig.reg_t}, 链接=${apiConfig.reg_u}`);
                        }
                        if (apiConfig.pre_u !== undefined) {
                            console.log(`   URL前缀: ${apiConfig.pre_u || '(空)'}`);
                        }
                    }
                } else {
                    console.warn(`⚠️ API配置缺少必需字段: url=${!!apiConfig.url}, type=${!!apiConfig.type}, name=${!!apiConfig.name}`);
                }
            }
        }

        console.log(`📋 解析API配置文件: ${lines.length} 行 -> ${apiUrls.length} 个API`);
        return apiUrls;

    } catch (error) {
        console.error('解析API配置文件失败:', error);
        return [];
    }
}

// 运行测试
console.log('🧪 测试当前API配置解析...');
const result = parseApiConfigFile(apiConfigContent);

console.log('\n📊 解析结果统计:');
const webApis = result.filter(api => api.type === 'web');
const xianbaoApis = result.filter(api => api.type === 'xianbao');

console.log(`Web类型API: ${webApis.length} 个`);
console.log(`Xianbao类型API: ${xianbaoApis.length} 个`);
console.log(`总计: ${result.length} 个API`);

if (webApis.length > 0) {
    console.log('\n🌐 Web类型API详情:');
    webApis.forEach((api, index) => {
        console.log(`${index + 1}. ${api.name}`);
        console.log(`   URL: ${api.url}`);
        if (api.xp_t) console.log(`   XPath标题: ${api.xp_t}`);
        if (api.xp_u) console.log(`   XPath链接: ${api.xp_u}`);
        if (api.reg_t) console.log(`   Regex标题: ${api.reg_t}`);
        if (api.reg_u) console.log(`   Regex链接: ${api.reg_u}`);
        if (api.pre_u !== undefined) console.log(`   URL前缀: ${api.pre_u || '(空)'}`);
        console.log('');
    });
} else {
    console.log('\n❌ 没有找到Web类型API！');
}
