// ===== 货代知识库数据 =====
const knowledgeBase = {
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
const searchModal = document.getElementById('searchModal');
const modalSearchInput = document.getElementById('modalSearchInput');

// ===== 当前状态 =====
let currentArticle = null;

// ===== 浏览量管理 =====
function getViewCount(articleTitle) {
    const views = JSON.parse(localStorage.getItem('articleViews') || '{}');
    return views[articleTitle] || 0;
}

function incrementViewCount(articleTitle) {
    const views = JSON.parse(localStorage.getItem('articleViews') || '{}');
    views[articleTitle] = (views[articleTitle] || 0) + 1;
    localStorage.setItem('articleViews', JSON.stringify(views));
    return views[articleTitle];
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
    // 顶部搜索框
    searchInput.addEventListener('focus', () => {
        openSearchModal();
    });
    
    // 快捷键打开搜索
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearchModal();
        }
        if (e.key === 'Escape') {
            closeSearchModal();
        }
    });
    
    // 搜索弹窗
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            closeSearchModal();
        }
    });
    
    // 搜索输入
    modalSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length > 0) {
            performSearch(query);
        } else {
            document.getElementById('modalSearchResults').innerHTML = '';
        }
    });
}

function openSearchModal() {
    searchModal.classList.add('active');
    modalSearchInput.focus();
}

function closeSearchModal() {
    searchModal.classList.remove('active');
    modalSearchInput.value = '';
    document.getElementById('modalSearchResults').innerHTML = '';
}

function performSearch(query) {
    const results = searchKnowledge(query);
    const resultsContainer = document.getElementById('modalSearchResults');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--c-text-mute);">未找到相关结果</div>';
        return;
    }
    
    resultsContainer.innerHTML = results.slice(0, 10).map(result => `
        <div class="modal-result-item" onclick="selectSearchResult('${result.article.title}')">
            <span class="modal-result-icon">📄</span>
            <div class="modal-result-text">
                <div class="modal-result-title">${result.article.title}</div>
                <div class="modal-result-path">${result.categoryTitle} ${result.subcategoryTitle ? '> ' + result.subcategoryTitle : ''}</div>
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
    closeSearchModal();
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

// ===== 显示文章 =====
function showArticle(title) {
    const article = findArticle(title);
    if (!article) return;
    
    currentArticle = article;
    
    // 增加浏览量
    const viewCount = incrementViewCount(title);
    
    // 隐藏首页，显示文章
    homeContent.style.display = 'none';
    searchResults.style.display = 'none';
    articleContent.style.display = 'block';
    
    // 填充内容
    document.getElementById('articleTitle').textContent = article.data.title;
    document.getElementById('articleBody').innerHTML = article.data.content;
    
    // 面包屑
    document.getElementById('breadcrumb').innerHTML = `
        <a href="#" onclick="showHome()">首页</a>
        <span class="separator">/</span>
        <span>${article.categoryTitle}</span>
        ${article.subcategoryTitle ? `<span class="separator">/</span><span>${article.subcategoryTitle}</span>` : ''}
    `;
    
    // 标签
    document.getElementById('articleTags').innerHTML = article.data.keywords.map(k => 
        `<span class="article-tag">${k}</span>`
    ).join('');
    
    // 元信息 - 使用真实浏览量
    document.getElementById('articleMeta').innerHTML = `👁️ ${viewCount} 次阅读`;
    
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

console.log('🚀 货代知识库已加载完成！');
