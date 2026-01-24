// ===== 货代知识库数据 =====
// 数据来源：全世界分为亚洲、欧洲、非洲、美洲、大洋洲五大板块
// 亚洲(48个国家) | 欧洲(44个国家+2个地区) | 非洲(54个国家+7个地区)
// 美洲(35个国家+19个地区) | 大洋洲(16个国家+8个地区)
const knowledgeBase = {
    "countries": {
        title: "国家城市",
        description: "截至2020年，世界上共有233个国家和地区，其中国家有197个（主权国家195个），地区有36个。各区域国家按GDP从高到低排序。",
        continents: {
            "asia": {
                name: "亚洲",
                intro: "亚洲共有48个国家，是世界上最大的洲，拥有全球最繁忙的港口和贸易航线，是国际物流的核心区域。",
                regions: {
                    "east-asia": {
                        name: "东亚",
                        countries: ["china", "japan", "korea", "mongolia", "north-korea"]
                    },
                    "southeast-asia": {
                        name: "东南亚",
                        countries: ["indonesia", "thailand", "singapore", "malaysia", "vietnam", "philippines", "myanmar", "cambodia", "brunei", "laos", "timor-leste"]
                    },
                    "south-asia": {
                        name: "南亚",
                        countries: ["india", "pakistan", "bangladesh", "srilanka", "nepal", "maldives", "bhutan"]
                    },
                    "central-asia": {
                        name: "中亚",
                        countries: ["kazakhstan", "uzbekistan", "turkmenistan", "kyrgyzstan", "tajikistan"]
                    },
                    "west-asia": {
                        name: "西亚",
                        countries: ["turkey", "saudi-arabia", "uae", "israel", "iran", "iraq", "qatar", "kuwait", "oman", "jordan", "lebanon", "bahrain", "georgia", "azerbaijan", "armenia", "cyprus", "syria", "yemen", "afghanistan", "palestine"]
                    }
                },
                countries: {
                    "china": { 
                        name: "中国", 
                        intro: "中国是全球最大的贸易国，拥有世界最繁忙的港口群和发达的物流网络。",
                        // 机场数据
                        airports: {
                            international: [
                                { code: "PVG", name: "上海浦东国际机场", city: "上海" },
                                { code: "PEK", name: "北京首都国际机场", city: "北京" },
                                { code: "PKX", name: "北京大兴国际机场", city: "北京" },
                                { code: "CAN", name: "广州白云国际机场", city: "广州" },
                                { code: "SZX", name: "深圳宝安国际机场", city: "深圳" },
                                { code: "CTU", name: "成都天府国际机场", city: "成都" },
                                { code: "SHA", name: "上海虹桥国际机场", city: "上海" },
                                { code: "HGH", name: "杭州萧山国际机场", city: "杭州" }
                            ],
                            domestic: [
                                { code: "XIY", name: "西安咸阳国际机场", city: "西安" },
                                { code: "CKG", name: "重庆江北国际机场", city: "重庆" },
                                { code: "NKG", name: "南京禄口国际机场", city: "南京" },
                                { code: "WUH", name: "武汉天河国际机场", city: "武汉" }
                            ]
                        },
                        // 港口数据
                        ports: {
                            international: [
                                { code: "CNSHA", name: "上海港", city: "上海", desc: "全球最大集装箱港，年吞吐量超4700万TEU" },
                                { code: "CNNGB", name: "宁波舟山港", city: "宁波", desc: "货物吞吐量全球第一" },
                                { code: "CNSZX", name: "深圳港", city: "深圳", desc: "华南最大港口，盐田港区全球知名" },
                                { code: "CNCAN", name: "广州港", city: "广州", desc: "珠三角核心枢纽" },
                                { code: "CNTAO", name: "青岛港", city: "青岛", desc: "北方重要港口" },
                                { code: "CNTSN", name: "天津港", city: "天津", desc: "京津冀门户" }
                            ],
                            domestic: [
                                { code: "CNXMN", name: "厦门港", city: "厦门", desc: "对台贸易重要港口" },
                                { code: "CNDLC", name: "大连港", city: "大连", desc: "东北最大港口" }
                            ]
                        },
                        // 航司数据
                        airlines: [
                            { code: "CZ", name: "中国南方航空", nameEn: "China Southern Airlines" },
                            { code: "MU", name: "中国东方航空", nameEn: "China Eastern Airlines" },
                            { code: "CA", name: "中国国际航空", nameEn: "Air China" },
                            { code: "HU", name: "海南航空", nameEn: "Hainan Airlines" },
                            { code: "3U", name: "四川航空", nameEn: "Sichuan Airlines" },
                            { code: "ZH", name: "深圳航空", nameEn: "Shenzhen Airlines" }
                        ],
                        // 船司数据
                        shippingLines: [
                            { code: "COSCO", name: "中远海运", nameEn: "COSCO Shipping", desc: "全球第四大集装箱航运公司" },
                            { code: "OOCL", name: "东方海外", nameEn: "OOCL", desc: "香港知名航运公司" },
                            { code: "SITC", name: "山东海丰", nameEn: "SITC", desc: "亚洲区域航运领导者" }
                        ],
                        // 省份城市
                        provinces: [
                            { name: "广东省", cities: ["广州", "深圳", "东莞", "佛山", "珠海"] },
                            { name: "浙江省", cities: ["杭州", "宁波", "温州", "义乌"] },
                            { name: "江苏省", cities: ["南京", "苏州", "无锡", "常州"] },
                            { name: "上海市", cities: ["上海"] },
                            { name: "北京市", cities: ["北京"] },
                            { name: "福建省", cities: ["福州", "厦门", "泉州"] }
                        ],
                        // 清关政策
                        customsPolicies: [
                            { title: "一般贸易进口", content: "需提供报关单、发票、装箱单、合同、提单等文件。根据商品HS编码征收关税和增值税。" },
                            { title: "跨境电商进口", content: "单次交易限值5000元，年度限值26000元。税率优惠：关税0%，增值税和消费税70%征收。" },
                            { title: "保税区政策", content: "货物可在保税区内存储、加工，出区时再办理清关。适合需要分批进口的企业。" }
                        ],
                        keywords: ["上海港", "宁波港", "深圳港", "中国港口"]
                    },
                    "japan": { name: "日本", content: `<p>日本是亚洲发达经济体，港口设施先进。</p><h2>主要港口</h2><ul><li><strong>东京港</strong>：首都港口</li><li><strong>横滨港</strong>：关东最大港</li><li><strong>名古屋港</strong>：汽车出口重镇</li><li><strong>大阪港</strong>：关西枢纽</li><li><strong>神户港</strong>：历史名港</li><li><strong>博多港</strong>：九州门户</li></ul>`, keywords: ["东京港", "横滨港", "日本港口"] },
                    "korea": { name: "韩国", content: `<p>韩国是重要的制造业和航运国家。</p><h2>主要港口</h2><ul><li><strong>釜山港</strong>：全球第六大集装箱港</li><li><strong>仁川港</strong>：首都圈门户</li><li><strong>光阳港</strong>：现代化深水港</li></ul>`, keywords: ["釜山港", "韩国港口"] },
                    "taiwan": { name: "中国台湾", content: `<p>台湾是重要的电子产品制造和贸易中心。</p><h2>主要港口</h2><ul><li><strong>高雄港</strong>：台湾最大港口</li><li><strong>基隆港</strong>：北部主要港口</li><li><strong>台中港</strong>：中部工业港</li></ul>`, keywords: ["高雄港", "台湾港口"] },
                    "hongkong": { name: "中国香港", content: `<p>香港是亚洲金融中心和重要转口港。</p><h2>主要港口</h2><ul><li><strong>香港港</strong>：全球重要转口港，葵涌货柜码头</li></ul>`, keywords: ["香港港", "葵涌码头"] },
                    "macau": { name: "中国澳门", content: `<p>澳门是特别行政区，主要进行旅游相关贸易。</p><h2>港口</h2><ul><li><strong>澳门港</strong>：客货运港口</li></ul>`, keywords: ["澳门港"] },
                    "mongolia": { name: "蒙古", content: `<p>蒙古是内陆国家，主要通过中俄港口进行贸易。</p><h2>贸易通道</h2><ul><li>主要通过中国天津港、大连港出海</li><li>通过俄罗斯符拉迪沃斯托克港</li></ul>`, keywords: ["蒙古贸易", "内陆运输"] },
                    "singapore": { name: "新加坡", content: `<p>新加坡是全球最繁忙的转口港之一。</p><h2>主要港口</h2><ul><li><strong>新加坡港</strong>：全球第二大集装箱港，年吞吐量超3700万TEU</li></ul>`, keywords: ["新加坡港", "转口港"] },
                    "malaysia": { name: "马来西亚", content: `<p>马来西亚位于马六甲海峡，地理位置优越。</p><h2>主要港口</h2><ul><li><strong>巴生港</strong>：马来西亚最大港口</li><li><strong>丹戎帕拉帕斯港</strong>：重要转运港</li><li><strong>槟城港</strong>：北部港口</li></ul>`, keywords: ["巴生港", "马来西亚港口"] },
                    "thailand": { name: "泰国", content: `<p>泰国是东南亚制造业中心。</p><h2>主要港口</h2><ul><li><strong>林查班港</strong>：泰国最大深水港</li><li><strong>曼谷港</strong>：传统贸易港</li></ul>`, keywords: ["林查班港", "泰国港口"] },
                    "vietnam": { name: "越南", content: `<p>越南是快速发展的制造业国家。</p><h2>主要港口</h2><ul><li><strong>胡志明港</strong>：越南最大港口</li><li><strong>海防港</strong>：北部主要港口</li><li><strong>岘港</strong>：中部港口</li></ul>`, keywords: ["胡志明港", "越南港口"] },
                    "indonesia": { name: "印度尼西亚", content: `<p>印尼是东南亚最大国家，群岛国家港口众多。</p><h2>主要港口</h2><ul><li><strong>雅加达港</strong>：印尼最大港口</li><li><strong>泗水港</strong>：第二大港</li><li><strong>巴淡港</strong>：转运港</li></ul>`, keywords: ["雅加达港", "印尼港口"] },
                    "philippines": { name: "菲律宾", content: `<p>菲律宾是群岛国家，港口分布广泛。</p><h2>主要港口</h2><ul><li><strong>马尼拉港</strong>：菲律宾最大港口</li><li><strong>宿务港</strong>：中部枢纽</li></ul>`, keywords: ["马尼拉港", "菲律宾港口"] },
                    "myanmar": { name: "缅甸", content: `<p>缅甸正在发展其港口基础设施。</p><h2>主要港口</h2><ul><li><strong>仰光港</strong>：缅甸最大港口</li><li><strong>皎漂港</strong>：中缅经济走廊重要港口</li></ul>`, keywords: ["仰光港", "缅甸港口"] },
                    "cambodia": { name: "柬埔寨", content: `<p>柬埔寨是东南亚新兴市场。</p><h2>主要港口</h2><ul><li><strong>西哈努克港</strong>：柬埔寨唯一深水港</li></ul>`, keywords: ["西哈努克港", "柬埔寨港口"] },
                    "laos": { name: "老挝", content: `<p>老挝是内陆国家，通过邻国港口进行贸易。</p><h2>贸易通道</h2><ul><li>主要通过泰国林查班港</li><li>通过越南岘港、海防港</li></ul>`, keywords: ["老挝贸易", "内陆运输"] },
                    "brunei": { name: "文莱", content: `<p>文莱是石油富国。</p><h2>主要港口</h2><ul><li><strong>穆阿拉港</strong>：文莱主要港口</li></ul>`, keywords: ["穆阿拉港", "文莱港口"] },
                    "india": { name: "印度", content: `<p>印度是南亚最大经济体，港口快速发展。</p><h2>主要港口</h2><ul><li><strong>尼赫鲁港</strong>：印度最大集装箱港</li><li><strong>孟买港</strong>：西海岸枢纽</li><li><strong>金奈港</strong>：东海岸重要港口</li><li><strong>加尔各答港</strong>：传统贸易港</li><li><strong>蒙德拉港</strong>：私营大港</li></ul>`, keywords: ["尼赫鲁港", "孟买港", "印度港口"] },
                    "pakistan": { name: "巴基斯坦", content: `<p>巴基斯坦是南亚重要国家，中巴经济走廊正在发展。</p><h2>主要港口</h2><ul><li><strong>卡拉奇港</strong>：巴基斯坦最大港口</li><li><strong>瓜达尔港</strong>：中巴经济走廊终点</li></ul>`, keywords: ["卡拉奇港", "瓜达尔港"] },
                    "bangladesh": { name: "孟加拉国", content: `<p>孟加拉国是重要的纺织品出口国。</p><h2>主要港口</h2><ul><li><strong>吉大港</strong>：孟加拉国最大港口</li></ul>`, keywords: ["吉大港", "孟加拉国港口"] },
                    "srilanka": { name: "斯里兰卡", content: `<p>斯里兰卡位于印度洋航运要道。</p><h2>主要港口</h2><ul><li><strong>科伦坡港</strong>：南亚重要转口港</li><li><strong>汉班托塔港</strong>：新建深水港</li></ul>`, keywords: ["科伦坡港", "斯里兰卡港口"] },
                    "nepal": { name: "尼泊尔", content: `<p>尼泊尔是内陆国家。</p><h2>贸易通道</h2><ul><li>主要通过印度加尔各答港</li></ul>`, keywords: ["尼泊尔贸易"] },
                    "maldives": { name: "马尔代夫", content: `<p>马尔代夫是印度洋岛国。</p><h2>主要港口</h2><ul><li><strong>马累港</strong>：首都港口</li></ul>`, keywords: ["马累港", "马尔代夫港口"] },
                    "kazakhstan": { name: "哈萨克斯坦", content: `<p>哈萨克斯坦是中亚最大国家，"一带一路"重要节点。</p><h2>贸易通道</h2><ul><li>中欧班列重要途经国</li><li>阿克套港（里海）</li></ul>`, keywords: ["哈萨克斯坦", "中欧班列"] },
                    "uzbekistan": { name: "乌兹别克斯坦", content: `<p>乌兹别克斯坦是中亚重要国家。</p><h2>贸易通道</h2><ul><li>主要通过铁路连接中国和欧洲</li></ul>`, keywords: ["乌兹别克斯坦"] },
                    "turkmenistan": { name: "土库曼斯坦", content: `<p>土库曼斯坦拥有丰富的天然气资源。</p><h2>贸易通道</h2><ul><li>土库曼巴希港（里海）</li></ul>`, keywords: ["土库曼斯坦"] },
                    "kyrgyzstan": { name: "吉尔吉斯斯坦", content: `<p>吉尔吉斯斯坦是中亚内陆国家。</p><h2>贸易通道</h2><ul><li>通过中国和哈萨克斯坦进行贸易</li></ul>`, keywords: ["吉尔吉斯斯坦"] },
                    "tajikistan": { name: "塔吉克斯坦", content: `<p>塔吉克斯坦是中亚内陆国家。</p><h2>贸易通道</h2><ul><li>通过中国和阿富汗进行贸易</li></ul>`, keywords: ["塔吉克斯坦"] },
                    "uae": { name: "阿联酋", content: `<p>阿联酋是中东最重要的贸易和转口中心。</p><h2>主要港口</h2><ul><li><strong>杰贝阿里港</strong>：中东最大港口，全球第九大港</li><li><strong>阿布扎比港</strong>：重要港口</li></ul>`, keywords: ["杰贝阿里港", "迪拜港口"] },
                    "saudi-arabia": { name: "沙特阿拉伯", content: `<p>沙特是中东最大经济体。</p><h2>主要港口</h2><ul><li><strong>吉达港</strong>：红海最大港口</li><li><strong>达曼港</strong>：波斯湾港口</li><li><strong>朱拜勒港</strong>：工业港口</li></ul>`, keywords: ["吉达港", "沙特港口"] },
                    "turkey": { name: "土耳其", content: `<p>土耳其横跨欧亚，是重要贸易桥梁。</p><h2>主要港口</h2><ul><li><strong>伊斯坦布尔港</strong>：博斯普鲁斯海峡枢纽</li><li><strong>伊兹密尔港</strong>：爱琴海港口</li><li><strong>梅尔辛港</strong>：地中海港口</li></ul>`, keywords: ["伊斯坦布尔港", "土耳其港口"] },
                    "israel": { name: "以色列", content: `<p>以色列是中东科技和贸易中心。</p><h2>主要港口</h2><ul><li><strong>海法港</strong>：以色列最大港口</li><li><strong>阿什杜德港</strong>：现代化港口</li></ul>`, keywords: ["海法港", "以色列港口"] },
                    "qatar": { name: "卡塔尔", content: `<p>卡塔尔是天然气出口大国。</p><h2>主要港口</h2><ul><li><strong>哈马德港</strong>：卡塔尔新建大港</li><li><strong>多哈港</strong>：传统港口</li></ul>`, keywords: ["哈马德港", "卡塔尔港口"] },
                    "kuwait": { name: "科威特", content: `<p>科威特是石油出口国。</p><h2>主要港口</h2><ul><li><strong>舒威赫港</strong>：科威特主要港口</li></ul>`, keywords: ["科威特港口"] },
                    "oman": { name: "阿曼", content: `<p>阿曼位于阿拉伯半岛东南。</p><h2>主要港口</h2><ul><li><strong>萨拉拉港</strong>：重要转运港</li><li><strong>苏哈尔港</strong>：工业港口</li></ul>`, keywords: ["萨拉拉港", "阿曼港口"] },
                    "bahrain": { name: "巴林", content: `<p>巴林是波斯湾岛国。</p><h2>主要港口</h2><ul><li><strong>米纳萨尔曼港</strong>：巴林主要港口</li></ul>`, keywords: ["巴林港口"] },
                    "jordan": { name: "约旦", content: `<p>约旦是中东重要贸易通道国家。</p><h2>主要港口</h2><ul><li><strong>亚喀巴港</strong>：约旦唯一港口</li></ul>`, keywords: ["亚喀巴港", "约旦港口"] },
                    "lebanon": { name: "黎巴嫩", content: `<p>黎巴嫩是地中海东岸国家。</p><h2>主要港口</h2><ul><li><strong>贝鲁特港</strong>：黎巴嫩主要港口</li></ul>`, keywords: ["贝鲁特港", "黎巴嫩港口"] },
                    "iraq": { name: "伊拉克", content: `<p>伊拉克是石油出口大国。</p><h2>主要港口</h2><ul><li><strong>乌姆盖斯尔港</strong>：伊拉克主要港口</li><li><strong>巴士拉港</strong>：波斯湾港口</li></ul>`, keywords: ["伊拉克港口"] },
                    "iran": { name: "伊朗", content: `<p>伊朗拥有波斯湾和阿曼湾海岸线。</p><h2>主要港口</h2><ul><li><strong>阿巴斯港</strong>：伊朗最大港口</li><li><strong>恰巴哈尔港</strong>：印度投资的港口</li></ul>`, keywords: ["阿巴斯港", "伊朗港口"] },
                    "syria": { name: "叙利亚", content: `<p>叙利亚位于地中海东岸。</p><h2>主要港口</h2><ul><li><strong>拉塔基亚港</strong>：叙利亚主要港口</li><li><strong>塔尔图斯港</strong>：地中海港口</li></ul>`, keywords: ["叙利亚港口"] },
                    "yemen": { name: "也门", content: `<p>也门位于阿拉伯半岛南端。</p><h2>主要港口</h2><ul><li><strong>亚丁港</strong>：红海入口战略港口</li></ul>`, keywords: ["亚丁港", "也门港口"] },
                    "north-korea": { name: "朝鲜", content: `<p>朝鲜民主主义人民共和国，贸易受限。</p><h2>主要港口</h2><ul><li><strong>南浦港</strong>：朝鲜西海岸主要港口</li><li><strong>清津港</strong>：东海岸主要港口</li><li><strong>元山港</strong>：东海岸港口</li></ul>`, keywords: ["南浦港", "朝鲜港口"] },
                    "timor-leste": { name: "东帝汶", content: `<p>东帝汶是东南亚最年轻的国家。</p><h2>主要港口</h2><ul><li><strong>帝力港</strong>：首都港口</li></ul>`, keywords: ["帝力港", "东帝汶港口"] },
                    "bhutan": { name: "不丹", content: `<p>不丹是南亚内陆国家。</p><h2>贸易通道</h2><ul><li>主要通过印度加尔各答港</li></ul>`, keywords: ["不丹贸易"] },
                    "afghanistan": { name: "阿富汗", content: `<p>阿富汗是中亚内陆国家。</p><h2>贸易通道</h2><ul><li>通过巴基斯坦卡拉奇港</li><li>通过伊朗恰巴哈尔港</li></ul>`, keywords: ["阿富汗贸易"] },
                    "georgia": { name: "格鲁吉亚", content: `<p>格鲁吉亚位于高加索地区，黑海沿岸。</p><h2>主要港口</h2><ul><li><strong>巴统港</strong>：格鲁吉亚主要港口</li><li><strong>波季港</strong>：黑海港口</li></ul>`, keywords: ["巴统港", "格鲁吉亚港口"] },
                    "azerbaijan": { name: "阿塞拜疆", content: `<p>阿塞拜疆位于里海沿岸，石油出口国。</p><h2>主要港口</h2><ul><li><strong>巴库港</strong>：里海最大港口</li><li><strong>阿利亚特港</strong>：新建港口</li></ul>`, keywords: ["巴库港", "阿塞拜疆港口"] },
                    "armenia": { name: "亚美尼亚", content: `<p>亚美尼亚是高加索内陆国家。</p><h2>贸易通道</h2><ul><li>通过格鲁吉亚巴统港</li><li>通过伊朗阿巴斯港</li></ul>`, keywords: ["亚美尼亚贸易"] },
                    "palestine": { name: "巴勒斯坦", content: `<p>巴勒斯坦地区。</p><h2>贸易通道</h2><ul><li>通过以色列港口</li><li>通过埃及港口</li></ul>`, keywords: ["巴勒斯坦"] },
                    "cyprus": { name: "塞浦路斯", content: `<p>塞浦路斯是地中海东部岛国，位于欧亚交界处。</p><h2>主要港口</h2><ul><li><strong>利马索尔港</strong>：塞浦路斯最大港口</li><li><strong>拉纳卡港</strong>：东部港口</li></ul>`, keywords: ["利马索尔港", "塞浦路斯港口"] }
                }
            },
            "europe": {
                name: "欧洲",
                intro: "欧洲共有44个国家和2个地区，拥有发达的港口网络和完善的物流基础设施，是全球重要的贸易区域。",
                regions: {
                    "northern-europe": {
                        name: "北欧",
                        countries: ["sweden", "norway", "denmark", "finland", "iceland"]
                    },
                    "western-europe": {
                        name: "西欧",
                        countries: ["france", "uk", "netherlands", "belgium", "ireland", "luxembourg", "monaco"]
                    },
                    "central-europe": {
                        name: "中欧",
                        countries: ["germany", "poland", "switzerland", "austria", "czech", "hungary", "slovakia", "liechtenstein"]
                    },
                    "eastern-europe": {
                        name: "东欧",
                        countries: ["russia", "ukraine", "belarus", "lithuania", "latvia", "estonia", "moldova"]
                    },
                    "southern-europe": {
                        name: "南欧",
                        countries: ["italy", "spain", "greece", "portugal", "romania", "croatia", "slovenia", "bulgaria", "serbia", "bosnia", "albania", "north-macedonia", "montenegro", "malta", "andorra", "san-marino", "vatican"]
                    },
                    "territories": {
                        name: "欧洲地区",
                        countries: ["faroe-islands", "gibraltar"]
                    }
                },
                countries: {
                    "netherlands": { name: "荷兰", content: `<p>荷兰是欧洲物流枢纽，拥有欧洲最大港口。</p><h2>主要港口</h2><ul><li><strong>鹿特丹港</strong>：欧洲最大港口，年吞吐量超1500万TEU</li><li><strong>阿姆斯特丹港</strong>：重要港口</li></ul>`, keywords: ["鹿特丹港", "荷兰港口"] },
                    "belgium": { name: "比利时", content: `<p>比利时是欧洲贸易枢纽。</p><h2>主要港口</h2><ul><li><strong>安特卫普港</strong>：欧洲第二大港</li><li><strong>泽布吕赫港</strong>：重要港口</li></ul>`, keywords: ["安特卫普港", "比利时港口"] },
                    "france": { name: "法国", content: `<p>法国是西欧大国，海岸线漫长。</p><h2>主要港口</h2><ul><li><strong>勒阿弗尔港</strong>：法国最大港口</li><li><strong>马赛港</strong>：地中海港口</li><li><strong>敦刻尔克港</strong>：北部港口</li></ul>`, keywords: ["勒阿弗尔港", "法国港口"] },
                    "uk": { name: "英国", content: `<p>英国是欧洲重要贸易国。</p><h2>主要港口</h2><ul><li><strong>费利克斯托港</strong>：英国最大集装箱港</li><li><strong>南安普顿港</strong>：主要港口</li><li><strong>伦敦门户港</strong>：新建深水港</li></ul>`, keywords: ["费利克斯托港", "英国港口"] },
                    "ireland": { name: "爱尔兰", content: `<p>爱尔兰是欧洲岛国。</p><h2>主要港口</h2><ul><li><strong>都柏林港</strong>：爱尔兰最大港口</li><li><strong>科克港</strong>：重要港口</li></ul>`, keywords: ["都柏林港", "爱尔兰港口"] },
                    "luxembourg": { name: "卢森堡", content: `<p>卢森堡是内陆国家，通过邻国港口贸易。</p><h2>贸易通道</h2><ul><li>主要通过鹿特丹港和安特卫普港</li></ul>`, keywords: ["卢森堡"] },
                    "monaco": { name: "摩纳哥", content: `<p>摩纳哥是地中海小国。</p><h2>港口</h2><ul><li><strong>摩纳哥港</strong>：游艇港口为主</li></ul>`, keywords: ["摩纳哥"] },
                    "sweden": { name: "瑞典", content: `<p>瑞典是北欧最大国家。</p><h2>主要港口</h2><ul><li><strong>哥德堡港</strong>：北欧最大港口</li><li><strong>斯德哥尔摩港</strong>：首都港口</li></ul>`, keywords: ["哥德堡港", "瑞典港口"] },
                    "norway": { name: "挪威", content: `<p>挪威海岸线漫长，港口众多。</p><h2>主要港口</h2><ul><li><strong>奥斯陆港</strong>：挪威最大港口</li><li><strong>卑尔根港</strong>：西部重要港口</li></ul>`, keywords: ["奥斯陆港", "挪威港口"] },
                    "denmark": { name: "丹麦", content: `<p>丹麦是航运大国。</p><h2>主要港口</h2><ul><li><strong>哥本哈根港</strong>：丹麦最大港口</li><li><strong>奥胡斯港</strong>：集装箱港口</li></ul>`, keywords: ["哥本哈根港", "丹麦港口"] },
                    "finland": { name: "芬兰", content: `<p>芬兰是北欧国家。</p><h2>主要港口</h2><ul><li><strong>赫尔辛基港</strong>：芬兰最大港口</li></ul>`, keywords: ["赫尔辛基港", "芬兰港口"] },
                    "iceland": { name: "冰岛", content: `<p>冰岛是北大西洋岛国。</p><h2>主要港口</h2><ul><li><strong>雷克雅未克港</strong>：冰岛主要港口</li></ul>`, keywords: ["雷克雅未克港", "冰岛港口"] },
                    "germany": { name: "德国", content: `<p>德国是欧洲最大经济体。</p><h2>主要港口</h2><ul><li><strong>汉堡港</strong>：德国最大港口，欧洲第三大港</li><li><strong>不来梅港</strong>：重要港口</li><li><strong>威廉港</strong>：深水港</li></ul>`, keywords: ["汉堡港", "德国港口"] },
                    "poland": { name: "波兰", content: `<p>波兰是东欧重要国家。</p><h2>主要港口</h2><ul><li><strong>格但斯克港</strong>：波兰最大港口</li><li><strong>格丁尼亚港</strong>：重要港口</li></ul>`, keywords: ["格但斯克港", "波兰港口"] },
                    "czech": { name: "捷克", content: `<p>捷克是内陆国家。</p><h2>贸易通道</h2><ul><li>主要通过汉堡港和不来梅港</li></ul>`, keywords: ["捷克"] },
                    "austria": { name: "奥地利", content: `<p>奥地利是内陆国家。</p><h2>贸易通道</h2><ul><li>主要通过汉堡港和的里雅斯特港</li></ul>`, keywords: ["奥地利"] },
                    "switzerland": { name: "瑞士", content: `<p>瑞士是内陆国家。</p><h2>贸易通道</h2><ul><li>主要通过鹿特丹港和热那亚港</li></ul>`, keywords: ["瑞士"] },
                    "hungary": { name: "匈牙利", content: `<p>匈牙利是内陆国家。</p><h2>贸易通道</h2><ul><li>多瑙河内河运输</li><li>通过里耶卡港和科佩尔港</li></ul>`, keywords: ["匈牙利"] },
                    "slovakia": { name: "斯洛伐克", content: `<p>斯洛伐克是内陆国家。</p><h2>贸易通道</h2><ul><li>主要通过汉堡港</li></ul>`, keywords: ["斯洛伐克"] },
                    "italy": { name: "意大利", content: `<p>意大利是地中海航运大国。</p><h2>主要港口</h2><ul><li><strong>热那亚港</strong>：意大利最大港口</li><li><strong>拉斯佩齐亚港</strong>：集装箱港口</li><li><strong>的里雅斯特港</strong>：亚得里亚海港口</li><li><strong>那不勒斯港</strong>：南部港口</li></ul>`, keywords: ["热那亚港", "意大利港口"] },
                    "spain": { name: "西班牙", content: `<p>西班牙海岸线漫长。</p><h2>主要港口</h2><ul><li><strong>瓦伦西亚港</strong>：地中海最大港口</li><li><strong>巴塞罗那港</strong>：重要港口</li><li><strong>阿尔赫西拉斯港</strong>：直布罗陀海峡港口</li><li><strong>毕尔巴鄂港</strong>：北部港口</li></ul>`, keywords: ["瓦伦西亚港", "西班牙港口"] },
                    "portugal": { name: "葡萄牙", content: `<p>葡萄牙是大西洋沿岸国家。</p><h2>主要港口</h2><ul><li><strong>锡尼什港</strong>：葡萄牙最大港口</li><li><strong>里斯本港</strong>：首都港口</li></ul>`, keywords: ["锡尼什港", "葡萄牙港口"] },
                    "greece": { name: "希腊", content: `<p>希腊是航运大国，船东数量全球第一。</p><h2>主要港口</h2><ul><li><strong>比雷埃夫斯港</strong>：地中海枢纽，中远海运经营</li><li><strong>塞萨洛尼基港</strong>：北部港口</li></ul>`, keywords: ["比雷埃夫斯港", "希腊港口"] },
                    "malta": { name: "马耳他", content: `<p>马耳他是地中海岛国。</p><h2>主要港口</h2><ul><li><strong>马尔萨什洛克港</strong>：地中海转运港</li></ul>`, keywords: ["马耳他港口"] },
                    "cyprus": { name: "塞浦路斯", content: `<p>塞浦路斯是地中海岛国。</p><h2>主要港口</h2><ul><li><strong>利马索尔港</strong>：塞浦路斯最大港口</li></ul>`, keywords: ["利马索尔港", "塞浦路斯港口"] },
                    "slovenia": { name: "斯洛文尼亚", content: `<p>斯洛文尼亚是欧洲小国。</p><h2>主要港口</h2><ul><li><strong>科佩尔港</strong>：亚得里亚海港口</li></ul>`, keywords: ["科佩尔港", "斯洛文尼亚港口"] },
                    "croatia": { name: "克罗地亚", content: `<p>克罗地亚拥有漫长的亚得里亚海海岸线。</p><h2>主要港口</h2><ul><li><strong>里耶卡港</strong>：克罗地亚最大港口</li></ul>`, keywords: ["里耶卡港", "克罗地亚港口"] },
                    "russia": { name: "俄罗斯", content: `<p>俄罗斯横跨欧亚大陆，港口分布广泛。</p><h2>主要港口</h2><ul><li><strong>圣彼得堡港</strong>：波罗的海最大港口</li><li><strong>新罗西斯克港</strong>：黑海最大港口</li><li><strong>符拉迪沃斯托克港</strong>：远东最大港口</li><li><strong>东方港</strong>：远东集装箱港</li></ul>`, keywords: ["圣彼得堡港", "俄罗斯港口"] },
                    "ukraine": { name: "乌克兰", content: `<p>乌克兰拥有黑海海岸线。</p><h2>主要港口</h2><ul><li><strong>敖德萨港</strong>：乌克兰最大港口</li></ul>`, keywords: ["敖德萨港", "乌克兰港口"] },
                    "romania": { name: "罗马尼亚", content: `<p>罗马尼亚拥有黑海海岸线。</p><h2>主要港口</h2><ul><li><strong>康斯坦察港</strong>：罗马尼亚最大港口，黑海重要港口</li></ul>`, keywords: ["康斯坦察港", "罗马尼亚港口"] },
                    "bulgaria": { name: "保加利亚", content: `<p>保加利亚拥有黑海海岸线。</p><h2>主要港口</h2><ul><li><strong>瓦尔纳港</strong>：保加利亚最大港口</li></ul>`, keywords: ["瓦尔纳港", "保加利亚港口"] },
                    "belarus": { name: "白俄罗斯", content: `<p>白俄罗斯是内陆国家。</p><h2>贸易通道</h2><ul><li>中欧班列重要途经国</li><li>通过立陶宛克莱佩达港</li></ul>`, keywords: ["白俄罗斯"] },
                    "moldova": { name: "摩尔多瓦", content: `<p>摩尔多瓦是内陆国家。</p><h2>贸易通道</h2><ul><li>通过罗马尼亚康斯坦察港</li></ul>`, keywords: ["摩尔多瓦"] },
                    "lithuania": { name: "立陶宛", content: `<p>立陶宛是波罗的海国家。</p><h2>主要港口</h2><ul><li><strong>克莱佩达港</strong>：波罗的海重要港口</li></ul>`, keywords: ["克莱佩达港", "立陶宛港口"] },
                    "latvia": { name: "拉脱维亚", content: `<p>拉脱维亚是波罗的海国家。</p><h2>主要港口</h2><ul><li><strong>里加港</strong>：拉脱维亚最大港口</li></ul>`, keywords: ["里加港", "拉脱维亚港口"] },
                    "estonia": { name: "爱沙尼亚", content: `<p>爱沙尼亚是波罗的海国家。</p><h2>主要港口</h2><ul><li><strong>塔林港</strong>：爱沙尼亚最大港口</li></ul>`, keywords: ["塔林港", "爱沙尼亚港口"] },
                    "serbia": { name: "塞尔维亚", content: `<p>塞尔维亚是内陆国家。</p><h2>贸易通道</h2><ul><li>多瑙河内河运输</li><li>通过希腊比雷埃夫斯港</li></ul>`, keywords: ["塞尔维亚"] },
                    "bosnia": { name: "波黑", content: `<p>波斯尼亚和黑塞哥维那。</p><h2>港口</h2><ul><li><strong>普洛切港</strong>（借用克罗地亚）</li></ul>`, keywords: ["波黑"] },
                    "montenegro": { name: "黑山", content: `<p>黑山是亚得里亚海沿岸国家。</p><h2>主要港口</h2><ul><li><strong>巴尔港</strong>：黑山主要港口</li></ul>`, keywords: ["巴尔港", "黑山港口"] },
                    "albania": { name: "阿尔巴尼亚", content: `<p>阿尔巴尼亚是亚得里亚海沿岸国家。</p><h2>主要港口</h2><ul><li><strong>都拉斯港</strong>：阿尔巴尼亚最大港口</li></ul>`, keywords: ["都拉斯港", "阿尔巴尼亚港口"] },
                    "north-macedonia": { name: "北马其顿", content: `<p>北马其顿是内陆国家。</p><h2>贸易通道</h2><ul><li>通过希腊塞萨洛尼基港</li></ul>`, keywords: ["北马其顿"] },
                    "andorra": { name: "安道尔", content: `<p>安道尔是比利牛斯山脉小国。</p><h2>贸易通道</h2><ul><li>通过西班牙和法国港口</li></ul>`, keywords: ["安道尔"] },
                    "liechtenstein": { name: "列支敦士登", content: `<p>列支敦士登是欧洲微型国家。</p><h2>贸易通道</h2><ul><li>通过瑞士和奥地利</li></ul>`, keywords: ["列支敦士登"] },
                    "san-marino": { name: "圣马力诺", content: `<p>圣马力诺是意大利境内的小国。</p><h2>贸易通道</h2><ul><li>通过意大利港口</li></ul>`, keywords: ["圣马力诺"] },
                    "vatican": { name: "梵蒂冈", content: `<p>梵蒂冈是世界上最小的国家。</p><h2>贸易通道</h2><ul><li>通过意大利港口</li></ul>`, keywords: ["梵蒂冈"] },
                    "kosovo": { name: "科索沃", content: `<p>科索沃是巴尔干内陆地区。</p><h2>贸易通道</h2><ul><li>通过希腊塞萨洛尼基港</li><li>通过阿尔巴尼亚都拉斯港</li></ul>`, keywords: ["科索沃"] },
                    "faroe-islands": { name: "法罗群岛", content: `<p>法罗群岛是丹麦的海外自治领地，位于北大西洋。</p><h2>主要港口</h2><ul><li><strong>托尔斯港</strong>：法罗群岛首府港口</li><li><strong>克拉克斯维克港</strong>：渔业港口</li></ul>`, keywords: ["托尔斯港", "法罗群岛港口"] },
                    "gibraltar": { name: "直布罗陀", content: `<p>直布罗陀是英国海外领土，位于直布罗陀海峡战略要地。</p><h2>主要港口</h2><ul><li><strong>直布罗陀港</strong>：地中海重要加油港和转运港</li></ul>`, keywords: ["直布罗陀港", "海峡"] }
                }
            },
            "north-america": {
                name: "北美洲",
                intro: "北美洲共有23个国家和17个地区，拥有世界最大的消费市场，美国和加拿大是全球重要的贸易伙伴。",
                regions: {
                    "north": {
                        name: "北美",
                        countries: ["usa", "canada"]
                    },
                    "central": {
                        name: "中美洲",
                        countries: ["mexico", "guatemala", "panama", "costa-rica", "el-salvador", "honduras", "nicaragua", "belize"]
                    },
                    "caribbean": {
                        name: "加勒比地区",
                        countries: ["dominican", "cuba", "trinidad", "jamaica", "bahamas", "barbados", "haiti", "saint-lucia", "antigua", "grenada", "saint-kitts", "saint-vincent", "dominica"]
                    },
                    "territories": {
                        name: "北美洲地区",
                        countries: ["puerto-rico", "curacao", "aruba", "cayman-islands", "bermuda", "greenland", "guadeloupe", "martinique", "us-virgin-islands", "british-virgin-islands", "turks-caicos", "sint-maarten", "saint-martin", "saint-barthelemy", "anguilla", "montserrat", "saint-pierre"]
                    }
                },
                countries: {
                    "usa": { name: "美国", content: `<p>美国是全球最大进口国，港口设施世界一流。</p><h2>西海岸港口</h2><ul><li><strong>洛杉矶港</strong>：美国最大港口</li><li><strong>长滩港</strong>：与洛杉矶合称美西双港</li><li><strong>奥克兰港</strong>：北加州门户</li><li><strong>西雅图港</strong>：太平洋西北门户</li></ul><h2>东海岸港口</h2><ul><li><strong>纽约/新泽西港</strong>：东海岸最大港</li><li><strong>萨凡纳港</strong>：增长最快港口</li><li><strong>查尔斯顿港</strong>：南卡重要港口</li><li><strong>诺福克港</strong>：弗吉尼亚港口</li></ul><h2>墨西哥湾</h2><ul><li><strong>休斯顿港</strong>：德州最大港</li><li><strong>新奥尔良港</strong>：密西西比河港口</li></ul>`, keywords: ["洛杉矶港", "纽约港", "美国港口"] },
                    "canada": { name: "加拿大", content: `<p>加拿大是北美重要贸易国。</p><h2>主要港口</h2><ul><li><strong>温哥华港</strong>：加拿大最大港口，太平洋门户</li><li><strong>蒙特利尔港</strong>：圣劳伦斯河港口</li><li><strong>哈利法克斯港</strong>：大西洋门户</li><li><strong>多伦多港</strong>：五大湖港口</li></ul>`, keywords: ["温哥华港", "加拿大港口"] },
                    "mexico": { name: "墨西哥", content: `<p>墨西哥是拉美重要贸易国。</p><h2>主要港口</h2><ul><li><strong>曼萨尼约港</strong>：太平洋最大港</li><li><strong>拉萨罗卡德纳斯港</strong>：重要港口</li><li><strong>韦拉克鲁斯港</strong>：墨西哥湾港口</li></ul>`, keywords: ["曼萨尼约港", "墨西哥港口"] },
                    "guatemala": { name: "危地马拉", content: `<p>危地马拉是中美洲国家。</p><h2>主要港口</h2><ul><li><strong>圣托马斯港</strong>：主要港口</li></ul>`, keywords: ["危地马拉港口"] },
                    "honduras": { name: "洪都拉斯", content: `<p>洪都拉斯是中美洲国家。</p><h2>主要港口</h2><ul><li><strong>科尔特斯港</strong>：主要港口</li></ul>`, keywords: ["洪都拉斯港口"] },
                    "el-salvador": { name: "萨尔瓦多", content: `<p>萨尔瓦多是中美洲最小国家。</p><h2>主要港口</h2><ul><li><strong>阿卡胡特拉港</strong>：主要港口</li></ul>`, keywords: ["萨尔瓦多港口"] },
                    "nicaragua": { name: "尼加拉瓜", content: `<p>尼加拉瓜是中美洲国家。</p><h2>主要港口</h2><ul><li><strong>科林托港</strong>：主要港口</li></ul>`, keywords: ["尼加拉瓜港口"] },
                    "costa-rica": { name: "哥斯达黎加", content: `<p>哥斯达黎加是中美洲国家。</p><h2>主要港口</h2><ul><li><strong>利蒙港</strong>：加勒比海港口</li><li><strong>卡尔德拉港</strong>：太平洋港口</li></ul>`, keywords: ["哥斯达黎加港口"] },
                    "panama": { name: "巴拿马", content: `<p>巴拿马运河连接太平洋和大西洋，战略位置极其重要。</p><h2>主要港口</h2><ul><li><strong>科隆港</strong>：大西洋侧最大港口</li><li><strong>巴尔博亚港</strong>：太平洋侧港口</li></ul>`, keywords: ["巴拿马运河", "科隆港"] },
                    "belize": { name: "伯利兹", content: `<p>伯利兹是中美洲国家。</p><h2>主要港口</h2><ul><li><strong>伯利兹城港</strong>：主要港口</li></ul>`, keywords: ["伯利兹港口"] },
                    "cuba": { name: "古巴", content: `<p>古巴是加勒比最大岛国。</p><h2>主要港口</h2><ul><li><strong>哈瓦那港</strong>：古巴最大港口</li><li><strong>马里埃尔港</strong>：新建深水港</li></ul>`, keywords: ["哈瓦那港", "古巴港口"] },
                    "dominican": { name: "多米尼加", content: `<p>多米尼加是加勒比国家。</p><h2>主要港口</h2><ul><li><strong>考塞多港</strong>：多米尼加最大港口</li></ul>`, keywords: ["多米尼加港口"] },
                    "jamaica": { name: "牙买加", content: `<p>牙买加是加勒比岛国。</p><h2>主要港口</h2><ul><li><strong>金斯敦港</strong>：加勒比重要转运港</li></ul>`, keywords: ["金斯敦港", "牙买加港口"] },
                    "haiti": { name: "海地", content: `<p>海地是加勒比国家。</p><h2>主要港口</h2><ul><li><strong>太子港</strong>：海地主要港口</li></ul>`, keywords: ["海地港口"] },
                    "puerto-rico": { name: "波多黎各", content: `<p>波多黎各是美国自治领土。</p><h2>主要港口</h2><ul><li><strong>圣胡安港</strong>：加勒比重要港口</li></ul>`, keywords: ["圣胡安港", "波多黎各港口"] },
                    "bahamas": { name: "巴哈马", content: `<p>巴哈马是加勒比岛国。</p><h2>主要港口</h2><ul><li><strong>弗里波特港</strong>：转运港</li></ul>`, keywords: ["巴哈马港口"] },
                    "trinidad": { name: "特立尼达和多巴哥", content: `<p>特立尼达和多巴哥是加勒比岛国。</p><h2>主要港口</h2><ul><li><strong>西班牙港</strong>：主要港口</li></ul>`, keywords: ["特立尼达港口"] },
                    "barbados": { name: "巴巴多斯", content: `<p>巴巴多斯是加勒比岛国。</p><h2>主要港口</h2><ul><li><strong>布里奇敦港</strong>：巴巴多斯主要港口</li></ul>`, keywords: ["巴巴多斯港口"] },
                    "saint-lucia": { name: "圣卢西亚", content: `<p>圣卢西亚是加勒比岛国。</p><h2>主要港口</h2><ul><li><strong>卡斯特里港</strong>：圣卢西亚主要港口</li></ul>`, keywords: ["圣卢西亚港口"] },
                    "grenada": { name: "格林纳达", content: `<p>格林纳达是加勒比岛国。</p><h2>主要港口</h2><ul><li><strong>圣乔治港</strong>：格林纳达主要港口</li></ul>`, keywords: ["格林纳达港口"] },
                    "antigua": { name: "安提瓜和巴布达", content: `<p>安提瓜和巴布达是加勒比岛国。</p><h2>主要港口</h2><ul><li><strong>圣约翰斯港</strong>：主要港口</li></ul>`, keywords: ["安提瓜港口"] },
                    "saint-vincent": { name: "圣文森特和格林纳丁斯", content: `<p>圣文森特是加勒比岛国。</p><h2>主要港口</h2><ul><li><strong>金斯敦港</strong>：主要港口</li></ul>`, keywords: ["圣文森特港口"] },
                    "dominica": { name: "多米尼克", content: `<p>多米尼克是加勒比岛国。</p><h2>主要港口</h2><ul><li><strong>罗索港</strong>：主要港口</li></ul>`, keywords: ["多米尼克港口"] },
                    "saint-kitts": { name: "圣基茨和尼维斯", content: `<p>圣基茨是加勒比岛国。</p><h2>主要港口</h2><ul><li><strong>巴斯特尔港</strong>：主要港口</li></ul>`, keywords: ["圣基茨港口"] },
                    "aruba": { name: "阿鲁巴", content: `<p>阿鲁巴是荷兰王国组成国。</p><h2>主要港口</h2><ul><li><strong>奥拉涅斯塔德港</strong>：主要港口</li></ul>`, keywords: ["阿鲁巴港口"] },
                    "curacao": { name: "库拉索", content: `<p>库拉索是荷兰王国组成国。</p><h2>主要港口</h2><ul><li><strong>威廉斯塔德港</strong>：加勒比重要转运港</li></ul>`, keywords: ["库拉索港口"] },
                    "greenland": { name: "格陵兰", content: `<p>格陵兰是丹麦的自治领土，世界最大岛屿。</p><h2>主要港口</h2><ul><li><strong>努克港</strong>：格陵兰首府港口</li><li><strong>伊卢利萨特港</strong>：重要渔业港口</li></ul>`, keywords: ["努克港", "格陵兰港口"] },
                    "saint-pierre": { name: "圣皮埃尔和密克隆", content: `<p>圣皮埃尔和密克隆是法国海外领地，位于加拿大东部。</p><h2>主要港口</h2><ul><li><strong>圣皮埃尔港</strong>：主要港口</li></ul>`, keywords: ["圣皮埃尔港口"] },
                    "bermuda": { name: "百慕大", content: `<p>百慕大是英国海外领土，位于北大西洋。</p><h2>主要港口</h2><ul><li><strong>汉密尔顿港</strong>：百慕大主要港口</li></ul>`, keywords: ["汉密尔顿港", "百慕大港口"] },
                    "british-virgin-islands": { name: "英属维尔京群岛", content: `<p>英属维尔京群岛是英国海外领土。</p><h2>主要港口</h2><ul><li><strong>罗德城港</strong>：主要港口</li></ul>`, keywords: ["英属维尔京群岛港口"] },
                    "us-virgin-islands": { name: "美属维尔京群岛", content: `<p>美属维尔京群岛是美国非建制属地。</p><h2>主要港口</h2><ul><li><strong>夏洛特阿马利亚港</strong>：主要港口</li></ul>`, keywords: ["美属维尔京群岛港口"] },
                    "anguilla": { name: "安圭拉", content: `<p>安圭拉是英国海外领土，加勒比海岛屿。</p><h2>主要港口</h2><ul><li><strong>布洛因港</strong>：主要港口</li></ul>`, keywords: ["安圭拉港口"] },
                    "montserrat": { name: "蒙特塞拉特", content: `<p>蒙特塞拉特是英国海外领土。</p><h2>主要港口</h2><ul><li><strong>小海湾港</strong>：主要港口</li></ul>`, keywords: ["蒙特塞拉特港口"] },
                    "guadeloupe": { name: "瓜德罗普", content: `<p>瓜德罗普是法国海外省，加勒比海岛屿。</p><h2>主要港口</h2><ul><li><strong>皮特尔角港</strong>：瓜德罗普主要港口</li></ul>`, keywords: ["瓜德罗普港口"] },
                    "martinique": { name: "马提尼克", content: `<p>马提尼克是法国海外省。</p><h2>主要港口</h2><ul><li><strong>法兰西堡港</strong>：马提尼克主要港口</li></ul>`, keywords: ["马提尼克港口"] },
                    "sint-maarten": { name: "荷属圣马丁", content: `<p>荷属圣马丁是荷兰王国的组成国。</p><h2>主要港口</h2><ul><li><strong>菲利普斯堡港</strong>：主要港口</li></ul>`, keywords: ["荷属圣马丁港口"] },
                    "saint-martin": { name: "法属圣马丁", content: `<p>法属圣马丁是法国海外领地。</p><h2>主要港口</h2><ul><li><strong>马里戈港</strong>：主要港口</li></ul>`, keywords: ["法属圣马丁港口"] },
                    "saint-barthelemy": { name: "圣巴泰勒米岛", content: `<p>圣巴泰勒米岛是法国海外领地。</p><h2>主要港口</h2><ul><li><strong>古斯塔维亚港</strong>：主要港口</li></ul>`, keywords: ["圣巴泰勒米港口"] },
                    "turks-caicos": { name: "特克斯和凯科斯群岛", content: `<p>特克斯和凯科斯群岛是英国海外领土。</p><h2>主要港口</h2><ul><li><strong>普罗维登西亚莱斯港</strong>：主要港口</li></ul>`, keywords: ["特克斯和凯科斯港口"] },
                    "cayman-islands": { name: "开曼群岛", content: `<p>开曼群岛是英国海外领土，知名离岸金融中心。</p><h2>主要港口</h2><ul><li><strong>乔治敦港</strong>：开曼群岛主要港口</li></ul>`, keywords: ["开曼群岛港口"] }
                }
            },
            "south-america": {
                name: "南美洲",
                intro: "南美洲共有12个国家和2个地区，资源丰富，是重要的原材料和农产品出口地区。",
                regions: {
                    "north": {
                        name: "北部",
                        countries: ["colombia", "venezuela", "guyana", "suriname"]
                    },
                    "west": {
                        name: "西部",
                        countries: ["peru", "ecuador", "bolivia"]
                    },
                    "east": {
                        name: "东部",
                        countries: ["brazil"]
                    },
                    "south": {
                        name: "南部",
                        countries: ["argentina", "chile", "uruguay", "paraguay"]
                    },
                    "territories": {
                        name: "南美洲地区",
                        countries: ["french-guiana", "falkland-islands"]
                    }
                },
                countries: {
                    "brazil": { name: "巴西", content: `<p>巴西是南美最大经济体。</p><h2>主要港口</h2><ul><li><strong>桑托斯港</strong>：南美最大港口</li><li><strong>巴拉那瓜港</strong>：农产品出口港</li><li><strong>里约热内卢港</strong>：重要港口</li><li><strong>伊塔瓜伊港</strong>：深水港</li></ul>`, keywords: ["桑托斯港", "巴西港口"] },
                    "argentina": { name: "阿根廷", content: `<p>阿根廷是南美重要国家。</p><h2>主要港口</h2><ul><li><strong>布宜诺斯艾利斯港</strong>：阿根廷最大港口</li><li><strong>罗萨里奥港</strong>：巴拉那河港口</li></ul>`, keywords: ["布宜诺斯艾利斯港", "阿根廷港口"] },
                    "uruguay": { name: "乌拉圭", content: `<p>乌拉圭是南美小国。</p><h2>主要港口</h2><ul><li><strong>蒙得维的亚港</strong>：乌拉圭最大港口</li></ul>`, keywords: ["蒙得维的亚港", "乌拉圭港口"] },
                    "paraguay": { name: "巴拉圭", content: `<p>巴拉圭是内陆国家。</p><h2>贸易通道</h2><ul><li>通过巴拉那河和阿根廷港口</li></ul>`, keywords: ["巴拉圭"] },
                    "chile": { name: "智利", content: `<p>智利拥有漫长的太平洋海岸线。</p><h2>主要港口</h2><ul><li><strong>瓦尔帕莱索港</strong>：智利最大港口</li><li><strong>圣安东尼奥港</strong>：集装箱港</li></ul>`, keywords: ["瓦尔帕莱索港", "智利港口"] },
                    "peru": { name: "秘鲁", content: `<p>秘鲁是太平洋沿岸国家。</p><h2>主要港口</h2><ul><li><strong>卡亚俄港</strong>：秘鲁最大港口</li></ul>`, keywords: ["卡亚俄港", "秘鲁港口"] },
                    "ecuador": { name: "厄瓜多尔", content: `<p>厄瓜多尔是太平洋沿岸国家。</p><h2>主要港口</h2><ul><li><strong>瓜亚基尔港</strong>：厄瓜多尔最大港口</li></ul>`, keywords: ["瓜亚基尔港", "厄瓜多尔港口"] },
                    "colombia": { name: "哥伦比亚", content: `<p>哥伦比亚同时拥有太平洋和大西洋海岸线。</p><h2>主要港口</h2><ul><li><strong>卡塔赫纳港</strong>：加勒比海最大港口</li><li><strong>布埃纳文图拉港</strong>：太平洋港口</li></ul>`, keywords: ["卡塔赫纳港", "哥伦比亚港口"] },
                    "venezuela": { name: "委内瑞拉", content: `<p>委内瑞拉是石油出口国。</p><h2>主要港口</h2><ul><li><strong>拉瓜伊拉港</strong>：委内瑞拉主要港口</li><li><strong>马拉开波港</strong>：石油出口港</li></ul>`, keywords: ["委内瑞拉港口"] },
                    "guyana": { name: "圭亚那", content: `<p>圭亚那是南美北部国家。</p><h2>主要港口</h2><ul><li><strong>乔治敦港</strong>：圭亚那主要港口</li></ul>`, keywords: ["圭亚那港口"] },
                    "suriname": { name: "苏里南", content: `<p>苏里南是南美小国。</p><h2>主要港口</h2><ul><li><strong>帕拉马里博港</strong>：苏里南主要港口</li></ul>`, keywords: ["苏里南港口"] },
                    "bolivia": { name: "玻利维亚", content: `<p>玻利维亚是内陆国家。</p><h2>贸易通道</h2><ul><li>通过智利阿里卡港和秘鲁伊洛港</li></ul>`, keywords: ["玻利维亚"] },
                    "french-guiana": { name: "法属圭亚那", content: `<p>法属圭亚那是法国海外省，位于南美洲北部。</p><h2>主要港口</h2><ul><li><strong>卡宴港</strong>：法属圭亚那主要港口</li><li><strong>库鲁港</strong>：欧洲航天发射中心所在地</li></ul>`, keywords: ["法属圭亚那港口", "卡宴港"] },
                    "falkland-islands": { name: "马尔维纳斯群岛", content: `<p>马尔维纳斯群岛（福克兰群岛）由阿根廷和英国争议，目前由英国实际控制。</p><h2>主要港口</h2><ul><li><strong>斯坦利港</strong>：群岛首府港口</li></ul>`, keywords: ["马尔维纳斯群岛", "福克兰群岛", "斯坦利港"] }
                }
            },
            "africa": {
                name: "非洲",
                intro: "非洲共有54个国家和7个地区，是国家最多的大洲，矿产和资源丰富，贸易增长潜力巨大。",
                regions: {
                    "north-africa": {
                        name: "北非",
                        countries: ["egypt", "algeria", "morocco", "libya", "tunisia"]
                    },
                    "west-africa": {
                        name: "西非",
                        countries: ["nigeria", "ghana", "ivory-coast", "senegal", "cameroon", "burkina-faso", "mali", "benin", "guinea", "niger", "togo", "mauritania", "sierra-leone", "liberia", "cape-verde", "gambia", "guinea-bissau"]
                    },
                    "central-africa": {
                        name: "中非",
                        countries: ["congo-drc", "cameroon", "gabon", "congo", "equatorial-guinea", "chad", "central-african", "sao-tome"]
                    },
                    "east-africa": {
                        name: "东非",
                        countries: ["ethiopia", "kenya", "tanzania", "uganda", "sudan", "rwanda", "south-sudan", "mauritius", "seychelles", "djibouti", "somalia", "eritrea", "burundi"]
                    },
                    "southern-africa": {
                        name: "南部非洲",
                        countries: ["south-africa", "angola", "mozambique", "zambia", "zimbabwe", "botswana", "namibia", "madagascar", "mauritius", "malawi", "eswatini", "lesotho", "comoros"]
                    },
                    "territories": {
                        name: "非洲地区",
                        countries: ["canary-islands", "reunion", "mayotte", "azores", "madeira", "western-sahara", "saint-helena"]
                    }
                },
                countries: {
                    "egypt": { name: "埃及", content: `<p>埃及拥有苏伊士运河，是亚欧非航运枢纽。</p><h2>主要港口</h2><ul><li><strong>塞得港</strong>：苏伊士运河北端，全球重要转运港</li><li><strong>亚历山大港</strong>：埃及最大港口</li><li><strong>达米埃塔港</strong>：尼罗河三角洲港口</li></ul>`, keywords: ["塞得港", "苏伊士运河", "埃及港口"] },
                    "morocco": { name: "摩洛哥", content: `<p>摩洛哥位于直布罗陀海峡南侧。</p><h2>主要港口</h2><ul><li><strong>丹吉尔地中海港</strong>：非洲最大港口，重要转运中心</li><li><strong>卡萨布兰卡港</strong>：传统大港</li></ul>`, keywords: ["丹吉尔港", "摩洛哥港口"] },
                    "algeria": { name: "阿尔及利亚", content: `<p>阿尔及利亚是北非大国。</p><h2>主要港口</h2><ul><li><strong>阿尔及尔港</strong>：阿尔及利亚最大港口</li></ul>`, keywords: ["阿尔及尔港", "阿尔及利亚港口"] },
                    "tunisia": { name: "突尼斯", content: `<p>突尼斯是北非国家。</p><h2>主要港口</h2><ul><li><strong>拉迪斯港</strong>：突尼斯最大集装箱港</li></ul>`, keywords: ["突尼斯港口"] },
                    "libya": { name: "利比亚", content: `<p>利比亚是北非石油出口国。</p><h2>主要港口</h2><ul><li><strong>的黎波里港</strong>：利比亚主要港口</li></ul>`, keywords: ["利比亚港口"] },
                    "nigeria": { name: "尼日利亚", content: `<p>尼日利亚是非洲人口最多、经济最大的国家。</p><h2>主要港口</h2><ul><li><strong>阿帕帕港</strong>：拉各斯主要港口</li><li><strong>廷坎港</strong>：拉各斯第二大港</li><li><strong>哈科特港</strong>：石油出口港</li></ul>`, keywords: ["拉各斯港", "尼日利亚港口"] },
                    "ghana": { name: "加纳", content: `<p>加纳是西非重要国家。</p><h2>主要港口</h2><ul><li><strong>特马港</strong>：加纳最大港口</li></ul>`, keywords: ["特马港", "加纳港口"] },
                    "senegal": { name: "塞内加尔", content: `<p>塞内加尔是西非国家。</p><h2>主要港口</h2><ul><li><strong>达喀尔港</strong>：西非重要港口</li></ul>`, keywords: ["达喀尔港", "塞内加尔港口"] },
                    "ivory-coast": { name: "科特迪瓦", content: `<p>科特迪瓦是西非经济大国。</p><h2>主要港口</h2><ul><li><strong>阿比让港</strong>：西非最大港口之一</li></ul>`, keywords: ["阿比让港", "科特迪瓦港口"] },
                    "cameroon": { name: "喀麦隆", content: `<p>喀麦隆是中西非国家。</p><h2>主要港口</h2><ul><li><strong>杜阿拉港</strong>：喀麦隆最大港口</li></ul>`, keywords: ["杜阿拉港", "喀麦隆港口"] },
                    "togo": { name: "多哥", content: `<p>多哥是西非小国。</p><h2>主要港口</h2><ul><li><strong>洛美港</strong>：多哥主要港口，区域转运中心</li></ul>`, keywords: ["洛美港", "多哥港口"] },
                    "benin": { name: "贝宁", content: `<p>贝宁是西非国家。</p><h2>主要港口</h2><ul><li><strong>科托努港</strong>：贝宁主要港口</li></ul>`, keywords: ["科托努港", "贝宁港口"] },
                    "kenya": { name: "肯尼亚", content: `<p>肯尼亚是东非经济中心。</p><h2>主要港口</h2><ul><li><strong>蒙巴萨港</strong>：东非最大港口</li></ul>`, keywords: ["蒙巴萨港", "肯尼亚港口"] },
                    "tanzania": { name: "坦桑尼亚", content: `<p>坦桑尼亚是东非国家。</p><h2>主要港口</h2><ul><li><strong>达累斯萨拉姆港</strong>：坦桑尼亚最大港口</li></ul>`, keywords: ["达累斯萨拉姆港", "坦桑尼亚港口"] },
                    "ethiopia": { name: "埃塞俄比亚", content: `<p>埃塞俄比亚是非洲人口第二大国，内陆国家。</p><h2>贸易通道</h2><ul><li>主要通过吉布提港</li></ul>`, keywords: ["埃塞俄比亚"] },
                    "uganda": { name: "乌干达", content: `<p>乌干达是东非内陆国家。</p><h2>贸易通道</h2><ul><li>通过肯尼亚蒙巴萨港</li></ul>`, keywords: ["乌干达"] },
                    "rwanda": { name: "卢旺达", content: `<p>卢旺达是东非内陆国家。</p><h2>贸易通道</h2><ul><li>通过坦桑尼亚达累斯萨拉姆港</li></ul>`, keywords: ["卢旺达"] },
                    "djibouti": { name: "吉布提", content: `<p>吉布提位于红海入口，战略位置重要。</p><h2>主要港口</h2><ul><li><strong>吉布提港</strong>：东非重要港口，埃塞俄比亚主要出海口</li><li><strong>多拉莱港</strong>：新建多功能港</li></ul>`, keywords: ["吉布提港"] },
                    "mauritius": { name: "毛里求斯", content: `<p>毛里求斯是印度洋岛国。</p><h2>主要港口</h2><ul><li><strong>路易港</strong>：毛里求斯主要港口</li></ul>`, keywords: ["路易港", "毛里求斯港口"] },
                    "madagascar": { name: "马达加斯加", content: `<p>马达加斯加是非洲岛国。</p><h2>主要港口</h2><ul><li><strong>塔马塔夫港</strong>：马达加斯加最大港口</li></ul>`, keywords: ["马达加斯加港口"] },
                    "south-africa": { name: "南非", content: `<p>南非是非洲经济最发达的国家。</p><h2>主要港口</h2><ul><li><strong>德班港</strong>：非洲最繁忙的集装箱港</li><li><strong>开普敦港</strong>：好望角重要港口</li><li><strong>伊丽莎白港</strong>：汽车出口港</li></ul>`, keywords: ["德班港", "南非港口"] },
                    "mozambique": { name: "莫桑比克", content: `<p>莫桑比克拥有漫长的印度洋海岸线。</p><h2>主要港口</h2><ul><li><strong>马普托港</strong>：莫桑比克最大港口</li><li><strong>贝拉港</strong>：中部港口</li></ul>`, keywords: ["马普托港", "莫桑比克港口"] },
                    "angola": { name: "安哥拉", content: `<p>安哥拉是非洲石油大国。</p><h2>主要港口</h2><ul><li><strong>罗安达港</strong>：安哥拉最大港口</li></ul>`, keywords: ["罗安达港", "安哥拉港口"] },
                    "namibia": { name: "纳米比亚", content: `<p>纳米比亚是南部非洲国家。</p><h2>主要港口</h2><ul><li><strong>沃尔维斯港</strong>：纳米比亚最大港口</li></ul>`, keywords: ["沃尔维斯港", "纳米比亚港口"] },
                    "zimbabwe": { name: "津巴布韦", content: `<p>津巴布韦是内陆国家。</p><h2>贸易通道</h2><ul><li>通过南非和莫桑比克港口</li></ul>`, keywords: ["津巴布韦"] },
                    "zambia": { name: "赞比亚", content: `<p>赞比亚是内陆国家。</p><h2>贸易通道</h2><ul><li>通过南非德班港和坦桑尼亚达累斯萨拉姆港</li></ul>`, keywords: ["赞比亚"] },
                    "botswana": { name: "博茨瓦纳", content: `<p>博茨瓦纳是内陆国家。</p><h2>贸易通道</h2><ul><li>通过南非港口</li></ul>`, keywords: ["博茨瓦纳"] },
                    "congo-drc": { name: "刚果（金）", content: `<p>刚果民主共和国是非洲面积最大国家。</p><h2>主要港口</h2><ul><li><strong>马塔迪港</strong>：刚果河港口</li></ul>`, keywords: ["刚果金港口"] },
                    "congo": { name: "刚果（布）", content: `<p>刚果共和国是中非国家。</p><h2>主要港口</h2><ul><li><strong>黑角港</strong>：刚果最大港口</li></ul>`, keywords: ["刚果布港口"] },
                    "gabon": { name: "加蓬", content: `<p>加蓬是中非石油国家。</p><h2>主要港口</h2><ul><li><strong>利伯维尔港</strong>：加蓬主要港口</li></ul>`, keywords: ["加蓬港口"] },
                    "sudan": { name: "苏丹", content: `<p>苏丹是非洲面积第三大国。</p><h2>主要港口</h2><ul><li><strong>苏丹港</strong>：红海主要港口</li></ul>`, keywords: ["苏丹港口"] },
                    "mauritania": { name: "毛里塔尼亚", content: `<p>毛里塔尼亚是西非国家。</p><h2>主要港口</h2><ul><li><strong>努瓦克肖特港</strong>：首都港口</li><li><strong>努瓦迪布港</strong>：矿产出口港</li></ul>`, keywords: ["毛里塔尼亚港口"] },
                    "mali": { name: "马里", content: `<p>马里是西非内陆国家。</p><h2>贸易通道</h2><ul><li>通过塞内加尔达喀尔港</li><li>通过科特迪瓦阿比让港</li></ul>`, keywords: ["马里"] },
                    "niger": { name: "尼日尔", content: `<p>尼日尔是西非内陆国家。</p><h2>贸易通道</h2><ul><li>通过贝宁科托努港</li><li>通过多哥洛美港</li></ul>`, keywords: ["尼日尔"] },
                    "burkina-faso": { name: "布基纳法索", content: `<p>布基纳法索是西非内陆国家。</p><h2>贸易通道</h2><ul><li>通过科特迪瓦阿比让港</li><li>通过加纳特马港</li></ul>`, keywords: ["布基纳法索"] },
                    "guinea": { name: "几内亚", content: `<p>几内亚是西非沿海国家。</p><h2>主要港口</h2><ul><li><strong>科纳克里港</strong>：几内亚主要港口</li></ul>`, keywords: ["科纳克里港", "几内亚港口"] },
                    "guinea-bissau": { name: "几内亚比绍", content: `<p>几内亚比绍是西非小国。</p><h2>主要港口</h2><ul><li><strong>比绍港</strong>：首都港口</li></ul>`, keywords: ["几内亚比绍港口"] },
                    "sierra-leone": { name: "塞拉利昂", content: `<p>塞拉利昂是西非沿海国家。</p><h2>主要港口</h2><ul><li><strong>弗里敦港</strong>：塞拉利昂主要港口</li></ul>`, keywords: ["弗里敦港", "塞拉利昂港口"] },
                    "liberia": { name: "利比里亚", content: `<p>利比里亚是西非沿海国家，船旗国。</p><h2>主要港口</h2><ul><li><strong>蒙罗维亚港</strong>：利比里亚主要港口</li></ul>`, keywords: ["蒙罗维亚港", "利比里亚港口"] },
                    "gambia": { name: "冈比亚", content: `<p>冈比亚是西非最小国家。</p><h2>主要港口</h2><ul><li><strong>班珠尔港</strong>：冈比亚主要港口</li></ul>`, keywords: ["班珠尔港", "冈比亚港口"] },
                    "cape-verde": { name: "佛得角", content: `<p>佛得角是大西洋岛国。</p><h2>主要港口</h2><ul><li><strong>明德罗港</strong>：佛得角主要港口</li></ul>`, keywords: ["佛得角港口"] },
                    "somalia": { name: "索马里", content: `<p>索马里位于非洲之角。</p><h2>主要港口</h2><ul><li><strong>摩加迪沙港</strong>：索马里首都港口</li><li><strong>柏培拉港</strong>：索马里兰港口</li></ul>`, keywords: ["摩加迪沙港", "索马里港口"] },
                    "eritrea": { name: "厄立特里亚", content: `<p>厄立特里亚位于红海沿岸。</p><h2>主要港口</h2><ul><li><strong>马萨瓦港</strong>：厄立特里亚主要港口</li><li><strong>阿萨布港</strong>：红海港口</li></ul>`, keywords: ["马萨瓦港", "厄立特里亚港口"] },
                    "south-sudan": { name: "南苏丹", content: `<p>南苏丹是非洲最年轻的国家，内陆国家。</p><h2>贸易通道</h2><ul><li>通过肯尼亚蒙巴萨港</li><li>通过苏丹港</li></ul>`, keywords: ["南苏丹"] },
                    "burundi": { name: "布隆迪", content: `<p>布隆迪是东非内陆国家。</p><h2>贸易通道</h2><ul><li>通过坦桑尼亚达累斯萨拉姆港</li></ul>`, keywords: ["布隆迪"] },
                    "seychelles": { name: "塞舌尔", content: `<p>塞舌尔是印度洋岛国。</p><h2>主要港口</h2><ul><li><strong>维多利亚港</strong>：塞舌尔主要港口</li></ul>`, keywords: ["塞舌尔港口"] },
                    "comoros": { name: "科摩罗", content: `<p>科摩罗是印度洋岛国。</p><h2>主要港口</h2><ul><li><strong>莫罗尼港</strong>：科摩罗主要港口</li></ul>`, keywords: ["科摩罗港口"] },
                    "malawi": { name: "马拉维", content: `<p>马拉维是东南非内陆国家。</p><h2>贸易通道</h2><ul><li>通过莫桑比克贝拉港</li></ul>`, keywords: ["马拉维"] },
                    "lesotho": { name: "莱索托", content: `<p>莱索托是南非境内的内陆国。</p><h2>贸易通道</h2><ul><li>通过南非德班港</li></ul>`, keywords: ["莱索托"] },
                    "eswatini": { name: "斯威士兰", content: `<p>斯威士兰是南部非洲内陆国。</p><h2>贸易通道</h2><ul><li>通过南非德班港</li><li>通过莫桑比克马普托港</li></ul>`, keywords: ["斯威士兰"] },
                    "central-african": { name: "中非共和国", content: `<p>中非共和国是内陆国家。</p><h2>贸易通道</h2><ul><li>通过喀麦隆杜阿拉港</li></ul>`, keywords: ["中非共和国"] },
                    "chad": { name: "乍得", content: `<p>乍得是非洲内陆国家。</p><h2>贸易通道</h2><ul><li>通过喀麦隆杜阿拉港</li></ul>`, keywords: ["乍得"] },
                    "equatorial-guinea": { name: "赤道几内亚", content: `<p>赤道几内亚是中非石油国。</p><h2>主要港口</h2><ul><li><strong>巴塔港</strong>：赤道几内亚主要港口</li><li><strong>马拉博港</strong>：首都港口</li></ul>`, keywords: ["赤道几内亚港口"] },
                    "sao-tome": { name: "圣多美和普林西比", content: `<p>圣多美和普林西比是几内亚湾岛国。</p><h2>主要港口</h2><ul><li><strong>圣多美港</strong>：主要港口</li></ul>`, keywords: ["圣多美港口"] },
                    "azores": { name: "亚速尔群岛", content: `<p>亚速尔群岛是葡萄牙的自治区，位于北大西洋。</p><h2>主要港口</h2><ul><li><strong>蓬塔德尔加达港</strong>：亚速尔群岛最大港口</li></ul>`, keywords: ["亚速尔群岛港口"] },
                    "madeira": { name: "马德拉群岛", content: `<p>马德拉群岛是葡萄牙的自治区，位于北大西洋。</p><h2>主要港口</h2><ul><li><strong>丰沙尔港</strong>：马德拉群岛主要港口</li></ul>`, keywords: ["马德拉群岛港口"] },
                    "canary-islands": { name: "加那利群岛", content: `<p>加那利群岛是西班牙的自治区，位于非洲西北海岸。</p><h2>主要港口</h2><ul><li><strong>拉斯帕尔马斯港</strong>：加那利群岛最大港口</li><li><strong>圣克鲁斯港</strong>：特内里费岛港口</li></ul>`, keywords: ["加那利群岛港口", "拉斯帕尔马斯港"] },
                    "western-sahara": { name: "西撒哈拉", content: `<p>西撒哈拉是非洲西北部争议地区，目前由摩洛哥实际控制。</p><h2>主要港口</h2><ul><li><strong>阿尤恩港</strong>：西撒哈拉主要港口</li><li><strong>达赫拉港</strong>：渔业港口</li></ul>`, keywords: ["西撒哈拉港口"] },
                    "reunion": { name: "留尼汪岛", content: `<p>留尼汪岛是法国海外省，位于印度洋西南部。</p><h2>主要港口</h2><ul><li><strong>勒波尔港</strong>：留尼汪岛主要港口</li></ul>`, keywords: ["留尼汪港口"] },
                    "saint-helena": { name: "圣赫勒拿岛", content: `<p>圣赫勒拿岛是英国海外领土，位于南大西洋。</p><h2>港口</h2><ul><li><strong>詹姆斯敦港</strong>：圣赫勒拿岛主要港口</li></ul>`, keywords: ["圣赫勒拿港口"] },
                    "mayotte": { name: "马约特", content: `<p>马约特是法国海外省，位于科摩罗群岛。</p><h2>主要港口</h2><ul><li><strong>马穆楚港</strong>：马约特主要港口</li></ul>`, keywords: ["马约特港口"] }
                }
            },
            "oceania": {
                name: "大洋洲",
                intro: "大洋洲共有16个国家和8个地区，以澳大利亚和新西兰为主，是重要的矿产和农产品出口地区。",
                regions: {
                    "australasia": {
                        name: "澳大利亚和新西兰",
                        countries: ["australia", "new-zealand"]
                    },
                    "melanesia": {
                        name: "美拉尼西亚",
                        countries: ["papua-new-guinea", "fiji", "solomon", "vanuatu"]
                    },
                    "micronesia": {
                        name: "密克罗尼西亚",
                        countries: ["palau", "micronesia", "marshall-islands", "kiribati", "nauru"]
                    },
                    "polynesia": {
                        name: "波利尼西亚",
                        countries: ["samoa", "tonga", "tuvalu", "cook-islands", "niue"]
                    },
                    "territories": {
                        name: "大洋洲地区",
                        countries: ["new-caledonia", "french-polynesia", "guam", "northern-mariana", "american-samoa", "wallis-futuna", "tokelau", "pitcairn"]
                    }
                },
                countries: {
                    "australia": { name: "澳大利亚", content: `<p>澳大利亚是大洋洲最大经济体，矿产资源丰富。</p><h2>主要港口</h2><ul><li><strong>墨尔本港</strong>：澳大利亚最大集装箱港</li><li><strong>悉尼港</strong>：新南威尔士主要港口</li><li><strong>布里斯班港</strong>：昆士兰主要港口</li><li><strong>弗里曼特尔港</strong>：西澳主要港口</li><li><strong>阿德莱德港</strong>：南澳主要港口</li></ul>`, keywords: ["墨尔本港", "悉尼港", "澳大利亚港口"] },
                    "new-zealand": { name: "新西兰", content: `<p>新西兰是重要的农产品出口国。</p><h2>主要港口</h2><ul><li><strong>奥克兰港</strong>：新西兰最大港口</li><li><strong>陶朗加港</strong>：出口量最大港口</li><li><strong>利特尔顿港</strong>：南岛主要港口</li></ul>`, keywords: ["奥克兰港", "新西兰港口"] },
                    "papua-new-guinea": { name: "巴布亚新几内亚", content: `<p>巴布亚新几内亚是太平洋岛国。</p><h2>主要港口</h2><ul><li><strong>莫尔兹比港</strong>：首都港口</li><li><strong>莱城港</strong>：第二大城市港口</li></ul>`, keywords: ["巴新港口"] },
                    "fiji": { name: "斐济", content: `<p>斐济是太平洋岛国。</p><h2>主要港口</h2><ul><li><strong>苏瓦港</strong>：斐济主要港口</li></ul>`, keywords: ["苏瓦港", "斐济港口"] },
                    "solomon": { name: "所罗门群岛", content: `<p>所罗门群岛是太平洋岛国。</p><h2>主要港口</h2><ul><li><strong>霍尼亚拉港</strong>：主要港口</li></ul>`, keywords: ["所罗门港口"] },
                    "vanuatu": { name: "瓦努阿图", content: `<p>瓦努阿图是太平洋岛国。</p><h2>主要港口</h2><ul><li><strong>维拉港</strong>：主要港口</li></ul>`, keywords: ["瓦努阿图港口"] },
                    "new-caledonia": { name: "新喀里多尼亚", content: `<p>新喀里多尼亚是法属太平洋领地。</p><h2>主要港口</h2><ul><li><strong>努美阿港</strong>：主要港口</li></ul>`, keywords: ["新喀里多尼亚港口"] },
                    "samoa": { name: "萨摩亚", content: `<p>萨摩亚是太平洋岛国。</p><h2>主要港口</h2><ul><li><strong>阿皮亚港</strong>：主要港口</li></ul>`, keywords: ["萨摩亚港口"] },
                    "tonga": { name: "汤加", content: `<p>汤加是太平洋岛国。</p><h2>主要港口</h2><ul><li><strong>努库阿洛法港</strong>：主要港口</li></ul>`, keywords: ["汤加港口"] },
                    "french-polynesia": { name: "法属波利尼西亚", content: `<p>法属波利尼西亚是法国海外领地。</p><h2>主要港口</h2><ul><li><strong>帕皮提港</strong>：主要港口</li></ul>`, keywords: ["法属波利尼西亚港口"] },
                    "cook-islands": { name: "库克群岛", content: `<p>库克群岛是新西兰联系国。</p><h2>主要港口</h2><ul><li><strong>阿瓦鲁阿港</strong>：主要港口</li></ul>`, keywords: ["库克群岛港口"] },
                    "tuvalu": { name: "图瓦卢", content: `<p>图瓦卢是太平洋小岛国。</p><h2>主要港口</h2><ul><li><strong>富纳富提港</strong>：主要港口</li></ul>`, keywords: ["图瓦卢港口"] },
                    "american-samoa": { name: "美属萨摩亚", content: `<p>美属萨摩亚是美国非建制属地。</p><h2>主要港口</h2><ul><li><strong>帕果帕果港</strong>：主要港口</li></ul>`, keywords: ["美属萨摩亚港口"] },
                    "guam": { name: "关岛", content: `<p>关岛是美国非建制属地。</p><h2>主要港口</h2><ul><li><strong>阿普拉港</strong>：关岛主要港口</li></ul>`, keywords: ["关岛港口"] },
                    "palau": { name: "帕劳", content: `<p>帕劳是太平洋岛国。</p><h2>主要港口</h2><ul><li><strong>科罗尔港</strong>：主要港口</li></ul>`, keywords: ["帕劳港口"] },
                    "micronesia": { name: "密克罗尼西亚联邦", content: `<p>密克罗尼西亚联邦是太平洋岛国。</p><h2>主要港口</h2><ul><li><strong>波纳佩港</strong>：主要港口</li></ul>`, keywords: ["密克罗尼西亚港口"] },
                    "marshall-islands": { name: "马绍尔群岛", content: `<p>马绍尔群岛是太平洋岛国，重要船旗国。</p><h2>主要港口</h2><ul><li><strong>马朱罗港</strong>：首都港口</li></ul>`, keywords: ["马绍尔群岛港口"] },
                    "nauru": { name: "瑙鲁", content: `<p>瑙鲁是世界第三小国。</p><h2>港口</h2><ul><li>无深水港，使用驳船装卸</li></ul>`, keywords: ["瑙鲁"] },
                    "kiribati": { name: "基里巴斯", content: `<p>基里巴斯横跨赤道，太平洋岛国。</p><h2>主要港口</h2><ul><li><strong>贝蒂奥港</strong>：主要港口</li></ul>`, keywords: ["基里巴斯港口"] },
                    "niue": { name: "纽埃", content: `<p>纽埃是新西兰的联系国，太平洋岛国。</p><h2>港口</h2><ul><li>无深水港，使用驳船装卸</li></ul>`, keywords: ["纽埃"] },
                    "northern-mariana": { name: "北马里亚纳群岛", content: `<p>北马里亚纳群岛是美国非建制属地。</p><h2>主要港口</h2><ul><li><strong>塞班港</strong>：塞班岛主要港口</li></ul>`, keywords: ["北马里亚纳港口", "塞班港"] },
                    "tokelau": { name: "托克劳", content: `<p>托克劳是新西兰的非自治领土。</p><h2>港口</h2><ul><li>无深水港，使用小艇接驳</li></ul>`, keywords: ["托克劳"] },
                    "wallis-futuna": { name: "瓦利斯和富图纳", content: `<p>瓦利斯和富图纳是法国海外领地。</p><h2>主要港口</h2><ul><li><strong>马塔乌图港</strong>：主要港口</li></ul>`, keywords: ["瓦利斯和富图纳港口"] },
                    "pitcairn": { name: "皮特凯恩群岛", content: `<p>皮特凯恩群岛是英国海外领土，人口最少的有人居住地区之一。</p><h2>港口</h2><ul><li><strong>邦蒂湾</strong>：主要锚地</li></ul>`, keywords: ["皮特凯恩群岛"] }
                }
            }
        }
    },
    "professional-knowledge": {
        title: "专业知识",
        subcategories: {
            "sea-freight": {
                title: "国际海运",
                articles: [
                    {
                        title: "海运概述与发展历史",
                        content: `<p>海运是国际贸易的主要运输方式，承担着全球约90%的货物运输量。具有运量大、成本低、适合长距离运输的特点。</p>
                        <h2>海运的主要特点</h2>
                        <ul>
                            <li><strong>运量大</strong>：单艘集装箱船可运载数千个标准集装箱</li>
                            <li><strong>成本低</strong>：相比空运，海运成本约为其十分之一</li>
                            <li><strong>航线广</strong>：覆盖全球各大港口</li>
                            <li><strong>时效稳定</strong>：航班固定，便于计划</li>
                        </ul>
                        <h2>海运的主要方式</h2>
                        <div class="content-block">
                            <h4>集装箱运输</h4>
                            <p>最常用的方式，分为整箱（FCL）和拼箱（LCL）两种。</p>
                        </div>
                        <div class="content-block">
                            <h4>散货运输</h4>
                            <p>适用于大宗商品如矿石、粮食等。</p>
                        </div>`,
                        keywords: ["海运概述", "国际贸易", "集装箱", "散货", "液体货物"],
                        readCount: 1520
                    },
                    {
                        title: "海运订舱流程详解",
                        content: `<p>订舱是海运操作中的关键步骤，直接影响货物能否按时装船出运。</p>
                        <h2>标准订舱流程</h2>
                        <ol>
                            <li><strong>询价比价</strong>：向多家船公司或货代询价</li>
                            <li><strong>确定船期</strong>：选择合适的船期和航线</li>
                            <li><strong>提交订舱委托</strong>：填写订舱委托书</li>
                            <li><strong>船公司确认</strong>：获得舱位确认</li>
                            <li><strong>获得S/O</strong>：收到下货纸</li>
                            <li><strong>安排拖车</strong>：安排货物运输到港口</li>
                            <li><strong>报关装船</strong>：完成报关并装船</li>
                            <li><strong>获得提单</strong>：货物出运后取得提单</li>
                        </ol>
                        <h2>订舱注意事项</h2>
                        <ul>
                            <li>提前预订，特别是旺季</li>
                            <li>准确填写货物信息</li>
                            <li>确认船期和航线</li>
                            <li>注意截关和截港时间</li>
                        </ul>`,
                        keywords: ["订舱流程", "询价", "船期", "S/O", "提单"],
                        readCount: 3120
                    },
                    {
                        title: "海运提单详解",
                        content: `<p>提单（Bill of Lading，简称B/L）是海运中最重要的单证，具有三重法律性质。</p>
                        <h2>提单的三重性质</h2>
                        <ul>
                            <li><strong>货物收据</strong>：证明承运人已收到货物</li>
                            <li><strong>运输合同</strong>：承运人与托运人之间的运输协议</li>
                            <li><strong>物权凭证</strong>：持有人有权提取货物</li>
                        </ul>
                        <h2>提单类型</h2>
                        <div class="content-block">
                            <h4>按签发方式</h4>
                            <p>正本提单（Original B/L）、副本提单（Copy B/L）、电放提单（Telex Release）</p>
                        </div>
                        <div class="content-block">
                            <h4>按抬头方式</h4>
                            <p>记名提单、指示提单、不记名提单</p>
                        </div>`,
                        keywords: ["海运提单", "B/L", "正本提单", "副本提单", "物权凭证"],
                        readCount: 2890
                    },
                    {
                        title: "海运费用构成",
                        content: `<p>海运费用结构复杂，了解各项费用有助于更好地控制成本。</p>
                        <h2>主要费用类型</h2>
                        <ul>
                            <li><strong>Ocean Freight</strong>：基本海运费</li>
                            <li><strong>BAF</strong>：燃油附加费</li>
                            <li><strong>CAF</strong>：货币调节费</li>
                            <li><strong>PSC</strong>：港口拥堵费</li>
                            <li><strong>PSS</strong>：旺季附加费</li>
                            <li><strong>THC</strong>：码头操作费</li>
                            <li><strong>DOC</strong>：文件费</li>
                        </ul>
                        <h2>费用影响因素</h2>
                        <p>航线、船公司、货量、季节、燃油价格等都会影响海运费用。</p>`,
                        keywords: ["海运费用", "Ocean Freight", "BAF", "CAF", "PSC", "PSS"],
                        readCount: 4230
                    },
                    {
                        title: "海运保险种类",
                        content: `<p>货运保险是防范运输风险的重要手段，根据保障范围分为不同险种。</p>
                        <h2>主要险种</h2>
                        <div class="content-block">
                            <h4>一切险（All Risks）</h4>
                            <p>保障范围最广，包括运输途中的一切风险。</p>
                        </div>
                        <div class="content-block">
                            <h4>水渍险（WPA）</h4>
                            <p>保障自然灾害和意外事故造成的损失。</p>
                        </div>
                        <div class="content-block">
                            <h4>平安险（FPA）</h4>
                            <p>保障范围最小，仅保障全损和共同海损。</p>
                        </div>`,
                        keywords: ["海运保险", "一切险", "水渍险", "平安险", "保险条款"],
                        readCount: 1654
                    }
                ]
            },
            "air-freight": {
                title: "国际空运",
                articles: [
                    {
                        title: "国际空运基础知识",
                        content: `<p>国际空运是使用飞机进行国际货物运输的方式，具有快速、安全的特点。</p>
                        <h2>空运优势</h2>
                        <ul>
                            <li><strong>速度快</strong>：通常3-7天到达</li>
                            <li><strong>安全性高</strong>：货损率低</li>
                            <li><strong>准时性好</strong>：航班时刻固定</li>
                        </ul>
                        <h2>运输方式</h2>
                        <p>主要包括客机腹舱和全货机两种方式。客机腹舱运量小但航班多，全货机运量大但航班相对较少。</p>`,
                        keywords: ["国际空运", "客机腹舱", "全货机", "快速运输", "高价值货物"],
                        readCount: 1234
                    },
                    {
                        title: "主要航空公司对比",
                        content: `<p>选择合适的航空公司对空运时效和成本都有重要影响。</p>
                        <h2>国际主要货运航空</h2>
                        <ul>
                            <li><strong>国泰货运</strong>：亚洲航线优势</li>
                            <li><strong>新航货运</strong>：服务质量高</li>
                            <li><strong>阿航货运</strong>：中东枢纽</li>
                            <li><strong>汉莎货运</strong>：欧洲航线</li>
                        </ul>
                        <h2>中国主要航空公司</h2>
                        <ul>
                            <li>国航货运、东航货运、南航货运</li>
                            <li>顺丰航空、圆通航空</li>
                        </ul>`,
                        keywords: ["国泰货运", "新航货运", "国航货运", "顺丰航空", "航线覆盖"],
                        readCount: 2890
                    },
                    {
                        title: "空运计费重量详解",
                        content: `<p>空运计费采用实际重量和体积重量两者取大的原则。</p>
                        <h2>计费公式</h2>
                        <div class="content-block">
                            <h4>体积重量计算</h4>
                            <p><code>长(cm) × 宽(cm) × 高(cm) ÷ 6000 = 体积重量(kg)</code></p>
                        </div>
                        <h2>为什么要这样计算？</h2>
                        <p>因为飞机舱位有限，需要平衡重量和体积。轻泡货物按体积计费，重货按实重计费。</p>`,
                        keywords: ["计费重量", "实际重量", "体积重量", "6000系数", "舱位限制"],
                        readCount: 4521
                    },
                    {
                        title: "空运出口操作流程",
                        content: `<p>空运出口操作需要严格按照流程进行，确保货物顺利出运。</p>
                        <h2>操作流程</h2>
                        <ol>
                            <li>接单报价</li>
                            <li>订舱配载</li>
                            <li>货物交接</li>
                            <li>报关报检</li>
                            <li>配载装机</li>
                            <li>航班起飞</li>
                            <li>到达清关</li>
                            <li>派送交货</li>
                        </ol>`,
                        keywords: ["出口流程", "订舱配载", "报关报检", "配载装机", "派送交货"],
                        readCount: 2345
                    },
                    {
                        title: "危险品分类及包装",
                        content: `<p>IATA将危险品分为9类，每类都有特定的包装和运输要求。</p>
                        <h2>危险品9大类别</h2>
                        <ol>
                            <li>爆炸品</li>
                            <li>气体</li>
                            <li>易燃液体</li>
                            <li>易燃固体</li>
                            <li>氧化剂</li>
                            <li>毒性物质</li>
                            <li>放射性物质</li>
                            <li>腐蚀品</li>
                            <li>杂项危险品</li>
                        </ol>`,
                        keywords: ["IATA危险品", "9类危险品", "包装要求", "标签要求", "爆炸品"],
                        readCount: 1876
                    }
                ]
            },
            "express": {
                title: "国际快递",
                articles: [
                    {
                        title: "四大快递公司详解",
                        content: `<p>国际四大快递公司各有优势，选择时需要根据目的地和需求决定。</p>
                        <h2>四大快递对比</h2>
                        <div class="content-block">
                            <h4>DHL</h4>
                            <p>德国公司，欧洲线路最强，时效3-5天，价格较高</p>
                        </div>
                        <div class="content-block">
                            <h4>FedEx</h4>
                            <p>美国公司，美洲线路优势，时效2-4天</p>
                        </div>
                        <div class="content-block">
                            <h4>UPS</h4>
                            <p>美国公司，性价比高，时效3-6天</p>
                        </div>
                        <div class="content-block">
                            <h4>TNT</h4>
                            <p>荷兰公司，已被FedEx收购</p>
                        </div>`,
                        keywords: ["DHL", "FedEx", "UPS", "TNT", "时效对比", "线路优势"],
                        readCount: 5230
                    },
                    {
                        title: "快递计费规则",
                        content: `<p>国际快递通常采用首重+续重的计费方式。</p>
                        <h2>计费方式</h2>
                        <ul>
                            <li>首重一般为0.5kg或1kg</li>
                            <li>超出部分按续重收费</li>
                            <li>体积重量系数一般为5000</li>
                        </ul>`,
                        keywords: ["首重续重", "计费重量", "体积重量", "5000系数", "计费规则"],
                        readCount: 3456
                    },
                    {
                        title: "快递禁运物品清单",
                        content: `<p>了解禁运物品清单，避免发货被退回或扣留。</p>
                        <h2>禁运物品</h2>
                        <ul>
                            <li>易燃易爆品</li>
                            <li>有毒化学品</li>
                            <li>腐蚀性物品</li>
                            <li>放射性物品</li>
                            <li>磁性物品超标</li>
                            <li>液体（除化妆品）</li>
                            <li>粉末</li>
                            <li>电池（除小型电池）</li>
                            <li>现金证券</li>
                        </ul>`,
                        keywords: ["禁运物品", "易燃易爆", "磁性物品", "液体", "粉末", "电池"],
                        readCount: 4123
                    },
                    {
                        title: "快递跟踪系统使用",
                        content: `<p>各快递公司都提供在线跟踪服务，方便实时了解包裹状态。</p>
                        <h2>跟踪状态说明</h2>
                        <ul>
                            <li><strong>已收件</strong>：快递员已取件</li>
                            <li><strong>运输中</strong>：正在转运</li>
                            <li><strong>清关中</strong>：海关处理中</li>
                            <li><strong>派送中</strong>：正在配送</li>
                            <li><strong>已签收</strong>：收件人已签收</li>
                        </ul>`,
                        keywords: ["在线跟踪", "运单号", "包裹状态", "清关中", "短信通知"],
                        readCount: 1890
                    },
                    {
                        title: "快递清关流程",
                        content: `<p>快递清关相对简单，但仍需注意申报信息的准确性。</p>
                        <h2>清关流程</h2>
                        <ol>
                            <li>包裹到达目的国</li>
                            <li>海关检查申报信息</li>
                            <li>征收关税（如需要）</li>
                            <li>放行派送</li>
                        </ol>
                        <p><strong>注意</strong>：申报价值需真实，避免过高或过低申报。</p>`,
                        keywords: ["快递清关", "海关检查", "申报信息", "关税征收", "申报价值"],
                        readCount: 2234
                    }
                ]
            },
            "fba": {
                title: "FBA头程",
                articles: [
                    {
                        title: "什么是FBA服务",
                        content: `<p>FBA（Fulfillment by Amazon）是亚马逊提供的物流服务。</p>
                        <h2>FBA服务内容</h2>
                        <ul>
                            <li>卖家将商品发送到亚马逊仓库</li>
                            <li>亚马逊负责存储、包装、配送</li>
                            <li>亚马逊提供客服支持</li>
                            <li>商品享有Prime标识</li>
                        </ul>
                        <h2>FBA优势</h2>
                        <p>使用FBA可以提高商品曝光和转化率，享受亚马逊的物流网络优势。</p>`,
                        keywords: ["FBA", "亚马逊物流", "仓储服务", "Prime标识", "转化率"],
                        readCount: 6780
                    },
                    {
                        title: "FBA头程运输方式对比",
                        content: `<p>FBA头程是指将货物从中国运送到亚马逊仓库的过程。</p>
                        <h2>运输方式对比</h2>
                        <div class="content-block">
                            <h4>海运头程</h4>
                            <p>成本最低，时效20-30天，适合大货量</p>
                        </div>
                        <div class="content-block">
                            <h4>空运头程</h4>
                            <p>时效5-7天，成本中等，适合补货</p>
                        </div>
                        <div class="content-block">
                            <h4>快递头程</h4>
                            <p>时效3-5天，成本最高，适合急货</p>
                        </div>
                        <div class="content-block">
                            <h4>铁路头程</h4>
                            <p>新兴方式，时效15-20天</p>
                        </div>`,
                        keywords: ["海运头程", "空运头程", "快递头程", "铁路头程", "时效对比"],
                        readCount: 5430
                    },
                    {
                        title: "FBA标签制作指南",
                        content: `<p>每个发往FBA的商品必须贴上FBA标签。</p>
                        <h2>标签信息</h2>
                        <ul>
                            <li>ASIN：商品唯一标识</li>
                            <li>产品名称</li>
                            <li>商品条件</li>
                            <li>FNSKU：FBA专用编码</li>
                        </ul>
                        <h2>标签要求</h2>
                        <ul>
                            <li>尺寸：52mm × 30mm</li>
                            <li>必须清晰可读</li>
                            <li>不能折叠或损坏</li>
                            <li>可使用热敏纸打印</li>
                        </ul>`,
                        keywords: ["FBA标签", "FNSKU", "ASIN", "标签尺寸", "热敏纸"],
                        readCount: 3456
                    },
                    {
                        title: "FBA包装要求详解",
                        content: `<p>亚马逊对FBA货物的包装有严格要求。</p>
                        <h2>纸箱要求</h2>
                        <ul>
                            <li>结实耐用</li>
                            <li>边长不超过63.5cm</li>
                            <li>重量不超过22.7kg</li>
                        </ul>
                        <h2>包装材料</h2>
                        <ul>
                            <li>可用泡沫、气泡膜</li>
                            <li>禁用松散填充物</li>
                        </ul>`,
                        keywords: ["包装要求", "纸箱规格", "包装材料", "Ship Label", "FRAGILE"],
                        readCount: 2890
                    },
                    {
                        title: "FBA费用详细解析",
                        content: `<p>FBA费用包括多个组成部分，需要综合考虑。</p>
                        <h2>费用构成</h2>
                        <ul>
                            <li><strong>头程费用</strong>：运输+清关+派送</li>
                            <li><strong>履约费</strong>：FBA配送费用</li>
                            <li><strong>月度仓储费</strong>：按体积收取</li>
                            <li><strong>长期仓储费</strong>：超过365天的库存</li>
                            <li><strong>移除/销毁费</strong>：处理滞销库存</li>
                        </ul>`,
                        keywords: ["FBA费用", "履约费", "仓储费", "长期仓储", "移除费"],
                        readCount: 4120
                    },
                    {
                        title: "US CBP Port Codes",
                        content: `
                        <div class="port-codes-page">
                            <div class="port-intro-bilingual">
                                <div class="intro-title">
                                    <h2>US Customs Port Codes</h2>
                                    <h3>美国海关港口代码</h3>
                                </div>
                                <div class="intro-content">
                                    <p class="text-en"><strong>US Customs Ports</strong> are the operational facilities used by the Department of Homeland Security to regulate goods being imported into or exported from the United States. Customs ports of entry are often located near airports, seaports, and land border crossings. Customs ports are created by the Deputy Assistant Secretary by authority from the Secretary of treasury. That office is given authority to establish, arrange, consolidate, and discontinue Customs ports of entry to fit the needs of the US Customs Service. The following is a list of Customs Ports of Entry and Service ports.</p>
                                    <p class="text-cn">美国海关港口是国土安全部用于监管进出口美国商品的运营设施。海关入境港通常位于机场、海港和陆地边境口岸附近。海关港口由副助理部长根据财政部长的授权创建。该办公室被赋予权力，以建立、安排、合并和终止海关入境港口，以满足美国海关服务的需求。以下是入境港口和服务港口的列表。</p>
                                </div>
                                <div class="intro-note">
                                    <p class="text-en">Facilities with the ability to transmit <strong>AMS (Automated Manifest System)</strong> information directly to US Customs must have a Customs assigned <strong>FIRMS</strong> code.</p>
                                    <p class="text-cn">能够直接向美国海关传输 <strong>AMS（自动舱单系统）</strong>信息的设施必须拥有海关分配的 <strong>FIRMS</strong> 代码。</p>
                                </div>
                            </div>
                            
                            <div class="port-search-box">
                                <div class="search-row">
                                    <div class="search-field">
                                        <label>Port Name</label>
                                        <input type="text" id="searchPortName" placeholder="e.g. Los Angeles" oninput="filterPortCodes()">
                                    </div>
                                    <div class="search-field">
                                        <label>State</label>
                                        <select id="searchState" onchange="filterPortCodes()">
                                            <option value="">All States</option>
                                            <option value="AK">Alaska (AK)</option>
                                            <option value="AL">Alabama (AL)</option>
                                            <option value="AZ">Arizona (AZ)</option>
                                            <option value="CA">California (CA)</option>
                                            <option value="CO">Colorado (CO)</option>
                                            <option value="CT">Connecticut (CT)</option>
                                            <option value="DE">Delaware (DE)</option>
                                            <option value="FL">Florida (FL)</option>
                                            <option value="GA">Georgia (GA)</option>
                                            <option value="HI">Hawaii (HI)</option>
                                            <option value="IL">Illinois (IL)</option>
                                            <option value="IN">Indiana (IN)</option>
                                            <option value="KY">Kentucky (KY)</option>
                                            <option value="LA">Louisiana (LA)</option>
                                            <option value="MA">Massachusetts (MA)</option>
                                            <option value="MD">Maryland (MD)</option>
                                            <option value="ME">Maine (ME)</option>
                                            <option value="MI">Michigan (MI)</option>
                                            <option value="MN">Minnesota (MN)</option>
                                            <option value="MO">Missouri (MO)</option>
                                            <option value="MT">Montana (MT)</option>
                                            <option value="NC">North Carolina (NC)</option>
                                            <option value="ND">North Dakota (ND)</option>
                                            <option value="NH">New Hampshire (NH)</option>
                                            <option value="NJ">New Jersey (NJ)</option>
                                            <option value="NM">New Mexico (NM)</option>
                                            <option value="NY">New York (NY)</option>
                                            <option value="OH">Ohio (OH)</option>
                                            <option value="OR">Oregon (OR)</option>
                                            <option value="PA">Pennsylvania (PA)</option>
                                            <option value="PR">Puerto Rico (PR)</option>
                                            <option value="RI">Rhode Island (RI)</option>
                                            <option value="SC">South Carolina (SC)</option>
                                            <option value="TN">Tennessee (TN)</option>
                                            <option value="TX">Texas (TX)</option>
                                            <option value="VA">Virginia (VA)</option>
                                            <option value="VT">Vermont (VT)</option>
                                            <option value="WA">Washington (WA)</option>
                                            <option value="WI">Wisconsin (WI)</option>
                                            <option value="VI">Virgin Islands (VI)</option>
                                            <option value="GU">Guam (GU)</option>
                                            <option value="MP">N. Mariana Islands (MP)</option>
                                            <option value="NV">Nevada (NV)</option>
                                            <option value="UT">Utah (UT)</option>
                                            <option value="NE">Nebraska (NE)</option>
                                            <option value="MS">Mississippi (MS)</option>
                                        </select>
                                    </div>
                                    <div class="search-field">
                                        <label>Port Code</label>
                                        <input type="text" id="searchPortCode" placeholder="e.g. 2704" oninput="filterPortCodes()">
                                    </div>
                                    <div class="search-field search-btn-field">
                                        <button onclick="resetPortSearch()" class="reset-btn">Reset</button>
                                    </div>
                                </div>
                            </div>

                            <div class="port-stats">
                                <span id="portCount">Showing 150 ports</span>
                            </div>

                            <div class="port-table-wrapper">
                                <table class="port-codes-table" id="portCodesTable">
                                    <thead>
                                        <tr>
                                            <th onclick="sortPortTable(0)">#</th>
                                            <th onclick="sortPortTable(1)">Port Name ↕</th>
                                            <th onclick="sortPortTable(2)">State ↕</th>
                                            <th onclick="sortPortTable(3)">Port Code ↕</th>
                                        </tr>
                                    </thead>
                                    <tbody id="portTableBody">
                                    </tbody>
                                </table>
                            </div>

                            <div id="portPagination" class="port-pagination"></div>
                        </div>`,
                        keywords: ["CBP", "Port Code", "美国海关", "AMS", "ISF", "清关", "Schedule D"],
                        readCount: 1520
                    },
                    {
                        title: "美国海关清关流程",
                        content: `
                        <div class="article-content-wrapper">
                            <h2>美国海关清关流程详解</h2>
                            <p>美国海关清关是货物进入美国市场的必经环节，了解整个流程对于跨境电商和国际贸易从业者至关重要。</p>
                            
                            <h3>一、清关前准备</h3>
                            <ul>
                                <li><strong>进口商注册</strong>：需要在CBP注册，获取进口商识别号（Importer Number）</li>
                                <li><strong>海关保证金（Bond）</strong>：必须购买海关保证金，分为单次Bond和年度Bond</li>
                                <li><strong>报关行选择</strong>：建议选择有执照的报关行（Licensed Customs Broker）</li>
                                <li><strong>货物分类</strong>：确定正确的HTS编码（海关税则号）</li>
                            </ul>
                            
                            <h3>二、清关流程步骤</h3>
                            <div class="step-list">
                                <div class="step-item">
                                    <span class="step-num">1</span>
                                    <div class="step-content">
                                        <strong>货物到达通知</strong>
                                        <p>货物到达美国港口后，船公司或航空公司会发送到货通知</p>
                                    </div>
                                </div>
                                <div class="step-item">
                                    <span class="step-num">2</span>
                                    <div class="step-content">
                                        <strong>入境申报（Entry Filing）</strong>
                                        <p>必须在货物到达后15天内完成入境申报，提交Entry Summary（CBP Form 7501）</p>
                                    </div>
                                </div>
                                <div class="step-item">
                                    <span class="step-num">3</span>
                                    <div class="step-content">
                                        <strong>单证审核</strong>
                                        <p>CBP审核商业发票、装箱单、提单、原产地证明等文件</p>
                                    </div>
                                </div>
                                <div class="step-item">
                                    <span class="step-num">4</span>
                                    <div class="step-content">
                                        <strong>关税评估与支付</strong>
                                        <p>根据商品分类和价值计算关税，进口商需在规定时间内支付</p>
                                    </div>
                                </div>
                                <div class="step-item">
                                    <span class="step-num">5</span>
                                    <div class="step-content">
                                        <strong>货物放行</strong>
                                        <p>完成所有手续后，CBP签发放行通知，货物可以提取</p>
                                    </div>
                                </div>
                            </div>
                            
                            <h3>三、常见清关延误原因</h3>
                            <ul>
                                <li>文件不完整或信息不一致</li>
                                <li>HTS编码错误</li>
                                <li>货值申报有疑问</li>
                                <li>被抽中查验</li>
                                <li>涉及反倾销/反补贴产品</li>
                            </ul>
                            
                            <h3>四、清关时效</h3>
                            <table class="info-table">
                                <tr><th>情况</th><th>预计时效</th></tr>
                                <tr><td>正常清关</td><td>1-3个工作日</td></tr>
                                <tr><td>文件补充</td><td>3-7个工作日</td></tr>
                                <tr><td>海关查验</td><td>5-14个工作日</td></tr>
                                <tr><td>其他机构介入</td><td>视情况而定</td></tr>
                            </table>
                        </div>`,
                        keywords: ["美国清关", "CBP", "入境申报", "关税", "报关行", "海关保证金"],
                        readCount: 2350
                    },
                    {
                        title: "CBP申报要求",
                        content: `
                        <div class="article-content-wrapper">
                            <h2>CBP申报要求详解</h2>
                            <p>美国海关和边境保护局（CBP）对进口货物有严格的申报要求，准确申报是合规进口的基础。</p>
                            
                            <h3>一、基本申报信息</h3>
                            <ul>
                                <li><strong>进口商信息</strong>：名称、地址、联系方式、进口商编号</li>
                                <li><strong>货物描述</strong>：详细的商品名称、规格、用途</li>
                                <li><strong>HTS编码</strong>：10位数的海关税则号</li>
                                <li><strong>原产国</strong>：货物的制造国或生产国</li>
                                <li><strong>货值申报</strong>：CIF或FOB价值</li>
                                <li><strong>数量与单位</strong>：件数、重量、体积等</li>
                            </ul>
                            
                            <h3>二、必备单证</h3>
                            <table class="info-table">
                                <tr><th>单证名称</th><th>说明</th><th>要求</th></tr>
                                <tr><td>商业发票</td><td>Commercial Invoice</td><td>必须</td></tr>
                                <tr><td>装箱单</td><td>Packing List</td><td>必须</td></tr>
                                <tr><td>提单</td><td>Bill of Lading / Airway Bill</td><td>必须</td></tr>
                                <tr><td>原产地证明</td><td>Certificate of Origin</td><td>视情况</td></tr>
                                <tr><td>入境概要</td><td>Entry Summary (CBP Form 7501)</td><td>必须</td></tr>
                                <tr><td>到货通知</td><td>Arrival Notice</td><td>必须</td></tr>
                            </table>
                            
                            <h3>三、特殊商品额外要求</h3>
                            <div class="info-box warning">
                                <p><strong>以下商品需要额外许可或认证：</strong></p>
                                <ul>
                                    <li><strong>食品</strong>：FDA注册、Prior Notice</li>
                                    <li><strong>电子产品</strong>：FCC认证</li>
                                    <li><strong>儿童产品</strong>：CPSC认证、CPC证书</li>
                                    <li><strong>医疗器械</strong>：FDA 510(k)批准</li>
                                    <li><strong>化妆品</strong>：FDA注册</li>
                                    <li><strong>纺织品</strong>：纤维成分标签</li>
                                </ul>
                            </div>
                            
                            <h3>四、申报时限</h3>
                            <ul>
                                <li><strong>入境申报</strong>：货物到达后15天内</li>
                                <li><strong>关税支付</strong>：入境申报后10天内</li>
                                <li><strong>ISF申报</strong>：装船前24小时（海运）</li>
                            </ul>
                            
                            <h3>五、违规处罚</h3>
                            <ul>
                                <li>虚假申报：最高可达货值4倍的罚款</li>
                                <li>延迟申报：每天$5,000罚款</li>
                                <li>ISF违规：$5,000起罚</li>
                                <li>严重违规可能导致货物没收</li>
                            </ul>
                        </div>`,
                        keywords: ["CBP申报", "进口单证", "HTS编码", "商业发票", "原产地", "FDA"],
                        readCount: 1890
                    },
                    {
                        title: "ISF申报指南",
                        content: `
                        <div class="article-content-wrapper">
                            <h2>ISF申报指南（10+2规则）</h2>
                            <p>ISF（Importer Security Filing）又称"10+2规则"，是美国海关要求的进口安全申报，适用于所有海运进口货物。</p>
                            
                            <h3>一、什么是ISF？</h3>
                            <p>ISF是美国国土安全部要求进口商在货物装船前向CBP申报的安全信息，目的是提高供应链安全性，防止恐怖主义和走私活动。</p>
                            
                            <h3>二、申报时限</h3>
                            <div class="highlight-box">
                                <p><strong>关键时限：</strong>必须在货物在外国港口装载到前往美国的船只之前<strong>至少24小时</strong>提交ISF申报。</p>
                            </div>
                            
                            <h3>三、进口商需申报的10项信息</h3>
                            <ol class="numbered-list">
                                <li><strong>卖方名称和地址</strong> - Seller Name and Address</li>
                                <li><strong>买方名称和地址</strong> - Buyer Name and Address</li>
                                <li><strong>进口商记录号</strong> - Importer of Record Number</li>
                                <li><strong>收货人号码</strong> - Consignee Number</li>
                                <li><strong>制造商名称和地址</strong> - Manufacturer Name and Address</li>
                                <li><strong>原产国</strong> - Country of Origin</li>
                                <li><strong>商品HTS编码（前6位）</strong> - Commodity HTS Number</li>
                                <li><strong>集装箱装箱地址</strong> - Container Stuffing Location</li>
                                <li><strong>拼箱商名称和地址</strong> - Consolidator Name and Address</li>
                                <li><strong>提单号</strong> - Master Bill of Lading Number</li>
                            </ol>
                            
                            <h3>四、承运人需申报的2项信息</h3>
                            <ol class="numbered-list">
                                <li><strong>船舶装载计划</strong> - Vessel Stow Plan</li>
                                <li><strong>集装箱状态信息</strong> - Container Status Messages</li>
                            </ol>
                            
                            <h3>五、ISF申报注意事项</h3>
                            <ul>
                                <li>ISF必须由进口商或其代理（如报关行）提交</li>
                                <li>一个提单可能需要多个ISF（多个进口商时）</li>
                                <li>ISF信息可以在装船前更新，但最晚不能迟于装船后24小时</li>
                                <li>空运、陆运货物不需要ISF申报</li>
                            </ul>
                            
                            <h3>六、违规处罚</h3>
                            <table class="info-table">
                                <tr><th>违规类型</th><th>处罚金额</th></tr>
                                <tr><td>未申报ISF</td><td>$5,000起</td></tr>
                                <tr><td>延迟申报</td><td>$5,000起</td></tr>
                                <tr><td>信息不准确</td><td>$5,000起</td></tr>
                                <tr><td>严重/重复违规</td><td>最高$10,000/次</td></tr>
                            </table>
                            
                            <h3>七、常见问题</h3>
                            <div class="faq-section">
                                <div class="faq-item">
                                    <strong>Q: ISF和AMS有什么区别？</strong>
                                    <p>A: ISF是进口商安全申报，AMS是自动舱单系统。两者都需要，但申报主体和内容不同。</p>
                                </div>
                                <div class="faq-item">
                                    <strong>Q: ISF可以修改吗？</strong>
                                    <p>A: 可以，但必须在到港前完成修改，且修改次数过多可能引起海关关注。</p>
                                </div>
                            </div>
                        </div>`,
                        keywords: ["ISF", "10+2规则", "进口安全申报", "海运", "AMS", "CBP"],
                        readCount: 2180
                    },
                    {
                        title: "CBP Disposition Codes",
                        content: `
                        <div class="disposition-codes-page">
                            <div class="dc-intro">
                                <div class="dc-intro-content">
                                    <h2>CBP Disposition Codes</h2>
                                    <p class="dc-subtitle">Customs Automated Manifest Interface Requirements - Appendix D</p>
                                    <p class="dc-desc-en">This appendix provides a complete listing of valid disposition codes. Disposition codes are status messages sent by U.S. Customs and Border Protection (CBP) to inform carriers, brokers, and importers about the status of cargo shipments.</p>
                                    <p class="dc-desc-cn">本附录提供了所有有效处置代码的完整列表。处置代码是美国海关和边境保护局(CBP)发送的状态消息，用于通知承运人、报关行和进口商关于货物运输的状态。</p>
                                </div>
                                <div class="dc-version">
                                    <span class="version-badge">CAMIR V19</span>
                                    <span class="date-badge">March 2025</span>
                                </div>
                            </div>

                            <div class="dc-filter-section">
                                <div class="dc-search-box">
                                    <input type="text" id="dcSearchInput" placeholder="Search by code, name or description..." oninput="filterDispositionCodes()">
                                    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.35-4.35"></path>
                                    </svg>
                                </div>
                                <div class="dc-category-filters">
                                    <button class="dc-filter-btn active" onclick="filterByCategory('all')">All</button>
                                    <button class="dc-filter-btn" onclick="filterByCategory('release')">
                                        <span class="filter-dot release"></span>Release
                                    </button>
                                    <button class="dc-filter-btn" onclick="filterByCategory('hold')">
                                        <span class="filter-dot hold"></span>Hold
                                    </button>
                                    <button class="dc-filter-btn" onclick="filterByCategory('advisory')">
                                        <span class="filter-dot advisory"></span>Advisory
                                    </button>
                                    <button class="dc-filter-btn" onclick="filterByCategory('pga')">
                                        <span class="filter-dot pga"></span>PGA
                                    </button>
                                    <button class="dc-filter-btn" onclick="filterByCategory('inbond')">
                                        <span class="filter-dot inbond"></span>In-Bond
                                    </button>
                                    <button class="dc-filter-btn" onclick="filterByCategory('other')">
                                        <span class="filter-dot other"></span>Other
                                    </button>
                                </div>
                            </div>

                            <div class="dc-stats">
                                <span id="dcCount">Showing all codes</span>
                            </div>

                            <div class="dc-table-wrapper">
                                <table class="dc-table" id="dcTable">
                                    <thead>
                                        <tr>
                                            <th class="col-code" onclick="sortDcTable('code')">Code ↕</th>
                                            <th class="col-name" onclick="sortDcTable('name')">Name ↕</th>
                                            <th class="col-desc">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody id="dcTableBody">
                                    </tbody>
                                </table>
                            </div>

                            <div id="dcPagination" class="dc-pagination"></div>
                        </div>`,
                        keywords: ["Disposition Code", "CBP", "CAMIR", "货物状态", "Hold", "Release", "AMS"],
                        readCount: 890
                    }
                ]
    },
    "dedicated-line": {
        title: "国际专线",
                articles: [
                    {
                        title: "欧洲专线特点",
                        content: `<p>欧洲专线主要覆盖英国、德国、法国、意大利、西班牙等国家。</p>
                        <h2>服务特点</h2>
                        <ul>
                            <li>时效：一般7-15天</li>
                            <li>价格：比快递便宜30-50%</li>
                            <li>适合重量：0.5-30kg</li>
                            <li>是跨境电商的热门选择</li>
                        </ul>`,
                        keywords: ["欧洲专线", "时效", "价格优势", "重量范围", "跨境电商"],
                        readCount: 3456
            },
                    {
                        title: "美国专线详解",
                        content: `<p>美国专线分为美西和美东线路，时效有所差异。</p>
                        <h2>线路对比</h2>
                        <ul>
                            <li><strong>美西线路</strong>：时效较快，一般5-8天</li>
                            <li><strong>美东线路</strong>：时效稍慢，7-12天</li>
                        </ul>
                        <h2>服务优势</h2>
                        <ul>
                            <li>支持预付关税服务</li>
                            <li>清关能力强</li>
                            <li>适合各类商品运输</li>
                        </ul>`,
                        keywords: ["美国专线", "美西美东", "预付关税", "清关能力", "时效差异"],
                        readCount: 2890
            },
                    {
                        title: "东南亚专线市场",
                        content: `<p>东南亚专线覆盖新加坡、马来西亚、泰国、越南、菲律宾、印尼等国。</p>
                        <h2>市场优势</h2>
                        <ul>
                            <li>地理位置近，时效快（3-7天）</li>
                            <li>适合服装、电子产品、日用品</li>
                            <li>电商市场增长迅速</li>
                        </ul>`,
                        keywords: ["东南亚专线", "地理优势", "时效快", "服装电子", "日用品"],
                        readCount: 1890
            },
                    {
                        title: "中东专线介绍",
                        content: `<p>中东专线主要覆盖阿联酋、沙特、科威特、卡塔尔等国家。</p>
                        <h2>注意事项</h2>
                        <ul>
                            <li>时效：一般7-12天</li>
                            <li>清关相对复杂</li>
                            <li>需要注意宗教和文化禁忌</li>
                            <li>适合电子产品、服装等</li>
                        </ul>`,
                        keywords: ["中东专线", "阿联酋", "沙特", "清关复杂", "文化禁忌"],
                        readCount: 1234
            },
                    {
                        title: "如何选择合适的专线",
                        content: `<p>选择专线需要考虑多个因素。</p>
                        <h2>选择考虑因素</h2>
                        <ol>
                            <li>目的国覆盖</li>
                            <li>时效要求</li>
                            <li>价格预算</li>
                            <li>货物类型</li>
                            <li>清关能力</li>
                            <li>售后服务</li>
                        </ol>
                        <p><strong>建议</strong>：多家对比，选择服务稳定的物流商。</p>`,
                        keywords: ["专线选择", "目的国", "时效要求", "价格预算", "清关能力"],
                        readCount: 2567
                    }
                ]
    },
    "small-package": {
        title: "国际小包",
                articles: [
                    {
                        title: "中国邮政小包服务",
                        content: `<p>中国邮政小包是最传统的跨境物流方式，覆盖全球200多个国家。</p>
                        <h2>服务类型</h2>
                        <ul>
                            <li><strong>航空小包</strong>：时效较快</li>
                            <li><strong>水陆路小包</strong>：价格更低</li>
                        </ul>
                        <p>时效7-45天不等，价格便宜，适合低价值商品。</p>`,
                        keywords: ["邮政小包", "航空小包", "水陆路", "全球覆盖", "低价值商品"],
                        readCount: 2890
            },
                    {
                        title: "商业小包与邮政小包区别",
                        content: `<p>商业小包由物流公司提供，与邮政小包有一定差异。</p>
                        <h2>对比分析</h2>
                        <ul>
                            <li>时效更快</li>
                            <li>跟踪信息更详细</li>
                            <li>服务更专业</li>
                            <li>价格稍高</li>
                        </ul>
                        <p>适合对时效有一定要求的中小卖家。</p>`,
                        keywords: ["商业小包", "时效更快", "跟踪详细", "服务专业", "中小卖家"],
                        readCount: 1567
            },
                    {
                        title: "小包发货限制",
                        content: `<p>小包发货有重量、尺寸、价值等多方面限制。</p>
                        <h2>限制条件</h2>
                        <ul>
                            <li><strong>重量限制</strong>：单件不超过2公斤</li>
                            <li><strong>尺寸限制</strong>：长+宽+高不超过90cm，最长边不超过60cm</li>
                            <li><strong>价值限制</strong>：一般不超过20美元</li>
                            <li><strong>禁寄物品</strong>：液体、粉末、电池等</li>
                        </ul>`,
                        keywords: ["重量限制", "尺寸限制", "价值限制", "禁寄物品", "2公斤"],
                        readCount: 3456
            },
                    {
                        title: "小包清关特点",
                        content: `<p>小包清关相对简单，邮政渠道享有一定优势。</p>
                        <h2>清关特点</h2>
                        <ul>
                            <li>邮政渠道享有一定绿色通道</li>
                            <li>查验率较低</li>
                            <li>申报价值低的包裹多数免税放行</li>
                            <li>被税概率相对较低</li>
                        </ul>`,
                        keywords: ["小包清关", "绿色通道", "查验率低", "免税放行", "被税概率"],
                        readCount: 2234
            },
                    {
                        title: "小包成本控制策略",
                        content: `<p>合理控制小包成本可以提高利润率。</p>
                        <h2>成本控制方法</h2>
                        <ol>
                            <li>合理控制包装重量和体积</li>
                            <li>选择合适的物流渠道</li>
                            <li>批量发货降低单票成本</li>
                            <li>合理申报避免关税</li>
                            <li>选择可靠的物流服务商</li>
                        </ol>`,
                        keywords: ["成本控制", "包装优化", "批量发货", "合理申报", "物流服务商"],
                        readCount: 1890
                    }
                ]
    },
    "railway": {
        title: "国际铁路",
                articles: [
                    {
                        title: "中欧班列发展历程",
                        content: `<p>中欧班列自2011年开通以来快速发展，已成为"一带一路"的重要载体。</p>
                        <h2>发展成就</h2>
                        <ul>
                            <li>累计开行超过7万列</li>
                            <li>通达欧洲200多个城市</li>
                            <li>是中欧贸易的重要通道</li>
                        </ul>`,
                        keywords: ["中欧班列", "一带一路", "发展历程", "7万列", "200个城市"],
                        readCount: 1456
            },
                    {
                        title: "中欧班列主要通道",
                        content: `<p>中欧班列有三条主要通道。</p>
                        <h2>三大通道</h2>
                        <div class="content-block">
                            <h4>西部通道</h4>
                            <p>经阿拉山口/霍尔果斯出境，到达德国杜伊斯堡等</p>
                        </div>
                        <div class="content-block">
                            <h4>中部通道</h4>
                            <p>经二连浩特出境，到达波兰马拉舍维奇等</p>
                        </div>
                        <div class="content-block">
                            <h4>东部通道</h4>
                            <p>经满洲里出境，到达俄罗斯莫斯科等</p>
                        </div>`,
                        keywords: ["西部通道", "中部通道", "东部通道", "阿拉山口", "二连浩特", "满洲里"],
                        readCount: 2345
            },
                    {
                        title: "铁路运输优势",
                        content: `<p>铁路运输相比其他方式有独特优势。</p>
                        <h2>优势分析</h2>
                        <ul>
                            <li>相比海运：时效快一倍，15-20天到达欧洲</li>
                            <li>相比空运：成本低50-80%</li>
                            <li>相比公路：运量大，环保性好</li>
                            <li>不受天气影响，运行稳定</li>
                        </ul>`,
                        keywords: ["时效优势", "成本优势", "运量大", "环保", "运行稳定"],
                        readCount: 1890
            },
                    {
                        title: "中欧班列运输流程",
                        content: `<p>中欧班列运输流程全程可跟踪，透明度高。</p>
                        <h2>运输流程</h2>
                        <ol>
                            <li>货物预订</li>
                            <li>集装箱配送</li>
                            <li>装箱报关</li>
                            <li>铁路运输</li>
                            <li>中转换轨</li>
                            <li>到达清关</li>
                            <li>目的地配送</li>
                        </ol>`,
                        keywords: ["运输流程", "集装箱", "装箱报关", "中转换轨", "全程跟踪"],
                        readCount: 1567
            },
                    {
                        title: "铁路运输单证",
                        content: `<p>铁路运输需要准备相应单证。</p>
                        <h2>主要单证</h2>
                        <ul>
                            <li>铁路运单</li>
                            <li>装箱单</li>
                            <li>发票</li>
                            <li>原产地证明</li>
                        </ul>
                        <p><strong>注意</strong>：不同国家的单证要求可能有差异。</p>`,
                        keywords: ["铁路运单", "装箱单", "发票", "原产地证", "单证要求"],
                        readCount: 1234
                    }
                ]
    },
    "truck": {
        title: "国际卡航",
                articles: [
                    {
                        title: "跨境公路运输概述",
                        content: `<p>跨境公路运输主要用于相邻国家间的货物运输。</p>
                        <h2>主要应用</h2>
                        <ul>
                            <li>中国-东南亚</li>
                            <li>中国-中亚</li>
                            <li>欧洲内部</li>
                        </ul>
                        <p>具有灵活性强、门到门服务的特点。</p>`,
                        keywords: ["跨境公路", "相邻国家", "东南亚", "中亚", "门到门"],
                        readCount: 1890
            },
                    {
                        title: "跨境陆运所需证件",
                        content: `<p>跨境陆运需要准备多种证件。</p>
                        <h2>主要证件</h2>
                        <ul>
                            <li>国际道路运输许可证</li>
                            <li>驾驶员国际驾照</li>
                            <li>车辆行驶证</li>
                            <li>货物运输合同</li>
                            <li>装箱单</li>
                            <li>发票</li>
                            <li>保险单</li>
                        </ul>`,
                        keywords: ["运输许可证", "国际驾照", "运输合同", "装箱单", "保险单"],
                        readCount: 1456
            },
                    {
                        title: "跨境运输法规",
                        content: `<p>跨境运输需要遵守各国的相关法规。</p>
                        <h2>主要法规要求</h2>
                        <ul>
                            <li>车辆排放标准</li>
                            <li>驾驶时间限制</li>
                            <li>货物安全固定</li>
                            <li>危险品运输规定</li>
                        </ul>`,
                        keywords: ["交通法规", "环保标准", "排放标准", "驾驶时间", "危险品"],
                        readCount: 1234
            },
                    {
                        title: "主要跨境陆运路线",
                        content: `<p>中国主要的跨境陆运路线及口岸。</p>
                        <h2>主要口岸</h2>
                        <ul>
                            <li><strong>中国-越南</strong>：凭祥口岸、东兴口岸</li>
                            <li><strong>中国-老挝</strong>：磨憨口岸</li>
                            <li><strong>中国-缅甸</strong>：瑞丽口岸</li>
                            <li><strong>中国-哈萨克斯坦</strong>：霍尔果斯口岸、阿拉山口</li>
                        </ul>`,
                        keywords: ["凭祥口岸", "东兴口岸", "磨憨口岸", "瑞丽口岸", "霍尔果斯"],
                        readCount: 1567
            },
                    {
                        title: "陆运成本分析",
                        content: `<p>陆运成本包括多个组成部分。</p>
                        <h2>成本构成</h2>
                        <ul>
                            <li>燃油费</li>
                            <li>过路费</li>
                            <li>司机费用</li>
                            <li>车辆折旧</li>
                            <li>保险费</li>
                            <li>通关费用</li>
                        </ul>
                        <p><strong>建议</strong>：考虑往返货源，避免空载降低成本。</p>`,
                        keywords: ["燃油费", "过路费", "司机费用", "车辆折旧", "往返货源"],
                        readCount: 1890
                    }
                ]
            }
        }
    },
    "sales": {
        title: "货代销售",
        subcategories: {
            "customer-dev": {
                title: "客户开发",
                articles: [
                    {
                        title: "货代客户开发技巧",
                        content: `<p>客户开发是货代销售的第一步，需要掌握正确的方法。</p>
                        <h2>开发渠道</h2>
                        <ul>
                            <li>B2B平台：阿里巴巴、中国制造网等</li>
                            <li>展会：广交会、物流展等</li>
                            <li>社交媒体：LinkedIn、微信等</li>
                            <li>客户转介绍</li>
                        </ul>
                        <h2>开发技巧</h2>
                        <ul>
                            <li>明确目标客户画像</li>
                            <li>准备专业的公司介绍</li>
                            <li>突出差异化优势</li>
                            <li>保持跟进</li>
                        </ul>`,
                        keywords: ["客户开发", "B2B平台", "展会", "社交媒体", "转介绍"],
                        readCount: 3456
                    },
                    {
                        title: "电话销售话术",
                        content: `<p>电话销售是货代常用的客户开发方式。</p>
                        <h2>话术要点</h2>
                        <ul>
                            <li>开场白要简洁有力</li>
                            <li>快速介绍公司优势</li>
                            <li>询问客户需求</li>
                            <li>预约拜访时间</li>
                        </ul>`,
                        keywords: ["电话销售", "话术", "开场白", "预约拜访"],
                        readCount: 2345
                    },
                    {
                        title: "邮件营销策略",
                        content: `<p>邮件是开发海外客户的重要渠道。</p>
                        <h2>邮件策略</h2>
                        <ul>
                            <li>标题要吸引人</li>
                            <li>内容简洁专业</li>
                            <li>附上公司资质</li>
                            <li>设置跟进计划</li>
                        </ul>`,
                        keywords: ["邮件营销", "标题", "内容", "跟进"],
                        readCount: 1890
                    }
                ]
            },
            "quotation": {
                title: "报价技巧",
                articles: [
                    {
                        title: "如何制作专业报价单",
                        content: `<p>专业的报价单能提升客户信任度。</p>
                        <h2>报价单要素</h2>
                        <ul>
                            <li>公司信息和Logo</li>
                            <li>报价有效期</li>
                            <li>详细的费用明细</li>
                            <li>服务条款说明</li>
                            <li>联系方式</li>
                        </ul>`,
                        keywords: ["报价单", "专业", "费用明细", "有效期"],
                        readCount: 2567
                    },
                    {
                        title: "价格谈判技巧",
                        content: `<p>价格谈判是成交的关键环节。</p>
                        <h2>谈判技巧</h2>
                        <ul>
                            <li>了解客户预算</li>
                            <li>强调服务价值</li>
                            <li>灵活调整方案</li>
                            <li>适时让步</li>
                        </ul>`,
                        keywords: ["价格谈判", "预算", "服务价值", "让步"],
                        readCount: 2134
                    }
                ]
            },
            "relationship": {
                title: "客户关系",
                articles: [
                    {
                        title: "客户维护策略",
                        content: `<p>维护好老客户比开发新客户成本更低。</p>
                        <h2>维护方法</h2>
                        <ul>
                            <li>定期回访</li>
                            <li>节日问候</li>
                            <li>及时处理问题</li>
                            <li>提供增值服务</li>
                        </ul>`,
                        keywords: ["客户维护", "回访", "问候", "增值服务"],
                        readCount: 1890
                    },
                    {
                        title: "处理客户投诉",
                        content: `<p>正确处理投诉能转危为机。</p>
                        <h2>处理步骤</h2>
                        <ol>
                            <li>耐心倾听</li>
                            <li>表示歉意</li>
                            <li>调查原因</li>
                            <li>提出解决方案</li>
                            <li>跟进反馈</li>
                        </ol>`,
                        keywords: ["投诉处理", "倾听", "道歉", "解决方案"],
                        readCount: 1567
                    }
                ]
            }
        }
    },
    "english": {
        title: "货代英语",
        subcategories: {
            "vocabulary": {
                title: "专业词汇",
                articles: [
                    {
                        title: "货代常用英语词汇",
                        content: `<p>掌握货代常用英语词汇是开展国际业务的基础。</p>
                        <h2>常用词汇</h2>
                        <ul>
                            <li><strong>Freight Forwarder</strong>：货运代理</li>
                            <li><strong>Consignee</strong>：收货人</li>
                            <li><strong>Shipper</strong>：发货人</li>
                            <li><strong>ETD</strong>：预计离港日期</li>
                            <li><strong>ETA</strong>：预计到港日期</li>
                            <li><strong>FCL</strong>：整箱</li>
                            <li><strong>LCL</strong>：拼箱</li>
                        </ul>`,
                        keywords: ["货代英语", "词汇", "FCL", "LCL", "ETD", "ETA"],
                        readCount: 4567
                    },
                    {
                        title: "航运专业术语",
                        content: `<p>航运专业术语是海运业务的基础。</p>
                        <h2>常用术语</h2>
                        <ul>
                            <li><strong>B/L</strong>：Bill of Lading，提单</li>
                            <li><strong>THC</strong>：Terminal Handling Charge，码头操作费</li>
                            <li><strong>CY</strong>：Container Yard，集装箱堆场</li>
                            <li><strong>CFS</strong>：Container Freight Station，集装箱货运站</li>
                        </ul>`,
                        keywords: ["航运术语", "B/L", "THC", "CY", "CFS"],
                        readCount: 3234
                    },
                    {
                        title: "单证英语术语",
                        content: `<p>单证操作中常用的英语术语。</p>
                        <h2>单证术语</h2>
                        <ul>
                            <li><strong>Commercial Invoice</strong>：商业发票</li>
                            <li><strong>Packing List</strong>：装箱单</li>
                            <li><strong>Certificate of Origin</strong>：原产地证书</li>
                            <li><strong>Insurance Policy</strong>：保险单</li>
                        </ul>`,
                        keywords: ["单证英语", "发票", "装箱单", "原产地证"],
                        readCount: 2890
                    }
                ]
            },
            "communication": {
                title: "商务沟通",
                articles: [
                    {
                        title: "邮件写作模板",
                        content: `<p>专业的商务邮件能提升沟通效率。</p>
                        <h2>邮件模板</h2>
                        <div class="content-block">
                            <h4>询价邮件</h4>
                            <p>Dear Sir/Madam,<br>We would like to inquire about your shipping rates...</p>
                        </div>
                        <div class="content-block">
                            <h4>报价邮件</h4>
                            <p>Dear Customer,<br>Thank you for your inquiry. Please find our quotation...</p>
                        </div>`,
                        keywords: ["邮件写作", "模板", "询价", "报价"],
                        readCount: 3456
                    },
                    {
                        title: "电话沟通技巧",
                        content: `<p>与海外客户电话沟通的技巧。</p>
                        <h2>沟通要点</h2>
                        <ul>
                            <li>说话清晰，语速适中</li>
                            <li>使用简单词汇</li>
                            <li>确认关键信息</li>
                            <li>做好记录</li>
                        </ul>`,
                        keywords: ["电话沟通", "技巧", "清晰", "确认"],
                        readCount: 2345
                    }
                ]
            }
        }
    },
    "customs": {
        title: "报关报检",
                articles: [
                    {
                        title: "出口报关流程",
                content: `<p>出口报关是货物出口的必要环节。</p>
                <h2>报关流程</h2>
                <ol>
                    <li>报关委托</li>
                    <li>制作报关单</li>
                    <li>提交单据</li>
                    <li>海关审核</li>
                    <li>缴税（如需要）</li>
                    <li>查验（如需要）</li>
                    <li>放行</li>
                    <li>提取放行条</li>
                </ol>`,
                        keywords: ["出口报关", "报关委托", "报关单", "海关审核", "放行条"],
                        readCount: 4123
                    },
                    {
                        title: "出口退税政策",
                content: `<p>出口退税是国家鼓励出口的政策。</p>
                <h2>退税流程</h2>
                <ol>
                    <li>取得报关单</li>
                    <li>收汇核销</li>
                    <li>开具发票</li>
                    <li>申报退税</li>
                    <li>审核</li>
                    <li>退税</li>
                </ol>
                <p>退税率根据商品不同为0%-17%。</p>`,
                        keywords: ["出口退税", "退税率", "报关单", "收汇核销", "申报退税"],
                        readCount: 3567
            },
                    {
                        title: "进口报关注意事项",
                content: `<p>进口报关需要注意多个要点。</p>
                <h2>注意事项</h2>
                <ul>
                    <li>准确归类商品编码</li>
                    <li>如实申报价格</li>
                    <li>准备齐全单据</li>
                    <li>了解税率政策</li>
                    <li>关注检验检疫要求</li>
                </ul>`,
                        keywords: ["进口报关", "商品编码", "申报价格", "税率政策", "检验检疫"],
                        readCount: 2890
            },
                    {
                        title: "出入境检验检疫",
                content: `<p>法检商品必须经过出入境检验检疫。</p>
                <h2>检验类型</h2>
                <ul>
                    <li>动植物检疫</li>
                    <li>食品检验</li>
                    <li>工业品检验</li>
                    <li>医疗器械检验</li>
                </ul>
                <p>需要提前申报，取得通关单后方可报关。</p>`,
                        keywords: ["检验检疫", "法检商品", "动植物检疫", "食品检验", "通关单"],
                        readCount: 2234
                    }
                ]
    },
    "warehouse": {
        title: "仓储管理",
                articles: [
                    {
                        title: "海外仓优势分析",
                content: `<p>海外仓是跨境电商的重要基础设施。</p>
                <h2>海外仓优势</h2>
                <ul>
                    <li>缩短配送时间</li>
                    <li>降低物流成本</li>
                    <li>提升客户体验</li>
                    <li>本土化配送</li>
                    <li>退换货便利</li>
                </ul>
                <h2>适合商品</h2>
                <p>销量稳定、标准化商品、高客单价产品。</p>`,
                        keywords: ["海外仓", "配送时间", "物流成本", "客户体验", "本土化"],
                        readCount: 4567
                    },
                    {
                        title: "主要海外仓服务商",
                content: `<p>各地区主要的海外仓服务商。</p>
                <h2>服务商列表</h2>
                <ul>
                    <li><strong>美国</strong>：亚马逊FBA、万国邮联、中外运</li>
                    <li><strong>欧洲</strong>：亚马逊FBA、递四方、出口易</li>
                    <li><strong>日本</strong>：乐天、亚马逊、佐川急便</li>
                </ul>`,
                        keywords: ["美国海外仓", "欧洲海外仓", "日本海外仓", "亚马逊FBA", "递四方"],
                        readCount: 3234
            },
                    {
                        title: "保税仓库类型",
                content: `<p>保税仓库是享受保税政策的特殊仓库。</p>
                <h2>仓库类型</h2>
                <ul>
                    <li><strong>公用型保税仓库</strong>：面向社会公开</li>
                    <li><strong>自用型保税仓库</strong>：企业自用</li>
                    <li><strong>专用型保税仓库</strong>：特定商品</li>
                </ul>
                <p>可以存储进口货物暂缓缴税、出口货物退税、转口贸易等。</p>`,
                        keywords: ["保税仓库", "公用型", "自用型", "专用型", "暂缓缴税"],
                        readCount: 1890
            },
                    {
                        title: "WMS系统功能",
                content: `<p>仓储管理系统（WMS）是现代仓储的核心。</p>
                <h2>主要功能</h2>
                <ul>
                    <li>入库管理</li>
                    <li>出库管理</li>
                    <li>库存管理</li>
                    <li>订单管理</li>
                    <li>拣货管理</li>
                    <li>包装管理</li>
                    <li>运输管理</li>
                    <li>报表统计</li>
                </ul>`,
                        keywords: ["WMS系统", "入库管理", "库存管理", "订单管理", "拣货管理"],
                        readCount: 2456
                    }
                ]
    }
};

// ===== DOM 元素 =====
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const homeContent = document.getElementById('homeContent');
const articleContent = document.getElementById('articleContent');
const searchResults = document.getElementById('searchResults');
const searchDropdown = document.getElementById('searchDropdown');

// ===== 当前状态 =====
let currentArticle = null;

// ===== 浏览量管理 - 使用CountAPI实现真实全局计数 =====
const NAMESPACE = 'huodai-knowledge-base';

// 生成安全的key（只保留字母数字和连字符）
function sanitizeKey(title) {
    return encodeURIComponent(title).replace(/%/g, '-').substring(0, 64);
}

// 增加浏览量并获取当前值（真实API调用）
async function incrementViewCount(articleTitle) {
    const key = sanitizeKey(articleTitle);
    try {
        const response = await fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${key}`);
        const data = await response.json();
        return data.value || 1;
    } catch (error) {
        console.warn('CountAPI error:', error);
        // 降级到本地存储
    const views = JSON.parse(localStorage.getItem('articleViews') || '{}');
    views[articleTitle] = (views[articleTitle] || 0) + 1;
    localStorage.setItem('articleViews', JSON.stringify(views));
    return views[articleTitle];
    }
}

// 更新显示浏览量
async function updateViewCountDisplay(articleTitle) {
    const metaEl = document.getElementById('articleMeta');
    metaEl.innerHTML = `👁️ ...`;
    
    try {
        const count = await incrementViewCount(articleTitle);
        metaEl.innerHTML = `👁️ ${count}`;
    } catch (error) {
        metaEl.innerHTML = `👁️ 1`;
    }
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initNavigation();
    initSearch();
    initSidebar();
    initQuickLinks();
});

// ===== 主题切换 =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
}

// ===== 导航初始化 =====
function initNavigation() {
    // 一级导航组点击
    document.querySelectorAll('.nav-group-title').forEach(title => {
        title.addEventListener('click', () => {
            const group = title.getAttribute('data-group');
            const items = document.querySelector(`.nav-group-items[data-group="${group}"]`);
            
            title.classList.toggle('expanded');
            items.classList.toggle('expanded');
        });
    });
    
    // 二级导航组点击
    document.querySelectorAll('.nav-subgroup-title').forEach(title => {
        title.addEventListener('click', (e) => {
            e.stopPropagation();
            const subgroup = title.getAttribute('data-subgroup');
            const items = document.querySelector(`.nav-subgroup-items[data-subgroup="${subgroup}"]`);
            
            // 如果有目录大纲数据，显示目录页面，不展开子项
            if (categoryOutlineData[subgroup]) {
                showCategoryOutline(subgroup);
                
                // 更新侧边栏活跃状态
                document.querySelectorAll('.sidebar-nav .nav-link').forEach(l => l.classList.remove('active'));
                document.querySelectorAll('.nav-subgroup-title').forEach(t => t.classList.remove('active'));
                title.classList.add('active');
                
                // 收起子项（右侧已有详细目录，左侧不需要重复显示）
                title.classList.remove('expanded');
                items.classList.remove('expanded');
            } else {
                // 没有目录大纲的分类，正常展开/收起
            title.classList.toggle('expanded');
            items.classList.toggle('expanded');
            }
        });
    });

    // 分类目录链接点击（如FBA头程）
    document.querySelectorAll('.nav-category-link[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const categoryKey = link.getAttribute('data-category');
            
            if (categoryOutlineData[categoryKey]) {
                showCategoryOutline(categoryKey);
                
                // 更新活跃状态
                document.querySelectorAll('.sidebar-nav .nav-link').forEach(l => l.classList.remove('active'));
                document.querySelectorAll('.nav-subgroup-title').forEach(t => t.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // 大洲链接点击
    document.querySelectorAll('.sidebar-nav .nav-link[data-continent]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const continentKey = link.getAttribute('data-continent');
            showContinentCountries(continentKey);
            
            // 更新活跃状态
            document.querySelectorAll('.sidebar-nav .nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // 移动端关闭侧边栏
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });

    // 国家链接点击（在内容区，不在侧边栏）
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('country-link')) {
            e.preventDefault();
            const countryKey = e.target.getAttribute('data-country-key');
            const continentKey = e.target.getAttribute('data-continent-key');
            showCountryDetail(continentKey, countryKey);
        }
    });
    
    // 文章链接点击
    document.querySelectorAll('.sidebar-nav .nav-link[data-article]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const articleTitle = link.getAttribute('data-article');
            showArticle(articleTitle);
            
            // 更新活跃状态
            document.querySelectorAll('.sidebar-nav .nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // 移动端关闭侧边栏
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });
    
    // 默认展开第一个导航组
    const firstGroup = document.querySelector('.nav-group-title');
    if (firstGroup) {
        firstGroup.classList.add('expanded');
        const group = firstGroup.getAttribute('data-group');
        document.querySelector(`.nav-group-items[data-group="${group}"]`).classList.add('expanded');
    }
}

// ===== 搜索功能 =====
function initSearch() {
    // 搜索输入事件
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length > 0) {
            performSearch(query);
            showSearchDropdown();
        } else {
            hideSearchDropdown();
        }
    });
    
    // 聚焦时如果有内容则显示结果
    searchInput.addEventListener('focus', () => {
        const query = searchInput.value.trim();
        if (query.length > 0) {
            performSearch(query);
            showSearchDropdown();
        }
    });
    
    // 快捷键聚焦搜索框
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
        if (e.key === 'Escape') {
            hideSearchDropdown();
            searchInput.blur();
        }
    });
    
    // 点击外部关闭下拉框
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper')) {
            hideSearchDropdown();
        }
    });
}

function showSearchDropdown() {
    searchDropdown.classList.add('active');
}

function hideSearchDropdown() {
    searchDropdown.classList.remove('active');
}

function performSearch(query) {
    const results = searchKnowledge(query);
    
    if (results.length === 0) {
        searchDropdown.innerHTML = '<div class="search-dropdown-empty">未找到相关结果</div>';
        return;
    }
    
    // 分组显示：文章、Disposition Codes、Port Codes
    let html = '';
    const articles = results.filter(r => r.type === 'article');
    const dcResults = results.filter(r => r.type === 'disposition');
    const portResults = results.filter(r => r.type === 'port');
    
    if (articles.length > 0) {
        html += '<div class="search-group-title">📚 文章</div>';
        html += articles.slice(0, 5).map(result => `
        <div class="search-dropdown-item" onclick="selectSearchResult('${result.article.title}')">
            <span class="search-dropdown-icon">📄</span>
            <div class="search-dropdown-text">
                <div class="search-dropdown-title">${result.article.title}</div>
                <div class="search-dropdown-path">${result.categoryTitle}${result.subcategoryTitle ? ' > ' + result.subcategoryTitle : ''}</div>
            </div>
        </div>
    `).join('');
    }
    
    if (dcResults.length > 0) {
        html += '<div class="search-group-title">🏛️ CBP Disposition Codes</div>';
        html += dcResults.slice(0, 5).map(result => `
            <div class="search-dropdown-item" onclick="goToDispositionCode('${result.code}')">
                <span class="search-dropdown-icon search-code-badge">${result.code}</span>
                <div class="search-dropdown-text">
                    <div class="search-dropdown-title">${result.name}</div>
                    <div class="search-dropdown-path">${result.nameCn || '美国海关 > CBP Disposition Codes'}</div>
                </div>
            </div>
        `).join('');
    }
    
    if (portResults.length > 0) {
        html += '<div class="search-group-title">🚢 US CBP Port Codes</div>';
        html += portResults.slice(0, 5).map(result => `
            <div class="search-dropdown-item" onclick="goToPortCode('${result.code}')">
                <span class="search-dropdown-icon search-code-badge">${result.code}</span>
                <div class="search-dropdown-text">
                    <div class="search-dropdown-title">${result.name}</div>
                    <div class="search-dropdown-path">${result.state || ''} ${result.district || ''}</div>
                </div>
            </div>
        `).join('');
    }
    
    searchDropdown.innerHTML = html;
}

// 跳转到Disposition Code
function goToDispositionCode(code) {
    hideSearchDropdown();
    showArticle('CBP Disposition Codes');
    setTimeout(() => {
        const input = document.getElementById('dcSearchInput');
        if (input) {
            input.value = code;
            filterDispositionCodes();
        }
    }, 200);
}

// 跳转到Port Code
function goToPortCode(code) {
    hideSearchDropdown();
    showArticle('US CBP Port Codes');
    setTimeout(() => {
        const input = document.getElementById('portSearch');
        if (input) {
            input.value = code;
            filterPortCodes();
        }
    }, 200);
}

function searchKnowledge(query) {
    const results = [];
    query = query.toLowerCase();
    
    // 搜索文章
    Object.entries(knowledgeBase).forEach(([catKey, category]) => {
        if (category.subcategories) {
            Object.entries(category.subcategories).forEach(([subKey, subcategory]) => {
            subcategory.articles.forEach(article => {
                    if (matchArticle(article, query)) {
                    results.push({
                        type: 'article',
                        categoryTitle: category.title,
                        subcategoryTitle: subcategory.title,
                            article: article
                    });
                }
            });
        });
        } else if (category.articles) {
            category.articles.forEach(article => {
                if (matchArticle(article, query)) {
                    results.push({
                        type: 'article',
                        categoryTitle: category.title,
                        subcategoryTitle: null,
                        article: article
                    });
                }
            });
        }
    });
    
    // 搜索 Disposition Codes
    if (typeof dispositionCodes !== 'undefined') {
        dispositionCodes.forEach(dc => {
            if (dc.code.toLowerCase().includes(query) ||
                dc.name.toLowerCase().includes(query) ||
                dc.description.toLowerCase().includes(query) ||
                (dc.nameCn && dc.nameCn.includes(query)) ||
                (dc.descCn && dc.descCn.includes(query))) {
                results.push({
                    type: 'disposition',
                    code: dc.code,
                    name: dc.name,
                    nameCn: dc.nameCn,
                    description: dc.description
                });
            }
        });
    }
    
    // 搜索 Port Codes
    if (typeof usPortCodes !== 'undefined') {
        usPortCodes.forEach(port => {
            if (port.code.toLowerCase().includes(query) ||
                port.name.toLowerCase().includes(query) ||
                (port.state && port.state.toLowerCase().includes(query)) ||
                (port.district && port.district.toLowerCase().includes(query))) {
                results.push({
                    type: 'port',
                    code: port.code,
                    name: port.name,
                    state: port.state,
                    district: port.district
                });
            }
        });
    }
    
    return results;
}

function matchArticle(article, query) {
    return article.title.toLowerCase().includes(query) ||
           article.content.toLowerCase().includes(query) ||
           article.keywords.some(k => k.toLowerCase().includes(query));
}

function selectSearchResult(title) {
    hideSearchDropdown();
    searchInput.value = '';
    searchInput.blur();
    showArticle(title);
}

// ===== 侧边栏 =====
function initSidebar() {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
    
    // 点击外部关闭侧边栏
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            !sidebarToggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
}

// ===== 快速链接 =====
function initQuickLinks() {
    document.querySelectorAll('.quick-link[data-article]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const articleTitle = link.getAttribute('data-article');
            showArticle(articleTitle);
        });
    });
}

// ===== 显示大洲国家列表 =====
function showContinentCountries(continentKey) {
    const continent = knowledgeBase.countries.continents[continentKey];
    if (!continent) return;
    
    currentArticle = null;
    
    // 隐藏首页，显示文章区
    homeContent.style.display = 'none';
    searchResults.style.display = 'none';
    articleContent.style.display = 'block';
    
    let contentHTML = '';
    
    // 检查是否有地区分组
    if (continent.regions) {
        // 按地区分组显示
        contentHTML = Object.entries(continent.regions).map(([regionKey, region]) => {
            const countriesHTML = region.countries.map(countryKey => {
                const country = continent.countries[countryKey];
                if (!country) return '';
                return `
                    <div class="country-card">
                        <a href="#" class="country-link" data-continent-key="${continentKey}" data-country-key="${countryKey}">${country.name}</a>
        </div>
                `;
            }).join('');
            
            return `
                <div class="region-section">
                    <h2 class="region-title">${region.name}</h2>
                    <div class="countries-grid">
                        ${countriesHTML}
                    </div>
                    </div>
            `;
        }).join('');
    } else {
        // 无地区分组，直接列出国家
        const countriesHTML = Object.entries(continent.countries).map(([key, country]) => {
            return `
                <div class="country-card">
                    <a href="#" class="country-link" data-continent-key="${continentKey}" data-country-key="${key}">${country.name}</a>
                </div>
            `;
        }).join('');
        
        contentHTML = `
            <div class="countries-grid">
                ${countriesHTML}
        </div>
    `;
    }
    
    // 填充内容
    document.getElementById('articleTitle').style.display = '';
    document.getElementById('articleTitle').textContent = continent.name;
    
    // 添加大洲介绍
    const introHTML = continent.intro ? `<p class="continent-intro">${continent.intro}</p>` : '';
    document.getElementById('articleBody').innerHTML = introHTML + contentHTML;
    
    // 显示全局说明（仅在亚洲页面顶部显示）
    const globalDescEl = document.getElementById('globalDescription');
    if (continentKey === 'asia' && knowledgeBase.countries.description) {
        globalDescEl.textContent = knowledgeBase.countries.description;
        globalDescEl.style.display = 'block';
    } else {
        globalDescEl.style.display = 'none';
    }
    
    // 面包屑
    document.getElementById('breadcrumb').innerHTML = `
        <a href="#" onclick="showHome()">首页</a>
        <span class="separator">/</span>
        <span>国家城市</span>
        <span class="separator">/</span>
        <span>${continent.name}</span>
    `;
    
    // 标签和元信息 - 清空并隐藏
    document.getElementById('articleTags').innerHTML = '';
    document.getElementById('articleMeta').innerHTML = '';
    document.querySelector('.article-footer').style.display = 'none';
    document.getElementById('articleNav').innerHTML = '';
    
    // 滚动到顶部
    window.scrollTo(0, 0);
}

// ===== 显示国家详情 =====
function showCountryDetail(continentKey, countryKey) {
    const continent = knowledgeBase.countries.continents[continentKey];
    if (!continent) return;
    
    const country = continent.countries[countryKey];
    if (!country) return;
    
    currentArticle = null;
    
    // 隐藏首页，显示文章区
    homeContent.style.display = 'none';
    searchResults.style.display = 'none';
    articleContent.style.display = 'block';
    
    // 隐藏全局说明
    document.getElementById('globalDescription').style.display = 'none';
    
    // 浏览量key
    const viewCountKey = `${country.name}`;
    
    // 隐藏标题（标签页里已有国家名）
    document.getElementById('articleTitle').style.display = 'none';
    
    // 判断是否有新的数据结构（带标签页）
    if (country.airports || country.ports) {
        // 新版：标签页布局
        document.getElementById('articleBody').innerHTML = generateCountryTabs(country);
    } else {
        // 旧版：简单内容
        document.getElementById('articleBody').innerHTML = country.content || '';
    }
    
    // 面包屑
    document.getElementById('breadcrumb').innerHTML = `
        <a href="#" onclick="showHome()">首页</a>
        <span class="separator">/</span>
        <a href="#" onclick="showContinentCountries('${continentKey}')">国家城市 / ${continent.name}</a>
        <span class="separator">/</span>
        <span>${country.name}</span>
    `;
    
    // 隐藏标签和底部
    document.getElementById('articleTags').innerHTML = '';
    document.querySelector('.article-footer').style.display = 'none';
    
    // 元信息 - 使用真实计数API
    updateViewCountDisplay(viewCountKey);
    
    // 显示页脚
    document.querySelector('.article-footer').style.display = '';
    document.getElementById('articleNav').innerHTML = '';
    
    // 滚动到顶部
    window.scrollTo(0, 0);
}

// ===== 分类目录大纲数据 =====
const categoryOutlineData = {
    // ===== 专业知识 =====
    "air-freight": {
        title: "国际空运",
        sections: [
            {
                title: "空运基础",
                items: [
                    { name: "国际空运基础知识", article: "国际空运基础知识" },
                    { name: "空运运输流程", article: "国际空运基础知识" },
                    { name: "空运单证介绍", article: "国际空运基础知识" },
                    { name: "空运货物包装要求", article: "国际空运基础知识" }
                ]
            },
            {
                title: "航空公司",
                items: [
                    { name: "主要航空公司对比", article: "主要航空公司对比" },
                    { name: "航线网络分析", article: "主要航空公司对比" },
                    { name: "航司服务特点", article: "主要航空公司对比" },
                    { name: "航司选择指南", article: "主要航空公司对比" }
                ]
            },
            {
                title: "价格体系",
                items: [
                    { name: "空运计费重量详解", article: "空运计费重量详解" },
                    { name: "燃油附加费", article: "空运计费重量详解" },
                    { name: "空运报价技巧", article: "空运计费重量详解" },
                    { name: "成本优化策略", article: "空运计费重量详解" }
                ]
            },
            {
                title: "操作流程",
                items: [
                    { name: "空运出口操作流程", article: "空运出口操作流程" },
                    { name: "订舱与配载", article: "空运出口操作流程" },
                    { name: "机场操作规范", article: "空运出口操作流程" },
                    { name: "航班跟踪查询", article: "空运出口操作流程" }
                ]
            },
            {
                title: "危险品运输",
                items: [
                    { name: "危险品分类及包装", article: "危险品分类及包装" },
                    { name: "危险品申报流程", article: "危险品分类及包装" },
                    { name: "危险品运输限制", article: "危险品分类及包装" },
                    { name: "锂电池运输规范", article: "危险品分类及包装" }
                ]
            }
        ]
    },
    "express": {
        title: "国际快递",
        sections: [
            {
                title: "快递公司",
                items: [
                    { name: "四大快递公司详解", article: "四大快递公司详解" },
                    { name: "DHL服务介绍", article: "四大快递公司详解" },
                    { name: "FedEx服务介绍", article: "四大快递公司详解" },
                    { name: "UPS服务介绍", article: "四大快递公司详解" },
                    { name: "TNT服务介绍", article: "四大快递公司详解" }
                ]
            },
            {
                title: "计费方式",
                items: [
                    { name: "快递计费规则", article: "快递计费规则" },
                    { name: "体积重量计算", article: "快递计费规则" },
                    { name: "附加费说明", article: "快递计费规则" },
                    { name: "价格对比分析", article: "快递计费规则" }
                ]
            },
            {
                title: "限制物品",
                items: [
                    { name: "快递禁运物品清单", article: "快递禁运物品清单" },
                    { name: "敏感货物处理", article: "快递禁运物品清单" },
                    { name: "各国限制物品", article: "快递禁运物品清单" },
                    { name: "包装要求规范", article: "快递禁运物品清单" }
                ]
            },
            {
                title: "跟踪查询",
                items: [
                    { name: "快递跟踪系统使用", article: "快递跟踪系统使用" },
                    { name: "异常状态处理", article: "快递跟踪系统使用" },
                    { name: "签收确认流程", article: "快递跟踪系统使用" },
                    { name: "丢件索赔流程", article: "快递跟踪系统使用" }
                ]
            },
            {
                title: "清关指南",
                items: [
                    { name: "快递清关流程", article: "快递清关流程" },
                    { name: "清关资料准备", article: "快递清关流程" },
                    { name: "关税计算方式", article: "快递清关流程" },
                    { name: "清关延误处理", article: "快递清关流程" }
                ]
            }
        ]
    },
    "fba": {
        title: "FBA头程",
        sections: [
            {
                title: "FBA入门",
                items: [
                    { name: "什么是FBA服务", article: "什么是FBA服务" },
                    { name: "FBA服务优势分析", article: "什么是FBA服务" },
                    { name: "FBA与自发货对比", article: "什么是FBA服务" },
                    { name: "FBA适用卖家类型", article: "什么是FBA服务" },
                    { name: "FBA入仓流程", article: "什么是FBA服务" },
                    { name: "新卖家FBA指南", article: "什么是FBA服务" }
                ]
            },
            {
                title: "发货方式",
                items: [
                    { name: "海运头程详解", article: "FBA头程运输方式对比" },
                    { name: "空运头程详解", article: "FBA头程运输方式对比" },
                    { name: "快递头程详解", article: "FBA头程运输方式对比" },
                    { name: "铁路头程介绍", article: "FBA头程运输方式对比" },
                    { name: "运输方式对比", article: "FBA头程运输方式对比" },
                    { name: "头程时效分析", article: "FBA头程运输方式对比" },
                    { name: "头程成本计算", article: "FBA头程运输方式对比" },
                    { name: "旺季发货策略", article: "FBA头程运输方式对比" }
                ]
            },
            {
                title: "标签要求",
                items: [
                    { name: "FNSKU标签说明", article: "FBA标签制作指南" },
                    { name: "商品条码要求", article: "FBA标签制作指南" },
                    { name: "外箱标签规范", article: "FBA标签制作指南" },
                    { name: "标签尺寸标准", article: "FBA标签制作指南" },
                    { name: "标签打印指南", article: "FBA标签制作指南" },
                    { name: "混装箱标签", article: "FBA标签制作指南" }
                ]
            },
            {
                title: "包装标准",
                items: [
                    { name: "纸箱尺寸要求", article: "FBA包装要求详解" },
                    { name: "重量限制规定", article: "FBA包装要求详解" },
                    { name: "包装材料选择", article: "FBA包装要求详解" },
                    { name: "禁止包装类型", article: "FBA包装要求详解" },
                    { name: "易碎品包装", article: "FBA包装要求详解" },
                    { name: "液体商品包装", article: "FBA包装要求详解" }
                ]
            },
            {
                title: "费用分析",
                items: [
                    { name: "FBA配送费", article: "FBA费用详细解析" },
                    { name: "仓储费计算", article: "FBA费用详细解析" },
                    { name: "长期仓储费", article: "FBA费用详细解析" },
                    { name: "移除费用", article: "FBA费用详细解析" },
                    { name: "退货处理费", article: "FBA费用详细解析" },
                    { name: "费用优化策略", article: "FBA费用详细解析" },
                    { name: "各站点费用对比", article: "FBA费用详细解析" },
                    { name: "隐藏费用避坑", article: "FBA费用详细解析" }
                ]
            },
            {
                title: "美国海关",
                items: [
                    { name: "US CBP Port Codes", article: "US CBP Port Codes" },
                    { name: "美国海关清关流程", article: "美国海关清关流程" },
                    { name: "CBP申报要求", article: "CBP申报要求" },
                    { name: "ISF申报指南", article: "ISF申报指南" },
                    { name: "CBP Disposition Codes", article: "CBP Disposition Codes" }
                ]
            }
        ]
    },
    "sea-freight": {
        title: "国际海运",
        sections: [
            {
                title: "海运基础",
                items: [
                    { name: "海运概述与发展历史", article: "海运概述与发展历史" },
                    { name: "集装箱类型介绍", article: "海运概述与发展历史" },
                    { name: "船舶类型分类", article: "海运概述与发展历史" },
                    { name: "主要航线分布", article: "海运概述与发展历史" }
                ]
            },
            {
                title: "订舱操作",
                items: [
                    { name: "海运订舱流程详解", article: "海运订舱流程详解" },
                    { name: "舱位预订技巧", article: "海运订舱流程详解" },
                    { name: "拼箱与整箱区别", article: "海运订舱流程详解" },
                    { name: "船期查询方法", article: "海运订舱流程详解" }
                ]
            },
            {
                title: "单证处理",
                items: [
                    { name: "海运提单详解", article: "海运提单详解" },
                    { name: "提单类型区分", article: "海运提单详解" },
                    { name: "电放提单操作", article: "海运提单详解" },
                    { name: "单证制作要点", article: "海运提单详解" }
                ]
            },
            {
                title: "费用计算",
                items: [
                    { name: "海运费用构成", article: "海运费用构成" },
                    { name: "运费计算方式", article: "海运费用构成" },
                    { name: "港杂费明细", article: "海运费用构成" },
                    { name: "报价单制作", article: "海运费用构成" }
                ]
            },
            {
                title: "货运保险",
                items: [
                    { name: "海运保险种类", article: "海运保险种类" },
                    { name: "保险费率计算", article: "海运保险种类" },
                    { name: "理赔流程说明", article: "海运保险种类" },
                    { name: "常见索赔案例", article: "海运保险种类" }
                ]
            }
        ]
    },
    "dedicated-line": {
        title: "国际专线",
        sections: [
            {
                title: "欧洲专线",
                items: [
                    { name: "欧洲专线特点", article: "欧洲专线特点" },
                    { name: "英国专线详解", article: "欧洲专线特点" },
                    { name: "德国专线详解", article: "欧洲专线特点" },
                    { name: "法国专线详解", article: "欧洲专线特点" }
                ]
            },
            {
                title: "美国专线",
                items: [
                    { name: "美国专线详解", article: "美国专线详解" },
                    { name: "美西线路分析", article: "美国专线详解" },
                    { name: "美东线路分析", article: "美国专线详解" },
                    { name: "美国清关要点", article: "美国专线详解" }
                ]
            },
            {
                title: "东南亚专线",
                items: [
                    { name: "东南亚专线市场", article: "东南亚专线市场" },
                    { name: "泰国专线介绍", article: "东南亚专线市场" },
                    { name: "越南专线介绍", article: "东南亚专线市场" },
                    { name: "马来西亚专线", article: "东南亚专线市场" }
                ]
            },
            {
                title: "中东专线",
                items: [
                    { name: "中东专线介绍", article: "中东专线介绍" },
                    { name: "阿联酋专线", article: "中东专线介绍" },
                    { name: "沙特专线详解", article: "中东专线介绍" },
                    { name: "中东清关政策", article: "中东专线介绍" }
                ]
            },
            {
                title: "专线选择",
                items: [
                    { name: "如何选择合适的专线", article: "如何选择合适的专线" },
                    { name: "专线服务商对比", article: "如何选择合适的专线" },
                    { name: "时效与成本平衡", article: "如何选择合适的专线" },
                    { name: "专线常见问题", article: "如何选择合适的专线" }
                ]
            }
        ]
    },
    "small-package": {
        title: "国际小包",
        sections: [
            {
                title: "邮政小包",
                items: [
                    { name: "中国邮政小包服务", article: "中国邮政小包服务" },
                    { name: "邮政小包特点", article: "中国邮政小包服务" },
                    { name: "适用产品类型", article: "中国邮政小包服务" },
                    { name: "时效与追踪", article: "中国邮政小包服务" }
                ]
            },
            {
                title: "商业小包",
                items: [
                    { name: "商业小包与邮政小包区别", article: "商业小包与邮政小包区别" },
                    { name: "商业小包服务商", article: "商业小包与邮政小包区别" },
                    { name: "价格对比分析", article: "商业小包与邮政小包区别" },
                    { name: "服务选择建议", article: "商业小包与邮政小包区别" }
                ]
            },
            {
                title: "发货规则",
                items: [
                    { name: "小包发货限制", article: "小包发货限制" },
                    { name: "重量尺寸限制", article: "小包发货限制" },
                    { name: "禁运物品清单", article: "小包发货限制" },
                    { name: "包装要求说明", article: "小包发货限制" }
                ]
            },
            {
                title: "清关流程",
                items: [
                    { name: "小包清关特点", article: "小包清关特点" },
                    { name: "各国关税政策", article: "小包清关特点" },
                    { name: "清关延误处理", article: "小包清关特点" },
                    { name: "退件处理流程", article: "小包清关特点" }
                ]
            },
            {
                title: "成本优化",
                items: [
                    { name: "小包成本控制策略", article: "小包成本控制策略" },
                    { name: "批量发货优惠", article: "小包成本控制策略" },
                    { name: "渠道选择技巧", article: "小包成本控制策略" },
                    { name: "成本核算方法", article: "小包成本控制策略" }
                ]
            }
        ]
    },
    "railway": {
        title: "国际铁路",
        sections: [
            {
                title: "中欧班列",
                items: [
                    { name: "中欧班列发展历程", article: "中欧班列发展历程" },
                    { name: "班列线路介绍", article: "中欧班列发展历程" },
                    { name: "班列运营模式", article: "中欧班列发展历程" },
                    { name: "发展趋势分析", article: "中欧班列发展历程" }
                ]
            },
            {
                title: "运输路线",
                items: [
                    { name: "中欧班列主要通道", article: "中欧班列主要通道" },
                    { name: "西部通道详解", article: "中欧班列主要通道" },
                    { name: "中部通道详解", article: "中欧班列主要通道" },
                    { name: "东部通道详解", article: "中欧班列主要通道" }
                ]
            },
            {
                title: "优势分析",
                items: [
                    { name: "铁路运输优势", article: "铁路运输优势" },
                    { name: "与海运空运对比", article: "铁路运输优势" },
                    { name: "适用货物类型", article: "铁路运输优势" },
                    { name: "季节性因素", article: "铁路运输优势" }
                ]
            },
            {
                title: "操作流程",
                items: [
                    { name: "中欧班列运输流程", article: "中欧班列运输流程" },
                    { name: "订舱与装箱", article: "中欧班列运输流程" },
                    { name: "口岸换装操作", article: "中欧班列运输流程" },
                    { name: "到站提货流程", article: "中欧班列运输流程" }
                ]
            },
            {
                title: "单证要求",
                items: [
                    { name: "铁路运输单证", article: "铁路运输单证" },
                    { name: "铁路运单介绍", article: "铁路运输单证" },
                    { name: "报关单证准备", article: "铁路运输单证" },
                    { name: "单证常见问题", article: "铁路运输单证" }
                ]
            }
        ]
    },
    "truck": {
        title: "国际卡航",
        sections: [
            {
                title: "跨境陆运",
                items: [
                    { name: "跨境公路运输概述", article: "跨境公路运输概述" },
                    { name: "卡航运输特点", article: "跨境公路运输概述" },
                    { name: "适用场景分析", article: "跨境公路运输概述" },
                    { name: "优劣势对比", article: "跨境公路运输概述" }
                ]
            },
            {
                title: "运输单证",
                items: [
                    { name: "跨境陆运所需证件", article: "跨境陆运所需证件" },
                    { name: "CMR运单介绍", article: "跨境陆运所需证件" },
                    { name: "ATA单证册", article: "跨境陆运所需证件" },
                    { name: "司机证件要求", article: "跨境陆运所需证件" }
                ]
            },
            {
                title: "法规要求",
                items: [
                    { name: "跨境运输法规", article: "跨境运输法规" },
                    { name: "各国通行规定", article: "跨境运输法规" },
                    { name: "车辆标准要求", article: "跨境运输法规" },
                    { name: "环保法规遵守", article: "跨境运输法规" }
                ]
            },
            {
                title: "主要路线",
                items: [
                    { name: "主要跨境陆运路线", article: "主要跨境陆运路线" },
                    { name: "中亚线路详解", article: "主要跨境陆运路线" },
                    { name: "东南亚线路", article: "主要跨境陆运路线" },
                    { name: "口岸信息汇总", article: "主要跨境陆运路线" }
                ]
            },
            {
                title: "成本构成",
                items: [
                    { name: "陆运成本分析", article: "陆运成本分析" },
                    { name: "运费计算方式", article: "陆运成本分析" },
                    { name: "附加费用说明", article: "陆运成本分析" },
                    { name: "成本优化建议", article: "陆运成本分析" }
                ]
            }
        ]
    },
    "customs": {
        title: "报关报检",
        sections: [
            {
                title: "出口报关",
                items: [
                    { name: "出口报关流程", article: "出口报关流程" },
                    { name: "报关资料准备", article: "出口报关流程" },
                    { name: "报关单填写", article: "出口报关流程" },
                    { name: "海关查验应对", article: "出口报关流程" }
                ]
            },
            {
                title: "出口退税",
                items: [
                    { name: "出口退税政策", article: "出口退税政策" },
                    { name: "退税流程详解", article: "出口退税政策" },
                    { name: "退税资料准备", article: "出口退税政策" },
                    { name: "退税常见问题", article: "出口退税政策" }
                ]
            },
            {
                title: "进口报关",
                items: [
                    { name: "进口报关注意事项", article: "进口报关注意事项" },
                    { name: "进口关税计算", article: "进口报关注意事项" },
                    { name: "进口许可证办理", article: "进口报关注意事项" },
                    { name: "清关时效提升", article: "进口报关注意事项" }
                ]
            },
            {
                title: "检验检疫",
                items: [
                    { name: "出入境检验检疫", article: "出入境检验检疫" },
                    { name: "商检流程说明", article: "出入境检验检疫" },
                    { name: "检疫证书办理", article: "出入境检验检疫" },
                    { name: "法检商品清单", article: "出入境检验检疫" }
                ]
            }
        ]
    },
    "warehouse": {
        title: "仓储管理",
        sections: [
            {
                title: "海外仓",
                items: [
                    { name: "海外仓优势分析", article: "海外仓优势分析" },
                    { name: "海外仓运营模式", article: "海外仓优势分析" },
                    { name: "入仓与出仓流程", article: "海外仓优势分析" },
                    { name: "费用结构说明", article: "海外仓优势分析" }
                ]
            },
            {
                title: "服务商选择",
                items: [
                    { name: "主要海外仓服务商", article: "主要海外仓服务商" },
                    { name: "服务商对比分析", article: "主要海外仓服务商" },
                    { name: "选择考虑因素", article: "主要海外仓服务商" },
                    { name: "合作注意事项", article: "主要海外仓服务商" }
                ]
            },
            {
                title: "保税仓库",
                items: [
                    { name: "保税仓库类型", article: "保税仓库类型" },
                    { name: "保税政策解读", article: "保税仓库类型" },
                    { name: "保税仓运营", article: "保税仓库类型" },
                    { name: "适用业务场景", article: "保税仓库类型" }
                ]
            },
            {
                title: "WMS系统",
                items: [
                    { name: "WMS系统功能", article: "WMS系统功能" },
                    { name: "系统选型指南", article: "WMS系统功能" },
                    { name: "库存管理方法", article: "WMS系统功能" },
                    { name: "效率提升技巧", article: "WMS系统功能" }
                ]
            }
        ]
    },
    "tools": {
        title: "实用工具",
        sections: [
            {
                title: "计算工具",
                items: [
                    { name: "体积重量计算器", tool: "volume-calculator" },
                    { name: "运费计算器", tool: "freight-calculator" },
                    { name: "汇率转换器", tool: "currency-converter" }
                ]
            },
            {
                title: "查询工具",
                items: [
                    { name: "货物跟踪", tool: "tracking" },
                    { name: "贸易术语查询", tool: "incoterms" },
                    { name: "港口信息查询", tool: "ports" }
                ]
            }
        ]
    },
    // ===== 货代销售 =====
    "customer-dev": {
        title: "客户开发",
        sections: [
            {
                title: "开发技巧",
                items: [
                    { name: "货代客户开发技巧", article: "货代客户开发技巧" },
                    { name: "目标客户定位", article: "货代客户开发技巧" },
                    { name: "客户信息收集", article: "货代客户开发技巧" },
                    { name: "首次接触话术", article: "货代客户开发技巧" }
                ]
            },
            {
                title: "电话销售",
                items: [
                    { name: "电话销售话术", article: "电话销售话术" },
                    { name: "开场白设计", article: "电话销售话术" },
                    { name: "需求挖掘技巧", article: "电话销售话术" },
                    { name: "异议处理方法", article: "电话销售话术" }
                ]
            },
            {
                title: "邮件营销",
                items: [
                    { name: "邮件营销策略", article: "邮件营销策略" },
                    { name: "邮件标题技巧", article: "邮件营销策略" },
                    { name: "内容编写要点", article: "邮件营销策略" },
                    { name: "跟进邮件模板", article: "邮件营销策略" }
                ]
            }
        ]
    },
    "quotation": {
        title: "报价技巧",
        sections: [
            {
                title: "报价单制作",
                items: [
                    { name: "如何制作专业报价单", article: "如何制作专业报价单" },
                    { name: "报价单格式规范", article: "如何制作专业报价单" },
                    { name: "费用项目说明", article: "如何制作专业报价单" },
                    { name: "报价单模板", article: "如何制作专业报价单" }
                ]
            },
            {
                title: "价格谈判",
                items: [
                    { name: "价格谈判技巧", article: "价格谈判技巧" },
                    { name: "议价策略分析", article: "价格谈判技巧" },
                    { name: "底线设定方法", article: "价格谈判技巧" },
                    { name: "成交促进技巧", article: "价格谈判技巧" }
                ]
            }
        ]
    },
    "relationship": {
        title: "客户关系",
        sections: [
            {
                title: "客户维护",
                items: [
                    { name: "客户维护策略", article: "客户维护策略" },
                    { name: "定期回访计划", article: "客户维护策略" },
                    { name: "客户分级管理", article: "客户维护策略" },
                    { name: "增值服务提供", article: "客户维护策略" }
                ]
            },
            {
                title: "投诉处理",
                items: [
                    { name: "处理客户投诉", article: "处理客户投诉" },
                    { name: "投诉响应流程", article: "处理客户投诉" },
                    { name: "问题解决方案", article: "处理客户投诉" },
                    { name: "客户满意度提升", article: "处理客户投诉" }
                ]
            }
        ]
    },
    // ===== 货代英语 =====
    "vocabulary": {
        title: "专业词汇",
        sections: [
            {
                title: "常用词汇",
                items: [
                    { name: "货代常用英语词汇", article: "货代常用英语词汇" },
                    { name: "运输方式词汇", article: "货代常用英语词汇" },
                    { name: "费用相关词汇", article: "货代常用英语词汇" },
                    { name: "操作流程词汇", article: "货代常用英语词汇" }
                ]
            },
            {
                title: "航运术语",
                items: [
                    { name: "航运专业术语", article: "航运专业术语" },
                    { name: "船舶术语", article: "航运专业术语" },
                    { name: "港口术语", article: "航运专业术语" },
                    { name: "集装箱术语", article: "航运专业术语" }
                ]
            },
            {
                title: "单证英语",
                items: [
                    { name: "单证英语术语", article: "单证英语术语" },
                    { name: "提单术语", article: "单证英语术语" },
                    { name: "发票术语", article: "单证英语术语" },
                    { name: "报关术语", article: "单证英语术语" }
                ]
            }
        ]
    },
    "communication": {
        title: "商务沟通",
        sections: [
            {
                title: "邮件写作",
                items: [
                    { name: "邮件写作模板", article: "邮件写作模板" },
                    { name: "询价邮件模板", article: "邮件写作模板" },
                    { name: "报价邮件模板", article: "邮件写作模板" },
                    { name: "跟进邮件模板", article: "邮件写作模板" }
                ]
            },
            {
                title: "电话沟通",
                items: [
                    { name: "电话沟通技巧", article: "电话沟通技巧" },
                    { name: "常用对话句型", article: "电话沟通技巧" },
                    { name: "问题处理表达", article: "电话沟通技巧" },
                    { name: "商务礼仪用语", article: "电话沟通技巧" }
                ]
            }
        ]
    }
};

// ===== 数字转中文 =====
function toChineseNum(num) {
    const chineseNums = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    if (num <= 10) return chineseNums[num];
    if (num < 20) return '十' + (num % 10 === 0 ? '' : chineseNums[num % 10]);
    return chineseNums[Math.floor(num / 10)] + '十' + (num % 10 === 0 ? '' : chineseNums[num % 10]);
}

// ===== 显示分类目录大纲 =====
function showCategoryOutline(categoryKey, scrollToSection = null) {
    const data = categoryOutlineData[categoryKey];
    if (!data) return;
    
    // 隐藏首页，显示文章区域
    homeContent.style.display = 'none';
    searchResults.style.display = 'none';
    articleContent.style.display = 'block';
    
    // 隐藏标题和页脚等
    document.getElementById('articleTitle').style.display = 'none';
    document.getElementById('articleTags').innerHTML = '';
    document.getElementById('articleMeta').style.display = 'none';
    document.querySelector('.article-footer').style.display = 'none';
    document.getElementById('articleNav').innerHTML = '';
    
    // 构建目录HTML - 1000h.org 风格
    let html = '<div class="category-outline">';
    
    data.sections.forEach((section, sectionIndex) => {
        const sectionNum = sectionIndex + 1;
        html += `
            <div class="outline-section" id="outline-section-${sectionIndex}">
                <div class="outline-section-header">
                    <h2 class="outline-section-title">${sectionNum}. ${section.title}</h2>
                </div>
                <div class="outline-items">
        `;
        
        section.items.forEach((item, itemIndex) => {
            const itemNum = `${sectionNum}.${itemIndex + 1}.`;
            if (item.tool) {
                html += `<a class="outline-item" onclick="showTool('${item.tool}')"><span class="item-number">${itemNum}</span><span class="item-text">${item.name}</span></a>`;
            } else {
                html += `<a class="outline-item" onclick="showArticle('${item.article}')"><span class="item-number">${itemNum}</span><span class="item-text">${item.name}</span></a>`;
            }
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    
    // 填充面包屑
    document.getElementById('breadcrumb').innerHTML = `
        <a href="#" onclick="showHome()">首页</a>
        <span class="separator">/</span>
        <span>专业知识</span>
        <span class="separator">/</span>
        <span>${data.title.replace('知识大纲', '')}</span>
    `;
    
    // 填充内容
    document.getElementById('articleBody').innerHTML = html;
    
    // 滚动到指定 section 或顶部
    if (scrollToSection !== null) {
        setTimeout(() => {
            const sectionEl = document.getElementById(`outline-section-${scrollToSection}`);
            if (sectionEl) {
                sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // 添加高亮效果
                sectionEl.classList.add('section-highlight');
                setTimeout(() => sectionEl.classList.remove('section-highlight'), 2000);
            }
        }, 100);
    } else {
        window.scrollTo(0, 0);
    }
}

// 显示分类大纲并滚动到指定 section
function showCategoryOutlineSection(categoryKey, sectionIndex) {
    showCategoryOutline(categoryKey, sectionIndex);
}

// ===== 显示文章 =====
function showArticle(title) {
    const article = findArticle(title);
    if (!article) return;
    
    currentArticle = article;
    
    // 隐藏首页，显示文章
    homeContent.style.display = 'none';
    searchResults.style.display = 'none';
    articleContent.style.display = 'block';
    
    // 隐藏全局说明
    document.getElementById('globalDescription').style.display = 'none';
    
    // 填充内容
    document.getElementById('articleTitle').style.display = '';
    document.getElementById('articleTitle').textContent = article.data.title;
    document.getElementById('articleBody').innerHTML = article.data.content;
    
    // 面包屑 - 支持点击返回上级
    let breadcrumbHtml = `
        <a href="#" onclick="showHome()">首页</a>
        <span class="separator">/</span>
        <span>${article.categoryTitle}</span>
    `;
    
    if (article.subcategoryTitle) {
        // 检查是否有目录大纲，如果有则可以点击返回
        if (categoryOutlineData[article.subcategoryKey]) {
            breadcrumbHtml += `
                <span class="separator">/</span>
                <a href="#" onclick="showCategoryOutline('${article.subcategoryKey}')">${article.subcategoryTitle}</a>
            `;
            
            // 如果有 section，添加 section 链接
            if (article.sectionTitle) {
                breadcrumbHtml += `
                    <span class="separator">/</span>
                    <a href="#" onclick="showCategoryOutlineSection('${article.subcategoryKey}', ${article.sectionIndex})">${article.sectionTitle}</a>
                `;
            }
        } else {
            breadcrumbHtml += `
                <span class="separator">/</span>
                <span>${article.subcategoryTitle}</span>
            `;
        }
    }
    
    document.getElementById('breadcrumb').innerHTML = breadcrumbHtml;
    
    // 隐藏标签
    document.getElementById('articleTags').innerHTML = '';
    
    // 元信息 - 使用真实计数API
    updateViewCountDisplay(title);
    
    // 显示页脚
    document.querySelector('.article-footer').style.display = '';
    document.getElementById('articleNav').innerHTML = '';
    
    // 滚动到顶部
    window.scrollTo(0, 0);
    
    // 更新侧边栏活跃状态
    updateSidebarActive(title);
}

function findArticle(title) {
    for (const [catKey, category] of Object.entries(knowledgeBase)) {
        if (category.subcategories) {
            for (const [subKey, subcategory] of Object.entries(category.subcategories)) {
                const article = subcategory.articles.find(a => a.title === title);
                if (article) {
                    // 查找文章所属的 section
                    const sectionInfo = findArticleSection(subKey, title);
                    return {
                        data: article,
                        categoryKey: catKey,
                        categoryTitle: category.title,
                        subcategoryKey: subKey,
                        subcategoryTitle: subcategory.title,
                        sectionTitle: sectionInfo ? sectionInfo.sectionTitle : null,
                        sectionIndex: sectionInfo ? sectionInfo.sectionIndex : null
                    };
                }
            }
        } else if (category.articles) {
            const article = category.articles.find(a => a.title === title);
            if (article) {
                return {
                    data: article,
                    categoryKey: catKey,
                    categoryTitle: category.title,
                    subcategoryKey: null,
                    subcategoryTitle: null,
                    sectionTitle: null,
                    sectionIndex: null
                };
            }
        }
    }
    return null;
}

// 查找文章所属的 section
function findArticleSection(subcategoryKey, articleTitle) {
    const outlineData = categoryOutlineData[subcategoryKey];
    if (!outlineData || !outlineData.sections) return null;
    
    for (let i = 0; i < outlineData.sections.length; i++) {
        const section = outlineData.sections[i];
        const found = section.items.find(item => item.article === articleTitle || item.name === articleTitle);
        if (found) {
            return {
                sectionTitle: section.title,
                sectionIndex: i
            };
        }
    }
    return null;
}

function updateSidebarActive(title) {
    document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-article') === title) {
            link.classList.add('active');
            
            // 展开父级
            const subgroup = link.closest('.nav-subgroup-items');
            const group = link.closest('.nav-group-items');
            
            if (subgroup) {
                subgroup.classList.add('expanded');
                const subgroupTitle = subgroup.previousElementSibling;
                if (subgroupTitle) subgroupTitle.classList.add('expanded');
            }
            
            if (group) {
                group.classList.add('expanded');
                const groupTitle = group.previousElementSibling;
                if (groupTitle) groupTitle.classList.add('expanded');
            }
            }
        });
    }

// ===== 显示首页 =====
function showHome() {
    homeContent.style.display = 'block';
    articleContent.style.display = 'none';
    searchResults.style.display = 'none';
    currentArticle = null;
    
    document.querySelectorAll('.sidebar-nav .nav-link').forEach(l => l.classList.remove('active'));
}

// ===== 展开导航组 =====
function expandGroup(group) {
    const groupTitle = document.querySelector(`.nav-group-title[data-group="${group}"]`);
    const groupItems = document.querySelector(`.nav-group-items[data-group="${group}"]`);
    
    if (groupTitle && groupItems) {
        groupTitle.classList.add('expanded');
        groupItems.classList.add('expanded');
        
        // 滚动到对应位置
        groupTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===== 国家详情标签页 =====
function generateCountryTabs(country) {
    let html = '';
    
    // 统计各类数据数量
    const airportCount = (country.airports?.international?.length || 0) + (country.airports?.domestic?.length || 0);
    const portCount = (country.ports?.international?.length || 0) + (country.ports?.domestic?.length || 0);
    const airlineCount = country.airlines?.length || 0;
    const shippingLineCount = country.shippingLines?.length || 0;
    const provinceCount = country.provinces?.length || 0;
    const customsPolicyCount = country.customsPolicies?.length || 0;
    
    // 标签页导航 - 简洁下划线风格（顺序：机场 航司 港口 船司 省份城市 清关政策）
    html += '<div class="country-tabs-horizontal">';
    if (airportCount > 0) html += `<button class="country-tab active" onclick="switchCountryTab(event, 'airports')">机场 <span class="tab-count">${airportCount}</span></button>`;
    if (airlineCount > 0) html += `<button class="country-tab" onclick="switchCountryTab(event, 'airlines')">航司 <span class="tab-count">${airlineCount}</span></button>`;
    if (portCount > 0) html += `<button class="country-tab" onclick="switchCountryTab(event, 'ports')">港口 <span class="tab-count">${portCount}</span></button>`;
    if (shippingLineCount > 0) html += `<button class="country-tab" onclick="switchCountryTab(event, 'shipping')">船司 <span class="tab-count">${shippingLineCount}</span></button>`;
    if (provinceCount > 0) html += `<button class="country-tab" onclick="switchCountryTab(event, 'provinces')">省份城市 <span class="tab-count">${provinceCount}</span></button>`;
    if (customsPolicyCount > 0) html += `<button class="country-tab" onclick="switchCountryTab(event, 'customs')">清关政策 <span class="tab-count">${customsPolicyCount}</span></button>`;
    html += '</div>';
    
    // 标签页内容
    html += '<div class="country-tabs-content">';
    
    // 机场面板
    if (airportCount > 0) {
        const intlCount = country.airports.international?.length || 0;
        const domCount = country.airports.domestic?.length || 0;
        html += '<div class="tab-panel active" id="tab-airports">';
        html += `<div class="tab-header">
            <h3>${country.name} · 已显示 ${airportCount} 个机场</h3>
            <div class="tab-header-filters">
                <span class="tab-filter"><span class="dot green"></span>国际机场</span>
                <span class="tab-filter"><span class="dot orange"></span>国内机场</span>
            </div>
        </div>`;
        html += '<div class="data-list">';
        if (country.airports.international) {
            country.airports.international.forEach(a => {
                html += `<div class="data-row">
                    <span class="data-code">${a.code}</span>
                    <span class="data-dot" style="background:#34d399"></span>
                    <span class="data-name-cn">${a.name.replace('国际机场','').replace('机场','')}</span>
                    <span class="data-name-en">${a.name}</span>
                    <span class="data-meta">${country.name} CN · 亚洲</span>
                </div>`;
            });
        }
        if (country.airports.domestic) {
            country.airports.domestic.forEach(a => {
                html += `<div class="data-row">
                    <span class="data-code">${a.code}</span>
                    <span class="data-dot" style="background:#fbbf24"></span>
                    <span class="data-name-cn">${a.name.replace('国际机场','').replace('机场','')}</span>
                    <span class="data-name-en">${a.name}</span>
                    <span class="data-meta">${country.name} CN · 亚洲</span>
                </div>`;
            });
        }
        html += '</div></div>';
    }
    
    // 航司面板
    if (airlineCount > 0) {
        html += '<div class="tab-panel" id="tab-airlines">';
        html += `<div class="tab-header">
            <h3>${country.name} · 已显示 ${airlineCount} 家航空公司</h3>
        </div>`;
        html += '<div class="data-list">';
        country.airlines.forEach(a => {
            html += `<div class="data-row">
                <span class="data-code">${a.code}</span>
                <span class="data-dot" style="background:#34d399"></span>
                <span class="data-name-cn">${a.name}</span>
                <span class="data-name-en">${a.nameEn}</span>
                <span class="data-meta">${country.name} CN</span>
            </div>`;
        });
        html += '</div></div>';
    }
    
    // 港口面板
    if (portCount > 0) {
        html += '<div class="tab-panel" id="tab-ports">';
        html += `<div class="tab-header">
            <h3>${country.name} · 已显示 ${portCount} 个港口</h3>
            <div class="tab-header-filters">
                <span class="tab-filter"><span class="dot green"></span>主要港口</span>
                <span class="tab-filter"><span class="dot orange"></span>其他港口</span>
            </div>
        </div>`;
        html += '<div class="data-list">';
        if (country.ports.international) {
            country.ports.international.forEach(p => {
                html += `<div class="data-row">
                    <span class="data-code">${p.code}</span>
                    <span class="data-dot" style="background:#34d399"></span>
                    <span class="data-name-cn">${p.name}</span>
                    <span class="data-name-en">${p.desc || ''}</span>
                    <span class="data-meta">${country.name} CN</span>
                </div>`;
            });
        }
        if (country.ports.domestic) {
            country.ports.domestic.forEach(p => {
                html += `<div class="data-row">
                    <span class="data-code">${p.code}</span>
                    <span class="data-dot" style="background:#fbbf24"></span>
                    <span class="data-name-cn">${p.name}</span>
                    <span class="data-name-en">${p.desc || ''}</span>
                    <span class="data-meta">${country.name} CN</span>
                </div>`;
            });
        }
        html += '</div></div>';
    }
    
    // 船司面板
    if (shippingLineCount > 0) {
        html += '<div class="tab-panel" id="tab-shipping">';
        html += `<div class="tab-header">
            <h3>${country.name} · 已显示 ${shippingLineCount} 家船运公司</h3>
        </div>`;
        html += '<div class="data-list">';
        country.shippingLines.forEach(s => {
            html += `<div class="data-row">
                <span class="data-code">${s.code}</span>
                <span class="data-dot" style="background:#34d399"></span>
                <span class="data-name-cn">${s.name}</span>
                <span class="data-name-en">${s.nameEn} - ${s.desc || ''}</span>
                <span class="data-meta">${country.name} CN</span>
            </div>`;
        });
        html += '</div></div>';
    }
    
    // 省份城市面板
    if (provinceCount > 0) {
        const totalCities = country.provinces.reduce((sum, p) => sum + p.cities.length, 0);
        html += '<div class="tab-panel" id="tab-provinces">';
        html += `<div class="tab-header">
            <h3>${country.name} · ${provinceCount} 个省份 · ${totalCities} 个城市</h3>
        </div>`;
        html += '<div class="provinces-grid">';
        country.provinces.forEach(p => {
            html += `<div class="province-card"><h4>${p.name}</h4><div class="city-tags">${p.cities.map(c => `<span class="city-tag">${c}</span>`).join('')}</div></div>`;
        });
        html += '</div></div>';
    }
    
    // 清关政策面板
    if (customsPolicyCount > 0) {
        html += '<div class="tab-panel" id="tab-customs">';
        html += `<div class="tab-header">
            <h3>${country.name} · ${customsPolicyCount} 项清关政策</h3>
        </div>`;
        html += '<div class="policy-list">';
        country.customsPolicies.forEach(p => {
            html += `<div class="policy-card"><h4>${p.title}</h4><p>${p.content}</p></div>`;
        });
        html += '</div></div>';
    }
    
    html += '</div>';
    return html;
}

// ===== 标签页切换 =====
function switchCountryTab(event, tabName) {
    // 移除所有active
    document.querySelectorAll('.country-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    
    // 添加active到当前
    event.target.classList.add('active');
    document.getElementById('tab-' + tabName).classList.add('active');
}

// ===== US CBP Port Codes 数据和功能 =====
// 数据来源: CBP Schedule D - U.S. CBP Port Codes (December 2020)
const usPortCodes = [
    // === 1. Northeast Region ===
    {name: "Portland", state: "ME", code: "0101"},
    {name: "Bangor", state: "ME", code: "0102"},
    {name: "Eastport", state: "ME", code: "0103"},
    {name: "Jackman", state: "ME", code: "0104"},
    {name: "Vanceboro", state: "ME", code: "0105"},
    {name: "Houlton", state: "ME", code: "0106"},
    {name: "Fort Fairfield", state: "ME", code: "0107"},
    {name: "Van Buren", state: "ME", code: "0108"},
    {name: "Madawaska", state: "ME", code: "0109"},
    {name: "Fort Kent", state: "ME", code: "0110"},
    {name: "Bath", state: "ME", code: "0111"},
    {name: "Bar Harbor", state: "ME", code: "0112"},
    {name: "Manchester", state: "NH", code: "0114"},
    {name: "Calais", state: "ME", code: "0115"},
    {name: "Limestone", state: "ME", code: "0118"},
    {name: "Rockland", state: "ME", code: "0121"},
    {name: "Jonesport", state: "ME", code: "0122"},
    {name: "Bridgewater", state: "ME", code: "0127"},
    {name: "Portsmouth", state: "NH", code: "0131"},
    {name: "Searsport", state: "ME", code: "0152"},
    {name: "Manchester User Fee Airport", state: "NH", code: "0182"},
    {name: "St. Albans", state: "VT", code: "0201"},
    {name: "Richford", state: "VT", code: "0203"},
    {name: "Beecher Falls", state: "VT", code: "0206"},
    {name: "Burlington", state: "VT", code: "0207"},
    {name: "Derby Line", state: "VT", code: "0209"},
    {name: "Newport", state: "VT", code: "0210"},
    {name: "Norton", state: "VT", code: "0211"},
    {name: "Highgate Springs/Alburg", state: "VT", code: "0212"},
    {name: "Swanton", state: "VT", code: "0214"},
    {name: "Boston", state: "MA", code: "0401"},
    {name: "Springfield", state: "MA", code: "0402"},
    {name: "Worcester", state: "MA", code: "0403"},
    {name: "Gloucester", state: "MA", code: "0404"},
    {name: "New Bedford", state: "MA", code: "0405"},
    {name: "Plymouth", state: "MA", code: "0406"},
    {name: "Fall River", state: "MA", code: "0407"},
    {name: "Beverly", state: "MA", code: "0408"},
    {name: "Bridgeport", state: "CT", code: "0410"},
    {name: "Hartford", state: "CT", code: "0411"},
    {name: "New Haven", state: "CT", code: "0412"},
    {name: "New London", state: "CT", code: "0413"},
    {name: "Lawrence", state: "MA", code: "0416"},
    {name: "Logan Airport, East Boston", state: "MA", code: "0417"},
    {name: "Hanscom Field User Fee Airport", state: "MA", code: "0481"},
    {name: "Newport", state: "RI", code: "0501"},
    {name: "Providence", state: "RI", code: "0502"},
    {name: "Mellville", state: "RI", code: "0503"},
    {name: "Ogdensburg", state: "NY", code: "0701"},
    {name: "Massena", state: "NY", code: "0704"},
    {name: "Cape Vincent", state: "NY", code: "0706"},
    {name: "Alexandria Bay", state: "NY", code: "0708"},
    {name: "Burke", state: "NY", code: "0709"},
    {name: "Champlain-Rouses Point", state: "NY", code: "0712"},
    {name: "Clayton", state: "NY", code: "0714"},
    {name: "Trout River", state: "NY", code: "0715"},
    {name: "Plattsburgh International Airport", state: "NY", code: "0781"},
    {name: "Buffalo-Niagara Falls", state: "NY", code: "0901"},
    {name: "Rochester", state: "NY", code: "0903"},
    {name: "Oswego", state: "NY", code: "0904"},
    {name: "Sodus Point", state: "NY", code: "0905"},
    {name: "Syracuse", state: "NY", code: "0906"},
    {name: "Binghamton Regional Airport", state: "NY", code: "0981"},
    {name: "Griffiss International User Fee Airport", state: "NY", code: "0982"},
    {name: "Ithaca Tompkins Intl Airport", state: "NY", code: "0983"},
    {name: "Philadelphia", state: "PA", code: "1101"},
    {name: "Chester", state: "PA", code: "1102"},
    {name: "Wilmington", state: "DE", code: "1103"},
    {name: "Pittsburgh", state: "PA", code: "1104"},
    {name: "Wilkes-Barre/Scranton", state: "PA", code: "1106"},
    {name: "Philadelphia International Airport", state: "PA", code: "1108"},
    {name: "Harrisburg", state: "PA", code: "1109"},
    {name: "Cherry Hill", state: "NJ", code: "1110"},
    {name: "Allentown", state: "PA", code: "1119"},
    {name: "Atlantic City User Fee Airport", state: "NJ", code: "1182"},
    {name: "Trenton/Mercer County User Fee Airport", state: "NJ", code: "1183"},
    {name: "UPS Philadelphia Hub", state: "PA", code: "1195"},
    {name: "Annapolis", state: "MD", code: "1301"},
    {name: "Cambridge", state: "MD", code: "1302"},
    {name: "Baltimore", state: "MD", code: "1303"},
    {name: "Crisfield", state: "MD", code: "1304"},
    {name: "Baltimore-Washington International Airport", state: "MD", code: "1305"},
    {name: "Dover", state: "DE", code: "1307"},
    // === 2. New York Region ===
    {name: "New York", state: "NY", code: "1001"},
    {name: "Albany", state: "NY", code: "1002"},
    {name: "Long Island", state: "NY", code: "1005"},
    {name: "Fishkill", state: "NY", code: "1006"},
    {name: "Napanoch", state: "NY", code: "1007"},
    {name: "New York/Newark Area", state: "NJ", code: "4601"},
    {name: "Perth Amboy", state: "NJ", code: "4602"},
    {name: "ECCF UPS Newark", state: "NJ", code: "4670"},
    {name: "ECCF FedEx Corp Newark", state: "NJ", code: "4671"},
    {name: "Morristown Airport", state: "NJ", code: "4681"},
    {name: "Stewart International Airport UFF", state: "NY", code: "4682"},
    {name: "John F. Kennedy Airport", state: "NY", code: "4701"},
    {name: "ECCF NYACC JFK Airport", state: "NY", code: "4771"},
    {name: "ECCF DHL Airways JFK Airport", state: "NY", code: "4772"},
    {name: "ECCF Micom JFK", state: "NY", code: "4773"},
    {name: "ECCF IBC JFK", state: "NY", code: "4774"},
    {name: "ECCF FedEx Corp JFK Airport", state: "NY", code: "4778"},
    // === 3. North Central Region ===
    {name: "Raymond", state: "MT", code: "3301"},
    {name: "Eastport", state: "ID", code: "3302"},
    {name: "Salt Lake City", state: "UT", code: "3303"},
    {name: "Great Falls", state: "MT", code: "3304"},
    {name: "Butte", state: "MT", code: "3305"},
    {name: "Turner", state: "MT", code: "3306"},
    {name: "Denver", state: "CO", code: "3307"},
    {name: "Porthill", state: "ID", code: "3308"},
    {name: "Scobey", state: "MT", code: "3309"},
    {name: "Sweetgrass", state: "MT", code: "3310"},
    {name: "Piegan", state: "MT", code: "3316"},
    {name: "Opheim", state: "MT", code: "3317"},
    {name: "Roosville", state: "MT", code: "3318"},
    {name: "Morgan", state: "MT", code: "3319"},
    {name: "Whitlash", state: "MT", code: "3321"},
    {name: "Del Bonita", state: "MT", code: "3322"},
    {name: "Wildhorse", state: "MT", code: "3323"},
    {name: "Kalispell Airport", state: "MT", code: "3324"},
    {name: "Willow Creek", state: "MT", code: "3325"},
    {name: "Billings", state: "MT", code: "3326"},
    {name: "Helena", state: "MT", code: "3348"},
    {name: "Missoula User Fee Airport", state: "MT", code: "3381"},
    {name: "Jeffco User Fee Airport", state: "CO", code: "3383"},
    {name: "Centennial Airport", state: "CO", code: "3384"},
    {name: "Eagle County Regional Airport", state: "CO", code: "3385"},
    {name: "Bozeman Yellowstone User Fee Airport", state: "MT", code: "3386"},
    {name: "Pembina", state: "ND", code: "3401"},
    {name: "Portal", state: "ND", code: "3403"},
    {name: "Neche", state: "ND", code: "3404"},
    {name: "St. John", state: "ND", code: "3405"},
    {name: "Northgate", state: "ND", code: "3406"},
    {name: "Walhalla", state: "ND", code: "3407"},
    {name: "Hannah", state: "ND", code: "3408"},
    {name: "Sarles", state: "ND", code: "3409"},
    {name: "Ambrose", state: "ND", code: "3410"},
    {name: "Fargo International Airport", state: "ND", code: "3411"},
    {name: "Fargo, Grand Forks", state: "ND", code: "3412"},
    {name: "Antler", state: "ND", code: "3413"},
    {name: "Sherwood", state: "ND", code: "3414"},
    {name: "Hansboro", state: "ND", code: "3415"},
    {name: "Maida", state: "ND", code: "3416"},
    {name: "Fortuna", state: "ND", code: "3417"},
    {name: "Westhope", state: "ND", code: "3419"},
    {name: "Noonan", state: "ND", code: "3420"},
    {name: "Carbury", state: "ND", code: "3421"},
    {name: "Dunseith", state: "ND", code: "3422"},
    {name: "Warroad", state: "MN", code: "3423"},
    {name: "Baudette", state: "MN", code: "3424"},
    {name: "Pinecreek", state: "MN", code: "3425"},
    {name: "Roseau", state: "MN", code: "3426"},
    {name: "Grand Forks Airport", state: "ND", code: "3427"},
    {name: "Crane Lake", state: "MN", code: "3429"},
    {name: "Lancaster", state: "MN", code: "3430"},
    {name: "Minot", state: "ND", code: "3431"},
    {name: "Grand Forks", state: "ND", code: "3432"},
    {name: "Williston Airport", state: "ND", code: "3433"},
    {name: "Minot Airport", state: "ND", code: "3434"},
    {name: "Minneapolis-St. Paul", state: "MN", code: "3501"},
    {name: "Sioux Falls", state: "SD", code: "3502"},
    {name: "Rapid City", state: "SD", code: "3503"},
    {name: "Cedar Rapids", state: "IA", code: "3505"},
    {name: "Grand Island", state: "NE", code: "3507"},
    {name: "North Platte", state: "NE", code: "3508"},
    {name: "Duluth", state: "WI", code: "3510"},
    {name: "Ashland", state: "WI", code: "3511"},
    {name: "Omaha", state: "NE", code: "3512"},
    {name: "Des Moines", state: "IA", code: "3513"},
    {name: "Rochester User Fee Airport", state: "MN", code: "3581"},
    {name: "International Falls", state: "MN", code: "3604"},
    {name: "Grand Portage", state: "MN", code: "3613"},
    {name: "Milwaukee", state: "WI", code: "3701"},
    {name: "Marinette", state: "WI", code: "3702"},
    {name: "Green Bay", state: "WI", code: "3703"},
    {name: "Manitowoc", state: "WI", code: "3706"},
    {name: "Sheboygan", state: "WI", code: "3707"},
    {name: "Racine", state: "WI", code: "3708"},
    {name: "Appleton International Airport", state: "WI", code: "3781"},
    {name: "Detroit", state: "MI", code: "3801"},
    {name: "Port Huron", state: "MI", code: "3802"},
    {name: "Sault Ste Marie", state: "MI", code: "3803"},
    {name: "Saginaw/Bay City", state: "MI", code: "3804"},
    {name: "Battle Creek", state: "MI", code: "3805"},
    {name: "Grand Rapids", state: "MI", code: "3806"},
    {name: "Detroit Metropolitan Airport", state: "MI", code: "3807"},
    {name: "Escanaba", state: "MI", code: "3808"},
    {name: "Marquette", state: "MI", code: "3809"},
    {name: "Algonac", state: "MI", code: "3814"},
    {name: "Muskegon", state: "MI", code: "3815"},
    {name: "Grand Haven", state: "MI", code: "3816"},
    {name: "Rogers City", state: "MI", code: "3818"},
    {name: "Detour City", state: "MI", code: "3819"},
    {name: "South Haven", state: "MI", code: "3822"},
    {name: "Presque Island", state: "MI", code: "3842"},
    {name: "Alpena", state: "MI", code: "3843"},
    {name: "Oakland County International Airport", state: "MI", code: "3881"},
    {name: "Willow Run Airport", state: "MI", code: "3882"},
    {name: "Chicago (O'Hare International Airport)", state: "IL", code: "3901"},
    {name: "Peoria", state: "IL", code: "3902"},
    {name: "Gary Chicago Intl Airport", state: "IN", code: "3905"},
    {name: "Davenport-Rock Island", state: "IL", code: "3908"},
    {name: "Rockford Airport", state: "IL", code: "3909"},
    {name: "Midway International Airport", state: "IL", code: "3910"},
    {name: "Springfield", state: "IL", code: "3911"},
    {name: "ECCF FedEx Chicago", state: "IL", code: "3971"},
    {name: "ECCF IBC Chicago", state: "IL", code: "3972"},
    {name: "Pal-Waukee Mncpl Airport", state: "IL", code: "3983"},
    {name: "Dupage Airport Authority", state: "IL", code: "3984"},
    {name: "UFA UI Willard Airport", state: "IL", code: "3987"},
    {name: "DHL Chicago Hub", state: "IL", code: "3991"},
    {name: "Cleveland", state: "OH", code: "4101"},
    {name: "Cincinnati", state: "OH", code: "4102"},
    {name: "Columbus", state: "OH", code: "4103"},
    {name: "Dayton", state: "OH", code: "4104"},
    {name: "Toledo", state: "OH", code: "4105"},
    {name: "Erie", state: "PA", code: "4106"},
    {name: "Northern Kentucky", state: "KY", code: "4107"},
    {name: "Indianapolis", state: "IN", code: "4110"},
    {name: "Louisville", state: "KY", code: "4115"},
    {name: "Owensboro-Evansville", state: "IN", code: "4116"},
    {name: "Ashtabula/Conneaut", state: "OH", code: "4122"},
    {name: "London", state: "KY", code: "4130"},
    {name: "Bowling Green", state: "KY", code: "4131"},
    {name: "Fort Wayne Airport UFA", state: "IN", code: "4183"},
    {name: "Blue Grass Airport UFA", state: "KY", code: "4184"},
    {name: "UPS Louisville Hub", state: "KY", code: "4196"},
    {name: "DHL Cincinnati Hub", state: "OH", code: "4197"},
    {name: "Fedex Corp Indianapolis Hub", state: "IN", code: "4198"},
    {name: "Kansas City", state: "MO", code: "4501"},
    {name: "St. Joseph", state: "MO", code: "4502"},
    {name: "St. Louis", state: "MO", code: "4503"},
    {name: "Wichita", state: "KS", code: "4504"},
    {name: "Springfield", state: "MO", code: "4505"},
    {name: "Kansas City Smart Port", state: "KS", code: "4507"},
    {name: "MidAmerica Airport", state: "IL", code: "4581"},
    // === 4. Southeast Region ===
    {name: "Norfolk", state: "VA", code: "1401"},
    {name: "Richmond-Petersburg", state: "VA", code: "1404"},
    {name: "Harrisonburg", state: "VA", code: "1405"},
    {name: "Charleston", state: "WV", code: "1409"},
    {name: "Front Royal", state: "VA", code: "1410"},
    {name: "Wilmington", state: "NC", code: "1501"},
    {name: "Winston-Salem", state: "NC", code: "1502"},
    {name: "Durham", state: "NC", code: "1503"},
    {name: "Beaufort-Morehead City", state: "NC", code: "1511"},
    {name: "Charlotte", state: "NC", code: "1512"},
    {name: "Charlotte-Monroe User Fee Airport", state: "NC", code: "1581"},
    {name: "Charleston", state: "SC", code: "1601"},
    {name: "Georgetown", state: "SC", code: "1602"},
    {name: "Greenville-Spartanburg", state: "SC", code: "1603"},
    {name: "Columbia", state: "SC", code: "1604"},
    {name: "Greer", state: "SC", code: "1608"},
    {name: "Myrtle Beach International Airport", state: "SC", code: "1681"},
    {name: "Brunswick", state: "GA", code: "1701"},
    {name: "Savannah", state: "GA", code: "1703"},
    {name: "Atlanta", state: "GA", code: "1704"},
    {name: "Albany", state: "GA", code: "1705"},
    {name: "Dalton", state: "GA", code: "1706"},
    {name: "Hartsfield Airport", state: "GA", code: "1709"},
    {name: "Cobb County International Airport", state: "GA", code: "1781"},
    {name: "Tampa", state: "FL", code: "1801"},
    {name: "Jacksonville", state: "FL", code: "1803"},
    {name: "Tallahassee", state: "FL", code: "1804"},
    {name: "Fernandina Beach", state: "FL", code: "1805"},
    {name: "Boca Grande", state: "FL", code: "1807"},
    {name: "Orlando", state: "FL", code: "1808"},
    {name: "Orlando-Sanford Airport", state: "FL", code: "1809"},
    {name: "Sarasota/Bradenton, Manatee", state: "FL", code: "1811"},
    {name: "St. Petersburg", state: "FL", code: "1814"},
    {name: "Port Canaveral", state: "FL", code: "1816"},
    {name: "Panama City", state: "FL", code: "1818"},
    {name: "Pensacola", state: "FL", code: "1819"},
    {name: "Port St. Joe", state: "FL", code: "1820"},
    {name: "Port Manatee", state: "FL", code: "1821"},
    {name: "Fort Myers", state: "FL", code: "1822"},
    {name: "Naples Municipal Airport", state: "FL", code: "1880"},
    {name: "Lakeland Linder Airport", state: "FL", code: "1881"},
    {name: "Sarasota-Bradenton Airport", state: "FL", code: "1883"},
    {name: "Daytona Beach International Airport", state: "FL", code: "1884"},
    {name: "Melbourne Regional Airport", state: "FL", code: "1885"},
    {name: "Leesburg Regional Airport", state: "FL", code: "1887"},
    {name: "Orlando Executive Airport", state: "FL", code: "1888"},
    {name: "St. Augustine Airport", state: "FL", code: "1889"},
    {name: "Aguadilla", state: "PR", code: "4901"},
    {name: "Fajardo", state: "PR", code: "4904"},
    {name: "Mayaguez", state: "PR", code: "4907"},
    {name: "Ponce", state: "PR", code: "4908"},
    {name: "San Juan", state: "PR", code: "4909"},
    {name: "San Juan International Airport", state: "PR", code: "4913"},
    {name: "Charlotte Amalie, St. Thomas", state: "VI", code: "5101"},
    {name: "Cruz Bay, St. John", state: "VI", code: "5102"},
    {name: "Christiansted, St. Croix", state: "VI", code: "5104"},
    {name: "Frederiksted, St. Croix", state: "VI", code: "5105"},
    {name: "Miami", state: "FL", code: "5201"},
    {name: "Key West", state: "FL", code: "5202"},
    {name: "Port Everglades", state: "FL", code: "5203"},
    {name: "West Palm Beach", state: "FL", code: "5204"},
    {name: "Fort Pierce", state: "FL", code: "5205"},
    {name: "Miami International Airport", state: "FL", code: "5206"},
    {name: "Fort Lauderdale International Airport", state: "FL", code: "5210"},
    {name: "Key Largo", state: "FL", code: "5211"},
    {name: "Pembroke Pines", state: "FL", code: "5212"},
    {name: "Marathon International Airport", state: "FL", code: "5281"},
    {name: "Boca Raton Airport", state: "FL", code: "5282"},
    {name: "Witham Field GAF", state: "FL", code: "5283"},
    {name: "UPS Miami Hub", state: "FL", code: "5295"},
    {name: "DHL Miami Hub", state: "FL", code: "5296"},
    {name: "FedEx Corp Miami Hub", state: "FL", code: "5297"},
    {name: "IBC Miami Hub", state: "FL", code: "5298"},
    {name: "Washington, District of Columbia", state: "DC", code: "5401"},
    {name: "Reagan National (DCA)", state: "VA", code: "5402"},
    // === 5. South Central Region ===
    {name: "Mobile", state: "AL", code: "1901"},
    {name: "Gulfport", state: "MS", code: "1902"},
    {name: "Pascagoula", state: "MS", code: "1903"},
    {name: "Birmingham", state: "AL", code: "1904"},
    {name: "Apalachicola", state: "FL", code: "1905"},
    {name: "Carrabelle", state: "FL", code: "1906"},
    {name: "Huntsville", state: "AL", code: "1910"},
    {name: "Morgan City", state: "LA", code: "2001"},
    {name: "New Orleans", state: "LA", code: "2002"},
    {name: "Little Rock", state: "AR", code: "2003"},
    {name: "Baton Rouge", state: "LA", code: "2004"},
    {name: "Memphis", state: "TN", code: "2006"},
    {name: "Nashville", state: "TN", code: "2007"},
    {name: "Chattanooga", state: "TN", code: "2008"},
    {name: "Gramercy", state: "LA", code: "2010"},
    {name: "Greenville", state: "MS", code: "2011"},
    {name: "Vicksburg (Jackson Municipal Airport)", state: "MS", code: "2015"},
    {name: "Knoxville", state: "TN", code: "2016"},
    {name: "Lake Charles", state: "LA", code: "2017"},
    {name: "Shreveport-Bossier City", state: "LA", code: "2018"},
    {name: "Houma", state: "LA", code: "2021"},
    {name: "Lafayette", state: "LA", code: "2023"},
    {name: "Ft. Smith", state: "AR", code: "2024"},
    {name: "Fayetteville", state: "AR", code: "2025"},
    {name: "Texarkana", state: "AR", code: "2026"},
    {name: "Tri-Cities Airport", state: "TN", code: "2027"},
    {name: "Jackson Airport", state: "MS", code: "2081"},
    {name: "Rogers Municipal Airport", state: "AR", code: "2084"},
    {name: "Fedex Corp Memphis Hub", state: "TN", code: "2095"},
    // === 6. Southwest Region ===
    {name: "Port Arthur", state: "TX", code: "2101"},
    {name: "Sabine", state: "TX", code: "2102"},
    {name: "Orange", state: "TX", code: "2103"},
    {name: "Beaumont", state: "TX", code: "2104"},
    {name: "Brownsville", state: "TX", code: "2301"},
    {name: "Del Rio", state: "TX", code: "2302"},
    {name: "Eagle Pass", state: "TX", code: "2303"},
    {name: "Laredo", state: "TX", code: "2304"},
    {name: "Hidalgo", state: "TX", code: "2305"},
    {name: "Rio Grande City", state: "TX", code: "2307"},
    {name: "Progreso", state: "TX", code: "2309"},
    {name: "Roma", state: "TX", code: "2310"},
    {name: "Harlingen", state: "TX", code: "2330"},
    {name: "Valley International User Fee Airport", state: "TX", code: "2383"},
    {name: "Area Port of Ysleta", state: "TX", code: "2401"},
    {name: "El Paso", state: "TX", code: "2402"},
    {name: "Presidio", state: "TX", code: "2403"},
    {name: "Tornillo", state: "TX", code: "2404"},
    {name: "Columbus", state: "NM", code: "2406"},
    {name: "Albuquerque", state: "NM", code: "2407"},
    {name: "Santa Teresa", state: "NM", code: "2408"},
    {name: "Fort Hancock", state: "TX", code: "2409"},
    {name: "Boquillas", state: "TX", code: "2410"},
    {name: "Deming", state: "NM", code: "2420"},
    {name: "Las Cruces", state: "NM", code: "2421"},
    {name: "Alamogordo", state: "NM", code: "2422"},
    {name: "Carlsbad", state: "NM", code: "2423"},
    {name: "Alpine", state: "TX", code: "2424"},
    {name: "Midland", state: "TX", code: "2425"},
    {name: "Van Horn", state: "TX", code: "2426"},
    {name: "Marfa", state: "TX", code: "2427"},
    {name: "Santa Teresa Airport", state: "NM", code: "2481"},
    {name: "Roswell Industrial Airport", state: "NM", code: "2482"},
    {name: "Douglas", state: "AZ", code: "2601"},
    {name: "Lukeville", state: "AZ", code: "2602"},
    {name: "Naco", state: "AZ", code: "2603"},
    {name: "Nogales", state: "AZ", code: "2604"},
    {name: "Phoenix", state: "AZ", code: "2605"},
    {name: "Sasabe", state: "AZ", code: "2606"},
    {name: "Sells", state: "AZ", code: "2607"},
    {name: "San Luis", state: "AZ", code: "2608"},
    {name: "Tucson", state: "AZ", code: "2609"},
    {name: "Sierra Vista", state: "AZ", code: "2610"},
    {name: "Yuma", state: "AZ", code: "2611"},
    {name: "Flagstaff", state: "AZ", code: "2620"},
    {name: "Kingman", state: "AZ", code: "2621"},
    {name: "Scottsdale User Fee Airport", state: "AZ", code: "2681"},
    {name: "Phoenix-Mesa Gateway Airport", state: "AZ", code: "2682"},
    {name: "Houston", state: "TX", code: "5301"},
    {name: "Texas City", state: "TX", code: "5306"},
    {name: "Houston George Bush Intercontinental Airport", state: "TX", code: "5309"},
    {name: "Galveston", state: "TX", code: "5310"},
    {name: "Freeport", state: "TX", code: "5311"},
    {name: "Corpus Christi", state: "TX", code: "5312"},
    {name: "Port Lavaca", state: "TX", code: "5313"},
    {name: "Hobby International Airport", state: "TX", code: "5314"},
    {name: "Ellington Field", state: "TX", code: "5315"},
    {name: "Sugar Land Regional UFA", state: "TX", code: "5381"},
    {name: "Conroe-North", state: "TX", code: "5382"},
    {name: "Dallas/Ft. Worth Airport", state: "TX", code: "5501"},
    {name: "Amarillo", state: "TX", code: "5502"},
    {name: "Lubbock", state: "TX", code: "5503"},
    {name: "Oklahoma City", state: "OK", code: "5504"},
    {name: "Tulsa", state: "OK", code: "5505"},
    {name: "Austin", state: "TX", code: "5506"},
    {name: "San Antonio", state: "TX", code: "5507"},
    {name: "Abilene", state: "TX", code: "5520"},
    {name: "San Angelo", state: "TX", code: "5521"},
    {name: "Midland International UFA", state: "TX", code: "5582"},
    {name: "Fort Worth Alliance UFA", state: "TX", code: "5583"},
    {name: "Addison Airport UFA", state: "TX", code: "5584"},
    {name: "Collin County Regional UFA", state: "TX", code: "5585"},
    {name: "Ardmore Municipal Airport", state: "OK", code: "5586"},
    {name: "Kelly Field Annex", state: "TX", code: "5587"},
    {name: "Dallas Love Field UFA", state: "TX", code: "5588"},
    {name: "Meacham International Airport", state: "TX", code: "5589"},
    // === 7. Pacific Region ===
    {name: "San Diego", state: "CA", code: "2501"},
    {name: "Andrade", state: "CA", code: "2502"},
    {name: "Calexico", state: "CA", code: "2503"},
    {name: "San Ysidro", state: "CA", code: "2504"},
    {name: "Tecate", state: "CA", code: "2505"},
    {name: "Otay Mesa", state: "CA", code: "2506"},
    {name: "Calexico-East", state: "CA", code: "2507"},
    {name: "Oceanside", state: "CA", code: "2520"},
    {name: "El Centro", state: "CA", code: "2521"},
    {name: "Otay-Cross Border User Fee Airport", state: "CA", code: "2582"},
    {name: "Los Angeles", state: "CA", code: "2704"},
    {name: "Santa Ana/Orange", state: "CA", code: "2705"},
    {name: "Bakersfield", state: "CA", code: "2706"},
    {name: "Port San Luis Harbor", state: "CA", code: "2707"},
    {name: "Long Beach", state: "CA", code: "2709"},
    {name: "Ventura", state: "CA", code: "2712"},
    {name: "Port Hueneme", state: "CA", code: "2713"},
    {name: "San Bernardino", state: "CA", code: "2714"},
    {name: "Capitan", state: "CA", code: "2715"},
    {name: "Morro Bay", state: "CA", code: "2719"},
    {name: "Los Angeles International Airport", state: "CA", code: "2720"},
    {name: "Ontario International Airport", state: "CA", code: "2721"},
    {name: "Las Vegas", state: "NV", code: "2722"},
    {name: "ECCF FedEx Corp Los Angeles", state: "CA", code: "2775"},
    {name: "ECCF IBC Los Angeles", state: "CA", code: "2776"},
    {name: "ECCF Micom Inglewood", state: "CA", code: "2777"},
    {name: "Southern California Logistics Airport UFA", state: "CA", code: "2783"},
    {name: "Meadows Field Airport", state: "CA", code: "2786"},
    {name: "DHL Los Angeles Hub", state: "CA", code: "2791"},
    {name: "UPS Ontario CA Hub", state: "CA", code: "2795"},
    {name: "San Francisco International Airport", state: "CA", code: "2801"},
    {name: "Eureka", state: "CA", code: "2802"},
    {name: "Fresno", state: "CA", code: "2803"},
    {name: "Monterey", state: "CA", code: "2805"},
    {name: "San Francisco", state: "CA", code: "2809"},
    {name: "Stockton", state: "CA", code: "2810"},
    {name: "Oakland", state: "CA", code: "2811"},
    {name: "Richmond", state: "CA", code: "2812"},
    {name: "Crockett", state: "CA", code: "2815"},
    {name: "Redding", state: "CA", code: "2817"},
    {name: "San Francisco IAP", state: "CA", code: "2818"},
    {name: "Ogden", state: "UT", code: "2819"},
    {name: "Martinez", state: "CA", code: "2820"},
    {name: "Redwood City", state: "CA", code: "2821"},
    {name: "Provo", state: "UT", code: "2822"},
    {name: "St. George", state: "UT", code: "2823"},
    {name: "Selby", state: "CA", code: "2827"},
    {name: "San Joaquin River", state: "CA", code: "2828"},
    {name: "San Pablo Bay", state: "CA", code: "2829"},
    {name: "Carquinez Strait", state: "CA", code: "2830"},
    {name: "Suisin Bay", state: "CA", code: "2831"},
    {name: "Reno", state: "NV", code: "2833"},
    {name: "San Jose International Airport", state: "CA", code: "2834"},
    {name: "Sacramento International Airport", state: "CA", code: "2835"},
    {name: "FedEx Corp Oakland Hub", state: "CA", code: "2895"},
    {name: "Astoria", state: "OR", code: "2901"},
    {name: "Newport", state: "OR", code: "2902"},
    {name: "Coos Bay", state: "OR", code: "2903"},
    {name: "Portland", state: "OR", code: "2904"},
    {name: "Longview", state: "WA", code: "2905"},
    {name: "Boise", state: "ID", code: "2907"},
    {name: "Vancouver", state: "WA", code: "2908"},
    {name: "Kalama", state: "WA", code: "2909"},
    {name: "Portland International Airport", state: "OR", code: "2910"},
    {name: "Twin Falls", state: "ID", code: "2911"},
    {name: "Idaho Falls", state: "ID", code: "2912"},
    {name: "Pueblo", state: "CO", code: "2913"},
    {name: "Durango", state: "CO", code: "2914"},
    {name: "Alamosa", state: "CO", code: "2915"},
    {name: "Grand Junction", state: "CO", code: "2916"},
    {name: "Glenwood Springs", state: "CO", code: "2917"},
    {name: "Craig", state: "CO", code: "2918"},
    {name: "Brush", state: "CO", code: "2919"},
    {name: "Cheyenne", state: "WY", code: "2920"},
    {name: "Casper", state: "WY", code: "2921"},
    {name: "Hillsboro Airport", state: "OR", code: "2983"},
    {name: "Seattle", state: "WA", code: "3001"},
    {name: "Tacoma", state: "WA", code: "3002"},
    {name: "Aberdeen", state: "WA", code: "3003"},
    {name: "Blaine", state: "WA", code: "3004"},
    {name: "Bellingham", state: "WA", code: "3005"},
    {name: "Everett", state: "WA", code: "3006"},
    {name: "Port Angeles", state: "WA", code: "3007"},
    {name: "Port Townsend", state: "WA", code: "3008"},
    {name: "Sumas", state: "WA", code: "3009"},
    {name: "Anacortes", state: "WA", code: "3010"},
    {name: "Nighthawk", state: "WA", code: "3011"},
    {name: "Danville", state: "WA", code: "3012"},
    {name: "Ferry", state: "WA", code: "3013"},
    {name: "Friday Harbor", state: "WA", code: "3014"},
    {name: "Boundary", state: "WA", code: "3015"},
    {name: "Laurier", state: "WA", code: "3016"},
    {name: "Point Roberts", state: "WA", code: "3017"},
    {name: "Kenmore Air Harbor", state: "WA", code: "3018"},
    {name: "Oroville", state: "WA", code: "3019"},
    {name: "Frontier", state: "WA", code: "3020"},
    {name: "Spokane", state: "WA", code: "3022"},
    {name: "Lynden", state: "WA", code: "3023"},
    {name: "Wenatchee", state: "WA", code: "3024"},
    {name: "Metaline Falls", state: "WA", code: "3025"},
    {name: "Olympia", state: "WA", code: "3026"},
    {name: "Yakima", state: "WA", code: "3028"},
    {name: "Seattle-Tacoma International Airport", state: "WA", code: "3029"},
    {name: "Pasco", state: "WA", code: "3030"},
    {name: "ECCF UPS Seattle", state: "WA", code: "3071"},
    {name: "ECCF Avion Brokers Seatac", state: "WA", code: "3072"},
    {name: "ECCF DHL Worldwide Seatac", state: "WA", code: "3073"},
    {name: "ECCF Airborne Express Seatac", state: "WA", code: "3074"},
    {name: "Grant County Airport", state: "WA", code: "3082"},
    {name: "UPS Seatac Hub", state: "WA", code: "3095"},
    {name: "Juneau", state: "AK", code: "3101"},
    {name: "Ketchikan", state: "AK", code: "3102"},
    {name: "Skagway", state: "AK", code: "3103"},
    {name: "Alcan", state: "AK", code: "3104"},
    {name: "Wrangell", state: "AK", code: "3105"},
    {name: "Dalton Cache", state: "AK", code: "3106"},
    {name: "Fairbanks", state: "AK", code: "3111"},
    {name: "Sitka", state: "AK", code: "3115"},
    {name: "Pelican", state: "AK", code: "3124"},
    {name: "Anchorage", state: "AK", code: "3126"},
    {name: "Saint Paul Airport", state: "AK", code: "3181"},
    {name: "FedEx Corp Anchorage Hub", state: "AK", code: "3195"},
    {name: "UPS Anchorage Hub", state: "AK", code: "3196"},
    {name: "Honolulu", state: "HI", code: "3201"},
    {name: "Hilo", state: "HI", code: "3202"},
    {name: "Kahului", state: "HI", code: "3203"},
    {name: "Nawiliwili-Port Allen", state: "HI", code: "3204"},
    {name: "Honolulu International Airport", state: "HI", code: "3205"},
    {name: "Kona", state: "HI", code: "3206"},
    {name: "Guam", state: "GU", code: "3210"},
    {name: "Saipan", state: "GU", code: "3211"},
    {name: "Tinian", state: "GU", code: "3212"},
    {name: "Rota", state: "GU", code: "3213"},
    {name: "ECCF FedEx Corp Honolulu", state: "HI", code: "3279"}
];

// 分页相关变量
let currentPage = 1;
const itemsPerPage = 80;
let filteredData = [...usPortCodes];

// 渲染Port表格（带分页）
function renderPortTable(data, page = 1) {
    const tbody = document.getElementById('portTableBody');
    if (!tbody) return;
    
    // 保存筛选后的数据
    filteredData = data;
    currentPage = page;
    
    // 计算分页
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);
    const pageData = data.slice(startIndex, endIndex);
    
    // 渲染表格
    let html = '';
    pageData.forEach((port, index) => {
        html += `<tr>
            <td>${startIndex + index + 1}</td>
            <td>${port.name}</td>
            <td>${port.state}</td>
            <td>${port.code}</td>
        </tr>`;
    });
    tbody.innerHTML = html;
    
    // 更新统计信息
    const countEl = document.getElementById('portCount');
    if (countEl) {
        countEl.textContent = `Showing ${startIndex + 1}-${endIndex} of ${data.length} ports`;
    }
    
    // 渲染分页控件
    renderPagination(totalPages, page);
}

// 渲染分页控件
function renderPagination(totalPages, currentPage) {
    const paginationEl = document.getElementById('portPagination');
    if (!paginationEl) return;
    
    if (totalPages <= 1) {
        paginationEl.innerHTML = '';
        return;
    }
    
    let html = '<div class="pagination">';
    
    // 上一页
    html += `<button class="page-btn ${currentPage === 1 ? 'disabled' : ''}" 
             onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
             ← Prev
             </button>`;
    
    // 页码
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    if (startPage > 1) {
        html += `<button class="page-btn" onclick="goToPage(1)">1</button>`;
        if (startPage > 2) {
            html += `<span class="page-dots">...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" 
                 onclick="goToPage(${i})">${i}</button>`;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += `<span class="page-dots">...</span>`;
        }
        html += `<button class="page-btn" onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }
    
    // 下一页
    html += `<button class="page-btn ${currentPage === totalPages ? 'disabled' : ''}" 
             onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
             Next →
             </button>`;
    
    html += '</div>';
    paginationEl.innerHTML = html;
}

// 跳转到指定页
function goToPage(page) {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    renderPortTable(filteredData, page);
    
    // 滚动到表格顶部
    const tableWrapper = document.querySelector('.port-table-wrapper');
    if (tableWrapper) {
        tableWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 搜索过滤
function filterPortCodes() {
    const nameFilter = document.getElementById('searchPortName')?.value.toLowerCase() || '';
    const stateFilter = document.getElementById('searchState')?.value || '';
    const codeFilter = document.getElementById('searchPortCode')?.value || '';
    
    const filtered = usPortCodes.filter(port => {
        const matchName = port.name.toLowerCase().includes(nameFilter);
        const matchState = !stateFilter || port.state === stateFilter;
        const matchCode = !codeFilter || port.code.includes(codeFilter);
        return matchName && matchState && matchCode;
    });
    
    renderPortTable(filtered, 1); // 搜索时重置到第一页
}

// 重置搜索
function resetPortSearch() {
    const nameInput = document.getElementById('searchPortName');
    const stateSelect = document.getElementById('searchState');
    const codeInput = document.getElementById('searchPortCode');
    
    if (nameInput) nameInput.value = '';
    if (stateSelect) stateSelect.value = '';
    if (codeInput) codeInput.value = '';
    
    renderPortTable(usPortCodes, 1);
}

// 表格排序
let sortDirection = {};
function sortPortTable(columnIndex) {
    const key = ['index', 'name', 'state', 'code'][columnIndex];
    sortDirection[key] = !sortDirection[key];
    
    const sorted = [...filteredData].sort((a, b) => {
        let valA, valB;
        if (key === 'index') return 0;
        if (key === 'name') { valA = a.name; valB = b.name; }
        if (key === 'state') { valA = a.state; valB = b.state; }
        if (key === 'code') { valA = a.code; valB = b.code; }
        
        if (sortDirection[key]) {
            return valA > valB ? 1 : -1;
        } else {
            return valA < valB ? 1 : -1;
        }
    });
    
    renderPortTable(sorted, 1);
}

// 页面加载后初始化Port表格
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        if (document.getElementById('portTableBody')) {
            renderPortTable(usPortCodes, 1);
        }
    }, 100);
});

// 监听文章显示事件，初始化Port表格
const originalShowArticle = window.showArticle;
window.showArticle = function(title) {
    originalShowArticle(title);
    if (title === 'US CBP Port Codes') {
        setTimeout(() => {
            renderPortTable(usPortCodes, 1);
        }, 100);
    }
};

console.log('🚀 货代知识库已加载完成！');

// ===== Apple风格滚动触发淡入效果 =====
function initScrollReveal() {
    // 为需要淡入的元素添加class
    const elementsToReveal = document.querySelectorAll('.region, .outline-section, .article-content-wrapper > h3, .step-item');
    
    elementsToReveal.forEach(el => {
        if (!el.classList.contains('fade-in-on-scroll')) {
            el.classList.add('fade-in-on-scroll');
        }
    });
    
    // Intersection Observer - 优雅的滚动检测
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // 添加staggered延迟
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, index * 50);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// 页面加载完成后初始化滚动效果
document.addEventListener('DOMContentLoaded', function() {
    // 延迟初始化以确保DOM完全加载
    setTimeout(initScrollReveal, 300);
});

// 当显示首页时重新初始化
const originalShowHome = window.showHome;
window.showHome = function() {
    originalShowHome();
    setTimeout(initScrollReveal, 100);
};

// 当显示大纲页面时初始化
const originalShowCategoryOutline = window.showCategoryOutline;
if (originalShowCategoryOutline) {
    window.showCategoryOutline = function(categoryKey, scrollToSection) {
        originalShowCategoryOutline(categoryKey, scrollToSection);
        setTimeout(initScrollReveal, 100);
    };
}

// ===== CBP Disposition Codes 数据和功能 =====
// 完整数据来自 CBP Appendix D - CAMIR V19 March 2025
const dispositionCodes = [
    // Basic Numeric Codes (02-99)
    { code: "02", name: "Entry Advisory", description: "Generated to a rail carrier as a result of an entry being filed against a bill either through selectivity or manually", category: "advisory" },
    { code: "03", name: "Port of Entry Change", description: "Generated when a rail carrier changes a port of entry - port of entry is different in consist from original bill", category: "advisory" },
    { code: "04", name: "Add Second Notify Party", description: "Generated to a rail carrier when a new second notify party SCAC code is assigned to a bill in an amendment to the consist record during train consisting", category: "advisory" },
    { code: "11", name: "Arrival of in-bond - complete movement", description: "Advisory generated when a paperless or conventional in-bond has been arrived at destination as a complete movement by the ACE M1 participant or by CBP: ENT/REL quantities unaffected", category: "inbond" },
    { code: "12", name: "Arrival of in-bond - bill of lading", description: "Advisory generated when a paperless or conventional in-bond has been arrived at destination by the bill of lading by the ACE M1 participant or by CBP: ENT/REL quantities unaffected", category: "inbond" },
    { code: "13", name: "Arrival of in-bond - container", description: "Advisory generated when a paperless or conventional in-bond has been arrived at destination by the container/seal by the ACE M1 participant or by CBP: ENT/REL quantities unaffected", category: "inbond" },
    { code: "14", name: "Delete entered quantity (transaction delete)", description: "Generated as a result of CBP action through the transaction delete function: Subtracts the ENT quantity", category: "advisory" },
    { code: "15", name: "Delete released quantity (transaction delete)", description: "Generated as a result of CBP action through the transaction delete function: Subtracts the REL quantity", category: "advisory" },
    { code: "16", name: "Delete entered/released quantity (transaction delete)", description: "Generated as a result of CBP action through the transaction delete function: Subtracts the ENT/REL quantities", category: "advisory" },
    { code: "18", name: "Master in-bond advisory", description: "Advisory generated to participant when an entry has been filed in the port of destination against an in-bond bill that is enroute: Not a release: ENT/REL quantities unaffected", category: "inbond" },
    { code: "19", name: "Actual conveyance arrival", description: "Advisory generated when a conveyance is arrived in ACE M1 by the ACE M1 participant or by CBP", category: "advisory" },
    { code: "20", name: "Delete Arrival of In-bond at Intermediate Port-Complete Movement", description: "Generated by CBP or ACE M1 participant action after paperless or conventional in-bond has been arrived at northern border intermediate port: Deletes all arrivals in all bills associated with the in-bond number", category: "inbond" },
    { code: "21", name: "Delete Arrival of In-bond at Intermediate Port-Bill of Lading", description: "Generated by CBP or ACE M1 participant action after paperless or conventional in-bond has been arrived at northern border intermediate port: Does not affect other bills associated with the in-bond number", category: "inbond" },
    { code: "22", name: "Delete Arrival of In-bond at Intermediate Port-Container", description: "Generated by CBP or ACE M1 participant action after paperless or conventional in-bond has been arrived at northern border intermediate port by container-seal", category: "inbond" },
    { code: "23", name: "Delete Departure of In-bond at Intermediate Port-Complete Movement", description: "Generated by CBP or ACE M1 participant action after paperless or conventional in-bond has been departed from northern border intermediate port", category: "inbond" },
    { code: "24", name: "Delete Departure of In-bond at Intermediate Port-Bill of Lading", description: "Generated by CBP or ACE M1 participant action after paperless or conventional in-bond has been departed from northern border intermediate port by bill of lading", category: "inbond" },
    { code: "25", name: "Delete Departure of In-bond at Intermediate Port-Container", description: "Generated by CBP or ACE M1 participant action after paperless or conventional in-bond has been departed from northern border port by container-seal", category: "inbond" },
    { code: "26", name: "Delete Transfer of Liability for In-bond", description: "Generated by CBP or ACE M1 participant action after transferring custodial liability for an in-bond movement from one bonded carrier to another by the complete movement", category: "inbond" },
    { code: "27", name: "Delete Transfer of Liability for Bill of Lading", description: "Generated by CBP or ACE M1 participant action after transferring custodial liability for an in-bond movement from one bonded carrier to another by the bill of lading", category: "inbond" },
    { code: "28", name: "Delete Transfer of Liability for Container", description: "Generated by CBP or ACE M1 participant action after transferring custodial liability for an in-bond movement from one bonded carrier to another by the container-seal", category: "inbond" },
    { code: "50", name: "Export of in-bond - complete movement", description: "Generated when paperless or conventional in-bond is exported from the destination port as a complete movement by the ACE M1 participant or by CBP. Do not EXPORT if any HOLDS are in force against the bill.", category: "inbond" },
    { code: "51", name: "Export of in-bond - bill of lading", description: "Generated when paperless or conventional in-bond is exported from the destination port as a bill of lading by the ACE M1 participant or by CBP. Do not EXPORT if any HOLDS are in force against the bill.", category: "inbond" },
    { code: "52", name: "Export of in-bond - container", description: "Generated when paperless or conventional in-bond is exported by the container from the destination port. Do not EXPORT if any holds are in force against the bill.", category: "inbond" },
    { code: "53", name: "Overdue export", description: "Advisory generated to ACE M1 participant when paperless or conventional TE or IE in-bond movement is not exported from the destination port within 30 days after the in-bond arrival", category: "advisory" },
    { code: "54", name: "Carrier bill - delete", description: "Generated in response to an amendment (A01) transmission from the ACE M1 participant deleting a bill from the manifest", category: "advisory" },
    { code: "55", name: "Carrier bill - add", description: "Generated in response to an amendment (A01) transmission from the ACE M1 participant adding a bill from the manifest", category: "advisory" },
    { code: "56", name: "Carrier bill - change", description: "Generated in response to an amendment (A01) transmission from the ACE M1 participant changing the quantity in a bill of lading without deleting it from the manifest", category: "advisory" },
    { code: "57", name: "Change arrival of in-bond - complete movement", description: "Generated when a paperless or conventional in-bond is arrived at destination as a complete movement, subsequent to the original arrival", category: "inbond" },
    { code: "58", name: "Change arrival of in-bond - bill of lading", description: "Generated when a paperless or conventional in-bond is arrived at destination by the bill of lading, subsequent to the original arrival", category: "inbond" },
    { code: "59", name: "Change arrival of in-bond - container", description: "Generated when a paperless or conventional in-bond is arrived at destination by the container/seal, subsequent to the original arrival", category: "inbond" },
    { code: "60", name: "Change export of in-bond - complete movement", description: "Generated when a paperless or conventional in-bond is exported from the destination port as a complete movement, subsequent to the original export", category: "inbond" },
    { code: "61", name: "Change export of in-bond - bill of lading", description: "Generated when a paperless or conventional in-bond is exported from the destination port as a bill of lading, subsequent to the original export", category: "inbond" },
    { code: "62", name: "Change export of in-bond - container", description: "Generated when paperless or conventional in-bond is exported from the destination port by container/seal, subsequent to the original export", category: "inbond" },
    { code: "63", name: "Delete arrival of in-bond - complete movement", description: "Generated as a result of CBP action through the supervisory update function: ENT/REL quantities unaffected", category: "inbond" },
    { code: "64", name: "Deleted arrival of in-bond - bill of lading", description: "Generated as a result of CBP action through the supervisory update function: ENT/REL quantities unaffected", category: "inbond" },
    { code: "65", name: "Delete arrival of in-bond - container", description: "Generated as a result of CBP action through the supervisory update function: ENT/REL quantities unaffected", category: "inbond" },
    { code: "66", name: "Delete export of in-bond - complete movement", description: "Generated as a result of CBP action through the supervisory update function: Subtracts ENT/REL quantities in all bills associated with the in-bond number", category: "inbond" },
    { code: "67", name: "Delete export of in-bond - bill of lading", description: "Generated as a result of CBP action through the transaction delete function: Subtracts ENT/REL quantities", category: "inbond" },
    { code: "68", name: "Delete export of in-bond - container", description: "Generated as a result of CBP action through the transaction delete function: Subtracts ENT/REL quantities in all bills associated with the container", category: "inbond" },
    { code: "69", name: "Bill on File", description: "Generated when a user is nominated as a SNP by a rail, carrier or NVO participant", category: "advisory" },
    { code: "70", name: "Penalty", description: "Generated as a result of CBP action: Indicates a CF5955A, Notice of Penalty, has been issued regarding the bill: Not a seizure", category: "advisory" },
    { code: "71", name: "Intensive hold for CBPA placed at port of discharge", description: "Generated as a result of a manually posted CBPA intensive hold effective in the port of discharge. Release is denied. Bill status changes to HELD. Cargo cannot be released until the HOLD is removed by CBP.", category: "hold" },
    { code: "72", name: "Inspection/document review hold for CBPA placed at port of discharge", description: "Generated as a result of a manually posted CBPA inspection/document review hold effective in the port of discharge. Release is denied. Bill status changes to HELD.", category: "hold" },
    { code: "73", name: "Fumigation hold for CBPA placed at port of discharge", description: "Generated as a result of a manually posted CBPA fumigation hold effective in the port of discharge. Release is denied. Bill status changes to HELD.", category: "hold" },
    { code: "74", name: "Intensive hold for CBPA removed at port of discharge", description: "Generated as a result of a manually posted removal of a CBPA intensive hold. Bill status returns to previous status. If there has been a RELEASE and no other HOLDS, cargo may be released.", category: "release" },
    { code: "75", name: "Inspection/document review hold for CBPA removed at port of discharge", description: "Generated as a result of a manually posted removal of a CBPA inspection/document review hold. Bill status returns to previous status.", category: "release" },
    { code: "76", name: "Fumigation hold for CBPA removed at port of discharge", description: "Generated as a result of a manually posted removal of a CBPA fumigation hold. Bill status returns to previous status.", category: "release" },
    { code: "77", name: "Intensive hold for CBPA placed at port of in-bond destination", description: "Generated as a result of a manually posted CBPA intensive hold effective in the port of in-bond destination. Release is denied. Bill status changes to HELD.", category: "hold" },
    { code: "78", name: "Inspection/document review hold for CBPA placed at port of in-bond destination", description: "Generated as a result of a manually posted CBPA inspection/document review hold effective in the port of in-bond destination. Release is denied.", category: "hold" },
    { code: "79", name: "Fumigation hold for CBPA placed at port of in-bond destination", description: "Generated as a result of a manually posted CBPA fumigation hold effective in the port of in-bond destination. Release is denied.", category: "hold" },
    { code: "80", name: "Intensive hold for CBPA removed at port of in-bond destination", description: "Generated as a result of a manually posted removal of a CBPA intensive hold effective in the port of in-bond destination. Bill status returns to previous status.", category: "release" },
    { code: "81", name: "Inspection/document review hold for CBPA removed at port of in-bond destination", description: "Generated as a result of a manually posted removal of a CBPA inspection/document review hold effective in the port of in-bond destination.", category: "release" },
    { code: "82", name: "Fumigation hold for CBPA removed at port of in-bond destination", description: "Generated as a result of a manually posted removal of a CBPA fumigation hold effective in the port of in-bond destination.", category: "release" },
    { code: "83", name: "PTT cancelled", description: "Generated as a result of CBP action through the transaction delete function: ENT/REL quantities unaffected", category: "advisory" },
    { code: "84", name: "Transfer for exam cancelled", description: "Generated as a result of on-line input by CBP", category: "advisory" },
    { code: "85", name: "Arrive in-bond at intermediate port", description: "Generated when a paperless or conventional in-bond has been arrived at a northern border intermediate port as a complete movement", category: "inbond" },
    { code: "86", name: "Arrive bill of lading at intermediate port", description: "Generated when a paperless or conventional in-bond has been arrived at a northern border intermediate port by the bill of lading", category: "inbond" },
    { code: "87", name: "Arrive container at intermediate port", description: "Generated when a paperless or conventional in-bond has been arrived at a northern border intermediate port by the container/seal", category: "inbond" },
    { code: "88", name: "Depart in-bond from intermediate port", description: "Generated when a paperless or conventional in-bond has departed from a northern border intermediate port as a complete movement", category: "inbond" },
    { code: "89", name: "Depart bill of lading from intermediate port", description: "Generated when a paperless or conventional in-bond has departed from a northern border intermediate port as a bill of lading", category: "inbond" },
    { code: "90", name: "Depart container from intermediate port", description: "Generated when a paperless or conventional in-bond has departed from a northern border intermediate port by container/seal", category: "inbond" },
    { code: "91", name: "Transfer of liability for in-bond", description: "Generated in response to action either by the ACE M1 participant or by CBP in transferring custodial liability for an in-bond movement from one bonded carrier to another", category: "inbond" },
    { code: "92", name: "Transfer of liability for bill of lading", description: "Generated in response to action either by the ACE M1 participant or by CBP in transferring custodial liability for an in-bond movement from one bonded carrier to another by the bill of lading", category: "inbond" },
    { code: "93", name: "Transfer of liability for container", description: "Generated in response to action either by the ACE M1 participant or by CBP in transferring custodial liability for an in-bond movement from one bonded carrier to another by the container/seal", category: "inbond" },
    { code: "95", name: "In-bond deleted", description: "Generated in response to action by CBP: An in-bond created by CBP on-line has been deleted via on-line function: All non-automated bills associated with the in-bond are also deleted", category: "inbond" },
    { code: "96", name: "Manifest Consist", description: "This will be used in the ABI NS Application, Record Identifier 30. It indicates that Consist data is being transmitted in the ABI NS Application set.", category: "other" },
    { code: "97", name: "Conveyance Departure (In-bond)", description: "Generated when a truck manifest conveyance carrying an in-bond is allowed to leave the port of first arrival. This message indicates that the in-bond is enroute to its destination.", category: "inbond" },
    { code: "98", name: "Release Conveyance", description: "Generated as a result of on-line input by CBP. Indicates that a level hold has been removed. This notice is transmitted to a filer only.", category: "release" },
    { code: "99", name: "Train Consist Deleted", description: "This will be used in the ABI NS Application, Record Identifier 30. It indicates that the bills are no longer associated with that particular train.", category: "other" },
    
    // 1X Series - Entry/Release/Hold Codes
    { code: "1A", name: "Entered: Intensive examination required", description: "Generated as a result of selectivity processing or CBP manual posting: Writes ENT quantity to the bill. An entry has been filed against the cargo, and it is pending examination by CBP. Cargo is not RELEASED.", category: "hold" },
    { code: "1B", name: "Released: Intensive examination completed", description: "Generated as a result of selectivity processing or CBP manual posting: Writes REL quantity to the bill. The cargo examination by CBP has been completed and the cargo has been released. Do not RELEASE until all HOLDS have been removed.", category: "release" },
    { code: "1C", name: "Entered and released: General examination", description: "Generated as a result of selectivity processing or CBP manual posting: Writes ENT/REL quantity to the bill. Entry has been filed and the cargo has been released. Do not RELEASE cargo until all HOLDS have been removed.", category: "release" },
    { code: "1F", name: "CBP hold removed at port of in-bond destination", description: "Generated as a result of a CBP hold removal posting affecting the port of in-bond destination: The bill returns to previous status from HELD. If there are no other HOLDS, cargo may be RELEASED.", category: "release" },
    { code: "1G", name: "CBP hold placed at port of in-bond destination", description: "Generated as a result of a manually posted CBP hold effective in the port of in-bond destination: Release is denied: Bill status changes to HELD. Cargo cannot be released until RELEASED by CBP and all destination HOLDS have been removed.", category: "hold" },
    { code: "1H", name: "CBP hold placed at port of discharge/Port of export", description: "Generated as a result of a manually posted CBP hold effective in the port of discharge (conveyance arrival): Release is denied: Bill status changes to HELD. Cargo cannot be released until the HOLD is removed by CBP.", category: "hold" },
    { code: "1I", name: "CBP hold removed at port of discharge/Port of export", description: "Generated as a result of a manually posted removal of a CBP hold effective in the port of discharge/Port of export: Bill status returns to previous status. If there has been a RELEASE and no other HOLDS, cargo may be released.", category: "release" },
    { code: "1J", name: "In-bond movement authorized: Bill of lading open", description: "Generated in response to IT, TE, and IE bill data input by ACE M1 participants or CBP: ENT/REL quantities unaffected. If there are no HOLDS at the port of discharge, the cargo may move in-bond to the destination port.", category: "inbond" },
    { code: "1K", name: "Bill of lading late in 5 days", description: "Advisory generated for IT, TE, and IE in-bond bills created by ACE M1 participants that have not been arrived at destination 5 days before the expiration of the transit period", category: "advisory" },
    { code: "1L", name: "Bill of lading late", description: "Advisory generated for IT, TE, and IE in-bond bills created by ACE M1 participants that have not been arrived at destination by the expiration of the transit period", category: "advisory" },
    { code: "1M", name: "Bill of lading message transmission", description: "Generated as a result of CBP action: Free form message regarding the bill", category: "advisory" },
    { code: "1N", name: "Overage", description: "Advisory generated when ENT/REL quantity exceeds AMEND quantity as a result of entry posting. Actual count greater than manifested amount. Amended quantity affected and carrier response (A01) expected.", category: "advisory" },
    { code: "1O", name: "Shortage", description: "Generated as a result of landed quantity verification by CBP: Actual count less than manifested amount: Amended quantity affected and carrier response (A01) expected", category: "advisory" },
    { code: "1P", name: "Within case shortage, goods specifically manifested", description: "Generated as a result of landed quantity verification by CBP: Actual count of merchandise within cases is less than manifested amount", category: "advisory" },
    { code: "1Q", name: "US intransit bills released", description: "Generated to each bill in a USA-Canada-USA intransit movement when the conveyance arrives in USA at the end of the movement. Bills are released as US Goods returned.", category: "release" },
    { code: "1R", name: "Pending eligible General Order", description: "Advisory generated 2 days before the expiration of lay order: Indicates ENT/REL quantities on the bill are less than AMEND quantity", category: "advisory" },
    { code: "1S", name: "Ordered to General Order", description: "Advisory generated at expiration of lay order: Indicates discrepancy in ENT/REL quantities and AMEND quantity on the bill have not been resolved by end of lay order", category: "advisory" },
    { code: "1T", name: "Seized", description: "Generated as a result of manual posting by CBP indicating that the manifested or partial quantity of the bill has been seized for violations: The seized quantity amount is written in the ENT/REL quantity fields", category: "hold" },
    { code: "1U", name: "Sent to General Order", description: "Generated as a result of manual posting by CBP or G01, G03 records indicating that the manifested or partial quantity of the bill has been removed to a general order facility", category: "advisory" },
    { code: "1W", name: "Within port transfer authorized: Bill of lading remains open", description: "Generated as a result of a participant request for PTT (Permit to Transfer), T01, or by manual posting of a PTT by CBP: Cargo cannot be transferred until all HOLDS are removed by CBP.", category: "inbond" },
    { code: "1X", name: "Transfer for Exam", description: "Generated as a result of on-line input by CBP to designate a transfer to a CES (container examination station) for examination. Transfer with active hold is authorized.", category: "hold" },
    { code: "1Y", name: "MVOC-NVOC Bill of Lading Match", description: "Generated to NVO when the SCAC and bill number transmitted by the NVO in the B04 record matches that of the contract carrier (MVOC).", category: "advisory" },
    
    // 2X Series
    { code: "2F", name: "CBPA miscellaneous hold removed at port of in-bond destination", description: "Generated as a result of an CBPA miscellaneous hold removal posting affecting the port of in-bond destination. A HOLD at the in-bond destination has been removed.", category: "release" },
    { code: "2G", name: "CBPA miscellaneous hold placed at port of in-bond destination", description: "Generated as a result of a manually posted CBPA miscellaneous hold effective in the port of in-bond destination: Release is denied: Bill status changes to HELD.", category: "hold" },
    { code: "2H", name: "CBPA miscellaneous hold placed at port of discharge", description: "Generated as a result of a manually posted CBPA miscellaneous hold effective in the port of discharge. Release is denied. Bill status changes to HELD.", category: "hold" },
    { code: "2I", name: "CBPA miscellaneous hold removed at port of discharge", description: "Generated as a result of a manually posted removal of a CBPA miscellaneous hold effective in the port of discharge. Bill status returns to previous status.", category: "release" },
    { code: "2M", name: "Value may exceed consignee daily max ET86", description: "Generated on a bill when the consignee's daily de minimis (entry type 86) cargo value may exceed the CBP defined maximum of $800.", category: "advisory" },
    { code: "2O", name: "ISF Hold - no ISF on file", description: "Generated when a Bill is received without ISF on file as part of the ISF Compliance program", category: "hold" },
    { code: "2P", name: "ISF Hold - ISF Compliance Issue", description: "Generated on a Bill when ISF compliance issue is identified as part of the ISF Compliance Program.", category: "hold" },
    { code: "2Q", name: "Do Not Load - No ISF On File", description: "Generated when a Bill is received without ISF on file as part of the ISF Compliance program", category: "hold" },
    { code: "2R", name: "Do Not Load - ISF Compliance Issue", description: "Generated on a Bill when ISF compliance issue is identified as part of the ISF Compliance Program.", category: "hold" },
    { code: "2Z", name: "Master/House Container Mis-Match", description: "Generated as a result of a comparison between the Master and House reported containers. Those containers that exist against either the Master or House that do not have a corresponding match will receive this message.", category: "advisory" },
    
    // 3X Series
    { code: "3F", name: "Other Government Agency hold removed at port of in-bond destination", description: "Generated as a result of a manually posted removal of an Other Government Agency hold effective in the port of in-bond destination.", category: "release" },
    { code: "3G", name: "Other Government Agency hold placed at port of in-bond destination", description: "Generated as a result of a manually posted Other Government Agency hold effective in the port of in-bond destination. Release is denied.", category: "hold" },
    { code: "3H", name: "Other Government Agency hold placed at port of discharge", description: "Generated as a result of a manually posted Other Government Agency hold effective in the port of discharge. Release is denied. Bill status changes to HELD.", category: "hold" },
    { code: "3I", name: "Other Government Agency hold removed at port of discharge", description: "Generated as a result of a manually posted removal of an Other Government Agency hold effective in the port of discharge.", category: "release" },
    { code: "3M", name: "Unauthorized Attempt to use Bond", description: "Generated for the Custodial Bond owner when an unauthorized party tries to use a bond.", category: "advisory" },
    { code: "3P", name: "Unauthorized Port of Origin for In-bond", description: "Generated for the Custodial Bond owner when a party is not authorized to use a bond for the given in-bond port of origin.", category: "advisory" },
    { code: "3Q", name: "Unauthorized Port of Destination for In-bond", description: "Generated for the Custodial Bond owner when a party is not authorized to use a bond for the given in-bond port of destination.", category: "advisory" },
    { code: "3R", name: "Attempt to Use Bond Outside Specified Date Range", description: "Generated for the Custodial Bond owner when a party's authorization to use a bond is not active based on the begin/end date range.", category: "advisory" },
    { code: "3U", name: "Importer Security Filing Removed", description: "Generated as a result of the deleting of an Importer Security Filing.", category: "advisory" },
    { code: "3W", name: "Request for In-bond Diversion Granted", description: "Generated as a result of an accepted request to divert an in-bond to a new destination.", category: "inbond" },
    { code: "3Z", name: "Importer Security Filing on File", description: "Generated as a result of an accepted Importer Security Filing. An advisory message indicating that the Import Security Filing has been accepted for this shipment.", category: "advisory" },
    
    // 4X Series
    { code: "4A", name: "Override", description: "Generated as a result of selectivity processing: Overrides 1C or 1B: Subtracts REL quantity from bill if preceding notification was 1C or 1B. Do not RELEASE cargo.", category: "hold" },
    { code: "4C", name: "Override", description: "Generated as a result of selectivity processing: Overrides 1A to a 1C: Writes REL quantity to the bill. Cargo examination has been overridden. Cargo is RELEASED, however, do not RELEASE cargo if any HOLDS are still in force.", category: "release" },
    { code: "4E", name: "Entry cancelled", description: "Generated as a result of selectivity processing: Indicates previous entry posting was withdrawn by the broker.", category: "advisory" },
    { code: "4H", name: "Invalid Shipper Hold Placed", description: "Generated when an invalid shipper name is provided for the bill of lading.", category: "hold" },
    { code: "4I", name: "Invalid Shipper Hold Removed", description: "Generated when the amended shipper name is valid for the bill of lading. The hold is subsequently removed.", category: "release" },
    { code: "4O", name: "ISF Hold Removed for no ISF on file", description: "Generated to remove the ISF Hold identified in 2O", category: "release" },
    { code: "4P", name: "ISF Hold Removed for ISF Compliance Issue", description: "Generated to remove the ISF Hold identified in 2P", category: "release" },
    { code: "4Q", name: "Remove Do Not Load - No ISF On File", description: "Generated to remove the Do Not Load identified in 2Q", category: "release" },
    { code: "4R", name: "Remove Do Not Load - ISF Compliance Issue", description: "Generated to remove the Do Not Load identified in 2R", category: "release" },
    
    // 5X-9X Series
    { code: "5H", name: "Entry Processing Hold", description: "Generated as a result of selectivity processing: Indicates previous entry posting has been targeted for a document discrepancy exam. Release is denied. Entry status changed to HELD.", category: "hold" },
    { code: "5I", name: "Entry Processing Hold Removed", description: "Generated as a result of selectivity processing: Bill status returns to previous status. Writes rel quantity to the bill.", category: "release" },
    { code: "6H", name: "No Load", description: "Generated by CBP. Cargo has to be held at loading port until customs confirms to load cargo.", category: "hold" },
    { code: "6I", name: "Release of No Load", description: "Generated by CBP. Cargo may again resume loading and is allowed to transit CBP territory.", category: "release" },
    { code: "7H", name: "NII Exam Ordered", description: "Informs the carrier that a Non Intrusive Inspection (NII) has been ordered and the cargo has been held.", category: "hold" },
    { code: "7I", name: "NII Exam Removed", description: "Informs the carrier that the NII has been removed. This disposition code cancels out the 7H held status.", category: "release" },
    { code: "8H", name: "Invalid Cargo Description Hold Placed", description: "Generated when an invalid or vague cargo description is provided for the bill of lading.", category: "hold" },
    { code: "8I", name: "Invalid Cargo Description Hold Removed", description: "Generated when the amended cargo description is valid for the bill of lading. The hold is subsequently removed.", category: "release" },
    { code: "9H", name: "Invalid Consignee Hold Placed", description: "Generated when an invalid consignee name is provided for the bill of lading.", category: "hold" },
    { code: "9I", name: "Invalid Consignee Hold Removed", description: "Generated when the amended consignee name is valid for the bill of lading. The hold is subsequently removed.", category: "release" },
    
    // AX Series - FDA/Arrival
    { code: "A1", name: "FDA PN Advisory", description: "An advisory message indicating that the FDA Prior Notice of arrival has been filed for the shipment.", category: "pga" },
    { code: "A2", name: "FDA PN Warning", description: "An advisory message indicating that movement is authorized and that Prior Notice data is required. (Message is sent by CBP in systems override mode only.)", category: "pga" },
    { code: "A3", name: "FDA PN Movement Denied", description: "An advisory message indicating that the FDA Prior Notice data is missing and Authorization for Movement of the cargo is being denied.", category: "pga" },
    { code: "AC", name: "Arrival of intransit conveyance in Canada", description: "Generated when an intransit truck arrives in Canada at the start of a USA-Canada-USA movement. Also generated when an intransit truck arrives in Canada at the end of a Canada-USA-Canada movement.", category: "other" },
    { code: "AU", name: "Arrival of intransit conveyance in USA", description: "Generated when an intransit truck arrives in USA at the start of a Canada-USA-Canada movement. Also generated when an intransit truck arrives in USA at the end of a USA-Canada-USA movement.", category: "other" },
    
    // BX Series - Zone/Admission
    { code: "BC", name: "Goods Not Authorized for Zone", description: "Informs the carrier that the goods they thought were going into a zone will not be and additional arrangements for clearance must be accomplished.", category: "advisory" },
    { code: "BD", name: "Goods Accepted/No Qty Verification", description: "Informs the carrier the goods were acceptable to the Zone Operator and the goods will be processed by the Zone.", category: "advisory" },
    { code: "BE", name: "Goods Arrived", description: "Informs the carrier that the goods have arrived at the zone. This is an inferred closure for the PTT.", category: "advisory" },
    { code: "BG", name: "Admission Advisory", description: "Informs the carrier that the posted bill has been placed on a FTZ Admission.", category: "advisory" },
    { code: "BH", name: "Admission is Deleted", description: "Informs the carrier that the previous admission filing has been deleted.", category: "advisory" },
    
    // SX Series - ISF Match
    { code: "S1", name: "Bill of Lading Matched to Importer Security Filing", description: "Generated to the party filing the Importer Security Filing when the ISF is matched with a bill on file with CBP.", category: "advisory" },
    { code: "S2", name: "Bill of Lading not on file", description: "Generated to the party filing the Importer Security Filing when the ISF does not match a bill on file with CBP.", category: "advisory" },
    { code: "S3", name: "Bill of Lading not on file 5 days after filing the ISF", description: "Generated to the party filing the Importer Security Filing when the ISF does not match a bill on file with CBP within 5 days after the ISF is received.", category: "advisory" },
    { code: "S4", name: "Bill of Lading not on file 20 days after filing the ISF", description: "Generated to the party filing the Importer Security Filing when the ISF does not match a bill on file with CBP within 20 days after the ISF is received.", category: "advisory" },
    { code: "S5", name: "Bill of Lading not on file 30 days after filing the ISF", description: "Generated to the party filing the Importer Security Filing when the ISF does not match a bill on file with CBP within 30 days after the ISF is received.", category: "advisory" },
    { code: "S6", name: "No Bill Match (Wrong Type)", description: "Generated when the ISF bill is on file in AMS as a different bill type.", category: "advisory" },
    { code: "S7", name: "Duplicate ISF By Another Filer", description: "An ISF with same Bill Number and Importer of Record has been filed by another filer.", category: "advisory" },
    { code: "SA", name: "No Bill Match (Wrong Type) - 5 days", description: "Generated when the ISF bill is on file in AMS as a different bill type, 5 days after filing the ISF", category: "advisory" },
    { code: "SB", name: "No Bill Match (Wrong Type) - 20 days", description: "Generated when the ISF bill is on file in AMS as a different bill type, 20 days after filing the ISF", category: "advisory" },
    { code: "SC", name: "No Bill Match (Wrong Type) - 30 days", description: "Generated when the ISF bill is on file in AMS as a different bill type, 30 days after filing the ISF", category: "advisory" },
    
    // Conveyance Codes
    { code: "AAD", name: "Actual Arrival of Conveyance at First Port", description: "Generated in ANSI X12 350 Set V901 Element and in CAMIR R06 record in Response to a Conveyance Arrival Message", category: "other" },
    { code: "CAE", name: "Actual departure of conveyance from last US port", description: "Generated in ANSI X12 350 Set V901 Element and in CAMIR R06 record in Response to a Conveyance Departure Message", category: "other" },
    { code: "CCE", name: "Cancel departure of Conveyance from last US Port", description: "Generated in ANSI X12 350 Set V901 Element and in CAMIR R06 record in Response to a Conveyance Departure Cancellation Message", category: "other" },
    { code: "COC", name: "Cancel arrival of Conveyance at First Port", description: "Generated in ANSI X12 350 Set V901 Element and in CAMIR R06 record in Response to a Conveyance Arrival Cancellation Message", category: "other" },
    
    // Truck/Rail Release Codes
    { code: "HCR", name: "Crew/Passengers Held", description: "Used for CBP Truck Release when crew members or passengers are detained at border.", category: "hold" },
    { code: "HEQ", name: "Equipment Held", description: "Used for CBP Truck Release when equipment is detained at border.", category: "hold" },
    { code: "HMI", name: "Hold Conveyance", description: "Used for CBP Truck/Rail Release when conveyance is detained at border.", category: "hold" },
    { code: "HRE", name: "Release from Hold/Miscellaneous", description: "Used for CBP Rail Release when a hold/miscellaneous is removed.", category: "release" },
    { code: "HTR", name: "Trip Held", description: "Used for CBP Truck Release in lieu of HCR, HEQ, HMI and Cargo Held when all components are held.", category: "hold" },
    { code: "LCK", name: "Consist Lock", description: "Used for CBP Rail Release after a train has crossed the border. Carrier or authorized agent can't amend the consist without CBP approval.", category: "other" },
    { code: "OCA", name: "Overdue Conveyance Arrival", description: "Used for CBP Truck/Rail/Ocean Release when conveyance has not arrived at first U.S. port within two (2) days of consisting.", category: "advisory" },
    { code: "OCE", name: "Overdue Conveyance Departure", description: "Used for CBP Truck/Rail/Ocean Release when conveyance has not departed within expected timeframe.", category: "advisory" },
    { code: "RCR", name: "Crew/Passengers Released", description: "Used for CBP truck Release when crew/passengers are completely released at the border without detention or when detention has been completed.", category: "release" },
    { code: "REQ", name: "Equipment Released", description: "Used for CBP truck Release when equipment is completely released at the border without detention or when detention has been completed.", category: "release" },
    { code: "RTR", name: "Release Trip", description: "Used for CBP truck Release in lieu of RCR, RCO, or RCO when the entire trip is released at the border without detention.", category: "release" },
    { code: "SEI", name: "Seized Equipment", description: "Used for CBP Rail Release when equipment is seized at the border for violations.", category: "hold" },
    { code: "SER", name: "Seized Equipment removed", description: "Used for CBP Rail Release when previously seized equipment is completely released at the border.", category: "release" },
    { code: "ULC", name: "Consist Unlock", description: "Used for CBP Rail Release when to allow a previously locked consist to be amended with approval of CBP.", category: "release" },
    
    // Diversion Codes
    { code: "DC", name: "Conveyance Diversion Cancelled", description: "Used for CBP conveyance diversion. Previously requested and approved diversion of conveyance is cancelled by carrier", category: "other" },
    { code: "DV", name: "Conveyance Diverted", description: "Used for CBP conveyance diversion. Previously requested and approved diversion of conveyance has resulted in conveyance being diverted to US port different from the one originally intended.", category: "other" },
    { code: "DVA", name: "Conveyance Diversion Approval", description: "Used for CBP conveyance diversion. Previously requested diversion of conveyance has been approved by CBP", category: "other" },
    { code: "DVC", name: "Conveyance Diversion Cancellation", description: "Used for CBP conveyance diversion. Previously requested and approved diversion of conveyance has been cancelled by carrier", category: "other" },
    { code: "DVR", name: "Conveyance Diversion Rejection", description: "Used for CBP conveyance diversion. Previously requested diversion of conveyance has been rejected by CBP", category: "other" },
    { code: "DVS", name: "Conveyance Diversion Submission", description: "Used for CBP conveyance diversion. A request to divert a conveyance from landing at the port originally intended to a different port has been submitted to CBP.", category: "other" },
    { code: "DVU", name: "Conveyance Diversion Update", description: "Used for CBP conveyance diversion. Previously requested and approved diversion of conveyance has been updated by carrier", category: "other" },
    
    // FMCSA Codes
    { code: "FCA", name: "Carrier does not possess valid U.S. operating authority", description: "Used for CBP Truck Release for FMCSA notifications. The carrier does not possess valid operating authority and will be subject to enforcement action.", category: "other" },
    { code: "FCC", name: "Safety Score Indicates Inspection is Warranted", description: "Used for CBP Truck Release for FMCSA notifications. Safety score indicates Inspection is warranted.", category: "other" },
    { code: "FCD", name: "Carrier Check not performed, data not available", description: "Used for CBP Truck Release for FMCSA notifications. Carrier Check not performed; data not available at this time.", category: "other" },
    { code: "FCI", name: "Carrier's current insurance does not meet minimum level", description: "Used for CBP Truck Release for FMCSA notifications. The carrier's current insurance level does not meet the minimum requirements.", category: "other" },
    { code: "FCS", name: "Carrier Data not found in FMCSA system", description: "Used for Truck Release for FMCSA notifications. The carrier is not registered with FMCSA.", category: "other" },
    { code: "FDD", name: "Driver check not performed. Data unavailable.", description: "Used for CBP Truck Release for FMCSA notifications. Driver check not performed; data not available at this time.", category: "other" },
    { code: "FDH", name: "Driver does not have proper CDL endorsements for HAZMAT", description: "Used for Truck Release for FMCSA notifications. The driver does not have a valid CDL with the proper HM endorsement.", category: "other" },
    { code: "FDL", name: "Driver does not have valid, current CDL", description: "Used for CBP Truck Release for FMCSA notifications. The driver does not have a valid/current CDL or equivalent.", category: "other" },
    { code: "FED", name: "Trailer check not performed; data not available", description: "Used for CBP Truck Release for FMCSA notifications. Trailer check not performed; data not available at this time.", category: "other" },
    { code: "FVC", name: "No current CVSA decal on file", description: "Used for CBP Truck Release for FMCSA notifications. No current safety inspection decal on file for one or more commercial motor vehicles.", category: "other" },
    { code: "FVD", name: "Tractor check not performed; data not available", description: "Used for CBP Truck Release for FMCSA notifications. Tractor check not performed; data not available at this time.", category: "other" },
    
    // ITN/Export Codes
    { code: "N1", name: "APHIS Fumigation Hold", description: "Add Animal Plant Health Inspection Services Fumigation Hold at Port of Origin/Port of export", category: "pga" },
    { code: "N2", name: "APHIS Fumigation Hold at In-bond Destination", description: "Add Animal Plant Health Inspection Services Fumigation Hold at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "N3", name: "Remove APHIS Fumigation Hold", description: "Remove Animal Plant Health Inspection Services Fumigation Hold at Port of Origin/Port of export", category: "pga" },
    { code: "N4", name: "Remove APHIS Fumigation Hold at In-bond Destination", description: "Remove Animal Plant Health Inspection Services Fumigation Hold at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "N5", name: "Invalid ITN Number", description: "Generated in ANSI X12 350 set and CAMIR R06 n response to submitting an invalid ITN Number in an export manifest", category: "other" },
    { code: "N6", name: "Invalid ITN Count", description: "Generated in ANSI X12 350 set and CAMIR R06 n response to submitting an invalid ITN count in an export manifest.", category: "other" },
    { code: "N7", name: "Missing ITN Number", description: "Generated in ANSI X12 350 set and CAMIR R06 n response to submitting no ITN Number in an export manifest", category: "other" },
    { code: "N8", name: "Export ITN Number", description: "Generated in ANSI X12 350 set and CAMIR R06 n response to submitting an exported ITN Number in an export manifest", category: "other" },
    { code: "IW", name: "ITN approved", description: "ITN for export has been approved", category: "advisory" },
    
    // ===== PGA ENFORCEMENT ACTION CODES (D-16 to D-40) =====
    // F Series - AMS/APHIS PGA Codes
    { code: "F0", name: "AMS PGA - Denied Entry Hold", description: "Add Agricultural Marketing Services Hold for Denied Entry at Port of Origin", category: "pga" },
    { code: "F1", name: "AMS PGA - Denied Entry Hold at In-bond Destination", description: "Add Agricultural Marketing Services Hold for Denied Entry at Port of In-Bond Destination", category: "pga" },
    { code: "F2", name: "Remove AMS PGA - Denied Entry Hold", description: "Remove Agricultural Marketing Services Hold for Denied Entry at Port of Origin", category: "pga" },
    { code: "F3", name: "Remove AMS PGA - Denied Entry Hold at In-bond Destination", description: "Remove Agricultural Marketing Services Hold for Denied Entry at Port of In-bond Destination", category: "pga" },
    { code: "F4", name: "AMS PGA - Seal Check Hold", description: "Add Agricultural Marketing Services Hold for Seal Check at Port of Origin", category: "pga" },
    { code: "F5", name: "AMS PGA - Seal Check Hold at In-Bond Destination", description: "Add Agricultural Marketing Services Hold for Seal Check at Port of In-Bond Destination", category: "pga" },
    { code: "F6", name: "Remove AMS PGA - Seal Check Hold", description: "Remove Agricultural Marketing Services Hold for Seal Check at Port of Origin", category: "pga" },
    { code: "F7", name: "Remove AMS PGA - Seal Check Hold at In-bond Destination", description: "Remove Agricultural Marketing Services Hold for Seal Check at Port of In-bond Destination", category: "pga" },
    { code: "F8", name: "APHIS PGA - Seal Check Hold", description: "Add Animal Plant Health Inspection Services Hold for Seal Check at Port of Origin", category: "pga" },
    { code: "F9", name: "APHIS PGA - Seal Check Hold at In-Bond Destination", description: "Add Animal Plant Health Inspection Services Hold for Seal Check at Port of In-Bond Destination", category: "pga" },
    { code: "FA", name: "Remove APHIS PGA - Seal Check Hold", description: "Remove Animal Plant Health Inspection Services Hold for Seal Check at Port of Origin", category: "pga" },
    { code: "FB", name: "Remove APHIS PGA - Seal Check Hold at In-bond Destination", description: "Remove Animal Plant Health Inspection Services Hold for Seal Check at Port of In-bond Destination", category: "pga" },
    { code: "FC", name: "AMS PGA - PGA Documentation Required Hold", description: "Add Agricultural Marketing Services Hold for PGA Documentation Required at Port of Origin", category: "pga" },
    { code: "FD", name: "AMS PGA - PGA Documentation Required Hold at In-bond Destination", description: "Add Agricultural Marketing Services Hold for PGA Documentation Required at Port of In-Bond Destination", category: "pga" },
    { code: "FE", name: "Remove AMS PGA - PGA Documentation Required Hold", description: "Remove Agricultural Marketing Services Hold for PGA Documentation Required at Port of Origin", category: "pga" },
    { code: "FF", name: "Remove AMS PGA - PGA Documentation Required Hold at In-bond Destination", description: "Remove Agricultural Marketing Services Hold for PGA Documentation Required at Port of In-bond Destination", category: "pga" },
    { code: "FG", name: "APHIS PGA - PGA Documentation Required Hold", description: "Add Animal Plant Health Inspection Services Hold for PGA Documentation Required at Port of Origin", category: "pga" },
    { code: "FH", name: "APHIS PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Add Animal Plant Health Inspection Services Hold for PGA Documentation Required at Port of In-Bond Destination", category: "pga" },
    { code: "FI", name: "Remove APHIS PGA - PGA Documentation Required Hold", description: "Remove Animal Plant Health Inspection Services Hold for PGA Documentation Required at Port of Origin", category: "pga" },
    { code: "FJ", name: "Remove APHIS PGA - PGA Documentation Required Hold at In-bond Destination", description: "Remove Animal Plant Health Inspection Services Hold for PGA Documentation Required at Port of In-bond Destination", category: "pga" },
    { code: "FK", name: "AMS PGA - Inspection Hold", description: "Add Agricultural Marketing Services Hold for Inspection at Port of Origin", category: "pga" },
    { code: "FL", name: "AMS PGA - Inspection Hold at In-Bond Destination", description: "Add Agricultural Marketing Services Hold for Inspection at Port of In-Bond Destination", category: "pga" },
    { code: "FM", name: "Remove AMS PGA - Inspection Hold", description: "Remove Agricultural Marketing Services Hold for Inspection at Port of Origin", category: "pga" },
    { code: "FN", name: "Remove AMS PGA - Inspection Hold at In-bond Destination", description: "Remove Agricultural Marketing Services Hold for Inspection at Port of In-bond Destination", category: "pga" },
    { code: "FO", name: "APHIS PGA - Inspection Hold", description: "Add Animal Plant Health Inspection Services Hold for Inspection at Port of Origin/Port of Export", category: "pga" },
    { code: "FP", name: "APHIS PGA - Inspection Hold at In-bond Destination", description: "Add Animal Plant Health Inspection Services Hold for Inspection at Port of In-Bond Destination/Port of Export", category: "pga" },
    { code: "FQ", name: "Remove APHIS PGA - Inspection Hold", description: "Remove Animal Plant Health Inspection Services Hold for Inspection at Port of Origin/Port of Export", category: "pga" },
    { code: "FR", name: "Remove APHIS PGA - Inspection Hold at In-bond Destination", description: "Remove Animal Plant Health Inspection Services Hold for Inspection at Port of In-Bond Destination/Port of Export", category: "pga" },
    { code: "FS", name: "EPA PGA - Inspection Hold", description: "Add Environmental Protection Agency Hold for Inspection at Port of Origin/Port of Export", category: "pga" },
    { code: "FT", name: "EPA PGA - Inspection Hold at In-bond Destination", description: "Add Environmental Protection Agency Hold for Inspection at Port of In-Bond Destination/Port of Export", category: "pga" },
    { code: "FU", name: "Remove EPA PGA - Inspection Hold", description: "Remove Environmental Protection Agency Hold for Inspection at Port of Origin/Port of Export", category: "pga" },
    { code: "FV", name: "Remove EPA PGA - Inspection Hold at In-bond Destination", description: "Remove Environmental Protection Agency Hold for Inspection at Port of In-Bond Destination/Port of Export", category: "pga" },
    { code: "FX", name: "FDA PGA - Inspection Hold", description: "Add Food and Drug Administration Hold for Inspection at Port of Origin/Port of Export", category: "pga" },
    { code: "FY", name: "FDA PGA - Inspection Hold at In-Bond Destination", description: "Add Food and Drug Administration Hold for Inspection at Port of In-Bond Destination/Port of Export", category: "pga" },
    { code: "FZ", name: "Remove FDA PGA - Inspection Hold", description: "Remove Food and Drug Administration Hold for Inspection at Port of Origin/Port of Export", category: "pga" },
    
    // G Series - More PGA Codes
    { code: "G0", name: "Remove FDA PGA - Inspection Hold at In-bond Destination", description: "Remove Food and Drug Administration Hold for Inspection at Port of In-Bond Destination/Port of Export", category: "pga" },
    { code: "G1", name: "FSIS PGA - Inspection Hold", description: "Add Food Safety Inspection Service Hold for Inspection at Port of Origin/Port of Export", category: "pga" },
    { code: "G2", name: "FSIS PGA - Inspection Hold at In-bond Destination", description: "Add Food Safety Inspection Service Hold for Inspection at Port of In-Bond Destination/Port of Export", category: "pga" },
    { code: "G3", name: "Remove FSIS PGA - Inspection Hold", description: "Remove Food Safety Inspection Service Hold for Inspection at Port of Origin/Port of Export", category: "pga" },
    { code: "G4", name: "Remove FSIS PGA - Inspection Hold at In-bond Destination", description: "Remove Food Safety Inspection Service Hold for Inspection at Port of In-Bond Destination/Port of Export", category: "pga" },
    { code: "G5", name: "FWS PGA - Inspection Hold", description: "Add Fish and Wildlife Service Hold for Inspection at Port of Origin/Port of Export", category: "pga" },
    { code: "G6", name: "FWS PGA - Inspection Hold at In-Bond Destination", description: "Add Fish and Wildlife Service Hold for Inspection at Port of In-Bond Destination", category: "pga" },
    { code: "G7", name: "Remove FWS PGA - Inspection Hold", description: "Remove Fish and Wildlife Service Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "G8", name: "Remove FWS PGA - Inspection Hold at In-bond Destination", description: "Remove Fish and Wildlife Service Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "G9", name: "NHTSA PGA - Inspection Hold", description: "Add National Highway Transportation Safety Administration Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "GA", name: "NHTSA PGA - Inspection Hold at In-Bond Destination", description: "Add National Highway Transportation Safety Administration Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "GB", name: "Remove NHTSA PGA - Inspection Hold", description: "Remove National Highway Transportation Safety Administration Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "GC", name: "Remove NHTSA PGA - Inspection Hold at In-bond Destination", description: "Remove National Highway Transportation Safety Administration Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "GD", name: "OFAC PGA - Inspection Hold", description: "Add Office of Foreign Assets Control Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "GE", name: "OFAC PGA - Inspection Hold at In-Bond Destination", description: "Add Office of Foreign Assets Control Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "GF", name: "Remove OFAC PGA - Inspection Hold", description: "Remove Office of Foreign Assets Control Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "GG", name: "Remove OFAC PGA - Inspection Hold at In-bond Destination", description: "Remove Office of Foreign Assets Control Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "GH", name: "TTB PGA - Inspection Hold", description: "Add Alcohol and Tobacco Tax and Trade Bureau Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "GI", name: "TTB PGA - Inspection Hold at In-Bond Destination", description: "Add Alcohol and Tobacco Tax and Trade Bureau Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "GJ", name: "Remove TTB PGA - Inspection Hold", description: "Remove Alcohol and Tobacco Tax and Trade Bureau Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "GK", name: "Remove TTB PGA - Inspection Hold at In-bond Destination", description: "Remove Alcohol and Tobacco Tax and Trade Bureau Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "GL", name: "USCG PGA - Inspection Hold", description: "Add U.S. Coast Guard Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "GM", name: "USCG PGA - Inspection Hold at In-Bond Destination", description: "Add U.S. Coast Guard Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "GN", name: "Remove USCG PGA - Inspection Hold", description: "Remove U.S. Coast Guard Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "GO", name: "Remove USCG PGA - Inspection Hold at In-bond Destination", description: "Remove U.S. Coast Guard Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "GP", name: "APHIS PGA - Denied Entry Hold", description: "Add Animal and Plant Health Inspection Service Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "GQ", name: "APHIS PGA - Denied Entry Hold at In-bond Destination", description: "Add Animal and Plant Health Inspection Service Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "GR", name: "Remove APHIS PGA - Denied Entry Hold", description: "Remove Animal and Plant Health Inspection Service Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "GS", name: "Remove APHIS PGA - Denied Entry Hold at In-bond Destination", description: "Remove Animal and Plant Health Inspection Service Hold for Denied Entry at Port of In-bond Destination/Port of export", category: "pga" },
    { code: "GT", name: "EPA PGA - Denied Entry Hold", description: "Add U.S. Environmental Protection Agency Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "GU", name: "EPA PGA - Denied Entry Hold at In-bond Destination", description: "Add U.S. Environmental Protection Agency Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "GV", name: "Remove EPA PGA - Denied Entry Hold", description: "Remove U.S. Environmental Protection Agency Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "GX", name: "Remove EPA PGA - Denied Entry Hold at In-bond Destination", description: "Remove U.S. Environmental Protection Agency Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "GY", name: "FDA PGA - Denied Entry Hold", description: "Add U.S. Food and Drug Administration Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "GZ", name: "FDA PGA - Denied Entry Hold at In-bond Destination", description: "Add U.S. Food and Drug Administration Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    
    // H Series - More PGA Denied Entry/Inspection Codes
    { code: "H0", name: "Remove FDA PGA - Denied Entry Hold", description: "Remove U.S. Food and Drug Administration Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "H1", name: "Remove FDA PGA - Denied Entry Hold at In-bond Destination", description: "Remove U.S. Food and Drug Administration Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "H2", name: "FSIS PGA - Denied Entry Hold", description: "Add Food Safety and Inspection Service Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "H3", name: "FSIS PGA - Denied Entry Hold at In-Bond Destination", description: "Add Food Safety and Inspection Service Agency Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "H4", name: "Remove FSIS PGA - Denied Entry Hold", description: "Remove Food Safety and Inspection Service Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "H5", name: "Remove FSIS PGA - Denied Entry Hold at In-bond Destination", description: "Remove Food Safety and Inspection Service Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "H6", name: "FWS PGA - Denied Entry Hold", description: "Add U.S. Fish and Wildlife Service Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "H7", name: "FWS PGA - Denied Entry Hold at In-Bond Destination", description: "Add U.S. Fish and Wildlife Service Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "H8", name: "Remove FWS PGA - Denied Entry Hold", description: "Remove U.S. Fish and Wildlife Service Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "H9", name: "Remove FWS PGA - Denied Entry Hold at In-bond Destination", description: "Remove U.S. Fish and Wildlife Service Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "HA", name: "NHTSA PGA - Denied Entry Hold", description: "Add National Highway Traffic Safety Administration Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "HB", name: "NHTSA PGA - Denied Entry Hold at In-Bond Destination", description: "Add National Highway Traffic Safety Administration Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "HC", name: "Remove NHTSA PGA - Denied Entry Hold", description: "Remove National Highway Traffic Safety Administration Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "HD", name: "Remove NHTSA PGA - Denied Entry Hold at In-bond Destination", description: "Remove National Highway Traffic Safety Administration Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "HE", name: "OFAC PGA - Denied Entry Hold", description: "Add Office of Foreign Assets Control Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "HF", name: "OFAC PGA - Denied Entry Hold at In-Bond Destination", description: "Add Office of Foreign Assets Control Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "HG", name: "Remove OFAC PGA - Denied Entry Hold", description: "Remove Office of Foreign Assets Control Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "HH", name: "Remove OFAC PGA - Denied Entry Hold at In-bond Destination", description: "Remove Office of Foreign Assets Control Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "HI", name: "TTB PGA - Denied Entry Hold", description: "Add Alcohol and Tobacco Tax and Trade Bureau Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "HJ", name: "TTB PGA - Denied Entry Hold at In-Bond Destination", description: "Add Alcohol and Tobacco Tax and Trade Bureau Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "HK", name: "Remove TTB PGA - Denied Entry Hold", description: "Remove Alcohol and Tobacco Tax and Trade Bureau Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "HL", name: "Remove TTB PGA - Denied Entry Hold at In-bond Destination", description: "Remove Alcohol and Tobacco Tax and Trade Bureau Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "HM", name: "USCG PGA - Denied Entry Hold", description: "Add U.S. Coast Guard Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "HN", name: "USCG PGA - Denied Entry Hold at In-Bond Destination", description: "Add U.S. Coast Guard Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "HO", name: "Remove USCG PGA - Denied Entry Hold", description: "Remove U.S. Coast Guard Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "HP", name: "Remove USCG PGA - Denied Entry Hold at In-bond Destination", description: "Remove U.S. Coast Guard Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "HQ", name: "CDC PGA - Inspection Hold", description: "Add Center for Disease Control and Prevention Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "HR", name: "CDC PGA - Inspection Hold at In-Bond Destination", description: "Add Center for Disease Control and Prevention Hold for Inspection at Port of In-Bond Destination", category: "pga" },
    { code: "HS", name: "Remove CDC PGA - Inspection Hold", description: "Remove Center for Disease Control and Prevention Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "HT", name: "Remove CDC PGA - Inspection Hold at In-bond Destination", description: "Remove Center for Disease Control and Prevention Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "HU", name: "CPSC PGA - Inspection Hold", description: "Add Consumer Products Safety Commission Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "HV", name: "CPSC PGA - Inspection Hold at In-Bond Destination", description: "Add Consumer Products Safety Commission Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "HX", name: "Remove CPSC PGA - Inspection Hold", description: "Remove Consumer Products Safety Commission Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "HY", name: "Remove CPSC PGA - Inspection Hold at In-bond Destination", description: "Remove Consumer Products Safety Commission Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "HZ", name: "DEA PGA - Inspection Hold", description: "Add Drug Enforcement Administration Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    
    // I Series - DEA/CBP/AMS Corrective Action Codes
    { code: "I0", name: "DEA PGA - Inspection Hold at In-Bond Destination", description: "Add Drug Enforcement Administration Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "I1", name: "Remove DEA PGA - Inspection Hold", description: "Remove Drug Enforcement Administration Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "I2", name: "Remove DEA PGA - Inspection Hold at In-bond Destination", description: "Remove Drug Enforcement Administration Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "I3", name: "CBP PGA - Inspection Hold", description: "Add CBP placed PGA Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "I4", name: "CBP PGA - Inspection Hold at In-Bond Destination", description: "Add CBP placed PGA Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "I5", name: "Remove CBP PGA - Inspection Hold", description: "Remove CBP placed PGA Hold for Inspection at Port of Origin/Port of export", category: "pga" },
    { code: "I6", name: "Remove CBP PGA - Inspection Hold at In-bond Destination", description: "Remove CBP placed PGA Hold for Inspection at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "I7", name: "AMS PGA - Corrective Action Hold", description: "Add Agricultural Marketing Services Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "I8", name: "AMS PGA - Corrective Action Hold at In-Bond Destination", description: "Add Agricultural Marketing Services Hold for Corrective Action at Port of In-Bond Destination", category: "pga" },
    { code: "I9", name: "Remove AMS PGA - Corrective Action Hold", description: "Remove Agricultural Marketing Services Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "IA", name: "Remove AMS PGA - Corrective Action Hold at In-bond Destination", description: "Remove Agricultural Marketing Services Hold for Corrective Action at Port of In-bond Destination/Port of export", category: "pga" },
    { code: "IB", name: "APHIS PGA - Corrective Action Hold", description: "Add Animal Plant Health Inspection Services Hold for Corrective Action Required at Port of Origin/Port of export", category: "pga" },
    { code: "IC", name: "APHIS PGA - Corrective Action Hold at In-Bond Destination", description: "Add Animal Plant Health Inspection Services Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "ID", name: "Remove APHIS PGA - Corrective Action Hold", description: "Remove Animal Plant Health Inspection Services Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "IE", name: "Remove APHIS PGA - Corrective Action Hold at In-Bond Destination", description: "Remove Animal Plant Health Inspection Services Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "IF", name: "EPA PGA - Corrective Action Hold", description: "Add Environmental Protection Agency Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "IG", name: "EPA PGA - Corrective Action Hold at In-Bond Destination", description: "Add Environmental Protection Agency Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "IH", name: "Remove EPA PGA - Corrective Action Hold", description: "Remove Environmental Protection Agency Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "II", name: "Remove EPA PGA - Corrective Action Hold at In-Bond Destination", description: "Remove Environmental Protection Agency Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "IJ", name: "FDA PGA - Corrective Action Hold", description: "Add Food and Drug Administration Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "IK", name: "FDA PGA - Corrective Action Hold at In-Bond Destination", description: "Add Food and Drug Administration Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "IL", name: "Remove FDA PGA - Corrective Action Hold", description: "Remove Food and Drug Administration Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "IM", name: "Remove FDA PGA - Corrective Action Hold at In-Bond Destination", description: "Remove Food and Drug Administration Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "IN", name: "FSIS PGA - Corrective Action Hold", description: "Add Food Safety Inspection Service Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "IO", name: "FSIS PGA - Corrective Action Hold at In-Bond Destination", description: "Add Food Safety Inspection Service Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "IP", name: "Remove FSIS PGA - Corrective Action Hold", description: "Remove Food Safety Inspection Service Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "IQ", name: "Remove FSIS PGA - Corrective Action Hold at In-Bond Destination", description: "Remove Food Safety Inspection Service Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "IR", name: "FWS PGA - Corrective Action Hold", description: "Add Fish and Wildlife Service Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "IS", name: "FWS PGA - Corrective Action Hold at In-Bond Destination", description: "Add Fish and Wildlife Service Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "IT", name: "Remove FWS PGA - Corrective Action Hold", description: "Remove Fish and Wildlife Service Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "IU", name: "Remove FWS PGA - Corrective Action Hold at In-Bond Destination", description: "Remove Fish and Wildlife Service Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "IV", name: "NHTSA PGA - Corrective Action Hold", description: "Add National Highway Transportation Safety Administration Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "IX", name: "NHTSA PGA - Corrective Action Hold at In-Bond Destination", description: "Add National Highway Transportation Safety Administration Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "IY", name: "Remove NHTSA PGA - Corrective Action Hold", description: "Remove National Highway Transportation Safety Administration Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "IZ", name: "Remove NHTSA PGA - Corrective Action Hold at In-Bond Destination", description: "Remove National Highway Transportation Safety Administration Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    
    // J Series - OFAC/TTB/USCG/CDC/CPSC/DEA/CBP Corrective Action & Denied Entry
    { code: "J0", name: "OFAC PGA - Corrective Action Hold", description: "Add Office of Foreign Assets Control Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "J1", name: "OFAC PGA - Corrective Action Hold at In-Bond Destination", description: "Add Office of Foreign Assets Control Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "J2", name: "Remove OFAC PGA - Corrective Action Hold", description: "Remove Office of Foreign Assets Control Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "J3", name: "Remove OFAC PGA - Corrective Action Hold at In-Bond Destination", description: "Remove Office of Foreign Assets Control Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "J4", name: "TTB PGA - Corrective Action Hold", description: "Add Alcohol and Tobacco Tax and Trade Bureau Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "J5", name: "TTB PGA - Corrective Action Hold at In-Bond Destination", description: "Add Alcohol and Tobacco Tax and Trade Bureau Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "J6", name: "Remove TTB PGA - Corrective Action Hold", description: "Remove Alcohol and Tobacco Tax and Trade Bureau Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "J7", name: "Remove TTB PGA - Corrective Action Hold at In-Bond Destination", description: "Remove Alcohol and Tobacco Tax and Trade Bureau Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "J8", name: "USCG PGA - Corrective Action Hold", description: "Add U.S. Coast Guard Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "J9", name: "USCG PGA - Corrective Action Hold at In-Bond Destination", description: "Add U.S. Coast Guard Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "JA", name: "Remove USCG PGA - Corrective Action Hold", description: "Remove U.S. Coast Guard Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "JB", name: "Remove USCG PGA - Corrective Action Hold at In-Bond Destination", description: "Remove U.S. Coast Guard Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "JC", name: "CDC PGA - Corrective Action Hold", description: "Add Center for Disease Control and Prevention Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "JD", name: "CDC PGA - Corrective Action Hold at In-Bond Destination", description: "Add Center for Disease Control and Prevention Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "JE", name: "Remove CDC PGA - Corrective Action Hold", description: "Remove Center for Disease Control and Prevention Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "JF", name: "Remove CDC PGA - Corrective Action Hold at In-Bond Destination", description: "Remove Center for Disease Control and Prevention Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "JG", name: "CPSC PGA - Corrective Action Hold", description: "Add Consumer Products Safety Commission Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "JH", name: "CPSC PGA - Corrective Action Hold at In-Bond Destination", description: "Add Consumer Products Safety Commission Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "JI", name: "Remove CPSC PGA - Corrective Action Hold", description: "Remove Consumer Products Safety Commission Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "JJ", name: "Remove CPSC PGA - Corrective Action Hold at In-Bond Destination", description: "Remove Consumer Products Safety Commission Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "JK", name: "DEA PGA - Corrective Action Hold", description: "Add Drug Enforcement Administration Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "JL", name: "DEA PGA - Corrective Action Hold at In-Bond Destination", description: "Add Drug Enforcement Administration Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "JM", name: "Remove DEA PGA - Corrective Action Hold", description: "Remove Drug Enforcement Administration Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "JN", name: "Remove DEA PGA - Corrective Action Hold at In-Bond Destination", description: "Remove Drug Enforcement Administration Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "JO", name: "CBP PGA - Corrective Action Hold", description: "Add CBP placed PGA Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "JP", name: "CBP PGA - Corrective Action Hold at In-Bond Destination", description: "Add CBP placed PGA Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "JQ", name: "Remove CBP PGA - Corrective Action Hold", description: "Remove CBP placed PGA Hold for Corrective Action at Port of Origin/Port of export", category: "pga" },
    { code: "JR", name: "Remove CBP PGA - Corrective Action Hold at In-Bond Destination", description: "Remove CBP placed PGA Hold for Corrective Action at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "JS", name: "CDC PGA - Denied Entry Hold", description: "Add Center for Disease Control and Prevention Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "JT", name: "CDC PGA - Denied Entry Hold at In-Bond Destination", description: "Add Center for Disease Control and Prevention Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "JU", name: "Remove CDC PGA - Denied Entry Hold", description: "Remove Center for Disease Control and Prevention Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "JV", name: "Remove CDC PGA - Denied Entry Hold at In-Bond Destination", description: "Remove Center for Disease Control and Prevention Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "JX", name: "CPSC PGA - Denied Entry Hold", description: "Add Consumer Products Safety Commission Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "JY", name: "CPSC PGA - Denied Entry Hold at In-Bond Destination", description: "Add Consumer Products Safety Commission Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "JZ", name: "Remove CPSC PGA - Denied Entry Hold", description: "Remove Consumer Products Safety Commission Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    
    // K Series - More Denied Entry & Seal Check Codes
    { code: "K0", name: "Remove CPSC PGA - Denied Entry Hold at In-Bond Destination", description: "Remove Consumer Products Safety Commission Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "K1", name: "DEA PGA - Denied Entry Hold", description: "Add Drug Enforcement Administration Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "K2", name: "DEA PGA - Denied Entry Hold at In-Bond Destination", description: "Add Drug Enforcement Administration Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "K3", name: "Remove DEA PGA - Denied Entry Hold", description: "Remove Drug Enforcement Administration Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "K4", name: "Remove DEA PGA - Denied Entry Hold at In-Bond Destination", description: "Remove Drug Enforcement Administration Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "K5", name: "CBP PGA - Denied Entry Hold", description: "Add CBP placed PGA Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "K6", name: "CBP PGA - Denied Entry Hold at In-Bond Destination", description: "Add CBP placed PGA Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "K7", name: "Remove CBP PGA - Denied Entry Hold", description: "Remove CBP placed PGA Hold for Denied Entry at Port of Origin/Port of export", category: "pga" },
    { code: "K8", name: "Remove CBP PGA - Denied Entry Hold at In-Bond Destination", description: "Remove CBP placed PGA Hold for Denied Entry at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "K9", name: "EPA PGA - Seal Check Hold", description: "Add Environmental Protection Agency Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "KA", name: "EPA PGA - Seal Check Hold at In-Bond Destination", description: "Add Environmental Protection Agency Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "KB", name: "Remove EPA PGA - Seal Check Hold", description: "Remove Environmental Protection Agency Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "KC", name: "Remove EPA PGA - Seal Check Hold at In-Bond Destination", description: "Remove Environmental Protection Agency Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "KD", name: "FDA PGA - Seal Check Hold", description: "Add Food and Drug Administration Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "KE", name: "FDA PGA - Seal Check Hold at In-Bond Destination", description: "Add Food and Drug Administration Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "KF", name: "Remove FDA PGA - Seal Check Hold", description: "Remove Food and Drug Administration Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "KG", name: "Remove FDA PGA - Seal Check Hold at In-Bond Destination", description: "Remove Food and Drug Administration Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "KH", name: "FSIS PGA - Seal Check Hold", description: "Add Food Safety Inspection Service Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "KI", name: "FSIS PGA - Seal Check Hold at In-Bond Destination", description: "Add Food Safety Inspection Service Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "KJ", name: "Remove FSIS PGA - Seal Check Hold", description: "Remove Food Safety Inspection Service Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "KK", name: "Remove FSIS PGA - Seal Check Hold at In-Bond Destination", description: "Remove Food Safety Inspection Service Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "KL", name: "FWS PGA - Seal Check Hold", description: "Add Fish and Wildlife Service Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "KM", name: "FWS PGA - Seal Check Hold at In-Bond Destination", description: "Add Fish and Wildlife Service Hold for Seal Check at Port of In-Bond Destination", category: "pga" },
    { code: "KN", name: "Remove FWS PGA - Seal Check Hold", description: "Remove Fish and Wildlife Service Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "KO", name: "Remove FWS PGA - Seal Check Hold at In-Bond Destination", description: "Remove Fish and Wildlife Service Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "KP", name: "NHTSA PGA - Seal Check Hold", description: "Add National Highway Transportation Safety Administration Hold for Seal Check at Port of Origin", category: "pga" },
    { code: "KQ", name: "NHTSA PGA - Seal Check Hold at In-Bond Destination", description: "Add National Highway Transportation Safety Administration Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "KR", name: "Remove NHTSA PGA - Seal Check Hold", description: "Remove National Highway Transportation Safety Administration Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "KS", name: "Remove NHTSA PGA - Seal Check Hold at In-Bond Destination", description: "Remove National Highway Transportation Safety Administration Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "KT", name: "OFAC PGA - Seal Check Hold", description: "Add Office of Foreign Assets Control Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "KU", name: "OFAC PGA - Seal Check Hold at In-Bond Destination", description: "Add Office of Foreign Assets Control Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "KV", name: "Remove OFAC PGA - Seal Check Hold", description: "Remove Office of Foreign Assets Control Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "KX", name: "Remove OFAC PGA - Seal Check Hold at In-Bond Destination", description: "Remove Office of Foreign Assets Control Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "KY", name: "TTB PGA - Seal Check Hold", description: "Add Alcohol and Tobacco Tax and Trade Bureau Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "KZ", name: "TTB PGA - Seal Check Hold at In-Bond Destination", description: "Add Alcohol and Tobacco Tax and Trade Bureau Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    
    // L Series - More Seal Check & PGA Documentation Required Codes
    { code: "L0", name: "Remove TTB PGA - Seal Check Hold", description: "Remove Alcohol and Tobacco Tax and Trade Bureau Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "L1", name: "Remove TTB PGA - Seal Check Hold at In-Bond Destination", description: "Remove Alcohol and Tobacco Tax and Trade Bureau Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "L2", name: "USCG PGA - Seal Check Hold", description: "Add U.S. Coast Guard Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "L3", name: "USCG PGA - Seal Check Hold at In-Bond Destination", description: "Add U.S. Coast Guard Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "L4", name: "Remove USCG PGA - Seal Check Hold", description: "Remove U.S. Coast Guard Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "L5", name: "Remove USCG PGA - Seal Check Hold at In-Bond Destination", description: "Remove U.S. Coast Guard Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "L6", name: "CDC PGA - Seal Check Hold", description: "Add Center for Disease Control and Prevention Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "L7", name: "CDC PGA - Seal Check Hold at In-Bond Destination", description: "Add Center for Disease Control and Prevention Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "L8", name: "Remove CDC PGA - Seal Check Hold", description: "Remove Center for Disease Control and Prevention Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "L9", name: "Remove CDC PGA - Seal Check Hold at In-Bond Destination", description: "Remove Center for Disease Control and Prevention Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "LA", name: "CPSC PGA - Seal Check Hold", description: "Add Consumer Products Safety Commission Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "LB", name: "CPSC PGA - Seal Check Hold at In-Bond Destination", description: "Add Consumer Products Safety Commission Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "LC", name: "Remove CPSC PGA - Seal Check Hold", description: "Remove Consumer Products Safety Commission Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "LD", name: "Remove CPSC PGA - Seal Check Hold at In-Bond Destination", description: "Remove Consumer Products Safety Commission Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "LE", name: "DEA PGA - Seal Check Hold", description: "Add Drug Enforcement Administration Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "LF", name: "DEA PGA - Seal Check Hold at In-Bond Destination", description: "Add Drug Enforcement Administration Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "LG", name: "Remove DEA PGA - Seal Check Hold", description: "Remove Drug Enforcement Administration Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "LH", name: "Remove DEA PGA - Seal Check Hold at In-Bond Destination", description: "Remove Drug Enforcement Administration Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "LI", name: "CBP PGA - Seal Check Hold", description: "Add CBP placed PGA Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "LJ", name: "CBP PGA - Seal Check Hold at In-Bond Destination", description: "Add CBP placed PGA Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "LK", name: "Remove CBP PGA - Seal Check Hold", description: "Remove CBP placed PGA Hold for Seal Check at Port of Origin/Port of export", category: "pga" },
    { code: "LL", name: "Remove CBP PGA - Seal Check Hold at In-Bond Destination", description: "Remove CBP placed PGA Hold for Seal Check at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "LM", name: "EPA PGA - PGA Documentation Required Hold", description: "Add Environmental Protection Agency Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "LN", name: "EPA PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Add Environmental Protection Agency Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "LO", name: "Remove EPA PGA - PGA Documentation Required Hold", description: "Remove Environmental Protection Agency Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "LP", name: "Remove EPA PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Remove Environmental Protection Agency Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "LQ", name: "FDA PGA - PGA Documentation Required Hold", description: "Add Food and Drug Administration Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "LR", name: "FDA PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Add Food and Drug Administration Hold for PGA Documentation Required At Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "LS", name: "Remove FDA PGA - PGA Documentation Required Hold", description: "Remove Food and Drug Administration Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "LT", name: "Remove FDA PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Remove Food and Drug Administration Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "LU", name: "FSIS PGA - PGA Documentation Required Hold", description: "Add Food Safety Inspection Service Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "LV", name: "FSIS PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Add Food Safety Inspection Service Administration Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "LX", name: "Remove FSIS PGA - PGA Documentation Required Hold", description: "Remove Food Safety Inspection Service Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "LY", name: "Remove FSIS PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Remove Food Safety Inspection Service Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "LZ", name: "FWS PGA - PGA Documentation Required Hold", description: "Add Fish and Wildlife Service Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    
    // M Series - More PGA Documentation Required Codes
    { code: "M0", name: "FWS PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Add Fish and Wildlife Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "M1", name: "Remove FWS PGA - PGA Documentation Required Hold", description: "Remove Fish and Wildlife Service Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "M2", name: "Remove FWS PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Remove Fish and Wildlife Service Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "M3", name: "NHTSA PGA - PGA Documentation Required Hold", description: "Add National Highway Transportation Safety Administration Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "M4", name: "NHTSA PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Add National Highway Transportation Safety Administration Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "M5", name: "Remove NHTSA PGA - PGA Documentation Required Hold", description: "Remove National Highway Transportation Safety Administration Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "M6", name: "Remove NHTSA PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Remove National Highway Transportation Safety Administration Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "M7", name: "OFAC PGA - PGA Documentation Required Hold", description: "Add Office of Foreign Assets Control Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "M8", name: "OFAC PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Add Office of Foreign Assets Control Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "M9", name: "Remove OFAC PGA - PGA Documentation Required Hold", description: "Remove Office of Foreign Assets Control Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "MA", name: "Remove OFAC PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Remove Office of Foreign Assets Control Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "MB", name: "TTB PGA - PGA Documentation Required Hold", description: "Add Alcohol and Tobacco Tax and Trade Bureau Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "MC", name: "TTB PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Add Alcohol and Tobacco Tax and Trade Bureau Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "MD", name: "Remove TTB PGA - PGA Documentation Required Hold", description: "Remove Alcohol and Tobacco Tax and Trade Bureau Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "ME", name: "Remove TTB PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Remove Alcohol and Tobacco Tax and Trade Bureau Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "MF", name: "USCG PGA - PGA Documentation Required Hold", description: "Add U.S. Coast Guard Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "MG", name: "USCG PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Add U.S. Coast Guard Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "MH", name: "Remove USCG PGA - PGA Documentation Required Hold", description: "Remove U.S. Coast Guard Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "MI", name: "Remove USCG PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Remove U.S. Coast Guard Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "MJ", name: "CDC PGA - PGA Documentation Required Hold", description: "Add Center for Disease Control and Prevention Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "MK", name: "CDC PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Add Center for Disease Control and Prevention Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "ML", name: "Remove CDC PGA - PGA Documentation Required Hold", description: "Remove Center for Disease Control and Prevention Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "MM", name: "Remove CDC PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Remove Center for Disease Control and Prevention Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "MN", name: "CPSC PGA - PGA Documentation Required Hold", description: "Add Consumer Products Safety Commission Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "MO", name: "CPSC PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Add Consumer Products Safety Commission Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "MP", name: "Remove CPSC PGA - PGA Documentation Required Hold", description: "Remove Consumer Products Safety Commission Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "MQ", name: "Remove CPSC PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Remove Consumer Products Safety Commission Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "MR", name: "DEA PGA - PGA Documentation Required Hold", description: "Add Drug Enforcement Administration Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "MS", name: "DEA PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Add Drug Enforcement Administration Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "MT", name: "Remove DEA PGA - PGA Documentation Required Hold", description: "Remove Drug Enforcement Administration Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "MU", name: "Remove DEA PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Remove Drug Enforcement Administration Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "MV", name: "CBP PGA - PGA Documentation Required Hold", description: "Add CBP placed PGA Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "MX", name: "CBP PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Add CBP placed PGA Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" },
    { code: "MY", name: "Remove CBP PGA - PGA Documentation Required Hold", description: "Remove CBP placed PGA Hold for PGA Documentation Required at Port of Origin/Port of export", category: "pga" },
    { code: "MZ", name: "Remove CBP PGA - PGA Documentation Required Hold at In-Bond Destination", description: "Remove CBP placed PGA Hold for PGA Documentation Required at Port of In-Bond Destination/Port of export", category: "pga" }
];

// 自动翻译词典 - 常用术语中英对照
const dcTranslations = {
    // 动作词
    "Add": "添加", "Remove": "移除", "Delete": "删除", "Cancel": "取消",
    "Generated": "生成", "Advisory": "通知", "Hold": "扣留", "Release": "放行",
    "Placed": "设置", "Removed": "移除", "Arrival": "到达", "Departure": "离开",
    "Entry": "入境", "Export": "出口", "Import": "进口", "Transfer": "转移",
    "Override": "覆盖", "Update": "更新", "Match": "匹配", "Seized": "扣押",
    
    // 机构名称
    "CBP": "美国海关", "FDA": "食药监局", "EPA": "环保署", "USDA": "农业部",
    "APHIS": "动植物检疫局", "AMS": "农业营销服务局", "FSIS": "食品安全检验局",
    "FWS": "鱼类野生动物局", "NHTSA": "高速公路安全局", "OFAC": "海外资产控制办公室",
    "TTB": "烟酒税贸易局", "USCG": "海岸警卫队", "CDC": "疾控中心",
    "CPSC": "消费品安全委员会", "DEA": "缉毒局", "FMCSA": "联邦汽车运输安全局",
    
    // 货物相关
    "Cargo": "货物", "Bill": "提单", "Bill of Lading": "提单", "Container": "集装箱",
    "Conveyance": "运输工具", "Shipment": "货运", "Goods": "货物", "Manifest": "舱单",
    "In-bond": "保税", "In-Bond": "保税", "Intransit": "过境", "Port": "港口",
    "Destination": "目的地", "Origin": "始发地", "Zone": "区域", "Warehouse": "仓库",
    
    // 状态相关
    "Inspection": "检查", "Examination": "查验", "Fumigation": "熏蒸", "Seal": "封条",
    "Corrective Action": "整改措施", "Denied Entry": "拒绝入境", "Documentation": "文件",
    "Compliance": "合规", "Violation": "违规", "Penalty": "罚款", "General Order": "一般指令",
    
    // PGA相关
    "PGA": "政府机构", "Enforcement Action": "执法行动", "Seal Check": "封条检查",
    "PGA Documentation Required": "需政府机构文件"
};

// 自动翻译函数
function translateToChineseName(text) {
    let result = text;
    // 替换已知词汇
    for (const [en, cn] of Object.entries(dcTranslations)) {
        result = result.replace(new RegExp(en, 'gi'), cn);
    }
    return result !== text ? result : '';
}

function translateToChineseDesc(text) {
    let result = text;
    // 简化并翻译
    const patterns = [
        [/Generated (as a result of|when|to|in response to)/gi, "当"],
        [/Used for/gi, "用于"],
        [/Indicates/gi, "表明"],
        [/Informs the carrier that/gi, "通知承运人"],
        [/An advisory message indicating that/gi, "通知："],
        [/at Port of Origin\/Port of export/gi, "在始发港/出口港"],
        [/at Port of In-Bond Destination\/Port of export/gi, "在保税目的港/出口港"],
        [/at Port of In-bond Destination/gi, "在保税目的港"],
        [/at the port of discharge/gi, "在卸货港"],
        [/at the port of in-bond destination/gi, "在保税目的港"],
        [/Bill status/gi, "提单状态"],
        [/ENT\/REL quantities/gi, "入境/放行数量"],
    ];
    
    for (const [pattern, replacement] of patterns) {
        result = result.replace(pattern, replacement);
    }
    
    // 再替换术语
    for (const [en, cn] of Object.entries(dcTranslations)) {
        result = result.replace(new RegExp(`\\b${en}\\b`, 'gi'), cn);
    }
    
    return result !== text ? result : '';
}

// 暂时禁用自动翻译（效果不理想）
// 如需翻译，可手动为重要代码添加 nameCn 和 descCn 字段
// dispositionCodes.forEach(item => {
//     item.nameCn = translateToChineseName(item.name);
//     item.descCn = translateToChineseDesc(item.description);
// });

// Disposition Codes 过滤和渲染 - 表格形式
let dcFilteredData = dispositionCodes;
let dcCurrentPage = 1;
const dcPerPage = 50;
let dcCurrentCategory = 'all';
let dcSortKey = 'code';
let dcSortAsc = true;

function filterDispositionCodes() {
    const searchTerm = document.getElementById('dcSearchInput')?.value.toLowerCase() || '';
    
    dcFilteredData = dispositionCodes.filter(item => {
        const matchesSearch = !searchTerm || 
            item.code.toLowerCase().includes(searchTerm) ||
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm);
        
        const matchesCategory = dcCurrentCategory === 'all' || item.category === dcCurrentCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    dcCurrentPage = 1;
    renderDispositionCodes();
}

function filterByCategory(category) {
    dcCurrentCategory = category;
    
    // Update button states
    document.querySelectorAll('.dc-filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.closest('.dc-filter-btn').classList.add('active');
    
    filterDispositionCodes();
}

function sortDcTable(key) {
    if (dcSortKey === key) {
        dcSortAsc = !dcSortAsc;
    } else {
        dcSortKey = key;
        dcSortAsc = true;
    }
    
    dcFilteredData.sort((a, b) => {
        const valA = a[key].toLowerCase();
        const valB = b[key].toLowerCase();
        return dcSortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });
    
    renderDispositionCodes();
}

function renderDispositionCodes() {
    const tbody = document.getElementById('dcTableBody');
    const countEl = document.getElementById('dcCount');
    if (!tbody) return;
    
    const startIdx = (dcCurrentPage - 1) * dcPerPage;
    const endIdx = startIdx + dcPerPage;
    const pageData = dcFilteredData.slice(startIdx, endIdx);
    
    // Update count
    if (countEl) {
        const start = startIdx + 1;
        const end = Math.min(endIdx, dcFilteredData.length);
        countEl.textContent = `Showing ${start}-${end} of ${dcFilteredData.length} codes`;
    }
    
    // Category colors
    const categoryColors = {
        release: '#10b981',
        hold: '#ef4444',
        advisory: '#3b82f6',
        pga: '#8b5cf6',
        inbond: '#f59e0b',
        other: '#6b7280'
    };
    
    tbody.innerHTML = pageData.map(item => {
        return `
            <tr data-category="${item.category}">
                <td class="col-code"><span class="code-badge">${item.code}</span></td>
                <td class="col-name">
                    <div class="name-en">${item.name}</div>
                    ${item.nameCn ? `<div class="name-cn">${item.nameCn}</div>` : ''}
                </td>
                <td class="col-desc">
                    <div class="desc-en">${item.description}</div>
                    ${item.descCn ? `<div class="desc-cn">${item.descCn}</div>` : ''}
                </td>
            </tr>
        `;
    }).join('');
    
    renderDcPagination();
}

function renderDcPagination() {
    const pagination = document.getElementById('dcPagination');
    if (!pagination) return;
    
    const totalPages = Math.ceil(dcFilteredData.length / dcPerPage);
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let html = `
        <div class="dc-pagination-row">
            <button class="dc-page-arrow" onclick="goToDcPage(1)" ${dcCurrentPage === 1 ? 'disabled' : ''} title="First">«</button>
            <button class="dc-page-arrow" onclick="goToDcPage(${dcCurrentPage - 1})" ${dcCurrentPage === 1 ? 'disabled' : ''} title="Previous">‹</button>`;
    
    // 显示所有页码
    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="dc-page-num ${i === dcCurrentPage ? 'active' : ''}" onclick="goToDcPage(${i})">${i}</button>`;
    }
    
    html += `
            <button class="dc-page-arrow" onclick="goToDcPage(${dcCurrentPage + 1})" ${dcCurrentPage === totalPages ? 'disabled' : ''} title="Next">›</button>
            <button class="dc-page-arrow" onclick="goToDcPage(${totalPages})" ${dcCurrentPage === totalPages ? 'disabled' : ''} title="Last">»</button>
            <span class="dc-page-info">Page ${dcCurrentPage}/${totalPages}</span>
        </div>
    `;
    
    pagination.innerHTML = html;
}

function goToDcPage(page) {
    const totalPages = Math.ceil(dcFilteredData.length / dcPerPage);
    if (page < 1 || page > totalPages) return;
    dcCurrentPage = page;
    renderDispositionCodes();
    document.querySelector('.dc-table-wrapper')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 扩展showArticle来初始化Disposition Codes
const origShowArticleForDC = window.showArticle;
window.showArticle = function(title) {
    origShowArticleForDC(title);
    if (title === 'CBP Disposition Codes') {
        setTimeout(() => {
            dcFilteredData = dispositionCodes;
            dcCurrentPage = 1;
            dcCurrentCategory = 'all';
            renderDispositionCodes();
        }, 100);
    }
};
