const projects = [
  {
    id: "element-knight",
    title: "万象回廊：元素",
    repo: "ElementKnight",
    type: "2D Roguelike Shooter",
    role: "毕业设计 / 核心玩法与工程系统",
    period: "Unity 2022 LTS",
    summary:
      "2D 俯视角 Roguelike 动作射击游戏。玩家在程序化生成地牢中使用弓箭、水/冰元素技能与随机增益构筑流派，挑战五大关卡和 Boss。",
    contribution:
      "负责核心战斗、元素反应、Roguelike 增益、程序化地牢接入、数据驱动配置和反馈系统组织。",
    highlights: [
      "水/冰元素叠加触发冻结、眩晕、百分比伤害与易伤。",
      "Edgar.Unity 程序化地牢，覆盖战斗房、精英房、Boss 房和宝箱房。",
      "ScriptableObject 拆分角色、敌人、技能、掉落和关卡难度数据。"
    ],
    tags: ["Unity", "C#", "Roguelike", "ScriptableObject", "Dungeon", "Combat"],
    image: "",
    gallery: [],
    link: "https://github.com/Cllent7/ElementKnight"
  },
  {
    id: "vr-room",
    title: "数智润心坊",
    repo: "VR_Psychological_Room",
    type: "VR Psychological Support System",
    role: "VR 交互 / AI 语音闭环",
    period: "PICO / Unity VR",
    summary:
      "Unity + VR 沉浸式心理支持系统，通过虚拟空间帮助用户进行情绪调节、压力释放和正向引导。",
    contribution:
      "构建 AI 虚拟心理导师、语音输入输出闭环、VR 空间交互和场景体验流程，让用户在 VR 中以自然语音完成表达与反馈。",
    highlights: [
      "Deepseek LLM + 精细化 Prompt 构建心理倾听者人设。",
      "科大讯飞 STT/TTS 实现自然语音输入、AI 推理、拟真语音播报。",
      "重构识别、流式请求、合成、播放异步链路，压缩交互延迟。"
    ],
    tags: ["Unity VR", "PICO", "Deepseek", "STT", "TTS", "AI"],
    image:
      "https://github.com/user-attachments/assets/366dbe98-d5ad-48b2-830a-fb8512dacf67",
    gallery: [
      "https://github.com/user-attachments/assets/366dbe98-d5ad-48b2-830a-fb8512dacf67",
      "https://github.com/user-attachments/assets/453b5631-2c43-4425-bcaf-1c0022b8f602",
      "https://github.com/user-attachments/assets/b0d6cb34-5ff2-40aa-8f5c-6d97d560fc2e"
    ],
    link: "https://github.com/Cllent7/VR_Psychological_Room"
  },
  {
    id: "physics-illusion",
    title: "物理幻境之旅",
    repo: "Journey-through-the-Physical-Illusion",
    type: "3D Physics Simulation",
    role: "物理仿真 / 教育交互",
    period: "PC / Unity 3D",
    summary:
      "面向初高中物理课堂的 3D 交互式综合物理实验仿真软件，将抽象、危险或难以实操的实验做成可操作体验。",
    contribution:
      "实现多个实验舱交互流程，围绕浮力、热学、自由落体和摩擦力建立可观察、可验证的仿真体验。",
    highlights: [
      "实时计算物体浸入水中的排开体积并施加动态浮力。",
      "FSM 管理大厅接取任务、传送门加载、实验舱验证的闭环流程。",
      "面向课堂教学场景设计，将公式理解转化为可交互验证。"
    ],
    tags: ["Unity 3D", "C#", "Physics", "FSM", "Education", "Simulation"],
    image:
      "https://github.com/user-attachments/assets/c3984317-0ead-4581-bdf4-6362aaa4f358",
    gallery: [
      "https://github.com/user-attachments/assets/5c625901-884e-4663-b37c-f93f4933bf98",
      "https://github.com/user-attachments/assets/c3984317-0ead-4581-bdf4-6362aaa4f358",
      "https://github.com/user-attachments/assets/e83d97f3-83ff-477a-840a-b1012e70d118"
    ],
    link: "https://github.com/Cllent7/Journey-through-the-Physical-Illusion"
  },
  {
    id: "wisdom-strength",
    title: "预制力逃",
    repo: "The-Great-Escape-of-Wisdom-and-Strength",
    type: "72h GameJam Puzzle Game",
    role: "副程序 / 关卡机制 / UI 框架",
    period: "省级优胜奖",
    summary:
      "72 小时 GameJam 作品，2D 像素风非对称双人合作剧情解谜。两位角色围绕“力”与“智”的差异协作逃离养老院。",
    contribution:
      "负责中后期第四、第五关白盒搭建与机制实现，完成多节点联动机关、跨组件状态同步和核心 UI 框架。",
    highlights: [
      "省级大学生 GameJam 游戏创作大赛优胜奖。",
      "非对称双人合作：力量角色推重物，智慧角色触发精细机关。",
      "72 小时高压开发中完成机制验证、协作排期和快速迭代。"
    ],
    tags: ["Unity", "C#", "GameJam", "Puzzle", "UI", "Teamwork"],
    image:
      "https://github.com/user-attachments/assets/8eef7d58-4fc7-467b-bc23-32d1caabfa74",
    gallery: [
      "https://github.com/user-attachments/assets/8eef7d58-4fc7-467b-bc23-32d1caabfa74",
      "https://github.com/user-attachments/assets/bfa08abe-6487-4bff-9e7d-c9f6a8cf5a42",
      "https://github.com/user-attachments/assets/a258e4c7-8c3a-41c1-86e9-0515455323ca"
    ],
    link: "https://github.com/Cllent7/The-Great-Escape-of-Wisdom-and-Strength"
  },
  {
    id: "justice-raid",
    title: "废弃工厂的正义突袭",
    repo: "The-Justice-Raid-of-the-Abandoned-Factory",
    type: "3D FPS Survival Shooter",
    role: "个人独立开发 / 架构与优化",
    period: "国赛三等奖",
    summary:
      "Unity 3D 第一人称生存射击游戏。玩家在废弃工厂中利用有限资源突破僵尸围堵，完成硬核生存挑战。",
    contribution:
      "独立完成射击体验、僵尸 AI 状态机、MVC 架构拆分、UGUI 战斗界面和多类型对象池优化。",
    highlights: [
      "全国大学生 CMIT 数字媒体总决赛国赛三等奖。",
      "NavMesh Agent 构建巡逻、发现、追击、攻击的 AI 状态流。",
      "对象池管理子弹、僵尸、补给和特效，保障测试设备稳定 60FPS。"
    ],
    tags: ["Unity", "C#", "FPS", "MVC", "NavMesh", "Object Pool"],
    image:
      "https://github.com/user-attachments/assets/013be876-ab5b-4ae3-b7a3-772ca88cd58b",
    gallery: [
      "https://github.com/user-attachments/assets/013be876-ab5b-4ae3-b7a3-772ca88cd58b",
      "https://github.com/user-attachments/assets/763d6b5c-97b6-4645-a88e-43dd3a57955c",
      "https://github.com/user-attachments/assets/71ff4a21-de7e-45e1-8c88-68fe611106ca"
    ],
    link: "https://github.com/Cllent7/The-Justice-Raid-of-the-Abandoned-Factory"
  }
];

const views = {
  home: document.querySelector("#homeView"),
  detail: document.querySelector("#detailView"),
  profile: document.querySelector("#profileView")
};

const workGrid = document.querySelector("#workGrid");
const detailPanel = document.querySelector("#detailPanel");

function activateView(name) {
  Object.values(views).forEach((view) => view.classList.remove("is-active"));
  views[name].classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTags(tags) {
  return tags.map((tag) => `<span>${tag}</span>`).join("");
}

function mediaMarkup(project, className) {
  if (project.image) {
    return `<img src="${project.image}" alt="${project.title} 项目图片" loading="lazy" />`;
  }

  return `
    <div class="${className}">
      <strong>${project.title}</strong>
      <small>图片占位 / 后续替换为实机截图</small>
    </div>
  `;
}

function galleryMarkup(project) {
  if (project.gallery.length === 0) {
    return `<div class="gallery-placeholder">图片组占位，后续放入截图</div>`;
  }

  return project.gallery
    .map((image) => `<img src="${image}" alt="${project.title} 项目截图" loading="lazy" />`)
    .join("");
}

function renderWorkCards() {
  workGrid.innerHTML = projects
    .map((project, index) => {
      const background = project.image ? `url(${project.image})` : "none";
      const placeholderClass = project.image ? "" : "placeholder-card";

      return `
        <button class="work-card ${placeholderClass}" type="button" data-project="${project.id}" style="--card-bg:${background}">
          <span class="work-card-index">${String(index + 1).padStart(2, "0")}</span>
          <div class="work-card-content">
            <span class="work-card-type">${project.type}</span>
            <h2>${project.title}</h2>
            <p>${project.role}</p>
            <span class="hover-hint">查看项目详情 <span>Enter</span></span>
          </div>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".work-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--y", `${event.clientY - rect.top}px`);
    });

    card.addEventListener("click", () => {
      const project = projects.find((item) => item.id === card.dataset.project);
      renderDetail(project);
      activateView("detail");
    });
  });
}

function renderDetail(project) {
  detailPanel.innerHTML = `
    <div class="detail-hero">
      <div class="detail-media">
        ${mediaMarkup(project, "media-placeholder")}
      </div>
      <div class="detail-copy">
        <p class="kicker">${project.repo}</p>
        <h2>${project.title}</h2>
        <p>${project.summary}</p>
        <div class="meta-row">
          <span>${project.type}</span>
          <span>${project.role}</span>
          <span>${project.period}</span>
        </div>
        <div class="tag-row">${renderTags(project.tags)}</div>
        <a class="repo-link" href="${project.link}" target="_blank" rel="noreferrer">打开 GitHub README</a>
      </div>
    </div>

    <div class="detail-body">
      <section class="detail-section">
        <h3>项目简介</h3>
        <p>${project.contribution}</p>
        <h3>技术亮点</h3>
        <ul>${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>

      <section class="detail-section">
        <h3>视频与图片</h3>
        <div class="video-placeholder">
          <span class="play-core"></span>
          <strong>视频坑位</strong>
          <small>后续替换为 ${project.title} 的演示视频</small>
        </div>
        <div class="gallery-strip">${galleryMarkup(project)}</div>
      </section>
    </div>
  `;
}

document.querySelector("#openProfile").addEventListener("click", () => activateView("profile"));
document.querySelector("#backToHome").addEventListener("click", () => activateView("home"));
document.querySelector("#backFromProfile").addEventListener("click", () => activateView("home"));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !views.home.classList.contains("is-active")) {
    activateView("home");
  }
});

renderWorkCards();
