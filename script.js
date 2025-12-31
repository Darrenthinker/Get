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
                title: "海运物流",
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
        title: "铁路运输",
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
        title: "卡航运输",
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
            
            title.classList.toggle('expanded');
            items.classList.toggle('expanded');
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
    
    searchDropdown.innerHTML = results.slice(0, 8).map(result => `
        <div class="search-dropdown-item" onclick="selectSearchResult('${result.article.title}')">
            <span class="search-dropdown-icon">📄</span>
            <div class="search-dropdown-text">
                <div class="search-dropdown-title">${result.article.title}</div>
                <div class="search-dropdown-path">${result.categoryTitle}${result.subcategoryTitle ? ' > ' + result.subcategoryTitle : ''}</div>
            </div>
        </div>
    `).join('');
}

function searchKnowledge(query) {
    const results = [];
    query = query.toLowerCase();
    
    Object.entries(knowledgeBase).forEach(([catKey, category]) => {
        if (category.subcategories) {
            Object.entries(category.subcategories).forEach(([subKey, subcategory]) => {
            subcategory.articles.forEach(article => {
                    if (matchArticle(article, query)) {
                    results.push({
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
                        categoryTitle: category.title,
                        subcategoryTitle: null,
                        article: article
                    });
                }
            });
        }
    });
    
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
    
    // 面包屑
    document.getElementById('breadcrumb').innerHTML = `
        <a href="#" onclick="showHome()">首页</a>
        <span class="separator">/</span>
        <span>${article.categoryTitle}</span>
        ${article.subcategoryTitle ? `<span class="separator">/</span><span>${article.subcategoryTitle}</span>` : ''}
    `;
    
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
                    return {
                        data: article,
                        categoryTitle: category.title,
                        subcategoryTitle: subcategory.title
                    };
                }
            }
        } else if (category.articles) {
            const article = category.articles.find(a => a.title === title);
            if (article) {
                return {
                    data: article,
                    categoryTitle: category.title,
                    subcategoryTitle: null
                };
            }
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

console.log('🚀 货代知识库已加载完成！');
