const state = {
  currentRole: "customerService",
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
      source: "CS-260528-101",
      customer: "林可",
      device: "Aster X Pro",
      mode: "上门服务",
      type: "维修",
      appointment: "2026-05-29 10:00",
      address: "上海市徐汇区虹桥路 88 号 12F",
      priority: "高",
      status: "待派工",
      provider: "",
      worker: "",
      fault: "",
      part: "",
      review: null
    },
    {
      id: "WO-260528-002",
      source: "手动创建",
      customer: "孟怡",
      device: "Fold Z",
      mode: "到店服务",
      type: "保养",
      appointment: "2026-05-28 16:30",
      address: "上海徐家汇旗舰店",
      priority: "中",
      status: "服务中",
      provider: "自营服务团队",
      worker: "赵雅 / 屏幕与外观",
      fault: "外观检查与清洁保养",
      part: "无备件",
      review: null
    },
    {
      id: "WO-260527-088",
      source: "CS-260527-079",
      customer: "许然",
      device: "Aster X",
      mode: "上门服务",
      type: "换货",
      appointment: "2026-05-27 14:00",
      address: "上海市静安区南京西路 199 号",
      priority: "高",
      status: "已关闭",
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
  cases: ["客服受理", "案例录入"],
  orders: ["工单中心", "服务工单"],
  dispatch: ["调度台", "派工调度"],
  execution: ["服务现场", "服务执行"],
  reviews: ["闭环管理", "评价查看"]
};

const roleConfigs = {
  customerService: {
    label: "客服主管",
    shortLabel: "客服",
    defaultView: "cases",
    allowedViews: ["dashboard", "cases", "orders", "reviews"],
    scope: "客服聚焦案例受理、诉求判断与售后案例转服务工单。",
    briefTitle: "客服工作焦点",
    briefTag: "案例受理",
    briefCards: [
      ["统一受理案例", "录入投诉、咨询、售后案例，确保客户信息、设备信息和问题描述完整。"],
      ["判断服务路径", "对售后案例判断是否需要转工单，对投诉与咨询安排回访或解释。"],
      ["推动服务闭环", "跟踪工单结果和客户反馈，把前台受理和后续服务接起来。"] 
    ],
    quickActions: [
      { id: "quickCaseBtn", label: "新建案例", view: "cases", hidden: false, primary: false },
      { id: "quickOrderBtn", label: "手动建工单", view: "orders", hidden: false, primary: true }
    ]
  },
  serviceProvider: {
    label: "服务商调度",
    shortLabel: "服务商",
    defaultView: "dispatch",
    allowedViews: ["dashboard", "orders", "dispatch", "reviews"],
    scope: "服务商聚焦接单、派单和服务资源调度，确保工单顺畅流转到工程师。",
    briefTitle: "服务商工作焦点",
    briefTag: "接单派单",
    briefCards: [
      ["查看工单池", "优先处理待派工和高优先级订单，核对服务方式、预约时间与区域归属。"],
      ["派单给工程师", "根据技能、区域和负荷把工单分发给合适工程师，并补充派单说明。"],
      ["跟进执行状态", "掌握服务中工单进展，必要时协调改约、换人或补件。"] 
    ],
    quickActions: [
      { id: "quickCaseBtn", label: "查看工单池", view: "orders", hidden: false, primary: false },
      { id: "quickOrderBtn", label: "进入派工台", view: "dispatch", hidden: false, primary: true }
    ]
  },
  engineer: {
    label: "服务工程师",
    shortLabel: "工程师",
    defaultView: "execution",
    allowedViews: ["dashboard", "orders", "execution", "reviews"],
    scope: "工程师聚焦执行工单、填写故障与备件信息，并完成服务回传。",
    briefTitle: "工程师工作焦点",
    briefTag: "服务执行",
    briefCards: [
      ["处理待办工单", "查看已分配工单的预约、设备和故障背景，准备上门或到店服务。"],
      ["记录故障与备件", "在现场填写检测结论、使用备件、费用归属和处理说明。"],
      ["完成工单回传", "确认服务结果、提交完工记录并闭环到客户评价。"] 
    ],
    quickActions: [
      { id: "quickCaseBtn", label: "查看工单", view: "orders", hidden: false, primary: false },
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

function switchView(view) {
  const config = getRoleConfig();
  const nextView = config.allowedViews.includes(view) ? view : config.defaultView;
  $$(".view").forEach((item) => item.classList.remove("active"));
  $(`#${nextView}View`).classList.add("active");
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === nextView));
  $("#viewEyebrow").textContent = titles[nextView][0];
  $("#viewTitle").textContent = titles[nextView][1];
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
    { label: "已形成工单", value: state.orders.filter((item) => item.source !== "手动创建").length, note: "售后案例已进入服务链路", tone: "green" }
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
      ["待接单工单", waitingOrders, "orders"],
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
    ["售后案例待转工单", waitingCases, "cases"],
    ["投诉咨询待跟进", followCases, "cases"],
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
  const list = state.caseFilter === "全部" ? state.cases : state.cases.filter((item) => item.type === state.caseFilter);
  container.innerHTML = list.map((item) => `
    <article class="record-card">
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
        <button class="mini-btn" data-fill-case="${item.id}">查看/带入</button>
      </div>
    </article>
  `).join("");
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
        <span>${item.source}</span>
        <span>${item.mode}</span>
        <span>${item.type}</span>
        <span>${item.priority}优先级</span>
      </div>
      <p>${item.device} · ${item.appointment}<br>${item.address}</p>
      <div class="record-actions">
        ${getOrderAction(item)}
      </div>
    </article>
  `;
}

function renderOrders() {
  $("#orderList").innerHTML = getVisibleOrders().map((item) => orderCard(item)).join("");

  $("#dispatchList").innerHTML = state.orders
    .filter((item) => item.status === "待派工")
    .map((item) => orderCard(item, true))
    .join("") || `<article class="record-card"><strong>暂无待派工工单</strong><p>新建或转入工单后会出现在这里。</p></article>`;

  $("#executionList").innerHTML = state.orders
    .filter((item) => item.status === "服务中")
    .map((item) => orderCard(item))
    .join("") || `<article class="record-card"><strong>暂无服务中工单</strong><p>派工后服务人员可在这里补充故障、备件和处理说明。</p></article>`;

  $("#closedList").innerHTML = state.orders
    .filter((item) => item.status === "已关闭")
    .map((item) => orderCard(item))
    .join("");

  updateSelectedOrderLabel();
}

function updateSelectedOrderLabel() {
  const order = state.orders.find((item) => item.id === state.selectedOrderId);
  $("#selectedOrderLabel").textContent = order ? `${order.id} · ${order.customer}` : "请选择工单";
}

function fillCase(caseItem) {
  $("#caseType").value = caseItem.type;
  $("#caseSource").value = caseItem.source || "400 热线";
  $("#customerName").value = caseItem.customer;
  $("#customerPhone").value = caseItem.phone;
  $("#deviceModel").value = caseItem.device;
  $("#deviceSn").value = caseItem.sn;
  $("#customerLevel").value = caseItem.level || "普通用户";
  $("#faultCategory").value = caseItem.faultCategory || "电池 / 充电";
  $("#warrantyStatus").value = caseItem.warranty || "待校验";
  $("#customerRequest").value = caseItem.request || "检测维修";
  $("#caseDesc").value = caseItem.desc;
}

function createOrderFromCase(caseId) {
  const item = state.cases.find((caseItem) => caseItem.id === caseId) || state.cases.find((caseItem) => caseItem.type === "售后");
  if (!item) {
    showToast("当前没有可转工单的售后案例。");
    return;
  }
  const order = {
    id: uid("WO"),
    source: item.id,
    customer: item.customer,
    device: item.device,
    mode: $("#serviceMode").value,
    type: $("#serviceType").value,
    appointment: $("#appointment").value,
    address: $("#serviceAddress").value,
    priority: $("#priority").value,
    warranty: item.warranty,
    faultCategory: item.faultCategory,
    request: item.request,
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
  renderAll();
  switchView(state.currentRole === "customerService" ? "orders" : "dispatch");
  showToast(`${item.id} 已转为服务工单 ${order.id}。`);
}

function createManualOrder() {
  const order = {
    id: uid("WO"),
    source: "手动创建",
    customer: $("#customerName").value || "新客户",
    device: $("#deviceModel").value || "待补充设备",
    mode: $("#serviceMode").value,
    type: $("#serviceType").value,
    appointment: $("#appointment").value,
    address: $("#serviceAddress").value,
    priority: $("#priority").value,
    warranty: $("#warrantyStatus") ? $("#warrantyStatus").value : "待校验",
    faultCategory: $("#faultCategory") ? $("#faultCategory").value : "未分类",
    request: $("#customerRequest") ? $("#customerRequest").value : "检测维修",
    status: "待派工",
    provider: "",
    worker: "",
    fault: "",
    part: "",
    review: null
  };
  state.orders.unshift(order);
  state.selectedOrderId = order.id;
  renderAll();
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
  $("#roleName").textContent = config.label;

  $$(".nav-item").forEach((button) => {
    button.hidden = !config.allowedViews.includes(button.dataset.view);
  });

  config.quickActions.forEach((action) => {
    const button = $(`#${action.id}`);
    button.hidden = action.hidden;
    button.dataset.targetView = action.view;
    button.innerHTML = `${action.primary ? '<i data-lucide="file-plus-2"></i>' : '<i data-lucide="plus"></i>'}${action.label}`;
  });

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
    renderAll();
    showToast(`已保存${newCase.type}案例 ${newCase.id}。`);
  });

  $("#convertCaseBtn").addEventListener("click", () => createOrderFromCase());
  $("#orderForm").addEventListener("submit", (event) => {
    event.preventDefault();
    createManualOrder();
  });

  $("#caseFilter").addEventListener("click", (event) => {
    const target = event.target.closest("button");
    if (!target) return;
    state.caseFilter = target.dataset.filter;
    $$("#caseFilter button").forEach((button) => button.classList.toggle("active", button === target));
    renderCases();
  });

  document.addEventListener("click", (event) => {
    const jump = event.target.closest("[data-jump]");
    if (jump) switchView(jump.dataset.jump);

    const fill = event.target.closest("[data-fill-case]");
    if (fill) {
      const item = state.cases.find((caseItem) => caseItem.id === fill.dataset.fillCase);
      fillCase(item);
      showToast(`${item.id} 已带入录入表单。`);
    }

    const convert = event.target.closest("[data-convert]");
    if (convert) createOrderFromCase(convert.dataset.convert);

    const select = event.target.closest("[data-select-order]");
    if (select) {
      state.selectedOrderId = select.dataset.selectOrder;
      renderAll();
      switchView("dispatch");
      showToast(`已选择 ${state.selectedOrderId}。`);
    }

    const use = event.target.closest("[data-use-order]");
    if (use) {
      state.selectedOrderId = use.dataset.useOrder;
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
renderAll();
