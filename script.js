const state = {
  currentRole: "customerService",
  selectedCaseId: "CS-260528-101",
  selectedOrderId: "WO-260528-001",
  assignment: "direct",
  caseFilter: "全部",
  cases: [
    {
      id: "CS-260528-101",
      type: "售后",
      customer: "林可",
      phone: "138 0000 9527",
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
  orders: [
    {
      id: "WO-260528-001",
      originType: "案例转工单",
      sourceRef: "CS-260528-101",
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
      id: "WO-260528-002",
      originType: "手工创建工单",
      sourceRef: "手工创建",
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
      id: "WO-260527-088",
      originType: "案例转工单",
      sourceRef: "CS-260527-079",
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
    }
  ]
};

const titles = {
  dashboard: ["工作台", "服务响应总览"],
  cases: ["客服受理", "案例详情"],
  casesList: ["客服受理", "案例列表"],
  orders: ["工单中心", "工单详情"],
  ordersList: ["工单中心", "工单列表"],
  dispatch: ["调度台", "派工调度"],
  execution: ["服务现场", "服务执行"],
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
  }
};

const roleConfigs = {
  customerService: {
    label: "客服主管",
    shortLabel: "客服",
    profileName: "林薇",
    profileAvatar: "客",
    defaultView: "dashboard",
    allowedViews: ["dashboard", "casesList", "cases", "reviews"],
    scope: "客服聚焦案例受理、诉求判断与售后案例转服务工单。",
    briefTitle: "客服工作焦点",
    briefTag: "案例受理",
    briefCards: [
      ["统一受理案例", "录入投诉、咨询、售后案例，确保客户信息、设备信息和问题描述完整。"],
      ["判断服务路径", "对售后案例判断是否需要转工单，对投诉与咨询安排回访或解释。"],
      ["推动服务闭环", "跟踪工单结果和客户反馈，把前台受理和后续服务接起来。"] 
    ],
    quickActions: [
      { id: "quickCaseBtn", label: "案例列表", view: "casesList", hidden: false, primary: false },
      { id: "quickOrderBtn", label: "新建案例", view: "cases", hidden: false, primary: true }
    ]
  },
  serviceProvider: {
    label: "服务商调度",
    shortLabel: "服务商",
    profileName: "陈拓",
    profileAvatar: "商",
    defaultView: "dashboard",
    allowedViews: ["dashboard", "ordersList", "orders", "dispatch", "reviews"],
    scope: "服务商聚焦接单、派单和服务资源调度，确保工单顺畅流转到工程师。",
    briefTitle: "服务商工作焦点",
    briefTag: "接单派单",
    briefCards: [
      ["查看工单池", "优先处理待派工和高优先级订单，核对服务方式、预约时间与区域归属。"],
      ["派单给工程师", "根据技能、区域和负荷把工单分发给合适工程师，并补充派单说明。"],
      ["跟进执行状态", "掌握服务中工单进展，必要时协调改约、换人或补件。"] 
    ],
    quickActions: [
      { id: "quickCaseBtn", label: "工单列表", view: "ordersList", hidden: false, primary: false },
      { id: "quickOrderBtn", label: "进入派工台", view: "dispatch", hidden: false, primary: true }
    ]
  },
  engineer: {
    label: "服务工程师",
    shortLabel: "工程师",
    profileName: "周明",
    profileAvatar: "工",
    defaultView: "dashboard",
    allowedViews: ["dashboard", "execution", "reviews"],
    scope: "工程师聚焦执行工单、填写故障与备件信息，并完成服务回传。",
    briefTitle: "工程师工作焦点",
    briefTag: "服务执行",
    briefCards: [
      ["处理待办工单", "查看已分配工单的预约、设备和故障背景，准备上门或到店服务。"],
      ["记录故障与备件", "在现场填写检测结论、使用备件、费用归属和处理说明。"],
      ["完成工单回传", "确认服务结果、提交完工记录并闭环到客户评价。"] 
    ],
    quickActions: [
      { id: "quickCaseBtn", label: "我的派单", view: "execution", hidden: false, primary: false },
      { id: "quickOrderBtn", label: "处理工单", view: "execution", hidden: false, primary: true }
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
  $("#roleScope").textContent = nextView === "reviews" ? "查看用户评分、评价原文与服务标签。" : config.scope;
  syncQuickActions(config, nextView);
  if (window.lucide) lucide.createIcons();
}

function syncQuickActions(config = getRoleConfig(), currentView = getCurrentView()) {
  config.quickActions.forEach((action) => {
    const button = $(`#${action.id}`);
    button.hidden = action.hidden || currentView === "reviews";
    button.dataset.targetView = action.view;
    button.innerHTML = `${action.primary ? '<i data-lucide="file-plus-2"></i>' : '<i data-lucide="plus"></i>'}${action.label}`;
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
      { label: "待接单工单", value: waitingOrders, note: "优先处理高优先级与上门服务", tone: "" },
      { label: "待派发工程师", value: waitingOrders, note: "确认区域、技能和预约时间", tone: "warn" },
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
  const waitingOrders = state.orders.filter((item) => item.status === "待派工").length;
  const activeOrders = state.orders.filter((item) => item.status === "服务中").length;
  const closedOrders = state.orders.filter((item) => item.status === "已关闭").length;
  const partsPending = state.orders.filter((item) => item.status === "服务中" && (!item.part || item.part === "无备件")).length;

  if (state.currentRole === "serviceProvider") {
    return [
      ["待接单工单", waitingOrders, "ordersList"],
      ["待派工给工程师", waitingOrders, "dispatch"],
      ["查看已关闭评价", closedOrders, "reviews"]
    ];
  }

  if (state.currentRole === "engineer") {
    return [
      ["待处理工单", activeOrders, "execution"],
      ["填写故障与备件", partsPending, "execution"],
      ["查看已完成工单", closedOrders, "reviews"]
    ];
  }

  return [
    ["售后案例待转工单", waitingCases, "casesList"],
    ["投诉咨询待跟进", followCases, "casesList"],
    ["查看已关闭评价", closedOrders, "reviews"]
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

function syncOrderFormDetails(order) {
  const activeOrder = order || state.orders.find((item) => item.id === state.selectedOrderId);
  if (!activeOrder) return;

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
  $("#orderDesc").value = activeOrder.orderDesc || activeOrder.serviceNote || "需补充工单说明。";
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
      return `<button class="mini-btn" data-use-order="${item.id}">处理工单</button>`;
    }
    return `<span class="status-pill warn">等待派工</span>`;
  }

  if (item.status === "待派工") {
    const label = state.currentRole === "serviceProvider" ? "接单派工" : "进入派工";
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
      <div class="record-actions">
        ${item.type === "售后" ? `<button class="mini-btn" data-convert="${item.id}">转服务工单</button>` : ""}
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

function orderCard(item, selectable = false) {
  const selected = item.id === state.selectedOrderId ? " selected" : "";
  return `
    <article class="record-card${selectable ? selected : ""}">
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
      <div class="record-actions">
        ${getRoleConfig().allowedViews.includes("orders") ? `<button class="mini-btn" data-view-order="${item.id}">查看详情</button>` : ""}
        ${getOrderAction(item)}
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
    .join("") || `<article class="record-card"><strong>暂无待派工工单</strong><p>新建或转入工单后会出现在这里。</p></article>`;

  $("#executionList").innerHTML = state.orders
    .filter((item) => item.status === "服务中")
    .map((item) => orderCard(item))
    .join("") || `<article class="record-card"><strong>暂无服务中工单</strong><p>派工后服务人员可在这里补充故障、备件和处理说明。</p></article>`;

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
      <article class="summary-chip blue"><strong>${waiting}</strong><span>待派工</span></article>
      <article class="summary-chip warn"><strong>${active}</strong><span>服务中</span></article>
      <article class="summary-chip green"><strong>${closed}</strong><span>已关闭</span></article>
      <article class="summary-chip"><strong>${converted}</strong><span>案例转工单</span></article>
    `;
  }

  updateSelectedOrderLabel();
  syncOrderFormOrigin(state.orders.find((item) => item.id === state.selectedOrderId));
  syncOrderFormDetails(state.orders.find((item) => item.id === state.selectedOrderId));
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
  $("#caseSource").value = caseItem.source || "400 热线";
  $("#customerName").value = caseItem.customer;
  $("#customerPhone").value = caseItem.phone;
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

  $("#orderCustomer").value = caseItem.customer || "";
  $("#orderPhone").value = caseItem.phone || "";
  $("#orderDevice").value = caseItem.device || "";
  $("#orderDeviceSn").value = caseItem.sn || "";
  $("#orderWarranty").value = caseItem.warranty || "待校验";
  $("#orderRequest").value = caseItem.request || "检测维修";
  $("#estimatedPart").value = caseItem.faultCategory === "电池 / 充电" ? "电池模组 / USB-C 接口件" : "待工程师初检";
  $("#orderDesc").value = `来源案例：${caseItem.id}，需围绕“${caseItem.desc}”安排服务处理。`;
  updateCaseDetailLabel();
}

function updateCaseDetailLabel() {
  const label = $("#caseDetailLabel");
  if (!label) return;
  const item = state.cases.find((caseItem) => caseItem.id === state.selectedCaseId);
  label.textContent = item ? `${item.id} · ${item.status}` : "新建案例";
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
    $("#autoFillHint").value = "未识别到设备档案，请核对 SN / IMEI 后重试。";
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
  $("#autoFillHint").value = `已根据 ${sn} 自动带出设备与权益信息，以下字段已锁定。`;
  if (showMessage) showToast(`已根据 ${sn} 自动带出设备信息。`);
}

function createOrderFromCase(caseId) {
  const item = state.cases.find((caseItem) => caseItem.id === caseId) || state.cases.find((caseItem) => caseItem.type === "售后");
  if (!item) {
    showToast("当前没有可转工单的售后案例。");
    return;
  }
  const order = {
    id: uid("WO"),
    originType: "案例转工单",
    sourceRef: item.id,
    customer: item.customer,
    phone: item.phone,
    device: item.device,
    sn: item.sn,
    mode: $("#serviceMode").value,
    type: $("#serviceType").value,
    appointment: $("#appointment").value,
    timeSlot: $("#timeSlot").value,
    address: $("#serviceAddress").value,
    region: $("#serviceRegion").value,
    priority: $("#priority").value,
    serviceSla: $("#serviceSla").value,
    feeOwner: $("#feeOwner").value,
    estimatedPart: $("#estimatedPart").value,
    warranty: item.warranty,
    faultCategory: item.faultCategory,
    request: item.request,
    orderDesc: $("#orderDesc").value,
    status: "待派工",
    provider: "",
    worker: "",
    fault: "",
    part: "",
    review: null
  };
  state.orders.unshift(order);
  item.status = "已转工单";
  state.selectedOrderId = order.id;
  syncOrderFormOrigin(order);
  renderAll();
  switchView(state.currentRole === "serviceProvider" ? "dispatch" : "casesList");
  showToast(`${item.id} 已转为服务工单 ${order.id}，服务商可继续派工。`);
}

function createManualOrder() {
  const order = {
    id: uid("WO"),
    originType: "手工创建工单",
    sourceRef: "手工创建",
    customer: $("#orderCustomer").value || $("#customerName").value || "新客户",
    phone: $("#orderPhone").value || $("#customerPhone").value || "",
    device: $("#orderDevice").value || $("#deviceModel").value || "待补充设备",
    sn: $("#orderDeviceSn").value || $("#deviceSn").value || "",
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
    provider: "",
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
  const providerMode = providerDispatch || state.assignment === "provider" || state.currentRole === "serviceProvider";
  order.status = "服务中";
  order.provider = providerMode ? $("#providerSelect").value : "自营服务团队";
  order.worker = providerMode ? `${$("#workerSelect").value}（服务商派工）` : $("#workerSelect").value;
  renderAll();
  showToast(providerMode ? `${order.id} 已派给工程师继续处理。` : `${order.id} 已直接派给服务人员。`);
}

function saveService(closeAfterSave = false) {
  const order = state.orders.find((item) => item.id === state.selectedOrderId && item.status === "服务中")
    || state.orders.find((item) => item.status === "服务中");
  if (!order) {
    showToast("暂无服务中工单可填写。");
    return;
  }
  order.fault = `${$("#faultType").value} / ${$("#diagnosis").value}`;
  order.part = `${$("#partName").value} ${$("#partCode").value} x${$("#partQty").value}`;
  order.fee = $("#fee").value;
  order.serviceNote = $("#serviceNote").value;
  if (closeAfterSave) {
    order.status = "已关闭";
    order.review = {
      score: "4.8",
      text: "工程师准时上门，解释很清楚，更换后充电速度恢复正常。",
      tags: ["响应及时", "专业可靠", "备件充足"]
    };
    state.selectedOrderId = order.id;
    renderAll();
    renderReview(order.id);
    switchView("reviews");
    showToast(`${order.id} 已关闭，可查看用户评价。`);
    return;
  }
  renderAll();
  showToast(`${order.id} 的故障与备件信息已保存。`);
}

function renderReview(orderId) {
  const order = state.orders.find((item) => item.id === orderId && item.review) || state.orders.find((item) => item.review);
  if (!order) return;
  $("#ratingScore").textContent = order.review.score;
  $("#ratingOrder").textContent = order.id;
  $("#reviewText").textContent = order.review.text;
  $(".review-tags").innerHTML = order.review.tags.map((tag) => `<span>${tag}</span>`).join("");
}

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

  syncQuickActions(config, currentView);

  const directCard = $('[data-assignment="direct"]');
  const providerCard = $('[data-assignment="provider"]');
  const dispatchBtn = $("#dispatchBtn");
  const providerAssignBtn = $("#providerAssignBtn");

  if (state.currentRole === "serviceProvider") {
    directCard.hidden = true;
    providerCard.classList.add("active");
    state.assignment = "provider";
    $("#providerField").style.opacity = "1";
    dispatchBtn.textContent = "派给工程师";
    providerAssignBtn.hidden = true;
  } else {
    directCard.hidden = false;
    dispatchBtn.textContent = "确认派工";
    providerAssignBtn.hidden = false;
  }

  if (state.currentRole === "engineer") {
    providerAssignBtn.hidden = true;
    directCard.hidden = false;
  }

  renderRoleBrief();
  renderMetrics();
  renderTasks();

  if (!config.allowedViews.includes(getCurrentView())) {
    switchView(config.defaultView);
  } else {
    switchView(getCurrentView());
  }
}

function renderAll() {
  applyRoleUI();
  renderCases();
  renderOrders();
  renderReview(state.selectedOrderId);
  if (window.lucide) lucide.createIcons();
}

function bindEvents() {
  $("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    document.body.classList.add("app-active");
    $("#loginScreen").classList.add("hidden");
    $("#appShell").classList.remove("hidden");
    renderAll();
    showToast("已进入服务响应工作台。");
  });

  $$(".nav-item").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
  $$(".flow-step").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.jump)));
  $("#quickCaseBtn").addEventListener("click", (event) => switchView(event.currentTarget.dataset.targetView || "cases"));
  $("#quickOrderBtn").addEventListener("click", (event) => switchView(event.currentTarget.dataset.targetView || "orders"));
  $("#goDispatchBtn").addEventListener("click", () => switchView("dispatch"));

  $$(".role-tabs button").forEach((button) => button.addEventListener("click", () => {
    $$(".role-tabs button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.currentRole = button.dataset.roleKey;
    renderAll();
    switchView(getRoleConfig().defaultView);
    showToast(`已切换为${button.dataset.role}视角。`);
  }));

  $("#caseForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const newCase = {
      id: uid("CS"),
      type: $("#caseType").value,
      source: $("#caseSource").value,
      customer: $("#customerName").value,
      phone: $("#customerPhone").value,
      backupPhone: $("#backupPhone").value,
      level: $("#customerLevel").value,
      contactPreference: $("#contactPreference").value,
      device: $("#deviceModel").value,
      sn: $("#deviceSn").value,
      spec: $("#deviceSpec").value,
      osVersion: $("#osVersion").value,
      channel: $("#channel").value,
      purchaseDate: $("#purchaseDate").value,
      warranty: $("#warrantyStatus").value,
      faultCategory: $("#faultCategory").value,
      faultFrequency: $("#faultFrequency").value,
      damageHistory: $("#damageHistory").value,
      backupStatus: $("#backupStatus").value,
      request: $("#customerRequest").value,
      attachments: $("#attachments").value,
      desc: $("#caseDesc").value,
      status: $("#caseType").value === "售后" ? "待转工单" : "客服跟进"
    };
    state.cases.unshift(newCase);
    state.selectedCaseId = newCase.id;
    renderAll();
    switchView("casesList");
    showToast(`已保存${newCase.type}案例 ${newCase.id}。`);
  });

  $("#convertCaseBtn").addEventListener("click", () => createOrderFromCase());
  $("#lookupDeviceBtn").addEventListener("click", () => lookupDeviceInfo(true));
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

    const fill = event.target.closest("[data-fill-case]");
    if (fill) {
      const item = state.cases.find((caseItem) => caseItem.id === fill.dataset.fillCase);
      fillCase(item);
      renderCases();
      switchView("cases");
      showToast(`${item.id} 已打开案例详情。`);
    }

    const convert = event.target.closest("[data-convert]");
    if (convert) createOrderFromCase(convert.dataset.convert);

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
      switchView("execution");
      showToast(`正在处理 ${state.selectedOrderId}。`);
    }

    const review = event.target.closest("[data-review-order]");
    if (review) {
      state.selectedOrderId = review.dataset.reviewOrder;
      renderReview(state.selectedOrderId);
      switchView("reviews");
    }
  });

  $$(".assign-card").forEach((button) => button.addEventListener("click", () => {
    $$(".assign-card").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.assignment = button.dataset.assignment;
    $("#providerField").style.opacity = state.assignment === "provider" ? "1" : "0.48";
  }));

  $("#dispatchBtn").addEventListener("click", () => dispatchSelected(false));
  $("#providerAssignBtn").addEventListener("click", () => dispatchSelected(true));
  $("#serviceForm").addEventListener("submit", (event) => {
    event.preventDefault();
    saveService(false);
  });
  $("#closeOrderBtn").addEventListener("click", () => saveService(true));
}

bindEvents();
lookupDeviceInfo(false);
syncOrderFormOrigin();
renderAll();
