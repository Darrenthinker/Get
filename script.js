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
                    "japan": {
                        name: "日本",
                        intro: "日本是亚洲发达经济体，拥有世界领先的港口设施和完善的物流网络。",
                        airports: {
                            international: [
                                { code: "NRT", name: "成田国际机场", city: "东京" },
                                { code: "HND", name: "羽田国际机场", city: "东京" },
                                { code: "KIX", name: "关西国际机场", city: "大阪" },
                                { code: "NGO", name: "中部国际机场", city: "名古屋" },
                                { code: "FUK", name: "福冈机场", city: "福冈" },
                                { code: "CTS", name: "新千岁机场", city: "札幌" }
                            ],
                            domestic: [
                                { code: "ITM", name: "大阪伊丹机场", city: "大阪" },
                                { code: "OKA", name: "那霸机场", city: "冲绑" }
                            ]
                        },
                        ports: {
                            international: [
                                { code: "JPTYO", name: "东京港", city: "东京", desc: "首都港口，日本最大贸易港之一" },
                                { code: "JPYOK", name: "横滨港", city: "横滨", desc: "关东最大港口" },
                                { code: "JPNGO", name: "名古屋港", city: "名古屋", desc: "汽车出口重镇" },
                                { code: "JPOSA", name: "大阪港", city: "大阪", desc: "关西枢纽" },
                                { code: "JPUKB", name: "神户港", city: "神户", desc: "历史名港" },
                                { code: "JPHKT", name: "博多港", city: "福冈", desc: "九州门户" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "NH", name: "全日空", nameEn: "All Nippon Airways" },
                            { code: "JL", name: "日本航空", nameEn: "Japan Airlines" },
                            { code: "BC", name: "天马航空", nameEn: "Skymark Airlines" },
                            { code: "JW", name: "香草航空", nameEn: "Vanilla Air" }
                        ],
                        shippingLines: [
                            { code: "ONE", name: "海洋网联", nameEn: "Ocean Network Express", desc: "日本三大航运合并" },
                            { code: "NYK", name: "日本邮船", nameEn: "Nippon Yusen", desc: "历史悠久" },
                            { code: "MOL", name: "商船三井", nameEn: "Mitsui O.S.K. Lines", desc: "全球领先" }
                        ],
                        provinces: [
                            { name: "关东地区", cities: ["东京", "横滨", "千叶", "埼玉"] },
                            { name: "关西地区", cities: ["大阪", "京都", "神户", "奈良"] },
                            { name: "中部地区", cities: ["名古屋", "静冈", "金�的"] },
                            { name: "九州地区", cities: ["福冈", "北九州", "长崎"] }
                        ],
                        customsPolicies: [
                            { title: "进口申报", content: "所有进口货物需向海关申报，提交进口申报单、发票、装箱单等文件。" },
                            { title: "关税制度", content: "根据HS编码征收关税，部分商品享受EPA优惠税率。" }
                        ],
                        keywords: ["东京港", "横滨港", "日本港口", "成田机场"]
                    },
                    "korea": {
                        name: "韩国",
                        intro: "韩国是重要的制造业和航运国家，釜山港是全球第六大集装箱港。",
                        airports: {
                            international: [
                                { code: "ICN", name: "仁川国际机场", city: "首尔" },
                                { code: "GMP", name: "金浦国际机场", city: "首尔" },
                                { code: "PUS", name: "金海国际机场", city: "釜山" },
                                { code: "CJU", name: "济州国际机场", city: "济州" }
                            ],
                            domestic: [
                                { code: "TAE", name: "大邱机场", city: "大邱" },
                                { code: "KWJ", name: "光州机场", city: "光州" }
                            ]
                        },
                        ports: {
                            international: [
                                { code: "KRPUS", name: "釜山港", city: "釜山", desc: "全球第六大集装箱港" },
                                { code: "KRINC", name: "仁川港", city: "仁川", desc: "首都圈门户" },
                                { code: "KRKWG", name: "光阳港", city: "光阳", desc: "现代化深水港" },
                                { code: "KRULS", name: "蔚山港", city: "蔚山", desc: "工业港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "KE", name: "大韩航空", nameEn: "Korean Air" },
                            { code: "OZ", name: "韩亚航空", nameEn: "Asiana Airlines" },
                            { code: "LJ", name: "真航空", nameEn: "Jin Air" },
                            { code: "7C", name: "济州航空", nameEn: "Jeju Air" }
                        ],
                        shippingLines: [
                            { code: "KMTC", name: "高丽海运", nameEn: "KMTC Line", desc: "韩国区域航运" },
                            { code: "HMM", name: "现代商船", nameEn: "HMM", desc: "韩国最大航运公司" }
                        ],
                        provinces: [
                            { name: "首都圈", cities: ["首尔", "仁川", "水原"] },
                            { name: "东南圈", cities: ["釜山", "蔚山", "大邱"] },
                            { name: "西南圈", cities: ["光州", "全州"] },
                            { name: "济州", cities: ["济州市", "西归浦"] }
                        ],
                        customsPolicies: [
                            { title: "韩国海关申报", content: "进口货物需提交进口申报单，按HS编码缴纳关税。" },
                            { title: "FTA优惠", content: "韩国与多国签署FTA，享受优惠关税。" },
                            { title: "【重要】税号/PCCC要求", content: "所有进口到韩国的货物，必须在运输单据上提供税号/PCCC编号，否则货物可能被扣留。企业收件人：必须提供TAXID；个人收件人：必须提供PCCC号码（需收件人提前注册）。" }
                        ],
                        keywords: ["釜山港", "仁川机场", "韩国港口"]
                    },
                    "mongolia": {
                        name: "蒙古",
                        intro: "蒙古是内陆国家，主要通过中国和俄罗斯港口进行国际贸易。",
                        airports: {
                            international: [
                                { code: "ULN", name: "成吉思汗国际机场", city: "乌兰巴托" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "OM", name: "蒙古航空", nameEn: "MIAT Mongolian Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "中央省", cities: ["乌兰巴托"] },
                            { name: "东方省", cities: ["乔巴山"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "货物主要通过中国天津港、大连港或俄罗斯符拉迪沃斯托克港转运。" }
                        ],
                        keywords: ["蒙古贸易", "内陆运输", "乌兰巴托"]
                    },
                    "north-korea": {
                        name: "朝鲜",
                        intro: "朝鲜民主主义人民共和国，受国际制裁影响，贸易受限。",
                        airports: {
                            international: [
                                { code: "FNJ", name: "平壤顺安国际机场", city: "平壤" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "KPNAM", name: "南浦港", city: "南浦", desc: "朝鲜主要港口" },
                                { code: "KPWON", name: "元山港", city: "元山", desc: "东海岸港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "JS", name: "高丽航空", nameEn: "Air Koryo" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "平壤", cities: ["平壤"] },
                            { name: "南浦", cities: ["南浦"] }
                        ],
                        customsPolicies: [
                            { title: "国际制裁", content: "受联合国制裁，大部分贸易受限。" }
                        ],
                        keywords: ["朝鲜", "平壤", "南浦港"]
                    },
                    "singapore": {
                        name: "新加坡",
                        intro: "新加坡是全球最繁忙的转口港之一，亚洲金融和物流中心。",
                        airports: {
                            international: [
                                { code: "SIN", name: "樟宜国际机场", city: "新加坡" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "SGSIN", name: "新加坡港", city: "新加坡", desc: "全球第二大集装箱港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "SQ", name: "新加坡航空", nameEn: "Singapore Airlines" },
                            { code: "TR", name: "酷航", nameEn: "Scoot" }
                        ],
                        shippingLines: [
                            { code: "PIL", name: "太平船务", nameEn: "Pacific International Lines", desc: "新加坡航运公司" }
                        ],
                        provinces: [
                            { name: "新加坡", cities: ["新加坡市"] }
                        ],
                        customsPolicies: [
                            { title: "自由港政策", content: "新加坡为自由贸易港，大部分货物免关税。" },
                            { title: "GST税", content: "商品及服务税(GST)税率9%。" }
                        ],
                        keywords: ["新加坡港", "樟宜机场", "转口港"]
                    },
                    "malaysia": {
                        name: "马来西亚",
                        intro: "马来西亚位于马六甲海峡，是东南亚重要的贸易枢纽。",
                        airports: {
                            international: [
                                { code: "KUL", name: "吉隆坡国际机场", city: "吉隆坡" },
                                { code: "PEN", name: "槟城国际机场", city: "槟城" },
                                { code: "BKI", name: "亚庇国际机场", city: "亚庇" }
                            ],
                            domestic: [
                                { code: "JHB", name: "新山士乃机场", city: "新山" }
                            ]
                        },
                        ports: {
                            international: [
                                { code: "MYPKG", name: "巴生港", city: "巴生", desc: "马来西亚最大港口" },
                                { code: "MYTPP", name: "丹戎帕拉帕斯港", city: "柔佛", desc: "重要转运港" },
                                { code: "MYPEN", name: "槟城港", city: "槟城", desc: "北部港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "MH", name: "马来西亚航空", nameEn: "Malaysia Airlines" },
                            { code: "AK", name: "亚洲航空", nameEn: "AirAsia" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "吉隆坡", cities: ["吉隆坡"] },
                            { name: "雪兰莪", cities: ["巴生", "莎阿南"] },
                            { name: "槟城", cities: ["乔治市"] },
                            { name: "柔佛", cities: ["新山"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "根据HS编码征收关税，部分商品免税。" }
                        ],
                        keywords: ["巴生港", "吉隆坡机场", "马来西亚港口"]
                    },
                    "thailand": {
                        name: "泰国",
                        intro: "泰国是东南亚制造业中心，物流网络发达。",
                        airports: {
                            international: [
                                { code: "BKK", name: "素万那普国际机场", city: "曼谷" },
                                { code: "DMK", name: "廊曼国际机场", city: "曼谷" },
                                { code: "HKT", name: "普吉国际机场", city: "普吉" },
                                { code: "CNX", name: "清迈国际机场", city: "清迈" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "THLCH", name: "林查班港", city: "春武里", desc: "泰国最大深水港" },
                                { code: "THBKK", name: "曼谷港", city: "曼谷", desc: "传统贸易港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "TG", name: "泰国航空", nameEn: "Thai Airways" },
                            { code: "FD", name: "泰国亚航", nameEn: "Thai AirAsia" }
                        ],
                        shippingLines: [
                            { code: "RCL", name: "宏海箱运", nameEn: "Regional Container Lines", desc: "泰国航运公司" }
                        ],
                        provinces: [
                            { name: "曼谷", cities: ["曼谷"] },
                            { name: "春武里", cities: ["芭提雅", "林查班"] },
                            { name: "清迈", cities: ["清迈"] },
                            { name: "普吉", cities: ["普吉"] }
                        ],
                        customsPolicies: [
                            { title: "泰国海关", content: "进口需申报，按HS编码缴税。" },
                            { title: "【2026新规】取消免税门槛", content: "自2026年1月1日起，泰国取消1500泰铢以下进口商品免税政策。所有进口商品（包括1泰铢物品）均需缴纳关税及增值税（VAT）。注意：泰国海关严查低申报，被查验将面临高额罚款。" }
                        ],
                        keywords: ["林查班港", "曼谷机场", "泰国港口"]
                    },
                    "vietnam": {
                        name: "越南",
                        intro: "越南是快速发展的制造业国家，成为全球供应链重要一环。",
                        airports: {
                            international: [
                                { code: "SGN", name: "新山一国际机场", city: "胡志明市" },
                                { code: "HAN", name: "内排国际机场", city: "河内" },
                                { code: "DAD", name: "岘港国际机场", city: "岘港" }
                            ],
                            domestic: [
                                { code: "CXR", name: "金兰机场", city: "芽庄" }
                            ]
                        },
                        ports: {
                            international: [
                                { code: "VNSGN", name: "胡志明港", city: "胡志明市", desc: "越南最大港口" },
                                { code: "VNHPH", name: "海防港", city: "海防", desc: "北部主要港口" },
                                { code: "VNDAD", name: "岘港", city: "岘港", desc: "中部港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "VN", name: "越南航空", nameEn: "Vietnam Airlines" },
                            { code: "VJ", name: "越捷航空", nameEn: "VietJet Air" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "胡志明市", cities: ["胡志明市"] },
                            { name: "河内", cities: ["河内"] },
                            { name: "岘港", cities: ["岘港"] },
                            { name: "海防", cities: ["海防"] }
                        ],
                        customsPolicies: [
                            { title: "越南海关", content: "进口需提交申报单，按HS编码缴税。" }
                        ],
                        keywords: ["胡志明港", "海防港", "越南港口"]
                    },
                    "indonesia": {
                        name: "印度尼西亚",
                        intro: "印尼是东南亚最大国家，群岛国家港口众多。",
                        airports: {
                            international: [
                                { code: "CGK", name: "苏加诺-哈达国际机场", city: "雅加达" },
                                { code: "DPS", name: "伍拉·赖国际机场", city: "巴厘岛" },
                                { code: "SUB", name: "朱安达国际机场", city: "泗水" }
                            ],
                            domestic: [
                                { code: "UPG", name: "苏丹哈桑丁机场", city: "望加锡" }
                            ]
                        },
                        ports: {
                            international: [
                                { code: "IDJKT", name: "丹戎不碌港", city: "雅加达", desc: "印尼最大港口" },
                                { code: "IDSUB", name: "泗水港", city: "泗水", desc: "第二大港" },
                                { code: "IDBTH", name: "巴淡港", city: "巴淡", desc: "转运港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "GA", name: "印尼鹰航", nameEn: "Garuda Indonesia" },
                            { code: "JT", name: "狮子航空", nameEn: "Lion Air" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "雅加达", cities: ["雅加达"] },
                            { name: "东爪哇", cities: ["泗水"] },
                            { name: "巴厘", cities: ["登巴萨"] },
                            { name: "廖内群岛", cities: ["巴淡"] }
                        ],
                        customsPolicies: [
                            { title: "印尼海关", content: "进口需申报，按HS编码缴税。" }
                        ],
                        keywords: ["雅加达港", "泗水港", "印尼港口"]
                    },
                    "philippines": {
                        name: "菲律宾",
                        intro: "菲律宾是群岛国家，马尼拉是主要贸易枢纽。",
                        airports: {
                            international: [
                                { code: "MNL", name: "尼诺·阿基诺国际机场", city: "马尼拉" },
                                { code: "CEB", name: "麦克坦-宿务国际机场", city: "宿务" },
                                { code: "CRK", name: "克拉克国际机场", city: "克拉克" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "PHMNL", name: "马尼拉港", city: "马尼拉", desc: "菲律宾最大港口" },
                                { code: "PHCEB", name: "宿务港", city: "宿务", desc: "中部枢纽" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "PR", name: "菲律宾航空", nameEn: "Philippine Airlines" },
                            { code: "5J", name: "宿务太平洋", nameEn: "Cebu Pacific" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "马尼拉大都会", cities: ["马尼拉", "马卡蒂", "奎松"] },
                            { name: "宿务", cities: ["宿务市"] },
                            { name: "达沃", cities: ["达沃市"] }
                        ],
                        customsPolicies: [
                            { title: "菲律宾海关", content: "进口需申报，按HS编码缴税。" }
                        ],
                        keywords: ["马尼拉港", "宿务港", "菲律宾港口"]
                    },
                    "myanmar": {
                        name: "缅甸",
                        intro: "缅甸正在发展其港口基础设施，是中缅经济走廊重要节点。",
                        airports: {
                            international: [
                                { code: "RGN", name: "仰光国际机场", city: "仰光" },
                                { code: "MDL", name: "曼德勒国际机场", city: "曼德勒" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "MMRGN", name: "仰光港", city: "仰光", desc: "缅甸最大港口" },
                                { code: "MMKYP", name: "皎漂港", city: "皎漂", desc: "中缅经济走廊重要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "UB", name: "缅甸国家航空", nameEn: "Myanmar National Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "仰光", cities: ["仰光"] },
                            { name: "曼德勒", cities: ["曼德勒"] }
                        ],
                        customsPolicies: [
                            { title: "缅甸海关", content: "进口需申报，部分商品需许可证。" }
                        ],
                        keywords: ["仰光港", "皎漂港", "缅甸港口"]
                    },
                    "cambodia": {
                        name: "柬埔寨",
                        intro: "柬埔寨是东南亚新兴市场，制造业快速发展。",
                        airports: {
                            international: [
                                { code: "PNH", name: "金边国际机场", city: "金边" },
                                { code: "REP", name: "暹粒国际机场", city: "暹粒" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "KHSHV", name: "西哈努克港", city: "西哈努克", desc: "柬埔寨唯一深水港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "KR", name: "柬埔寨航空", nameEn: "Cambodia Airways" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "金边", cities: ["金边"] },
                            { name: "西哈努克", cities: ["西哈努克市"] },
                            { name: "暹粒", cities: ["暹粒"] }
                        ],
                        customsPolicies: [
                            { title: "柬埔寨海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["西哈努克港", "柬埔寨港口"]
                    },
                    "laos": {
                        name: "老挝",
                        intro: "老挝是内陆国家，通过邻国港口进行国际贸易。",
                        airports: {
                            international: [
                                { code: "VTE", name: "瓦岱国际机场", city: "万象" },
                                { code: "LPQ", name: "琅勃拉邦国际机场", city: "琅勃拉邦" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "QV", name: "老挝航空", nameEn: "Lao Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "万象", cities: ["万象"] },
                            { name: "琅勃拉邦", cities: ["琅勃拉邦"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "主要通过泰国林查班港或越南海防港转运。" }
                        ],
                        keywords: ["老挝贸易", "内陆运输"]
                    },
                    "brunei": {
                        name: "文莱",
                        intro: "文莱是石油富国，经济依赖能源出口。",
                        airports: {
                            international: [
                                { code: "BWN", name: "文莱国际机场", city: "斯里巴加湾" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "BNMUA", name: "穆阿拉港", city: "穆阿拉", desc: "文莱主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "BI", name: "文莱皇家航空", nameEn: "Royal Brunei Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "文莱-穆阿拉", cities: ["斯里巴加湾"] }
                        ],
                        customsPolicies: [
                            { title: "文莱海关", content: "伊斯兰国家，酒类等商品禁止进口。" }
                        ],
                        keywords: ["穆阿拉港", "文莱港口"]
                    },
                    "timor-leste": {
                        name: "东帝汶",
                        intro: "东帝汶是东南亚最年轻的国家，经济正在发展中。",
                        airports: {
                            international: [
                                { code: "DIL", name: "尼古劳·洛巴托国际机场", city: "帝力" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "TLDIL", name: "帝力港", city: "帝力", desc: "东帝汶主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "帝力", cities: ["帝力"] }
                        ],
                        customsPolicies: [
                            { title: "东帝汶海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["帝力港", "东帝汶"]
                    },
                    "india": {
                        name: "印度",
                        intro: "印度是南亚最大经济体，拥有快速发展的港口和物流网络。",
                        airports: {
                            international: [
                                { code: "DEL", name: "英迪拉·甘地国际机场", city: "新德里" },
                                { code: "BOM", name: "贾特拉帕蒂·希瓦吉国际机场", city: "孟买" },
                                { code: "MAA", name: "金奈国际机场", city: "金奈" },
                                { code: "BLR", name: "班加罗尔国际机场", city: "班加罗尔" },
                                { code: "CCU", name: "加尔各答国际机场", city: "加尔各答" }
                            ],
                            domestic: [
                                { code: "HYD", name: "海德拉巴机场", city: "海德拉巴" }
                            ]
                        },
                        ports: {
                            international: [
                                { code: "INNSA", name: "尼赫鲁港", city: "孟买", desc: "印度最大集装箱港" },
                                { code: "INBOM", name: "孟买港", city: "孟买", desc: "西海岸枢纽" },
                                { code: "INMAA", name: "金奈港", city: "金奈", desc: "东海岸重要港口" },
                                { code: "INCCU", name: "加尔各答港", city: "加尔各答", desc: "传统贸易港" },
                                { code: "INMUN", name: "蒙德拉港", city: "古吉拉特", desc: "私营大港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "AI", name: "印度航空", nameEn: "Air India" },
                            { code: "6E", name: "靛蓝航空", nameEn: "IndiGo" },
                            { code: "SG", name: "香料航空", nameEn: "SpiceJet" }
                        ],
                        shippingLines: [
                            { code: "SCI", name: "印度航运", nameEn: "Shipping Corporation of India", desc: "印度国有航运" }
                        ],
                        provinces: [
                            { name: "马哈拉施特拉", cities: ["孟买", "浦那"] },
                            { name: "德里", cities: ["新德里"] },
                            { name: "卡纳塔克", cities: ["班加罗尔"] },
                            { name: "泰米尔纳德", cities: ["金奈"] },
                            { name: "西孟加拉", cities: ["加尔各答"] }
                        ],
                        customsPolicies: [
                            { title: "印度海关", content: "进口需申报，按HS编码缴纳关税和GST。" },
                            { title: "BIS认证", content: "部分商品需要印度标准局(BIS)认证。" }
                        ],
                        keywords: ["尼赫鲁港", "孟买港", "印度港口"]
                    },
                    "pakistan": {
                        name: "巴基斯坦",
                        intro: "巴基斯坦是南亚重要国家，中巴经济走廊带来发展机遇。",
                        airports: {
                            international: [
                                { code: "KHI", name: "真纳国际机场", city: "卡拉奇" },
                                { code: "LHE", name: "阿拉马·伊克巴勒国际机场", city: "拉合尔" },
                                { code: "ISB", name: "伊斯兰堡国际机场", city: "伊斯兰堡" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "PKKHI", name: "卡拉奇港", city: "卡拉奇", desc: "巴基斯坦最大港口" },
                                { code: "PKGWD", name: "瓜达尔港", city: "瓜达尔", desc: "中巴经济走廊终点" },
                                { code: "PKQCT", name: "卡西姆港", city: "卡拉奇", desc: "现代化港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "PK", name: "巴基斯坦国际航空", nameEn: "Pakistan International Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "信德", cities: ["卡拉奇", "海德拉巴"] },
                            { name: "旁遮普", cities: ["拉合尔", "费萨拉巴德"] },
                            { name: "联邦首都区", cities: ["伊斯兰堡"] },
                            { name: "俾路支", cities: ["瓜达尔", "奎达"] }
                        ],
                        customsPolicies: [
                            { title: "巴基斯坦海关", content: "进口需申报缴税，部分商品需许可证。" }
                        ],
                        keywords: ["卡拉奇港", "瓜达尔港", "巴基斯坦港口"]
                    },
                    "bangladesh": {
                        name: "孟加拉国",
                        intro: "孟加拉国是全球重要的纺织品出口国。",
                        airports: {
                            international: [
                                { code: "DAC", name: "沙贾拉尔国际机场", city: "达卡" },
                                { code: "CGP", name: "沙阿阿马纳国际机场", city: "吉大港" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "BDCGP", name: "吉大港", city: "吉大港", desc: "孟加拉国最大港口" },
                                { code: "BDMGL", name: "蒙格拉港", city: "蒙格拉", desc: "第二大港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "BG", name: "孟加拉航空", nameEn: "Biman Bangladesh Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "达卡", cities: ["达卡"] },
                            { name: "吉大港", cities: ["吉大港"] }
                        ],
                        customsPolicies: [
                            { title: "孟加拉国海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["吉大港", "孟加拉国港口"]
                    },
                    "srilanka": {
                        name: "斯里兰卡",
                        intro: "斯里兰卡位于印度洋航运要道，是南亚重要转口港。",
                        airports: {
                            international: [
                                { code: "CMB", name: "班达拉奈克国际机场", city: "科伦坡" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "LKCMB", name: "科伦坡港", city: "科伦坡", desc: "南亚重要转口港" },
                                { code: "LKHRI", name: "汉班托塔港", city: "汉班托塔", desc: "新建深水港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "UL", name: "斯里兰卡航空", nameEn: "SriLankan Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "西部省", cities: ["科伦坡"] },
                            { name: "南部省", cities: ["汉班托塔"] }
                        ],
                        customsPolicies: [
                            { title: "斯里兰卡海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["科伦坡港", "汉班托塔港", "斯里兰卡港口"]
                    },
                    "nepal": {
                        name: "尼泊尔",
                        intro: "尼泊尔是内陆国家，主要通过印度港口进行国际贸易。",
                        airports: {
                            international: [
                                { code: "KTM", name: "特里布万国际机场", city: "加德满都" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "RA", name: "尼泊尔航空", nameEn: "Nepal Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "巴格马蒂", cities: ["加德满都"] },
                            { name: "甘达基", cities: ["博卡拉"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "主要通过印度加尔各答港转运。" }
                        ],
                        keywords: ["尼泊尔贸易", "内陆运输"]
                    },
                    "maldives": {
                        name: "马尔代夫",
                        intro: "马尔代夫是印度洋岛国，以旅游业为主。",
                        airports: {
                            international: [
                                { code: "MLE", name: "维拉纳国际机场", city: "马累" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "MVMLE", name: "马累港", city: "马累", desc: "马尔代夫主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "Q2", name: "马尔代夫航空", nameEn: "Maldivian" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "马累", cities: ["马累"] }
                        ],
                        customsPolicies: [
                            { title: "马尔代夫海关", content: "伊斯兰国家，酒类、猪肉等禁止进口。" }
                        ],
                        keywords: ["马累港", "马尔代夫港口"]
                    },
                    "bhutan": {
                        name: "不丹",
                        intro: "不丹是内陆国家，通过印度进行国际贸易。",
                        airports: {
                            international: [
                                { code: "PBH", name: "帕罗机场", city: "帕罗" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "B3", name: "不丹皇家航空", nameEn: "Druk Air" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "廷布", cities: ["廷布"] },
                            { name: "帕罗", cities: ["帕罗"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "主要通过印度加尔各答港转运。" }
                        ],
                        keywords: ["不丹贸易", "内陆运输"]
                    },
                    "kazakhstan": {
                        name: "哈萨克斯坦",
                        intro: "哈萨克斯坦是中亚最大国家，中欧班列重要途经国。",
                        airports: {
                            international: [
                                { code: "ALA", name: "阿拉木图国际机场", city: "阿拉木图" },
                                { code: "NQZ", name: "努尔苏丹国际机场", city: "努尔苏丹" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "KZAKT", name: "阿克套港", city: "阿克套", desc: "里海港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "KC", name: "阿斯塔纳航空", nameEn: "Air Astana" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "阿拉木图", cities: ["阿拉木图"] },
                            { name: "努尔苏丹", cities: ["努尔苏丹"] },
                            { name: "阿克套", cities: ["阿克套"] }
                        ],
                        customsPolicies: [
                            { title: "中欧班列", content: "中欧班列重要途经国，货物可在霍尔果斯口岸通关。" }
                        ],
                        keywords: ["哈萨克斯坦", "中欧班列", "阿克套港"]
                    },
                    "uzbekistan": {
                        name: "乌兹别克斯坦",
                        intro: "乌兹别克斯坦是中亚人口最多的国家。",
                        airports: {
                            international: [
                                { code: "TAS", name: "塔什干国际机场", city: "塔什干" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "HY", name: "乌兹别克斯坦航空", nameEn: "Uzbekistan Airways" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "塔什干", cities: ["塔什干"] },
                            { name: "撒马尔罕", cities: ["撒马尔罕"] }
                        ],
                        customsPolicies: [
                            { title: "铁路运输", content: "主要通过铁路连接中国和欧洲。" }
                        ],
                        keywords: ["乌兹别克斯坦", "塔什干"]
                    },
                    "turkmenistan": {
                        name: "土库曼斯坦",
                        intro: "土库曼斯坦拥有丰富的天然气资源。",
                        airports: {
                            international: [
                                { code: "ASB", name: "阿什哈巴德国际机场", city: "阿什哈巴德" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "TMTMB", name: "土库曼巴希港", city: "土库曼巴希", desc: "里海港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "T5", name: "土库曼斯坦航空", nameEn: "Turkmenistan Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "阿什哈巴德", cities: ["阿什哈巴德"] }
                        ],
                        customsPolicies: [
                            { title: "土库曼斯坦海关", content: "进口需许可证，管控较严。" }
                        ],
                        keywords: ["土库曼斯坦", "土库曼巴希港"]
                    },
                    "kyrgyzstan": {
                        name: "吉尔吉斯斯坦",
                        intro: "吉尔吉斯斯坦是中亚内陆国家。",
                        airports: {
                            international: [
                                { code: "FRU", name: "玛纳斯国际机场", city: "比什凯克" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "QH", name: "吉尔吉斯斯坦航空", nameEn: "Air Kyrgyzstan" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "比什凯克", cities: ["比什凯克"] },
                            { name: "奥什", cities: ["奥什"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "通过中国和哈萨克斯坦进行贸易。" }
                        ],
                        keywords: ["吉尔吉斯斯坦", "比什凯克"]
                    },
                    "tajikistan": {
                        name: "塔吉克斯坦",
                        intro: "塔吉克斯坦是中亚内陆国家。",
                        airports: {
                            international: [
                                { code: "DYU", name: "杜尚别国际机场", city: "杜尚别" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "7J", name: "塔吉克航空", nameEn: "Tajik Air" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "杜尚别", cities: ["杜尚别"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "通过中国或邻国进行贸易。" }
                        ],
                        keywords: ["塔吉克斯坦", "杜尚别"]
                    },
                    "uae": {
                        name: "阿联酋",
                        intro: "阿联酋是中东最重要的贸易和物流中心，迪拜是全球转口贸易枢纽。",
                        airports: {
                            international: [
                                { code: "DXB", name: "迪拜国际机场", city: "迪拜" },
                                { code: "AUH", name: "阿布扎比国际机场", city: "阿布扎比" },
                                { code: "DWC", name: "阿勒马克图姆国际机场", city: "迪拜" },
                                { code: "SHJ", name: "沙迦国际机场", city: "沙迦" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "AEJEA", name: "杰贝阿里港", city: "迪拜", desc: "中东最大港口，全球第九大港" },
                                { code: "AEAUH", name: "阿布扎比港", city: "阿布扎比", desc: "重要港口" },
                                { code: "AEKLF", name: "哈利法港", city: "阿布扎比", desc: "现代化港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "EK", name: "阿联酋航空", nameEn: "Emirates" },
                            { code: "EY", name: "阿提哈德航空", nameEn: "Etihad Airways" },
                            { code: "FZ", name: "迪拜航空", nameEn: "flydubai" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "迪拜", cities: ["迪拜"] },
                            { name: "阿布扎比", cities: ["阿布扎比"] },
                            { name: "沙迦", cities: ["沙迦"] }
                        ],
                        customsPolicies: [
                            { title: "自贸区政策", content: "杰贝阿里自贸区享受免税优惠。" },
                            { title: "VAT税", content: "增值税税率5%。" }
                        ],
                        keywords: ["杰贝阿里港", "迪拜机场", "阿联酋港口"]
                    },
                    "saudi-arabia": {
                        name: "沙特阿拉伯",
                        intro: "沙特是中东最大经济体，石油出口大国。",
                        airports: {
                            international: [
                                { code: "RUH", name: "哈立德国王国际机场", city: "利雅得" },
                                { code: "JED", name: "阿卜杜勒-阿齐兹国王国际机场", city: "吉达" },
                                { code: "DMM", name: "法赫德国王国际机场", city: "达曼" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "SAJED", name: "吉达港", city: "吉达", desc: "红海最大港口" },
                                { code: "SADMM", name: "达曼港", city: "达曼", desc: "波斯湾港口" },
                                { code: "SAJUB", name: "朱拜勒港", city: "朱拜勒", desc: "工业港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "SV", name: "沙特阿拉伯航空", nameEn: "Saudi Arabian Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "利雅得", cities: ["利雅得"] },
                            { name: "麦加", cities: ["吉达", "麦加"] },
                            { name: "东部省", cities: ["达曼", "胡拜尔"] }
                        ],
                        customsPolicies: [
                            { title: "沙特海关", content: "伊斯兰国家，酒类、猪肉等禁止进口。" },
                            { title: "SASO认证", content: "部分商品需SASO认证。" },
                            { title: "【2026新规】国家地址强制要求", content: "自2026年1月1日起，所有进出沙特货物强制要求提供沙特国家地址（National Address）或短地址编码（Saudi Short Address Code）。短地址码必须填写在邮编栏位（填写在其他位置视同未提供），5位邮编填写在地址栏内，二者缺一不可。违规罚款：每单最低5000沙特里亚尔（约13300元人民币）。收件人注册短地址码官网：https://splonline.com.sa/en/national-address-1/" }
                        ],
                        keywords: ["吉达港", "达曼港", "沙特港口"]
                    },
                    "turkey": {
                        name: "土耳其",
                        intro: "土耳其横跨欧亚大陆，是重要的贸易桥梁。",
                        airports: {
                            international: [
                                { code: "IST", name: "伊斯坦布尔机场", city: "伊斯坦布尔" },
                                { code: "SAW", name: "萨比哈·格克琴机场", city: "伊斯坦布尔" },
                                { code: "ESB", name: "埃森博阿机场", city: "安卡拉" },
                                { code: "ADB", name: "阿德南·门德列斯机场", city: "伊兹密尔" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "TRIST", name: "伊斯坦布尔港", city: "伊斯坦布尔", desc: "博斯普鲁斯海峡枢纽" },
                                { code: "TRIZM", name: "伊兹密尔港", city: "伊兹密尔", desc: "爱琴海港口" },
                                { code: "TRMER", name: "梅尔辛港", city: "梅尔辛", desc: "地中海最大港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "TK", name: "土耳其航空", nameEn: "Turkish Airlines" },
                            { code: "PC", name: "飞马航空", nameEn: "Pegasus Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "伊斯坦布尔", cities: ["伊斯坦布尔"] },
                            { name: "安卡拉", cities: ["安卡拉"] },
                            { name: "伊兹密尔", cities: ["伊兹密尔"] },
                            { name: "梅尔辛", cities: ["梅尔辛"] }
                        ],
                        customsPolicies: [
                            { title: "土耳其海关", content: "与欧盟有关税同盟，部分商品免关税。" }
                        ],
                        keywords: ["伊斯坦布尔港", "梅尔辛港", "土耳其港口"]
                    },
                    "israel": {
                        name: "以色列",
                        intro: "以色列是中东高科技国家，拥有先进的物流设施。",
                        airports: {
                            international: [
                                { code: "TLV", name: "本-古里安国际机场", city: "特拉维夫" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "ILHFA", name: "海法港", city: "海法", desc: "以色列最大港口" },
                                { code: "ILASH", name: "阿什杜德港", city: "阿什杜德", desc: "现代化港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "LY", name: "以色列航空", nameEn: "El Al" }
                        ],
                        shippingLines: [
                            { code: "ZIM", name: "以星航运", nameEn: "ZIM", desc: "以色列航运公司" }
                        ],
                        provinces: [
                            { name: "特拉维夫区", cities: ["特拉维夫"] },
                            { name: "海法区", cities: ["海法"] }
                        ],
                        customsPolicies: [
                            { title: "以色列海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["海法港", "以色列港口"]
                    },
                    "qatar": {
                        name: "卡塔尔",
                        intro: "卡塔尔是全球最富裕的国家之一，天然气出口大国。",
                        airports: {
                            international: [
                                { code: "DOH", name: "哈马德国际机场", city: "多哈" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "QAHMD", name: "哈马德港", city: "多哈", desc: "卡塔尔新建大港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "QR", name: "卡塔尔航空", nameEn: "Qatar Airways" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "多哈", cities: ["多哈"] }
                        ],
                        customsPolicies: [
                            { title: "卡塔尔海关", content: "免税港口，大部分商品免关税。" }
                        ],
                        keywords: ["哈马德港", "卡塔尔港口"]
                    },
                    "kuwait": {
                        name: "科威特",
                        intro: "科威特是石油出口国，经济依赖能源。",
                        airports: {
                            international: [
                                { code: "KWI", name: "科威特国际机场", city: "科威特城" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "KWSWK", name: "舒威赫港", city: "科威特城", desc: "科威特主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "KU", name: "科威特航空", nameEn: "Kuwait Airways" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "科威特城", cities: ["科威特城"] }
                        ],
                        customsPolicies: [
                            { title: "科威特海关", content: "GCC成员国，部分商品享受优惠税率。" }
                        ],
                        keywords: ["舒威赫港", "科威特港口"]
                    },
                    "oman": {
                        name: "阿曼",
                        intro: "阿曼位于阿拉伯半岛东南，是重要的转口贸易中心。",
                        airports: {
                            international: [
                                { code: "MCT", name: "马斯喀特国际机场", city: "马斯喀特" },
                                { code: "SLL", name: "萨拉拉机场", city: "萨拉拉" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "OMSLL", name: "萨拉拉港", city: "萨拉拉", desc: "印度洋重要转口港" },
                                { code: "OMSOH", name: "苏哈尔港", city: "苏哈尔", desc: "新兴工业港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "WY", name: "阿曼航空", nameEn: "Oman Air" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "马斯喀特", cities: ["马斯喀特"] },
                            { name: "佐法尔", cities: ["萨拉拉"] }
                        ],
                        customsPolicies: [
                            { title: "阿曼海关", content: "GCC成员国，部分商品免关税。" }
                        ],
                        keywords: ["萨拉拉港", "阿曼港口"]
                    },
                    "bahrain": {
                        name: "巴林",
                        intro: "巴林是波斯湾岛国，金融和贸易中心。",
                        airports: {
                            international: [
                                { code: "BAH", name: "巴林国际机场", city: "麦纳麦" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "BHMIN", name: "米纳萨尔曼港", city: "麦纳麦", desc: "巴林主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "GF", name: "海湾航空", nameEn: "Gulf Air" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "麦纳麦", cities: ["麦纳麦"] }
                        ],
                        customsPolicies: [
                            { title: "巴林海关", content: "GCC成员国，部分商品免关税。" }
                        ],
                        keywords: ["巴林港口"]
                    },
                    "jordan": {
                        name: "约旦",
                        intro: "约旦是中东重要国家，亚喀巴是唯一出海口。",
                        airports: {
                            international: [
                                { code: "AMM", name: "阿勒娅王后国际机场", city: "安曼" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "JOAQJ", name: "亚喀巴港", city: "亚喀巴", desc: "约旦唯一海港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "RJ", name: "皇家约旦航空", nameEn: "Royal Jordanian" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "安曼", cities: ["安曼"] },
                            { name: "亚喀巴", cities: ["亚喀巴"] }
                        ],
                        customsPolicies: [
                            { title: "约旦海关", content: "与多国有自贸协定。" }
                        ],
                        keywords: ["亚喀巴港", "约旦港口"]
                    },
                    "lebanon": {
                        name: "黎巴嫩",
                        intro: "黎巴嫩是地中海东岸国家，贝鲁特是区域贸易中心。",
                        airports: {
                            international: [
                                { code: "BEY", name: "贝鲁特国际机场", city: "贝鲁特" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "LBBEY", name: "贝鲁特港", city: "贝鲁特", desc: "黎巴嫩主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "ME", name: "中东航空", nameEn: "Middle East Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "贝鲁特", cities: ["贝鲁特"] }
                        ],
                        customsPolicies: [
                            { title: "黎巴嫩海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["贝鲁特港", "黎巴嫩港口"]
                    },
                    "iraq": {
                        name: "伊拉克",
                        intro: "伊拉克正在重建经济，石油出口为主要收入。",
                        airports: {
                            international: [
                                { code: "BGW", name: "巴格达国际机场", city: "巴格达" },
                                { code: "BSR", name: "巴士拉国际机场", city: "巴士拉" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "IQUQR", name: "乌姆盖斯尔港", city: "巴士拉", desc: "伊拉克主要港口" },
                                { code: "IQBSR", name: "巴士拉港", city: "巴士拉", desc: "波斯湾港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "IA", name: "伊拉克航空", nameEn: "Iraqi Airways" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "巴格达", cities: ["巴格达"] },
                            { name: "巴士拉", cities: ["巴士拉"] }
                        ],
                        customsPolicies: [
                            { title: "伊拉克海关", content: "进口需申报，部分商品需许可证。" }
                        ],
                        keywords: ["伊拉克港口"]
                    },
                    "iran": {
                        name: "伊朗",
                        intro: "伊朗是中东大国，受国际制裁影响贸易受限。",
                        airports: {
                            international: [
                                { code: "IKA", name: "伊玛目霍梅尼国际机场", city: "德黑兰" },
                                { code: "THR", name: "梅赫拉巴德机场", city: "德黑兰" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "IRBND", name: "阿巴斯港", city: "阿巴斯", desc: "伊朗最大港口" },
                                { code: "IRCHB", name: "恰巴哈尔港", city: "恰巴哈尔", desc: "印度投资的港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "IR", name: "伊朗航空", nameEn: "Iran Air" },
                            { code: "W5", name: "马汉航空", nameEn: "Mahan Air" }
                        ],
                        shippingLines: [
                            { code: "IRISL", name: "伊朗国航", nameEn: "IRISL", desc: "伊朗国有航运" }
                        ],
                        provinces: [
                            { name: "德黑兰", cities: ["德黑兰"] },
                            { name: "霍尔木兹甘", cities: ["阿巴斯"] }
                        ],
                        customsPolicies: [
                            { title: "制裁影响", content: "受美国制裁，贸易受限，需注意合规。" }
                        ],
                        keywords: ["阿巴斯港", "伊朗港口"]
                    },
                    "syria": {
                        name: "叙利亚",
                        intro: "叙利亚位于地中海东岸，受冲突影响贸易受限。",
                        airports: {
                            international: [
                                { code: "DAM", name: "大马士革国际机场", city: "大马士革" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "SYLAT", name: "拉塔基亚港", city: "拉塔基亚", desc: "叙利亚主要港口" },
                                { code: "SYTTS", name: "塔尔图斯港", city: "塔尔图斯", desc: "地中海港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "RB", name: "叙利亚航空", nameEn: "Syrian Air" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "大马士革", cities: ["大马士革"] },
                            { name: "拉塔基亚", cities: ["拉塔基亚"] }
                        ],
                        customsPolicies: [
                            { title: "制裁影响", content: "受国际制裁，贸易受限。" }
                        ],
                        keywords: ["叙利亚港口"]
                    },
                    "yemen": {
                        name: "也门",
                        intro: "也门位于阿拉伯半岛南端，受冲突影响严重。",
                        airports: {
                            international: [
                                { code: "SAH", name: "萨那国际机场", city: "萨那" },
                                { code: "ADE", name: "亚丁国际机场", city: "亚丁" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "YEADE", name: "亚丁港", city: "亚丁", desc: "红海入口战略港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "IY", name: "也门航空", nameEn: "Yemenia" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "萨那", cities: ["萨那"] },
                            { name: "亚丁", cities: ["亚丁"] }
                        ],
                        customsPolicies: [
                            { title: "冲突影响", content: "受内战影响，贸易受限。" }
                        ],
                        keywords: ["亚丁港", "也门港口"]
                    },
                    "georgia": {
                        name: "格鲁吉亚",
                        intro: "格鲁吉亚是高加索国家，黑海沿岸重要贸易通道。",
                        airports: {
                            international: [
                                { code: "TBS", name: "第比利斯国际机场", city: "第比利斯" },
                                { code: "BUS", name: "巴统机场", city: "巴统" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "GEBAT", name: "巴统港", city: "巴统", desc: "黑海港口" },
                                { code: "GEPTI", name: "波季港", city: "波季", desc: "重要转运港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "A9", name: "格鲁吉亚航空", nameEn: "Georgian Airways" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "第比利斯", cities: ["第比利斯"] },
                            { name: "阿扎尔", cities: ["巴统"] }
                        ],
                        customsPolicies: [
                            { title: "格鲁吉亚海关", content: "自由贸易政策，关税较低。" }
                        ],
                        keywords: ["巴统港", "格鲁吉亚港口"]
                    },
                    "azerbaijan": {
                        name: "阿塞拜疆",
                        intro: "阿塞拜疆是里海沿岸国家，石油资源丰富。",
                        airports: {
                            international: [
                                { code: "GYD", name: "盖达尔·阿利耶夫国际机场", city: "巴库" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "AZBAK", name: "巴库港", city: "巴库", desc: "里海最大港口" },
                                { code: "AZALY", name: "阿利亚特港", city: "阿利亚特", desc: "新建港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "J2", name: "阿塞拜疆航空", nameEn: "Azerbaijan Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "巴库", cities: ["巴库"] }
                        ],
                        customsPolicies: [
                            { title: "阿塞拜疆海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["巴库港", "阿塞拜疆港口"]
                    },
                    "armenia": {
                        name: "亚美尼亚",
                        intro: "亚美尼亚是高加索内陆国家。",
                        airports: {
                            international: [
                                { code: "EVN", name: "兹瓦尔特诺茨国际机场", city: "埃里温" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "U8", name: "亚美尼亚航空", nameEn: "Armenia Aircompany" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "埃里温", cities: ["埃里温"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "通过格鲁吉亚巴统港或伊朗阿巴斯港进行贸易。" }
                        ],
                        keywords: ["亚美尼亚贸易"]
                    },
                    "palestine": {
                        name: "巴勒斯坦",
                        intro: "巴勒斯坦地区，贸易通过以色列港口进行。",
                        airports: {
                            international: [],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "西岸", cities: ["拉姆安拉"] },
                            { name: "加沙", cities: ["加沙"] }
                        ],
                        customsPolicies: [
                            { title: "贸易通道", content: "通过以色列或埃及港口进行贸易。" }
                        ],
                        keywords: ["巴勒斯坦"]
                    },
                    "cyprus": {
                        name: "塞浦路斯",
                        intro: "塞浦路斯是地中海岛国，欧盟成员国。",
                        airports: {
                            international: [
                                { code: "LCA", name: "拉纳卡国际机场", city: "拉纳卡" },
                                { code: "PFO", name: "帕福斯机场", city: "帕福斯" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "CYLMS", name: "利马索尔港", city: "利马索尔", desc: "塞浦路斯最大港口" },
                                { code: "CYLCA", name: "拉纳卡港", city: "拉纳卡", desc: "东部港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "CY", name: "塞浦路斯航空", nameEn: "Cyprus Airways" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "尼科西亚", cities: ["尼科西亚"] },
                            { name: "利马索尔", cities: ["利马索尔"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["利马索尔港", "塞浦路斯港口"]
                    }
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
                    // ===== 北欧国家 =====
                    "sweden": {
                        name: "瑞典",
                        intro: "瑞典是北欧最大国家，拥有发达的制造业和物流体系。",
                        airports: {
                            international: [
                                { code: "ARN", name: "斯德哥尔摩阿兰达机场", city: "斯德哥尔摩" },
                                { code: "GOT", name: "哥德堡兰德维特机场", city: "哥德堡" }
                            ],
                            domestic: [
                                { code: "MMX", name: "马尔默机场", city: "马尔默" }
                            ]
                        },
                        ports: {
                            international: [
                                { code: "SEGOT", name: "哥德堡港", city: "哥德堡", desc: "北欧最大港口" },
                                { code: "SESTO", name: "斯德哥尔摩港", city: "斯德哥尔摩", desc: "首都港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "SK", name: "北欧航空", nameEn: "SAS Scandinavian Airlines" }
                        ],
                        shippingLines: [
                            { code: "WALLENIUS", name: "华伦威尔森", nameEn: "Wallenius Wilhelmsen", desc: "汽车滚装船领导者" }
                        ],
                        provinces: [
                            { name: "斯德哥尔摩", cities: ["斯德哥尔摩"] },
                            { name: "西约塔兰", cities: ["哥德堡"] },
                            { name: "斯科讷", cities: ["马尔默"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策和进口法规。" }
                        ],
                        keywords: ["哥德堡港", "瑞典港口"]
                    },
                    "norway": {
                        name: "挪威",
                        intro: "挪威海岸线漫长，是全球重要的航运国家。",
                        airports: {
                            international: [
                                { code: "OSL", name: "奥斯陆加勒穆恩机场", city: "奥斯陆" },
                                { code: "BGO", name: "卑尔根机场", city: "卑尔根" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "NOOSL", name: "奥斯陆港", city: "奥斯陆", desc: "挪威最大港口" },
                                { code: "NOBGO", name: "卑尔根港", city: "卑尔根", desc: "西部重要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "SK", name: "北欧航空", nameEn: "SAS" },
                            { code: "DY", name: "挪威航空", nameEn: "Norwegian Air" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "奥斯陆", cities: ["奥斯陆"] },
                            { name: "霍达兰", cities: ["卑尔根"] }
                        ],
                        customsPolicies: [
                            { title: "非欧盟国家", content: "挪威非欧盟成员，进口需单独清关。" }
                        ],
                        keywords: ["奥斯陆港", "挪威港口"]
                    },
                    "denmark": {
                        name: "丹麦",
                        intro: "丹麦是全球航运大国，马士基总部所在地。",
                        airports: {
                            international: [
                                { code: "CPH", name: "哥本哈根机场", city: "哥本哈根" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "DKCPH", name: "哥本哈根港", city: "哥本哈根", desc: "丹麦最大港口" },
                                { code: "DKAAR", name: "奥胡斯港", city: "奥胡斯", desc: "集装箱港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "SK", name: "北欧航空", nameEn: "SAS" }
                        ],
                        shippingLines: [
                            { code: "MAERSK", name: "马士基", nameEn: "Maersk", desc: "全球最大集装箱航运公司" }
                        ],
                        provinces: [
                            { name: "首都大区", cities: ["哥本哈根"] },
                            { name: "中日德兰", cities: ["奥胡斯"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["哥本哈根港", "马士基", "丹麦港口"]
                    },
                    "finland": {
                        name: "芬兰",
                        intro: "芬兰是北欧国家，与俄罗斯接壤。",
                        airports: {
                            international: [
                                { code: "HEL", name: "赫尔辛基万塔机场", city: "赫尔辛基" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "FIHEL", name: "赫尔辛基港", city: "赫尔辛基", desc: "芬兰最大港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "AY", name: "芬兰航空", nameEn: "Finnair" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "新地区", cities: ["赫尔辛基", "埃斯波"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["赫尔辛基港", "芬兰港口"]
                    },
                    "iceland": {
                        name: "冰岛",
                        intro: "冰岛是北大西洋岛国，渔业发达。",
                        airports: {
                            international: [
                                { code: "KEF", name: "凯夫拉维克国际机场", city: "雷克雅未克" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "ISREY", name: "雷克雅未克港", city: "雷克雅未克", desc: "冰岛主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "FI", name: "冰岛航空", nameEn: "Icelandair" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "首都区", cities: ["雷克雅未克"] }
                        ],
                        customsPolicies: [
                            { title: "非欧盟国家", content: "冰岛非欧盟成员，进口需单独清关。" }
                        ],
                        keywords: ["雷克雅未克港", "冰岛港口"]
                    },
                    // ===== 西欧国家 =====
                    "france": {
                        name: "法国",
                        intro: "法国是西欧大国，拥有大西洋和地中海海岸线。",
                        airports: {
                            international: [
                                { code: "CDG", name: "巴黎戴高乐机场", city: "巴黎" },
                                { code: "ORY", name: "巴黎奥利机场", city: "巴黎" },
                                { code: "NCE", name: "尼斯机场", city: "尼斯" },
                                { code: "MRS", name: "马赛机场", city: "马赛" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "FRLEH", name: "勒阿弗尔港", city: "勒阿弗尔", desc: "法国最大港口" },
                                { code: "FRMRS", name: "马赛港", city: "马赛", desc: "地中海港口" },
                                { code: "FRDKK", name: "敦刻尔克港", city: "敦刻尔克", desc: "北部港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "AF", name: "法国航空", nameEn: "Air France" }
                        ],
                        shippingLines: [
                            { code: "CMA-CGM", name: "达飞轮船", nameEn: "CMA CGM", desc: "全球第三大航运公司" }
                        ],
                        provinces: [
                            { name: "法兰西岛", cities: ["巴黎"] },
                            { name: "诺曼底", cities: ["勒阿弗尔"] },
                            { name: "普罗旺斯", cities: ["马赛", "尼斯"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["勒阿弗尔港", "法国港口", "达飞"]
                    },
                    "uk": {
                        name: "英国",
                        intro: "英国是欧洲重要贸易国，脱欧后有独立关税政策。",
                        airports: {
                            international: [
                                { code: "LHR", name: "伦敦希思罗机场", city: "伦敦" },
                                { code: "LGW", name: "伦敦盖特威克机场", city: "伦敦" },
                                { code: "MAN", name: "曼彻斯特机场", city: "曼彻斯特" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "GBFXT", name: "费利克斯托港", city: "费利克斯托", desc: "英国最大集装箱港" },
                                { code: "GBSOU", name: "南安普顿港", city: "南安普顿", desc: "主要港口" },
                                { code: "GBLON", name: "伦敦门户港", city: "伦敦", desc: "新建深水港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "BA", name: "英国航空", nameEn: "British Airways" },
                            { code: "VS", name: "维珍航空", nameEn: "Virgin Atlantic" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "大伦敦", cities: ["伦敦"] },
                            { name: "大曼彻斯特", cities: ["曼彻斯特"] },
                            { name: "苏福克", cities: ["费利克斯托"] }
                        ],
                        customsPolicies: [
                            { title: "脱欧后关税", content: "英国已脱离欧盟，进口需单独清关，适用英国关税政策。" }
                        ],
                        keywords: ["费利克斯托港", "英国港口"]
                    },
                    "netherlands": {
                        name: "荷兰",
                        intro: "荷兰是欧洲物流枢纽，拥有欧洲最大港口鹿特丹。",
                        airports: {
                            international: [
                                { code: "AMS", name: "阿姆斯特丹史基浦机场", city: "阿姆斯特丹" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "NLRTM", name: "鹿特丹港", city: "鹿特丹", desc: "欧洲最大港口" },
                                { code: "NLAMS", name: "阿姆斯特丹港", city: "阿姆斯特丹", desc: "重要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "KL", name: "荷兰皇家航空", nameEn: "KLM" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "北荷兰", cities: ["阿姆斯特丹"] },
                            { name: "南荷兰", cities: ["鹿特丹", "海牙"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，鹿特丹是欧洲主要清关港口。" }
                        ],
                        keywords: ["鹿特丹港", "荷兰港口"]
                    },
                    "belgium": {
                        name: "比利时",
                        intro: "比利时是欧洲贸易枢纽，安特卫普是欧洲第二大港。",
                        airports: {
                            international: [
                                { code: "BRU", name: "布鲁塞尔机场", city: "布鲁塞尔" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "BEANR", name: "安特卫普港", city: "安特卫普", desc: "欧洲第二大港" },
                                { code: "BEZEE", name: "泽布吕赫港", city: "泽布吕赫", desc: "重要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "SN", name: "布鲁塞尔航空", nameEn: "Brussels Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "布鲁塞尔首都", cities: ["布鲁塞尔"] },
                            { name: "安特卫普", cities: ["安特卫普"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，安特卫普是重要清关港口。" }
                        ],
                        keywords: ["安特卫普港", "比利时港口"]
                    },
                    "ireland": {
                        name: "爱尔兰",
                        intro: "爱尔兰是欧洲岛国，科技产业发达。",
                        airports: {
                            international: [
                                { code: "DUB", name: "都柏林机场", city: "都柏林" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "IEDUB", name: "都柏林港", city: "都柏林", desc: "爱尔兰最大港口" },
                                { code: "IEORK", name: "科克港", city: "科克", desc: "重要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "EI", name: "爱尔兰航空", nameEn: "Aer Lingus" },
                            { code: "FR", name: "瑞安航空", nameEn: "Ryanair" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "都柏林", cities: ["都柏林"] },
                            { name: "科克", cities: ["科克"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" },
                            { title: "【2026新规】Eircode邮编强制要求", content: "自2026年2月1日起，所有FedEx往返爱尔兰货件必须提供Eircode（爱尔兰7位智能邮政编码）。未提供完整准确邮编将直接退运并罚款。查询邮编：https://finder.eircode.ie/" }
                        ],
                        keywords: ["都柏林港", "爱尔兰港口"]
                    },
                    "luxembourg": {
                        name: "卢森堡",
                        intro: "卢森堡是欧洲内陆小国，金融中心。",
                        airports: {
                            international: [
                                { code: "LUX", name: "卢森堡机场", city: "卢森堡" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "LG", name: "卢森堡货运航空", nameEn: "Cargolux" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "卢森堡", cities: ["卢森堡市"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "主要通过鹿特丹港和安特卫普港进行贸易。" }
                        ],
                        keywords: ["卢森堡"]
                    },
                    "monaco": {
                        name: "摩纳哥",
                        intro: "摩纳哥是地中海城邦小国。",
                        airports: {
                            international: [],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "MCMON", name: "摩纳哥港", city: "摩纳哥", desc: "游艇港口为主" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "摩纳哥", cities: ["摩纳哥"] }
                        ],
                        customsPolicies: [
                            { title: "与法国关税同盟", content: "与法国有关税同盟，通过法国尼斯机场和港口。" }
                        ],
                        keywords: ["摩纳哥"]
                    },
                    // ===== 中欧国家 =====
                    "germany": {
                        name: "德国",
                        intro: "德国是欧洲最大经济体，制造业和物流业发达。",
                        airports: {
                            international: [
                                { code: "FRA", name: "法兰克福机场", city: "法兰克福" },
                                { code: "MUC", name: "慕尼黑机场", city: "慕尼黑" },
                                { code: "DUS", name: "杜塞尔多夫机场", city: "杜塞尔多夫" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "DEHAM", name: "汉堡港", city: "汉堡", desc: "德国最大港口，欧洲第三大港" },
                                { code: "DEBRV", name: "不来梅港", city: "不来梅", desc: "重要港口" },
                                { code: "DEWVN", name: "威廉港", city: "威廉港", desc: "深水港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "LH", name: "汉莎航空", nameEn: "Lufthansa" }
                        ],
                        shippingLines: [
                            { code: "HAPAG", name: "赫伯罗特", nameEn: "Hapag-Lloyd", desc: "全球第五大航运公司" }
                        ],
                        provinces: [
                            { name: "汉堡", cities: ["汉堡"] },
                            { name: "黑森", cities: ["法兰克福"] },
                            { name: "巴伐利亚", cities: ["慕尼黑"] },
                            { name: "不来梅", cities: ["不来梅"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，汉堡是重要清关港口。" }
                        ],
                        keywords: ["汉堡港", "德国港口", "赫伯罗特"]
                    },
                    "poland": {
                        name: "波兰",
                        intro: "波兰是中东欧重要国家，物流枢纽。",
                        airports: {
                            international: [
                                { code: "WAW", name: "华沙肖邦机场", city: "华沙" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "PLGDN", name: "格但斯克港", city: "格但斯克", desc: "波兰最大港口" },
                                { code: "PLGDY", name: "格丁尼亚港", city: "格丁尼亚", desc: "重要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "LO", name: "波兰航空", nameEn: "LOT Polish Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "马佐夫舍", cities: ["华沙"] },
                            { name: "滨海", cities: ["格但斯克", "格丁尼亚"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["格但斯克港", "波兰港口"]
                    },
                    "switzerland": {
                        name: "瑞士",
                        intro: "瑞士是欧洲内陆国家，金融和航运业发达。",
                        airports: {
                            international: [
                                { code: "ZRH", name: "苏黎世机场", city: "苏黎世" },
                                { code: "GVA", name: "日内瓦机场", city: "日内瓦" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "LX", name: "瑞士航空", nameEn: "Swiss" }
                        ],
                        shippingLines: [
                            { code: "MSC", name: "地中海航运", nameEn: "MSC", desc: "全球第二大航运公司，总部日内瓦" }
                        ],
                        provinces: [
                            { name: "苏黎世", cities: ["苏黎世"] },
                            { name: "日内瓦", cities: ["日内瓦"] }
                        ],
                        customsPolicies: [
                            { title: "非欧盟国家", content: "瑞士非欧盟成员，进口需单独清关。主要通过鹿特丹港和热那亚港。" }
                        ],
                        keywords: ["瑞士", "MSC"]
                    },
                    "austria": {
                        name: "奥地利",
                        intro: "奥地利是欧洲内陆国家，中欧交通枢纽。",
                        airports: {
                            international: [
                                { code: "VIE", name: "维也纳机场", city: "维也纳" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "OS", name: "奥地利航空", nameEn: "Austrian Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "维也纳", cities: ["维也纳"] },
                            { name: "萨尔茨堡", cities: ["萨尔茨堡"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "主要通过汉堡港和的里雅斯特港进行贸易。" }
                        ],
                        keywords: ["奥地利"]
                    },
                    "czech": {
                        name: "捷克",
                        intro: "捷克是欧洲内陆国家，制造业发达。",
                        airports: {
                            international: [
                                { code: "PRG", name: "布拉格机场", city: "布拉格" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "OK", name: "捷克航空", nameEn: "Czech Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "布拉格", cities: ["布拉格"] },
                            { name: "摩拉维亚", cities: ["布尔诺"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "主要通过汉堡港和不来梅港进行贸易。" }
                        ],
                        keywords: ["捷克"]
                    },
                    "hungary": {
                        name: "匈牙利",
                        intro: "匈牙利是欧洲内陆国家，多瑙河贯穿。",
                        airports: {
                            international: [
                                { code: "BUD", name: "布达佩斯机场", city: "布达佩斯" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "W6", name: "维兹航空", nameEn: "Wizz Air" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "布达佩斯", cities: ["布达佩斯"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "多瑙河内河运输，通过里耶卡港和科佩尔港。" }
                        ],
                        keywords: ["匈牙利"]
                    },
                    "slovakia": {
                        name: "斯洛伐克",
                        intro: "斯洛伐克是欧洲内陆国家。",
                        airports: {
                            international: [
                                { code: "BTS", name: "布拉迪斯拉发机场", city: "布拉迪斯拉发" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "布拉迪斯拉发", cities: ["布拉迪斯拉发"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "主要通过汉堡港进行贸易。" }
                        ],
                        keywords: ["斯洛伐克"]
                    },
                    "liechtenstein": {
                        name: "列支敦士登",
                        intro: "列支敦士登是欧洲微型内陆国家。",
                        airports: {
                            international: [],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "瓦杜兹", cities: ["瓦杜兹"] }
                        ],
                        customsPolicies: [
                            { title: "与瑞士关税同盟", content: "与瑞士有关税同盟，通过瑞士进出口。" }
                        ],
                        keywords: ["列支敦士登"]
                    },
                    // ===== 南欧国家 =====
                    "italy": {
                        name: "意大利",
                        intro: "意大利是地中海航运大国，拥有漫长的海岸线。",
                        airports: {
                            international: [
                                { code: "FCO", name: "罗马菲乌米奇诺机场", city: "罗马" },
                                { code: "MXP", name: "米兰马尔彭萨机场", city: "米兰" },
                                { code: "VCE", name: "威尼斯机场", city: "威尼斯" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "ITGOA", name: "热那亚港", city: "热那亚", desc: "意大利最大港口" },
                                { code: "ITLSP", name: "拉斯佩齐亚港", city: "拉斯佩齐亚", desc: "集装箱港口" },
                                { code: "ITTRS", name: "的里雅斯特港", city: "的里雅斯特", desc: "亚得里亚海港口" },
                                { code: "ITNAP", name: "那不勒斯港", city: "那不勒斯", desc: "南部港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "AZ", name: "意大利航空", nameEn: "ITA Airways" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "拉齐奥", cities: ["罗马"] },
                            { name: "伦巴第", cities: ["米兰"] },
                            { name: "利古里亚", cities: ["热那亚"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["热那亚港", "意大利港口"]
                    },
                    "spain": {
                        name: "西班牙",
                        intro: "西班牙海岸线漫长，拥有大西洋和地中海港口。",
                        airports: {
                            international: [
                                { code: "MAD", name: "马德里巴拉哈斯机场", city: "马德里" },
                                { code: "BCN", name: "巴塞罗那机场", city: "巴塞罗那" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "ESVLC", name: "瓦伦西亚港", city: "瓦伦西亚", desc: "地中海最大港口" },
                                { code: "ESBCN", name: "巴塞罗那港", city: "巴塞罗那", desc: "重要港口" },
                                { code: "ESALG", name: "阿尔赫西拉斯港", city: "阿尔赫西拉斯", desc: "直布罗陀海峡港口" },
                                { code: "ESBIO", name: "毕尔巴鄂港", city: "毕尔巴鄂", desc: "北部港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "IB", name: "西班牙国家航空", nameEn: "Iberia" },
                            { code: "VY", name: "伏林航空", nameEn: "Vueling" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "马德里", cities: ["马德里"] },
                            { name: "加泰罗尼亚", cities: ["巴塞罗那"] },
                            { name: "瓦伦西亚", cities: ["瓦伦西亚"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["瓦伦西亚港", "西班牙港口"]
                    },
                    "portugal": {
                        name: "葡萄牙",
                        intro: "葡萄牙是大西洋沿岸国家，航海历史悠久。",
                        airports: {
                            international: [
                                { code: "LIS", name: "里斯本机场", city: "里斯本" },
                                { code: "OPO", name: "波尔图机场", city: "波尔图" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "PTSIN", name: "锡尼什港", city: "锡尼什", desc: "葡萄牙最大港口" },
                                { code: "PTLIS", name: "里斯本港", city: "里斯本", desc: "首都港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "TP", name: "葡萄牙航空", nameEn: "TAP Air Portugal" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "里斯本", cities: ["里斯本"] },
                            { name: "波尔图", cities: ["波尔图"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["锡尼什港", "葡萄牙港口"]
                    },
                    "greece": {
                        name: "希腊",
                        intro: "希腊是全球航运大国，船东数量全球第一。",
                        airports: {
                            international: [
                                { code: "ATH", name: "雅典机场", city: "雅典" },
                                { code: "SKG", name: "塞萨洛尼基机场", city: "塞萨洛尼基" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "GRPIR", name: "比雷埃夫斯港", city: "雅典", desc: "地中海枢纽，中远海运经营" },
                                { code: "GRSKG", name: "塞萨洛尼基港", city: "塞萨洛尼基", desc: "北部港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "A3", name: "爱琴海航空", nameEn: "Aegean Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "阿提卡", cities: ["雅典", "比雷埃夫斯"] },
                            { name: "中马其顿", cities: ["塞萨洛尼基"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["比雷埃夫斯港", "希腊港口"]
                    },
                    "romania": {
                        name: "罗马尼亚",
                        intro: "罗马尼亚拥有黑海海岸线，是东南欧重要国家。",
                        airports: {
                            international: [
                                { code: "OTP", name: "布加勒斯特机场", city: "布加勒斯特" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "ROCND", name: "康斯坦察港", city: "康斯坦察", desc: "黑海重要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "RO", name: "罗马尼亚航空", nameEn: "TAROM" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "布加勒斯特", cities: ["布加勒斯特"] },
                            { name: "康斯坦察", cities: ["康斯坦察"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["康斯坦察港", "罗马尼亚港口"]
                    },
                    "croatia": {
                        name: "克罗地亚",
                        intro: "克罗地亚拥有漫长的亚得里亚海海岸线。",
                        airports: {
                            international: [
                                { code: "ZAG", name: "萨格勒布机场", city: "萨格勒布" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "HRRJK", name: "里耶卡港", city: "里耶卡", desc: "克罗地亚最大港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "OU", name: "克罗地亚航空", nameEn: "Croatia Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "萨格勒布", cities: ["萨格勒布"] },
                            { name: "滨海", cities: ["里耶卡"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["里耶卡港", "克罗地亚港口"]
                    },
                    "slovenia": {
                        name: "斯洛文尼亚",
                        intro: "斯洛文尼亚是中欧小国，科佩尔港是重要出海口。",
                        airports: {
                            international: [
                                { code: "LJU", name: "卢布尔雅那机场", city: "卢布尔雅那" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "SIKOP", name: "科佩尔港", city: "科佩尔", desc: "亚得里亚海港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "卢布尔雅那", cities: ["卢布尔雅那"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["科佩尔港", "斯洛文尼亚港口"]
                    },
                    "bulgaria": {
                        name: "保加利亚",
                        intro: "保加利亚拥有黑海海岸线。",
                        airports: {
                            international: [
                                { code: "SOF", name: "索非亚机场", city: "索非亚" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "BGVAR", name: "瓦尔纳港", city: "瓦尔纳", desc: "保加利亚最大港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "FB", name: "保加利亚航空", nameEn: "Bulgaria Air" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "索非亚", cities: ["索非亚"] },
                            { name: "瓦尔纳", cities: ["瓦尔纳"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["瓦尔纳港", "保加利亚港口"]
                    },
                    "serbia": {
                        name: "塞尔维亚",
                        intro: "塞尔维亚是巴尔干内陆国家。",
                        airports: {
                            international: [
                                { code: "BEG", name: "贝尔格莱德机场", city: "贝尔格莱德" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "JU", name: "塞尔维亚航空", nameEn: "Air Serbia" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "贝尔格莱德", cities: ["贝尔格莱德"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "多瑙河内河运输，通过希腊比雷埃夫斯港。" }
                        ],
                        keywords: ["塞尔维亚"]
                    },
                    "bosnia": {
                        name: "波黑",
                        intro: "波斯尼亚和黑塞哥维那，巴尔干国家。",
                        airports: {
                            international: [
                                { code: "SJJ", name: "萨拉热窝机场", city: "萨拉热窝" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "萨拉热窝", cities: ["萨拉热窝"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "通过克罗地亚普洛切港。" }
                        ],
                        keywords: ["波黑"]
                    },
                    "montenegro": {
                        name: "黑山",
                        intro: "黑山是亚得里亚海沿岸小国。",
                        airports: {
                            international: [
                                { code: "TGD", name: "波德戈里察机场", city: "波德戈里察" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "MEBAR", name: "巴尔港", city: "巴尔", desc: "黑山主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "波德戈里察", cities: ["波德戈里察"] }
                        ],
                        customsPolicies: [
                            { title: "黑山海关", content: "非欧盟国家，进口需单独清关。" }
                        ],
                        keywords: ["巴尔港", "黑山港口"]
                    },
                    "albania": {
                        name: "阿尔巴尼亚",
                        intro: "阿尔巴尼亚是亚得里亚海沿岸国家。",
                        airports: {
                            international: [
                                { code: "TIA", name: "地拉那机场", city: "地拉那" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "ALDUR", name: "都拉斯港", city: "都拉斯", desc: "阿尔巴尼亚最大港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "地拉那", cities: ["地拉那"] }
                        ],
                        customsPolicies: [
                            { title: "阿尔巴尼亚海关", content: "非欧盟国家，进口需单独清关。" }
                        ],
                        keywords: ["都拉斯港", "阿尔巴尼亚港口"]
                    },
                    "north-macedonia": {
                        name: "北马其顿",
                        intro: "北马其顿是巴尔干内陆国家。",
                        airports: {
                            international: [
                                { code: "SKP", name: "斯科普里机场", city: "斯科普里" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "斯科普里", cities: ["斯科普里"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "通过希腊塞萨洛尼基港。" }
                        ],
                        keywords: ["北马其顿"]
                    },
                    "malta": {
                        name: "马耳他",
                        intro: "马耳他是地中海岛国，重要转运港。",
                        airports: {
                            international: [
                                { code: "MLA", name: "马耳他机场", city: "瓦莱塔" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "MTMAR", name: "马尔萨什洛克港", city: "马尔萨什洛克", desc: "地中海转运港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "KM", name: "马耳他航空", nameEn: "Air Malta" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "瓦莱塔", cities: ["瓦莱塔"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["马耳他港口"]
                    },
                    "andorra": {
                        name: "安道尔",
                        intro: "安道尔是比利牛斯山脉微型国家。",
                        airports: {
                            international: [],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "安道尔城", cities: ["安道尔城"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "通过西班牙和法国港口。" }
                        ],
                        keywords: ["安道尔"]
                    },
                    "san-marino": {
                        name: "圣马力诺",
                        intro: "圣马力诺是意大利境内的微型国家。",
                        airports: {
                            international: [],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "圣马力诺", cities: ["圣马力诺"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "通过意大利港口。" }
                        ],
                        keywords: ["圣马力诺"]
                    },
                    "vatican": {
                        name: "梵蒂冈",
                        intro: "梵蒂冈是世界上最小的国家。",
                        airports: {
                            international: [],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "梵蒂冈", cities: ["梵蒂冈"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "通过意大利港口。" }
                        ],
                        keywords: ["梵蒂冈"]
                    },
                    // ===== 东欧国家 =====
                    "russia": {
                        name: "俄罗斯",
                        intro: "俄罗斯横跨欧亚大陆，是世界最大国家。",
                        airports: {
                            international: [
                                { code: "SVO", name: "莫斯科谢列梅捷沃机场", city: "莫斯科" },
                                { code: "DME", name: "莫斯科多莫杰多沃机场", city: "莫斯科" },
                                { code: "LED", name: "圣彼得堡普尔科沃机场", city: "圣彼得堡" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "RULED", name: "圣彼得堡港", city: "圣彼得堡", desc: "波罗的海最大港口" },
                                { code: "RUNVS", name: "新罗西斯克港", city: "新罗西斯克", desc: "黑海最大港口" },
                                { code: "RUVVO", name: "符拉迪沃斯托克港", city: "符拉迪沃斯托克", desc: "远东最大港口" },
                                { code: "RUVYP", name: "东方港", city: "纳霍德卡", desc: "远东集装箱港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "SU", name: "俄罗斯航空", nameEn: "Aeroflot" },
                            { code: "S7", name: "西伯利亚航空", nameEn: "S7 Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "莫斯科", cities: ["莫斯科"] },
                            { name: "圣彼得堡", cities: ["圣彼得堡"] },
                            { name: "滨海边疆区", cities: ["符拉迪沃斯托克"] }
                        ],
                        customsPolicies: [
                            { title: "俄罗斯海关", content: "受制裁影响，部分贸易受限。" }
                        ],
                        keywords: ["圣彼得堡港", "俄罗斯港口"]
                    },
                    "ukraine": {
                        name: "乌克兰",
                        intro: "乌克兰拥有黑海海岸线，是东欧大国。",
                        airports: {
                            international: [
                                { code: "KBP", name: "基辅鲍里斯波尔机场", city: "基辅" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "UAODS", name: "敖德萨港", city: "敖德萨", desc: "乌克兰最大港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "PS", name: "乌克兰国际航空", nameEn: "Ukraine International" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "基辅", cities: ["基辅"] },
                            { name: "敖德萨", cities: ["敖德萨"] }
                        ],
                        customsPolicies: [
                            { title: "乌克兰海关", content: "受冲突影响，贸易受限。" }
                        ],
                        keywords: ["敖德萨港", "乌克兰港口"]
                    },
                    "belarus": {
                        name: "白俄罗斯",
                        intro: "白俄罗斯是东欧内陆国家，中欧班列途经国。",
                        airports: {
                            international: [
                                { code: "MSQ", name: "明斯克机场", city: "明斯克" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "B2", name: "白俄罗斯航空", nameEn: "Belavia" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "明斯克", cities: ["明斯克"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "中欧班列重要途经国，通过立陶宛克莱佩达港。" }
                        ],
                        keywords: ["白俄罗斯"]
                    },
                    "lithuania": {
                        name: "立陶宛",
                        intro: "立陶宛是波罗的海国家，克莱佩达是重要港口。",
                        airports: {
                            international: [
                                { code: "VNO", name: "维尔纽斯机场", city: "维尔纽斯" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "LTKLA", name: "克莱佩达港", city: "克莱佩达", desc: "波罗的海重要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "维尔纽斯", cities: ["维尔纽斯"] },
                            { name: "克莱佩达", cities: ["克莱佩达"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["克莱佩达港", "立陶宛港口"]
                    },
                    "latvia": {
                        name: "拉脱维亚",
                        intro: "拉脱维亚是波罗的海国家。",
                        airports: {
                            international: [
                                { code: "RIX", name: "里加机场", city: "里加" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "LVRIX", name: "里加港", city: "里加", desc: "拉脱维亚最大港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "BT", name: "波罗的海航空", nameEn: "airBaltic" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "里加", cities: ["里加"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["里加港", "拉脱维亚港口"]
                    },
                    "estonia": {
                        name: "爱沙尼亚",
                        intro: "爱沙尼亚是波罗的海国家，数字化程度高。",
                        airports: {
                            international: [
                                { code: "TLL", name: "塔林机场", city: "塔林" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "EETLL", name: "塔林港", city: "塔林", desc: "爱沙尼亚最大港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "塔林", cities: ["塔林"] }
                        ],
                        customsPolicies: [
                            { title: "欧盟成员国", content: "作为欧盟成员国，适用欧盟关税政策。" }
                        ],
                        keywords: ["塔林港", "爱沙尼亚港口"]
                    },
                    "moldova": {
                        name: "摩尔多瓦",
                        intro: "摩尔多瓦是东欧内陆国家。",
                        airports: {
                            international: [
                                { code: "KIV", name: "基希讷乌机场", city: "基希讷乌" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [
                            { code: "9U", name: "摩尔多瓦航空", nameEn: "Air Moldova" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "基希讷乌", cities: ["基希讷乌"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "通过罗马尼亚康斯坦察港。" }
                        ],
                        keywords: ["摩尔多瓦"]
                    },
                    "kosovo": {
                        name: "科索沃",
                        intro: "科索沃是巴尔干内陆地区。",
                        airports: {
                            international: [
                                { code: "PRN", name: "普里什蒂纳机场", city: "普里什蒂纳" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "普里什蒂纳", cities: ["普里什蒂纳"] }
                        ],
                        customsPolicies: [
                            { title: "内陆运输", content: "通过希腊塞萨洛尼基港或阿尔巴尼亚都拉斯港。" }
                        ],
                        keywords: ["科索沃"]
                    },
                    // ===== 欧洲地区 =====
                    "faroe-islands": {
                        name: "法罗群岛",
                        intro: "法罗群岛是丹麦的海外自治领地。",
                        airports: {
                            international: [
                                { code: "FAE", name: "沃格尔机场", city: "托尔斯港" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "FOTOR", name: "托尔斯港", city: "托尔斯港", desc: "首府港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "RC", name: "大西洋航空", nameEn: "Atlantic Airways" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "托尔斯港", cities: ["托尔斯港"] }
                        ],
                        customsPolicies: [
                            { title: "非欧盟地区", content: "丹麦自治领，非欧盟关税区。" }
                        ],
                        keywords: ["托尔斯港", "法罗群岛港口"]
                    },
                    "gibraltar": {
                        name: "直布罗陀",
                        intro: "直布罗陀是英国海外领土，战略要地。",
                        airports: {
                            international: [
                                { code: "GIB", name: "直布罗陀机场", city: "直布罗陀" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "GIGIB", name: "直布罗陀港", city: "直布罗陀", desc: "地中海重要加油港" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "直布罗陀", cities: ["直布罗陀"] }
                        ],
                        customsPolicies: [
                            { title: "英国海外领土", content: "非欧盟关税区，有独立关税政策。" }
                        ],
                        keywords: ["直布罗陀港", "海峡"]
                    }
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
                    // ===== 北美国家 =====
                    "usa": {
                        name: "美国",
                        intro: "美国是全球最大进口国和消费市场，港口设施世界一流。",
                        airports: {
                            international: [
                                { code: "JFK", name: "纽约肯尼迪机场", city: "纽约" },
                                { code: "LAX", name: "洛杉矶机场", city: "洛杉矶" },
                                { code: "ORD", name: "芝加哥奥黑尔机场", city: "芝加哥" },
                                { code: "ATL", name: "亚特兰大机场", city: "亚特兰大" },
                                { code: "DFW", name: "达拉斯机场", city: "达拉斯" },
                                { code: "MIA", name: "迈阿密机场", city: "迈阿密" },
                                { code: "SFO", name: "旧金山机场", city: "旧金山" },
                                { code: "SEA", name: "西雅图机场", city: "西雅图" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "USLAX", name: "洛杉矶港", city: "洛杉矶", desc: "美国最大港口" },
                                { code: "USLGB", name: "长滩港", city: "长滩", desc: "美西第二大港" },
                                { code: "USNYC", name: "纽约/新泽西港", city: "纽约", desc: "东海岸最大港" },
                                { code: "USSAV", name: "萨凡纳港", city: "萨凡纳", desc: "增长最快港口" },
                                { code: "USHOU", name: "休斯顿港", city: "休斯顿", desc: "德州最大港" },
                                { code: "USSEA", name: "西雅图港", city: "西雅图", desc: "太平洋西北门户" },
                                { code: "USOAK", name: "奥克兰港", city: "奥克兰", desc: "北加州门户" },
                                { code: "USCHS", name: "查尔斯顿港", city: "查尔斯顿", desc: "南卡重要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "AA", name: "美国航空", nameEn: "American Airlines" },
                            { code: "UA", name: "美联航", nameEn: "United Airlines" },
                            { code: "DL", name: "达美航空", nameEn: "Delta Air Lines" },
                            { code: "WN", name: "西南航空", nameEn: "Southwest Airlines" }
                        ],
                        shippingLines: [
                            { code: "MATSON", name: "美森轮船", nameEn: "Matson", desc: "美国本土航运公司" }
                        ],
                        provinces: [
                            { name: "加利福尼亚", cities: ["洛杉矶", "旧金山", "长滩", "奥克兰"] },
                            { name: "纽约", cities: ["纽约"] },
                            { name: "德克萨斯", cities: ["休斯顿", "达拉斯"] },
                            { name: "佐治亚", cities: ["亚特兰大", "萨凡纳"] },
                            { name: "华盛顿", cities: ["西雅图"] },
                            { name: "佛罗里达", cities: ["迈阿密"] }
                        ],
                        customsPolicies: [
                            { title: "CBP清关", content: "美国海关和边境保护局(CBP)负责进口清关，需提前申报ISF。" },
                            { title: "关税政策", content: "根据HTS编码征收关税，部分商品有反倾销税。" }
                        ],
                        keywords: ["洛杉矶港", "纽约港", "美国港口"]
                    },
                    "canada": {
                        name: "加拿大",
                        intro: "加拿大是北美重要贸易国，与美国有紧密的贸易关系。",
                        airports: {
                            international: [
                                { code: "YYZ", name: "多伦多皮尔逊机场", city: "多伦多" },
                                { code: "YVR", name: "温哥华机场", city: "温哥华" },
                                { code: "YUL", name: "蒙特利尔机场", city: "蒙特利尔" },
                                { code: "YYC", name: "卡尔加里机场", city: "卡尔加里" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "CAVAN", name: "温哥华港", city: "温哥华", desc: "加拿大最大港口，太平洋门户" },
                                { code: "CAMTR", name: "蒙特利尔港", city: "蒙特利尔", desc: "圣劳伦斯河港口" },
                                { code: "CAHAL", name: "哈利法克斯港", city: "哈利法克斯", desc: "大西洋门户" },
                                { code: "CATOR", name: "多伦多港", city: "多伦多", desc: "五大湖港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "AC", name: "加拿大航空", nameEn: "Air Canada" },
                            { code: "WS", name: "西捷航空", nameEn: "WestJet" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "安大略", cities: ["多伦多", "渥太华"] },
                            { name: "不列颠哥伦比亚", cities: ["温哥华"] },
                            { name: "魁北克", cities: ["蒙特利尔", "魁北克城"] },
                            { name: "新斯科舍", cities: ["哈利法克斯"] }
                        ],
                        customsPolicies: [
                            { title: "CBSA清关", content: "加拿大边境服务局(CBSA)负责进口清关。" },
                            { title: "CUSMA协定", content: "美加墨协定下，部分商品享受优惠关税。" }
                        ],
                        keywords: ["温哥华港", "加拿大港口"]
                    },
                    // ===== 中美洲国家 =====
                    "mexico": {
                        name: "墨西哥",
                        intro: "墨西哥是拉美重要贸易国，与美国有紧密的供应链关系。",
                        airports: {
                            international: [
                                { code: "MEX", name: "墨西哥城机场", city: "墨西哥城" },
                                { code: "GDL", name: "瓜达拉哈拉机场", city: "瓜达拉哈拉" },
                                { code: "CUN", name: "坎昆机场", city: "坎昆" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "MXZLO", name: "曼萨尼约港", city: "曼萨尼约", desc: "太平洋最大港" },
                                { code: "MXLZC", name: "拉萨罗卡德纳斯港", city: "拉萨罗卡德纳斯", desc: "重要港口" },
                                { code: "MXVER", name: "韦拉克鲁斯港", city: "韦拉克鲁斯", desc: "墨西哥湾港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "AM", name: "墨西哥航空", nameEn: "Aeromexico" },
                            { code: "4O", name: "沃拉里斯", nameEn: "Volaris" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "墨西哥城", cities: ["墨西哥城"] },
                            { name: "哈利斯科", cities: ["瓜达拉哈拉"] },
                            { name: "新莱昂", cities: ["蒙特雷"] }
                        ],
                        customsPolicies: [
                            { title: "墨西哥海关", content: "SAT负责海关事务，需要墨西哥RFC税号。" },
                            { title: "2025年新规（生效日期：2025年1月1日）", content: "墨西哥海关要求收件人提供合法身份证明，以便纳税。必须提供收件人邮箱号。\n\n【企业】需提供进口商/收货人税号 RFC (Registro Federal de Contribuyentes)\n【个人】需提供税号 RFC 或 CURP (Clave Única de Registro de Población)\n【外国人】需提供外国税号或个人身份证号 (Foreign Tax ID or Personal ID)" }
                        ],
                        keywords: ["曼萨尼约港", "墨西哥港口"]
                    },
                    "guatemala": {
                        name: "危地马拉",
                        intro: "危地马拉是中美洲人口最多的国家。",
                        airports: {
                            international: [
                                { code: "GUA", name: "危地马拉城机场", city: "危地马拉城" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "GTPRQ", name: "圣托马斯港", city: "圣托马斯", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "GU", name: "危地马拉航空", nameEn: "Avianca Guatemala" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "危地马拉", cities: ["危地马拉城"] }
                        ],
                        customsPolicies: [
                            { title: "危地马拉海关", content: "SAT负责海关清关。" }
                        ],
                        keywords: ["危地马拉港口"]
                    },
                    "honduras": {
                        name: "洪都拉斯",
                        intro: "洪都拉斯是中美洲国家，制造业发展中。",
                        airports: {
                            international: [
                                { code: "SAP", name: "圣佩德罗苏拉机场", city: "圣佩德罗苏拉" },
                                { code: "TGU", name: "特古西加尔巴机场", city: "特古西加尔巴" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "HNPCR", name: "科尔特斯港", city: "科尔特斯", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "科尔特斯", cities: ["圣佩德罗苏拉"] },
                            { name: "弗朗西斯科", cities: ["特古西加尔巴"] }
                        ],
                        customsPolicies: [
                            { title: "洪都拉斯海关", content: "需要进口许可证。" }
                        ],
                        keywords: ["洪都拉斯港口"]
                    },
                    "el-salvador": {
                        name: "萨尔瓦多",
                        intro: "萨尔瓦多是中美洲最小国家。",
                        airports: {
                            international: [
                                { code: "SAL", name: "圣萨尔瓦多机场", city: "圣萨尔瓦多" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "SVAQJ", name: "阿卡胡特拉港", city: "阿卡胡特拉", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "TA", name: "中美洲航空", nameEn: "Avianca El Salvador" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "圣萨尔瓦多", cities: ["圣萨尔瓦多"] }
                        ],
                        customsPolicies: [
                            { title: "萨尔瓦多海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["萨尔瓦多港口"]
                    },
                    "nicaragua": {
                        name: "尼加拉瓜",
                        intro: "尼加拉瓜是中美洲国家。",
                        airports: {
                            international: [
                                { code: "MGA", name: "马那瓜机场", city: "马那瓜" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "NICRN", name: "科林托港", city: "科林托", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "马那瓜", cities: ["马那瓜"] }
                        ],
                        customsPolicies: [
                            { title: "尼加拉瓜海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["尼加拉瓜港口"]
                    },
                    "costa-rica": {
                        name: "哥斯达黎加",
                        intro: "哥斯达黎加是中美洲较发达国家，生态旅游著名。",
                        airports: {
                            international: [
                                { code: "SJO", name: "圣何塞机场", city: "圣何塞" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "CRLIO", name: "利蒙港", city: "利蒙", desc: "加勒比海港口" },
                                { code: "CRCAL", name: "卡尔德拉港", city: "卡尔德拉", desc: "太平洋港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "圣何塞", cities: ["圣何塞"] }
                        ],
                        customsPolicies: [
                            { title: "哥斯达黎加海关", content: "进口需申报，与多国有自贸协定。" }
                        ],
                        keywords: ["哥斯达黎加港口"]
                    },
                    "panama": {
                        name: "巴拿马",
                        intro: "巴拿马运河连接太平洋和大西洋，是全球航运要道。",
                        airports: {
                            international: [
                                { code: "PTY", name: "巴拿马城机场", city: "巴拿马城" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "PACLC", name: "科隆港", city: "科隆", desc: "大西洋侧最大港口" },
                                { code: "PABLB", name: "巴尔博亚港", city: "巴拿马城", desc: "太平洋侧港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "CM", name: "巴拿马航空", nameEn: "Copa Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "巴拿马", cities: ["巴拿马城"] },
                            { name: "科隆", cities: ["科隆"] }
                        ],
                        customsPolicies: [
                            { title: "巴拿马运河", content: "全球航运枢纽，科隆自贸区享受优惠政策。" }
                        ],
                        keywords: ["巴拿马运河", "科隆港"]
                    },
                    "belize": {
                        name: "伯利兹",
                        intro: "伯利兹是中美洲唯一英语国家。",
                        airports: {
                            international: [
                                { code: "BZE", name: "伯利兹城机场", city: "伯利兹城" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "BZBZE", name: "伯利兹城港", city: "伯利兹城", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "伯利兹", cities: ["伯利兹城"] }
                        ],
                        customsPolicies: [
                            { title: "伯利兹海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["伯利兹港口"]
                    },
                    // ===== 加勒比国家 =====
                    "cuba": {
                        name: "古巴",
                        intro: "古巴是加勒比最大岛国，受美国制裁影响。",
                        airports: {
                            international: [
                                { code: "HAV", name: "哈瓦那机场", city: "哈瓦那" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "CUHAV", name: "哈瓦那港", city: "哈瓦那", desc: "古巴最大港口" },
                                { code: "CUMAR", name: "马里埃尔港", city: "马里埃尔", desc: "新建深水港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "CU", name: "古巴航空", nameEn: "Cubana" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "哈瓦那", cities: ["哈瓦那"] }
                        ],
                        customsPolicies: [
                            { title: "制裁影响", content: "受美国制裁，与美国贸易受限。" }
                        ],
                        keywords: ["哈瓦那港", "古巴港口"]
                    },
                    "dominican": {
                        name: "多米尼加",
                        intro: "多米尼加是加勒比重要经济体。",
                        airports: {
                            international: [
                                { code: "SDQ", name: "圣多明各机场", city: "圣多明各" },
                                { code: "PUJ", name: "蓬塔卡纳机场", city: "蓬塔卡纳" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "DOCAU", name: "考塞多港", city: "考塞多", desc: "多米尼加最大港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "国家区", cities: ["圣多明各"] }
                        ],
                        customsPolicies: [
                            { title: "多米尼加海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["多米尼加港口"]
                    },
                    "jamaica": {
                        name: "牙买加",
                        intro: "牙买加是加勒比重要转运港。",
                        airports: {
                            international: [
                                { code: "KIN", name: "金斯敦机场", city: "金斯敦" },
                                { code: "MBJ", name: "蒙特哥贝机场", city: "蒙特哥贝" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "JMKIN", name: "金斯敦港", city: "金斯敦", desc: "加勒比重要转运港" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "萨里", cities: ["金斯敦"] }
                        ],
                        customsPolicies: [
                            { title: "牙买加海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["金斯敦港", "牙买加港口"]
                    },
                    "haiti": {
                        name: "海地",
                        intro: "海地是加勒比国家。",
                        airports: {
                            international: [
                                { code: "PAP", name: "太子港机场", city: "太子港" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "HTPAP", name: "太子港", city: "太子港", desc: "海地主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "西部省", cities: ["太子港"] }
                        ],
                        customsPolicies: [
                            { title: "海地海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["海地港口"]
                    },
                    "bahamas": {
                        name: "巴哈马",
                        intro: "巴哈马是加勒比岛国，旅游业发达。",
                        airports: {
                            international: [
                                { code: "NAS", name: "拿骚机场", city: "拿骚" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "BSFPO", name: "弗里波特港", city: "弗里波特", desc: "转运港" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "UP", name: "巴哈马航空", nameEn: "Bahamasair" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "新普罗维登斯", cities: ["拿骚"] }
                        ],
                        customsPolicies: [
                            { title: "巴哈马海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["巴哈马港口"]
                    },
                    "trinidad": {
                        name: "特立尼达和多巴哥",
                        intro: "特立尼达和多巴哥是加勒比能源大国。",
                        airports: {
                            international: [
                                { code: "POS", name: "西班牙港机场", city: "西班牙港" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "TTPOS", name: "西班牙港", city: "西班牙港", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "BW", name: "加勒比航空", nameEn: "Caribbean Airlines" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "西班牙港", cities: ["西班牙港"] }
                        ],
                        customsPolicies: [
                            { title: "特多海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["特立尼达港口"]
                    },
                    "barbados": {
                        name: "巴巴多斯",
                        intro: "巴巴多斯是加勒比岛国。",
                        airports: {
                            international: [
                                { code: "BGI", name: "布里奇敦机场", city: "布里奇敦" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "BBBGI", name: "布里奇敦港", city: "布里奇敦", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "布里奇敦", cities: ["布里奇敦"] }
                        ],
                        customsPolicies: [
                            { title: "巴巴多斯海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["巴巴多斯港口"]
                    },
                    "saint-lucia": {
                        name: "圣卢西亚",
                        intro: "圣卢西亚是加勒比岛国。",
                        airports: {
                            international: [
                                { code: "UVF", name: "圣卢西亚机场", city: "卡斯特里" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "LCSFG", name: "卡斯特里港", city: "卡斯特里", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "卡斯特里", cities: ["卡斯特里"] }
                        ],
                        customsPolicies: [
                            { title: "圣卢西亚海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["圣卢西亚港口"]
                    },
                    "grenada": {
                        name: "格林纳达",
                        intro: "格林纳达是加勒比岛国，香料之岛。",
                        airports: {
                            international: [
                                { code: "GND", name: "格林纳达机场", city: "圣乔治" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "GDSTG", name: "圣乔治港", city: "圣乔治", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "圣乔治", cities: ["圣乔治"] }
                        ],
                        customsPolicies: [
                            { title: "格林纳达海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["格林纳达港口"]
                    },
                    "antigua": {
                        name: "安提瓜和巴布达",
                        intro: "安提瓜和巴布达是加勒比岛国。",
                        airports: {
                            international: [
                                { code: "ANU", name: "安提瓜机场", city: "圣约翰斯" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "AGSTJ", name: "圣约翰斯港", city: "圣约翰斯", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "圣约翰", cities: ["圣约翰斯"] }
                        ],
                        customsPolicies: [
                            { title: "安提瓜海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["安提瓜港口"]
                    },
                    "saint-vincent": {
                        name: "圣文森特和格林纳丁斯",
                        intro: "圣文森特是加勒比岛国。",
                        airports: {
                            international: [
                                { code: "SVD", name: "圣文森特机场", city: "金斯敦" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "VCKIN", name: "金斯敦港", city: "金斯敦", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "圣乔治", cities: ["金斯敦"] }
                        ],
                        customsPolicies: [
                            { title: "圣文森特海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["圣文森特港口"]
                    },
                    "dominica": {
                        name: "多米尼克",
                        intro: "多米尼克是加勒比岛国，自然之岛。",
                        airports: {
                            international: [
                                { code: "DOM", name: "多米尼克机场", city: "罗索" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "DMRSU", name: "罗索港", city: "罗索", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "圣乔治", cities: ["罗索"] }
                        ],
                        customsPolicies: [
                            { title: "多米尼克海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["多米尼克港口"]
                    },
                    "saint-kitts": {
                        name: "圣基茨和尼维斯",
                        intro: "圣基茨是加勒比岛国。",
                        airports: {
                            international: [
                                { code: "SKB", name: "圣基茨机场", city: "巴斯特尔" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "KNBAS", name: "巴斯特尔港", city: "巴斯特尔", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "巴斯特尔", cities: ["巴斯特尔"] }
                        ],
                        customsPolicies: [
                            { title: "圣基茨海关", content: "进口需申报缴税。" }
                        ],
                        keywords: ["圣基茨港口"]
                    },
                    // ===== 北美洲地区 =====
                    "puerto-rico": {
                        name: "波多黎各",
                        intro: "波多黎各是美国自治邦。",
                        airports: {
                            international: [
                                { code: "SJU", name: "圣胡安机场", city: "圣胡安" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "PRSJU", name: "圣胡安港", city: "圣胡安", desc: "加勒比重要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "圣胡安", cities: ["圣胡安"] }
                        ],
                        customsPolicies: [
                            { title: "美国关税", content: "作为美国领土，适用美国关税政策。" }
                        ],
                        keywords: ["圣胡安港", "波多黎各港口"]
                    },
                    "aruba": {
                        name: "阿鲁巴",
                        intro: "阿鲁巴是荷兰王国组成国。",
                        airports: {
                            international: [
                                { code: "AUA", name: "阿鲁巴机场", city: "奥拉涅斯塔德" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "AWORA", name: "奥拉涅斯塔德港", city: "奥拉涅斯塔德", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "奥拉涅斯塔德", cities: ["奥拉涅斯塔德"] }
                        ],
                        customsPolicies: [
                            { title: "阿鲁巴海关", content: "荷兰王国领土，有独立关税政策。" }
                        ],
                        keywords: ["阿鲁巴港口"]
                    },
                    "curacao": {
                        name: "库拉索",
                        intro: "库拉索是荷兰王国组成国，加勒比转运中心。",
                        airports: {
                            international: [
                                { code: "CUR", name: "库拉索机场", city: "威廉斯塔德" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "CWWIL", name: "威廉斯塔德港", city: "威廉斯塔德", desc: "加勒比重要转运港" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "威廉斯塔德", cities: ["威廉斯塔德"] }
                        ],
                        customsPolicies: [
                            { title: "库拉索海关", content: "荷兰王国领土，有独立关税政策。" }
                        ],
                        keywords: ["库拉索港口"]
                    },
                    "greenland": {
                        name: "格陵兰",
                        intro: "格陵兰是丹麦自治领土，世界最大岛屿。",
                        airports: {
                            international: [
                                { code: "GOH", name: "努克机场", city: "努克" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "GLGOH", name: "努克港", city: "努克", desc: "格陵兰首府港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "GL", name: "格陵兰航空", nameEn: "Air Greenland" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "努克", cities: ["努克"] }
                        ],
                        customsPolicies: [
                            { title: "丹麦领土", content: "非欧盟关税区，有独立关税政策。" }
                        ],
                        keywords: ["努克港", "格陵兰港口"]
                    },
                    "bermuda": {
                        name: "百慕大",
                        intro: "百慕大是英国海外领土，金融中心。",
                        airports: {
                            international: [
                                { code: "BDA", name: "百慕大机场", city: "汉密尔顿" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "BMHAM", name: "汉密尔顿港", city: "汉密尔顿", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "汉密尔顿", cities: ["汉密尔顿"] }
                        ],
                        customsPolicies: [
                            { title: "英国领土", content: "英国海外领土，有独立关税政策。" }
                        ],
                        keywords: ["汉密尔顿港", "百慕大港口"]
                    },
                    "cayman-islands": {
                        name: "开曼群岛",
                        intro: "开曼群岛是英国海外领土，知名离岸金融中心。",
                        airports: {
                            international: [
                                { code: "GCM", name: "乔治敦机场", city: "乔治敦" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "KYGEC", name: "乔治敦港", city: "乔治敦", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [
                            { code: "KX", name: "开曼航空", nameEn: "Cayman Airways" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "乔治敦", cities: ["乔治敦"] }
                        ],
                        customsPolicies: [
                            { title: "开曼海关", content: "英国海外领土，免税港口。" }
                        ],
                        keywords: ["开曼群岛港口"]
                    },
                    "us-virgin-islands": {
                        name: "美属维尔京群岛",
                        intro: "美属维尔京群岛是美国非建制属地。",
                        airports: {
                            international: [
                                { code: "STT", name: "圣托马斯机场", city: "夏洛特阿马利亚" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "VISTT", name: "夏洛特阿马利亚港", city: "夏洛特阿马利亚", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "圣托马斯", cities: ["夏洛特阿马利亚"] }
                        ],
                        customsPolicies: [
                            { title: "美国领土", content: "美国领土，适用特殊关税政策。" }
                        ],
                        keywords: ["美属维尔京群岛港口"]
                    },
                    "british-virgin-islands": {
                        name: "英属维尔京群岛",
                        intro: "英属维尔京群岛是英国海外领土。",
                        airports: {
                            international: [
                                { code: "EIS", name: "托托拉机场", city: "罗德城" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "VGRTC", name: "罗德城港", city: "罗德城", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "托托拉", cities: ["罗德城"] }
                        ],
                        customsPolicies: [
                            { title: "英国领土", content: "英国海外领土，有独立关税政策。" }
                        ],
                        keywords: ["英属维尔京群岛港口"]
                    },
                    "turks-caicos": {
                        name: "特克斯和凯科斯群岛",
                        intro: "特克斯和凯科斯群岛是英国海外领土。",
                        airports: {
                            international: [
                                { code: "PLS", name: "普罗维登西亚莱斯机场", city: "普罗维登西亚莱斯" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "TCPLS", name: "普罗维登西亚莱斯港", city: "普罗维登西亚莱斯", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "普罗维登西亚莱斯", cities: ["普罗维登西亚莱斯"] }
                        ],
                        customsPolicies: [
                            { title: "英国领土", content: "英国海外领土。" }
                        ],
                        keywords: ["特克斯和凯科斯港口"]
                    },
                    "anguilla": {
                        name: "安圭拉",
                        intro: "安圭拉是英国海外领土。",
                        airports: {
                            international: [
                                { code: "AXA", name: "安圭拉机场", city: "瓦利" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "AIBLW", name: "布洛因港", city: "布洛因", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "瓦利", cities: ["瓦利"] }
                        ],
                        customsPolicies: [
                            { title: "英国领土", content: "英国海外领土。" }
                        ],
                        keywords: ["安圭拉港口"]
                    },
                    "montserrat": {
                        name: "蒙特塞拉特",
                        intro: "蒙特塞拉特是英国海外领土。",
                        airports: {
                            international: [
                                { code: "MNI", name: "蒙特塞拉特机场", city: "布莱兹" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "MSLBY", name: "小海湾港", city: "小海湾", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "布莱兹", cities: ["布莱兹"] }
                        ],
                        customsPolicies: [
                            { title: "英国领土", content: "英国海外领土。" }
                        ],
                        keywords: ["蒙特塞拉特港口"]
                    },
                    "guadeloupe": {
                        name: "瓜德罗普",
                        intro: "瓜德罗普是法国海外省。",
                        airports: {
                            international: [
                                { code: "PTP", name: "瓜德罗普机场", city: "皮特尔角" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "GPPTP", name: "皮特尔角港", city: "皮特尔角", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "皮特尔角", cities: ["皮特尔角"] }
                        ],
                        customsPolicies: [
                            { title: "法国领土", content: "法国海外省，适用欧盟关税政策。" }
                        ],
                        keywords: ["瓜德罗普港口"]
                    },
                    "martinique": {
                        name: "马提尼克",
                        intro: "马提尼克是法国海外省。",
                        airports: {
                            international: [
                                { code: "FDF", name: "马提尼克机场", city: "法兰西堡" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "MQFDF", name: "法兰西堡港", city: "法兰西堡", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "法兰西堡", cities: ["法兰西堡"] }
                        ],
                        customsPolicies: [
                            { title: "法国领土", content: "法国海外省，适用欧盟关税政策。" }
                        ],
                        keywords: ["马提尼克港口"]
                    },
                    "sint-maarten": {
                        name: "荷属圣马丁",
                        intro: "荷属圣马丁是荷兰王国组成国。",
                        airports: {
                            international: [
                                { code: "SXM", name: "朱丽安娜公主机场", city: "菲利普斯堡" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "SXPHI", name: "菲利普斯堡港", city: "菲利普斯堡", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "菲利普斯堡", cities: ["菲利普斯堡"] }
                        ],
                        customsPolicies: [
                            { title: "荷兰领土", content: "荷兰王国领土。" }
                        ],
                        keywords: ["荷属圣马丁港口"]
                    },
                    "saint-martin": {
                        name: "法属圣马丁",
                        intro: "法属圣马丁是法国海外领地。",
                        airports: {
                            international: [],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "MFMRG", name: "马里戈港", city: "马里戈", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "马里戈", cities: ["马里戈"] }
                        ],
                        customsPolicies: [
                            { title: "法国领土", content: "法国海外领地。" }
                        ],
                        keywords: ["法属圣马丁港口"]
                    },
                    "saint-barthelemy": {
                        name: "圣巴泰勒米岛",
                        intro: "圣巴泰勒米岛是法国海外领地。",
                        airports: {
                            international: [
                                { code: "SBH", name: "圣巴泰勒米机场", city: "古斯塔维亚" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "BLGUS", name: "古斯塔维亚港", city: "古斯塔维亚", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "古斯塔维亚", cities: ["古斯塔维亚"] }
                        ],
                        customsPolicies: [
                            { title: "法国领土", content: "法国海外领地。" }
                        ],
                        keywords: ["圣巴泰勒米港口"]
                    },
                    "saint-pierre": {
                        name: "圣皮埃尔和密克隆",
                        intro: "圣皮埃尔和密克隆是法国海外领地。",
                        airports: {
                            international: [
                                { code: "FSP", name: "圣皮埃尔机场", city: "圣皮埃尔" }
                            ],
                            domestic: []
                        },
                        ports: {
                            international: [
                                { code: "PMFSP", name: "圣皮埃尔港", city: "圣皮埃尔", desc: "主要港口" }
                            ],
                            domestic: []
                        },
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "圣皮埃尔", cities: ["圣皮埃尔"] }
                        ],
                        customsPolicies: [
                            { title: "法国领土", content: "法国海外领地。" }
                        ],
                        keywords: ["圣皮埃尔港口"]
                    }
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
                    "brazil": {
                        name: "巴西",
                        airports: [
                            { name: "圣保罗-瓜鲁柳斯国际机场", code: "GRU", city: "圣保罗" },
                            { name: "里约热内卢-加利昂国际机场", code: "GIG", city: "里约热内卢" },
                            { name: "巴西利亚国际机场", code: "BSB", city: "巴西利亚" },
                            { name: "坎皮纳斯-维拉科波斯国际机场", code: "VCP", city: "坎皮纳斯" },
                            { name: "累西腓国际机场", code: "REC", city: "累西腓" }
                        ],
                        ports: [
                            { name: "桑托斯港", city: "桑托斯", type: "南美最大港口" },
                            { name: "巴拉那瓜港", city: "巴拉那瓜", type: "农产品出口港" },
                            { name: "里约热内卢港", city: "里约热内卢", type: "重要港口" },
                            { name: "伊塔瓜伊港", city: "伊塔瓜伊", type: "深水港" },
                            { name: "苏阿普港", city: "苏阿普", type: "东北部港口" }
                        ],
                        airlines: [
                            { name: "拉塔姆巴西航空", code: "JJ", type: "巴西最大航空" },
                            { name: "高尔航空", code: "G3", type: "低成本航空" },
                            { name: "阿祖尔巴西航空", code: "AD", type: "国内航空" }
                        ],
                        shippingLines: [
                            { name: "Log-In Logística", type: "巴西航运公司" },
                            { name: "Aliança Navegação", type: "南美沿海航运" }
                        ],
                        provinces: [
                            { name: "圣保罗州", capital: "圣保罗", cities: ["圣保罗", "坎皮纳斯", "桑托斯", "瓜鲁柳斯"] },
                            { name: "里约热内卢州", capital: "里约热内卢", cities: ["里约热内卢", "尼泰罗伊"] },
                            { name: "米纳斯吉拉斯州", capital: "贝洛奥里藏特", cities: ["贝洛奥里藏特", "乌贝兰迪亚"] },
                            { name: "南里奥格兰德州", capital: "阿雷格里港", cities: ["阿雷格里港"] },
                            { name: "巴拉那州", capital: "库里蒂巴", cities: ["库里蒂巴", "巴拉那瓜"] }
                        ],
                        customsPolicies: [
                            { title: "巴西走货要求", content: "【企业】需提供收件方公司名 + 公司税号 CNPJ (格式: XX.XXX.XXX/XXXX-XX)\n【个人】需提供收件人名 + 个人税号 CPF (格式: XXX.XXX.XXX-XX)\n\n【进口关税标准】60% of the CIF + VAT\n\n⚠️ 巴西税金一般与申报价值持平，甚至高于申报价值，请确认巴西客人是否有进口经验，以及是否愿意支付税金。" },
                            { title: "其他税费", content: "工业产品税(IPI): 根据产品类别征收0-300%不等\n增值税(ICMS): 各州税率不同，通常7-18%\n进口许可: 大部分商品需要进口许可证(LI)" }
                        ]
                    },
                    "argentina": {
                        name: "阿根廷",
                        airports: [
                            { name: "埃塞萨国际机场", code: "EZE", city: "布宜诺斯艾利斯" },
                            { name: "豪尔赫·纽贝里机场", code: "AEP", city: "布宜诺斯艾利斯" },
                            { name: "科尔多瓦国际机场", code: "COR", city: "科尔多瓦" },
                            { name: "门多萨国际机场", code: "MDZ", city: "门多萨" }
                        ],
                        ports: [
                            { name: "布宜诺斯艾利斯港", city: "布宜诺斯艾利斯", type: "阿根廷最大港口" },
                            { name: "罗萨里奥港", city: "罗萨里奥", type: "巴拉那河港口" },
                            { name: "巴伊亚布兰卡港", city: "巴伊亚布兰卡", type: "深水港" }
                        ],
                        airlines: [
                            { name: "阿根廷航空", code: "AR", type: "国家航空公司" },
                            { name: "Flybondi", code: "FO", type: "低成本航空" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "布宜诺斯艾利斯省", capital: "拉普拉塔", cities: ["布宜诺斯艾利斯", "拉普拉塔", "马德普拉塔"] },
                            { name: "科尔多瓦省", capital: "科尔多瓦", cities: ["科尔多瓦"] },
                            { name: "圣菲省", capital: "圣菲", cities: ["罗萨里奥", "圣菲"] },
                            { name: "门多萨省", capital: "门多萨", cities: ["门多萨"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "阿根廷进口关税根据商品类别不同，平均约13%" },
                            { title: "增值税(IVA)", content: "标准税率21%，部分商品10.5%" },
                            { title: "进口限制", content: "实施进口许可制度，部分商品需要预先批准" }
                        ]
                    },
                    "chile": {
                        name: "智利",
                        airports: [
                            { name: "阿图罗·梅里诺·贝尼特斯国际机场", code: "SCL", city: "圣地亚哥" },
                            { name: "迭戈·阿拉塞纳国际机场", code: "IQQ", city: "伊基克" },
                            { name: "埃尔洛阿机场", code: "ANF", city: "安托法加斯塔" }
                        ],
                        ports: [
                            { name: "瓦尔帕莱索港", city: "瓦尔帕莱索", type: "智利最大港口" },
                            { name: "圣安东尼奥港", city: "圣安东尼奥", type: "集装箱港" },
                            { name: "塔尔卡瓦诺港", city: "塔尔卡瓦诺", type: "工业港口" },
                            { name: "伊基克港", city: "伊基克", type: "自由贸易区港口" }
                        ],
                        airlines: [
                            { name: "拉塔姆智利航空", code: "LA", type: "南美最大航空" },
                            { name: "智利天空航空", code: "H2", type: "低成本航空" },
                            { name: "JetSMART", code: "JA", type: "低成本航空" }
                        ],
                        shippingLines: [
                            { name: "CSAV", type: "智利航运公司(现属赫伯罗特)" }
                        ],
                        provinces: [
                            { name: "圣地亚哥大区", capital: "圣地亚哥", cities: ["圣地亚哥"] },
                            { name: "瓦尔帕莱索大区", capital: "瓦尔帕莱索", cities: ["瓦尔帕莱索", "维尼亚德尔马"] },
                            { name: "比奥比奥大区", capital: "康塞普西翁", cities: ["康塞普西翁", "塔尔卡瓦诺"] },
                            { name: "安托法加斯塔大区", capital: "安托法加斯塔", cities: ["安托法加斯塔"] }
                        ],
                        customsPolicies: [
                            { title: "统一关税", content: "智利实行统一6%进口关税（自由贸易协定国家可享优惠）" },
                            { title: "增值税(IVA)", content: "标准税率19%" },
                            { title: "自由贸易区", content: "伊基克和蓬塔阿雷纳斯设有自由贸易区" },
                            { title: "FTA优惠", content: "与中国、美国、欧盟等签有自贸协定" }
                        ]
                    },
                    "colombia": {
                        name: "哥伦比亚",
                        airports: [
                            { name: "埃尔多拉多国际机场", code: "BOG", city: "波哥大" },
                            { name: "何塞·玛丽亚·科尔多瓦国际机场", code: "MDE", city: "麦德林" },
                            { name: "阿方索·博尼利亚·阿拉贡国际机场", code: "CLO", city: "卡利" },
                            { name: "拉斐尔·努涅斯国际机场", code: "CTG", city: "卡塔赫纳" }
                        ],
                        ports: [
                            { name: "卡塔赫纳港", city: "卡塔赫纳", type: "加勒比海最大港口" },
                            { name: "布埃纳文图拉港", city: "布埃纳文图拉", type: "太平洋港口" },
                            { name: "巴兰基亚港", city: "巴兰基亚", type: "加勒比海港口" },
                            { name: "圣玛尔塔港", city: "圣玛尔塔", type: "煤炭出口港" }
                        ],
                        airlines: [
                            { name: "哥伦比亚航空", code: "AV", type: "国家航空公司" },
                            { name: "拉塔姆哥伦比亚航空", code: "4C", type: "区域航空" },
                            { name: "Viva Air Colombia", code: "FC", type: "低成本航空" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "波哥大首都区", capital: "波哥大", cities: ["波哥大"] },
                            { name: "安蒂奥基亚省", capital: "麦德林", cities: ["麦德林"] },
                            { name: "山谷省", capital: "卡利", cities: ["卡利", "布埃纳文图拉"] },
                            { name: "大西洋省", capital: "巴兰基亚", cities: ["巴兰基亚"] },
                            { name: "玻利瓦尔省", capital: "卡塔赫纳", cities: ["卡塔赫纳"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "哥伦比亚关税根据商品类别不同，0-20%不等" },
                            { title: "增值税(IVA)", content: "标准税率19%" },
                            { title: "自由贸易区", content: "设有多个自由贸易区，享受税收优惠" }
                        ]
                    },
                    "peru": {
                        name: "秘鲁",
                        airports: [
                            { name: "豪尔赫·查韦斯国际机场", code: "LIM", city: "利马" },
                            { name: "亚历杭德罗·贝拉斯科·阿斯特特国际机场", code: "CUZ", city: "库斯科" },
                            { name: "罗德里格斯·巴隆机场", code: "AQP", city: "阿雷基帕" }
                        ],
                        ports: [
                            { name: "卡亚俄港", city: "卡亚俄", type: "秘鲁最大港口" },
                            { name: "派塔港", city: "派塔", type: "北部港口" },
                            { name: "马塔拉尼港", city: "马塔拉尼", type: "南部港口" }
                        ],
                        airlines: [
                            { name: "拉塔姆秘鲁航空", code: "LP", type: "主要航空公司" },
                            { name: "秘鲁星空航空", code: "2I", type: "国内航空" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "利马省", capital: "利马", cities: ["利马", "卡亚俄"] },
                            { name: "阿雷基帕省", capital: "阿雷基帕", cities: ["阿雷基帕"] },
                            { name: "库斯科省", capital: "库斯科", cities: ["库斯科"] },
                            { name: "拉利伯塔德省", capital: "特鲁希略", cities: ["特鲁希略"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "秘鲁关税分为0%、6%和11%三档" },
                            { title: "增值税(IGV)", content: "标准税率18%" },
                            { title: "FTA优惠", content: "与中国、美国签有自贸协定" }
                        ]
                    },
                    "venezuela": {
                        name: "委内瑞拉",
                        airports: [
                            { name: "西蒙·玻利瓦尔国际机场", code: "CCS", city: "加拉加斯" },
                            { name: "拉钦塔国际机场", code: "MAR", city: "马拉开波" },
                            { name: "圣地亚哥·马里尼奥国际机场", code: "PMV", city: "玛格丽塔岛" }
                        ],
                        ports: [
                            { name: "拉瓜伊拉港", city: "拉瓜伊拉", type: "委内瑞拉主要港口" },
                            { name: "马拉开波港", city: "马拉开波", type: "石油出口港" },
                            { name: "卡贝略港", city: "卡贝略港", type: "工业港口" }
                        ],
                        airlines: [
                            { name: "委内瑞拉联合航空", code: "V0", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "首都区", capital: "加拉加斯", cities: ["加拉加斯"] },
                            { name: "苏利亚州", capital: "马拉开波", cities: ["马拉开波"] },
                            { name: "卡拉沃沃州", capital: "巴伦西亚", cities: ["巴伦西亚"] }
                        ],
                        customsPolicies: [
                            { title: "进口管制", content: "委内瑞拉实施严格的外汇和进口管制" },
                            { title: "关税", content: "关税率较高，部分商品禁止进口" }
                        ]
                    },
                    "ecuador": {
                        name: "厄瓜多尔",
                        airports: [
                            { name: "马里斯卡尔·苏克雷国际机场", code: "UIO", city: "基多" },
                            { name: "何塞·华金·德·奥尔梅多国际机场", code: "GYE", city: "瓜亚基尔" }
                        ],
                        ports: [
                            { name: "瓜亚基尔港", city: "瓜亚基尔", type: "厄瓜多尔最大港口" },
                            { name: "埃斯梅拉达斯港", city: "埃斯梅拉达斯", type: "石油出口港" },
                            { name: "曼塔港", city: "曼塔", type: "渔业港口" }
                        ],
                        airlines: [
                            { name: "厄瓜多尔TAME航空", code: "EQ", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "皮钦查省", capital: "基多", cities: ["基多"] },
                            { name: "瓜亚斯省", capital: "瓜亚基尔", cities: ["瓜亚基尔"] },
                            { name: "阿苏艾省", capital: "昆卡", cities: ["昆卡"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "厄瓜多尔关税根据商品类别，0-25%不等" },
                            { title: "增值税(IVA)", content: "标准税率12%" }
                        ]
                    },
                    "bolivia": {
                        name: "玻利维亚",
                        airports: [
                            { name: "维鲁维鲁国际机场", code: "VVI", city: "圣克鲁斯" },
                            { name: "埃尔阿尔托国际机场", code: "LPB", city: "拉巴斯" }
                        ],
                        ports: [],
                        airlines: [
                            { name: "玻利维亚航空", code: "OB", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "拉巴斯省", capital: "拉巴斯", cities: ["拉巴斯", "埃尔阿尔托"] },
                            { name: "圣克鲁斯省", capital: "圣克鲁斯", cities: ["圣克鲁斯"] },
                            { name: "科恰班巴省", capital: "科恰班巴", cities: ["科恰班巴"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "玻利维亚是内陆国，货物通过智利阿里卡港和秘鲁伊洛港转运" },
                            { title: "进口关税", content: "关税率根据商品类别不同" }
                        ]
                    },
                    "uruguay": {
                        name: "乌拉圭",
                        airports: [
                            { name: "卡拉斯科国际机场", code: "MVD", city: "蒙得维的亚" }
                        ],
                        ports: [
                            { name: "蒙得维的亚港", city: "蒙得维的亚", type: "乌拉圭最大港口" },
                            { name: "科洛尼亚港", city: "科洛尼亚", type: "渡轮港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "蒙得维的亚省", capital: "蒙得维的亚", cities: ["蒙得维的亚"] },
                            { name: "卡内洛内斯省", capital: "卡内洛内斯", cities: ["卡内洛内斯"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "乌拉圭实施南方共同市场统一关税" },
                            { title: "增值税(IVA)", content: "标准税率22%" }
                        ]
                    },
                    "paraguay": {
                        name: "巴拉圭",
                        airports: [
                            { name: "西尔维奥·佩蒂罗西国际机场", code: "ASU", city: "亚松森" }
                        ],
                        ports: [],
                        airlines: [
                            { name: "巴拉圭航空", code: "I2", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "首都区", capital: "亚松森", cities: ["亚松森"] },
                            { name: "中央省", capital: "阿雷瓜", cities: ["阿雷瓜", "费尔南多·德拉莫拉"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "巴拉圭是内陆国，货物通过巴拉那河和阿根廷港口转运" },
                            { title: "进口关税", content: "实施南方共同市场统一关税" }
                        ]
                    },
                    "guyana": {
                        name: "圭亚那",
                        airports: [
                            { name: "切迪·贾根国际机场", code: "GEO", city: "乔治敦" }
                        ],
                        ports: [
                            { name: "乔治敦港", city: "乔治敦", type: "圭亚那主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "德梅拉拉-马海卡区", capital: "乔治敦", cities: ["乔治敦"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "圭亚那作为加共体成员实施共同对外关税" }
                        ]
                    },
                    "suriname": {
                        name: "苏里南",
                        airports: [
                            { name: "约翰·阿道夫·彭格尔国际机场", code: "PBM", city: "帕拉马里博" }
                        ],
                        ports: [
                            { name: "帕拉马里博港", city: "帕拉马里博", type: "苏里南主要港口" }
                        ],
                        airlines: [
                            { name: "苏里南航空", code: "PY", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "帕拉马里博区", capital: "帕拉马里博", cities: ["帕拉马里博"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "苏里南作为加共体成员实施共同对外关税" }
                        ]
                    },
                    "french-guiana": {
                        name: "法属圭亚那",
                        airports: [
                            { name: "卡宴-费利克斯·埃布埃机场", code: "CAY", city: "卡宴" }
                        ],
                        ports: [
                            { name: "卡宴港", city: "卡宴", type: "法属圭亚那主要港口" },
                            { name: "库鲁港", city: "库鲁", type: "欧洲航天发射中心" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "法属圭亚那", capital: "卡宴", cities: ["卡宴", "库鲁"] }
                        ],
                        customsPolicies: [
                            { title: "法国海外省", content: "法属圭亚那是法国海外省，适用欧盟关税规定" }
                        ]
                    },
                    "falkland-islands": {
                        name: "马尔维纳斯群岛",
                        airports: [
                            { name: "芒特普莱森特机场", code: "MPN", city: "芒特普莱森特" }
                        ],
                        ports: [
                            { name: "斯坦利港", city: "斯坦利", type: "群岛首府港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "马尔维纳斯群岛", capital: "斯坦利", cities: ["斯坦利"] }
                        ],
                        customsPolicies: [
                            { title: "英国海外领土", content: "马尔维纳斯群岛由英国管辖，适用英国海外领土关税规定" }
                        ]
                    }
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
                    "egypt": {
                        name: "埃及",
                        airports: [
                            { name: "开罗国际机场", code: "CAI", city: "开罗" },
                            { name: "亚历山大博格艾尔阿拉伯机场", code: "HBE", city: "亚历山大" },
                            { name: "沙姆沙伊赫国际机场", code: "SSH", city: "沙姆沙伊赫" },
                            { name: "卢克索国际机场", code: "LXR", city: "卢克索" }
                        ],
                        ports: [
                            { name: "塞得港", city: "塞得", type: "苏伊士运河北端，全球重要转运港" },
                            { name: "亚历山大港", city: "亚历山大", type: "埃及最大港口" },
                            { name: "达米埃塔港", city: "达米埃塔", type: "尼罗河三角洲港口" },
                            { name: "苏伊士港", city: "苏伊士", type: "苏伊士运河南端" }
                        ],
                        airlines: [
                            { name: "埃及航空", code: "MS", type: "国家航空公司" },
                            { name: "尼罗河航空", code: "NP", type: "低成本航空" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "开罗省", capital: "开罗", cities: ["开罗", "吉萨"] },
                            { name: "亚历山大省", capital: "亚历山大", cities: ["亚历山大"] },
                            { name: "塞得港省", capital: "塞得港", cities: ["塞得港"] }
                        ],
                        customsPolicies: [
                            { title: "苏伊士运河", content: "苏伊士运河是连接地中海和红海的国际航运要道" },
                            { title: "进口关税", content: "埃及关税根据商品类别不同，5-60%不等" },
                            { title: "增值税", content: "标准税率14%" }
                        ]
                    },
                    "morocco": {
                        name: "摩洛哥",
                        airports: [
                            { name: "穆罕默德五世国际机场", code: "CMN", city: "卡萨布兰卡" },
                            { name: "马拉喀什梅纳拉机场", code: "RAK", city: "马拉喀什" },
                            { name: "丹吉尔伊本·白图泰机场", code: "TNG", city: "丹吉尔" }
                        ],
                        ports: [
                            { name: "丹吉尔地中海港", city: "丹吉尔", type: "非洲最大港口，重要转运中心" },
                            { name: "卡萨布兰卡港", city: "卡萨布兰卡", type: "传统大港" },
                            { name: "阿加迪尔港", city: "阿加迪尔", type: "渔业港口" }
                        ],
                        airlines: [
                            { name: "摩洛哥皇家航空", code: "AT", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "大卡萨布兰卡大区", capital: "卡萨布兰卡", cities: ["卡萨布兰卡"] },
                            { name: "拉巴特-萨累大区", capital: "拉巴特", cities: ["拉巴特", "萨累"] },
                            { name: "丹吉尔-得土安大区", capital: "丹吉尔", cities: ["丹吉尔"] }
                        ],
                        customsPolicies: [
                            { title: "自由贸易区", content: "丹吉尔设有自由贸易区，享受税收优惠" },
                            { title: "进口关税", content: "关税率根据商品类别和原产地不同" }
                        ]
                    },
                    "algeria": {
                        name: "阿尔及利亚",
                        airports: [
                            { name: "阿尔及尔胡阿里·布迈丁机场", code: "ALG", city: "阿尔及尔" },
                            { name: "奥兰艾哈迈德·本·贝拉机场", code: "ORN", city: "奥兰" }
                        ],
                        ports: [
                            { name: "阿尔及尔港", city: "阿尔及尔", type: "阿尔及利亚最大港口" },
                            { name: "奥兰港", city: "奥兰", type: "第二大港口" }
                        ],
                        airlines: [
                            { name: "阿尔及利亚航空", code: "AH", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "阿尔及尔省", capital: "阿尔及尔", cities: ["阿尔及尔"] },
                            { name: "奥兰省", capital: "奥兰", cities: ["奥兰"] }
                        ],
                        customsPolicies: [
                            { title: "进口管制", content: "阿尔及利亚实施进口许可制度" },
                            { title: "关税", content: "关税率根据商品类别不同" }
                        ]
                    },
                    "tunisia": {
                        name: "突尼斯",
                        airports: [
                            { name: "突尼斯-迦太基国际机场", code: "TUN", city: "突尼斯" },
                            { name: "莫纳斯提尔哈比卜·布尔吉巴机场", code: "MIR", city: "莫纳斯提尔" }
                        ],
                        ports: [
                            { name: "拉迪斯港", city: "拉迪斯", type: "突尼斯最大集装箱港" },
                            { name: "突尼斯港", city: "突尼斯", type: "传统港口" }
                        ],
                        airlines: [
                            { name: "突尼斯航空", code: "TU", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "突尼斯省", capital: "突尼斯", cities: ["突尼斯"] },
                            { name: "斯法克斯省", capital: "斯法克斯", cities: ["斯法克斯"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "突尼斯关税根据商品类别不同" }
                        ]
                    },
                    "libya": {
                        name: "利比亚",
                        airports: [
                            { name: "的黎波里国际机场", code: "TIP", city: "的黎波里" },
                            { name: "班加西贝尼纳机场", code: "BEN", city: "班加西" }
                        ],
                        ports: [
                            { name: "的黎波里港", city: "的黎波里", type: "利比亚主要港口" },
                            { name: "班加西港", city: "班加西", type: "东部港口" }
                        ],
                        airlines: [
                            { name: "利比亚航空", code: "LN", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "的黎波里省", capital: "的黎波里", cities: ["的黎波里"] },
                            { name: "班加西省", capital: "班加西", cities: ["班加西"] }
                        ],
                        customsPolicies: [
                            { title: "贸易状况", content: "利比亚因局势不稳定，贸易受限" }
                        ]
                    },
                    "nigeria": {
                        name: "尼日利亚",
                        airports: [
                            { name: "穆尔塔拉·穆罕默德国际机场", code: "LOS", city: "拉各斯" },
                            { name: "纳姆迪·阿齐基韦国际机场", code: "ABV", city: "阿布贾" },
                            { name: "哈科特港国际机场", code: "PHC", city: "哈科特港" }
                        ],
                        ports: [
                            { name: "阿帕帕港", city: "拉各斯", type: "拉各斯主要港口" },
                            { name: "廷坎港", city: "拉各斯", type: "拉各斯第二大港" },
                            { name: "哈科特港", city: "哈科特港", type: "石油出口港" }
                        ],
                        airlines: [
                            { name: "阿里克航空", code: "W3", type: "私营航空" },
                            { name: "和平航空", code: "P4", type: "私营航空" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "拉各斯州", capital: "伊凯贾", cities: ["拉各斯", "伊凯贾"] },
                            { name: "联邦首都区", capital: "阿布贾", cities: ["阿布贾"] },
                            { name: "河流州", capital: "哈科特港", cities: ["哈科特港"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "尼日利亚关税根据商品类别不同，5-35%不等" },
                            { title: "进口限制", content: "部分商品禁止进口，需进口许可证" }
                        ]
                    },
                    "south-africa": {
                        name: "南非",
                        airports: [
                            { name: "奥利弗·坦博国际机场", code: "JNB", city: "约翰内斯堡" },
                            { name: "开普敦国际机场", code: "CPT", city: "开普敦" },
                            { name: "沙卡国王国际机场", code: "DUR", city: "德班" }
                        ],
                        ports: [
                            { name: "德班港", city: "德班", type: "非洲最繁忙的集装箱港" },
                            { name: "开普敦港", city: "开普敦", type: "好望角重要港口" },
                            { name: "伊丽莎白港", city: "伊丽莎白港", type: "汽车出口港" },
                            { name: "理查兹湾港", city: "理查兹湾", type: "煤炭出口港" }
                        ],
                        airlines: [
                            { name: "南非航空", code: "SA", type: "国家航空公司" },
                            { name: "芒果航空", code: "JE", type: "低成本航空" },
                            { name: "FlySafair", code: "FA", type: "低成本航空" }
                        ],
                        shippingLines: [
                            { name: "Safmarine", type: "南非航运(现属马士基)" }
                        ],
                        provinces: [
                            { name: "豪登省", capital: "约翰内斯堡", cities: ["约翰内斯堡", "比勒陀利亚"] },
                            { name: "西开普省", capital: "开普敦", cities: ["开普敦"] },
                            { name: "夸祖鲁-纳塔尔省", capital: "彼得马里茨堡", cities: ["德班", "彼得马里茨堡"] },
                            { name: "东开普省", capital: "比绍", cities: ["伊丽莎白港"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "南非作为南部非洲关税同盟成员，实施共同关税" },
                            { title: "增值税(VAT)", content: "标准税率15%" },
                            { title: "自由贸易区", content: "设有多个工业开发区和经济特区" }
                        ]
                    },
                    "kenya": {
                        name: "肯尼亚",
                        airports: [
                            { name: "乔莫·肯雅塔国际机场", code: "NBO", city: "内罗毕" },
                            { name: "莫伊国际机场", code: "MBA", city: "蒙巴萨" }
                        ],
                        ports: [
                            { name: "蒙巴萨港", city: "蒙巴萨", type: "东非最大港口" }
                        ],
                        airlines: [
                            { name: "肯尼亚航空", code: "KQ", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "内罗毕市", capital: "内罗毕", cities: ["内罗毕"] },
                            { name: "蒙巴萨县", capital: "蒙巴萨", cities: ["蒙巴萨"] }
                        ],
                        customsPolicies: [
                            { title: "东非共同体", content: "肯尼亚是东非共同体成员，实施共同对外关税" },
                            { title: "增值税(VAT)", content: "标准税率16%" }
                        ]
                    },
                    "tanzania": {
                        name: "坦桑尼亚",
                        airports: [
                            { name: "朱利叶斯·尼雷尔国际机场", code: "DAR", city: "达累斯萨拉姆" },
                            { name: "乞力马扎罗国际机场", code: "JRO", city: "乞力马扎罗" }
                        ],
                        ports: [
                            { name: "达累斯萨拉姆港", city: "达累斯萨拉姆", type: "坦桑尼亚最大港口" },
                            { name: "桑给巴尔港", city: "桑给巴尔", type: "岛屿港口" }
                        ],
                        airlines: [
                            { name: "坦桑尼亚航空", code: "TC", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "达累斯萨拉姆区", capital: "达累斯萨拉姆", cities: ["达累斯萨拉姆"] },
                            { name: "桑给巴尔", capital: "桑给巴尔市", cities: ["桑给巴尔市"] }
                        ],
                        customsPolicies: [
                            { title: "东非共同体", content: "坦桑尼亚是东非共同体成员" }
                        ]
                    },
                    "ethiopia": {
                        name: "埃塞俄比亚",
                        airports: [
                            { name: "博莱国际机场", code: "ADD", city: "亚的斯亚贝巴" }
                        ],
                        ports: [],
                        airlines: [
                            { name: "埃塞俄比亚航空", code: "ET", type: "非洲最大航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "亚的斯亚贝巴", capital: "亚的斯亚贝巴", cities: ["亚的斯亚贝巴"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "埃塞俄比亚是内陆国，主要通过吉布提港进出口" }
                        ]
                    },
                    "ghana": {
                        name: "加纳",
                        airports: [
                            { name: "科托卡国际机场", code: "ACC", city: "阿克拉" }
                        ],
                        ports: [
                            { name: "特马港", city: "特马", type: "加纳最大港口" },
                            { name: "塔科拉迪港", city: "塔科拉迪", type: "第二大港口" }
                        ],
                        airlines: [
                            { name: "非洲环球航空", code: "G7", type: "加纳航空" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "大阿克拉地区", capital: "阿克拉", cities: ["阿克拉", "特马"] }
                        ],
                        customsPolicies: [
                            { title: "西非经济共同体", content: "加纳是西非经共体成员" }
                        ]
                    },
                    "senegal": {
                        name: "塞内加尔",
                        airports: [
                            { name: "布莱斯·迪亚涅国际机场", code: "DSS", city: "达喀尔" }
                        ],
                        ports: [
                            { name: "达喀尔港", city: "达喀尔", type: "西非重要港口" }
                        ],
                        airlines: [
                            { name: "塞内加尔航空", code: "HC", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "达喀尔大区", capital: "达喀尔", cities: ["达喀尔"] }
                        ],
                        customsPolicies: [
                            { title: "西非经济共同体", content: "塞内加尔是西非经共体成员" }
                        ]
                    },
                    "ivory-coast": {
                        name: "科特迪瓦",
                        airports: [
                            { name: "费利克斯·乌弗埃-博瓦尼国际机场", code: "ABJ", city: "阿比让" }
                        ],
                        ports: [
                            { name: "阿比让港", city: "阿比让", type: "西非最大港口之一" },
                            { name: "圣佩德罗港", city: "圣佩德罗", type: "可可出口港" }
                        ],
                        airlines: [
                            { name: "科特迪瓦航空", code: "HF", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "阿比让区", capital: "阿比让", cities: ["阿比让"] }
                        ],
                        customsPolicies: [
                            { title: "西非经济共同体", content: "科特迪瓦是西非经共体成员" }
                        ]
                    },
                    "cameroon": {
                        name: "喀麦隆",
                        airports: [
                            { name: "杜阿拉国际机场", code: "DLA", city: "杜阿拉" },
                            { name: "雅温得恩西马伦国际机场", code: "NSI", city: "雅温得" }
                        ],
                        ports: [
                            { name: "杜阿拉港", city: "杜阿拉", type: "喀麦隆最大港口" }
                        ],
                        airlines: [
                            { name: "喀麦隆航空", code: "QC", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "滨海省", capital: "杜阿拉", cities: ["杜阿拉"] },
                            { name: "中央省", capital: "雅温得", cities: ["雅温得"] }
                        ],
                        customsPolicies: [
                            { title: "中非经济共同体", content: "喀麦隆是中非经共体成员" }
                        ]
                    },
                    "angola": {
                        name: "安哥拉",
                        airports: [
                            { name: "二月四日国际机场", code: "LAD", city: "罗安达" }
                        ],
                        ports: [
                            { name: "罗安达港", city: "罗安达", type: "安哥拉最大港口" },
                            { name: "洛比托港", city: "洛比托", type: "大西洋港口" }
                        ],
                        airlines: [
                            { name: "安哥拉航空", code: "DT", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "罗安达省", capital: "罗安达", cities: ["罗安达"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "安哥拉关税根据商品类别不同" }
                        ]
                    },
                    "mozambique": {
                        name: "莫桑比克",
                        airports: [
                            { name: "马普托国际机场", code: "MPM", city: "马普托" }
                        ],
                        ports: [
                            { name: "马普托港", city: "马普托", type: "莫桑比克最大港口" },
                            { name: "贝拉港", city: "贝拉", type: "中部港口" },
                            { name: "纳卡拉港", city: "纳卡拉", type: "北部深水港" }
                        ],
                        airlines: [
                            { name: "莫桑比克航空", code: "TM", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "马普托省", capital: "马普托", cities: ["马普托"] }
                        ],
                        customsPolicies: [
                            { title: "南部非洲发展共同体", content: "莫桑比克是SADC成员" }
                        ]
                    },
                    "djibouti": {
                        name: "吉布提",
                        airports: [
                            { name: "吉布提-安布利国际机场", code: "JIB", city: "吉布提市" }
                        ],
                        ports: [
                            { name: "吉布提港", city: "吉布提市", type: "东非重要港口" },
                            { name: "多拉莱港", city: "多拉莱", type: "新建多功能港" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "吉布提市", capital: "吉布提市", cities: ["吉布提市"] }
                        ],
                        customsPolicies: [
                            { title: "自由贸易区", content: "吉布提设有自由贸易区" },
                            { title: "战略位置", content: "吉布提是埃塞俄比亚主要出海口" }
                        ]
                    },
                    "mauritius": {
                        name: "毛里求斯",
                        airports: [
                            { name: "西沃萨古尔·拉姆古兰爵士国际机场", code: "MRU", city: "路易港" }
                        ],
                        ports: [
                            { name: "路易港", city: "路易港", type: "毛里求斯主要港口" }
                        ],
                        airlines: [
                            { name: "毛里求斯航空", code: "MK", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "路易港区", capital: "路易港", cities: ["路易港"] }
                        ],
                        customsPolicies: [
                            { title: "自由港", content: "毛里求斯路易港是重要的自由港" }
                        ]
                    },
                    "madagascar": {
                        name: "马达加斯加",
                        airports: [
                            { name: "伊瓦图国际机场", code: "TNR", city: "塔那那利佛" }
                        ],
                        ports: [
                            { name: "塔马塔夫港", city: "塔马塔夫", type: "马达加斯加最大港口" }
                        ],
                        airlines: [
                            { name: "马达加斯加航空", code: "MD", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "塔那那利佛省", capital: "塔那那利佛", cities: ["塔那那利佛"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "马达加斯加关税根据商品类别不同" }
                        ]
                    },
                    "namibia": {
                        name: "纳米比亚",
                        airports: [
                            { name: "霍齐亚·库塔科国际机场", code: "WDH", city: "温得和克" }
                        ],
                        ports: [
                            { name: "沃尔维斯港", city: "沃尔维斯湾", type: "纳米比亚最大港口" }
                        ],
                        airlines: [
                            { name: "纳米比亚航空", code: "SW", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "霍马斯区", capital: "温得和克", cities: ["温得和克"] }
                        ],
                        customsPolicies: [
                            { title: "南部非洲关税同盟", content: "纳米比亚是SACU成员" }
                        ]
                    },
                    "uganda": {
                        name: "乌干达",
                        airports: [
                            { name: "恩德培国际机场", code: "EBB", city: "恩德培" }
                        ],
                        ports: [],
                        airlines: [
                            { name: "乌干达航空", code: "UR", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "中央区", capital: "坎帕拉", cities: ["坎帕拉", "恩德培"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "乌干达通过肯尼亚蒙巴萨港进出口" }
                        ]
                    },
                    "rwanda": {
                        name: "卢旺达",
                        airports: [
                            { name: "基加利国际机场", code: "KGL", city: "基加利" }
                        ],
                        ports: [],
                        airlines: [
                            { name: "卢旺达航空", code: "WB", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "基加利市", capital: "基加利", cities: ["基加利"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "卢旺达通过坦桑尼亚达累斯萨拉姆港进出口" }
                        ]
                    },
                    "sudan": {
                        name: "苏丹",
                        airports: [
                            { name: "喀土穆国际机场", code: "KRT", city: "喀土穆" }
                        ],
                        ports: [
                            { name: "苏丹港", city: "苏丹港", type: "红海主要港口" }
                        ],
                        airlines: [
                            { name: "苏丹航空", code: "SD", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "喀土穆州", capital: "喀土穆", cities: ["喀土穆", "恩图曼"] }
                        ],
                        customsPolicies: [
                            { title: "制裁影响", content: "苏丹曾受国际制裁影响" }
                        ]
                    },
                    "zimbabwe": {
                        name: "津巴布韦",
                        airports: [
                            { name: "哈拉雷国际机场", code: "HRE", city: "哈拉雷" }
                        ],
                        ports: [],
                        airlines: [
                            { name: "津巴布韦航空", code: "UM", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "哈拉雷省", capital: "哈拉雷", cities: ["哈拉雷"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "津巴布韦通过南非和莫桑比克港口进出口" }
                        ]
                    },
                    "zambia": {
                        name: "赞比亚",
                        airports: [
                            { name: "肯尼思·卡翁达国际机场", code: "LUN", city: "卢萨卡" }
                        ],
                        ports: [],
                        airlines: [
                            { name: "赞比亚航空", code: "ZA", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "卢萨卡省", capital: "卢萨卡", cities: ["卢萨卡"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "赞比亚通过南非德班港和坦桑尼亚达累斯萨拉姆港进出口" }
                        ]
                    },
                    "botswana": {
                        name: "博茨瓦纳",
                        airports: [
                            { name: "塞雷茨·卡马国际机场", code: "GBE", city: "哈博罗内" }
                        ],
                        ports: [],
                        airlines: [
                            { name: "博茨瓦纳航空", code: "BP", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "南区", capital: "哈博罗内", cities: ["哈博罗内"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "博茨瓦纳通过南非港口进出口" },
                            { title: "南部非洲关税同盟", content: "博茨瓦纳是SACU成员" }
                        ]
                    },
                    "congo-drc": {
                        name: "刚果（金）",
                        airports: [
                            { name: "恩吉利国际机场", code: "FIH", city: "金沙萨" }
                        ],
                        ports: [
                            { name: "马塔迪港", city: "马塔迪", type: "刚果河港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "金沙萨", capital: "金沙萨", cities: ["金沙萨"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "刚果金关税根据商品类别不同" }
                        ]
                    },
                    "congo": {
                        name: "刚果（布）",
                        airports: [
                            { name: "玛雅-玛雅机场", code: "BZV", city: "布拉柴维尔" }
                        ],
                        ports: [
                            { name: "黑角港", city: "黑角", type: "刚果最大港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "布拉柴维尔", capital: "布拉柴维尔", cities: ["布拉柴维尔"] }
                        ],
                        customsPolicies: [
                            { title: "中非经济共同体", content: "刚果布是中非经共体成员" }
                        ]
                    },
                    "gabon": {
                        name: "加蓬",
                        airports: [
                            { name: "利伯维尔莱昂·姆巴机场", code: "LBV", city: "利伯维尔" }
                        ],
                        ports: [
                            { name: "利伯维尔港", city: "利伯维尔", type: "加蓬主要港口" },
                            { name: "让蒂尔港", city: "让蒂尔港", type: "石油出口港" }
                        ],
                        airlines: [
                            { name: "加蓬航空", code: "GY", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "河口省", capital: "利伯维尔", cities: ["利伯维尔"] }
                        ],
                        customsPolicies: [
                            { title: "中非经济共同体", content: "加蓬是中非经共体成员" }
                        ]
                    },
                    "togo": {
                        name: "多哥",
                        airports: [
                            { name: "洛美-托科因机场", code: "LFW", city: "洛美" }
                        ],
                        ports: [
                            { name: "洛美港", city: "洛美", type: "多哥主要港口，区域转运中心" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "滨海区", capital: "洛美", cities: ["洛美"] }
                        ],
                        customsPolicies: [
                            { title: "西非经济共同体", content: "多哥是西非经共体成员" }
                        ]
                    },
                    "benin": {
                        name: "贝宁",
                        airports: [
                            { name: "科托努卡杰洪机场", code: "COO", city: "科托努" }
                        ],
                        ports: [
                            { name: "科托努港", city: "科托努", type: "贝宁主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "滨海省", capital: "科托努", cities: ["科托努"] }
                        ],
                        customsPolicies: [
                            { title: "西非经济共同体", content: "贝宁是西非经共体成员" }
                        ]
                    },
                    "mauritania": {
                        name: "毛里塔尼亚",
                        airports: [
                            { name: "努瓦克肖特-乌姆图西国际机场", code: "NKC", city: "努瓦克肖特" }
                        ],
                        ports: [
                            { name: "努瓦克肖特港", city: "努瓦克肖特", type: "首都港口" },
                            { name: "努瓦迪布港", city: "努瓦迪布", type: "矿产出口港" }
                        ],
                        airlines: [
                            { name: "毛里塔尼亚航空", code: "L6", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "努瓦克肖特", capital: "努瓦克肖特", cities: ["努瓦克肖特"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "毛里塔尼亚关税根据商品类别不同" }
                        ]
                    },
                    "mali": {
                        name: "马里",
                        airports: [
                            { name: "巴马科-塞努国际机场", code: "BKO", city: "巴马科" }
                        ],
                        ports: [],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "巴马科区", capital: "巴马科", cities: ["巴马科"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "马里通过塞内加尔达喀尔港和科特迪瓦阿比让港进出口" }
                        ]
                    },
                    "niger": {
                        name: "尼日尔",
                        airports: [
                            { name: "迪奥里·哈马尼国际机场", code: "NIM", city: "尼亚美" }
                        ],
                        ports: [],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "尼亚美", capital: "尼亚美", cities: ["尼亚美"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "尼日尔通过贝宁科托努港和多哥洛美港进出口" }
                        ]
                    },
                    "burkina-faso": {
                        name: "布基纳法索",
                        airports: [
                            { name: "瓦加杜古机场", code: "OUA", city: "瓦加杜古" }
                        ],
                        ports: [],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "卡迪奥戈省", capital: "瓦加杜古", cities: ["瓦加杜古"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "布基纳法索通过科特迪瓦阿比让港和加纳特马港进出口" }
                        ]
                    },
                    "guinea": {
                        name: "几内亚",
                        airports: [
                            { name: "科纳克里国际机场", code: "CKY", city: "科纳克里" }
                        ],
                        ports: [
                            { name: "科纳克里港", city: "科纳克里", type: "几内亚主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "科纳克里", capital: "科纳克里", cities: ["科纳克里"] }
                        ],
                        customsPolicies: [
                            { title: "西非经济共同体", content: "几内亚是西非经共体成员" }
                        ]
                    },
                    "guinea-bissau": {
                        name: "几内亚比绍",
                        airports: [
                            { name: "奥斯瓦尔多·维埃拉国际机场", code: "OXB", city: "比绍" }
                        ],
                        ports: [
                            { name: "比绍港", city: "比绍", type: "首都港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "比绍", capital: "比绍", cities: ["比绍"] }
                        ],
                        customsPolicies: [
                            { title: "西非经济共同体", content: "几内亚比绍是西非经共体成员" }
                        ]
                    },
                    "sierra-leone": {
                        name: "塞拉利昂",
                        airports: [
                            { name: "弗里敦隆吉国际机场", code: "FNA", city: "弗里敦" }
                        ],
                        ports: [
                            { name: "弗里敦港", city: "弗里敦", type: "塞拉利昂主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "西部区", capital: "弗里敦", cities: ["弗里敦"] }
                        ],
                        customsPolicies: [
                            { title: "西非经济共同体", content: "塞拉利昂是西非经共体成员" }
                        ]
                    },
                    "liberia": {
                        name: "利比里亚",
                        airports: [
                            { name: "罗伯茨国际机场", code: "ROB", city: "蒙罗维亚" }
                        ],
                        ports: [
                            { name: "蒙罗维亚港", city: "蒙罗维亚", type: "利比里亚主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "蒙特塞拉多县", capital: "蒙罗维亚", cities: ["蒙罗维亚"] }
                        ],
                        customsPolicies: [
                            { title: "船旗国", content: "利比里亚是重要的船旗国" }
                        ]
                    },
                    "gambia": {
                        name: "冈比亚",
                        airports: [
                            { name: "班珠尔国际机场", code: "BJL", city: "班珠尔" }
                        ],
                        ports: [
                            { name: "班珠尔港", city: "班珠尔", type: "冈比亚主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "班珠尔", capital: "班珠尔", cities: ["班珠尔"] }
                        ],
                        customsPolicies: [
                            { title: "西非经济共同体", content: "冈比亚是西非经共体成员" }
                        ]
                    },
                    "cape-verde": {
                        name: "佛得角",
                        airports: [
                            { name: "阿米尔卡·卡布拉尔国际机场", code: "SID", city: "萨尔岛" },
                            { name: "纳尔逊·曼德拉国际机场", code: "RAI", city: "普拉亚" }
                        ],
                        ports: [
                            { name: "明德罗港", city: "明德罗", type: "佛得角主要港口" }
                        ],
                        airlines: [
                            { name: "佛得角航空", code: "VR", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "普拉亚", capital: "普拉亚", cities: ["普拉亚"] }
                        ],
                        customsPolicies: [
                            { title: "岛国", content: "佛得角是大西洋岛国" }
                        ]
                    },
                    "somalia": {
                        name: "索马里",
                        airports: [
                            { name: "亚丁·阿德国际机场", code: "MGQ", city: "摩加迪沙" }
                        ],
                        ports: [
                            { name: "摩加迪沙港", city: "摩加迪沙", type: "索马里首都港口" },
                            { name: "柏培拉港", city: "柏培拉", type: "索马里兰港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "班纳迪尔州", capital: "摩加迪沙", cities: ["摩加迪沙"] }
                        ],
                        customsPolicies: [
                            { title: "贸易状况", content: "索马里因局势不稳定，贸易受限" }
                        ]
                    },
                    "eritrea": {
                        name: "厄立特里亚",
                        airports: [
                            { name: "阿斯马拉国际机场", code: "ASM", city: "阿斯马拉" }
                        ],
                        ports: [
                            { name: "马萨瓦港", city: "马萨瓦", type: "厄立特里亚主要港口" },
                            { name: "阿萨布港", city: "阿萨布", type: "红海港口" }
                        ],
                        airlines: [
                            { name: "厄立特里亚航空", code: "B8", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "中央区", capital: "阿斯马拉", cities: ["阿斯马拉"] }
                        ],
                        customsPolicies: [
                            { title: "红海位置", content: "厄立特里亚位于红海沿岸战略位置" }
                        ]
                    },
                    "south-sudan": {
                        name: "南苏丹",
                        airports: [
                            { name: "朱巴国际机场", code: "JUB", city: "朱巴" }
                        ],
                        ports: [],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "中赤道州", capital: "朱巴", cities: ["朱巴"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "南苏丹通过肯尼亚蒙巴萨港和苏丹港进出口" }
                        ]
                    },
                    "burundi": {
                        name: "布隆迪",
                        airports: [
                            { name: "布琼布拉国际机场", code: "BJM", city: "布琼布拉" }
                        ],
                        ports: [],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "布琼布拉", capital: "布琼布拉", cities: ["布琼布拉"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "布隆迪通过坦桑尼亚达累斯萨拉姆港进出口" }
                        ]
                    },
                    "seychelles": {
                        name: "塞舌尔",
                        airports: [
                            { name: "塞舌尔国际机场", code: "SEZ", city: "维多利亚" }
                        ],
                        ports: [
                            { name: "维多利亚港", city: "维多利亚", type: "塞舌尔主要港口" }
                        ],
                        airlines: [
                            { name: "塞舌尔航空", code: "HM", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "马埃岛", capital: "维多利亚", cities: ["维多利亚"] }
                        ],
                        customsPolicies: [
                            { title: "岛国", content: "塞舌尔是印度洋岛国" }
                        ]
                    },
                    "comoros": {
                        name: "科摩罗",
                        airports: [
                            { name: "赛义德·易卜拉欣王子国际机场", code: "HAH", city: "莫罗尼" }
                        ],
                        ports: [
                            { name: "莫罗尼港", city: "莫罗尼", type: "科摩罗主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "大科摩罗岛", capital: "莫罗尼", cities: ["莫罗尼"] }
                        ],
                        customsPolicies: [
                            { title: "岛国", content: "科摩罗是印度洋岛国" }
                        ]
                    },
                    "malawi": {
                        name: "马拉维",
                        airports: [
                            { name: "利隆圭国际机场", code: "LLW", city: "利隆圭" }
                        ],
                        ports: [],
                        airlines: [
                            { name: "马拉维航空", code: "QM", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "中央区", capital: "利隆圭", cities: ["利隆圭"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "马拉维通过莫桑比克贝拉港进出口" }
                        ]
                    },
                    "lesotho": {
                        name: "莱索托",
                        airports: [
                            { name: "莫舒舒一世国际机场", code: "MSU", city: "马塞卢" }
                        ],
                        ports: [],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "马塞卢区", capital: "马塞卢", cities: ["马塞卢"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "莱索托是南非境内的内陆国，通过南非德班港进出口" },
                            { title: "南部非洲关税同盟", content: "莱索托是SACU成员" }
                        ]
                    },
                    "eswatini": {
                        name: "斯威士兰",
                        airports: [
                            { name: "恩斯瓦蒂三世国际机场", code: "SHO", city: "姆巴巴内" }
                        ],
                        ports: [],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "霍霍区", capital: "姆巴巴内", cities: ["姆巴巴内"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "斯威士兰通过南非德班港和莫桑比克马普托港进出口" },
                            { title: "南部非洲关税同盟", content: "斯威士兰是SACU成员" }
                        ]
                    },
                    "central-african": {
                        name: "中非共和国",
                        airports: [
                            { name: "班吉-姆波科国际机场", code: "BGF", city: "班吉" }
                        ],
                        ports: [],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "班吉", capital: "班吉", cities: ["班吉"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "中非共和国通过喀麦隆杜阿拉港进出口" }
                        ]
                    },
                    "chad": {
                        name: "乍得",
                        airports: [
                            { name: "恩贾梅纳国际机场", code: "NDJ", city: "恩贾梅纳" }
                        ],
                        ports: [],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "恩贾梅纳", capital: "恩贾梅纳", cities: ["恩贾梅纳"] }
                        ],
                        customsPolicies: [
                            { title: "内陆国家", content: "乍得通过喀麦隆杜阿拉港进出口" }
                        ]
                    },
                    "equatorial-guinea": {
                        name: "赤道几内亚",
                        airports: [
                            { name: "马拉博国际机场", code: "SSG", city: "马拉博" },
                            { name: "巴塔机场", code: "BSG", city: "巴塔" }
                        ],
                        ports: [
                            { name: "巴塔港", city: "巴塔", type: "赤道几内亚主要港口" },
                            { name: "马拉博港", city: "马拉博", type: "首都港口" }
                        ],
                        airlines: [
                            { name: "赤道航空", code: "CE", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "北比奥科省", capital: "马拉博", cities: ["马拉博"] }
                        ],
                        customsPolicies: [
                            { title: "石油出口国", content: "赤道几内亚是中非石油出口国" }
                        ]
                    },
                    "sao-tome": {
                        name: "圣多美和普林西比",
                        airports: [
                            { name: "圣多美国际机场", code: "TMS", city: "圣多美" }
                        ],
                        ports: [
                            { name: "圣多美港", city: "圣多美", type: "主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "圣多美岛", capital: "圣多美", cities: ["圣多美"] }
                        ],
                        customsPolicies: [
                            { title: "岛国", content: "圣多美和普林西比是几内亚湾岛国" }
                        ]
                    },
                    "azores": {
                        name: "亚速尔群岛",
                        airports: [
                            { name: "蓬塔德尔加达机场", code: "PDL", city: "蓬塔德尔加达" }
                        ],
                        ports: [
                            { name: "蓬塔德尔加达港", city: "蓬塔德尔加达", type: "亚速尔群岛最大港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "亚速尔群岛", capital: "蓬塔德尔加达", cities: ["蓬塔德尔加达"] }
                        ],
                        customsPolicies: [
                            { title: "葡萄牙自治区", content: "亚速尔群岛是葡萄牙的自治区" }
                        ]
                    },
                    "madeira": {
                        name: "马德拉群岛",
                        airports: [
                            { name: "马德拉克里斯蒂亚诺·罗纳尔多机场", code: "FNC", city: "丰沙尔" }
                        ],
                        ports: [
                            { name: "丰沙尔港", city: "丰沙尔", type: "马德拉群岛主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "马德拉群岛", capital: "丰沙尔", cities: ["丰沙尔"] }
                        ],
                        customsPolicies: [
                            { title: "葡萄牙自治区", content: "马德拉群岛是葡萄牙的自治区" }
                        ]
                    },
                    "canary-islands": {
                        name: "加那利群岛",
                        airports: [
                            { name: "大加那利机场", code: "LPA", city: "拉斯帕尔马斯" },
                            { name: "特内里费北部机场", code: "TFN", city: "圣克鲁斯" }
                        ],
                        ports: [
                            { name: "拉斯帕尔马斯港", city: "拉斯帕尔马斯", type: "加那利群岛最大港口" },
                            { name: "圣克鲁斯港", city: "圣克鲁斯", type: "特内里费岛港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "加那利群岛", capital: "拉斯帕尔马斯", cities: ["拉斯帕尔马斯", "圣克鲁斯"] }
                        ],
                        customsPolicies: [
                            { title: "西班牙自治区", content: "加那利群岛是西班牙的自治区" }
                        ]
                    },
                    "western-sahara": {
                        name: "西撒哈拉",
                        airports: [
                            { name: "阿尤恩机场", code: "EUN", city: "阿尤恩" }
                        ],
                        ports: [
                            { name: "阿尤恩港", city: "阿尤恩", type: "西撒哈拉主要港口" },
                            { name: "达赫拉港", city: "达赫拉", type: "渔业港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "阿尤恩", capital: "阿尤恩", cities: ["阿尤恩"] }
                        ],
                        customsPolicies: [
                            { title: "争议地区", content: "西撒哈拉是非洲西北部争议地区，目前由摩洛哥实际控制" }
                        ]
                    },
                    "reunion": {
                        name: "留尼汪岛",
                        airports: [
                            { name: "罗兰·加洛斯机场", code: "RUN", city: "圣但尼" }
                        ],
                        ports: [
                            { name: "勒波尔港", city: "勒波尔", type: "留尼汪岛主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "留尼汪岛", capital: "圣但尼", cities: ["圣但尼", "勒波尔"] }
                        ],
                        customsPolicies: [
                            { title: "法国海外省", content: "留尼汪岛是法国海外省" }
                        ]
                    },
                    "saint-helena": {
                        name: "圣赫勒拿岛",
                        airports: [
                            { name: "圣赫勒拿机场", code: "HLE", city: "詹姆斯敦" }
                        ],
                        ports: [
                            { name: "詹姆斯敦港", city: "詹姆斯敦", type: "圣赫勒拿岛主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "圣赫勒拿岛", capital: "詹姆斯敦", cities: ["詹姆斯敦"] }
                        ],
                        customsPolicies: [
                            { title: "英国海外领土", content: "圣赫勒拿岛是英国海外领土" }
                        ]
                    },
                    "mayotte": {
                        name: "马约特",
                        airports: [
                            { name: "藻德齐机场", code: "DZA", city: "藻德齐" }
                        ],
                        ports: [
                            { name: "马穆楚港", city: "马穆楚", type: "马约特主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "马约特", capital: "马穆楚", cities: ["马穆楚"] }
                        ],
                        customsPolicies: [
                            { title: "法国海外省", content: "马约特是法国海外省" }
                        ]
                    }
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
                    "australia": {
                        name: "澳大利亚",
                        airports: [
                            { name: "悉尼金斯福德·史密斯国际机场", code: "SYD", city: "悉尼" },
                            { name: "墨尔本图拉马林机场", code: "MEL", city: "墨尔本" },
                            { name: "布里斯班机场", code: "BNE", city: "布里斯班" },
                            { name: "珀斯机场", code: "PER", city: "珀斯" },
                            { name: "阿德莱德机场", code: "ADL", city: "阿德莱德" }
                        ],
                        ports: [
                            { name: "墨尔本港", city: "墨尔本", type: "澳大利亚最大集装箱港" },
                            { name: "悉尼港", city: "悉尼", type: "新南威尔士主要港口" },
                            { name: "布里斯班港", city: "布里斯班", type: "昆士兰主要港口" },
                            { name: "弗里曼特尔港", city: "弗里曼特尔", type: "西澳主要港口" },
                            { name: "阿德莱德港", city: "阿德莱德", type: "南澳主要港口" }
                        ],
                        airlines: [
                            { name: "澳洲航空", code: "QF", type: "国家航空公司" },
                            { name: "维珍澳大利亚航空", code: "VA", type: "主要航空" },
                            { name: "捷星航空", code: "JQ", type: "低成本航空" }
                        ],
                        shippingLines: [
                            { name: "ANL Container Line", type: "澳大利亚航运" }
                        ],
                        provinces: [
                            { name: "新南威尔士州", capital: "悉尼", cities: ["悉尼", "纽卡斯尔", "卧龙岗"] },
                            { name: "维多利亚州", capital: "墨尔本", cities: ["墨尔本", "吉朗"] },
                            { name: "昆士兰州", capital: "布里斯班", cities: ["布里斯班", "黄金海岸", "凯恩斯"] },
                            { name: "西澳大利亚州", capital: "珀斯", cities: ["珀斯", "弗里曼特尔"] },
                            { name: "南澳大利亚州", capital: "阿德莱德", cities: ["阿德莱德"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "澳大利亚大部分商品关税为5%或免税" },
                            { title: "商品服务税(GST)", content: "标准税率10%" },
                            { title: "生物安全", content: "澳大利亚实施严格的生物安全检疫制度" },
                            { title: "FTA优惠", content: "与中国签有自贸协定(ChAFTA)" }
                        ]
                    },
                    "new-zealand": {
                        name: "新西兰",
                        airports: [
                            { name: "奥克兰国际机场", code: "AKL", city: "奥克兰" },
                            { name: "惠灵顿国际机场", code: "WLG", city: "惠灵顿" },
                            { name: "基督城国际机场", code: "CHC", city: "基督城" }
                        ],
                        ports: [
                            { name: "奥克兰港", city: "奥克兰", type: "新西兰最大港口" },
                            { name: "陶朗加港", city: "陶朗加", type: "出口量最大港口" },
                            { name: "利特尔顿港", city: "利特尔顿", type: "南岛主要港口" }
                        ],
                        airlines: [
                            { name: "新西兰航空", code: "NZ", type: "国家航空公司" },
                            { name: "捷星新西兰", code: "JQ", type: "低成本航空" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "奥克兰大区", capital: "奥克兰", cities: ["奥克兰"] },
                            { name: "惠灵顿大区", capital: "惠灵顿", cities: ["惠灵顿"] },
                            { name: "坎特伯雷大区", capital: "基督城", cities: ["基督城"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "新西兰大部分商品关税较低或免税" },
                            { title: "商品服务税(GST)", content: "标准税率15%" },
                            { title: "生物安全", content: "新西兰实施严格的生物安全检疫制度" }
                        ]
                    },
                    "papua-new-guinea": {
                        name: "巴布亚新几内亚",
                        airports: [
                            { name: "杰克逊国际机场", code: "POM", city: "莫尔兹比港" },
                            { name: "纳兹阿布机场", code: "LAE", city: "莱城" }
                        ],
                        ports: [
                            { name: "莫尔兹比港", city: "莫尔兹比港", type: "首都港口" },
                            { name: "莱城港", city: "莱城", type: "第二大城市港口" }
                        ],
                        airlines: [
                            { name: "新几内亚航空", code: "PX", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "国家首都区", capital: "莫尔兹比港", cities: ["莫尔兹比港"] },
                            { name: "莫罗贝省", capital: "莱城", cities: ["莱城"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "巴布亚新几内亚关税根据商品类别不同" }
                        ]
                    },
                    "fiji": {
                        name: "斐济",
                        airports: [
                            { name: "楠迪国际机场", code: "NAN", city: "楠迪" },
                            { name: "苏瓦瑙索里机场", code: "SUV", city: "苏瓦" }
                        ],
                        ports: [
                            { name: "苏瓦港", city: "苏瓦", type: "斐济主要港口" },
                            { name: "劳托卡港", city: "劳托卡", type: "第二大港口" }
                        ],
                        airlines: [
                            { name: "斐济航空", code: "FJ", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "中央区", capital: "苏瓦", cities: ["苏瓦"] },
                            { name: "西区", capital: "劳托卡", cities: ["劳托卡", "楠迪"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "斐济关税根据商品类别不同" }
                        ]
                    },
                    "solomon": {
                        name: "所罗门群岛",
                        airports: [
                            { name: "霍尼亚拉国际机场", code: "HIR", city: "霍尼亚拉" }
                        ],
                        ports: [
                            { name: "霍尼亚拉港", city: "霍尼亚拉", type: "主要港口" }
                        ],
                        airlines: [
                            { name: "所罗门航空", code: "IE", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "霍尼亚拉", capital: "霍尼亚拉", cities: ["霍尼亚拉"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "所罗门群岛关税根据商品类别不同" }
                        ]
                    },
                    "vanuatu": {
                        name: "瓦努阿图",
                        airports: [
                            { name: "维拉港鲍尔菲尔德机场", code: "VLI", city: "维拉港" }
                        ],
                        ports: [
                            { name: "维拉港", city: "维拉港", type: "主要港口" }
                        ],
                        airlines: [
                            { name: "瓦努阿图航空", code: "NF", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "谢法省", capital: "维拉港", cities: ["维拉港"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "瓦努阿图关税根据商品类别不同" }
                        ]
                    },
                    "new-caledonia": {
                        name: "新喀里多尼亚",
                        airports: [
                            { name: "拉东托塔国际机场", code: "NOU", city: "努美阿" }
                        ],
                        ports: [
                            { name: "努美阿港", city: "努美阿", type: "主要港口" }
                        ],
                        airlines: [
                            { name: "喀里多尼亚航空", code: "SB", type: "区域航空" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "南方省", capital: "努美阿", cities: ["努美阿"] }
                        ],
                        customsPolicies: [
                            { title: "法属领地", content: "新喀里多尼亚是法属太平洋领地" }
                        ]
                    },
                    "samoa": {
                        name: "萨摩亚",
                        airports: [
                            { name: "法莱奥洛国际机场", code: "APW", city: "阿皮亚" }
                        ],
                        ports: [
                            { name: "阿皮亚港", city: "阿皮亚", type: "主要港口" }
                        ],
                        airlines: [
                            { name: "萨摩亚航空", code: "OL", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "图阿马萨加区", capital: "阿皮亚", cities: ["阿皮亚"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "萨摩亚关税根据商品类别不同" }
                        ]
                    },
                    "tonga": {
                        name: "汤加",
                        airports: [
                            { name: "法阿莫图国际机场", code: "TBU", city: "努库阿洛法" }
                        ],
                        ports: [
                            { name: "努库阿洛法港", city: "努库阿洛法", type: "主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "汤加塔布岛", capital: "努库阿洛法", cities: ["努库阿洛法"] }
                        ],
                        customsPolicies: [
                            { title: "进口关税", content: "汤加关税根据商品类别不同" }
                        ]
                    },
                    "french-polynesia": {
                        name: "法属波利尼西亚",
                        airports: [
                            { name: "法阿国际机场", code: "PPT", city: "帕皮提" }
                        ],
                        ports: [
                            { name: "帕皮提港", city: "帕皮提", type: "主要港口" }
                        ],
                        airlines: [
                            { name: "大溪地航空", code: "TN", type: "区域航空" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "向风群岛", capital: "帕皮提", cities: ["帕皮提"] }
                        ],
                        customsPolicies: [
                            { title: "法属领地", content: "法属波利尼西亚是法国海外领地" }
                        ]
                    },
                    "cook-islands": {
                        name: "库克群岛",
                        airports: [
                            { name: "拉罗汤加国际机场", code: "RAR", city: "阿瓦鲁阿" }
                        ],
                        ports: [
                            { name: "阿瓦鲁阿港", city: "阿瓦鲁阿", type: "主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "拉罗汤加岛", capital: "阿瓦鲁阿", cities: ["阿瓦鲁阿"] }
                        ],
                        customsPolicies: [
                            { title: "新西兰联系国", content: "库克群岛是新西兰的联系国" }
                        ]
                    },
                    "tuvalu": {
                        name: "图瓦卢",
                        airports: [
                            { name: "富纳富提国际机场", code: "FUN", city: "富纳富提" }
                        ],
                        ports: [
                            { name: "富纳富提港", city: "富纳富提", type: "主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "富纳富提", capital: "富纳富提", cities: ["富纳富提"] }
                        ],
                        customsPolicies: [
                            { title: "小岛国", content: "图瓦卢是太平洋小岛国" }
                        ]
                    },
                    "american-samoa": {
                        name: "美属萨摩亚",
                        airports: [
                            { name: "帕果帕果国际机场", code: "PPG", city: "帕果帕果" }
                        ],
                        ports: [
                            { name: "帕果帕果港", city: "帕果帕果", type: "主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "美属萨摩亚", capital: "帕果帕果", cities: ["帕果帕果"] }
                        ],
                        customsPolicies: [
                            { title: "美国领地", content: "美属萨摩亚是美国非建制属地" }
                        ]
                    },
                    "guam": {
                        name: "关岛",
                        airports: [
                            { name: "安东尼奥·B·旺帕特国际机场", code: "GUM", city: "哈加特纳" }
                        ],
                        ports: [
                            { name: "阿普拉港", city: "阿普拉", type: "关岛主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "关岛", capital: "哈加特纳", cities: ["哈加特纳", "塔穆宁"] }
                        ],
                        customsPolicies: [
                            { title: "美国领地", content: "关岛是美国非建制属地" }
                        ]
                    },
                    "palau": {
                        name: "帕劳",
                        airports: [
                            { name: "帕劳国际机场", code: "ROR", city: "科罗尔" }
                        ],
                        ports: [
                            { name: "科罗尔港", city: "科罗尔", type: "主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "科罗尔州", capital: "科罗尔", cities: ["科罗尔"] }
                        ],
                        customsPolicies: [
                            { title: "自由联系国", content: "帕劳是美国的自由联系国" }
                        ]
                    },
                    "micronesia": {
                        name: "密克罗尼西亚联邦",
                        airports: [
                            { name: "波纳佩国际机场", code: "PNI", city: "帕利基尔" }
                        ],
                        ports: [
                            { name: "波纳佩港", city: "波纳佩", type: "主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "波纳佩州", capital: "帕利基尔", cities: ["帕利基尔"] }
                        ],
                        customsPolicies: [
                            { title: "自由联系国", content: "密克罗尼西亚联邦是美国的自由联系国" }
                        ]
                    },
                    "marshall-islands": {
                        name: "马绍尔群岛",
                        airports: [
                            { name: "马朱罗国际机场", code: "MAJ", city: "马朱罗" }
                        ],
                        ports: [
                            { name: "马朱罗港", city: "马朱罗", type: "首都港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "马朱罗环礁", capital: "马朱罗", cities: ["马朱罗"] }
                        ],
                        customsPolicies: [
                            { title: "船旗国", content: "马绍尔群岛是重要的船旗国" },
                            { title: "自由联系国", content: "马绍尔群岛是美国的自由联系国" }
                        ]
                    },
                    "nauru": {
                        name: "瑙鲁",
                        airports: [
                            { name: "瑙鲁国际机场", code: "INU", city: "亚伦" }
                        ],
                        ports: [],
                        airlines: [
                            { name: "瑙鲁航空", code: "ON", type: "国家航空公司" }
                        ],
                        shippingLines: [],
                        provinces: [
                            { name: "亚伦区", capital: "亚伦", cities: ["亚伦"] }
                        ],
                        customsPolicies: [
                            { title: "小岛国", content: "瑙鲁是世界第三小国，无深水港，使用驳船装卸" }
                        ]
                    },
                    "kiribati": {
                        name: "基里巴斯",
                        airports: [
                            { name: "邦里基国际机场", code: "TRW", city: "塔拉瓦" }
                        ],
                        ports: [
                            { name: "贝蒂奥港", city: "贝蒂奥", type: "主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "吉尔伯特群岛", capital: "塔拉瓦", cities: ["塔拉瓦"] }
                        ],
                        customsPolicies: [
                            { title: "岛国", content: "基里巴斯横跨赤道，是太平洋岛国" }
                        ]
                    },
                    "niue": {
                        name: "纽埃",
                        airports: [
                            { name: "纽埃国际机场", code: "IUE", city: "阿洛菲" }
                        ],
                        ports: [],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "纽埃", capital: "阿洛菲", cities: ["阿洛菲"] }
                        ],
                        customsPolicies: [
                            { title: "新西兰联系国", content: "纽埃是新西兰的联系国，无深水港，使用驳船装卸" }
                        ]
                    },
                    "northern-mariana": {
                        name: "北马里亚纳群岛",
                        airports: [
                            { name: "塞班国际机场", code: "SPN", city: "塞班岛" }
                        ],
                        ports: [
                            { name: "塞班港", city: "塞班岛", type: "塞班岛主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "塞班岛", capital: "加拉班", cities: ["加拉班"] }
                        ],
                        customsPolicies: [
                            { title: "美国领地", content: "北马里亚纳群岛是美国非建制属地" }
                        ]
                    },
                    "tokelau": {
                        name: "托克劳",
                        airports: [],
                        ports: [],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "托克劳", capital: "法考福", cities: ["法考福"] }
                        ],
                        customsPolicies: [
                            { title: "新西兰领土", content: "托克劳是新西兰的非自治领土，无机场，无深水港，使用小艇接驳" }
                        ]
                    },
                    "wallis-futuna": {
                        name: "瓦利斯和富图纳",
                        airports: [
                            { name: "希希福机场", code: "WLS", city: "马塔乌图" }
                        ],
                        ports: [
                            { name: "马塔乌图港", city: "马塔乌图", type: "主要港口" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "瓦利斯岛", capital: "马塔乌图", cities: ["马塔乌图"] }
                        ],
                        customsPolicies: [
                            { title: "法属领地", content: "瓦利斯和富图纳是法国海外领地" }
                        ]
                    },
                    "pitcairn": {
                        name: "皮特凯恩群岛",
                        airports: [],
                        ports: [
                            { name: "邦蒂湾", city: "亚当斯敦", type: "主要锚地" }
                        ],
                        airlines: [],
                        shippingLines: [],
                        provinces: [
                            { name: "皮特凯恩群岛", capital: "亚当斯敦", cities: ["亚当斯敦"] }
                        ],
                        customsPolicies: [
                            { title: "英国领土", content: "皮特凯恩群岛是英国海外领土，人口最少的有人居住地区之一" }
                        ]
                    }
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
                        title: "货物运输状态",
                        content: `
                        <style>
                        .tracking-status-page { padding: 0; }
                        .status-search-box { margin-bottom: 20px; }
                        .status-search-box input { width: 100%; padding: 12px 16px; font-size: 15px; border: 1px solid #e5e5e5; border-radius: 10px; outline: none; transition: all 0.2s; background: #fafafa; }
                        .status-search-box input:focus { border-color: #007aff; background: #fff; }
                        .search-tips { font-size: 12px; color: #8e8e93; margin-top: 6px; }
                        .status-filter-tabs { display: flex; gap: 8px; margin-bottom: 16px; }
                        .filter-tab { padding: 6px 14px; border: none; background: #f2f2f7; border-radius: 8px; cursor: pointer; font-size: 13px; color: #1d1d1f; transition: all 0.2s; font-weight: 500; }
                        .filter-tab:hover { background: #e5e5ea; }
                        .filter-tab.active { background: #007aff; color: #fff; }
                        .status-count { font-size: 13px; color: #8e8e93; margin-bottom: 12px; }
                        .tracking-status-list { display: flex; flex-direction: column; gap: 1px; background: #e5e5e5; border-radius: 12px; overflow: hidden; }
                        .status-item { background: #fff; padding: 14px 16px; display: flex; align-items: center; gap: 12px; transition: background 0.15s; }
                        .status-item:hover { background: #f5f5f7; }
                        .carrier-badge { font-size: 12px; font-weight: 500; color: #8e8e93; flex-shrink: 0; min-width: 45px; }
                        .status-text { flex: 1; display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }
                        .status-en { font-size: 14px; color: #1d1d1f; font-weight: 400; }
                        .status-divider { color: #c7c7cc; font-size: 14px; }
                        .status-zh { font-size: 14px; color: #8e8e93; }
                        .status-item mark { background: #ffcc00; padding: 0 2px; border-radius: 2px; }
                        .no-status-found { text-align: center; padding: 40px; color: #8e8e93; font-size: 14px; background: #fff; border-radius: 12px; }
                        </style>
                        <div class="tracking-status-page">
                            <div class="status-search-box">
                                <input type="text" id="statusSearchInput" placeholder="搜索运输状态（支持中英文）...">
                                <div class="search-tips">💡 输入英文状态或中文翻译进行搜索，如: delivery、清关、payment</div>
                            </div>
                            <div class="status-filter-tabs">
                                <button class="filter-tab active" data-carrier="all">全部</button>
                                <button class="filter-tab" data-carrier="UPS">UPS</button>
                                <button class="filter-tab" data-carrier="DHL">DHL</button>
                                <button class="filter-tab" data-carrier="FedEx">FedEx</button>
                            </div>
                            <div class="status-count">共 <span id="statusCount">0</span> 条状态</div>
                            <div id="trackingStatusList" class="tracking-status-list"></div>
                        </div>`,
                        keywords: ["运输状态", "tracking status", "快递状态", "UPS状态", "DHL状态", "FedEx状态", "清关", "派送", "签收"],
                        readCount: 0
                    },
                    {
                        title: "国际快递关税问题",
                        content: `
                        <div class="customs-duty-page">
                            <div class="important-notice">
                                <h3>⚠️ 关于国际快递包裹关税反弹的风险通知</h3>
                                <div class="notice-content">
                                    <p>国际三大快递（DHL/UPS/FEDEX）都是<strong>DDU服务</strong>，如果遇到进口清关问题需要收件人处理完成后，快递公司才能派送。</p>
                                    <p>目的地进口关税默认收件人支付，但普遍采用<strong>"先派后收关税"</strong>模式，该模式对寄件方存在显著风险：<span class="highlight-red">若目的地收件方不支付关税，将自动转由寄件方承担。</span></p>
                                    <p>为共同规避风险、保护您的利益，<strong>请务必在出货前与收件人充分沟通，明确风险后再安排出口事宜。</strong></p>
                                </div>
                            </div>

                            <div class="requirements-section">
                                <h3>📋 FEDEX及UPS出货要求</h3>
                                <div class="requirement-list">
                                    <div class="requirement-item">
                                        <span class="req-num">1</span>
                                        <div class="req-content">
                                            <strong>收货人邮箱要求</strong>
                                            <p>出货发票必须提供有效的收货人邮箱，如收货人拒绝提供，则填写发件方邮箱，方便处理清关及关税支付事宜。</p>
                                        </div>
                                    </div>
                                    <div class="requirement-item">
                                        <span class="req-num">2</span>
                                        <div class="req-content">
                                            <strong>账号绑定要求</strong>
                                            <p>出货前提前确认好收货人是否有快递账号，若有，必须在随货发票上清晰填上税金支付账号，且走我司制单渠道单证人员须在制单时将该账号同步维护为"税金支付账号"，我司制单渠道，需要业务单独跟后线客服提需求。</p>
                                        </div>
                                    </div>
                                    <div class="requirement-item">
                                        <span class="req-num">3</span>
                                        <div class="req-content">
                                            <strong>渠道建议</strong>
                                            <p>建议改走DHL快递（DHL快递关税反弹极少，但<span class="highlight-red">DHL发美国0~3的邮编查验率高，尤其是3开头的邮编不要走DHL</span>），以及其他包税渠道。</p>
                                        </div>
                                    </div>
                                    <div class="requirement-item">
                                        <span class="req-num">4</span>
                                        <div class="req-content">
                                            <strong>关税预付</strong>
                                            <p>若关税预付，按真实货值<strong>50%</strong>的押金先预收，多退少补。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="key-points-section">
                                <h3>🔑 重点提醒</h3>
                                <div class="key-point-box">
                                    <div class="key-point">
                                        <h4>关税账单处理时效</h4>
                                        <p>自<strong>2026年1月1日</strong>起，任何渠道下达的关税反弹账单，成本部门都会在账单下达后<strong>1个自然月内</strong>完成系统录入，正常向发货方收取。</p>
                                    </div>
                                    <div class="key-point">
                                        <h4>关税退还流程</h4>
                                        <p>若收货人已支付关税，需提供由承运商出具的<strong>官方付讫凭证</strong>，我司核实无误及调账成功后<strong>7个工作日内</strong>退还。</p>
                                    </div>
                                </div>
                            </div>

                            <div class="confirm-notice">
                                <p>✅ 请确认知晓以上信息，谢谢！</p>
                            </div>
                        </div>
                        <style>
                        .customs-duty-page { padding: 0; }
                        .important-notice { background: linear-gradient(135deg, #fff5f5, #ffe8e8); border: 2px solid #ff4d4f; border-radius: 12px; padding: 20px; margin-bottom: 25px; }
                        .important-notice h3 { color: #cf1322; margin: 0 0 15px 0; font-size: 18px; }
                        .notice-content p { margin: 10px 0; line-height: 1.8; color: #333; }
                        .highlight-red { color: #cf1322; font-weight: 600; background: #fff1f0; padding: 2px 6px; border-radius: 4px; }
                        .requirements-section { background: #f6ffed; border: 1px solid #b7eb8f; border-radius: 12px; padding: 20px; margin-bottom: 25px; }
                        .requirements-section h3 { color: #389e0d; margin: 0 0 20px 0; font-size: 17px; }
                        .requirement-list { display: flex; flex-direction: column; gap: 15px; }
                        .requirement-item { display: flex; gap: 15px; background: #fff; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
                        .req-num { width: 32px; height: 32px; background: linear-gradient(135deg, #52c41a, #73d13d); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; }
                        .req-content { flex: 1; }
                        .req-content strong { color: #262626; font-size: 15px; display: block; margin-bottom: 8px; }
                        .req-content p { margin: 0; color: #595959; line-height: 1.7; font-size: 14px; }
                        .key-points-section { background: #fff7e6; border: 1px solid #ffd591; border-radius: 12px; padding: 20px; margin-bottom: 25px; }
                        .key-points-section h3 { color: #d46b08; margin: 0 0 15px 0; font-size: 17px; }
                        .key-point-box { display: flex; flex-direction: column; gap: 15px; }
                        .key-point { background: #fff; padding: 15px; border-radius: 10px; border-left: 4px solid #fa8c16; }
                        .key-point h4 { margin: 0 0 10px 0; color: #d46b08; font-size: 15px; }
                        .key-point p { margin: 0; color: #595959; line-height: 1.7; font-size: 14px; }
                        .confirm-notice { background: #e6f7ff; border: 1px solid #91d5ff; border-radius: 10px; padding: 15px 20px; text-align: center; }
                        .confirm-notice p { margin: 0; color: #096dd9; font-size: 16px; font-weight: 500; }
                        </style>`,
                        keywords: ["关税", "关税反弹", "DDU", "税金", "清关", "FEDEX", "UPS", "DHL", "进口关税", "收件人支付"],
                        readCount: 0
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
                    },
                    {
                        title: "采购砍价心理战术",
                        content: `<p>分享一个老练采购的砍价方法，学习谈判中的心理博弈技巧。</p>
                        
                        <h2>第一次砍价——直接要10个点的折扣</h2>
                        <p><strong>英文：</strong>My boss tells me we need a discount as we have placed so many big orders along with future orders. We kindly request a 10% discount.</p>
                        <p><strong>中文：</strong>我老板说因为我们下了很多大订单，未来还会继续下单，所以需要折扣。我们希望能获得10%的折扣。</p>
                        
                        <h2>第二次砍价——目标价+新品订单为诱饵</h2>
                        <p><strong>英文：</strong>Thank you for discussing this with your team. However, I've run this by my boss, and we need the price to be $***/pcs in order for me to get permission to move forward with the new **** as well. I hope we can meet at this price. Please review this with your team and get back to me.</p>
                        <p><strong>中文：</strong>感谢您与团队讨论此事。但我已向老板汇报，我们需要价格达到$***/件，才能获得批准同时推进新品****的订单。希望我们能达成这个价格。请与您的团队商议后回复我。</p>
                        
                        <h2>第三次砍价——威胁减量</h2>
                        <p><strong>英文：</strong>I appreciate your kind response and effort! Truth to be told, we are considering to downgrade to 500 pcs instead of 1000 pcs.</p>
                        <p><strong>中文：</strong>感谢您的友好回复和付出！说实话，我们正在考虑将订单从1000件减少到500件。</p>
                        
                        <h2>心理战术分析</h2>
                        <p><strong>1. 贪婪心理</strong> - 10个点的折扣对于B端生意来说不算少，但她敢要价，就是利用你可能为了得到订单的贪念。站在采购角度：不提就没有折扣；提了虽然折扣率大，但谁能断定一定谈不成呢？</p>
                        <p><strong>2. 补偿心理</strong> - 第二次要的价格提高了一点点，并利用新订单为诱饵，用来"补偿"这次利润的损失。B端很多时候确实主打薄利多销。</p>
                        <p><strong>3. 损失厌恶心理</strong> - 本来谈的是1K件，现在可能只有500件了。损失厌恶是指人们对于失去某个东西所带来的痛苦程度，比获得同等价值的东西所带来的快乐程度更大。</p>
                        <p><strong>4. BOSS背锅策略</strong> - 每次砍价都拿BOSS当挡箭牌：讲价的不是我，是我们的boss；我只是个打工的，按boss的吩咐办事；就算要价过分了，你也不能怪我。BOSS这个"背锅侠"为谈判中可能出现的冲突起缓和作用。</p>
                        
                        <p><strong>启示：</strong>这些谈判方法，无论做业务还是做采购，都值得学习运用。</p>`,
                        keywords: ["销售谈判", "砍价", "心理战术", "采购", "折扣", "损失厌恶"],
                        readCount: 0
                    },
                    {
                        title: "日常交流用语",
                        content: `
                        <style>
                        .daily-english-page { padding: 0; }
                        .daily-search-box { margin-bottom: 20px; }
                        .daily-search-box input { width: 100%; padding: 12px 16px; font-size: 15px; border: 1px solid #e5e5e5; border-radius: 10px; outline: none; transition: all 0.2s; background: #fafafa; }
                        .daily-search-box input:focus { border-color: #007aff; background: #fff; }
                        .daily-search-tips { font-size: 12px; color: #8e8e93; margin-top: 6px; }
                        .daily-filter-tabs { display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
                        .daily-filter-tab { padding: 6px 14px; border: none; background: #f2f2f7; border-radius: 8px; cursor: pointer; font-size: 13px; color: #1d1d1f; transition: all 0.2s; font-weight: 500; }
                        .daily-filter-tab:hover { background: #e5e5ea; }
                        .daily-filter-tab.active { background: #007aff; color: #fff; }
                        .daily-count { font-size: 13px; color: #8e8e93; margin-bottom: 12px; }
                        .daily-english-list { display: flex; flex-direction: column; gap: 1px; background: #e5e5e5; border-radius: 12px; overflow: hidden; }
                        .daily-item { background: #fff; padding: 14px 16px; display: flex; align-items: center; gap: 12px; transition: background 0.15s; }
                        .daily-item:hover { background: #f5f5f7; }
                        .daily-category-badge { font-size: 12px; font-weight: 500; color: #8e8e93; flex-shrink: 0; min-width: 60px; }
                        .daily-text { flex: 1; display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }
                        .daily-en { font-size: 14px; color: #1d1d1f; font-weight: 400; }
                        .daily-divider { color: #c7c7cc; font-size: 14px; }
                        .daily-zh { font-size: 14px; color: #8e8e93; }
                        .daily-item mark { background: #ffcc00; padding: 0 2px; border-radius: 2px; }
                        .no-daily-found { text-align: center; padding: 40px; color: #8e8e93; font-size: 14px; background: #fff; border-radius: 12px; }
                        </style>
                        <div class="daily-english-page">
                            <div class="daily-search-box">
                                <input type="text" id="dailySearchInput" placeholder="搜索日常交流用语（支持中英文）...">
                                <div class="daily-search-tips">💡 输入英文或中文进行搜索</div>
                            </div>
                            <div class="daily-filter-tabs">
                                <button class="daily-filter-tab active" data-category="all">全部</button>
                                <button class="daily-filter-tab" data-category="物流跟踪">物流跟踪</button>
                                <button class="daily-filter-tab" data-category="费用术语">费用术语</button>
                            </div>
                            <div class="daily-count">共 <span id="dailyCountNum">0</span> 条</div>
                            <div class="daily-english-list" id="dailyEnglishList"></div>
                        </div>`,
                        keywords: ["日常交流", "物流跟踪", "时间记录", "英语表达"],
                        readCount: 0
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

// 更新显示浏览量 - 已禁用
async function updateViewCountDisplay(articleTitle) {
    const metaEl = document.getElementById('articleMeta');
    if (metaEl) {
        metaEl.style.display = 'none';
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
        // 先检查是否点击了country-card或其子元素
        const countryCard = e.target.closest('.country-card');
        if (countryCard) {
            e.preventDefault();
            // 从卡片内的country-link获取数据
            const countryLink = countryCard.querySelector('.country-link');
            if (countryLink) {
                const countryKey = countryLink.getAttribute('data-country-key');
                const continentKey = countryLink.getAttribute('data-continent-key');
            showCountryDetail(continentKey, countryKey);
            }
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
    
    // 分组显示：国家、文章、Disposition Codes、Port Codes
    let html = '';
    // 按相关度排序后分组
    const countryResults = results.filter(r => r.type === 'country').sort((a, b) => (b.relevance || 0) - (a.relevance || 0));
    const articles = results.filter(r => r.type === 'article').sort((a, b) => (b.relevance || 0) - (a.relevance || 0));
    const dcResults = results.filter(r => r.type === 'disposition').sort((a, b) => (b.relevance || 0) - (a.relevance || 0));
    const portResults = results.filter(r => r.type === 'port').sort((a, b) => (b.relevance || 0) - (a.relevance || 0));
    
    // 国家搜索结果优先显示
    if (countryResults.length > 0) {
        html += '<div class="search-group-title">🌍 国家/地区</div>';
        html += countryResults.slice(0, 8).map(result => `
            <div class="search-dropdown-item" onclick="goToCountry('${result.continentKey}', '${result.countryKey}')">
                <span class="search-dropdown-icon search-code-badge">${result.code || '??'}</span>
                <div class="search-dropdown-text">
                    <div class="search-dropdown-title">${result.name} <span style="color:#86868b;font-size:12px;">${result.nameEn}</span></div>
                    <div class="search-dropdown-path">${result.continentName}</div>
                </div>
            </div>
        `).join('');
    }
    
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

// 跳转到国家详情
function goToCountry(continentKey, countryKey) {
    hideSearchDropdown();
    showCountryDetail(continentKey, countryKey);
}

function searchKnowledge(query) {
    const results = [];
    const queryLower = query.toLowerCase();
    const queryUpper = query.toUpperCase();
    
    // 搜索文章
    Object.entries(knowledgeBase).forEach(([catKey, category]) => {
        if (category.subcategories) {
            Object.entries(category.subcategories).forEach(([subKey, subcategory]) => {
            subcategory.articles.forEach(article => {
                    if (matchArticle(article, queryLower)) {
                    results.push({
                        type: 'article',
                        categoryTitle: category.title,
                        subcategoryTitle: subcategory.title,
                            article: article,
                            relevance: getArticleRelevance(article, queryLower)
                    });
                }
            });
        });
        } else if (category.articles) {
            category.articles.forEach(article => {
                if (matchArticle(article, queryLower)) {
                    results.push({
                        type: 'article',
                        categoryTitle: category.title,
                        subcategoryTitle: null,
                        article: article,
                        relevance: getArticleRelevance(article, queryLower)
                    });
                }
            });
        }
    });
    
    // 搜索 Disposition Codes
    if (typeof dispositionCodes !== 'undefined') {
        dispositionCodes.forEach(dc => {
            const codeLower = dc.code.toLowerCase();
            const nameLower = dc.name.toLowerCase();
            let relevance = 0;
            
            // 计算相关度
            if (codeLower === queryLower) relevance = 100; // 代码精确匹配
            else if (codeLower.startsWith(queryLower)) relevance = 80; // 代码前缀匹配
            else if (codeLower.includes(queryLower)) relevance = 60; // 代码包含
            else if (nameLower.startsWith(queryLower)) relevance = 50; // 名称前缀匹配
            else if (nameLower.includes(queryLower)) relevance = 30; // 名称包含
            else if (dc.description.toLowerCase().includes(queryLower)) relevance = 20;
            else if (dc.nameCn && dc.nameCn.includes(query)) relevance = 40;
            else if (dc.descCn && dc.descCn.includes(query)) relevance = 10;
            
            if (relevance > 0) {
                results.push({
                    type: 'disposition',
                    code: dc.code,
                    name: dc.name,
                    nameCn: dc.nameCn,
                    description: dc.description,
                    relevance: relevance
                });
            }
        });
    }
    
    // 搜索 Port Codes
    if (typeof usPortCodes !== 'undefined') {
        usPortCodes.forEach(port => {
            const codeLower = port.code.toLowerCase();
            const nameLower = port.name.toLowerCase();
            let relevance = 0;
            
            if (codeLower === queryLower) relevance = 100;
            else if (codeLower.startsWith(queryLower)) relevance = 80;
            else if (codeLower.includes(queryLower)) relevance = 60;
            else if (nameLower.startsWith(queryLower)) relevance = 50;
            else if (nameLower.includes(queryLower)) relevance = 30;
            else if (port.state && port.state.toLowerCase().includes(queryLower)) relevance = 20;
            else if (port.district && port.district.toLowerCase().includes(queryLower)) relevance = 10;
            
            if (relevance > 0) {
                results.push({
                    type: 'port',
                    code: port.code,
                    name: port.name,
                    state: port.state,
                    district: port.district,
                    relevance: relevance
                });
            }
        });
    }
    
    // 搜索国家 - 支持中文名、英文名、国家代码，带相关度排序
    if (typeof knowledgeBase !== 'undefined' && knowledgeBase.countries) {
        Object.entries(knowledgeBase.countries.continents).forEach(([continentKey, continent]) => {
            if (continent.countries) {
                Object.entries(continent.countries).forEach(([countryKey, country]) => {
                    const codeInfo = countryCodeMap[countryKey] || {};
                    const code = codeInfo.code || '';
                    const nameEn = codeInfo.nameEn || '';
                    let relevance = 0;
                    
                    // 计算相关度分数 - 精确匹配 > 前缀匹配 > 包含匹配
                    if (code.toUpperCase() === queryUpper) {
                        relevance = 100; // 国家代码精确匹配（最高优先级）
                    } else if (country.name === query) {
                        relevance = 95; // 中文名精确匹配
                    } else if (nameEn.toLowerCase() === queryLower) {
                        relevance = 90; // 英文名精确匹配
                    } else if (code.toUpperCase().startsWith(queryUpper)) {
                        relevance = 80; // 国家代码前缀匹配
                    } else if (country.name.startsWith(query)) {
                        relevance = 75; // 中文名前缀匹配
                    } else if (nameEn.toLowerCase().startsWith(queryLower)) {
                        relevance = 70; // 英文名前缀匹配
                    } else if (code.toUpperCase().includes(queryUpper)) {
                        relevance = 50; // 国家代码包含
                    } else if (country.name.includes(query)) {
                        relevance = 40; // 中文名包含
                    } else if (nameEn.toLowerCase().includes(queryLower)) {
                        relevance = 30; // 英文名包含
                    }
                    
                    if (relevance > 0) {
                        results.push({
                            type: 'country',
                            continentKey: continentKey,
                            countryKey: countryKey,
                            name: country.name,
                            code: code,
                            nameEn: nameEn,
                            continentName: continent.name,
                            relevance: relevance
                        });
                    }
                });
            }
        });
    }
    
    // 按相关度排序
    results.sort((a, b) => (b.relevance || 0) - (a.relevance || 0));
    
    return results;
}

// 计算文章相关度
function getArticleRelevance(article, query) {
    const titleLower = article.title.toLowerCase();
    if (titleLower === query) return 100;
    if (titleLower.startsWith(query)) return 80;
    if (titleLower.includes(query)) return 50;
    return 20;
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

// ===== 国家代码和英文名映射 =====
const countryCodeMap = {
    // === 亚洲 - 东亚 ===
    "china": { code: "CN", nameEn: "China" },
    "japan": { code: "JP", nameEn: "Japan" },
    "korea": { code: "KR", nameEn: "South Korea" },
    "mongolia": { code: "MN", nameEn: "Mongolia" },
    "north-korea": { code: "KP", nameEn: "North Korea" },
    // === 亚洲 - 东南亚 ===
    "indonesia": { code: "ID", nameEn: "Indonesia" },
    "thailand": { code: "TH", nameEn: "Thailand" },
    "singapore": { code: "SG", nameEn: "Singapore" },
    "malaysia": { code: "MY", nameEn: "Malaysia" },
    "vietnam": { code: "VN", nameEn: "Vietnam" },
    "philippines": { code: "PH", nameEn: "Philippines" },
    "myanmar": { code: "MM", nameEn: "Myanmar" },
    "cambodia": { code: "KH", nameEn: "Cambodia" },
    "brunei": { code: "BN", nameEn: "Brunei" },
    "laos": { code: "LA", nameEn: "Laos" },
    "timor-leste": { code: "TL", nameEn: "Timor-Leste" },
    // === 亚洲 - 南亚 ===
    "india": { code: "IN", nameEn: "India" },
    "pakistan": { code: "PK", nameEn: "Pakistan" },
    "bangladesh": { code: "BD", nameEn: "Bangladesh" },
    "srilanka": { code: "LK", nameEn: "Sri Lanka" },
    "nepal": { code: "NP", nameEn: "Nepal" },
    "maldives": { code: "MV", nameEn: "Maldives" },
    "bhutan": { code: "BT", nameEn: "Bhutan" },
    // === 亚洲 - 中亚 ===
    "kazakhstan": { code: "KZ", nameEn: "Kazakhstan" },
    "uzbekistan": { code: "UZ", nameEn: "Uzbekistan" },
    "turkmenistan": { code: "TM", nameEn: "Turkmenistan" },
    "kyrgyzstan": { code: "KG", nameEn: "Kyrgyzstan" },
    "tajikistan": { code: "TJ", nameEn: "Tajikistan" },
    // === 亚洲 - 西亚 ===
    "turkey": { code: "TR", nameEn: "Turkey" },
    "saudi-arabia": { code: "SA", nameEn: "Saudi Arabia" },
    "uae": { code: "AE", nameEn: "United Arab Emirates" },
    "israel": { code: "IL", nameEn: "Israel" },
    "iran": { code: "IR", nameEn: "Iran" },
    "iraq": { code: "IQ", nameEn: "Iraq" },
    "qatar": { code: "QA", nameEn: "Qatar" },
    "kuwait": { code: "KW", nameEn: "Kuwait" },
    "oman": { code: "OM", nameEn: "Oman" },
    "jordan": { code: "JO", nameEn: "Jordan" },
    "lebanon": { code: "LB", nameEn: "Lebanon" },
    "bahrain": { code: "BH", nameEn: "Bahrain" },
    "georgia": { code: "GE", nameEn: "Georgia" },
    "azerbaijan": { code: "AZ", nameEn: "Azerbaijan" },
    "armenia": { code: "AM", nameEn: "Armenia" },
    "cyprus": { code: "CY", nameEn: "Cyprus" },
    "syria": { code: "SY", nameEn: "Syria" },
    "yemen": { code: "YE", nameEn: "Yemen" },
    "afghanistan": { code: "AF", nameEn: "Afghanistan" },
    "palestine": { code: "PS", nameEn: "Palestine" },
    // === 欧洲 - 北欧 ===
    "sweden": { code: "SE", nameEn: "Sweden" },
    "norway": { code: "NO", nameEn: "Norway" },
    "denmark": { code: "DK", nameEn: "Denmark" },
    "finland": { code: "FI", nameEn: "Finland" },
    "iceland": { code: "IS", nameEn: "Iceland" },
    // === 欧洲 - 西欧 ===
    "france": { code: "FR", nameEn: "France" },
    "uk": { code: "GB", nameEn: "United Kingdom" },
    "netherlands": { code: "NL", nameEn: "Netherlands" },
    "belgium": { code: "BE", nameEn: "Belgium" },
    "ireland": { code: "IE", nameEn: "Ireland" },
    "luxembourg": { code: "LU", nameEn: "Luxembourg" },
    "monaco": { code: "MC", nameEn: "Monaco" },
    // === 欧洲 - 中欧 ===
    "germany": { code: "DE", nameEn: "Germany" },
    "poland": { code: "PL", nameEn: "Poland" },
    "switzerland": { code: "CH", nameEn: "Switzerland" },
    "austria": { code: "AT", nameEn: "Austria" },
    "czech": { code: "CZ", nameEn: "Czech Republic" },
    "hungary": { code: "HU", nameEn: "Hungary" },
    "slovakia": { code: "SK", nameEn: "Slovakia" },
    "liechtenstein": { code: "LI", nameEn: "Liechtenstein" },
    // === 欧洲 - 东欧 ===
    "russia": { code: "RU", nameEn: "Russia" },
    "ukraine": { code: "UA", nameEn: "Ukraine" },
    "belarus": { code: "BY", nameEn: "Belarus" },
    "lithuania": { code: "LT", nameEn: "Lithuania" },
    "latvia": { code: "LV", nameEn: "Latvia" },
    "estonia": { code: "EE", nameEn: "Estonia" },
    "moldova": { code: "MD", nameEn: "Moldova" },
    // === 欧洲 - 南欧 ===
    "italy": { code: "IT", nameEn: "Italy" },
    "spain": { code: "ES", nameEn: "Spain" },
    "greece": { code: "GR", nameEn: "Greece" },
    "portugal": { code: "PT", nameEn: "Portugal" },
    "romania": { code: "RO", nameEn: "Romania" },
    "croatia": { code: "HR", nameEn: "Croatia" },
    "slovenia": { code: "SI", nameEn: "Slovenia" },
    "bulgaria": { code: "BG", nameEn: "Bulgaria" },
    "serbia": { code: "RS", nameEn: "Serbia" },
    "bosnia": { code: "BA", nameEn: "Bosnia and Herzegovina" },
    "albania": { code: "AL", nameEn: "Albania" },
    "north-macedonia": { code: "MK", nameEn: "North Macedonia" },
    "montenegro": { code: "ME", nameEn: "Montenegro" },
    "malta": { code: "MT", nameEn: "Malta" },
    "andorra": { code: "AD", nameEn: "Andorra" },
    "san-marino": { code: "SM", nameEn: "San Marino" },
    "vatican": { code: "VA", nameEn: "Vatican City" },
    // === 欧洲地区 ===
    "faroe-islands": { code: "FO", nameEn: "Faroe Islands" },
    "gibraltar": { code: "GI", nameEn: "Gibraltar" },
    // === 北美洲 ===
    "usa": { code: "US", nameEn: "United States of America" },
    "canada": { code: "CA", nameEn: "Canada" },
    "mexico": { code: "MX", nameEn: "Mexico" },
    "guatemala": { code: "GT", nameEn: "Guatemala" },
    "panama": { code: "PA", nameEn: "Panama" },
    "costa-rica": { code: "CR", nameEn: "Costa Rica" },
    "el-salvador": { code: "SV", nameEn: "El Salvador" },
    "honduras": { code: "HN", nameEn: "Honduras" },
    "nicaragua": { code: "NI", nameEn: "Nicaragua" },
    "belize": { code: "BZ", nameEn: "Belize" },
    "dominican": { code: "DO", nameEn: "Dominican Republic" },
    "cuba": { code: "CU", nameEn: "Cuba" },
    "trinidad": { code: "TT", nameEn: "Trinidad and Tobago" },
    "jamaica": { code: "JM", nameEn: "Jamaica" },
    "bahamas": { code: "BS", nameEn: "Bahamas" },
    "barbados": { code: "BB", nameEn: "Barbados" },
    "haiti": { code: "HT", nameEn: "Haiti" },
    "saint-lucia": { code: "LC", nameEn: "Saint Lucia" },
    "antigua": { code: "AG", nameEn: "Antigua and Barbuda" },
    "grenada": { code: "GD", nameEn: "Grenada" },
    "saint-kitts": { code: "KN", nameEn: "Saint Kitts and Nevis" },
    "saint-vincent": { code: "VC", nameEn: "Saint Vincent and the Grenadines" },
    "dominica": { code: "DM", nameEn: "Dominica" },
    // === 北美洲地区 ===
    "puerto-rico": { code: "PR", nameEn: "Puerto Rico" },
    "curacao": { code: "CW", nameEn: "Curaçao" },
    "aruba": { code: "AW", nameEn: "Aruba" },
    "cayman-islands": { code: "KY", nameEn: "Cayman Islands" },
    "bermuda": { code: "BM", nameEn: "Bermuda" },
    "greenland": { code: "GL", nameEn: "Greenland" },
    "guadeloupe": { code: "GP", nameEn: "Guadeloupe" },
    "martinique": { code: "MQ", nameEn: "Martinique" },
    "us-virgin-islands": { code: "VI", nameEn: "U.S. Virgin Islands" },
    "british-virgin-islands": { code: "VG", nameEn: "British Virgin Islands" },
    "turks-caicos": { code: "TC", nameEn: "Turks and Caicos Islands" },
    "sint-maarten": { code: "SX", nameEn: "Sint Maarten" },
    "saint-martin": { code: "MF", nameEn: "Saint Martin" },
    "saint-barthelemy": { code: "BL", nameEn: "Saint Barthélemy" },
    "anguilla": { code: "AI", nameEn: "Anguilla" },
    "montserrat": { code: "MS", nameEn: "Montserrat" },
    "saint-pierre": { code: "PM", nameEn: "Saint Pierre and Miquelon" },
    // === 南美洲 ===
    "brazil": { code: "BR", nameEn: "Brazil" },
    "argentina": { code: "AR", nameEn: "Argentina" },
    "chile": { code: "CL", nameEn: "Chile" },
    "colombia": { code: "CO", nameEn: "Colombia" },
    "peru": { code: "PE", nameEn: "Peru" },
    "venezuela": { code: "VE", nameEn: "Venezuela" },
    "ecuador": { code: "EC", nameEn: "Ecuador" },
    "bolivia": { code: "BO", nameEn: "Bolivia" },
    "uruguay": { code: "UY", nameEn: "Uruguay" },
    "paraguay": { code: "PY", nameEn: "Paraguay" },
    "guyana": { code: "GY", nameEn: "Guyana" },
    "suriname": { code: "SR", nameEn: "Suriname" },
    "french-guiana": { code: "GF", nameEn: "French Guiana" },
    "falkland-islands": { code: "FK", nameEn: "Falkland Islands" },
    // === 非洲 - 北非 ===
    "egypt": { code: "EG", nameEn: "Egypt" },
    "algeria": { code: "DZ", nameEn: "Algeria" },
    "morocco": { code: "MA", nameEn: "Morocco" },
    "libya": { code: "LY", nameEn: "Libya" },
    "tunisia": { code: "TN", nameEn: "Tunisia" },
    // === 非洲 - 西非 ===
    "nigeria": { code: "NG", nameEn: "Nigeria" },
    "ghana": { code: "GH", nameEn: "Ghana" },
    "ivory-coast": { code: "CI", nameEn: "Ivory Coast" },
    "senegal": { code: "SN", nameEn: "Senegal" },
    "cameroon": { code: "CM", nameEn: "Cameroon" },
    "burkina-faso": { code: "BF", nameEn: "Burkina Faso" },
    "mali": { code: "ML", nameEn: "Mali" },
    "benin": { code: "BJ", nameEn: "Benin" },
    "guinea": { code: "GN", nameEn: "Guinea" },
    "niger": { code: "NE", nameEn: "Niger" },
    "togo": { code: "TG", nameEn: "Togo" },
    "mauritania": { code: "MR", nameEn: "Mauritania" },
    "sierra-leone": { code: "SL", nameEn: "Sierra Leone" },
    "liberia": { code: "LR", nameEn: "Liberia" },
    "cape-verde": { code: "CV", nameEn: "Cape Verde" },
    "gambia": { code: "GM", nameEn: "Gambia" },
    "guinea-bissau": { code: "GW", nameEn: "Guinea-Bissau" },
    // === 非洲 - 中非 ===
    "congo-drc": { code: "CD", nameEn: "Democratic Republic of the Congo" },
    "gabon": { code: "GA", nameEn: "Gabon" },
    "congo": { code: "CG", nameEn: "Republic of the Congo" },
    "equatorial-guinea": { code: "GQ", nameEn: "Equatorial Guinea" },
    "chad": { code: "TD", nameEn: "Chad" },
    "central-african": { code: "CF", nameEn: "Central African Republic" },
    "sao-tome": { code: "ST", nameEn: "São Tomé and Príncipe" },
    // === 非洲 - 东非 ===
    "ethiopia": { code: "ET", nameEn: "Ethiopia" },
    "kenya": { code: "KE", nameEn: "Kenya" },
    "tanzania": { code: "TZ", nameEn: "Tanzania" },
    "uganda": { code: "UG", nameEn: "Uganda" },
    "sudan": { code: "SD", nameEn: "Sudan" },
    "rwanda": { code: "RW", nameEn: "Rwanda" },
    "south-sudan": { code: "SS", nameEn: "South Sudan" },
    "mauritius": { code: "MU", nameEn: "Mauritius" },
    "seychelles": { code: "SC", nameEn: "Seychelles" },
    "djibouti": { code: "DJ", nameEn: "Djibouti" },
    "somalia": { code: "SO", nameEn: "Somalia" },
    "eritrea": { code: "ER", nameEn: "Eritrea" },
    "burundi": { code: "BI", nameEn: "Burundi" },
    // === 非洲 - 南部非洲 ===
    "south-africa": { code: "ZA", nameEn: "South Africa" },
    "angola": { code: "AO", nameEn: "Angola" },
    "mozambique": { code: "MZ", nameEn: "Mozambique" },
    "zambia": { code: "ZM", nameEn: "Zambia" },
    "zimbabwe": { code: "ZW", nameEn: "Zimbabwe" },
    "botswana": { code: "BW", nameEn: "Botswana" },
    "namibia": { code: "NA", nameEn: "Namibia" },
    "madagascar": { code: "MG", nameEn: "Madagascar" },
    "malawi": { code: "MW", nameEn: "Malawi" },
    "eswatini": { code: "SZ", nameEn: "Eswatini" },
    "lesotho": { code: "LS", nameEn: "Lesotho" },
    "comoros": { code: "KM", nameEn: "Comoros" },
    // === 非洲地区 ===
    "canary-islands": { code: "IC", nameEn: "Canary Islands" },
    "reunion": { code: "RE", nameEn: "Réunion" },
    "mayotte": { code: "YT", nameEn: "Mayotte" },
    "western-sahara": { code: "EH", nameEn: "Western Sahara" },
    "saint-helena": { code: "SH", nameEn: "Saint Helena" },
    // === 大洋洲 ===
    "australia": { code: "AU", nameEn: "Australia" },
    "new-zealand": { code: "NZ", nameEn: "New Zealand" },
    "papua-new-guinea": { code: "PG", nameEn: "Papua New Guinea" },
    "fiji": { code: "FJ", nameEn: "Fiji" },
    "solomon": { code: "SB", nameEn: "Solomon Islands" },
    "vanuatu": { code: "VU", nameEn: "Vanuatu" },
    "new-caledonia": { code: "NC", nameEn: "New Caledonia" },
    "french-polynesia": { code: "PF", nameEn: "French Polynesia" },
    "samoa": { code: "WS", nameEn: "Samoa" },
    "guam": { code: "GU", nameEn: "Guam" },
    "tonga": { code: "TO", nameEn: "Tonga" },
    "micronesia": { code: "FM", nameEn: "Micronesia" },
    "kiribati": { code: "KI", nameEn: "Kiribati" },
    "palau": { code: "PW", nameEn: "Palau" },
    "marshall-islands": { code: "MH", nameEn: "Marshall Islands" },
    "nauru": { code: "NR", nameEn: "Nauru" },
    "tuvalu": { code: "TV", nameEn: "Tuvalu" },
    "american-samoa": { code: "AS", nameEn: "American Samoa" },
    "northern-mariana": { code: "MP", nameEn: "Northern Mariana Islands" },
    "cook-islands": { code: "CK", nameEn: "Cook Islands" },
    "wallis-futuna": { code: "WF", nameEn: "Wallis and Futuna" },
    "niue": { code: "NU", nameEn: "Niue" },
    "tokelau": { code: "TK", nameEn: "Tokelau" },
    "norfolk-island": { code: "NF", nameEn: "Norfolk Island" },
    "pitcairn": { code: "PN", nameEn: "Pitcairn Islands" }
};

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
                const codeInfo = countryCodeMap[countryKey] || {};
                const codeDisplay = codeInfo.code ? ` <span class="country-code">${codeInfo.code}</span>` : '';
                const titleAttr = codeInfo.nameEn ? `title="${codeInfo.nameEn}"` : '';
                return `
                    <div class="country-card">
                        <a href="#" class="country-link" ${titleAttr} data-continent-key="${continentKey}" data-country-key="${countryKey}">${country.name}${codeDisplay}</a>
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
            const codeInfo = countryCodeMap[key] || {};
            const codeDisplay = codeInfo.code ? ` <span class="country-code">${codeInfo.code}</span>` : '';
            const titleAttr = codeInfo.nameEn ? `title="${codeInfo.nameEn}"` : '';
            return `
                <div class="country-card">
                    <a href="#" class="country-link" ${titleAttr} data-continent-key="${continentKey}" data-country-key="${key}">${country.name}${codeDisplay}</a>
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
                    { name: "TNT服务介绍", article: "四大快递公司详解" },
                    { name: "货物运输状态", article: "货物运输状态" },
                    { name: "国际快递关税问题", article: "国际快递关税问题" }
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
                    { name: "CBP Disposition Codes", article: "CBP Disposition Codes" },
                    { name: "美国海关清关流程", article: "美国海关清关流程" },
                    { name: "CBP申报要求", article: "CBP申报要求" },
                    { name: "ISF申报指南", article: "ISF申报指南" }
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
    "reading": {
        title: "读书学习",
        isSpecialPage: true,
        sections: []
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
            },
            {
                title: "销售谈判",
                items: [
                    { name: "采购砍价心理战术", article: "采购砍价心理战术" }
                ]
            }
        ]
    },
    // ===== 日常交流 =====
    "daily-english": {
        title: "日常交流",
        sections: [
            {
                title: "物流跟踪",
                items: [
                    { name: "日常交流用语", article: "日常交流用语" }
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
    
    // 特殊页面处理
    if (data.isSpecialPage && categoryKey === 'reading') {
        document.getElementById('articleTitle').style.display = '';
        document.getElementById('articleTitle').textContent = data.title;
        initReadingPage();
        return;
    }
    
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
    
    // 特殊页面初始化
    if (title === '货物运输状态') {
        setTimeout(initTrackingStatusPage, 100);
    }
    if (title === '日常交流用语') {
        setTimeout(initDailyEnglishPage, 100);
    }
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
    
    // 标签页导航 - 始终显示全部6个标签（顺序：机场 航司 港口 船司 省份城市 清关政策）
    html += '<div class="country-tabs-horizontal">';
    html += `<button class="country-tab active" onclick="switchCountryTab(event, 'airports')">机场 <span class="tab-count">${airportCount}</span></button>`;
    html += `<button class="country-tab" onclick="switchCountryTab(event, 'airlines')">航司 <span class="tab-count">${airlineCount}</span></button>`;
    html += `<button class="country-tab" onclick="switchCountryTab(event, 'ports')">港口 <span class="tab-count">${portCount}</span></button>`;
    html += `<button class="country-tab" onclick="switchCountryTab(event, 'shipping')">船司 <span class="tab-count">${shippingLineCount}</span></button>`;
    html += `<button class="country-tab" onclick="switchCountryTab(event, 'provinces')">省份城市 <span class="tab-count">${provinceCount}</span></button>`;
    html += `<button class="country-tab" onclick="switchCountryTab(event, 'customs')">清关政策 <span class="tab-count">${customsPolicyCount}</span></button>`;
    html += '</div>';
    
    // 标签页内容
    html += '<div class="country-tabs-content">';
    
    // 机场面板 - 始终显示
    html += '<div class="tab-panel active" id="tab-airports">';
    html += `<div class="tab-header">
        <h3>${country.name} · 已显示 ${airportCount} 个机场</h3>
        <div class="tab-header-filters">
            <span class="tab-filter"><span class="dot green"></span>国际机场</span>
            <span class="tab-filter"><span class="dot orange"></span>国内机场</span>
        </div>
    </div>`;
    if (airportCount > 0) {
        html += '<div class="data-list">';
        if (country.airports?.international) {
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
        if (country.airports?.domestic) {
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
        html += '</div>';
    } else {
        html += '<div class="no-data-message">该国家暂无机场数据</div>';
    }
    html += '</div>';
    
    // 航司面板 - 始终显示
    html += '<div class="tab-panel" id="tab-airlines">';
    html += `<div class="tab-header">
        <h3>${country.name} · 已显示 ${airlineCount} 家航空公司</h3>
    </div>`;
    if (airlineCount > 0) {
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
        html += '</div>';
    } else {
        html += '<div class="no-data-message">该国家暂无航空公司数据</div>';
    }
    html += '</div>';
    
    // 港口面板 - 始终显示
    html += '<div class="tab-panel" id="tab-ports">';
    html += `<div class="tab-header">
        <h3>${country.name} · 已显示 ${portCount} 个港口</h3>
        <div class="tab-header-filters">
            <span class="tab-filter"><span class="dot green"></span>主要港口</span>
            <span class="tab-filter"><span class="dot orange"></span>其他港口</span>
        </div>
    </div>`;
    if (portCount > 0) {
        html += '<div class="data-list">';
        if (country.ports?.international) {
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
        if (country.ports?.domestic) {
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
        html += '</div>';
    } else {
        html += '<div class="no-data-message">该国家为内陆国家，暂无港口数据</div>';
    }
    html += '</div>';
    
    // 船司面板 - 始终显示
    html += '<div class="tab-panel" id="tab-shipping">';
    html += `<div class="tab-header">
        <h3>${country.name} · 已显示 ${shippingLineCount} 家船运公司</h3>
    </div>`;
    if (shippingLineCount > 0) {
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
        html += '</div>';
    } else {
        html += '<div class="no-data-message">该国家暂无本土船运公司数据</div>';
    }
    html += '</div>';
    
    // 省份城市面板 - 始终显示
    html += '<div class="tab-panel" id="tab-provinces">';
    const totalCities = country.provinces?.reduce((sum, p) => sum + p.cities.length, 0) || 0;
    html += `<div class="tab-header">
        <h3>${country.name} · ${provinceCount} 个省份 · ${totalCities} 个城市</h3>
    </div>`;
    if (provinceCount > 0) {
        html += '<div class="provinces-grid">';
        country.provinces.forEach(p => {
            html += `<div class="province-card"><h4>${p.name}</h4><div class="city-tags">${p.cities.map(c => `<span class="city-tag">${c}</span>`).join('')}</div></div>`;
        });
        html += '</div>';
    } else {
        html += '<div class="no-data-message">该国家暂无省份城市数据</div>';
    }
    html += '</div>';
    
    // 清关政策面板 - 始终显示
    html += '<div class="tab-panel" id="tab-customs">';
    html += `<div class="tab-header">
        <h3>${country.name} · ${customsPolicyCount} 项清关政策</h3>
    </div>`;
    if (customsPolicyCount > 0) {
        html += '<div class="policy-list">';
        country.customsPolicies.forEach(p => {
            html += `<div class="policy-card"><h4>${p.title}</h4><p>${p.content}</p></div>`;
        });
        html += '</div>';
    } else {
        html += '<div class="no-data-message">该国家暂无清关政策数据</div>';
    }
    html += '</div>';
    
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

// 搜索过滤 - Port Codes页面专用
function filterPortCodes() {
    const nameFilter = document.getElementById('searchPortName')?.value.toLowerCase().trim() || '';
    const stateFilter = document.getElementById('searchState')?.value || '';
    const codeFilter = document.getElementById('searchPortCode')?.value.trim() || '';
    
    const filtered = usPortCodes.filter(port => {
        // PORT NAME字段：同时搜索名称和代码（更智能）
        const matchName = !nameFilter || 
            port.name.toLowerCase().includes(nameFilter) ||
            port.code.includes(nameFilter);
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

// ===== 日常交流用语数据 =====
const dailyEnglishData = [
    { category: "物流跟踪", en: "All events are recorded in local time, therefore some data may be displayed out of sequence.", zh: "所有事件均按当地时间记录，因此部分数据可能显示顺序不一致。" },
    // 费用术语
    { category: "费用术语", en: "THIRD PARTY PAYMENTS", zh: "第三方付款（代收款项）" },
    { category: "费用术语", en: "CUSTOMS SURCHARGES", zh: "海关附加费" },
    { category: "费用术语", en: "CUSTOMS CLEARANCE", zh: "清关费" },
    { category: "费用术语", en: "OPERATIONS CHARGES", zh: "操作费" },
    { category: "费用术语", en: "TRANSPORT SERVICE", zh: "运输服务费" },
    { category: "费用术语", en: "LOCAL TRANSPORT", zh: "本地运输费" },
    { category: "费用术语", en: "DESTINATION CHARGES", zh: "目的地费用" },
    { category: "费用术语", en: "WAREHOUSING", zh: "仓储费" }
];

// 日常交流页面初始化
function initDailyEnglishPage() {
    const searchInput = document.getElementById('dailySearchInput');
    const filterTabs = document.querySelectorAll('.daily-filter-tab');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const activeTab = document.querySelector('.daily-filter-tab.active');
        const category = activeTab ? activeTab.dataset.category : 'all';
        renderDailyEnglishList(e.target.value, category);
    });
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderDailyEnglishList(searchInput.value, tab.dataset.category);
        });
    });
    
    renderDailyEnglishList('', 'all');
}

// 渲染日常交流列表
function renderDailyEnglishList(query = '', category = 'all') {
    const listContainer = document.getElementById('dailyEnglishList');
    const countNum = document.getElementById('dailyCountNum');
    if (!listContainer) return;
    
    let filtered = dailyEnglishData;
    
    if (category !== 'all') {
        filtered = filtered.filter(item => item.category === category);
    }
    
    if (query) {
        const q = query.toLowerCase();
        filtered = filtered.filter(item => 
            item.en.toLowerCase().includes(q) || item.zh.includes(q)
        );
    }
    
    if (countNum) countNum.textContent = filtered.length;
    
    if (filtered.length === 0) {
        listContainer.innerHTML = '<div class="no-daily-found">未找到匹配的内容</div>';
        return;
    }
    
    const highlightText = (text, q) => {
        if (!q) return text;
        const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    };
    
    listContainer.innerHTML = filtered.map(item => `
        <div class="daily-item">
            <span class="daily-category-badge">${item.category}</span>
            <div class="daily-text">
                <span class="daily-en">${highlightText(item.en, query)}</span>
                <span class="daily-divider">/</span>
                <span class="daily-zh">${highlightText(item.zh, query)}</span>
            </div>
        </div>
    `).join('');
}

// ===== 读书学习数据 =====
const readingData = [
    // 货代博主
    { category: "货代博主", name: "货代老王", type: "视频号抖音" },
    { category: "货代博主", name: "货代老樊", type: "视频号抖音" },
    { category: "货代博主", name: "跨境张大脸", type: "视频号抖音" },
    { category: "货代博主", name: "陈闯", type: "视频号抖音" },
    // 股市资金
    { category: "投资理财", name: "《富爸爸穷爸爸》", level: "入门篇" },
    { category: "投资理财", name: "《小狗钱钱》", level: "入门篇" },
    { category: "投资理财", name: "《财务自由之路》", level: "入门篇" },
    { category: "投资理财", name: "《邻家的百万富翁》", level: "入门篇" },
    { category: "投资理财", name: "《巴比伦最富有的人》", level: "入门篇" },
    { category: "投资理财", name: "《财报就像一本故事书》", level: "初级篇" },
    { category: "投资理财", name: "《手把手教你读财报》", level: "初级篇" },
    { category: "投资理财", name: "《投资中最简单的事》", level: "初级篇" },
    { category: "投资理财", name: "《投资中最重要的事》", level: "进阶篇" },
    { category: "投资理财", name: "《巴菲特的护城河》", level: "进阶篇" },
    { category: "投资理财", name: "《学习估值，轻松投资》", level: "进阶篇" },
    { category: "投资理财", name: "《指数基金投资指南》", level: "进阶篇" },
    { category: "投资理财", name: "《穷查理宝典》", level: "高级篇" },
    { category: "投资理财", name: "《怎样选择成长股》", level: "高级篇" },
    { category: "投资理财", name: "《彼得林奇的成功投资》", level: "高级篇" },
    { category: "投资理财", name: "《证券分析》", level: "终极篇" },
    { category: "投资理财", name: "《聪明的投资者》", level: "终极篇" },
    { category: "投资理财", name: "《估值》", level: "终极篇" },
    { category: "投资理财", name: "《价值评估》", level: "终极篇" },
    { category: "投资理财", name: "布客新知·财富资料库", level: "资源库", link: "https://github.com/ixinzhi" },
    // 诸子百家
    { category: "诸子百家", name: "菜根谭", author: "明朝洪应明" },
    { category: "诸子百家", name: "小窗幽记", author: "陆绍珩" },
    { category: "诸子百家", name: "围炉夜话", author: "清朝王永彬" },
    { category: "诸子百家", name: "商君书", author: "天下第一禁书" },
    { category: "诸子百家", name: "罗织经", author: "" },
    { category: "诸子百家", name: "韩非子", author: "" },
    { category: "诸子百家", name: "焚书", author: "" },
    { category: "诸子百家", name: "明夷待访录", author: "" },
    { category: "诸子百家", name: "商人的咒", author: "灰商曹建伟" },
    { category: "诸子百家", name: "史记·货殖列传", author: "" },
    { category: "诸子百家", name: "天下水陆路程", author: "" },
    { category: "诸子百家", name: "士商类要", author: "" },
    { category: "诸子百家", name: "世事生意初阶", author: "" },
    { category: "诸子百家", name: "商贾便览", author: "" },
    { category: "诸子百家", name: "计然篇", author: "" },
    { category: "诸子百家", name: "商贾指南", author: "" },
    { category: "诸子百家", name: "为商十要", author: "" },
    { category: "诸子百家", name: "贸学须知", author: "" },
    { category: "诸子百家", name: "客商一览醒迷", author: "" },
    { category: "诸子百家", name: "杂货便览", author: "" },
    { category: "诸子百家", name: "清高宗实录", author: "" },
    { category: "诸子百家", name: "客窗闲话", author: "" },
    { category: "诸子百家", name: "清碑类钞", author: "" },
    { category: "诸子百家", name: "天道遥远的救世主", author: "" },
    { category: "诸子百家", name: "生意世事初阶", author: "" },
    { category: "诸子百家", name: "南怀瑾选集", author: "" },
    { category: "诸子百家", name: "道德经", author: "" },
    { category: "诸子百家", name: "小人经", author: "" },
    { category: "诸子百家", name: "厚黑学", author: "" },
    { category: "诸子百家", name: "张飞流水账", author: "" },
    { category: "诸子百家", name: "梁启超文集", author: "" },
    { category: "诸子百家", name: "曾国藩", author: "" },
    { category: "诸子百家", name: "叶茂中", author: "" },
    { category: "诸子百家", name: "杜国楹", author: "" },
    { category: "诸子百家", name: "盐铁论", author: "" },
    { category: "诸子百家", name: "毛选", author: "" },
    { category: "诸子百家", name: "君主论", author: "" },
    { category: "诸子百家", name: "家庭私有制和国家的起源", author: "" },
    { category: "诸子百家", name: "就业利息和货币通论", author: "" },
    { category: "诸子百家", name: "斯特伯格爱情新论", author: "" },
    { category: "诸子百家", name: "爱的五种语言", author: "" },
    { category: "诸子百家", name: "自私的基因", author: "" },
    { category: "诸子百家", name: "裸猿", author: "" },
    { category: "诸子百家", name: "内向者的优势", author: "" },
    // 货代公众号
    { category: "货代公众号", name: "福锐达外贸助手", type: "公众号" },
    { category: "货代公众号", name: "中国物流与供应链博览会", type: "公众号" },
    { category: "货代公众号", name: "运去哪国际物流平台", type: "平台" },
    { category: "货代公众号", name: "物流声音", type: "公众号" },
    { category: "货代公众号", name: "物流巴巴", type: "平台" },
    { category: "货代公众号", name: "物流指闻", type: "公众号" },
    { category: "货代公众号", name: "物流沙龙", type: "公众号" },
    { category: "货代公众号", name: "中技物流", type: "公众号" },
    { category: "货代公众号", name: "深圳物流与供应链管理协会", type: "机构" },
    { category: "货代公众号", name: "锦程物流", type: "平台" },
    { category: "货代公众号", name: "大赢家物流", type: "公众号" },
    { category: "货代公众号", name: "大陆桥物流联盟", type: "公众号" },
    { category: "货代公众号", name: "平野云物流", type: "公众号" },
    { category: "货代公众号", name: "跨境电商物流百晓生", type: "公众号" },
    { category: "货代公众号", name: "通志国际物流", type: "公众号" },
    { category: "货代公众号", name: "创宇跨境电商物流", type: "公众号" },
    { category: "货代公众号", name: "WFS威达货运跨境物流", type: "公众号" },
    { category: "货代公众号", name: "海光物流集团", type: "公众号" },
    { category: "货代公众号", name: "久荣物流", type: "公众号" },
    { category: "货代公众号", name: "信华物流", type: "公众号" },
    { category: "货代公众号", name: "星航物流", type: "公众号" },
    { category: "货代公众号", name: "联宇物流", type: "公众号" },
    { category: "货代公众号", name: "蚂蚁物流网", type: "平台" },
    { category: "货代公众号", name: "千合跨境物流", type: "公众号" },
    { category: "货代公众号", name: "海铁国际物流", type: "公众号" },
    { category: "货代公众号", name: "物流牛人", type: "公众号" },
    { category: "货代公众号", name: "邦阅", type: "公众号" },
    { category: "货代公众号", name: "米课圈App", type: "App" },
    { category: "货代公众号", name: "海歌天航贸风", type: "公众号" },
    { category: "货代公众号", name: "中国报关协会", type: "机构" },
    { category: "货代公众号", name: "停机坪", type: "公众号" },
    { category: "货代公众号", name: "关务发布", type: "公众号" },
    { category: "货代公众号", name: "找船", type: "公众号" },
    { category: "货代公众号", name: "飞行邦", type: "公众号" },
    { category: "货代公众号", name: "Tess外贸Club", type: "公众号" },
    { category: "货代公众号", name: "逗比货代", type: "公众号" },
    { category: "货代公众号", name: "深圳外贸圈", type: "公众号" },
    { category: "货代公众号", name: "船务资讯", type: "公众号" },
    { category: "货代公众号", name: "Jitlogistics", type: "公众号" },
    { category: "货代公众号", name: "航空微读", type: "公众号" },
    { category: "货代公众号", name: "焦点视界", type: "公众号" },
    { category: "货代公众号", name: "外土司资讯", type: "公众号" },
    { category: "货代公众号", name: "私人飞机", type: "公众号" },
    { category: "货代公众号", name: "浙江外贸", type: "公众号" },
    { category: "货代公众号", name: "最航运", type: "公众号" },
    { category: "货代公众号", name: "航空圈", type: "公众号" },
    { category: "货代公众号", name: "跨境电商头条", type: "公众号" },
    { category: "货代公众号", name: "我爱飞机", type: "公众号" },
    { category: "货代公众号", name: "民航狗", type: "公众号" },
    { category: "货代公众号", name: "拉上窗联", type: "公众号" },
    { category: "货代公众号", name: "跨境电商雨果网", type: "公众号" },
    { category: "货代公众号", name: "跨境资讯", type: "公众号" },
    { category: "货代公众号", name: "航运界", type: "公众号" },
    { category: "货代公众号", name: "Flexport", type: "公众号" },
    { category: "货代公众号", name: "三脚猫电商", type: "公众号" },
    { category: "货代公众号", name: "关务小二", type: "公众号" },
    { category: "货代公众号", name: "货代经理人", type: "公众号" },
    { category: "货代公众号", name: "侃侃跨境那些事儿", type: "公众号" },
    { category: "货代公众号", name: "飞机微信砖家", type: "公众号" },
    { category: "货代公众号", name: "国际航运企业联盟ISEA", type: "机构" },
    { category: "货代公众号", name: "科越云通关", type: "公众号" },
    { category: "货代公众号", name: "民航资源网", type: "公众号" },
    { category: "货代公众号", name: "中国航务周刊", type: "公众号" },
    { category: "货代公众号", name: "搜航网", type: "公众号" },
    { category: "货代公众号", name: "外贸经理交流圈", type: "公众号" },
    { category: "货代公众号", name: "运去哪", type: "公众号" },
    { category: "货代公众号", name: "深圳市航空业协会", type: "机构" },
    { category: "货代公众号", name: "远恒峰大件", type: "公众号" },
    { category: "货代公众号", name: "埃马外贸之家", type: "公众号" },
    { category: "货代公众号", name: "涅浦顿供应链科技", type: "公众号" },
    { category: "货代公众号", name: "旗美供应链", type: "公众号" },
    { category: "货代公众号", name: "维运网", type: "公众号" },
    { category: "货代公众号", name: "航空知识", type: "公众号" },
    { category: "货代公众号", name: "毅冰米课", type: "公众号" },
    { category: "货代公众号", name: "进出口经理人", type: "公众号" },
    { category: "货代公众号", name: "吾爱航运网", type: "公众号" },
    { category: "货代公众号", name: "航空货运之家", type: "公众号" },
    { category: "货代公众号", name: "航空物语", type: "公众号" },
    { category: "货代公众号", name: "海事界", type: "公众号" },
    { category: "货代公众号", name: "弘毅供应链", type: "公众号" },
    { category: "货代公众号", name: "WallTech", type: "公众号" },
    { category: "货代公众号", name: "百运百科", type: "公众号" },
    { category: "货代公众号", name: "海运网", type: "公众号" },
    { category: "货代公众号", name: "敦豪全球货运", type: "公众号" },
    { category: "货代公众号", name: "三万英尺清醒梦", type: "公众号" },
    { category: "货代公众号", name: "世航通运-锂电池运输专家", type: "公众号" },
    { category: "货代公众号", name: "外贸业务中心", type: "公众号" },
    { category: "货代公众号", name: "熊猫爱飞行", type: "公众号" },
    { category: "货代公众号", name: "货代视界", type: "公众号" },
    { category: "货代公众号", name: "民航enactus", type: "公众号" },
    { category: "货代公众号", name: "NatureCalls", type: "公众号" },
    { category: "货代公众号", name: "航空研究社", type: "公众号" },
    { category: "货代公众号", name: "跨境白皮书", type: "公众号" },
    { category: "货代公众号", name: "畅说民航", type: "公众号" },
    { category: "货代公众号", name: "货代八卦男", type: "公众号" },
    { category: "货代公众号", name: "信诺递捷", type: "公众号" },
    { category: "货代公众号", name: "颜Sir说", type: "公众号" },
    { category: "货代公众号", name: "货代经济圈", type: "公众号" },
    { category: "货代公众号", name: "爱分享学习", type: "公众号" },
    { category: "货代公众号", name: "厦门贸促", type: "公众号" },
    { category: "货代公众号", name: "机械前线", type: "公众号" },
    { category: "货代公众号", name: "料神外贸", type: "公众号" },
    { category: "货代公众号", name: "明说明航", type: "公众号" },
    { category: "货代公众号", name: "大物流赢家", type: "公众号" },
    { category: "货代公众号", name: "维沃物联", type: "公众号" },
    { category: "货代公众号", name: "三益外贸", type: "公众号" },
    { category: "货代公众号", name: "天地华宇品牌号", type: "公众号" },
    { category: "货代公众号", name: "外贸经理人", type: "公众号" },
    { category: "货代公众号", name: "SMART货代", type: "公众号" },
    { category: "货代公众号", name: "波音中国", type: "公众号" },
    { category: "货代公众号", name: "E2biz服务笔记", type: "公众号" },
    { category: "货代公众号", name: "阿里巴巴", type: "公众号" },
    { category: "货代公众号", name: "阿里巴巴跨境供应链", type: "公众号" },
    { category: "货代公众号", name: "Starday物流服务中心", type: "公众号" },
    { category: "货代公众号", name: "外贸物流社区", type: "公众号" },
    { category: "货代公众号", name: "科橘OTECH", type: "公众号" },
    { category: "货代公众号", name: "站长之家", type: "公众号" },
    { category: "货代公众号", name: "腾达检测", type: "公众号" },
    { category: "货代公众号", name: "半岛网", type: "公众号" },
    { category: "货代公众号", name: "韩国中政国际货运", type: "公众号" },
    { category: "货代公众号", name: "综保物流", type: "公众号" },
    { category: "货代公众号", name: "Topworld", type: "公众号" },
    { category: "货代公众号", name: "今日海运", type: "公众号" },
    { category: "货代公众号", name: "BCDtravel", type: "公众号" },
    { category: "货代公众号", name: "渡途人的跨境记事本", type: "公众号" },
    { category: "货代公众号", name: "Xtransfer", type: "公众号" },
    { category: "货代公众号", name: "转运网", type: "公众号" },
    { category: "货代公众号", name: "出口退税综合服务网", type: "公众号" },
    { category: "货代公众号", name: "4PX", type: "公众号" },
    { category: "货代公众号", name: "云途物流", type: "公众号" },
    { category: "货代公众号", name: "佳成国际", type: "公众号" },
    { category: "货代公众号", name: "华翰物流", type: "公众号" },
    { category: "货代公众号", name: "飞特物流", type: "公众号" },
    { category: "货代公众号", name: "递一物流", type: "公众号" },
    { category: "货代公众号", name: "义达国际物流", type: "公众号" },
    { category: "货代公众号", name: "yanwen express", type: "公众号" },
    { category: "货代公众号", name: "纵腾集团", type: "公众号" },
    { category: "货代公众号", name: "百福国际", type: "公众号" },
    { category: "货代公众号", name: "九方通讯", type: "公众号" },
    { category: "货代公众号", name: "万邦速达", type: "公众号" },
    { category: "货代公众号", name: "谷仓海外仓", type: "公众号" },
    { category: "货代公众号", name: "实顺物流", type: "公众号" },
    { category: "货代公众号", name: "货代外贸企业失信预警平台", type: "平台" },
    { category: "货代公众号", name: "罗杰把酒看航运", type: "公众号" },
    { category: "货代公众号", name: "货代kevin", type: "公众号" },
    // 财商思维
    { category: "财商思维", name: "毛哥奋斗在深圳", type: "公众号" },
    { category: "财商思维", name: "鬼道创业圈/儒释道田斌", type: "公众号" },
    { category: "财商思维", name: "爱国创业", type: "公众号" },
    { category: "财商思维", name: "徐志国频道", type: "公众号" },
    { category: "财商思维", name: "网络共享汇", type: "公众号" },
    { category: "财商思维", name: "智多星", type: "公众号" },
    { category: "财商思维", name: "波波来了", type: "公众号" },
    { category: "财商思维", name: "结构学", type: "公众号" },
    { category: "财商思维", name: "张良网创老板会", type: "公众号" },
    { category: "财商思维", name: "无路可套", type: "公众号" },
    { category: "财商思维", name: "为你写一个故事", type: "公众号" },
    { category: "财商思维", name: "懂懂日记", type: "公众号" },
    { category: "财商思维", name: "小路超车", type: "公众号" },
    { category: "财商思维", name: "我就BB怎么了", type: "公众号" },
    { category: "财商思维", name: "张桓投资笔记", type: "公众号" },
    { category: "财商思维", name: "暴疯团队俱乐部", type: "公众号" },
    { category: "财商思维", name: "万小刀", type: "公众号" },
    { category: "财商思维", name: "我会永远在你身后", type: "公众号" },
    { category: "财商思维", name: "地球知识局", type: "公众号" },
    { category: "财商思维", name: "九个泡泡", type: "公众号" },
    { category: "财商思维", name: "拙见", type: "公众号" },
    { category: "财商思维", name: "正解局", type: "公众号" },
    { category: "财商思维", name: "CAP学习网", type: "网站" },
    { category: "财商思维", name: "新媒之家", type: "公众号" },
    { category: "财商思维", name: "8字路口", type: "公众号" },
    { category: "财商思维", name: "马路青年", type: "公众号" },
    { category: "财商思维", name: "大飞码字", type: "公众号" },
    { category: "财商思维", name: "守夜人总司令", type: "公众号" },
    { category: "财商思维", name: "周绪才啊", type: "公众号" },
    { category: "财商思维", name: "阿力推推", type: "公众号" },
    { category: "财商思维", name: "晨晨新思维", type: "公众号" },
    { category: "财商思维", name: "卢松松", type: "公众号" },
    { category: "财商思维", name: "黑帽星球", type: "公众号" },
    { category: "财商思维", name: "境界哥", type: "公众号" },
    { category: "财商思维", name: "灰色哥", type: "公众号" },
    { category: "财商思维", name: "冷门哥", type: "公众号" },
    { category: "财商思维", name: "谦逊哥", type: "公众号" },
    { category: "财商思维", name: "中原偏门哥", type: "公众号" },
    { category: "财商思维", name: "偏门哥讲门道", type: "公众号" },
    { category: "财商思维", name: "朱海涛", type: "公众号" },
    { category: "财商思维", name: "海涛精英会", type: "公众号" },
    { category: "财商思维", name: "陈猎营销", type: "公众号" },
    { category: "财商思维", name: "玩家老高", type: "公众号" },
    { category: "财商思维", name: "这个狼叔不太冷", type: "公众号" },
    { category: "财商思维", name: "酷酷说钱", type: "公众号" },
    { category: "财商思维", name: "安然说钱", type: "公众号" },
    { category: "财商思维", name: "灰产圈", type: "公众号" },
    { category: "财商思维", name: "大熊会", type: "公众号" },
    { category: "财商思维", name: "龙城老板会", type: "公众号" },
    { category: "财商思维", name: "快赚社群", type: "公众号" },
    { category: "财商思维", name: "黑猫社团", type: "公众号" },
    { category: "财商思维", name: "网络创富术", type: "公众号" },
    { category: "财商思维", name: "君不见and", type: "公众号" },
    { category: "财商思维", name: "怪才涂", type: "公众号" },
    { category: "财商思维", name: "CPA学习网", type: "网站" },
    { category: "财商思维", name: "财神大咖", type: "公众号" },
    { category: "财商思维", name: "杰神独家", type: "公众号" },
    { category: "财商思维", name: "嗨推", type: "公众号" },
    { category: "财商思维", name: "陆明明", type: "公众号" },
    { category: "财商思维", name: "峰子笔记", type: "公众号" },
    { category: "财商思维", name: "北魏", type: "公众号" },
    { category: "财商思维", name: "国子派", type: "公众号" },
    { category: "财商思维", name: "网络创业工厂", type: "公众号" },
    { category: "财商思维", name: "财神网络项目", type: "公众号" },
    { category: "财商思维", name: "飞哥传书项目圈", type: "公众号" },
    { category: "财商思维", name: "打工一家亲", type: "公众号" },
    { category: "财商思维", name: "e路发发发", type: "公众号" },
    { category: "财商思维", name: "阿国网络随笔", type: "公众号" },
    { category: "财商思维", name: "灰老大", type: "公众号" },
    { category: "财商思维", name: "老猫随笔", type: "公众号" },
    { category: "财商思维", name: "百态网络", type: "公众号" },
    { category: "财商思维", name: "步天之路", type: "公众号" },
    { category: "财商思维", name: "超常规营销微课堂", type: "公众号" },
    { category: "财商思维", name: "坏坏", type: "公众号" },
    { category: "财商思维", name: "老古董说互联网", type: "公众号" },
    { category: "财商思维", name: "猎赚江湖", type: "公众号" },
    { category: "财商思维", name: "流年领域", type: "公众号" },
    { category: "财商思维", name: "李兄点财", type: "公众号" },
    { category: "财商思维", name: "路哥网事", type: "公众号" },
    { category: "财商思维", name: "九京随笔", type: "公众号" },
    { category: "财商思维", name: "暴风团队俱乐部", type: "公众号" },
    { category: "财商思维", name: "詹伟平", type: "公众号" },
    { category: "财商思维", name: "新媒体之家", type: "公众号" },
    { category: "财商思维", name: "杰神联盟", type: "公众号" },
    { category: "财商思维", name: "阿星网络随笔", type: "公众号" },
    { category: "财商思维", name: "峰少课堂", type: "公众号" },
    { category: "财商思维", name: "四叔创业课", type: "公众号" },
    { category: "财商思维", name: "暴走二狗", type: "公众号" },
    { category: "财商思维", name: "店长智库", type: "公众号" },
    { category: "财商思维", name: "鹏哥微课", type: "公众号" },
    { category: "财商思维", name: "老板逆思维创富学堂", type: "公众号" },
    { category: "财商思维", name: "杨茹运营笔记", type: "公众号" },
    { category: "财商思维", name: "灰邪生", type: "公众号" },
    { category: "财商思维", name: "哲伦一大航海创业", type: "公众号" },
    { category: "财商思维", name: "第九公社", type: "公众号" },
    { category: "财商思维", name: "引流哥666", type: "公众号" },
    { category: "财商思维", name: "奇迹7G", type: "公众号" },
    { category: "财商思维", name: "黄岛主营销", type: "公众号" },
    { category: "财商思维", name: "西域老板会", type: "公众号" },
    { category: "财商思维", name: "史大勇", type: "公众号" },
    { category: "财商思维", name: "低调笔记", type: "公众号" },
    { category: "财商思维", name: "老胡地盘", type: "公众号" },
    { category: "财商思维", name: "粉粉随笔", type: "公众号" },
    { category: "财商思维", name: "mango带你搞副业", type: "公众号" },
    { category: "财商思维", name: "矛盾视界", type: "公众号" },
    { category: "财商思维", name: "毛小白奋斗在深圳", type: "公众号" },
    { category: "财商思维", name: "毛小白plus", type: "公众号" },
    { category: "财商思维", name: "猫爷谈赚", type: "公众号" },
    { category: "财商思维", name: "每天学点自媒体", type: "公众号" },
    { category: "财商思维", name: "苗子分享汇", type: "公众号" },
    { category: "财商思维", name: "苗子思维录", type: "公众号" },
    { category: "财商思维", name: "铭则网络营销", type: "公众号" },
    { category: "财商思维", name: "摸鱼思维", type: "公众号" },
    { category: "财商思维", name: "木木老贼", type: "公众号" },
    { category: "财商思维", name: "逆东黑帽SEO", type: "公众号" },
    { category: "财商思维", name: "牛顿顿顿", type: "公众号" },
    { category: "财商思维", name: "牛哥微课堂", type: "公众号" },
    { category: "财商思维", name: "ONE星球", type: "公众号" },
    { category: "财商思维", name: "旁门左道PPT", type: "公众号" },
    { category: "财商思维", name: "彭楠的创业故事", type: "公众号" },
    { category: "财商思维", name: "偏门哥谈门道", type: "公众号" },
    { category: "财商思维", name: "偏门老杨", type: "公众号" },
    { category: "财商思维", name: "偏门思维", type: "公众号" },
    { category: "财商思维", name: "千虹云课堂", type: "公众号" },
    { category: "财商思维", name: "青年横财发展会", type: "公众号" },
    { category: "财商思维", name: "秦王会", type: "公众号" },
    { category: "财商思维", name: "企业微信", type: "公众号" },
    { category: "财商思维", name: "群响club", type: "公众号" },
    { category: "财商思维", name: "人民路56号", type: "公众号" },
    { category: "财商思维", name: "三八哥", type: "公众号" },
    { category: "财商思维", name: "叁心笔记", type: "公众号" },
    { category: "财商思维", name: "商道天涯", type: "公众号" },
    { category: "财商思维", name: "商道网络随笔", type: "公众号" },
    { category: "财商思维", name: "商梦网校", type: "公众号" },
    { category: "财商思维", name: "商钱", type: "公众号" },
    { category: "财商思维", name: "绅白不白", type: "公众号" },
    { category: "财商思维", name: "生财有术", type: "公众号" },
    { category: "财商思维", name: "圣巩思维说", type: "公众号" },
    { category: "财商思维", name: "拾钱", type: "公众号" },
    { category: "财商思维", name: "石哥思维", type: "公众号" },
    { category: "财商思维", name: "stormzhang", type: "公众号" },
    { category: "财商思维", name: "苏博士无货源开店", type: "公众号" },
    { category: "财商思维", name: "S先生笔记", type: "公众号" },
    { category: "财商思维", name: "他化自在天", type: "公众号" },
    { category: "财商思维", name: "秦安市12345", type: "公众号" },
    { category: "财商思维", name: "秦山频道", type: "公众号" },
    { category: "财商思维", name: "淘客干货", type: "公众号" },
    { category: "财商思维", name: "套路侠是谁", type: "公众号" },
    { category: "财商思维", name: "天策姐说", type: "公众号" },
    { category: "财商思维", name: "天朝私塾", type: "公众号" },
    { category: "财商思维", name: "天朝学子博客", type: "公众号" },
    { category: "财商思维", name: "园南记", type: "公众号" },
    { category: "财商思维", name: "网络创业工场", type: "公众号" },
    { category: "财商思维", name: "网络致富术", type: "公众号" },
    { category: "财商思维", name: "王叔笔记", type: "公众号" },
    { category: "财商思维", name: "王渣男", type: "公众号" },
    { category: "财商思维", name: "微保", type: "公众号" },
    { category: "财商思维", name: "伟东笔记", type: "公众号" },
    { category: "财商思维", name: "稳赚家园", type: "公众号" },
    { category: "财商思维", name: "无本", type: "公众号" },
    { category: "财商思维", name: "无本掌柜", type: "公众号" },
    { category: "财商思维", name: "无极领域", type: "公众号" },
    { category: "财商思维", name: "吴聊创业金融", type: "公众号" },
    { category: "财商思维", name: "无往不利", type: "公众号" },
    { category: "财商思维", name: "五一哥", type: "公众号" },
    { category: "财商思维", name: "项目观察家", type: "公众号" },
    { category: "财商思维", name: "仙人JUMP", type: "公众号" },
    { category: "财商思维", name: "小白创业汇", type: "公众号" },
    { category: "财商思维", name: "小褚网络圈", type: "公众号" },
    { category: "财商思维", name: "小峰创业汇", type: "公众号" },
    { category: "财商思维", name: "晓林侃冷门", type: "公众号" },
    { category: "财商思维", name: "萧七的剑", type: "公众号" },
    { category: "财商思维", name: "小淘学社", type: "公众号" },
    { category: "财商思维", name: "逍遥哥说", type: "公众号" },
    { category: "财商思维", name: "西瓜数据", type: "公众号" },
    { category: "财商思维", name: "新思维PLUS", type: "公众号" },
    { category: "财商思维", name: "杨飞", type: "公众号" },
    { category: "财商思维", name: "阳光保险", type: "公众号" },
    { category: "财商思维", name: "阳光男孩鲁力", type: "公众号" },
    { category: "财商思维", name: "杨子贤UP", type: "公众号" },
    { category: "财商思维", name: "一八玩家", type: "公众号" },
    { category: "财商思维", name: "一本黑", type: "公众号" },
    { category: "财商思维", name: "衣钵先生", type: "公众号" },
    { category: "财商思维", name: "一龙和他伙伴们", type: "公众号" },
    { category: "财商思维", name: "一米聊创业", type: "公众号" },
    { category: "财商思维", name: "营销套路社", type: "公众号" },
    { category: "财商思维", name: "营销学习社", type: "公众号" },
    { category: "财商思维", name: "营销有套", type: "公众号" },
    { category: "财商思维", name: "引流哥", type: "公众号" },
    { category: "财商思维", name: "引流步鲸云", type: "公众号" },
    { category: "财商思维", name: "引流增长哥", type: "公众号" },
    { category: "财商思维", name: "赤无所知", type: "公众号" },
    { category: "财商思维", name: "义乌之狼", type: "公众号" },
    { category: "财商思维", name: "勇哥捞偏门", type: "公众号" },
    { category: "财商思维", name: "用户增长指南", type: "公众号" },
    { category: "财商思维", name: "有范青年", type: "公众号" },
    { category: "财商思维", name: "云梦轩", type: "公众号" },
    { category: "财商思维", name: "运营小助手", type: "公众号" },
    { category: "财商思维", name: "增长女黑客", type: "公众号" },
    { category: "财商思维", name: "张大胖的自留地", type: "公众号" },
    { category: "财商思维", name: "战劲爱分享", type: "公众号" },
    { category: "财商思维", name: "招财大牛猫", type: "公众号" },
    { category: "财商思维", name: "真的好困", type: "公众号" },
    { category: "财商思维", name: "知识星球", type: "公众号" },
    { category: "财商思维", name: "知识星球精选", type: "公众号" },
    { category: "财商思维", name: "中国保险万事通", type: "公众号" },
    { category: "财商思维", name: "中国反传网", type: "公众号" },
    { category: "财商思维", name: "终结诈骗", type: "公众号" },
    { category: "财商思维", name: "周恩俊", type: "公众号" },
    { category: "财商思维", name: "赚课堂", type: "公众号" },
    { category: "财商思维", name: "赚内外博客", type: "公众号" },
    { category: "财商思维", name: "自由领域项目营", type: "公众号" },
    { category: "财商思维", name: "纵横领域", type: "公众号" },
    { category: "财商思维", name: "左道大神", type: "公众号" },
    { category: "财商思维", name: "左哥网创", type: "公众号" },
    { category: "财商思维", name: "坐家一辉", type: "公众号" },
    { category: "财商思维", name: "祖小来", type: "公众号" },
    { category: "财商思维", name: "21K社群888", type: "公众号" },
    { category: "财商思维", name: "58商机网", type: "公众号" },
    { category: "财商思维", name: "8小时外谋发展", type: "公众号" },
    // 房地产
    { category: "房地产", name: "水库论坛", type: "公众号" },
    { category: "房地产", name: "鹏城荐房", type: "公众号" },
    { category: "房地产", name: "房圳探", type: "公众号" },
    { category: "房地产", name: "房Boss", type: "公众号" },
    { category: "房地产", name: "二环十三套", type: "公众号" },
    { category: "房地产", name: "呆呆咖啡馆", type: "公众号" },
    { category: "房地产", name: "渔村大牛", type: "公众号" },
    { category: "房地产", name: "二小姐后花园", type: "公众号" },
    { category: "房地产", name: "二小姐贵宾团", type: "公众号" },
    { category: "房地产", name: "莫老爷", type: "公众号" },
    { category: "房地产", name: "砖本位", type: "公众号" },
    { category: "房地产", name: "奥派经济学", type: "公众号" },
    { category: "房地产", name: "樱桃大房子", type: "公众号" },
    { category: "房地产", name: "真叫卢俊", type: "公众号" },
    // 信用卡
    { category: "信用卡", name: "信用卡", type: "公众号" },
    // 广告营销
    { category: "广告营销", name: "剽悍一只猫", type: "公众号" },
    { category: "广告营销", name: "包邮区", type: "公众号" },
    { category: "广告营销", name: "广告狂人", type: "公众号" },
    { category: "广告营销", name: "杜蕾斯", type: "公众号" },
    { category: "广告营销", name: "插座学院", type: "公众号" },
    { category: "广告营销", name: "雾满拦江", type: "公众号" },
    { category: "广告营销", name: "岛花佩佩", type: "公众号" },
    { category: "广告营销", name: "半佛仙人", type: "公众号" },
    { category: "广告营销", name: "秦小明", type: "公众号" },
    { category: "广告营销", name: "大宝会", type: "公众号" },
    { category: "广告营销", name: "王马丁的狐步舞厅", type: "公众号" },
    { category: "广告营销", name: "拳王的故事", type: "公众号" },
    { category: "广告营销", name: "电商海参哥", type: "公众号" },
    { category: "广告营销", name: "周秦汉是个大SB", type: "公众号" },
    { category: "广告营销", name: "创意很关键", type: "公众号" },
    { category: "广告营销", name: "傅盛", type: "公众号" },
    { category: "广告营销", name: "颜玉涵", type: "公众号" },
    { category: "广告营销", name: "孤独大脑", type: "公众号" },
    { category: "广告营销", name: "三表龙门阵", type: "公众号" },
    { category: "广告营销", name: "Icebaby", type: "公众号" },
    { category: "广告营销", name: "大汉丞相", type: "公众号" },
    { category: "广告营销", name: "布尔费墨", type: "公众号" },
    { category: "广告营销", name: "惊云小屋", type: "公众号" },
    { category: "广告营销", name: "李尚龙", type: "公众号" },
    { category: "广告营销", name: "萧秋水", type: "公众号" },
    { category: "广告营销", name: "艾菲的理想", type: "公众号" },
    { category: "广告营销", name: "兽楼处", type: "公众号" },
    { category: "广告营销", name: "卢泓言", type: "公众号" },
    { category: "广告营销", name: "兽财局", type: "公众号" },
    { category: "广告营销", name: "增长潘多拉", type: "公众号" },
    { category: "广告营销", name: "阿牛笔记", type: "公众号" },
    { category: "广告营销", name: "灏泽异谈", type: "公众号" },
    { category: "广告营销", name: "老华带你飞", type: "公众号" },
    { category: "广告营销", name: "徐小平", type: "公众号" },
    { category: "广告营销", name: "段永平", type: "公众号" },
    { category: "广告营销", name: "史玉柱", type: "公众号" },
    // 实用工具
    { category: "实用工具", name: "知云阁", type: "工具" },
    { category: "实用工具", name: "每日优质搜罗", type: "公众号" },
    { category: "实用工具", name: "狗子的幸福生活", type: "公众号" },
    { category: "实用工具", name: "Apper", type: "工具" },
    { category: "实用工具", name: "Tools指南", type: "公众号" },
    { category: "实用工具", name: "黑白鹭", type: "公众号" },
    { category: "实用工具", name: "素材兔", type: "工具" },
    { category: "实用工具", name: "大灰指北", type: "公众号" },
    { category: "实用工具", name: "搬砖圈", type: "公众号" },
    { category: "实用工具", name: "大灰Hurbai", type: "公众号" },
    { category: "实用工具", name: "可能吧", type: "公众号" },
    { category: "实用工具", name: "软件安装管家", type: "公众号" },
    { category: "实用工具", name: "Mac软件管家", type: "公众号" },
    { category: "实用工具", name: "向天歌", type: "公众号" },
    { category: "实用工具", name: "吾爱破解论坛", type: "网站" },
    { category: "实用工具", name: "阿刚同学", type: "公众号" },
    { category: "实用工具", name: "软件智库", type: "公众号" },
    { category: "实用工具", name: "Hack", type: "工具" },
    { category: "实用工具", name: "V视频助手", type: "工具" },
    { category: "实用工具", name: "批量下载", type: "工具" },
    { category: "实用工具", name: "维棠", type: "工具" },
    { category: "实用工具", name: "Icebaby", type: "工具" },
    { category: "实用工具", name: "视频批量下载器", type: "工具" },
    { category: "实用工具", name: "讯飞输入法", type: "工具" },
    { category: "实用工具", name: "搜狗听写", type: "工具" },
    { category: "实用工具", name: "Remove logonow", type: "工具" },
    { category: "实用工具", name: "去水印软件", type: "工具" },
    { category: "实用工具", name: "ev录屏", type: "工具" },
    { category: "实用工具", name: "kk录屏", type: "工具" },
    { category: "实用工具", name: "PR", type: "工具" },
    { category: "实用工具", name: "AE", type: "工具" },
    { category: "实用工具", name: "快剪辑", type: "工具" },
    { category: "实用工具", name: "camtasia 9", type: "工具" }
];

// 读书学习页面初始化
function initReadingPage() {
    const container = document.getElementById('articleBody');
    if (!container) return;
    
    const categories = ['货代博主', '货代公众号', '诸子百家', '投资理财', '房地产', '信用卡', '广告营销', '财商思维', '实用工具'];
    
    // 计算每个分类的数量
    const categoryCounts = {};
    categories.forEach(cat => {
        categoryCounts[cat] = readingData.filter(item => item.category === cat).length;
    });
    
    container.innerHTML = `
        <div class="reading-page">
            <div class="reading-search-box">
                <input type="text" id="readingSearchInput" placeholder="搜索资源（支持名称、作者、类型）..." class="reading-search-input">
            </div>
            <div class="reading-tabs-container">
                <div class="reading-tabs" id="readingTabs">
                    ${categories.map((cat, index) => `
                        <button class="reading-tab ${index === 0 ? 'active' : ''}" data-category="${cat}">
                            <span class="tab-name">${cat}</span>
                            <span class="tab-count">${categoryCounts[cat]}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
            <div class="reading-count">共 <span id="readingTotalCount">${categoryCounts[categories[0]]}</span> 个资源</div>
            <div class="reading-list" id="readingList"></div>
        </div>
    `;
    
    // 初始渲染第一个分类
    const firstCategory = categories[0];
    const initialData = readingData.filter(item => item.category === firstCategory);
    renderReadingList(initialData);
    
    // 搜索功能
    document.getElementById('readingSearchInput').addEventListener('input', (e) => {
        filterReadingList();
    });
    
    // Tab切换
    document.querySelectorAll('.reading-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.reading-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // 清空搜索
            document.getElementById('readingSearchInput').value = '';
            filterReadingList();
        });
    });
}

function filterReadingList() {
    const searchValue = document.getElementById('readingSearchInput').value.toLowerCase();
    const activeTab = document.querySelector('.reading-tab.active');
    const category = activeTab ? activeTab.getAttribute('data-category') : '股市资金';
    
    // 先按分类筛选
    let filtered = readingData.filter(item => item.category === category);
    
    // 再按搜索词筛选
    if (searchValue) {
        filtered = filtered.filter(item => 
            item.name.toLowerCase().includes(searchValue) ||
            (item.author && item.author.toLowerCase().includes(searchValue)) ||
            (item.level && item.level.toLowerCase().includes(searchValue)) ||
            (item.type && item.type.toLowerCase().includes(searchValue))
        );
    }
    
    // 更新数量显示
    const countEl = document.getElementById('readingTotalCount');
    if (countEl) {
        countEl.textContent = filtered.length;
    }
    
    renderReadingList(filtered);
}

function renderReadingList(data) {
    const listContainer = document.getElementById('readingList');
    if (!listContainer) return;
    
    if (data.length === 0) {
        listContainer.innerHTML = '<div class="reading-empty">暂无匹配的资源</div>';
        return;
    }
    
    const html = data.map(item => {
        let subtitle = '';
        if (item.level) subtitle = item.level;
        else if (item.author) subtitle = item.author;
        else if (item.type) subtitle = item.type;
        
        // 如果有链接，则渲染为可点击的链接
        const nameHtml = item.link 
            ? `<a href="${item.link}" target="_blank" class="reading-name reading-link">${item.name}</a>`
            : `<span class="reading-name">${item.name}</span>`;
        
        return `
        <div class="reading-item">
            ${nameHtml}
            ${subtitle ? `<span class="reading-subtitle">${subtitle}</span>` : ''}
        </div>`;
    }).join('');
    
    listContainer.innerHTML = html;
}

// ===== 运输状态查询功能 =====
const trackingStatusData = [
    // UPS - 关税/税费相关
    { carrier: "UPS", category: "关税/税费", en: "The receiver has disputed or refused to pay duties or taxes. Awaiting payment.", zh: "收件人对关税/税费有异议或拒绝支付。等待付款。" },
    { carrier: "UPS", category: "关税/税费", en: "We'll contact the sender or receiver about this delivery.", zh: "我们将就此次递送联系发件人或收件人。" },
    { carrier: "UPS", category: "关税/税费", en: "A payment is required before the package can be delivered.", zh: "包裹需要付款后才能派送。" },
    { carrier: "UPS", category: "关税/税费", en: "Customs clearance completed.", zh: "清关完成。" },
    { carrier: "UPS", category: "关税/税费", en: "Package is being held for payment of duties and taxes.", zh: "包裹因关税待付而被扣留。" },
    { carrier: "UPS", category: "关税/税费", en: "Clearance in progress.", zh: "清关进行中。" },
    { carrier: "UPS", category: "关税/税费", en: "Your package is being held in customs.", zh: "您的包裹正在海关扣留。" },
    // UPS - 派送状态
    { carrier: "UPS", category: "派送状态", en: "Out for delivery.", zh: "正在派送中。" },
    { carrier: "UPS", category: "派送状态", en: "Delivered.", zh: "已签收。" },
    { carrier: "UPS", category: "派送状态", en: "Delivery attempted. Will retry next business day.", zh: "尝试派送失败。将在下一个工作日重试。" },
    { carrier: "UPS", category: "派送状态", en: "The receiver was not available at the time of delivery.", zh: "派送时收件人不在。" },
    { carrier: "UPS", category: "派送状态", en: "Left at front door.", zh: "已放置于前门。" },
    { carrier: "UPS", category: "派送状态", en: "Delivered to a UPS Access Point.", zh: "已送达UPS自提点。" },
    { carrier: "UPS", category: "派送状态", en: "The package was left with a neighbor.", zh: "包裹已交给邻居。" },
    // UPS - 运输途中
    { carrier: "UPS", category: "运输途中", en: "In transit.", zh: "运输途中。" },
    { carrier: "UPS", category: "运输途中", en: "Departed from facility.", zh: "已离开处理中心。" },
    { carrier: "UPS", category: "运输途中", en: "Arrived at facility.", zh: "已到达处理中心。" },
    { carrier: "UPS", category: "运输途中", en: "Package is in transit to the destination.", zh: "包裹正在运往目的地。" },
    { carrier: "UPS", category: "运输途中", en: "Shipment has departed origin country.", zh: "货物已离开发件国。" },
    { carrier: "UPS", category: "运输途中", en: "Origin Scan.", zh: "始发地扫描。" },
    { carrier: "UPS", category: "运输途中", en: "Destination Scan.", zh: "目的地扫描。" },
    { carrier: "UPS", category: "运输途中", en: "Import Scan.", zh: "进口扫描。" },
    { carrier: "UPS", category: "运输途中", en: "Export Scan.", zh: "出口扫描。" },
    // UPS - 异常状态
    { carrier: "UPS", category: "异常状态", en: "Exception: Address correction needed.", zh: "异常：需要更正地址。" },
    { carrier: "UPS", category: "异常状态", en: "Package is damaged.", zh: "包裹已损坏。" },
    { carrier: "UPS", category: "异常状态", en: "Returned to sender.", zh: "已退回发件人。" },
    { carrier: "UPS", category: "异常状态", en: "Shipment is on hold.", zh: "货物被扣留。" },
    { carrier: "UPS", category: "异常状态", en: "Shipper requested that this package be returned.", zh: "发件人要求退回此包裹。" },
    { carrier: "UPS", category: "异常状态", en: "The address is incomplete or incorrect.", zh: "地址不完整或不正确。" },
    { carrier: "UPS", category: "异常状态", en: "A late flight has caused a delay. We will update the delivery date as soon as possible.", zh: "航班延误导致延迟，我们将尽快更新派送日期。" },
    // UPS - 清关/政府机构
    { carrier: "UPS", category: "清关相关", en: "Your package has been released by the government agency.", zh: "您的包裹已被政府机构放行。" },
    { carrier: "UPS", category: "清关相关", en: "Your package is pending release from a Government Agency. Once they release it, your package will be on its way.", zh: "您的包裹正在等待政府机构放行，放行后将继续运送。" },
    { carrier: "UPS", category: "清关相关", en: "A Government Agency is conducting a document inspection. We'll notify the receiver or sender if information is needed.", zh: "政府机构正在进行文件检查，如需更多信息将通知收件人或发件人。" },
    // UPS - 取件/收件
    { carrier: "UPS", category: "取件/收件", en: "Shipper created a label, UPS has not received the package yet.", zh: "发件人已创建标签，UPS尚未收到包裹。" },
    // UPS - 付款/拒收
    { carrier: "UPS", category: "派送状态", en: "We tried to deliver the package, but were unable to receive payment. A second attempt will be made the next business day.", zh: "我们尝试派送包裹，但无法收到付款。将在下一个工作日进行第二次尝试。" },
    { carrier: "UPS", category: "派送状态", en: "The driver was not able to receive payment. A final attempt will be made the next business day.", zh: "司机无法收到付款。将在下一个工作日进行最后一次尝试。" },
    { carrier: "UPS", category: "派送状态", en: "Out For Delivery Today", zh: "今日派送中" },
    { carrier: "UPS", category: "派送状态", en: "We missed you again. A final attempt will be made the next business day.", zh: "我们再次错过您。将在下一个工作日进行最后一次尝试。" },
    { carrier: "UPS", category: "拒收相关", en: "The receiver does not want the product and refused the delivery.", zh: "收件人不想要该产品并拒绝签收。" },
    { carrier: "UPS", category: "拒收相关", en: "The receiver refused the delivery. UPS will contact the sender for further instructions.", zh: "收件人拒绝签收。UPS将联系发件人获取进一步指示。" },
    { carrier: "UPS", category: "拒收相关", en: "Delivery change was requested for this package. / The package will be returned to the sender.", zh: "此包裹已申请更改派送。/包裹将退回给发件人。" },
    { carrier: "UPS", category: "运输途中", en: "Your package is in transit. We're updating plans to schedule your delivery. / The package will be forwarded to a UPS facility in the destination city.", zh: "您的包裹正在运输中。我们正在更新派送计划。/包裹将转运至目的地城市的UPS设施。" },
    { carrier: "UPS", category: "异常状态", en: "Due to weather, your package is delayed by one business day.", zh: "由于天气原因，您的包裹延误一个工作日。" },
    { carrier: "UPS", category: "清关相关", en: "Your package has cleared customs and is on the way.", zh: "您的包裹已清关，正在派送途中。" },
    { carrier: "UPS", category: "关税/税费", en: "Import charges are due for this package. Select Pay Now (where available) or pay at delivery.", zh: "此包裹需支付进口费用。请选择立即支付（如可用）或派送时支付。" },
    { carrier: "UPS", category: "清关相关", en: "The package is at the clearing agency awaiting final release.", zh: "包裹在清关机构等待最终放行。" },
    { carrier: "UPS", category: "清关相关", en: "The parcel is in a secure facility pending clearance or resolution.", zh: "包裹在安全设施中等待清关或问题解决。" },
    { carrier: "UPS", category: "派送状态", en: "The delivery date will be provided as soon as possible.", zh: "派送日期将尽快提供。" },
    { carrier: "UPS", category: "揽收状态", en: "Hong Kong, Shipper created a label, UPS has not received the package yet.", zh: "香港，发件人已创建标签，UPS尚未收到包裹。" },
    // DHL - 常见状态
    { carrier: "DHL", category: "取件/收件", en: "Shipment picked up.", zh: "货物已取件。" },
    { carrier: "DHL", category: "取件/收件", en: "Shipment information received.", zh: "已收到货物信息。" },
    { carrier: "DHL", category: "清关相关", en: "Clearance processing.", zh: "清关处理中。" },
    { carrier: "DHL", category: "清关相关", en: "Customs clearance status updated.", zh: "清关状态已更新。" },
    { carrier: "DHL", category: "清关相关", en: "Customs clearance status updated. Note - The Customs clearance process may start while the shipment is in transit to the destination.", zh: "清关状态已更新。备注：清关流程可能在货物运往目的地途中就已开始。" },
    { carrier: "DHL", category: "清关相关", en: "Further Details - Shipment has been given a release status by Customs. Next Steps - Unless there is an adhoc physical examination or a stop by another regulatory authority the shipment will proceed to DHL delivery facility. Please continue to monitor the progress online.", zh: "详细信息：货物已获得海关放行状态。后续步骤：除非有临时的实物检查或其他监管部门的拦截，否则货物将继续运往DHL配送设施。请继续在线跟踪进度。" },
    { carrier: "DHL", category: "清关相关", en: "Customs clearance completed.", zh: "清关完成。" },
    { carrier: "DHL", category: "清关相关", en: "Held at customs.", zh: "海关扣留中。" },
    { carrier: "DHL", category: "清关相关", en: "Shipment cannot be cleared and permission to re-export back to origin is available. Return entry is being processed by clearance.", zh: "货物无法清关，可申请退运至始发地。退运手续正在清关处理中。" },
    { carrier: "DHL", category: "清关相关", en: "An RT checkpoint with the new DHL Airwaybill used to return the shipment will be created when the goods are cleared to re-export.", zh: "当货物获准退运时，将使用新的DHL运单号创建RT检查点。" },
    { carrier: "DHL", category: "费用相关", en: "Payment is received and recorded for shipment related fees.", zh: "已收到并记录货物相关费用的付款。" },
    { carrier: "DHL", category: "费用相关", en: "On hold awaiting for payment of shipment related fees.", zh: "等待支付货物相关费用，暂停中。" },
    { carrier: "DHL", category: "派送状态", en: "With delivery courier.", zh: "快递员配送中。" },
    { carrier: "DHL", category: "派送状态", en: "Delivered - Signed for by.", zh: "已签收 - 签收人：" },
    { carrier: "DHL", category: "派送状态", en: "Delivery attempted - no one home.", zh: "尝试派送 - 无人在家。" },
    { carrier: "DHL", category: "运输途中", en: "Processed at facility.", zh: "在设施处理中。" },
    { carrier: "DHL", category: "运输途中", en: "Departed facility.", zh: "已离开设施。" },
    { carrier: "DHL", category: "运输途中", en: "Arrived at delivery facility.", zh: "已到达派送设施。" },
    { carrier: "DHL", category: "运输途中", en: "In transit to destination.", zh: "运往目的地途中。" },
    { carrier: "DHL", category: "异常状态", en: "Shipment is returned due to consignee name that shows on waybill has potential compliance risk.", zh: "由于运单上的收件人名称存在潜在合规风险，货物已被退回。（备注：此为DHL黑名单客户）" },
    { carrier: "DHL", category: "运输途中", en: "A trusted third-party vendor is on the way with your package.", zh: "可信的第三方供应商正在运送您的包裹。" },
    // FedEx - 常见状态
    { carrier: "FedEx", category: "取件/收件", en: "Picked up.", zh: "已取件。" },
    { carrier: "FedEx", category: "取件/收件", en: "Shipment information sent to FedEx.", zh: "货物信息已发送至FedEx。" },
    { carrier: "FedEx", category: "运输途中", en: "In transit.", zh: "运输途中。" },
    { carrier: "FedEx", category: "运输途中", en: "At destination sort facility.", zh: "在目的地分拣中心。" },
    { carrier: "FedEx", category: "运输途中", en: "At local FedEx facility.", zh: "在当地FedEx设施。" },
    { carrier: "FedEx", category: "运输途中", en: "Departed FedEx location.", zh: "已离开FedEx站点。" },
    { carrier: "FedEx", category: "运输途中", en: "Arrived at FedEx location.", zh: "已到达FedEx站点。" },
    { carrier: "FedEx", category: "派送状态", en: "On FedEx vehicle for delivery.", zh: "在FedEx派送车辆上。" },
    { carrier: "FedEx", category: "派送状态", en: "Delivered.", zh: "已送达。" },
    { carrier: "FedEx", category: "派送状态", en: "Delivery exception.", zh: "派送异常。" },
    { carrier: "FedEx", category: "派送状态", en: "Customer not available or business closed.", zh: "客户不在或商户已关门。" },
    { carrier: "FedEx", category: "派送状态", en: "Delivery exception Incorrect address - Apartment/Suite number.", zh: "派送异常 - 地址错误：公寓/套房号码不正确。" },
    { carrier: "FedEx", category: "费用相关", en: "Held, unable to collect payment.", zh: "暂扣中，无法收取费用。" },
    { carrier: "FedEx", category: "清关相关", en: "International shipment release - Import.", zh: "国际货物放行 - 进口。" },
    { carrier: "FedEx", category: "清关相关", en: "International shipment release - Export.", zh: "国际货物放行 - 出口。" },
    { carrier: "FedEx", category: "清关相关", en: "In transit - Clearance in progress.", zh: "运输中 - 清关进行中。" },
    { carrier: "FedEx", category: "清关相关", en: "Clearance delay - Import.", zh: "清关延迟 - 进口。" },
    { carrier: "FedEx", category: "清关相关", en: "Clearance delay - Import Shipment requires importer's registration/identification number for clearance. (Examples include EIN, SSN, VAT, GST, RFC, etc.)", zh: "清关延迟 - 进口货物清关需要进口商的注册/身份识别号。（例如：EIN、SSN、VAT、GST、RFC等）" },
    // FedEx - 异常/工单
    { carrier: "FedEx", category: "异常状态", en: "The barcode label on this package was unreadable. We will replace it and update the delivery date.", zh: "此包裹的条形码标签无法读取，我们将更换并更新派送日期。" },
    { carrier: "FedEx", category: "工单处理", en: "Support ticket in progress.", zh: "支持工单处理中。" },
    { carrier: "FedEx", category: "工单处理", en: "A ticket has been created for this shipment. We'll contact the person who created the ticket when it's updated.", zh: "已为此货物创建工单，工单更新时我们会联系创建人。" },
    { carrier: "FedEx", category: "清关相关", en: "Goods are subject to regulatory review. Recommended action: No action required at this time.", zh: "货物正在接受监管审查。建议操作：目前无需任何操作。" },
    { carrier: "FedEx", category: "运输途中", en: "On the way.", zh: "在途中。" },
    { carrier: "FedEx", category: "运输途中", en: "A trusted third-party vendor is on the way with your package.", zh: "可信的第三方供应商正在运送您的包裹。" },
    { carrier: "FedEx", category: "异常状态", en: "Delay.", zh: "延迟。" },
    { carrier: "FedEx", category: "异常状态", en: "Package at station, arrived after courier dispatch.", zh: "包裹到达站点时快递员已出发派送。" }
];

let tsCurrentCarrierFilter = 'all';

function initTrackingStatusPage() {
    const searchInput = document.getElementById('statusSearchInput');
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    if (!searchInput) return;
    
    // 绑定搜索事件
    searchInput.addEventListener('input', function() {
        renderTrackingStatusList(this.value, tsCurrentCarrierFilter);
    });
    
    // 绑定筛选按钮事件
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tsCurrentCarrierFilter = this.getAttribute('data-carrier');
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const searchQuery = searchInput.value;
            renderTrackingStatusList(searchQuery, tsCurrentCarrierFilter);
        });
    });
    
    // 初始渲染
    renderTrackingStatusList('', 'all');
}

function renderTrackingStatusList(query = '', carrier = 'all') {
    const listContainer = document.getElementById('trackingStatusList');
    const countSpan = document.getElementById('statusCount');
    
    if (!listContainer || !countSpan) return;
    
    const lowerQuery = query.toLowerCase().trim();
    
    let filteredData = trackingStatusData.filter(item => {
        const carrierMatch = carrier === 'all' || item.carrier === carrier;
        const textMatch = !lowerQuery || 
            item.en.toLowerCase().includes(lowerQuery) || 
            item.zh.includes(lowerQuery) ||
            item.category.includes(lowerQuery);
        return carrierMatch && textMatch;
    });
    
    countSpan.textContent = filteredData.length;
    
    if (filteredData.length === 0) {
        listContainer.innerHTML = '<div class="no-status-found">未找到匹配的运输状态</div>';
        return;
    }
    
    const html = filteredData.map(item => {
        let highlightEn = item.en;
        let highlightZh = item.zh;
        if (lowerQuery) {
            const escapedQuery = lowerQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            highlightEn = item.en.replace(new RegExp('(' + escapedQuery + ')', 'gi'), '<mark>$1</mark>');
            highlightZh = item.zh.replace(new RegExp('(' + lowerQuery + ')', 'g'), '<mark>$1</mark>');
        }
        return `<div class="status-item">
            <span class="carrier-badge">${item.carrier}</span>
            <div class="status-text">
                <span class="status-en">${highlightEn}</span>
                <span class="status-divider">—</span>
                <span class="status-zh">${highlightZh}</span>
            </div>
        </div>`;
    }).join('');
    
    listContainer.innerHTML = html;
}