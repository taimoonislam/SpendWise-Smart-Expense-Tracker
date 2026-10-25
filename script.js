"use strict";

/* ==========================================
   SpendWise — Smart Expense Tracker
   Built with HTML, CSS and Vanilla JavaScript
   ========================================== */

const STORAGE_KEYS = {
  transactions: "spendwise_transactions_v1",
  budget: "spendwise_budget_v1",
  language: "spendwise_language_v1",
  theme: "spendwise_theme_v1"
};

const CATEGORIES = {
  expense: [
    "Food", "Transport", "Shopping", "Bills",
    "Health", "Education", "Entertainment", "Other"
  ],
  income: ["Salary", "Freelance", "Business", "Gift", "Other"]
};

const CATEGORY_ICONS = {
  Food: "⌁",
  Transport: "↗",
  Shopping: "◇",
  Bills: "▤",
  Health: "✚",
  Education: "▣",
  Entertainment: "♫",
  Salary: "↙",
  Freelance: "✦",
  Business: "▥",
  Gift: "♡",
  Other: "✳"
};

const TEXT = {
  en: {
    workspace: "WORKSPACE",
    overview: "Overview",
    transactions: "Transactions",
    budget: "Monthly budget",
    smallSteps: "Small steps add up.",
    tipText: "A little awareness today can make tomorrow feel easier.",
    yourSpace: "Your space",
    privateDevice: "Private on this device",
    addTransaction: "Add transaction",
    yourMoneyClearer: "YOUR MONEY, A LITTLE CLEARER",
    goodDay: "A good day to",
    takeControl: "take control.",
    welcomeText: "Keep the little things in view. The bigger picture gets easier.",
    totalBalance: "Total balance",
    balanceHint: "Income minus expenses",
    incomeThisMonth: "Income this month",
    moneyIn: "Money coming in",
    expensesThisMonth: "Expenses this month",
    moneyOut: "Money going out",
    savingsRate: "Savings rate",
    incomeSaved: "Of this month's income",
    spendingOverview: "Spending overview",
    spendingDescription: "Your expenses, at a glance",
    expenses: "Expenses",
    nothingToChart: "Nothing to chart yet",
    addExpenseHint: "Add an expense to see your spending trend.",
    earlier: "Earlier",
    recent: "Recent",
    monthlyBudget: "Monthly budget",
    budgetDescription: "Give your spending a gentle limit",
    perMonth: "per month",
    food: "Food",
    transport: "Transport",
    other: "Other",
    recentTransactions: "Recent transactions",
    transactionDescription: "A simple record of where it all goes",
    exportCsv: "Export CSV",
    addNew: "Add new",
    searchPlaceholder: "Search transactions...",
    transaction: "TRANSACTION",
    category: "CATEGORY",
    date: "DATE",
    amount: "AMOUNT",
    noTransactions: "No transactions found",
    emptyHint: "Try changing your search or add a new transaction.",
    clearFilters: "Clear filters",
    madeFor: "made for mindful money habits",
    localData: "Your data stays in this browser.",
    keepItSimple: "KEEP IT SIMPLE",
    expense: "Expense",
    income: "Income",
    description: "Description",
    amountTk: "Amount (৳)",
    noteOptional: "Note (optional)",
    cancel: "Cancel",
    saveTransaction: "Save transaction",
    yourPlan: "YOUR PLAN",
    setBudget: "Set your monthly budget",
    monthlyLimit: "Monthly spending limit (৳)",
    budgetHelper: "Choose an amount that feels realistic for you. You can change it any time.",
    saveBudget: "Save budget",
    allTypes: "All types",
    allCategories: "All categories",
    thisMonth: "This month",
    last30: "Last 30 days",
    noSpending: "No spending yet",
    spent: "spent",
    transactionsCount: "transactions",
    transactionCount: "transaction",
    expenseLower: "expenses",
    incomeLower: "income",
    budgetGood: "You're building a good habit. Keep going.",
    budgetNear: "You're getting close to your monthly budget.",
    budgetOver: "You've passed your monthly budget. Review your spending.",
    budgetSaved: "Monthly budget updated.",
    transactionAdded: "Transaction added successfully.",
    transactionUpdated: "Transaction updated successfully.",
    transactionDeleted: "Transaction deleted.",
    confirmDelete: "Delete this transaction?",
    confirmClear: "Clear all transaction filters?",
    noExport: "There are no transactions to export.",
    csvReady: "CSV export downloaded.",
    enterValidAmount: "Please enter a valid amount greater than zero.",
    enterTitle: "Please enter a description.",
    selectDate: "Please select a date.",
    saveError: "Could not save data in this browser.",
    budgetInvalid: "Please enter a valid monthly budget.",
    editTransaction: "Edit transaction",
    edit: "Edit",
    delete: "Delete",
    today: "Today",
    overBudget: "Over budget",
    remaining: "remaining",
    spentOfBudget: "of budget used",
    noNotes: "No note",
    searchEmpty: "No matching transactions",
    categoryFood: "Food",
    categoryTransport: "Transport",
    categoryShopping: "Shopping",
    categoryBills: "Bills",
    categoryHealth: "Health",
    categoryEducation: "Education",
    categoryEntertainment: "Entertainment",
    categorySalary: "Salary",
    categoryFreelance: "Freelance",
    categoryBusiness: "Business",
    categoryGift: "Gift",
    categoryOther: "Other"
  },

  bn: {
    workspace: "কর্মক্ষেত্র",
    overview: "ওভারভিউ",
    transactions: "লেনদেন",
    budget: "মাসিক বাজেট",
    smallSteps: "ছোট পদক্ষেপেই পরিবর্তন আসে।",
    tipText: "আজকের সামান্য সচেতনতা আগামীকাল সহজ করতে পারে।",
    yourSpace: "আপনার জায়গা",
    privateDevice: "এই ডিভাইসেই ব্যক্তিগত",
    addTransaction: "লেনদেন যোগ করুন",
    yourMoneyClearer: "টাকার হিসাব থাকুক পরিষ্কার",
    goodDay: "আজই শুরু হোক",
    takeControl: "নিজের নিয়ন্ত্রণ।",
    welcomeText: "ছোট হিসাবগুলো গুছিয়ে রাখুন, বড় ছবিটাও পরিষ্কার হবে।",
    totalBalance: "মোট ব্যালেন্স",
    balanceHint: "আয় থেকে খরচ বাদ",
    incomeThisMonth: "এই মাসের আয়",
    moneyIn: "টাকা এসেছে",
    expensesThisMonth: "এই মাসের খরচ",
    moneyOut: "টাকা খরচ হয়েছে",
    savingsRate: "সঞ্চয়ের হার",
    incomeSaved: "এই মাসের আয়ের মধ্যে",
    spendingOverview: "খরচের চিত্র",
    spendingDescription: "এক নজরে আপনার খরচ",
    expenses: "খরচ",
    nothingToChart: "এখনো কোনো চার্ট নেই",
    addExpenseHint: "খরচ যোগ করলে এখানে চার্ট দেখা যাবে।",
    earlier: "আগে",
    recent: "সাম্প্রতিক",
    monthlyBudget: "মাসিক বাজেট",
    budgetDescription: "খরচের জন্য একটি সীমা ঠিক করুন",
    perMonth: "প্রতি মাসে",
    food: "খাবার",
    transport: "যাতায়াত",
    other: "অন্যান্য",
    recentTransactions: "সাম্প্রতিক লেনদেন",
    transactionDescription: "টাকা কোথায় যাচ্ছে তার সহজ হিসাব",
    exportCsv: "CSV ডাউনলোড",
    addNew: "নতুন যোগ করুন",
    searchPlaceholder: "লেনদেন খুঁজুন...",
    transaction: "লেনদেন",
    category: "ক্যাটাগরি",
    date: "তারিখ",
    amount: "পরিমাণ",
    noTransactions: "কোনো লেনদেন পাওয়া যায়নি",
    emptyHint: "সার্চ পরিবর্তন করুন অথবা নতুন লেনদেন যোগ করুন।",
    clearFilters: "ফিল্টার মুছুন",
    madeFor: "সচেতন অর্থ ব্যবস্থাপনার জন্য",
    localData: "আপনার তথ্য এই ব্রাউজারেই থাকে।",
    keepItSimple: "সহজ রাখুন",
    expense: "খরচ",
    income: "আয়",
    description: "বিবরণ",
    amountTk: "পরিমাণ (৳)",
    noteOptional: "নোট (ঐচ্ছিক)",
    cancel: "বাতিল",
    saveTransaction: "লেনদেন সংরক্ষণ",
    yourPlan: "আপনার পরিকল্পনা",
    setBudget: "মাসিক বাজেট নির্ধারণ",
    monthlyLimit: "মাসিক খরচের সীমা (৳)",
    budgetHelper: "আপনার জন্য বাস্তবসম্মত একটি পরিমাণ বেছে নিন। পরে পরিবর্তন করতে পারবেন।",
    saveBudget: "বাজেট সংরক্ষণ",
    allTypes: "সব ধরনের",
    allCategories: "সব ক্যাটাগরি",
    thisMonth: "এই মাস",
    last30: "গত ৩০ দিন",
    noSpending: "এখনো খরচ নেই",
    spent: "খরচ",
    transactionsCount: "টি লেনদেন",
    transactionCount: "টি লেনদেন",
    expenseLower: "খরচ",
    incomeLower: "আয়",
    budgetGood: "আপনি ভালো অভ্যাস গড়ে তুলছেন। চালিয়ে যান।",
    budgetNear: "আপনার মাসিক বাজেটের কাছাকাছি পৌঁছে গেছেন।",
    budgetOver: "মাসিক বাজেট অতিক্রম হয়েছে। খরচ পর্যালোচনা করুন।",
    budgetSaved: "মাসিক বাজেট আপডেট হয়েছে।",
    transactionAdded: "লেনদেন যোগ হয়েছে।",
    transactionUpdated: "লেনদেন আপডেট হয়েছে।",
    transactionDeleted: "লেনদেন মুছে ফেলা হয়েছে।",
    confirmDelete: "এই লেনদেনটি মুছে ফেলবেন?",
    confirmClear: "সব লেনদেনের ফিল্টার পরিষ্কার করবেন?",
    noExport: "ডাউনলোড করার মতো কোনো লেনদেন নেই।",
    csvReady: "CSV ফাইল ডাউনলোড হয়েছে।",
    enterValidAmount: "শূন্যের চেয়ে বড় সঠিক পরিমাণ দিন।",
    enterTitle: "লেনদেনের বিবরণ লিখুন।",
    selectDate: "তারিখ নির্বাচন করুন।",
    saveError: "ব্রাউজারে তথ্য সংরক্ষণ করা যায়নি।",
    budgetInvalid: "সঠিক মাসিক বাজেট দিন।",
    editTransaction: "লেনদেন সম্পাদনা",
    edit: "সম্পাদনা",
    delete: "মুছুন",
    today: "আজ",
    overBudget: "বাজেট অতিক্রম",
    remaining: "বাকি",
    spentOfBudget: "বাজেট ব্যবহৃত",
    noNotes: "কোনো নোট নেই",
    searchEmpty: "মিল পাওয়া যায়নি",
    categoryFood: "খাবার",
    categoryTransport: "যাতায়াত",
    categoryShopping: "কেনাকাটা",
    categoryBills: "বিল",
    categoryHealth: "স্বাস্থ্য",
    categoryEducation: "শিক্ষা",
    categoryEntertainment: "বিনোদন",
    categorySalary: "বেতন",
    categoryFreelance: "ফ্রিল্যান্স",
    categoryBusiness: "ব্যবসা",
    categoryGift: "উপহার",
    categoryOther: "অন্যান্য"
  },

  bl: {
    workspace: "WORKSPACE",
    overview: "Overview",
    transactions: "Transactions",
    budget: "Monthly budget",
    smallSteps: "Choto step-o change ane.",
    tipText: "Ajker ektu awareness kalke aro easy korte pare.",
    yourSpace: "Tomar space",
    privateDevice: "Ei device-e private",
    addTransaction: "Transaction add koro",
    yourMoneyClearer: "TOMAR MONEY, ARO CLEAR",
    goodDay: "Ajker din ta",
    takeControl: "control newar.",
    welcomeText: "Choto hisab gulo chokhe rakho, bigger picture clear hobe.",
    totalBalance: "Total balance",
    balanceHint: "Income minus expenses",
    incomeThisMonth: "Ei masher income",
    moneyIn: "Taka ashche",
    expensesThisMonth: "Ei masher expenses",
    moneyOut: "Taka khoroch hocche",
    savingsRate: "Savings rate",
    incomeSaved: "Ei masher income-er moddhe",
    spendingOverview: "Spending overview",
    spendingDescription: "Tomar expenses ek nojore",
    expenses: "Expenses",
    nothingToChart: "Ekhono chart nei",
    addExpenseHint: "Expense add korle chart dekhabe.",
    earlier: "Earlier",
    recent: "Recent",
    monthlyBudget: "Monthly budget",
    budgetDescription: "Spending-er ekta limit rakho",
    perMonth: "per month",
    food: "Food",
    transport: "Transport",
    other: "Other",
    recentTransactions: "Recent transactions",
    transactionDescription: "Taka kothay jacche tar simple hisab",
    exportCsv: "CSV export",
    addNew: "Notun add",
    searchPlaceholder: "Transaction search koro...",
    transaction: "TRANSACTION",
    category: "CATEGORY",
    date: "DATE",
    amount: "AMOUNT",
    noTransactions: "Kono transaction paoa jayni",
    emptyHint: "Search change koro ba notun transaction add koro.",
    clearFilters: "Filter clear",
    madeFor: "mindful money habits-er jonno",
    localData: "Tomar data ei browser-e thake.",
    keepItSimple: "Simple rakho",
    expense: "Expense",
    income: "Income",
    description: "Description",
    amountTk: "Amount (৳)",
    noteOptional: "Note (optional)",
    cancel: "Cancel",
    saveTransaction: "Transaction save",
    yourPlan: "TOMAR PLAN",
    setBudget: "Monthly budget set koro",
    monthlyLimit: "Monthly spending limit (৳)",
    budgetHelper: "Tomar jonno realistic amount choose koro. Pore change korte parbe.",
    saveBudget: "Budget save",
    allTypes: "All types",
    allCategories: "All categories",
    thisMonth: "Ei mash",
    last30: "Last 30 days",
    noSpending: "Ekhono spending nei",
    spent: "spent",
    transactionsCount: "transactions",
    transactionCount: "transaction",
    expenseLower: "expenses",
    incomeLower: "income",
    budgetGood: "Bhalo habit build korcho. Continue koro!",
    budgetNear: "Monthly budget-er kachakachi chole eshecho.",
    budgetOver: "Monthly budget cross korecho. Spending review koro.",
    budgetSaved: "Monthly budget update hoyeche.",
    transactionAdded: "Transaction successfully add hoyeche.",
    transactionUpdated: "Transaction update hoyeche.",
    transactionDeleted: "Transaction delete hoyeche.",
    confirmDelete: "Ei transaction delete korbe?",
    confirmClear: "Shob transaction filter clear korbe?",
    noExport: "Export korar moto transaction nei.",
    csvReady: "CSV file download hoyeche.",
    enterValidAmount: "Zero-er cheye beshi valid amount dao.",
    enterTitle: "Description likho.",
    selectDate: "Date select koro.",
    saveError: "Browser-e data save kora jayni.",
    budgetInvalid: "Valid monthly budget dao.",
    editTransaction: "Transaction edit",
    edit: "Edit",
    delete: "Delete",
    today: "Aj",
    overBudget: "Budget cross",
    remaining: "baki",
    spentOfBudget: "budget use hoyeche",
    noNotes: "Note nei",
    searchEmpty: "Kono match paoa jayni",
    categoryFood: "Food",
    categoryTransport: "Transport",
    categoryShopping: "Shopping",
    categoryBills: "Bills",
    categoryHealth: "Health",
    categoryEducation: "Education",
    categoryEntertainment: "Entertainment",
    categorySalary: "Salary",
    categoryFreelance: "Freelance",
    categoryBusiness: "Business",
    categoryGift: "Gift",
    categoryOther: "Other"
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function localDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function makeId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function safeRead(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch (error) {
    console.warn(`Could not read ${key}:`, error);
    return fallback;
  }
}

function safeWrite(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Could not save ${key}:`, error);
    showToast(t("saveError"));
    return false;
  }
}

function getInitialTransactions() {
  const saved = safeRead(STORAGE_KEYS.transactions, null);

  if (Array.isArray(saved)) {
    return saved.filter((item) =>
      item &&
      typeof item.id === "string" &&
      typeof item.title === "string" &&
      Number.isFinite(Number(item.amount)) &&
      Number(item.amount) > 0 &&
      ["income", "expense"].includes(item.type)
    );
  }

  // Sample entries help demonstrate the dashboard on first launch.
  // Users can edit or delete these examples.
  const today = new Date();
  const dateOffset = (days) => {
    const date = new Date(today);
    date.setDate(date.getDate() - days);
    return localDateString(date);
  };

  return [
    {
      id: makeId(),
      title: "Monthly allowance",
      type: "income",
      amount: 12000,
      category: "Salary",
      date: dateOffset(1),
      note: "Example transaction"
    },
    {
      id: makeId(),
      title: "Lunch",
      type: "expense",
      amount: 280,
      category: "Food",
      date: dateOffset(0),
      note: "Example transaction"
    },
    {
      id: makeId(),
      title: "Bus fare",
      type: "expense",
      amount: 100,
      category: "Transport",
      date: dateOffset(2),
      note: "Example transaction"
    },
    {
      id: makeId(),
      title: "Course materials",
      type: "expense",
      amount: 650,
      category: "Education",
      date: dateOffset(4),
      note: "Example transaction"
    },
    {
      id: makeId(),
      title: "Freelance work",
      type: "income",
      amount: 2500,
      category: "Freelance",
      date: dateOffset(6),
      note: "Example transaction"
    },
    {
      id: makeId(),
      title: "Groceries",
      type: "expense",
      amount: 850,
      category: "Food",
      date: dateOffset(8),
      note: "Example transaction"
    }
  ];
}

let transactions = getInitialTransactions();
let monthlyBudget = Number(safeRead(STORAGE_KEYS.budget, 25000));
let language = safeRead(STORAGE_KEYS.language, "en");
let currentTheme = safeRead(STORAGE_KEYS.theme, "light");
let toastTimeout = null;
let editingTransactionId = null;

if (!Number.isFinite(monthlyBudget) || monthlyBudget <= 0) {
  monthlyBudget = 25000;
}

if (!TEXT[language]) language = "en";
if (!["light", "dark"].includes(currentTheme)) currentTheme = "light";

function t(key) {
  return TEXT[language]?.[key] ?? TEXT.en[key] ?? key;
}

function money(amount) {
  const number = Number(amount) || 0;
  return new Intl.NumberFormat(
    language === "bn" ? "bn-BD" : "en-BD",
    {
      style: "currency",
      currency: "BDT",
      maximumFractionDigits: 2
    }
  ).format(number);
}

function formatDate(dateString) {
  if (!dateString) return "—";

  const date = new Date(`${dateString}T00:00:00`);

  if (Number.isNaN(date.getTime())) return dateString;

  return new Intl.DateTimeFormat(
    language === "bn" ? "bn-BD" : "en-GB",
    {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
  ).format(date);
}

function monthKey(dateString) {
  return String(dateString || "").slice(0, 7);
}

function currentMonthKey() {
  return localDateString().slice(0, 7);
}

function currentMonthTransactions() {
  return transactions.filter(
    (item) => monthKey(item.date) === currentMonthKey()
  );
}

function sum(items, type) {
  return items
    .filter((item) => !type || item.type === type)
    .reduce((total, item) => total + Number(item.amount), 0);
}

function persistTransactions() {
  return safeWrite(STORAGE_KEYS.transactions, transactions);
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  if (toastTimeout) clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function translateCategory(category) {
  const map = {
    Food: "categoryFood",
    Transport: "categoryTransport",
    Shopping: "categoryShopping",
    Bills: "categoryBills",
    Health: "categoryHealth",
    Education: "categoryEducation",
    Entertainment: "categoryEntertainment",
    Salary: "categorySalary",
    Freelance: "categoryFreelance",
    Business: "categoryBusiness",
    Gift: "categoryGift",
    Other: "categoryOther"
  };

  return t(map[category] || "categoryOther");
}

function applyLanguage() {
  document.documentElement.lang = language === "bn" ? "bn" : "en";

  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translated = t(key);

    if (translated) element.textContent = translated;
  });

  $$("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  const typeFilter = $("#type-filter");
  if (typeFilter) {
    typeFilter.options[0].textContent = t("allTypes");
    typeFilter.options[1].textContent = t("expense") + "s";
    typeFilter.options[2].textContent = t("income");
  }

  const categoryFilter = $("#category-filter");
  if (categoryFilter) {
    categoryFilter.options[0].textContent = t("allCategories");

    Array.from(categoryFilter.options).slice(1).forEach((option) => {
      option.textContent = translateCategory(option.value);
    });
  }

  const chartPeriod = $("#chart-period");
  if (chartPeriod) {
    chartPeriod.options[0].textContent = t("thisMonth");
    chartPeriod.options[1].textContent = t("last30");
  }

  $("#language-select").value = language;
  $("#today-label").textContent = `${t("today")} · ${formatDate(localDateString())}`;

  renderAll();
}

function applyTheme() {
  document.body.classList.toggle("dark-theme", currentTheme === "dark");

  const button = $("#theme-toggle");
  button.textContent = currentTheme === "dark" ? "☀" : "☾";
  button.setAttribute(
    "aria-label",
    currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
  );

  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", currentTheme === "dark" ? "#171824" : "#f6f5f2");

  drawChart();
}

function renderSummary() {
  const monthItems = currentMonthTransactions();
  const income = sum(monthItems, "income");
  const expenses = sum(monthItems, "expense");
  const allIncome = sum(transactions, "income");
  const allExpenses = sum(transactions, "expense");
  const balance = allIncome - allExpenses;
  const savings = income > 0 ? ((income - expenses) / income) * 100 : 0;

  $("#total-balance").textContent = money(balance);
  $("#total-income").textContent = money(income);
  $("#total-expenses").textContent = money(expenses);
  $("#savings-rate").textContent = `${Math.round(savings)}%`;
}

function getFilteredTransactions() {
  const search = $("#search-input").value.trim().toLowerCase();
  const type = $("#type-filter").value;
  const category = $("#category-filter").value;

  return [...transactions]
    .filter((item) => {
      const matchesSearch = [
        item.title,
        item.category,
        item.note,
        item.date
      ].some((value) => String(value || "").toLowerCase().includes(search));

      const matchesType = type === "all" || item.type === type;
      const matchesCategory = category === "all" || item.category === category;

      return matchesSearch && matchesType && matchesCategory;
    })
    .sort((a, b) => {
      if (a.date !== b.date) return b.date.localeCompare(a.date);
      return String(b.id).localeCompare(String(a.id));
    });
}

function renderTransactions() {
  const tbody = $("#transaction-list");
  const empty = $("#no-transactions");
  const filtered = getFilteredTransactions();

  tbody.innerHTML = filtered.map((item) => {
    const icon = CATEGORY_ICONS[item.category] || "✳";
    const typeClass = item.type === "income" ? "income" : "expense";
    const amountSign = item.type === "income" ? "+" : "−";
    const title = escapeHTML(item.title);
    const note = escapeHTML(item.note || "");
    const category = escapeHTML(translateCategory(item.category));
    const date = escapeHTML(formatDate(item.date));

    return `
      <tr>
        <td>
          <div class="transaction-name">
            <span class="transaction-icon ${typeClass === "income" ? "income-icon" : ""}">${icon}</span>
            <div>
              <strong title="${title}">${title}</strong>
              <small title="${note}">${note || t("noNotes")}</small>
            </div>
          </div>
        </td>
        <td><span class="category-pill">${category}</span></td>
        <td class="transaction-date">${date}</td>
        <td><span class="amount-value ${typeClass}">${amountSign}${money(item.amount)}</span></td>
        <td>
          <div class="row-actions">
            <button class="row-action" data-action="edit" data-id="${escapeHTML(item.id)}" aria-label="${t("edit")}" title="${t("edit")}">✎</button>
            <button class="row-action delete" data-action="delete" data-id="${escapeHTML(item.id)}" aria-label="${t("delete")}" title="${t("delete")}">×</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  empty.hidden = filtered.length !== 0;

  const count = filtered.length;
  const countLabel = language === "bn"
    ? `${count.toLocaleString("bn-BD")}${t("transactionCount")}`
    : `${count} ${count === 1 ? t("transactionCount") : t("transactionsCount")}`;

  $("#transaction-count").textContent = countLabel;
}

function renderBudget() {
  const monthItems = currentMonthTransactions();
  const expenses = sum(monthItems, "expense");
  const percent = monthlyBudget > 0 ? (expenses / monthlyBudget) * 100 : 0;

  $("#budget-amount").textContent = money(monthlyBudget);
  $("#budget-used-label").textContent = `${money(expenses)} ${t("spent")}`;
  $("#budget-percent").textContent = `${Math.round(percent)}%`;

  const progress = $("#budget-progress");
  progress.style.width = `${Math.min(percent, 100)}%`;
  progress.classList.toggle("over-budget", percent > 100);

  const message = $("#budget-message");
  const messageText = message.querySelector("span:last-child");

  if (percent > 100) {
    messageText.textContent = t("budgetOver");
  } else if (percent >= 80) {
    messageText.textContent = t("budgetNear");
  } else {
    messageText.textContent = t("budgetGood");
  }

  const categoryAmounts = {
    food: sum(monthItems.filter((item) => item.category === "Food"), "expense"),
    transport: sum(monthItems.filter((item) => item.category === "Transport"), "expense"),
    other: sum(
      monthItems.filter((item) =>
        !["Food", "Transport"].includes(item.category)
      ),
      "expense"
    )
  };

  Object.entries(categoryAmounts).forEach(([key, amount]) => {
    $(`#${key}-spend`).textContent = money(amount);
    $(`#${key}-track`).style.width =
      `${Math.min(expenses > 0 ? (amount / expenses) * 100 : 0, 100)}%`;
  });
}

function chartTransactions() {
  const period = $("#chart-period").value;
  const now = new Date();

  return transactions.filter((item) => {
    if (item.type !== "expense") return false;

    const date = new Date(`${item.date}T00:00:00`);

    if (Number.isNaN(date.getTime())) return false;

    if (period === "month") {
      return monthKey(item.date) === currentMonthKey();
    }

    const start = new Date(now);
    start.setDate(start.getDate() - 29);
    start.setHours(0, 0, 0, 0);

    return date >= start && date <= now;
  });
}

function drawChart() {
  const canvas = $("#spending-chart");
  const empty = $("#chart-empty");

  if (!canvas || !empty) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const items = chartTransactions();
  const total = sum(items, "expense");

  $("#chart-total").textContent = money(total);
  $("#chart-note").textContent = items.length
    ? `${items.length} ${t("transactionsCount")}`
    : t("noSpending");

  const rect = canvas.getBoundingClientRect();
  const width = Math.max(280, rect.width || 400);
  const height = Math.max(150, rect.height || 205);
  const ratio = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, width, height);

  empty.hidden = items.length > 0;

  if (!items.length) return;

  const days = 7;
  const amounts = Array(days).fill(0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  items.forEach((item) => {
    const date = new Date(`${item.date}T00:00:00`);
    const difference = Math.floor((today - date) / 86400000);

    let index;

    if ($("#chart-period").value === "month") {
      const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
      const dayIndex = date.getDate() - 1;
      const daysInMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
      ).getDate();

      index = Math.min(
        days - 1,
        Math.floor((dayIndex / daysInMonth) * days)
      );
    } else {
      index = days - 1 - difference;
    }

    if (index >= 0 && index < days) {
      amounts[index] += Number(item.amount);
    }
  });

  const maxAmount = Math.max(...amounts, 1);
  const padding = { top: 15, right: 8, bottom: 12, left: 8 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const gap = 12;
  const barWidth = (chartWidth - gap * (days - 1)) / days;

  const styles = getComputedStyle(document.body);
  const gridColor = styles.getPropertyValue("--line").trim() || "#eeedf1";
  const primaryColor = styles.getPropertyValue("--primary").trim() || "#7770dc";
  const mutedColor = styles.getPropertyValue("--muted").trim() || "#858598";

  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;

  for (let i = 0; i < 4; i++) {
    const y = padding.top + (chartHeight / 3) * i;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
  }

  amounts.forEach((amount, index) => {
    const barHeight = amount > 0
      ? Math.max(4, (amount / maxAmount) * (chartHeight - 8))
      : 3;

    const x = padding.left + index * (barWidth + gap);
    const y = padding.top + chartHeight - barHeight;

    ctx.fillStyle = amount > 0 ? primaryColor : gridColor;

    const radius = Math.min(5, barWidth / 2);
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.arcTo(x + barWidth, y, x + barWidth, y + radius, radius);
    ctx.lineTo(x + barWidth, padding.top + chartHeight);
    ctx.lineTo(x, padding.top + chartHeight);
    ctx.closePath();
    ctx.fill();
  });

  ctx.fillStyle = mutedColor;
}

function renderAll() {
  renderSummary();
  renderTransactions();
  renderBudget();
  drawChart();
}

/* Transaction modal */

function updateCategoryOptions(type, selectedCategory = "") {
  const select = $("#transaction-category");
  const categories = CATEGORIES[type] || CATEGORIES.expense;

  select.innerHTML = categories.map((category) =>
    `<option value="${escapeHTML(category)}">${escapeHTML(translateCategory(category))}</option>`
  ).join("");

  if (categories.includes(selectedCategory)) {
    select.value = selectedCategory;
  }
}

function setTransactionType(type) {
  const validType = type === "income" ? "income" : "expense";

  $("#transaction-type").value = validType;

  $$(".type-choice").forEach((button) => {
    button.classList.toggle("active", button.dataset.type === validType);
  });

  const existingCategory = $("#transaction-category").value;
  updateCategoryOptions(validType, existingCategory);
}

function openTransactionModal(transaction = null) {
  const modal = $("#transaction-modal");
  const form = $("#transaction-form");

  form.reset();
  $("#form-error").textContent = "";

  editingTransactionId = transaction ? transaction.id : null;
  $("#transaction-id").value = editingTransactionId || "";

  $("#modal-title").textContent = transaction
    ? t("editTransaction")
    : t("addTransaction");

  $("#save-transaction").textContent = transaction
    ? t("edit")
    : t("saveTransaction");

  setTransactionType(transaction?.type || "expense");

  $("#transaction-title").value = transaction?.title || "";
  $("#transaction-amount").value = transaction?.amount ?? "";
  $("#transaction-date").value = transaction?.date || localDateString();
  $("#transaction-note").value = transaction?.note || "";

  updateCategoryOptions(
    transaction?.type || "expense",
    transaction?.category || ""
  );

  modal.hidden = false;
  document.body.style.overflow = "hidden";

  setTimeout(() => $("#transaction-title").focus(), 50);
}

function closeTransactionModal() {
  $("#transaction-modal").hidden = true;
  document.body.style.overflow = "";
  editingTransactionId = null;
}

function saveTransaction(event) {
  event.preventDefault();

  const title = $("#transaction-title").value.trim();
  const amount = Number($("#transaction-amount").value);
  const type = $("#transaction-type").value;
  const category = $("#transaction-category").value;
  const date = $("#transaction-date").value;
  const note = $("#transaction-note").value.trim();

  const error = $("#form-error");
  error.textContent = "";

  if (!title) {
    error.textContent = t("enterTitle");
    $("#transaction-title").focus();
    return;
  }

  if (!Number.isFinite(amount) || amount <= 0 || amount > 100000000) {
    error.textContent = t("enterValidAmount");
    $("#transaction-amount").focus();
    return;
  }

  if (!date) {
    error.textContent = t("selectDate");
    $("#transaction-date").focus();
    return;
  }

  const transaction = {
    id: editingTransactionId || makeId(),
    title,
    amount,
    type,
    category,
    date,
    note
  };

  const previous = [...transactions];

  if (editingTransactionId) {
    transactions = transactions.map((item) =>
      item.id === editingTransactionId ? transaction : item
    );
  } else {
    transactions.push(transaction);
  }

  if (!persistTransactions()) {
    transactions = previous;
    return;
  }

  closeTransactionModal();
  renderAll();

  showToast(
    editingTransactionId
      ? t("transactionUpdated")
      : t("transactionAdded")
  );
}

function editTransaction(id) {
  const transaction = transactions.find((item) => item.id === id);
  if (!transaction) return;

  openTransactionModal(transaction);
}

function deleteTransaction(id) {
  const transaction = transactions.find((item) => item.id === id);
  if (!transaction) return;

  if (!window.confirm(t("confirmDelete"))) return;

  const previous = [...transactions];
  transactions = transactions.filter((item) => item.id !== id);

  if (!persistTransactions()) {
    transactions = previous;
    return;
  }

  renderAll();
  showToast(t("transactionDeleted"));
}

/* Budget modal */

function openBudgetModal() {
  $("#budget-input").value = monthlyBudget;
  $("#budget-modal").hidden = false;
  document.body.style.overflow = "hidden";
  setTimeout(() => $("#budget-input").focus(), 50);
}

function closeBudgetModal() {
  $("#budget-modal").hidden = true;

  if ($("#transaction-modal").hidden) {
    document.body.style.overflow = "";
  }
}

function saveBudget(event) {
  event.preventDefault();

  const amount = Number($("#budget-input").value);

  if (!Number.isFinite(amount) || amount <= 0 || amount > 100000000) {
    showToast(t("budgetInvalid"));
    return;
  }

  const oldBudget = monthlyBudget;
  monthlyBudget = amount;

  if (!safeWrite(STORAGE_KEYS.budget, monthlyBudget)) {
    monthlyBudget = oldBudget;
    return;
  }

  closeBudgetModal();
  renderBudget();
  showToast(t("budgetSaved"));
}

/* CSV export */

function exportCSV() {
  if (!transactions.length) {
    showToast(t("noExport"));
    return;
  }

  const headers = ["Title", "Type", "Amount (BDT)", "Category", "Date", "Note"];

  const rows = transactions.map((item) => [
    item.title,
    item.type,
    item.amount,
    item.category,
    item.date,
    item.note || ""
  ]);

  const csvCell = (value) => {
    let text = String(value ?? "");

    // Avoid spreadsheet formula injection for text cells.
    if (/^[=+\-@]/.test(text)) {
      text = "'" + text;
    }

    return `"${text.replace(/"/g, '""')}"`;
  };

  const csv = [headers, ...rows]
    .map((row) => row.map(csvCell).join(","))
    .join("\r\n");

  // UTF-8 BOM helps spreadsheet software display Bangla correctly.
  const blob = new Blob(["\uFEFF", csv], {
    type: "text/csv;charset=utf-8;"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `spendwise-transactions-${localDateString()}.csv`;

  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(url), 1000);

  showToast(t("csvReady"));
}

/* Filters */

function clearFilters() {
  $("#search-input").value = "";
  $("#type-filter").value = "all";
  $("#category-filter").value = "all";
  renderTransactions();
}

/* Event listeners */

function attachEvents() {
  $("#add-transaction-top").addEventListener("click", () => openTransactionModal());
  $("#add-transaction-bottom").addEventListener("click", () => openTransactionModal());
  $("#empty-add").addEventListener("click", () => openTransactionModal());

  $("#transaction-form").addEventListener("submit", saveTransaction);

  $$(".type-choice").forEach((button) => {
    button.addEventListener("click", () => setTransactionType(button.dataset.type));
  });

  $$("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", closeTransactionModal);
  });

  $("#edit-budget").addEventListener("click", openBudgetModal);

  $$("[data-close-budget]").forEach((button) => {
    button.addEventListener("click", closeBudgetModal);
  });

  $("#budget-form").addEventListener("submit", saveBudget);

  $("#transaction-list").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const id = button.dataset.id;
    const action = button.dataset.action;

    if (action === "edit") editTransaction(id);
    if (action === "delete") deleteTransaction(id);
  });

  $("#search-input").addEventListener("input", renderTransactions);
  $("#type-filter").addEventListener("change", renderTransactions);
  $("#category-filter").addEventListener("change", renderTransactions);

  $("#clear-filters").addEventListener("click", clearFilters);
  $("#export-csv").addEventListener("click", exportCSV);

  $("#chart-period").addEventListener("change", drawChart);

  $("#language-select").addEventListener("change", (event) => {
    language = event.target.value;

    if (!TEXT[language]) language = "en";

    safeWrite(STORAGE_KEYS.language, language);
    applyLanguage();
  });

  $("#theme-toggle").addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    safeWrite(STORAGE_KEYS.theme, currentTheme);
    applyTheme();
  });

  $("#menu-toggle").addEventListener("click", () => {
    $("#sidebar").classList.toggle("open");
  });

  $$(".nav-item").forEach((link) => {
    link.addEventListener("click", () => {
      $$(".nav-item").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
      $("#sidebar").classList.remove("open");
    });
  });

  document.addEventListener("click", (event) => {
    const sidebar = $("#sidebar");
    const menuButton = $("#menu-toggle");

    if (
      window.innerWidth <= 760 &&
      sidebar.classList.contains("open") &&
      !sidebar.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      sidebar.classList.remove("open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!$("#transaction-modal").hidden) {
        closeTransactionModal();
      }

      if (!$("#budget-modal").hidden) {
        closeBudgetModal();
      }

      $("#sidebar").classList.remove("open");
    }
  });

  $("#transaction-modal").addEventListener("click", (event) => {
    if (event.target.id === "transaction-modal") {
      closeTransactionModal();
    }
  });

  $("#budget-modal").addEventListener("click", (event) => {
    if (event.target.id === "budget-modal") {
      closeBudgetModal();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      $("#sidebar").classList.remove("open");
    }

    drawChart();
  });
}

/* Start app */

function init() {
  $("#today-label").textContent = `${t("today")} · ${formatDate(localDateString())}`;

  // Save the initial sample transactions so they remain after refresh.
  if (safeRead(STORAGE_KEYS.transactions, null) === null) {
    persistTransactions();
  }

  $("#language-select").value = language;

  attachEvents();
  applyTheme();
  applyLanguage();
  renderAll();
}

document.addEventListener("DOMContentLoaded", init);