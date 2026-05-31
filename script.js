const state = {
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
  return `${prefix}-260528-${serial}`;
}

function switchView(view) {
  $$(".view").forEach((item) => item.classList.remove("active"));
  $(`#${view}View`).classList.add("active");
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  $("#viewEyebrow").textContent = titles[view][0];
  $("#viewTitle").textContent = titles[view][1];
}

function pill(status) {
  const tone = status.includes("关闭") ? "green" : status.includes("派工") || status.includes("服务中") ? "blue" : status.includes("待") ? "warn" : "";
  return `<span class="status-pill ${tone}">${status}</span>`;
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

function renderOrders() {
  const orderList = $("#orderList");
  const cards = state.orders.map(orderCard).join("");
  orderList.innerHTML = cards;

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
  renderMetrics();
  renderTasks();
}

function orderCard(item, selectable = false) {
  const selected = item.id === state.selectedOrderId ? " selected" : "";
  const action = item.status === "待派工"
    ? `<button class="mini-btn" data-select-order="${item.id}">选择派工</button>`
    : item.status === "服务中"
      ? `<button class="mini-btn" data-use-order="${item.id}">填写服务</button>`
      : `<button class="mini-btn" data-review-order="${item.id}">查看评价</button>`;
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
        ${action}
      </div>
    </article>
  `;
}

function renderMetrics() {
  $("#metricCases").textContent = 28 + state.cases.length - 3;
  $("#metricPending").textContent = state.cases.filter((item) => item.status === "待转工单").length;
  $("#metricDispatch").textContent = state.orders.filter((item) => item.status === "待派工").length;
  $("#metricClosed").textContent = 11 + state.orders.filter((item) => item.status === "已关闭").length - 1;
}

function renderTasks() {
  const pending = state.cases.filter((item) => item.status === "待转工单").length;
  const dispatch = state.orders.filter((item) => item.status === "待派工").length;
  const service = state.orders.filter((item) => item.status === "服务中").length;
  $("#taskList").innerHTML = [
    ["售后案例待转工单", pending, "cases"],
    ["工单等待派工", dispatch, "dispatch"],
    ["服务人员待补充记录", service, "execution"]
  ].map(([label, count, view]) => `
    <button class="task-item" data-jump="${view}">
      <span><strong>${label}</strong><span>点击进入处理队列</span></span>
      <span class="status-pill ${count ? "warn" : "green"}">${count}</span>
    </button>
  `).join("");
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
  switchView("orders");
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
  const providerMode = providerDispatch || state.assignment === "provider";
  order.status = "服务中";
  order.provider = providerMode ? $("#providerSelect").value : "自营服务团队";
  order.worker = providerMode ? `${$("#workerSelect").value}（服务商派工）` : $("#workerSelect").value;
  renderAll();
  showToast(providerMode ? `${order.id} 已派给服务商并完成二次派工。` : `${order.id} 已直接派给服务人员。`);
}

function saveService(closeAfterSave = false) {
  const order = state.orders.find((item) => item.status === "服务中") || state.orders.find((item) => item.id === state.selectedOrderId);
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

function renderAll() {
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
  $("#quickCaseBtn").addEventListener("click", () => switchView("cases"));
  $("#quickOrderBtn").addEventListener("click", () => switchView("orders"));
  $("#goDispatchBtn").addEventListener("click", () => switchView("dispatch"));

  $$(".role-tabs button").forEach((button) => button.addEventListener("click", () => {
    $$(".role-tabs button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    $("#roleName").textContent = button.dataset.role;
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
      showToast(`正在填写 ${state.selectedOrderId} 的服务记录。`);
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
