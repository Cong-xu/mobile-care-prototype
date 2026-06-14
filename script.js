const state = {
  currentRole: "customerService",
  selectedCaseId: "CS-260528-101",
  selectedOrderId: "WO-260528-001",
  pendingConvertCaseId: null,
  assignment: "direct",
  caseFilter: "全部",
  cases: [
    {
      id: "CS-260528-101",
      type: "售后",
      customer: "林可",
      phone: "138 0000 9527",
      backupPhone: "021-6200 8899",
      orderNo: "SO-20260218-0098",
      address: "上海市徐汇区虹桥路 88 号 12F",
      device: "Aster X Pro",
      sn: "AXP2605280098",
      spec: "钛灰 / 512GB",
      osVersion: "OS 18.2.1",
      channel: "官方商城",
      purchaseDate: "2026-02-18",
      source: "400 热线",
      level: "高价值用户",
      faultCategory: "电池 / 充电",
      warranty: "保内",
      request: "检测维修",
      desc: "充电发热明显，充满电耗时过长。",
      status: "待转工单"
    },
    {
      id: "CS-260528-102",
      type: "投诉",
      customer: "顾辰",
      phone: "139 1111 8671",
      backupPhone: "021-5899 1024",
      orderNo: "SO-20251103-1031",
      address: "上海市浦东新区张江路 889 号",
      device: "Nova M2",
      sn: "NM22605281031",
      spec: "月岩黑 / 256GB",
      osVersion: "OS 17.6",
      channel: "线下门店",
      purchaseDate: "2025-11-03",
      source: "线下门店",
      level: "普通用户",
      faultCategory: "服务体验",
      warranty: "待校验",
      request: "解释/回访",
      desc: "门店承诺维修时间未兑现，客户要求回访。",
      status: "客服跟进"
    },
    {
      id: "CS-260528-103",
      type: "咨询",
      customer: "周宁",
      phone: "136 2222 5077",
      backupPhone: "021-6200 5077",
      orderNo: "SO-20260109-0031",
      address: "上海市静安区南京西路 199 号",
      device: "Aster Mini",
      sn: "AM2605280031",
      spec: "冰川银 / 128GB",
      osVersion: "OS 18.0",
      channel: "App 在线客服",
      purchaseDate: "2026-01-09",
      source: "App 在线客服",
      level: "会员用户",
      faultCategory: "权益咨询",
      warranty: "延保",
      request: "保养清洁",
      desc: "咨询延保权益与保养服务可用门店。",
      status: "已答复"
    }
  ],
  customerServiceReviews: [
    {
      id: "CSR-260528-018",
      caseId: "CS-260528-103",
      customer: "周宁",
      phone: "136 2222 5077",
      channel: "App 在线客服",
      agent: "林薇",
      type: "咨询答复",
      score: "4.7",
      text: "客服解释延保权益很清楚，也把附近门店地址发给我了。",
      tags: ["解释清楚", "响应及时", "信息完整"]
    },
    {
      id: "CSR-260528-011",
      caseId: "CS-260528-102",
      customer: "顾辰",
      phone: "139 1111 8671",
      channel: "电话回访",
      agent: "林薇",
      type: "投诉回访",
      score: "4.5",
      text: "回访有给到明确解释和后续处理时间，希望门店以后能提前告知。",
      tags: ["主动回访", "处理明确", "仍需跟进"]
    },
    {
      id: "CSR-260527-006",
      caseId: "CS-260527-089",
      customer: "许然",
      phone: "136 7755 1108",
      channel: "400 热线",
      agent: "林薇",
      type: "售前解释",
      score: "4.9",
      text: "客服很快帮我确认了权益和处理路径，沟通比较顺畅。",
      tags: ["态度友好", "路径清晰", "效率高"]
    }
  ],
  orders: [
    {
      id: "WO-260528-001",
      originType: "案例转工单",
      sourceRef: "CS-260528-101",
      orderNo: "SO-20260218-0098",
      customer: "林可",
      phone: "138 0000 9527",
      device: "Aster X Pro",
      sn: "AXP2605280098",
      mode: "上门服务",
      type: "维修",
      appointment: "2026-05-29 10:00",
      timeSlot: "13:00 - 18:00",
      address: "上海市徐汇区虹桥路 88 号 12F",
      region: "上海南区 / 徐汇",
      priority: "高",
      serviceSla: "24 小时内上门/接待",
      feeOwner: "保内免费",
      estimatedPart: "电池模组 / USB-C 接口件",
      status: "待派工",
      request: "检测维修",
      warranty: "保内",
      provider: "",
      worker: "",
      fault: "",
      part: "",
      review: null
    },
    {
      id: "WO-260528-006",
      originType: "案例转工单",
      sourceRef: "CS-260528-108",
      orderNo: "SO-20260218-0098",
      customer: "沈知",
      phone: "138 5520 7712",
      device: "Aster X Pro",
      sn: "AXP2605280108",
      mode: "上门服务",
      type: "维修",
      appointment: "2026-05-29 11:30",
      timeSlot: "13:00 - 18:00",
      address: "上海市徐汇区漕溪北路 45 号",
      region: "上海南区 / 徐汇",
      priority: "高",
      serviceSla: "4 小时内响应",
      feeOwner: "保内免费",
      estimatedPart: "USB-C 接口件 / 电池模组",
      status: "待派工",
      request: "检测维修",
      warranty: "保内",
      provider: "迅捷服务上海中心",
      worker: "",
      fault: "",
      part: "",
      orderDesc: "客户反馈充电线需要反复插拔才能识别，近期出现发热。",
      review: null
    },
    {
      id: "WO-260528-007",
      originType: "手工创建工单",
      sourceRef: "线下到店",
      orderNo: "SO-OFFLINE-260615",
      customer: "陆乔",
      phone: "139 6200 3381",
      device: "Nova M2",
      sn: "NM2260528007",
      mode: "到店服务",
      type: "保养",
      appointment: "2026-05-29 14:00",
      timeSlot: "13:00 - 18:00",
      address: "上海徐家汇旗舰店",
      region: "上海南区 / 徐汇",
      priority: "中",
      serviceSla: "按预约时间执行",
      feeOwner: "客户承担",
      estimatedPart: "无备件 / 清洁耗材",
      status: "待派工",
      request: "保养清洁",
      warranty: "延保",
      provider: "自营服务团队",
      worker: "",
      fault: "",
      part: "",
      orderDesc: "客户到店咨询折叠屏清洁保养，需要安排具备外观保养经验的服务人员。",
      review: null
    },
    {
      id: "WO-260528-008",
      originType: "案例转工单",
      sourceRef: "CS-260528-116",
      orderNo: "SO-20260109-0031",
      customer: "何澜",
      phone: "136 9088 4210",
      device: "Aster Mini",
      sn: "AM2605280116",
      mode: "上门服务",
      type: "换货",
      appointment: "2026-05-29 15:00",
      timeSlot: "13:00 - 18:00",
      address: "上海市静安区愚园路 288 号",
      region: "上海中区 / 静安",
      priority: "高",
      serviceSla: "24 小时内上门/接待",
      feeOwner: "厂家承担",
      estimatedPart: "整机换货",
      status: "待派工",
      request: "换货处理",
      warranty: "保内",
      provider: "北区旗舰服务中心",
      worker: "",
      fault: "",
      part: "",
      orderDesc: "客户反馈新机开箱后屏幕亮线，客服已初步判定需现场核验换货条件。",
      review: null
    },
    {
      id: "WO-260528-002",
      originType: "手工创建工单",
      sourceRef: "手工创建",
      orderNo: "SO-OFFLINE-260614",
      customer: "孟怡",
      phone: "137 8899 2234",
      device: "Fold Z",
      sn: "FZ2605280288",
      mode: "到店服务",
      type: "保养",
      appointment: "2026-05-28 16:30",
      timeSlot: "13:00 - 18:00",
      address: "上海徐家汇旗舰店",
      region: "上海南区 / 徐汇",
      priority: "中",
      serviceSla: "按预约时间执行",
      feeOwner: "客户承担",
      estimatedPart: "无备件 / 清洁耗材",
      status: "服务中",
      request: "保养清洁",
      warranty: "延保",
      provider: "自营服务团队",
      worker: "赵雅 / 屏幕与外观",
      fault: "外观检查与清洁保养",
      part: "无备件",
      review: null
    },
    {
      id: "WO-260528-011",
      originType: "案例转工单",
      sourceRef: "CS-260528-121",
      orderNo: "SO-20260218-0098",
      customer: "秦越",
      phone: "135 7788 9042",
      device: "Aster X Pro",
      sn: "AXP2605280121",
      mode: "上门服务",
      type: "维修",
      appointment: "2026-05-28 17:00",
      timeSlot: "16:00 - 20:00",
      address: "上海市徐汇区宜山路 700 号",
      region: "上海南区 / 徐汇",
      priority: "高",
      serviceSla: "4 小时内响应",
      feeOwner: "保内免费",
      estimatedPart: "电池模组 / USB-C 接口件",
      status: "服务中",
      request: "检测维修",
      warranty: "保内",
      provider: "迅捷服务上海中心",
      worker: "周明 / 电池与主板",
      fault: "充电慢并伴随发热",
      part: "电池模组",
      scanImei: "AXP2605280121",
      imeiVerified: true,
      servicePhotos: "到场定位照片、设备外观照片、充电检测照片。",
      customerConfirm: "客户已确认实机一致和数据备份状态",
      orderDesc: "客户反馈充电速度明显变慢，需现场检测电池健康度和接口状态。",
      review: null
    },
    {
      id: "WO-260528-012",
      originType: "手工创建工单",
      sourceRef: "线下到店",
      orderNo: "SO-OFFLINE-260616",
      customer: "唐棠",
      phone: "137 3310 6658",
      device: "Fold Z",
      sn: "FZ2605280120",
      mode: "到店服务",
      type: "维修",
      appointment: "2026-05-28 18:00",
      timeSlot: "18:00 - 20:00",
      address: "上海徐家汇旗舰店",
      region: "上海南区 / 徐汇",
      priority: "中",
      serviceSla: "按预约时间执行",
      feeOwner: "待判责",
      estimatedPart: "屏幕组件 / 清洁耗材",
      status: "服务中",
      request: "检测维修",
      warranty: "延保",
      provider: "自营服务团队",
      worker: "赵雅 / 屏幕与外观",
      fault: "屏幕边缘触控不灵敏",
      part: "屏幕组件",
      scanImei: "FZ2605280120",
      imeiVerified: true,
      servicePhotos: "到店接待照片、屏幕外观照片、触控测试照片。",
      customerConfirm: "客户确认现场检测方案",
      orderDesc: "客户到店反馈屏幕边缘触控异常，需要检测屏幕与外观状态。",
      review: null
    },
    {
      id: "WO-260528-013",
      originType: "案例转工单",
      sourceRef: "CS-260528-130",
      orderNo: "SO-20251212-0079",
      customer: "宋遥",
      phone: "136 5571 2308",
      device: "Aster X",
      sn: "AX2605280130",
      mode: "上门服务",
      type: "退货",
      appointment: "2026-05-28 19:00",
      timeSlot: "18:00 - 20:00",
      address: "上海市静安区南京西路 1266 号",
      region: "上海中区 / 静安",
      priority: "中",
      serviceSla: "48 小时内完成处理",
      feeOwner: "厂家承担",
      estimatedPart: "无备件",
      status: "服务中",
      request: "退货退款",
      warranty: "保内",
      provider: "北区旗舰服务中心",
      worker: "韩川 / 上门综合",
      fault: "退货验机待完成",
      part: "无备件",
      scanImei: "AX2605280130",
      imeiVerified: true,
      servicePhotos: "到场定位照片、设备外观照片、附件核对照片。",
      customerConfirm: "客户确认退货检测与附件核对",
      orderDesc: "客户申请退货，需上门完成设备外观、激活状态和附件齐套核验。",
      review: null
    },
    {
      id: "WO-260527-088",
      originType: "案例转工单",
      sourceRef: "CS-260527-079",
      orderNo: "SO-20251212-0079",
      customer: "许然",
      phone: "136 7755 1108",
      device: "Aster X",
      sn: "AX2605270079",
      mode: "上门服务",
      type: "换货",
      appointment: "2026-05-27 14:00",
      timeSlot: "13:00 - 18:00",
      address: "上海市静安区南京西路 199 号",
      region: "上海中区 / 静安",
      priority: "高",
      serviceSla: "4 小时内响应",
      feeOwner: "厂家承担",
      estimatedPart: "整机换货",
      status: "已关闭",
      request: "换货处理",
      warranty: "保内",
      provider: "迅捷服务上海中心",
      worker: "韩川 / 上门综合",
      fault: "屏幕触控间歇失灵",
      part: "整机换货",
      review: {
        score: "4.8",
        text: "工程师准时上门，解释很清楚，更换后充电速度恢复正常。",
        tags: ["响应及时", "专业可靠", "备件充足"]
      }
    },
    {
      id: "WO-260527-091",
      originType: "手工创建工单",
      sourceRef: "手工创建",
      orderNo: "SO-OFFLINE-260614",
      customer: "孟怡",
      phone: "137 8899 2234",
      device: "Fold Z",
      sn: "FZ2605270910",
      mode: "到店服务",
      type: "保养",
      appointment: "2026-05-27 11:00",
      timeSlot: "09:00 - 12:00",
      address: "上海徐家汇旗舰店",
      region: "上海南区 / 徐汇",
      priority: "中",
      serviceSla: "按预约时间执行",
      feeOwner: "客户承担",
      estimatedPart: "清洁耗材",
      status: "已关闭",
      request: "保养清洁",
      warranty: "延保",
      provider: "自营服务团队",
      worker: "赵雅 / 屏幕与外观",
      fault: "铰链清洁与外观检查",
      part: "无备件",
      review: {
        score: "4.9",
        text: "门店接待很快，保养过程透明，工程师提醒了后续使用注意事项。",
        tags: ["过程透明", "门店体验好", "说明清楚"]
      }
    },
    {
      id: "WO-260526-076",
      originType: "案例转工单",
      sourceRef: "CS-260526-044",
      orderNo: "SO-20251103-1031",
      customer: "顾辰",
      phone: "139 1111 8671",
      device: "Nova M2",
      sn: "NM2260526076",
      mode: "上门服务",
      type: "维修",
      appointment: "2026-05-26 15:30",
      timeSlot: "13:00 - 18:00",
      address: "上海市浦东新区张江路 889 号",
      region: "上海东区 / 浦东",
      priority: "高",
      serviceSla: "24 小时内上门/接待",
      feeOwner: "保内免费",
      estimatedPart: "USB-C 接口件",
      status: "已关闭",
      request: "检测维修",
      warranty: "保内",
      provider: "星环授权服务商",
      worker: "周明 / 电池与主板",
      fault: "接口接触不良",
      part: "USB-C 接口件",
      review: {
        score: "4.6",
        text: "预约时间有提前确认，维修完成后当场测试，整体满意。",
        tags: ["预约确认", "现场测试", "维修有效"]
      }
    },
    {
      id: "WO-260525-058",
      originType: "案例转工单",
      sourceRef: "CS-260525-022",
      orderNo: "SO-20260109-0031",
      customer: "周宁",
      phone: "136 2222 5077",
      device: "Aster Mini",
      sn: "AM2605250058",
      mode: "到店服务",
      type: "退货",
      appointment: "2026-05-25 14:00",
      timeSlot: "13:00 - 18:00",
      address: "上海静安服务中心",
      region: "上海中区 / 静安",
      priority: "中",
      serviceSla: "48 小时内完成处理",
      feeOwner: "厂家承担",
      estimatedPart: "无备件",
      status: "已关闭",
      request: "退货退款",
      warranty: "保内",
      provider: "北区旗舰服务中心",
      worker: "韩川 / 上门综合",
      fault: "退货检测完成",
      part: "无备件",
      review: {
        score: "4.4",
        text: "处理流程比较顺利，希望退款进度通知能再及时一些。",
        tags: ["流程顺利", "通知待优化", "态度友好"]
      }
    }
  ]
};

const titles = {
  dashboard: ["工作台", "服务响应总览"],
  cases: ["客服受理", "案例详情"],
  casesList: ["客服受理", "案例列表"],
  knowledge: ["客服辅助", "知识库"],
  followups: ["客服闭环", "回访闭环"],
  orders: ["工单中心", "工单详情"],
  ordersList: ["工单中心", "工单列表"],
  dispatch: ["调度台", "工单调度"],
  staff: ["资源管理", "服务员工管理"],
  executionList: ["服务现场", "服务执行"],
  execution: ["服务现场", "服务执行详情"],
  reviews: ["闭环管理", "评价查看"]
};

const deviceCatalog = {
  AXP2605280098: {
    device: "Aster X Pro",
    spec: "钛灰 / 512GB",
    osVersion: "OS 18.2.1",
    channel: "官方商城",
    purchaseDate: "2026-02-18",
    warranty: "保内",
    customerLevel: "高价值用户"
  },
  NM22605281031: {
    device: "Nova M2",
    spec: "月岩黑 / 256GB",
    osVersion: "OS 17.6",
    channel: "线下门店",
    purchaseDate: "2025-11-03",
    warranty: "待校验",
    customerLevel: "普通用户"
  },
  AM2605280031: {
    device: "Aster Mini",
    spec: "冰川银 / 128GB",
    osVersion: "OS 18.0",
    channel: "官方商城",
    purchaseDate: "2026-01-09",
    warranty: "延保",
    customerLevel: "会员用户"
  },
  FZ2605280288: {
    device: "Fold Z",
    spec: "星河银 / 512GB",
    osVersion: "OS 18.1",
    channel: "上海徐家汇旗舰店",
    purchaseDate: "2026-05-28",
    warranty: "延保",
    customerLevel: "会员用户"
  },
  AX2605270079: {
    device: "Aster X",
    spec: "曜石黑 / 256GB",
    osVersion: "OS 18.1",
    channel: "线下门店",
    purchaseDate: "2025-12-12",
    warranty: "保内",
    customerLevel: "高价值用户"
  }
};

const orderCatalog = {
  "SO-20260218-0098": {
    customer: "林可",
    phone: "138 0000 9527",
    backupPhone: "021-6200 8899",
    address: "上海市徐汇区虹桥路 88 号 12F",
    sn: "AXP2605280098"
  },
  "SO-20251103-1031": {
    customer: "顾辰",
    phone: "139 1111 8671",
    backupPhone: "021-5899 1024",
    address: "上海市浦东新区张江路 889 号",
    sn: "NM22605281031"
  },
  "SO-20260109-0031": {
    customer: "周宁",
    phone: "136 2222 5077",
    backupPhone: "021-6200 5077",
    address: "上海市静安区南京西路 199 号",
    sn: "AM2605280031"
  },
  "SO-OFFLINE-260614": {
    customer: "孟怡",
    phone: "137 8899 2234",
    backupPhone: "021-6200 6623",
    address: "上海徐家汇旗舰店",
    sn: "FZ2605280288"
  },
  "SO-20251212-0079": {
    customer: "许然",
    phone: "136 7755 1108",
    backupPhone: "021-6200 7799",
    address: "上海市静安区南京西路 199 号",
    sn: "AX2605270079"
  }
};

const providerDirectory = [
  {
    name: "迅捷服务上海中心",
    region: "上海南区 / 徐汇",
    keywords: ["徐汇", "虹桥路", "上海南区"],
    reason: "距离客户地址最近，支持上门维修、换货和保养。"
  },
  {
    name: "星环授权服务商",
    region: "上海东区 / 浦东",
    keywords: ["浦东", "张江"],
    reason: "覆盖浦东与张江，具备电池、主板和接口维修能力。"
  },
  {
    name: "北区旗舰服务中心",
    region: "上海中区 / 静安",
    keywords: ["静安", "南京西路"],
    reason: "覆盖静安商圈，支持到店服务和退换货检测。"
  }
];

const workerProfiles = [
  {
    name: "周明 / 电池与主板",
    skills: ["维修", "电池", "充电", "主板", "USB-C", "快充"],
    regions: ["上海南区", "徐汇"],
    parts: ["电池模组", "USB-C 接口件", "65W 充电器"],
    load: 3,
    capacity: 5,
    note: "电池与充电类工单经验更匹配"
  },
  {
    name: "赵雅 / 屏幕与外观",
    skills: ["保养", "屏幕", "外观", "清洁", "到店"],
    regions: ["上海南区", "徐汇"],
    parts: ["屏幕组件", "清洁耗材"],
    load: 4,
    capacity: 5,
    note: "到店保养和外观类服务更匹配"
  },
  {
    name: "韩川 / 上门综合",
    skills: ["上门", "换货", "退货", "综合", "维修"],
    regions: ["上海中区", "静安", "上海南区"],
    parts: ["整机换货", "USB-C 接口件"],
    load: 2,
    capacity: 4,
    note: "上门综合服务与急单支援更匹配"
  }
];

const knowledgeItems = [
  {
    id: "KB-001",
    question: "手机充电发热，保内可以免费维修吗？",
    category: "保修权益",
    count: 286,
    answer: "可以先安抚客户并说明：充电发热需要结合设备检测结果判断。如果设备在保内且无进液、摔落等人为损伤，符合保修条件的维修可以免费处理。建议先核验订单号和 IMEI/SN，再创建售后案例并安排检测。",
    tags: ["充电发热", "保内维修", "检测判责"]
  },
  {
    id: "KB-002",
    question: "换电池需要多少钱，多久可以完成？",
    category: "维修价格",
    count: 242,
    answer: "可以说明：电池费用会根据机型、权益状态和检测结论确定。若在保内且符合质量问题，通常可按保修处理；若保外或人为损伤，需要客户确认报价。到店通常可当天检测，是否当天完成取决于备件库存和排队情况。",
    tags: ["电池", "报价", "时效"]
  },
  {
    id: "KB-003",
    question: "附近哪里可以维修，能不能上门？",
    category: "服务方式",
    count: 219,
    answer: "可以回答：我们支持到店、上门和寄修等服务方式。请客户提供订单号或服务地址，系统会推荐最近服务商；若该区域支持上门，会在转服务工单时确认地址、预约时间和服务商。",
    tags: ["服务网点", "上门服务", "地址推荐"]
  },
  {
    id: "KB-004",
    question: "屏幕坏了能不能换货？",
    category: "换货政策",
    count: 184,
    answer: "可以说明：是否换货需要结合购买时间、权益政策和检测结果判断。若属于质量问题且符合换货条件，可以按换货流程处理；若存在人为损伤或超出政策范围，通常会进入维修或报价流程。",
    tags: ["屏幕", "换货", "政策判断"]
  },
  {
    id: "KB-005",
    question: "退货退款多久能到账？",
    category: "退货退款",
    count: 163,
    answer: "可以说明：退货退款需要先完成退货检测和附件核对，确认符合退货条件后进入退款流程。到账时间会受支付渠道影响，建议客户关注订单退款进度通知，如超过承诺时间可记录案例安排回访。",
    tags: ["退货", "退款进度", "回访"]
  },
  {
    id: "KB-006",
    question: "维修时手机数据会不会丢失？",
    category: "数据安全",
    count: 151,
    answer: "可以提醒客户：维修前建议先完成数据备份。涉及主板、系统重置、换机或返厂检测时，数据可能受到影响。客服应在案例中记录备份状态，并提醒工程师服务前再次确认。",
    tags: ["数据备份", "维修提醒", "客户确认"]
  },
  {
    id: "KB-007",
    question: "保养清洁是不是免费？",
    category: "保养服务",
    count: 128,
    answer: "可以说明：保养清洁是否免费取决于客户权益、活动政策和服务内容。若客户有延保、会员或活动权益，可按权益规则处理；否则可能需要客户承担费用，建议先核验订单和权益。",
    tags: ["保养", "延保权益", "费用"]
  },
  {
    id: "KB-008",
    question: "维修进度怎么查询？",
    category: "工单进度",
    count: 116,
    answer: "可以回答：客户可通过 App、短信通知或服务热线查询进度。客服可根据手机号、订单号或工单号查询当前状态，并同步预计完成时间；如超时或客户不满，应记录回访跟进。",
    tags: ["进度查询", "工单", "通知"]
  }
];

const engineerKnowledgeItems = [
  {
    id: "EKB-001",
    question: "扫码 IMEI 与服务单不一致，现场怎么处理？",
    category: "实机核验",
    count: 196,
    answer: "先暂停服务，核对客户订单、服务单、机身设置页与包装信息；确认不是同一台设备时，不得继续维修。需要联系服务商调度或客服重新核实工单，必要时变更服务单设备信息后再继续。",
    tags: ["IMEI核验", "暂停服务", "工单核实"]
  },
  {
    id: "EKB-002",
    question: "充电发热、充电慢应该怎么检测？",
    category: "电池 / 充电",
    count: 184,
    answer: "按顺序检查充电器和线缆、读取电池健康度、执行快充协议握手测试、检查 USB-C 接口松动和异物、记录温控压力测试结果。若电池健康度低或接口异常，应分别给出电池模组和接口件处理方案。",
    tags: ["充电慢", "电池健康度", "快充协议"]
  },
  {
    id: "EKB-003",
    question: "一个工单有多个故障，维修方案怎么写？",
    category: "维修方案",
    count: 163,
    answer: "每个故障都要单独写检测结论、根因判断和处理方案。建议按“故障现象 - 检测结果 - 处理动作 - 需用备件 - 质检项”的格式逐条记录，避免只写一个总方案导致质检无法追溯。",
    tags: ["多故障", "逐项方案", "质检追溯"]
  },
  {
    id: "EKB-004",
    question: "需要多个备件时如何申请？",
    category: "备件申请",
    count: 141,
    answer: "按备件逐项录入名称、编码、数量、序列号或批次、旧件处理方式，并确认库存和费用归属。更换前后需要拍照，旧件回收要在完工回传中标记清楚。",
    tags: ["多备件", "旧件回收", "库存确认"]
  },
  {
    id: "EKB-005",
    question: "维修前需要客户确认哪些内容？",
    category: "客户确认",
    count: 126,
    answer: "需要确认实机一致、外观状态、数据备份、维修方案、费用归属、预计耗时和旧件处理方式。涉及数据风险、返厂或保外收费时，应在服务说明里单独记录客户确认结果。",
    tags: ["客户确认", "数据备份", "费用归属"]
  },
  {
    id: "EKB-006",
    question: "完工回传照片需要哪些？",
    category: "完工回传",
    count: 118,
    answer: "建议包含到场定位、设备外观、扫码核验、故障检测结果、备件更换前后、旧件回收、完工测试和客户确认凭证。照片应能支撑质检复盘和售后争议处理。",
    tags: ["服务照片", "质检", "凭证"]
  }
];

const roleConfigs = {
  customerService: {
    label: "客服主管",
    shortLabel: "客服",
    profileName: "林薇",
    profileAvatar: "客",
    defaultView: "dashboard",
    allowedViews: ["dashboard", "casesList", "cases", "knowledge", "followups", "reviews"],
    scope: "客服聚焦案例受理、诉求判断、回访闭环与必要的售后案例转工单。",
    briefTitle: "客服工作焦点",
    briefTag: "案例受理",
    briefCards: [
      ["统一受理案例", "录入投诉、咨询、售后案例，确保客户信息、设备信息和问题描述完整。"],
      ["判断服务路径", "对售后案例判断是否需要转工单，对投诉与咨询安排回访或解释。"],
      ["回访关闭案例", "对无需转工单的咨询、投诉和解释类售后案例回访确认，确认后关闭案例。"]
    ],
    quickActions: [
      { id: "quickCaseBtn", label: "新建案例", view: "cases", hidden: true, primary: false },
      { id: "quickOrderBtn", label: "新建案例", view: "cases", hidden: false, primary: true }
    ]
  },
  serviceProvider: {
    label: "服务商调度",
    shortLabel: "服务商",
    profileName: "陈拓",
    profileAvatar: "商",
    defaultView: "dashboard",
    allowedViews: ["dashboard", "ordersList", "orders", "dispatch", "staff", "reviews"],
    scope: "服务商聚焦接单、派工、派单和服务资源调度，确保工单顺畅流转到服务人员。",
    briefTitle: "服务商工作重点",
    briefTag: "接单调度",
    briefCards: [
      ["查看工单池", "优先处理待调度和高优先级工单，核对服务方式、预约时间与区域归属。"],
      ["管理服务人员资源", "维护服务人员技能、认证、区域、排班和负载，为派工提供依据。"],
      ["跟进执行状态", "掌握服务中工单进展，必要时协调改约、换人或补件。"] 
    ],
    quickActions: [
      { id: "quickCaseBtn", label: "新建工单", view: "orders", hidden: true, primary: false },
      { id: "quickOrderBtn", label: "进入调度台", view: "dispatch", hidden: true, primary: true }
    ]
  },
  engineer: {
    label: "服务工程师",
    shortLabel: "工程师",
    profileName: "周明",
    profileAvatar: "工",
    defaultView: "dashboard",
    allowedViews: ["dashboard", "executionList", "execution", "knowledge"],
    scope: "工程师聚焦服务执行、实机核验、故障检测、维修方案、备件申请和完工回传。",
    briefTitle: "工程师工作重点",
    briefTag: "服务执行",
    briefCards: [
      ["处理待办工单", "查看已分配工单的预约、设备和故障背景，准备上门或到店服务。"],
      ["按流程执行服务", "先扫码核验 IMEI，再填写检测、维修方案、备件和完工回传信息。"],
      ["查询维修知识", "遇到复杂故障时使用工程师知识库和 AI 助手生成处理建议。"]
    ],
    quickActions: [
      { id: "quickCaseBtn", label: "我的工单", view: "executionList", hidden: true, primary: false },
      { id: "quickOrderBtn", label: "工程师知识库", view: "knowledge", hidden: true, primary: true }
    ]
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function setCallDrawer(open) {
  const drawer = $("#callDrawer");
  const tab = $("#callDrawerTab");
  if (!drawer || !tab) return;
  drawer.classList.toggle("open", open);
  tab.classList.toggle("hidden", open || state.currentRole !== "customerService");
}

function setKnowledgeBot(open) {
  const panel = $("#knowledgeBotPanel");
  const tab = $("#knowledgeBotTab");
  if (!panel || !tab) return;
  const available = ["customerService", "engineer"].includes(state.currentRole) && document.body.classList.contains("app-active");
  panel.classList.toggle("hidden", !open || !available);
  tab.classList.toggle("hidden", open || !available);
  updateKnowledgeBotCopy();
  if (open && available) placeKnowledgeBotPanel();
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function placeKnowledgeBotPanel() {
  const panel = $("#knowledgeBotPanel");
  const tab = $("#knowledgeBotTab");
  if (!panel || !tab || panel.classList.contains("hidden")) return;
  const tabRect = tab.getBoundingClientRect();
  const panelWidth = Math.min(420, window.innerWidth - 44);
  const panelHeight = Math.min(panel.offsetHeight || 420, window.innerHeight - 36);
  const left = clamp(tabRect.left - panelWidth + tabRect.width, 12, window.innerWidth - panelWidth - 12);
  const top = clamp(tabRect.top - panelHeight - 12, 12, window.innerHeight - panelHeight - 12);
  panel.style.left = `${left}px`;
  panel.style.top = `${top}px`;
  panel.style.right = "auto";
  panel.style.bottom = "auto";
}

function moveKnowledgeBotTo(left, top) {
  const tab = $("#knowledgeBotTab");
  if (!tab) return;
  const rect = tab.getBoundingClientRect();
  const x = clamp(left, 12, window.innerWidth - rect.width - 12);
  const y = clamp(top, 12, window.innerHeight - rect.height - 12);
  tab.style.left = `${x}px`;
  tab.style.top = `${y}px`;
  tab.style.right = "auto";
  tab.style.bottom = "auto";
  placeKnowledgeBotPanel();
}

function initKnowledgeBotDrag() {
  const tab = $("#knowledgeBotTab");
  if (!tab) return;
  let dragging = false;
  let moved = false;
  let offsetX = 0;
  let offsetY = 0;
  let activePointerId = null;

  const startDrag = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    const rect = tab.getBoundingClientRect();
    dragging = true;
    moved = false;
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
    activePointerId = event.pointerId;
    tab.classList.add("dragging");
    tab.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  };

  const moveDrag = (event) => {
    if (!dragging) return;
    moved = true;
    moveKnowledgeBotTo(event.clientX - offsetX, event.clientY - offsetY);
    event.preventDefault();
  };

  const endDrag = (event) => {
    if (!dragging) return;
    dragging = false;
    tab.classList.remove("dragging");
    if (activePointerId !== null) tab.releasePointerCapture?.(activePointerId);
    activePointerId = null;
    tab.dataset.wasDragged = moved ? "true" : "false";
    window.setTimeout(() => {
      tab.dataset.wasDragged = "false";
    }, 0);
  };

  tab.addEventListener("pointerdown", startDrag);
  window.addEventListener("pointermove", moveDrag);
  window.addEventListener("pointerup", endDrag);
  tab.addEventListener("mousedown", startDrag);
  window.addEventListener("mousemove", moveDrag);
  window.addEventListener("mouseup", endDrag);
  tab.addEventListener("pointerup", endDrag);
  tab.addEventListener("pointercancel", endDrag);

  window.addEventListener("resize", () => {
    const rect = tab.getBoundingClientRect();
    if (tab.style.left || tab.style.top) moveKnowledgeBotTo(rect.left, rect.top);
    placeKnowledgeBotPanel();
  });
}

function analyzeCallWithAi() {
  const note = $("#callNote").value.trim();
  const chargingIssue = /充电|发热|电池|满电/.test(note);
  const refundIssue = /退货|退款/.test(note);
  const complaintIssue = /投诉|不满|多次|没解决/.test(note);
  const category = chargingIssue ? "电池 / 充电" : refundIssue ? "退货退款" : complaintIssue ? "投诉升级" : "售后咨询";
  const action = refundIssue ? "建议补充购买凭证并校验退货政策" : complaintIssue ? "建议标记高风险并安排主管回访" : "建议创建售后案例并转维修工单";
  const service = chargingIssue ? "建议上门维修，预估备件为电池模组 / USB-C 接口件" : "建议先创建案例，由客服继续跟进";

  $("#aiSummary").textContent = `客户来电反馈${note.replace(/[。.]$/, "")}。AI 判断为${category}，${action}。`;
  $("#aiIntentChips").innerHTML = [category, complaintIssue ? "高风险" : "普通风险", "保内校验", service.includes("上门") ? "建议上门" : "客服跟进"]
    .map((item) => `<span>${item}</span>`)
    .join("");
  $("#aiCaseDraft").value = `客户来电反馈：${note}\nAI 识别分类：${category}\n处理建议：${action}；${service}。`;
  showToast("AI 已完成通话分析，并生成案例草稿。");
}

function applyAiDraftToCase() {
  $("#caseType").value = "售后";
  applyCaseTypeFields("售后", true);
  $("#caseSource").value = "400 热线";
  $("#orderNo").value = "SO-20260218-0098";
  syncOrderNoInfo(false);
  $("#customerName").value = "林可";
  $("#customerPhone").value = "138 0000 9527";
  $("#faultCategory").value = "电池 / 充电";
  $("#customerRequest").value = "检测维修";
  $("#caseDesc").value = $("#aiCaseDraft").value;
  switchView("cases");
  showToast("AI 案例草稿已带入案例详情。");
}

function uid(prefix) {
  const serial = String(Math.floor(Math.random() * 900) + 100);
  return `${prefix}-260531-${serial}`;
}

function getRoleConfig() {
  return roleConfigs[state.currentRole];
}

function getCurrentView() {
  const active = $(".view.active");
  return active ? active.id.replace("View", "") : "dashboard";
}

function getOrderOriginTone(order) {
  return order.originType === "案例转工单" ? "blue" : "green";
}

function getOrderOriginLabel(order) {
  return order.originType || "手工创建工单";
}

function getOrderSourceRef(order) {
  return order.sourceRef || "手工创建";
}

function switchView(view) {
  const config = getRoleConfig();
  const nextView = config.allowedViews.includes(view) ? view : config.defaultView;
  document.body.dataset.currentView = nextView;
  $$(".view").forEach((item) => item.classList.remove("active"));
  $(`#${nextView}View`).classList.add("active");
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === nextView));
  $("#viewEyebrow").textContent = titles[nextView][0];
  $("#viewTitle").textContent = titles[nextView][1];
  $("#roleScope").textContent = nextView === "reviews"
    ? getReviewScopeText()
    : nextView === "knowledge"
      ? (state.currentRole === "engineer"
        ? "工程师可按高频维修问题查询处理规范，也可使用 AI 知识库助手生成现场处理方案。"
        : "客服可按高频问题检索标准话术，也可使用 AI 知识库助手生成回答。")
    : nextView === "followups"
      ? "客服对咨询、投诉和无需转工单案例进行回访确认，确认后关闭案例。"
      : config.scope;
  if (state.currentRole === "customerService" && ["knowledge", "followups", "reviews"].includes(nextView)) {
    setCallDrawer(false);
  }
  syncQuickActions(config, nextView);
  if (window.lucide) lucide.createIcons();
}

function syncQuickActions(config = getRoleConfig(), currentView = getCurrentView()) {
  config.quickActions.forEach((action) => {
    const button = $(`#${action.id}`);
    button.hidden = action.hidden || currentView === "reviews";
    button.dataset.targetView = action.view;
    const icon = action.label.includes("案例") ? "plus" : action.primary ? "file-plus-2" : "plus";
    button.innerHTML = `<i data-lucide="${icon}"></i>${action.label}`;
  });
}

function pill(status) {
  const tone = status.includes("关闭") ? "green" : status.includes("派工") || status.includes("服务中") ? "blue" : status.includes("待") ? "warn" : "";
  return `<span class="status-pill ${tone}">${status}</span>`;
}

function getRoleMetrics() {
  const waitingCases = state.cases.filter((item) => item.status === "待转工单").length;
  const followCases = state.cases.filter((item) => item.status === "客服跟进").length;
  const waitingOrders = state.orders.filter((item) => item.status === "待派工").length;
  const activeOrders = state.orders.filter((item) => item.status === "服务中").length;
  const closedOrders = state.orders.filter((item) => item.status === "已关闭").length;
  const partsPending = state.orders.filter((item) => item.status === "服务中" && (!item.part || item.part === "无备件")).length;

  if (state.currentRole === "serviceProvider") {
    return [
      { label: "待调度工单", value: waitingOrders, note: "优先处理高优先级与上门服务", tone: "" },
      { label: "待派工", value: waitingOrders, note: "确认区域、技能和预约时间", tone: "warn" },
      { label: "服务中", value: activeOrders, note: "跟进执行进度与改约需求", tone: "blue" },
      { label: "已回传关闭", value: closedOrders, note: "查看服务结果与客户评价", tone: "green" }
    ];
  }

  if (state.currentRole === "engineer") {
    return [
      { label: "待处理工单", value: activeOrders, note: "按预约顺序推进上门或到店服务", tone: "" },
      { label: "待备件确认", value: partsPending, note: "补充备件、费用和故障结论", tone: "warn" },
      { label: "待完工回传", value: activeOrders, note: "填写处理说明并准备闭单", tone: "blue" },
      { label: "今日完成", value: closedOrders, note: "完成后可查看用户评价", tone: "green" }
    ];
  }

  return [
    { label: "今日新案例", value: 28 + state.cases.length - 3, note: "投诉 6 / 咨询 11 / 售后 11", tone: "" },
    { label: "待转工单", value: waitingCases, note: "建议优先处理高价值客户", tone: "warn" },
    { label: "待客服跟进", value: followCases, note: "投诉与咨询需安排回访或解释", tone: "blue" },
    { label: "已形成工单", value: state.orders.filter((item) => item.originType === "案例转工单").length, note: "售后案例已进入服务链路", tone: "green" }
  ];
}

function renderMetrics() {
  const metrics = getRoleMetrics();
  const cards = $$(".metrics-grid .metric");
  metrics.forEach((metric, index) => {
    const card = cards[index];
    card.className = `metric${metric.tone ? ` ${metric.tone}` : ""}`;
    card.innerHTML = `<span>${metric.label}</span><strong>${metric.value}</strong><small>${metric.note}</small>`;
  });
}

function renderRoleBrief() {
  const config = getRoleConfig();
  $("#roleScope").textContent = config.scope;
  $("#roleBriefTitle").textContent = config.briefTitle;
  $("#roleBriefTag").textContent = config.briefTag;
  $("#roleBriefGrid").innerHTML = config.briefCards.map(([title, desc]) => `
    <article class="brief-card">
      <strong>${title}</strong>
      <p>${desc}</p>
    </article>
  `).join("");
}

function getTaskItems() {
  const waitingCases = state.cases.filter((item) => item.status === "待转工单").length;
  const followCases = state.cases.filter((item) => item.status === "客服跟进").length;
  const callbackCases = state.cases.filter((item) => isFollowupCase(item)).length;
  const waitingOrders = state.orders.filter((item) => item.status === "待派工").length;
  const activeOrders = state.orders.filter((item) => item.status === "服务中").length;
  const closedOrders = state.orders.filter((item) => item.status === "已关闭").length;
  const partsPending = state.orders.filter((item) => item.status === "服务中" && (!item.part || item.part === "无备件")).length;

  if (state.currentRole === "serviceProvider") {
    return [
      ["待调度工单", waitingOrders, "ordersList"],
      ["待派工工单", waitingOrders, "dispatch"],
      ["查看已关闭评价", closedOrders, "reviews"]
    ];
  }

  if (state.currentRole === "engineer") {
    return [
      ["待处理工单", activeOrders, "executionList"],
      ["填写故障与备件", partsPending, "executionList"],
      ["查询维修知识", engineerKnowledgeItems.length, "knowledge"]
    ];
  }

  return [
    ["售后案例待转工单", waitingCases, "casesList"],
    ["待回访关闭案例", callbackCases || followCases, "followups"],
    ["查看脱敏评价", closedOrders, "reviews"]
  ];
}

function renderTasks() {
  $("#taskList").innerHTML = getTaskItems().map(([label, count, view]) => `
    <button class="task-item" data-jump="${view}">
      <span><strong>${label}</strong><span>点击进入处理队列</span></span>
      <span class="status-pill ${count ? "warn" : "green"}">${count}</span>
    </button>
  `).join("");
}

function getSortedKnowledgeItems() {
  const source = state.currentRole === "engineer" ? engineerKnowledgeItems : knowledgeItems;
  return [...source].sort((a, b) => b.count - a.count);
}

function renderKnowledge() {
  const list = $("#knowledgeList");
  const summary = $("#knowledgeSummary");
  if (!list || !summary) return;
  const sortedItems = getSortedKnowledgeItems();
  const totalCount = sortedItems.reduce((sum, item) => sum + item.count, 0);
  const topItem = sortedItems[0];
  const categoryCount = new Set(sortedItems.map((item) => item.category)).size;
  const isEngineer = state.currentRole === "engineer";
  const title = $("#knowledgeView .panel-head h3");
  const desc = $("#knowledgeView .panel-head p");
  const sideTitle = $("#knowledgeView .knowledge-side-panel h3");
  const sideTag = $("#knowledgeView .knowledge-side-panel .status-pill");
  if (title) title.textContent = isEngineer ? "工程师知识库" : "高频问题知识库";
  if (desc) desc.textContent = isEngineer
    ? "按服务工单处理频次排序，工程师可快速查询检测、维修、备件和质检规范。"
    : "按用户来电咨询频次排序，客服可快速查找统一答复口径。";
  if (sideTitle) sideTitle.textContent = isEngineer ? "现场处理建议" : "知识库使用建议";
  if (sideTag) sideTag.textContent = isEngineer ? "工程师辅助" : "客服辅助";

  summary.innerHTML = `
    <article class="summary-chip warn"><strong>${sortedItems.length}</strong><span>${isEngineer ? "维修知识" : "高频问题"}</span></article>
    <article class="summary-chip"><strong>${totalCount}</strong><span>${isEngineer ? "近30天工单引用" : "近30天咨询量"}</span></article>
    <article class="summary-chip blue"><strong>${categoryCount}</strong><span>问题分类</span></article>
    <article class="summary-chip green"><strong>${topItem.category}</strong><span>最高频类型</span></article>
  `;

  list.innerHTML = sortedItems.map((item, index) => `
    <article class="knowledge-card" data-knowledge-id="${item.id}">
      <div class="knowledge-rank">${index + 1}</div>
      <div class="knowledge-main">
        <div class="knowledge-card-head">
          <div>
            <strong>${item.question}</strong>
            <span>${item.category} · 近30天 ${item.count} 次咨询</span>
          </div>
          <button class="mini-btn" data-use-knowledge="${item.id}">${isEngineer ? "生成方案" : "生成话术"}</button>
        </div>
        <p>${item.answer}</p>
        <div class="knowledge-tags">
          ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function findKnowledgeMatch(question = "") {
  const query = question.trim();
  if (!query) return getSortedKnowledgeItems()[0];
  const engineerKeywordMap = [
    { pattern: /备件|物料|库存|旧件|编码|序列号/, category: "备件申请" },
    { pattern: /扫码|IMEI|SN|实机|串号|不一致/, category: "实机核验" },
    { pattern: /充电|发热|电池|接口|快充/, category: "电池 / 充电" },
    { pattern: /多个故障|多项故障|多故障|方案/, category: "维修方案" },
    { pattern: /客户确认|数据|费用|风险/, category: "客户确认" },
    { pattern: /照片|凭证|完工|质检|回传/, category: "完工回传" }
  ];
  const scored = getSortedKnowledgeItems().map((item) => {
    const text = `${item.question} ${item.category} ${item.tags.join(" ")} ${item.answer}`;
    const engineerBoost = state.currentRole === "engineer"
      ? engineerKeywordMap.reduce((sum, rule) => sum + (rule.pattern.test(query) && item.category === rule.category ? 80 : 0), 0)
      : 0;
    const score = Array.from(new Set(query.split(/[\s，。？?、/]+/).filter(Boolean))).reduce((sum, word) => {
      return sum + (text.includes(word) ? 8 : 0);
    }, 0)
      + item.tags.reduce((sum, tag) => sum + (query.includes(tag) || tag.includes(query) ? 12 : 0), 0)
      + (text.includes(query) ? 20 : 0)
      + engineerBoost
      + item.count / 100;
    return { item, score };
  });
  return scored.sort((a, b) => b.score - a.score)[0].item;
}

function buildKnowledgeReply(match, question = "") {
  const cleanQuestion = question.trim() || match.question;
  if (state.currentRole === "engineer") {
    return `建议处理方案：针对“${cleanQuestion}”，${match.answer} 请先确认实机 IMEI 与服务单一致，再按检测记录、维修方案、备件申请、照片凭证和完工质检的顺序回填服务单。`;
  }
  return `建议话术：您好，您咨询的是“${cleanQuestion}”。${match.answer} 我这边会先帮您核对订单和设备权益，如果需要服务处理，会继续为您记录案例并安排后续服务。`;
}

function updateKnowledgeBotCopy() {
  const isEngineer = state.currentRole === "engineer";
  const question = $("#knowledgeQuestion");
  const engineerDefault = "充电发热且 USB-C 接口识别不稳定，现场应该怎么处理？";
  const serviceDefault = "手机充电发热，保内可以免费维修吗？";
  if (question && (!question.value || question.dataset.roleContext !== state.currentRole)) {
    question.value = isEngineer ? engineerDefault : serviceDefault;
    question.dataset.roleContext = state.currentRole;
  }
  const label = $("#knowledgeBotPanel .knowledge-bot-head span");
  const title = $("#knowledgeBotPanel .knowledge-bot-head strong");
  const questionLabel = $("#knowledgeBotPanel label");
  const tabIcon = $("#knowledgeBotTab span");
  const tabText = $("#knowledgeBotTab strong");
  if (label) label.textContent = isEngineer ? "AI 工程师知识库" : "AI 知识库助手";
  if (title) title.textContent = isEngineer ? "输入现场问题，生成处理方案" : "输入客户问题，生成客服回答话术";
  if (questionLabel) questionLabel.childNodes[0].textContent = isEngineer ? "现场问题" : "客户问题";
  if (tabIcon) tabIcon.textContent = isEngineer ? "工" : "客";
  if (tabText) tabText.textContent = isEngineer ? "AI工程师" : "AI知识库";
  const answer = $("#knowledgeAnswer");
  if (answer && answer.dataset.roleContext !== state.currentRole) {
    answer.textContent = isEngineer
      ? "请先输入现场问题，AI 会结合工程师知识库给出检测、维修、备件和质检建议。"
      : "请先输入客户问题，AI 会结合高频知识库给出适合客服直接使用的回答语句。";
    answer.dataset.roleContext = state.currentRole;
  }
  const matchLabel = $("#knowledgeMatchLabel");
  if (matchLabel && matchLabel.dataset.roleContext !== state.currentRole) {
    matchLabel.textContent = isEngineer ? "推荐处理方案" : "推荐回答";
    matchLabel.dataset.roleContext = state.currentRole;
  }
  const askBtn = $("#knowledgeAskBtn");
  const openBtn = $("#knowledgeOpenBtn");
  if (askBtn) askBtn.innerHTML = `<i data-lucide="sparkles"></i>${isEngineer ? "AI 查询处理方案" : "AI 查询知识库"}`;
  if (openBtn) openBtn.innerHTML = `<i data-lucide="book-open-text"></i>${isEngineer ? "打开工程师知识库" : "打开知识库"}`;
  if (window.lucide) lucide.createIcons();
}

function askKnowledgeAi(question) {
  const match = findKnowledgeMatch(question || $("#knowledgeQuestion").value);
  $("#knowledgeQuestion").value = question || $("#knowledgeQuestion").value || match.question;
  $("#knowledgeQuestion").dataset.roleContext = state.currentRole;
  $("#knowledgeMatchLabel").textContent = `匹配知识：${match.id} · ${match.category}`;
  $("#knowledgeMatchLabel").dataset.roleContext = state.currentRole;
  $("#knowledgeAnswer").textContent = buildKnowledgeReply(match, $("#knowledgeQuestion").value);
  $("#knowledgeAnswer").dataset.roleContext = state.currentRole;
  $("#knowledgeAnswerTags").innerHTML = match.tags.map((tag) => `<span>${tag}</span>`).join("");
  setKnowledgeBot(true);
  showToast("AI 已根据知识库生成推荐回答。");
}

function isFollowupCase(item) {
  return item.status === "客服跟进" || item.status === "已答复" || item.status === "待回访";
}

function maskName(name = "") {
  return name.length > 1 ? `${name.slice(0, 1)}*` : name || "匿名";
}

function maskPhone(phone = "") {
  return phone.replace(/(\d{3})\s?(\d{4})\s?(\d+)/, "$1 **** $3");
}

function getReviewScopeText() {
  if (state.currentRole === "customerService") {
    return "客服只查看客户针对客服接待、咨询答复和回访处理的评价，默认脱敏展示。";
  }
  if (state.currentRole === "serviceProvider") {
    return "服务商查看服务商范围内所有服务人员的服务评价，用于人员绩效和服务质量复盘。";
  }
  return "工程师只查看本人服务评价和改进建议，客户信息默认脱敏。";
}

function getReviewDataset() {
  if (state.currentRole === "customerService") {
    return state.customerServiceReviews.map((item) => ({
      id: item.id,
      title: `${maskName(item.customer)} · ${item.type}`,
      subtitle: `${item.caseId} · ${item.channel}`,
      score: item.score,
      text: item.text,
      tags: item.tags,
      meta: [maskPhone(item.phone), `客服 ${item.agent}`, "客服评价"]
    }));
  }

  if (state.currentRole === "serviceProvider") {
    return state.orders
      .filter((item) => item.review && item.provider && item.provider !== "自营服务团队")
      .map((item) => ({
        id: item.id,
        title: `${item.worker || "待补充服务人员"}`,
        subtitle: `${item.id} · ${item.provider}`,
        score: item.review.score,
        text: item.review.text,
        tags: item.review.tags,
        meta: [item.device, item.type, item.mode, item.region || "区域待补充"]
      }));
  }

  if (state.currentRole === "engineer") {
    return state.orders
      .filter((item) => item.review && (item.worker || "").includes("周明"))
      .map((item) => ({
        id: item.id,
        title: `${item.id} · 个人服务反馈`,
        subtitle: `${item.type} · ${item.mode}`,
        score: item.review.score,
        text: item.review.text,
        tags: item.review.tags,
        meta: [maskName(item.customer), maskPhone(item.phone), item.device, item.region || "区域待补充"]
      }));
  }

  return [];
}

function syncOrderFormDetails(order) {
  const activeOrder = order || state.orders.find((item) => item.id === state.selectedOrderId);
  if (!activeOrder) return;

  $("#serviceOrderNo").value = activeOrder.orderNo || activeOrder.sourceOrderNo || "";
  $("#orderCustomer").value = activeOrder.customer || "";
  $("#orderPhone").value = activeOrder.phone || "";
  $("#orderDevice").value = activeOrder.device || "";
  $("#orderDeviceSn").value = activeOrder.sn || "";
  $("#orderWarranty").value = activeOrder.warranty || "待校验";
  $("#orderRequest").value = activeOrder.request || "检测维修";
  $("#serviceMode").value = activeOrder.mode || "上门服务";
  $("#serviceType").value = activeOrder.type || "维修";
  $("#appointment").value = activeOrder.appointment || "";
  $("#priority").value = activeOrder.priority || "中";
  $("#serviceSla").value = activeOrder.serviceSla || "24 小时内上门/接待";
  $("#timeSlot").value = activeOrder.timeSlot || "13:00 - 18:00";
  $("#serviceRegion").value = activeOrder.region || "";
  $("#feeOwner").value = activeOrder.feeOwner || "待判责";
  $("#estimatedPart").value = activeOrder.estimatedPart || "";
  $("#serviceAddress").value = activeOrder.address || "";
  $("#orderAutoFillHint").value = activeOrder.orderNo
    ? `已根据订单号 ${activeOrder.orderNo} 带出客户基础信息、地址、设备与权益状态，相关字段已锁定。`
    : "当前工单缺少订单号，请先录入订单号后带出客户与设备信息。";
  $("#orderDesc").value = activeOrder.orderDesc || activeOrder.serviceNote || "需补充工单说明。";
  syncDispatchSelectedOrder(activeOrder);
}

function setFieldValue(selector, value) {
  const field = $(selector);
  if (!field) return;
  if (!("value" in field)) {
    field.textContent = value || "";
    return;
  }
  if (field.tagName === "SELECT" && value) {
    const hasOption = Array.from(field.options).some((option) => option.value === value);
    if (!hasOption) return;
  }
  field.value = value || "";
}

function getFieldValue(selector, fallback = "") {
  const field = $(selector);
  if (!field) return fallback;
  return "value" in field ? field.value : field.textContent || fallback;
}

function getNearestProvider(address = "") {
  return providerDirectory.find((provider) => provider.keywords.some((keyword) => address.includes(keyword))) || providerDirectory[0];
}

function getCaseById(caseId) {
  return state.cases.find((caseItem) => caseItem.id === caseId);
}

function syncCaseSidePanel(caseItem = getCaseById(state.selectedCaseId)) {
  const item = caseItem || {};
  const orderNo = item.orderNo || $("#orderNo")?.value || "待补充订单号";
  const address = item.address || $("#customerAddress")?.value || "待带出客户地址";
  setFieldValue("#caseSideOrderNo", orderNo);
  setFieldValue("#caseSideAddress", address);
  setFieldValue("#caseSideCustomer", item.customer || $("#customerName")?.value || "待带出");
  setFieldValue("#caseSidePhone", item.phone || $("#customerPhone")?.value || "待带出");
  setFieldValue("#caseSideDevice", item.device || $("#deviceModel")?.value || "待带出");
  setFieldValue("#caseSideWarranty", item.warranty || $("#warrantyStatus")?.value || "待校验");
}

function syncOrderNoInfo(showMessage = false) {
  const orderNo = $("#orderNo")?.value.trim();
  const orderInfo = orderCatalog[orderNo];
  if (!orderInfo) {
    setFieldValue("#autoFillHint", "未识别到订单档案，请核对订单号后重试。");
    if (showMessage) showToast("未识别到该订单号，客户与设备信息暂未更新。");
    return null;
  }

  setFieldValue("#customerName", orderInfo.customer);
  setFieldValue("#customerPhone", orderInfo.phone);
  setFieldValue("#backupPhone", orderInfo.backupPhone);
  setFieldValue("#customerAddress", orderInfo.address);
  setFieldValue("#deviceSn", orderInfo.sn);
  lookupDeviceInfo(false);
  setFieldValue("#autoFillHint", `已根据订单号 ${orderNo} 带出客户、地址、设备与权益信息，相关字段已锁定。`);
  syncCaseSidePanel({
    orderNo,
    address: orderInfo.address,
    customer: orderInfo.customer,
    phone: orderInfo.phone,
    device: $("#deviceModel").value,
    warranty: $("#warrantyStatus").value
  });
  if (showMessage) showToast(`已按订单号 ${orderNo} 刷新客户与设备信息。`);
  return orderInfo;
}

function syncWorkOrderNoInfo(showMessage = false) {
  const orderNo = $("#serviceOrderNo")?.value.trim();
  const orderInfo = orderCatalog[orderNo];
  if (!orderInfo) {
    setFieldValue("#orderAutoFillHint", "未识别到订单档案，请核对订单号后重试。");
    if (showMessage) showToast("未识别到该订单号，工单客户与设备信息暂未更新。");
    return null;
  }

  const device = deviceCatalog[orderInfo.sn] || {};
  const provider = getNearestProvider(orderInfo.address);
  setFieldValue("#orderCustomer", orderInfo.customer);
  setFieldValue("#orderPhone", orderInfo.phone);
  setFieldValue("#orderDeviceSn", orderInfo.sn);
  setFieldValue("#orderDevice", device.device || "待识别设备");
  setFieldValue("#orderWarranty", device.warranty || "待校验");
  setFieldValue("#serviceAddress", orderInfo.address);
  setFieldValue("#serviceRegion", provider.region);
  setFieldValue("#orderAutoFillHint", `已根据订单号 ${orderNo} 带出客户基础信息、地址、设备与权益状态，相关字段已锁定。`);
  syncDispatchAddress(orderInfo.address, provider.name);
  if (showMessage) showToast(`已按订单号 ${orderNo} 刷新工单客户与设备信息。`);
  return { orderInfo, device, provider };
}

function prepareDirectOrder() {
  state.selectedOrderId = "";
  syncOrderFormOrigin(null);
  setFieldValue("#orderOrigin", "服务商直接创建");
  setFieldValue("#orderSourceRef", "线下到店");
  setFieldValue("#serviceOrderNo", "SO-OFFLINE-260614");
  syncWorkOrderNoInfo(false);
  setFieldValue("#serviceMode", "到店服务");
  setFieldValue("#serviceType", "维修");
  setFieldValue("#appointment", "2026-06-14 15:30");
  setFieldValue("#priority", "中");
  setFieldValue("#serviceSla", "按预约时间执行");
  setFieldValue("#timeSlot", "13:00 - 18:00");
  setFieldValue("#feeOwner", "待判责");
  setFieldValue("#estimatedPart", "待服务人员初检");
  setFieldValue("#orderRequest", "到店检测维修");
  setFieldValue("#orderDesc", "客户直接到服务商门店进行售后，需现场检测设备并确认服务方案。");
  updateOrderDetailLabel();
  switchView("orders");
  showToast("已打开服务商线下到店工单，客户和设备信息由订单号带出。");
}

function syncDispatchAddress(address = "", providerName = "") {
  const provider = providerName ? providerDirectory.find((item) => item.name === providerName) : getNearestProvider(address);
  setFieldValue("#reassignAddress", address);
  setFieldValue("#providerSelect", provider?.name || providerDirectory[0].name);
}

function syncDispatchSelectedOrder(order = state.orders.find((item) => item.id === state.selectedOrderId)) {
  if (!order) return;
  setFieldValue("#currentProviderName", order.provider || getNearestProvider(order.address || "").name);
  syncDispatchAddress(order.address || "", order.provider || "");
  const noteBox = $("#autoDispatchNote");
  if (noteBox) {
    noteBox.textContent = "系统将根据工单类型、服务区域、服务资质、当前负载和备件情况推荐服务人员。";
  }
}

function setDispatchMode(mode = "direct") {
  state.assignment = mode;
  $$(".assign-card").forEach((item) => {
    item.classList.toggle("active", item.dataset.assignment === mode);
  });
  $$("[data-dispatch-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.dispatchPanel === mode);
  });
  const label = $("#dispatchModeLabel");
  if (label) label.textContent = mode === "provider" ? "派单模式" : "派工模式";
}

function getDispatchText(order = {}) {
  return [
    order.type,
    order.request,
    order.mode,
    order.region,
    order.address,
    order.priority,
    order.serviceSla,
    order.estimatedPart,
    order.faultCategory,
    order.orderDesc
  ].filter(Boolean).join(" ");
}

function scoreWorkerForOrder(worker, order) {
  const text = getDispatchText(order);
  const reasons = [];
  let score = 0;

  const skillHits = worker.skills.filter((skill) => text.includes(skill));
  if (skillHits.length) {
    score += skillHits.length * 18;
    reasons.push(`资质匹配 ${skillHits.slice(0, 2).join("、")}`);
  }

  const regionHits = worker.regions.filter((region) => text.includes(region));
  if (regionHits.length) {
    score += 22;
    reasons.push(`覆盖 ${regionHits[0]} 区域`);
  }

  const partHits = worker.parts.filter((part) => text.includes(part));
  if (partHits.length) {
    score += partHits.length * 14;
    reasons.push(`可携带 ${partHits.slice(0, 2).join("、")}`);
  }

  const available = Math.max(worker.capacity - worker.load, 0);
  score += available * 10;
  reasons.push(`当前负载 ${worker.load}/${worker.capacity}`);

  if (order.priority === "高" || (order.serviceSla || "").includes("24 小时")) {
    score += available > 0 ? 8 : -12;
    reasons.push("满足高优先级响应");
  }

  if ((order.mode || "").includes("上门") && worker.skills.includes("上门")) {
    score += 12;
    reasons.push("具备上门服务能力");
  }

  if (!reasons.length) reasons.push(worker.note);
  return { worker, score, reasons };
}

function getAutoDispatchRecommendation(order) {
  return workerProfiles
    .map((worker) => scoreWorkerForOrder(worker, order))
    .sort((a, b) => b.score - a.score)[0];
}

function autoDispatchSelected() {
  const order = state.orders.find((item) => item.id === state.selectedOrderId && item.status === "待派工");
  if (!order) {
    showToast("请先选择一张待派工工单。");
    return;
  }

  const recommendation = getAutoDispatchRecommendation(order);
  if (!recommendation) return;

  setDispatchMode("direct");
  setFieldValue("#workerSelect", recommendation.worker.name);
  const reasonText = recommendation.reasons.join("、");
  const note = `系统根据工单类型、服务区域、服务资质、当前负载和备件情况推荐 ${recommendation.worker.name}。推荐依据：${reasonText}。请服务人员联系客户确认上门或到店时间。`;
  setFieldValue("#dispatchNote", note);
  const noteBox = $("#autoDispatchNote");
  if (noteBox) {
    noteBox.innerHTML = `<strong>推荐 ${recommendation.worker.name}</strong><span>${reasonText}</span>`;
  }
  showToast(`${order.id} 已生成自动派工建议：${recommendation.worker.name}。`);
}

const caseTypeDefaults = {
  "售后": {
    desc: "手机充电发热明显，电量从 30% 到满电需要 3 小时以上。",
    faultCategory: "电池 / 充电",
    request: "检测维修",
    source: "400 热线"
  },
  "咨询": {
    desc: "客户咨询延保权益、保养服务范围和附近可用门店。",
    source: "App 在线客服"
  },
  "投诉": {
    desc: "客户反馈门店承诺维修时间未兑现，希望主管回访并给出明确处理方案。",
    source: "线下门店"
  }
};

function getCaseType() {
  return $("#caseType") ? $("#caseType").value : "售后";
}

function applyCaseTypeFields(type = getCaseType(), keepValues = false) {
  const caseForm = $("#caseForm");
  if (caseForm) caseForm.dataset.caseType = type;

  $$("[data-case-kind]").forEach((item) => {
    item.hidden = item.dataset.caseKind !== type;
  });

  const convertButton = $("#convertCaseBtn");
  if (convertButton) convertButton.hidden = type !== "售后";

  if (!keepValues) {
    const defaults = caseTypeDefaults[type] || caseTypeDefaults["售后"];
    if (defaults.source) $("#caseSource").value = defaults.source;
    if (defaults.desc) $("#caseDesc").value = defaults.desc;
    if (defaults.faultCategory && $("#faultCategory")) $("#faultCategory").value = defaults.faultCategory;
    if (defaults.request && $("#customerRequest")) $("#customerRequest").value = defaults.request;
  }

  if (window.lucide) lucide.createIcons();
}

function syncConvertButtonVisibility(caseItem = getCaseById(state.selectedCaseId)) {
  const button = $("#convertCaseBtn");
  if (!button) return;
  const isAfterSales = getCaseType() === "售后";
  button.hidden = !isAfterSales || (caseItem && caseItem.status === "已转工单");
}

function getCurrentCasePayload() {
  const type = getCaseType();

  if (type === "咨询") {
    return {
      faultCategory: $("#inquiryTopic").value,
      request: $("#resolutionResult").value,
      desc: $("#inquiryQuestion").value,
      consultation: {
        topic: $("#inquiryTopic").value,
        subtopic: $("#inquirySubtopic").value,
        knowledgeMatched: $("#knowledgeMatched").value,
        answerStatus: $("#answerStatus").value,
        resolutionResult: $("#resolutionResult").value,
        followUpTime: $("#inquiryFollowUpTime").value,
        question: $("#inquiryQuestion").value,
        answerSummary: $("#answerSummary").value
      }
    };
  }

  if (type === "投诉") {
    return {
      faultCategory: $("#complaintObject").value,
      request: $("#complaintAppeal").value,
      desc: $("#caseDesc").value,
      complaint: {
        object: $("#complaintObject").value,
        reason: $("#complaintReason").value,
        severity: $("#complaintSeverity").value,
        impactScope: $("#impactScope").value,
        appeal: $("#complaintAppeal").value,
        escalationLevel: $("#escalationLevel").value,
        promisedCallbackTime: $("#promisedCallbackTime").value,
        compensationExpectation: $("#compensationExpectation").value,
        evidence: $("#complaintEvidence").value
      }
    };
  }

  return {
    faultCategory: $("#faultCategory").value,
    request: $("#customerRequest").value,
    desc: $("#caseDesc").value,
    afterSales: {
      faultCategory: $("#faultCategory").value,
      faultFrequency: $("#faultFrequency").value,
      damageHistory: $("#damageHistory").value,
      backupStatus: $("#backupStatus").value,
      request: $("#customerRequest").value,
      expectedServiceMode: $("#expectedServiceMode").value,
      expectedServiceTime: $("#expectedServiceTime").value,
      attachments: $("#attachments").value
    }
  };
}

function getExecutionDefaults(order) {
  const type = order?.type || "维修";
  if (type === "保养") {
    return {
      appearanceStatus: "轻微划痕",
      dataBackupConfirm: "无需保留数据",
      warrantyDecision: order.feeOwner || "客户承担",
      faultType: "外观检查 / 清洁保养",
      diagnosis: "需清洁保养",
      rootCause: "日常损耗 / 积尘",
      testReading: "铰链阻尼正常，屏幕无亮线，接口积尘已清理",
      diagnosisNote: "完成外观、铰链、屏幕边框、听筒、扬声器和接口检查。",
      repairAction: "清洁保养",
      partName: "清洁耗材",
      partCode: "CLN-FOLD-KIT",
      partSerial: "N/A",
      oldPartHandling: "无需旧件",
      fee: order.feeOwner || "客户承担",
      paymentStatus: "客户已支付",
      servicePhotos: "到店接待照片、设备外观照片、清洁前后照片、完工确认照片。",
      serviceNote: "已完成铰链、屏幕边框和接口清洁保养，并提醒客户折叠屏使用注意事项。",
      qualityCheck: "整机功能测试通过",
      serviceResult: "已保养",
      followUpReminder: "7 天后回访屏幕折痕、铰链手感和清洁效果。"
    };
  }
  if (type === "换货") {
    return {
      faultType: "屏幕异常",
      diagnosis: "符合换货条件",
      rootCause: "屏幕模组异常",
      testReading: "触控自检异常，外观无明显人为损伤",
      diagnosisNote: "完成外观、触控、显示和权益核验，符合换货处理条件。",
      repairAction: "整机换货",
      partName: "整机换货",
      partCode: "SWAP-DEVICE",
      partSerial: "SWAP-SN-260528",
      oldPartHandling: "旧件回收",
      fee: order.feeOwner || "厂家承担",
      paymentStatus: "无需支付",
      servicePhotos: "旧机外观照片、新机交付照片、换货确认单照片。",
      serviceNote: "已完成整机换货、数据迁移提醒和新机基础功能测试。",
      qualityCheck: "整机功能测试通过",
      serviceResult: "已换货",
      followUpReminder: "24 小时后回访新机激活与数据迁移情况。"
    };
  }
  if (type === "退货") {
    return {
      faultType: "退货检测",
      diagnosis: "退货检测通过",
      rootCause: "客户退货诉求",
      testReading: "外观、激活状态和附件齐套已核验",
      diagnosisNote: "完成退货验机、附件核对和权益政策检查。",
      repairAction: "退货检测",
      partName: "无备件",
      partCode: "N/A",
      partSerial: "N/A",
      oldPartHandling: "旧件回收",
      fee: order.feeOwner || "厂家承担",
      paymentStatus: "无需支付",
      servicePhotos: "设备外观照片、附件齐套照片、退货验机单照片。",
      serviceNote: "已完成退货检测并提交退款流程。",
      qualityCheck: "整机功能测试通过",
      serviceResult: "已退货",
      followUpReminder: "48 小时后回访退款进度通知是否收到。"
    };
  }
  return {
    faultType: "充电慢 / 发热",
    diagnosis: "电池健康度低于阈值",
    rootCause: "电池老化",
    testReading: "电池健康度 72%，快充握手失败 2 次",
    diagnosisNote: "完成外观检查、充电协议检测、电池健康度读取和温控压力测试。",
    repairAction: "更换备件",
    partName: order?.estimatedPart || "Aster X Pro 电池模组",
    partCode: "BAT-AXP-5000",
    partSerial: "SN-BAT-260528-8891",
    oldPartHandling: "旧件回收",
    fee: order?.feeOwner || "保内免费",
    paymentStatus: "无需支付",
    servicePhotos: "到场定位照片、设备外观照片、故障检测截图、备件更换前后照片、完工测试照片。",
    serviceNote: "已更换电池模组并完成充电压力测试，温控恢复正常。",
    qualityCheck: "充电 / 开机 / 联网测试通过",
    serviceResult: "已修复",
    followUpReminder: "24 小时后回访充电温度与续航表现"
  };
}

function syncExecutionFormDetails(order) {
  const activeOrder = order || state.orders.find((item) => item.id === state.selectedOrderId);
  if (!activeOrder) return;
  const defaults = getExecutionDefaults(activeOrder);

  $("#executionDetailLabel").textContent = `${activeOrder.id} · ${activeOrder.customer} · ${activeOrder.status}`;
  setFieldValue("#expectedImei", activeOrder.sn || "");
  setFieldValue("#scanImei", activeOrder.scanImei || activeOrder.sn || "");
  setFieldValue("#arrivalTime", activeOrder.arrivalTime || "2026-05-28 16:05");
  setFieldValue("#appearanceStatus", activeOrder.appearanceStatus || defaults.appearanceStatus || "外观完好");
  setFieldValue("#dataBackupConfirm", activeOrder.dataBackupConfirm || defaults.dataBackupConfirm || "客户确认已备份");
  setFieldValue("#warrantyDecision", activeOrder.warrantyDecision || defaults.warrantyDecision || activeOrder.feeOwner || "保内免费");
  setFieldValue("#faultItems", activeOrder.faultItems || `1. ${activeOrder.faultType || defaults.faultType}：${activeOrder.diagnosis || defaults.diagnosis}。\n2. 接口与外观复核：完成插拔、外观和功能确认。`);
  setFieldValue("#rootCause", activeOrder.rootCause || defaults.rootCause);
  setFieldValue("#testReading", activeOrder.testReading || defaults.testReading);
  setFieldValue("#diagnosisNote", activeOrder.diagnosisNote || defaults.diagnosisNote);
  setFieldValue("#repairPlanItems", activeOrder.repairPlanItems || `1. ${activeOrder.faultType || defaults.faultType}：${defaults.repairAction}，并完成对应质检。\n2. 接口与外观复核：清洁接口，完成充电稳定性测试。`);
  setFieldValue("#repairAction", activeOrder.repairAction || defaults.repairAction);
  setFieldValue("#partRequests", activeOrder.partRequests || `1. ${defaults.partName} / ${defaults.partCode} / 数量 ${activeOrder.partQty || "1"} / ${defaults.oldPartHandling}。`);
  setFieldValue("#partName", activeOrder.partName || defaults.partName);
  setFieldValue("#partCode", activeOrder.partCode || defaults.partCode);
  setFieldValue("#partSerial", activeOrder.partSerial || defaults.partSerial);
  setFieldValue("#partQty", activeOrder.partQty || "1");
  setFieldValue("#oldPartHandling", activeOrder.oldPartHandling || defaults.oldPartHandling);
  setFieldValue("#fee", activeOrder.fee || defaults.fee || activeOrder.feeOwner || "保内免费");
  setFieldValue("#paymentStatus", activeOrder.paymentStatus || defaults.paymentStatus);
  setFieldValue("#servicePhotos", activeOrder.servicePhotos || defaults.servicePhotos);
  setFieldValue("#serviceNote", activeOrder.serviceNote || defaults.serviceNote);
  setFieldValue("#qualityCheck", activeOrder.qualityCheck || defaults.qualityCheck);
  setFieldValue("#customerConfirm", activeOrder.customerConfirm || "客户现场确认完成");
  setFieldValue("#serviceResult", activeOrder.serviceResult || defaults.serviceResult);
  setFieldValue("#followUpReminder", activeOrder.followUpReminder || defaults.followUpReminder);
  resetServiceFlow(activeOrder.imeiVerified === true);
}

function switchServiceTab(tabName) {
  $$(".service-tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.serviceTab === tabName);
  });
  $$(".service-tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.servicePanel === tabName);
  });
  $$(".guide-step").forEach((step) => {
    step.classList.toggle("active", step.dataset.guideStep === tabName);
  });
}

function getActiveServiceTab() {
  return $(".service-tab-panel.active")?.dataset.servicePanel || "verify";
}

function setServiceStepsEnabled(enabled) {
  $$(".service-tabs button").forEach((button) => {
    if (button.dataset.serviceTab !== "verify") button.disabled = !enabled;
  });
}

function resetServiceFlow(verified = false) {
  setServiceStepsEnabled(verified);
  const result = $("#imeiVerifyResult");
  if (result) {
    result.classList.toggle("success", verified);
    result.classList.toggle("error", false);
    result.textContent = verified ? "实机 IMEI / SN 与服务单一致，可继续检测和维修。" : "待扫码核验，核验通过后开放后续服务步骤。";
  }
  switchServiceTab(verified ? "diagnosis" : "verify");
}

function verifyServiceImei() {
  const expected = getFieldValue("#expectedImei").trim();
  const scanned = getFieldValue("#scanImei").trim();
  const result = $("#imeiVerifyResult");
  const order = state.orders.find((item) => item.id === state.selectedOrderId);
  if (!expected || !scanned || expected !== scanned) {
    setServiceStepsEnabled(false);
    if (result) {
      result.classList.remove("success");
      result.classList.add("error");
      result.textContent = "核验失败：实机 IMEI / SN 与服务单不一致，请暂停服务并联系调度或客服核实。";
    }
    showToast("IMEI / SN 不一致，不能开始后续服务。");
    return;
  }
  if (order) {
    order.scanImei = scanned;
    order.imeiVerified = true;
  }
  if (result) {
    result.classList.add("success");
    result.classList.remove("error");
    result.textContent = "核验通过：实机与服务单一致，可以开始检测故障。";
  }
  setServiceStepsEnabled(true);
  switchServiceTab("diagnosis");
  showToast("实机核验通过，已开放服务执行流程。");
}

function getVisibleOrders() {
  if (state.currentRole === "engineer") {
    return state.orders.filter((item) => item.status !== "待派工");
  }
  return state.orders;
}

function getOrderAction(item) {
  if (item.status === "已关闭") {
    return `<button class="mini-btn" data-review-order="${item.id}">查看评价</button>`;
  }

  if (state.currentRole === "engineer") {
    if (item.status === "服务中") {
      return `<button class="mini-btn" data-use-order="${item.id}">开始服务</button>`;
    }
    return `<span class="status-pill warn">待派工</span>`;
  }

  if (item.status === "待派工") {
    const label = state.currentRole === "serviceProvider" ? "进入调度" : "进入调度";
    return `<button class="mini-btn" data-select-order="${item.id}">${label}</button>`;
  }

  if (item.status === "服务中") {
    const label = state.currentRole === "serviceProvider" ? "查看服务进度" : "填写服务";
    return `<button class="mini-btn" data-use-order="${item.id}">${label}</button>`;
  }

  return "";
}

function renderCases() {
  const container = $("#caseList");
  const pageContainer = $("#caseListPage");
  const list = state.caseFilter === "全部" ? state.cases : state.cases.filter((item) => item.type === state.caseFilter);
  const markup = list.map((item) => `
    <article class="record-card${item.id === state.selectedCaseId ? " selected" : ""}">
      <div class="record-main">
        <div class="record-top">
          <strong>${item.id} · ${item.customer}</strong>
          ${pill(item.status)}
        </div>
        <div class="record-meta">
          <span>${item.type}</span>
          <span>${item.source || "未知来源"}</span>
          <span>${item.device}</span>
          <span>${item.faultCategory || "未分类"}</span>
          <span>${item.warranty || "待校验"}</span>
          <span>${item.phone}</span>
        </div>
        <p>${item.desc}</p>
      </div>
      <div class="record-actions">
        ${item.type === "售后" && item.status !== "已转工单" ? `<button class="mini-btn" data-convert="${item.id}">转服务工单</button>` : ""}
        ${isFollowupCase(item) ? `<button class="mini-btn" data-followup-case="${item.id}">安排回访</button>` : ""}
        <button class="mini-btn" data-fill-case="${item.id}">查看详情</button>
      </div>
    </article>
  `).join("");
  if (container) container.innerHTML = markup;
  if (pageContainer) pageContainer.innerHTML = markup;

  const summary = $("#caseListSummary");
  if (summary) {
    const total = state.cases.length;
    const afterSales = state.cases.filter((item) => item.type === "售后").length;
    const complaint = state.cases.filter((item) => item.type === "投诉").length;
    const consulting = state.cases.filter((item) => item.type === "咨询").length;
    const pending = state.cases.filter((item) => item.status === "待转工单").length;
    summary.innerHTML = `
      <article class="summary-chip"><strong>${total}</strong><span>全部案例</span></article>
      <article class="summary-chip"><strong>${afterSales}</strong><span>售后案例</span></article>
      <article class="summary-chip"><strong>${complaint}</strong><span>投诉案例</span></article>
      <article class="summary-chip"><strong>${consulting}</strong><span>咨询案例</span></article>
      <article class="summary-chip warn"><strong>${pending}</strong><span>待转工单</span></article>
    `;
  }
}

function renderFollowups() {
  const list = state.cases.filter((item) => isFollowupCase(item));
  const closed = state.cases.filter((item) => item.status === "已关闭").length;
  const complaints = list.filter((item) => item.type === "投诉").length;
  const inquiries = list.filter((item) => item.type === "咨询").length;
  const followupSummary = $("#followupSummary");
  const followupList = $("#followupList");
  if (!followupSummary || !followupList) return;

  followupSummary.innerHTML = `
    <article class="summary-chip warn"><strong>${list.length}</strong><span>待回访</span></article>
    <article class="summary-chip"><strong>${inquiries}</strong><span>咨询回访</span></article>
    <article class="summary-chip blue"><strong>${complaints}</strong><span>投诉回访</span></article>
    <article class="summary-chip green"><strong>${closed}</strong><span>已关闭案例</span></article>
  `;

  followupList.innerHTML = list.map((item) => `
    <article class="record-card followup-card${item.id === state.selectedCaseId ? " selected" : ""}">
      <div class="record-main">
        <div class="record-top">
          <strong>${item.id} · ${item.customer}</strong>
          ${pill(item.status === "已答复" ? "待回访" : item.status)}
        </div>
        <div class="record-meta">
          <span>${item.type}</span>
          <span>${item.source || "未知来源"}</span>
          <span>${item.request || item.faultCategory || "待确认诉求"}</span>
          <span>${item.contactPreference || "电话回访"}</span>
          <span>${item.phone}</span>
        </div>
        <p>${item.desc}</p>
        <div class="followup-log">
          <span>建议动作：${item.type === "投诉" ? "主管回访并确认客户是否认可解释/补偿方案" : "确认客户疑问是否解决，确认后关闭案例"}</span>
          <span>隐私策略：回访记录内部可见，评价查看默认脱敏。</span>
        </div>
      </div>
      <div class="record-actions">
        <button class="mini-btn" data-fill-case="${item.id}">查看详情</button>
        <button class="mini-btn" data-close-followup="${item.id}" onclick="window.closeFollowupCase && window.closeFollowupCase(this.dataset.closeFollowup)">回访并关闭</button>
      </div>
    </article>
  `).join("") || `<article class="record-card"><strong>暂无待回访案例</strong><p>咨询、投诉或无需转工单的案例关闭前会出现在这里。</p></article>`;

  $$("[data-close-followup]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeFollowupCase(button.dataset.closeFollowup);
    };
  });
}

function orderCard(item, selectable = false) {
  const selected = item.id === state.selectedOrderId ? " selected" : "";
  return `
    <article class="record-card${selectable ? selected : ""}">
      <div class="record-main">
        <div class="record-top">
          <strong>${item.id} · ${item.customer}</strong>
          ${pill(item.status)}
        </div>
        <div class="record-meta">
          <span class="meta-tag ${getOrderOriginTone(item)}">${getOrderOriginLabel(item)}</span>
          <span>${getOrderSourceRef(item)}</span>
          <span>${item.mode}</span>
          <span>${item.type}</span>
          <span>${item.priority}优先级</span>
          <span>${item.serviceSla || "按预约执行"}</span>
          <span>${item.region || "待分区"}</span>
        </div>
        <p>${item.device} · ${item.appointment} · ${item.timeSlot || "时段待定"}<br>${item.address}<br>联系人 ${item.customer} / ${item.phone || "待补充"} · ${item.feeOwner || "待判责"} · 预估备件 ${item.estimatedPart || "待补充"}</p>
      </div>
      <div class="record-actions">
        ${getRoleConfig().allowedViews.includes("orders") ? `<button class="mini-btn" data-view-order="${item.id}">查看详情</button>` : ""}
        ${getOrderAction(item)}
      </div>
    </article>
  `;
}

function executionCard(item) {
  const selected = item.id === state.selectedOrderId ? " selected" : "";
  const progress = item.serviceResult || (item.serviceNote ? "已填写记录" : "待填写记录");
  return `
    <article class="execution-row${selected}">
      <div class="execution-cell order-no">
        <strong>${item.id}</strong>
        <span>${progress}</span>
      </div>
      <div class="execution-cell">
        <span class="cell-label">服务类型</span>
        <strong>${item.type}</strong>
        <span>${item.mode}</span>
      </div>
      <div class="execution-cell">
        <span class="cell-label">客户名称</span>
        <strong>${item.customer}</strong>
        <span>${item.device}</span>
      </div>
      <div class="execution-cell">
        <span class="cell-label">客户手机号</span>
        <strong>${item.phone || "待补充"}</strong>
        <span>${item.appointment}</span>
      </div>
      <div class="execution-cell address-cell">
        <span class="cell-label">客户地址</span>
        <strong>${item.address}</strong>
        <span>${item.worker || "待确认服务人员"}</span>
      </div>
      <div class="execution-cell action-cell">
        <button class="mini-btn" data-use-order="${item.id}">开始服务</button>
      </div>
    </article>
  `;
}

function renderOrders() {
  const visibleOrders = getVisibleOrders();
  const ordersMarkup = visibleOrders.map((item) => orderCard(item)).join("");
  const orderList = $("#orderList");
  if (orderList) orderList.innerHTML = ordersMarkup;
  const orderListPage = $("#orderListPage");
  if (orderListPage) orderListPage.innerHTML = ordersMarkup;

  $("#dispatchList").innerHTML = state.orders
    .filter((item) => item.status === "待派工")
    .map((item) => orderCard(item, true))
    .join("") || `<article class="record-card"><strong>暂无待调度工单</strong><p>新建或转入工单后会出现在这里。</p></article>`;

  const executionOrders = state.orders.filter((item) => item.status === "服务中");
  $("#executionList").innerHTML = executionOrders
    .map((item) => executionCard(item))
    .join("") || `<article class="record-card"><strong>暂无服务中工单</strong><p>派工后，服务人员可在这里补充故障、备件和处理说明。</p></article>`;

  const executionSummary = $("#executionSummary");
  if (executionSummary) {
    const photoDone = executionOrders.filter((item) => item.servicePhotos).length;
    const partsDone = executionOrders.filter((item) => item.part).length;
    const confirmDone = executionOrders.filter((item) => item.customerConfirm && item.customerConfirm.includes("确认")).length;
    executionSummary.innerHTML = `
      <article class="summary-chip"><strong>${executionOrders.length}</strong><span>待处理派单</span></article>
      <article class="summary-chip blue"><strong>${partsDone}</strong><span>已填备件</span></article>
      <article class="summary-chip warn"><strong>${photoDone}</strong><span>已传照片</span></article>
      <article class="summary-chip green"><strong>${confirmDone}</strong><span>客户确认</span></article>
    `;
  }

  const closedList = $("#closedList");
  if (closedList) {
    closedList.innerHTML = state.orders
      .filter((item) => item.status === "已关闭")
      .map((item) => orderCard(item))
      .join("");
  }

  const summary = $("#orderListSummary");
  if (summary) {
    const total = visibleOrders.length;
    const waiting = visibleOrders.filter((item) => item.status === "待派工").length;
    const active = visibleOrders.filter((item) => item.status === "服务中").length;
    const closed = visibleOrders.filter((item) => item.status === "已关闭").length;
    const converted = visibleOrders.filter((item) => item.originType === "案例转工单").length;
    summary.innerHTML = `
      <article class="summary-chip"><strong>${total}</strong><span>全部工单</span></article>
      <article class="summary-chip blue"><strong>${waiting}</strong><span>待调度</span></article>
      <article class="summary-chip warn"><strong>${active}</strong><span>服务中</span></article>
      <article class="summary-chip green"><strong>${closed}</strong><span>已关闭</span></article>
      <article class="summary-chip"><strong>${converted}</strong><span>案例转工单</span></article>
    `;
  }

  updateSelectedOrderLabel();
  syncOrderFormOrigin(state.orders.find((item) => item.id === state.selectedOrderId));
  syncOrderFormDetails(state.orders.find((item) => item.id === state.selectedOrderId));
  syncExecutionFormDetails(state.orders.find((item) => item.id === state.selectedOrderId));
  updateOrderDetailLabel();
  updateCaseDetailLabel();
}

function updateSelectedOrderLabel() {
  const order = state.orders.find((item) => item.id === state.selectedOrderId);
  $("#selectedOrderLabel").textContent = order ? `${order.id} · ${getOrderOriginLabel(order)}` : "请选择工单";
}

function syncOrderFormOrigin(order) {
  const originInput = $("#orderOrigin");
  const sourceRefInput = $("#orderSourceRef");
  if (!originInput || !sourceRefInput) return;

  if (order) {
    originInput.value = getOrderOriginLabel(order);
    sourceRefInput.value = getOrderSourceRef(order);
    return;
  }

  originInput.value = "手工创建工单";
  sourceRefInput.value = "手工创建";
}

function fillCase(caseItem) {
  if (!caseItem) return;
  state.selectedCaseId = caseItem.id;
  $("#caseType").value = caseItem.type;
  applyCaseTypeFields(caseItem.type, true);
  $("#orderNo").value = caseItem.orderNo || "";
  $("#caseSource").value = caseItem.source || "400 热线";
  $("#customerName").value = caseItem.customer;
  $("#customerPhone").value = caseItem.phone;
  $("#backupPhone").value = caseItem.backupPhone || "";
  $("#customerAddress").value = caseItem.address || "";
  $("#deviceModel").value = caseItem.device;
  $("#deviceSn").value = caseItem.sn;
  $("#deviceSpec").value = caseItem.spec || "";
  $("#osVersion").value = caseItem.osVersion || "";
  $("#channel").value = caseItem.channel || "";
  $("#purchaseDate").value = caseItem.purchaseDate || "";
  $("#customerLevel").value = caseItem.level || "普通用户";
  $("#faultCategory").value = caseItem.faultCategory || "电池 / 充电";
  $("#warrantyStatus").value = caseItem.warranty || "待校验";
  $("#customerRequest").value = caseItem.request || "检测维修";
  $("#caseDesc").value = caseItem.desc;
  setFieldValue("#inquiryTopic", caseItem.consultation?.topic || caseItem.faultCategory || "保修 / 延保权益");
  setFieldValue("#inquirySubtopic", caseItem.consultation?.subtopic || "权益是否可用");
  setFieldValue("#knowledgeMatched", caseItem.consultation?.knowledgeMatched || "KB-EXT-204 延保权益与保养服务说明");
  setFieldValue("#answerStatus", caseItem.consultation?.answerStatus || (caseItem.status === "已答复" ? "已一次性答复" : "需回访确认"));
  setFieldValue("#resolutionResult", caseItem.consultation?.resolutionResult || (caseItem.status === "已答复" ? "已解决" : "未解决，需跟进"));
  setFieldValue("#inquiryFollowUpTime", caseItem.consultation?.followUpTime || "明天 10:00 前");
  setFieldValue("#inquiryQuestion", caseItem.consultation?.question || caseItem.desc);
  setFieldValue("#answerSummary", caseItem.consultation?.answerSummary || "已按知识库口径答复客户，并记录后续回访事项。");
  setFieldValue("#complaintObject", caseItem.complaint?.object || caseItem.faultCategory || "门店服务");
  setFieldValue("#complaintReason", caseItem.complaint?.reason || "承诺时间未兑现");
  setFieldValue("#complaintSeverity", caseItem.complaint?.severity || "较高");
  setFieldValue("#impactScope", caseItem.complaint?.impactScope || "单个客户");
  setFieldValue("#complaintAppeal", caseItem.complaint?.appeal || caseItem.request || "主管回访解释");
  setFieldValue("#escalationLevel", caseItem.complaint?.escalationLevel || "客服主管");
  setFieldValue("#promisedCallbackTime", caseItem.complaint?.promisedCallbackTime || "2 小时内回访");
  setFieldValue("#compensationExpectation", caseItem.complaint?.compensationExpectation || "希望给出明确完成时间");
  setFieldValue("#complaintEvidence", caseItem.complaint?.evidence || "门店沟通截图、维修受理单、通话录音编号");
  setFieldValue("#expectedServiceMode", caseItem.afterSales?.expectedServiceMode || "上门服务");
  setFieldValue("#expectedServiceTime", caseItem.afterSales?.expectedServiceTime || "今天 13:00 - 18:00");
  setFieldValue("#attachments", caseItem.afterSales?.attachments || caseItem.attachments || "购机发票、故障视频、设备照片");

  $("#orderCustomer").value = caseItem.customer || "";
  $("#orderPhone").value = caseItem.phone || "";
  $("#orderDevice").value = caseItem.device || "";
  $("#orderDeviceSn").value = caseItem.sn || "";
  $("#orderWarranty").value = caseItem.warranty || "待校验";
  $("#orderRequest").value = caseItem.request || "检测维修";
  $("#estimatedPart").value = caseItem.faultCategory === "电池 / 充电" ? "电池模组 / USB-C 接口件" : "待服务人员初检";
  $("#orderDesc").value = `来源案例：${caseItem.id}，需围绕“${caseItem.desc}”安排服务处理。`;
  syncCaseSidePanel(caseItem);
  updateCaseDetailLabel();
  syncConvertButtonVisibility(caseItem);
}

function updateCaseDetailLabel() {
  const label = $("#caseDetailLabel");
  if (!label) return;
  const item = state.cases.find((caseItem) => caseItem.id === state.selectedCaseId);
  label.textContent = item ? `${item.id} · ${item.status}` : "新建案例";
  syncConvertButtonVisibility(item);
}

function updateOrderDetailLabel() {
  const label = $("#orderDetailLabel");
  if (!label) return;
  const order = state.orders.find((item) => item.id === state.selectedOrderId);
  label.textContent = order ? `${order.id} · ${getOrderOriginLabel(order)}` : "手工创建工单";
}

function lookupDeviceInfo(showMessage = true) {
  const sn = $("#deviceSn").value.trim();
  const device = deviceCatalog[sn];
  if (!device) {
    $("#deviceModel").value = "未识别设备";
    $("#deviceSpec").value = "";
    $("#osVersion").value = "";
    $("#channel").value = "";
    $("#purchaseDate").value = "";
    $("#warrantyStatus").value = "待校验";
    $("#autoFillHint").value = "未识别到设备档案，请核对订单号或设备档案。";
    if (showMessage) showToast("未识别到该 SN / IMEI 对应的设备档案。");
    return;
  }

  $("#deviceModel").value = device.device;
  $("#deviceSpec").value = device.spec;
  $("#osVersion").value = device.osVersion;
  $("#channel").value = device.channel;
  $("#purchaseDate").value = device.purchaseDate;
  $("#warrantyStatus").value = device.warranty;
  $("#customerLevel").value = device.customerLevel;
  $("#autoFillHint").value = `已根据订单关联的 ${sn} 带出设备与权益信息，相关字段已锁定。`;
  if (showMessage) showToast(`已根据 ${sn} 自动带出设备信息。`);
}

function syncConvertProvider() {
  const address = $("#convertAddress")?.value || $("#customerAddress")?.value || "";
  const provider = getNearestProvider(address);
  setFieldValue("#convertProvider", provider.name);
  setFieldValue("#convertRegion", provider.region);
  const reason = $("#convertProviderReason");
  if (reason) reason.textContent = provider.reason;
}

function openConvertModal(caseId) {
  const item = getCaseById(caseId) || getCaseById(state.selectedCaseId);
  if (!item) {
    showToast("请先从案例列表打开需要转工单的案例。");
    return;
  }
  if (item.type !== "售后") {
    showToast("只有售后类型的案例需要转服务工单，咨询和投诉请走回访闭环。");
    return;
  }
  state.pendingConvertCaseId = item.id;
  fillCase(item);
  setFieldValue("#convertCustomer", item.customer);
  setFieldValue("#convertPhone", item.phone);
  setFieldValue("#convertAddress", item.address || $("#customerAddress").value);
  setFieldValue("#convertMode", item.afterSales?.expectedServiceMode || $("#expectedServiceMode").value || "上门服务");
  const request = item.request || $("#customerRequest").value;
  const serviceType = request.includes("换货") ? "换货" : request.includes("退货") ? "退货" : request.includes("保养") ? "保养" : "维修";
  setFieldValue("#convertType", serviceType);
  setFieldValue("#convertAppointment", item.afterSales?.expectedServiceTime || "2026-05-29 10:00");
  syncConvertProvider();
  $("#convertModal").classList.remove("hidden");
  if (window.lucide) lucide.createIcons();
  syncConvertButtonVisibility();
}

function closeConvertModal() {
  $("#convertModal")?.classList.add("hidden");
  state.pendingConvertCaseId = null;
}

function createOrderFromCase(caseId) {
  const item = getCaseById(caseId) || getCaseById(state.pendingConvertCaseId) || getCaseById(state.selectedCaseId);
  if (!item) {
    showToast("当前没有可转工单的售后案例。");
    return;
  }
  if (item.type !== "售后") {
    showToast("只有售后类型的案例需要转服务工单。");
    return;
  }
  const confirmedAddress = $("#convertAddress")?.value || item.address || $("#customerAddress").value;
  const provider = getNearestProvider(confirmedAddress);
  const order = {
    id: uid("WO"),
    originType: "案例转工单",
    sourceRef: item.id,
    orderNo: item.orderNo,
    customer: item.customer,
    phone: item.phone,
    device: item.device,
    sn: item.sn,
    mode: $("#convertMode")?.value || $("#serviceMode").value,
    type: $("#convertType")?.value || $("#serviceType").value,
    appointment: $("#convertAppointment")?.value || $("#appointment").value,
    timeSlot: $("#convertTimeSlot")?.value || $("#timeSlot").value,
    address: confirmedAddress,
    region: provider.region,
    priority: $("#priority").value,
    serviceSla: $("#serviceSla").value,
    feeOwner: $("#feeOwner").value,
    estimatedPart: $("#estimatedPart").value,
    warranty: item.warranty,
    faultCategory: item.faultCategory,
    request: item.request,
    orderDesc: $("#orderDesc").value,
    status: "待派工",
    provider: provider.name,
    worker: "",
    fault: "",
    part: "",
    review: null
  };
  state.orders.unshift(order);
  item.status = "已转工单";
  item.address = confirmedAddress;
  state.selectedOrderId = order.id;
  closeConvertModal();
  syncOrderFormOrigin(order);
  renderAll();
  switchView(state.currentRole === "serviceProvider" ? "dispatch" : "casesList");
  showToast(`${item.id} 已转为服务工单 ${order.id}，服务商可继续派工。`);
}

function createManualOrder() {
  const orderNo = $("#serviceOrderNo").value.trim();
  const orderInfo = syncWorkOrderNoInfo(false);
  const order = {
    id: uid("WO"),
    originType: $("#orderOrigin").value || "手工创建工单",
    sourceRef: $("#orderSourceRef").value || "手工创建",
    orderNo,
    customer: $("#orderCustomer").value || orderInfo?.orderInfo?.customer || "新客户",
    phone: $("#orderPhone").value || orderInfo?.orderInfo?.phone || "",
    device: $("#orderDevice").value || orderInfo?.device?.device || "待补充设备",
    sn: $("#orderDeviceSn").value || orderInfo?.orderInfo?.sn || "",
    mode: $("#serviceMode").value,
    type: $("#serviceType").value,
    appointment: $("#appointment").value,
    timeSlot: $("#timeSlot").value,
    address: $("#serviceAddress").value,
    region: $("#serviceRegion").value,
    priority: $("#priority").value,
    warranty: $("#orderWarranty").value || ($("#warrantyStatus") ? $("#warrantyStatus").value : "待校验"),
    faultCategory: $("#faultCategory") ? $("#faultCategory").value : "未分类",
    request: $("#orderRequest").value || ($("#customerRequest") ? $("#customerRequest").value : "检测维修"),
    serviceSla: $("#serviceSla").value,
    feeOwner: $("#feeOwner").value,
    estimatedPart: $("#estimatedPart").value,
    orderDesc: $("#orderDesc").value,
    status: "待派工",
    provider: getNearestProvider($("#serviceAddress").value).name,
    worker: "",
    fault: "",
    part: "",
    review: null
  };
  state.orders.unshift(order);
  state.selectedOrderId = order.id;
  syncOrderFormOrigin(order);
  renderAll();
  switchView("ordersList");
  showToast(`已手动创建工单 ${order.id}。`);
}

function dispatchSelected(providerDispatch = false) {
  const order = state.orders.find((item) => item.id === state.selectedOrderId && item.status === "待派工");
  if (!order) {
    showToast("请先选择一张待派工工单。");
    return;
  }

  if (providerDispatch) {
    const newAddress = $("#reassignAddress").value.trim() || order.address;
    const provider = getNearestProvider(newAddress);
    order.address = newAddress;
    order.region = provider.region;
    order.provider = $("#providerSelect").value || provider.name;
    order.worker = "";
    order.dispatchNote = `${$("#reassignReason").value}：${$("#reassignNote").value}`;
    renderAll();
    switchView("dispatch");
    setDispatchMode("provider");
    showToast(`${order.id} 已派单至 ${order.provider}。`);
    return;
  }

  order.status = "服务中";
  order.provider = order.provider || $("#currentProviderName").value || getNearestProvider(order.address || "").name;
  order.worker = $("#workerSelect").value;
  order.dispatchNote = $("#dispatchNote").value;
  renderAll();
  switchView(state.currentRole === "serviceProvider" ? "dispatch" : "executionList");
  setDispatchMode("direct");
  showToast(`${order.id} 已派工至 ${order.worker}。`);
}

function saveService(closeAfterSave = false) {
  const order = state.orders.find((item) => item.id === state.selectedOrderId && item.status === "服务中")
    || state.orders.find((item) => item.status === "服务中");
  if (!order) {
    showToast("暂无服务中工单可填写。");
    return;
  }
  if (!order.imeiVerified) {
    showToast("请先完成实机 IMEI / SN 核验，通过后再保存服务记录。");
    switchServiceTab("verify");
    return;
  }
  if (closeAfterSave && getActiveServiceTab() !== "finish") {
    showToast("请先进入完工回传步骤，再关闭工单。");
    switchServiceTab("finish");
    return;
  }
  order.scanImei = getFieldValue("#scanImei");
  order.arrivalTime = getFieldValue("#arrivalTime");
  order.appearanceStatus = getFieldValue("#appearanceStatus");
  order.dataBackupConfirm = getFieldValue("#dataBackupConfirm");
  order.warrantyDecision = getFieldValue("#warrantyDecision");
  order.faultItems = getFieldValue("#faultItems");
  order.rootCause = getFieldValue("#rootCause");
  order.testReading = getFieldValue("#testReading");
  order.diagnosisNote = getFieldValue("#diagnosisNote");
  order.repairPlanItems = getFieldValue("#repairPlanItems");
  order.repairAction = getFieldValue("#repairAction");
  order.partRequests = getFieldValue("#partRequests");
  order.partName = getFieldValue("#partName");
  order.partCode = getFieldValue("#partCode");
  order.partSerial = getFieldValue("#partSerial");
  order.partQty = getFieldValue("#partQty");
  order.oldPartHandling = getFieldValue("#oldPartHandling");
  order.fee = getFieldValue("#fee");
  order.paymentStatus = getFieldValue("#paymentStatus");
  order.servicePhotos = getFieldValue("#servicePhotos");
  order.serviceNote = getFieldValue("#serviceNote");
  order.qualityCheck = getFieldValue("#qualityCheck");
  order.customerConfirm = getFieldValue("#customerConfirm");
  order.serviceResult = getFieldValue("#serviceResult");
  order.followUpReminder = getFieldValue("#followUpReminder");
  order.faultType = order.faultItems.split("\n")[0]?.replace(/^\d+\.\s*/, "") || "已填写多项故障";
  order.diagnosis = order.diagnosisNote;
  order.fault = `${order.faultItems} / ${order.rootCause}`;
  order.part = order.partRequests || `${order.partName} ${order.partCode} ${order.partSerial} x${order.partQty}`;
  if (closeAfterSave) {
    order.status = "已关闭";
    order.review = {
      score: "4.8",
      text: "工程师准时上门，解释很清楚，更换后充电速度恢复正常。",
      tags: ["响应及时", "专业可靠", "备件充足"]
    };
    state.selectedOrderId = order.id;
    renderAll();
    if (getRoleConfig().allowedViews.includes("reviews")) {
      renderReview(order.id);
      switchView("reviews");
      showToast(`${order.id} 已关闭，可查看用户评价。`);
    } else {
      switchView("executionList");
      showToast(`${order.id} 已完成并关闭。`);
    }
    return;
  }
  renderAll();
  showToast(`${order.id} 的故障与备件信息已保存。`);
}

function renderReview(orderId) {
  const reviewItems = getReviewDataset();
  const titleEl = $("#reviewPanelTitle");
  const tagEl = $("#reviewPanelTag");
  const reviewTitleMap = {
    customerService: ["客服接待评价", "客服评价"],
    serviceProvider: ["服务人员评价", "服务评价"],
    engineer: ["我的服务评价", "个人反馈"]
  };
  const [panelTitle, panelTag] = reviewTitleMap[state.currentRole] || reviewTitleMap.customerService;
  if (titleEl) titleEl.textContent = panelTitle;
  if (tagEl) tagEl.textContent = panelTag;
  const activeReview = reviewItems.find((item) => item.id === orderId) || reviewItems[0];
  if (!activeReview) {
    $("#reviewSummary").innerHTML = `<article class="summary-chip"><strong>0</strong><span>暂无评价</span></article>`;
    $("#reviewList").innerHTML = `<article class="record-card"><strong>当前角色暂无评价查看内容</strong><p>工程师侧不展示评价模块。</p></article>`;
    return;
  }
  const averageScore = reviewItems.reduce((sum, item) => sum + Number(item.score), 0) / reviewItems.length;
  const excellentCount = reviewItems.filter((item) => Number(item.score) >= 4.7).length;
  const tagCounts = reviewItems.flatMap((item) => item.tags).reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  const topTag = Object.entries(tagCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "服务稳定";

  $("#ratingScore").textContent = activeReview.score;
  $("#ratingOrder").textContent = activeReview.id;
  $("#reviewText").textContent = activeReview.text;
  $(".review-tags").innerHTML = activeReview.tags.map((tag) => `<span>${tag}</span>`).join("");

  $("#reviewSummary").innerHTML = `
    <article class="review-stat">
      <span>平均评分</span>
      <strong>${averageScore.toFixed(1)}</strong>
    </article>
    <article class="review-stat">
      <span>${panelTag}</span>
      <strong>${reviewItems.length}</strong>
    </article>
    <article class="review-stat">
      <span>高分评价</span>
      <strong>${excellentCount}</strong>
    </article>
    <article class="review-stat">
      <span>高频反馈</span>
      <strong>${topTag}</strong>
    </article>
  `;

  $("#reviewList").innerHTML = reviewItems.map((item) => `
    <article class="review-card${item.id === activeReview.id ? " active" : ""}" data-review-card="${item.id}">
      <div class="review-card-head">
        <div>
          <strong>${item.title}</strong>
          <span>${item.subtitle}</span>
        </div>
        <b>${item.score}</b>
      </div>
      <p>${item.text}</p>
      <div class="review-card-meta">
        ${item.meta.map((meta) => `<span>${meta}</span>`).join("")}
      </div>
      <div class="review-tags compact">
        ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function closeFollowupCase(caseId) {
  const item = state.cases.find((caseItem) => caseItem.id === caseId);
  if (!item) return;
  item.status = "已关闭";
  item.followup = {
    result: $("#followupResult")?.value || "客户已认可答复，可关闭",
    method: $("#followupMethod")?.value || "电话回访",
    note: $("#followupNote")?.value || "已完成回访，客户认可答复。",
    closedAt: "2026-06-13"
  };
  state.selectedCaseId = item.id;
  renderAll();
  switchView("followups");
  showToast(`${item.id} 已完成回访并关闭。`);
}

window.closeFollowupCase = closeFollowupCase;

function applyRoleUI() {
  const config = getRoleConfig();
  const currentView = getCurrentView();
  $("#roleName").textContent = config.label;
  $("#profileName").textContent = config.profileName;
  $("#profileRole").textContent = config.label;
  $("#profileAvatar").textContent = config.profileAvatar;

  $$(".nav-item").forEach((button) => {
    button.hidden = !config.allowedViews.includes(button.dataset.view);
  });
  $$(".flow-step").forEach((button) => {
    button.hidden = !config.allowedViews.includes(button.dataset.jump);
  });

  syncQuickActions(config, currentView);

  const directCard = $('[data-assignment="direct"]');
  const providerCard = $('[data-assignment="provider"]');
  const dispatchBtn = $("#dispatchBtn");
  const providerAssignBtn = $("#providerAssignBtn");

  if (directCard && providerCard) {
    directCard.hidden = false;
    setDispatchMode(state.assignment === "provider" ? "provider" : "direct");
  }
  if ($("#providerField")) $("#providerField").style.opacity = "1";
  if (dispatchBtn) dispatchBtn.textContent = "确认派工";
  if (providerAssignBtn) providerAssignBtn.hidden = state.currentRole === "engineer";

  renderRoleBrief();
  renderMetrics();
  renderTasks();
  if (state.currentRole !== "customerService") {
    setCallDrawer(false);
  }
  if (!["customerService", "engineer"].includes(state.currentRole)) {
    setKnowledgeBot(false);
  } else {
    setKnowledgeBot(!$("#knowledgeBotPanel")?.classList.contains("hidden"));
  }

  if (!config.allowedViews.includes(getCurrentView())) {
    switchView(config.defaultView);
  } else {
    switchView(getCurrentView());
  }
}

function renderAll() {
  applyRoleUI();
  renderCases();
  renderFollowups();
  renderOrders();
  renderReview(state.selectedOrderId);
  renderKnowledge();
  syncCaseSidePanel();
  if (window.lucide) lucide.createIcons();
}

function bindEvents() {
  $("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    document.body.classList.add("app-active");
    $("#loginScreen").classList.add("hidden");
    $("#appShell").classList.remove("hidden");
    renderAll();
    setCallDrawer(state.currentRole === "customerService");
    showToast("已进入服务响应工作台。");
  });

  $$(".nav-item").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
  $$(".flow-step").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.jump)));
  $("#quickCaseBtn").addEventListener("click", (event) => {
    const targetView = event.currentTarget.dataset.targetView || "cases";
    if (state.currentRole === "serviceProvider" && targetView === "orders") {
      prepareDirectOrder();
      return;
    }
    switchView(targetView);
  });
  $("#quickOrderBtn").addEventListener("click", (event) => switchView(event.currentTarget.dataset.targetView || "orders"));
  $("#goDispatchBtn").addEventListener("click", () => switchView("dispatch"));
  $("#providerDirectOrderBtn")?.addEventListener("click", prepareDirectOrder);

  $$(".role-tabs button").forEach((button) => button.addEventListener("click", () => {
    $$(".role-tabs button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.currentRole = button.dataset.roleKey;
    renderAll();
    switchView(getRoleConfig().defaultView);
    setCallDrawer(state.currentRole === "customerService");
    showToast(`已切换为${button.dataset.role}视角。`);
  }));

  $("#callDrawerClose").addEventListener("click", () => setCallDrawer(false));
  $("#callDrawerTab").addEventListener("click", () => setCallDrawer(true));
  $("#answerCallBtn").addEventListener("click", () => showToast("已接听服务热线，开始记录客户诉求。"));
  $("#holdCallBtn").addEventListener("click", () => showToast("通话已保持，可先核查案例或工单信息。"));
  $("#endCallBtn").addEventListener("click", () => {
    setCallDrawer(false);
    showToast("通话已结束，记录可继续补充到案例。");
  });
  $$(".call-shortcuts [data-call-jump]").forEach((button) => button.addEventListener("click", () => {
    switchView(button.dataset.callJump);
  }));
  $("#aiAnalyzeBtn").addEventListener("click", analyzeCallWithAi);
  $("#applyAiDraftBtn").addEventListener("click", applyAiDraftToCase);
  $("#copyAiSummaryBtn").addEventListener("click", () => showToast("AI 摘要已复制到通话记录，可用于案例备注。"));
  initKnowledgeBotDrag();
  $("#knowledgeBotTab").addEventListener("click", (event) => {
    if (event.currentTarget.dataset.wasDragged === "true") return;
    setKnowledgeBot(true);
  });
  $("#knowledgeBotClose").addEventListener("click", () => setKnowledgeBot(false));
  $("#knowledgeAskBtn").addEventListener("click", () => askKnowledgeAi());
  $("#knowledgeOpenBtn").addEventListener("click", () => switchView("knowledge"));

  $("#caseForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const casePayload = getCurrentCasePayload();
    const newCase = {
      id: uid("CS"),
      type: $("#caseType").value,
      source: $("#caseSource").value,
      orderNo: $("#orderNo").value,
      customer: $("#customerName").value,
      phone: $("#customerPhone").value,
      backupPhone: $("#backupPhone").value,
      address: $("#customerAddress").value,
      level: $("#customerLevel").value,
      contactPreference: $("#contactPreference").value,
      device: $("#deviceModel").value,
      sn: $("#deviceSn").value,
      spec: $("#deviceSpec").value,
      osVersion: $("#osVersion").value,
      channel: $("#channel").value,
      purchaseDate: $("#purchaseDate").value,
      warranty: $("#warrantyStatus").value,
      faultCategory: casePayload.faultCategory,
      faultFrequency: casePayload.afterSales?.faultFrequency || "",
      damageHistory: casePayload.afterSales?.damageHistory || "",
      backupStatus: casePayload.afterSales?.backupStatus || "",
      request: casePayload.request,
      attachments: casePayload.afterSales?.attachments || casePayload.complaint?.evidence || "",
      desc: casePayload.desc,
      afterSales: casePayload.afterSales || null,
      consultation: casePayload.consultation || null,
      complaint: casePayload.complaint || null,
      status: $("#caseType").value === "售后" ? "待转工单" : "客服跟进"
    };
    state.cases.unshift(newCase);
    state.selectedCaseId = newCase.id;
    renderAll();
    switchView("casesList");
    showToast(`已保存${newCase.type}案例 ${newCase.id}。`);
  });

  $("#convertCaseBtn").addEventListener("click", () => openConvertModal(state.selectedCaseId));
  $("#caseType").addEventListener("change", () => applyCaseTypeFields(getCaseType()));
  $("#orderNo").addEventListener("change", () => syncOrderNoInfo(true));
  $("#serviceOrderNo").addEventListener("change", () => syncWorkOrderNoInfo(true));
  $("#convertAddress").addEventListener("input", syncConvertProvider);
  $("#convertModalClose").addEventListener("click", closeConvertModal);
  $("#cancelConvertBtn").addEventListener("click", closeConvertModal);
  $("#confirmConvertBtn").addEventListener("click", () => createOrderFromCase(state.pendingConvertCaseId));
  $("#orderForm").addEventListener("submit", (event) => {
    event.preventDefault();
    createManualOrder();
  });

  const caseFilter = $("#caseFilter");
  if (caseFilter) {
    caseFilter.addEventListener("click", (event) => {
      const target = event.target.closest("button");
      if (!target) return;
      state.caseFilter = target.dataset.filter;
      $$("#caseFilter button").forEach((button) => button.classList.toggle("active", button === target));
      $$("#caseListFilter button").forEach((button) => button.classList.toggle("active", button.dataset.filter === state.caseFilter));
      renderCases();
    });
  }

  $("#caseListFilter").addEventListener("click", (event) => {
    const target = event.target.closest("button");
    if (!target) return;
    state.caseFilter = target.dataset.filter;
    $$("#caseListFilter button").forEach((button) => button.classList.toggle("active", button === target));
    $$("#caseFilter button").forEach((button) => button.classList.toggle("active", button.dataset.filter === state.caseFilter));
    renderCases();
  });

  document.addEventListener("click", (event) => {
    const jump = event.target.closest("[data-jump]");
    if (jump) switchView(jump.dataset.jump);

    const useKnowledge = event.target.closest("[data-use-knowledge]");
    if (useKnowledge) {
      const item = knowledgeItems.find((knowledge) => knowledge.id === useKnowledge.dataset.useKnowledge);
      if (item) askKnowledgeAi(item.question);
    }

    const fill = event.target.closest("[data-fill-case]");
    if (fill) {
      const item = state.cases.find((caseItem) => caseItem.id === fill.dataset.fillCase);
      fillCase(item);
      renderCases();
      switchView("cases");
      showToast(`${item.id} 已打开案例详情。`);
    }

    const followup = event.target.closest("[data-followup-case]");
    if (followup) {
      state.selectedCaseId = followup.dataset.followupCase;
      renderFollowups();
      switchView("followups");
      showToast(`${state.selectedCaseId} 已进入回访队列。`);
    }

    const closeFollowup = event.target.closest("[data-close-followup]");
    if (closeFollowup) closeFollowupCase(closeFollowup.dataset.closeFollowup);

    const convert = event.target.closest("[data-convert]");
    if (convert) openConvertModal(convert.dataset.convert);

    const viewOrder = event.target.closest("[data-view-order]");
    if (viewOrder) {
      state.selectedOrderId = viewOrder.dataset.viewOrder;
      syncOrderFormOrigin(state.orders.find((item) => item.id === state.selectedOrderId));
      syncOrderFormDetails(state.orders.find((item) => item.id === state.selectedOrderId));
      renderOrders();
      switchView("orders");
      showToast(`${state.selectedOrderId} 已打开工单详情。`);
    }

    const select = event.target.closest("[data-select-order]");
    if (select) {
      state.selectedOrderId = select.dataset.selectOrder;
      syncOrderFormOrigin(state.orders.find((item) => item.id === state.selectedOrderId));
      renderAll();
      switchView("dispatch");
      showToast(`已选择 ${state.selectedOrderId}。`);
    }

    const use = event.target.closest("[data-use-order]");
    if (use) {
      state.selectedOrderId = use.dataset.useOrder;
      syncOrderFormOrigin(state.orders.find((item) => item.id === state.selectedOrderId));
      syncExecutionFormDetails(state.orders.find((item) => item.id === state.selectedOrderId));
      switchView("execution");
      showToast(`已开始服务 ${state.selectedOrderId}，请先扫码核验实机。`);
    }

    const review = event.target.closest("[data-review-order]");
    if (review) {
      state.selectedOrderId = review.dataset.reviewOrder;
      renderReview(state.selectedOrderId);
      switchView("reviews");
    }

    const reviewCard = event.target.closest("[data-review-card]");
    if (reviewCard) {
      state.selectedOrderId = reviewCard.dataset.reviewCard;
      renderReview(state.selectedOrderId);
    }
  });

  $$(".assign-card").forEach((button) => button.addEventListener("click", () => {
    setDispatchMode(button.dataset.assignment);
  }));
  $("#reassignAddress").addEventListener("input", () => {
    const provider = getNearestProvider($("#reassignAddress").value);
    setFieldValue("#providerSelect", provider.name);
  });

  $("#autoDispatchBtn").addEventListener("click", autoDispatchSelected);
  $("#dispatchBtn").addEventListener("click", () => dispatchSelected(false));
  $("#providerAssignBtn").addEventListener("click", () => dispatchSelected(true));
  $$(".service-tabs button").forEach((button) => button.addEventListener("click", () => {
    if (button.disabled) {
      showToast("请先完成实机 IMEI / SN 核验。");
      return;
    }
    switchServiceTab(button.dataset.serviceTab);
  }));
  $("#verifyImeiBtn").addEventListener("click", verifyServiceImei);
  $("#serviceForm").addEventListener("submit", (event) => {
    event.preventDefault();
    saveService(false);
  });
  $("#closeOrderBtn").addEventListener("click", () => saveService(true));
}

bindEvents();
applyCaseTypeFields(getCaseType(), true);
syncOrderNoInfo(false);
syncOrderFormOrigin();
renderAll();
