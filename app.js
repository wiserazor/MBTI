const questions = [
  { text: "参加一场聚会后，我通常感觉精力被补充了。", dim: "EI", dir: 1 },
  { text: "比起主动认识很多人，我更喜欢与少数熟人深入交谈。", dim: "EI", dir: -1 },
  { text: "在团队讨论中，我常常边说边理清自己的想法。", dim: "EI", dir: 1 },
  { text: "忙碌一天后，独处是我恢复状态最有效的方式。", dim: "EI", dir: -1 },
  { text: "身处陌生环境时，我通常愿意先开口打破沉默。", dim: "EI", dir: 1 },
  { text: "长时间的社交活动容易让我感到疲惫。", dim: "EI", dir: -1 },
  { text: "有了新鲜想法，我会很想马上找人聊聊。", dim: "EI", dir: 1 },
  { text: "我往往先在心里想清楚，才把观点说出来。", dim: "EI", dir: -1 },
  { text: "我喜欢成为活动气氛的推动者。", dim: "EI", dir: 1 },
  { text: "比起热闹的周末，我更期待安静而自由的安排。", dim: "EI", dir: -1 },

  { text: "学习新事物时，具体示例比抽象理论更能帮助我。", dim: "SN", dir: 1 },
  { text: "我常常会联想到一件事未来可能发展成什么样。", dim: "SN", dir: -1 },
  { text: "我更相信亲眼观察到的事实和过往经验。", dim: "SN", dir: 1 },
  { text: "我享受讨论那些没有唯一答案的假设性问题。", dim: "SN", dir: -1 },
  { text: "做事时，我会留意实际步骤和容易遗漏的细节。", dim: "SN", dir: 1 },
  { text: "我的注意力常从眼前的事跳到它背后的意义。", dim: "SN", dir: -1 },
  { text: "清楚、实用的方法比充满创意但未经验证的方案更吸引我。", dim: "SN", dir: 1 },
  { text: "重复已经熟练的流程，会让我很快想尝试新的可能。", dim: "SN", dir: -1 },
  { text: "描述一件事时，我习惯准确还原发生过的细节。", dim: "SN", dir: 1 },
  { text: "我经常从不相关的事物之间发现有趣的联系。", dim: "SN", dir: -1 },

  { text: "做重要决定时，我会优先考虑哪种选择在逻辑上更合理。", dim: "TF", dir: 1 },
  { text: "即使某个决定很有效率，我也会在意它是否让人感到被尊重。", dim: "TF", dir: -1 },
  { text: "讨论问题时，直接指出矛盾比维持表面和谐更重要。", dim: "TF", dir: 1 },
  { text: "我很容易察觉他人情绪的变化，并调整表达方式。", dim: "TF", dir: -1 },
  { text: "别人向我倾诉时，我通常先分析怎么解决问题。", dim: "TF", dir: 1 },
  { text: "比起给出方案，我有时觉得先让对方感到被理解更重要。", dim: "TF", dir: -1 },
  { text: "评价一个方案时，我能把个人好恶与事实分开。", dim: "TF", dir: 1 },
  { text: "当原则与某个人的具体处境冲突时，我愿意为后者留出弹性。", dim: "TF", dir: -1 },
  { text: "我欣赏观点清晰、敢于理性辩论的人。", dim: "TF", dir: 1 },
  { text: "团队意见不一致时，我会特别在意每个人是否都能接受。", dim: "TF", dir: -1 },

  { text: "出发旅行前，我喜欢把行程和关键事项提前安排好。", dim: "JP", dir: 1 },
  { text: "保留选择、到时候再决定，会让我觉得更自在。", dim: "JP", dir: -1 },
  { text: "完成待办清单上的事项会给我明显的满足感。", dim: "JP", dir: 1 },
  { text: "计划临时改变时，我通常能轻松转向新的安排。", dim: "JP", dir: -1 },
  { text: "即使截止日期还早，我也倾向于尽快开始。", dim: "JP", dir: 1 },
  { text: "灵感和最后一点压力，常常能让我高效完成任务。", dim: "JP", dir: -1 },
  { text: "环境有条理、事情有定论，会让我感到安心。", dim: "JP", dir: 1 },
  { text: "我喜欢让一天自然展开，而不是严格照着日程表走。", dim: "JP", dir: -1 },
  { text: "面对复杂任务，我通常会先拆解步骤再行动。", dim: "JP", dir: 1 },
  { text: "我常常同时探索几个方向，最后再选定其中一个。", dim: "JP", dir: -1 }
];

const typeInfo = {
  INTJ: ["冷静的战略家", "独立、有远见，喜欢用系统性思考把复杂问题变成清晰路径。", ["洞察", "自驱", "长期主义", "理性", "结构化"]],
  INTP: ["好奇的思考者", "对原理与可能性充满好奇，享受拆解问题、寻找更优雅的解释。", ["好奇", "分析", "独立", "创新", "开放"]],
  ENTJ: ["果断的推动者", "目标感强，善于整合资源、建立秩序，并推动想法落地。", ["果断", "组织", "效率", "远见", "担当"]],
  ENTP: ["灵活的探索者", "思维敏捷，喜欢挑战惯例，在观点碰撞中不断发现新机会。", ["机智", "创意", "适应", "探索", "表达"]],
  INFJ: ["坚定的理想家", "敏锐而有原则，善于理解他人，也希望为重要的愿景带来改变。", ["共情", "洞察", "理想", "坚定", "深度"]],
  INFP: ["温柔的理想主义者", "重视真实与内在价值，富有想象力，并对人与世界保持细腻感受。", ["真诚", "共情", "想象", "包容", "理想"]],
  ENFJ: ["温暖的引导者", "善于发现他人的潜力，用热情、理解与行动凝聚身边的人。", ["热情", "共情", "鼓舞", "协作", "责任"]],
  ENFP: ["热烈的灵感家", "充满好奇和感染力，擅长连接人与想法，让可能性自然生长。", ["热情", "创意", "自由", "共情", "乐观"]],
  ISTJ: ["可靠的实践者", "稳健、细致且有责任心，相信清晰规则与经得起验证的方法。", ["可靠", "严谨", "务实", "秩序", "责任"]],
  ISFJ: ["细腻的守护者", "安静而体贴，记得重要的细节，并用可靠行动照顾身边的人。", ["体贴", "耐心", "细致", "忠诚", "可靠"]],
  ESTJ: ["务实的组织者", "重视效率与明确标准，擅长把人和任务组织成可执行的计划。", ["务实", "果断", "秩序", "执行", "责任"]],
  ESFJ: ["热心的连接者", "关注群体感受和实际需要，愿意创造温暖、稳定的共同体验。", ["热心", "合作", "体贴", "可靠", "社群"]],
  ISTP: ["沉着的解决者", "冷静、灵活，喜欢亲手理解事物，并在变化中找到最直接的办法。", ["冷静", "动手", "灵活", "观察", "独立"]],
  ISFP: ["自在的体验家", "温和敏锐，重视当下的真实感受，并以自己的方式表达审美与关怀。", ["温和", "审美", "真实", "灵活", "敏锐"]],
  ESTP: ["敏捷的行动派", "关注当下、反应迅速，乐于在真实情境中试验并推动事情前进。", ["行动", "敏捷", "大胆", "务实", "社交"]],
  ESFP: ["明亮的体验者", "热情自然，善于感受现场氛围，也愿意为身边的人创造快乐。", ["热情", "友善", "感受", "自发", "乐观"]]
};

const screens = {
  home: document.getElementById("homeScreen"),
  quiz: document.getElementById("quizScreen"),
  result: document.getElementById("resultScreen")
};
let current = 0;
let answers = Array(questions.length).fill(null);

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => el.classList.toggle("active", key === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz(reset = false) {
  if (reset) {
    current = 0;
    answers = Array(questions.length).fill(null);
    localStorage.removeItem("personalityQuizState");
  } else {
    try {
      const saved = JSON.parse(localStorage.getItem("personalityQuizState"));
      if (saved?.answers?.length === questions.length) {
        answers = saved.answers;
        current = Math.min(saved.current || 0, questions.length - 1);
      }
    } catch (_) {}
  }
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const q = questions[current];
  const progress = Math.round(((current + 1) / questions.length) * 100);
  document.getElementById("questionText").textContent = q.text;
  document.getElementById("questionNumber").textContent = String(current + 1).padStart(2, "0");
  document.getElementById("progressText").textContent = `问题 ${current + 1} / ${questions.length}`;
  document.getElementById("progressPercent").textContent = `${progress}%`;
  document.getElementById("progressBar").style.width = `${progress}%`;
  document.getElementById("backButton").style.visibility = current === 0 ? "hidden" : "visible";
  document.querySelectorAll(".answer-dot").forEach(btn => {
    btn.classList.toggle("selected", Number(btn.dataset.score) === answers[current]);
  });
}

function chooseAnswer(score) {
  answers[current] = score;
  localStorage.setItem("personalityQuizState", JSON.stringify({ current: current + 1, answers }));
  document.querySelectorAll(".answer-dot").forEach(btn => btn.classList.toggle("selected", Number(btn.dataset.score) === score));
  setTimeout(() => {
    if (current < questions.length - 1) {
      current += 1;
      renderQuestion();
    } else {
      showResult();
    }
  }, 180);
}

function calculateResult() {
  const sums = { EI: 0, SN: 0, TF: 0, JP: 0 };
  questions.forEach((q, index) => { sums[q.dim] += answers[index] * q.dir; });
  const dims = ["EI", "SN", "TF", "JP"];
  const type = dims.map(dim => sums[dim] >= 0 ? dim[0] : dim[1]).join("");
  const percentages = {};
  dims.forEach(dim => {
    const max = questions.filter(q => q.dim === dim).length * 3;
    const left = Math.round(50 + (sums[dim] / max) * 50);
    percentages[dim] = [left, 100 - left];
  });
  return { type, percentages };
}

function showResult() {
  const { type, percentages } = calculateResult();
  const [name, summary, traits] = typeInfo[type];
  document.getElementById("resultType").textContent = type;
  document.getElementById("resultName").textContent = name;
  document.getElementById("resultSummary").textContent = summary;
  document.getElementById("traitCloud").innerHTML = traits.map(t => `<span>${t}</span>`).join("");
  const labels = { EI: ["外向 E", "内向 I"], SN: ["实感 S", "直觉 N"], TF: ["思考 T", "情感 F"], JP: ["判断 J", "感知 P"] };
  document.getElementById("dimensionBars").innerHTML = Object.entries(percentages).map(([dim, values]) => `
    <div class="dimension-row">
      <div class="dimension-labels"><span><strong>${labels[dim][0].slice(-1)}</strong> ${labels[dim][0].slice(0,-2)}</span><span>${labels[dim][1].slice(0,-2)} <strong>${labels[dim][1].slice(-1)}</strong></span></div>
      <div class="bar-track"><span class="bar-center"></span><span class="bar-fill" style="width:${values[0]}%"></span><span class="bar-fill right" style="width:${values[1]}%"></span></div>
      <div class="dimension-percent"><span>${values[0]}%</span><span>${values[1]}%</span></div>
    </div>`).join("");
  localStorage.removeItem("personalityQuizState");
  showScreen("result");
}

document.getElementById("startButton").addEventListener("click", () => startQuiz(false));
document.getElementById("dialogStart").addEventListener("click", () => { document.getElementById("aboutDialog").close(); startQuiz(false); });
document.getElementById("aboutButton").addEventListener("click", () => document.getElementById("aboutDialog").showModal());
document.getElementById("dialogClose").addEventListener("click", () => document.getElementById("aboutDialog").close());
document.getElementById("closeButton").addEventListener("click", () => showScreen("home"));
document.getElementById("backButton").addEventListener("click", () => { if (current > 0) { current--; renderQuestion(); } });
document.getElementById("answerScale").addEventListener("click", event => {
  const button = event.target.closest(".answer-dot");
  if (button) chooseAnswer(Number(button.dataset.score));
});
document.addEventListener("keydown", event => {
  if (!screens.quiz.classList.contains("active")) return;
  const map = { "1": 3, "2": 2, "3": 1, "4": 0, "5": -1, "6": -2, "7": -3 };
  if (event.key in map) chooseAnswer(map[event.key]);
});
document.getElementById("restartButton").addEventListener("click", () => startQuiz(true));
document.getElementById("copyButton").addEventListener("click", async event => {
  const type = document.getElementById("resultType").textContent;
  const name = document.getElementById("resultName").textContent;
  const text = `我的 16 型人格倾向是 ${type}（${name}）。人格不是标签，结果仅供娱乐与自我探索。`;
  try {
    await navigator.clipboard.writeText(text);
    event.currentTarget.textContent = "已复制 ✓";
    setTimeout(() => { event.currentTarget.textContent = "复制结果"; }, 1600);
  } catch (_) {
    window.prompt("复制下面的内容：", text);
  }
});
document.getElementById("year").textContent = new Date().getFullYear();
