const projects = [
  {
    id: "element-knight",
    title: "万象回廊：元素",
    repo: "ElementKnight",
    type: "2D Roguelike Shooter",
    role: "毕业设计 / 核心玩法与工程系统",
    period: "Unity 2022 LTS",
    award: "核心作品",
    priority: "core",
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
    stack: [
      ["Engine", "Unity 2022.3 LTS, 2D Physics, Animator"],
      ["Architecture", "MVC, 状态机, 事件总线, 对象池"],
      ["Content", "Edgar.Unity 程序化地牢, ScriptableObject 数据资产"],
      ["Feedback", "Cinemachine, Post Processing, 粒子特效, 触觉反馈"]
    ],
    systems: [
      "水/冰元素状态系统：湿润、冰标记、冻结、易伤与解冻减速。",
      "Roguelike 增益系统：属性、元素、续航三类构筑方向。",
      "关卡推进系统：5 大关 x 5 小关，动态难度缩放与 Boss 阶段。",
      "数据驱动工作流：CSV 到 ScriptableObject，便于调参和平衡。"
    ],
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
    award: "AI VR",
    priority: "featured",
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
    stack: [
      ["Engine", "Unity VR, PICO 设备适配, XR 交互"],
      ["AI", "Deepseek LLM, Prompt 角色设定, 流式对话"],
      ["Voice", "科大讯飞 STT/TTS, 语音输入输出闭环"],
      ["Performance", "异步链路, XAsset 加载, 内存峰值优化"]
    ],
    systems: [
      "AI 虚拟心理导师：感知、认知、表达的多模态闭环。",
      "语音交互管线：识别、请求、合成、播放、口型同步。",
      "情绪释放空间：拳击、节奏互动、空间绘画等压力释放玩法。",
      "正念放松空间：冥想、呼吸引导与自然沉浸场景。"
    ],
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
    award: "教育仿真",
    priority: "normal",
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
    stack: [
      ["Engine", "Unity 3D, Rigidbody, Collider, Physics Material"],
      ["Simulation", "浮力算法, 热学模拟, 自由落体, 摩擦力验证"],
      ["Flow", "FSM, 任务接取, 传送门, 实验舱验证"],
      ["Delivery", "PC 端交互, 教育场景, Git 协同"]
    ],
    systems: [
      "浮力系统：实时计算排开体积并逐帧施加浮力。",
      "热学系统：燃烧器、热气球、密度变化与升力反馈。",
      "实验舱流程：大厅、任务、传送门和实验验证闭环。",
      "教学反馈：把公式理解转化成可观察、可操作的互动结果。"
    ],
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
    award: "省级优胜奖",
    priority: "normal",
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
    stack: [
      ["Engine", "Unity 2D, Pixel Art, UGUI"],
      ["Gameplay", "双人合作, 非对称能力, 多节点机关联动"],
      ["Architecture", "跨组件状态同步, 关卡触发器, UI 框架"],
      ["Production", "72 小时 GameJam, Git 协同, 快速迭代"]
    ],
    systems: [
      "力与智双角色机制：一个负责重物与平台，一个负责按钮与精细机关。",
      "第四、第五关机制：多节点触发、同步锁和白盒验证。",
      "UI 框架：极限开发中保证流程提示和交互稳定。",
      "团队协作：程序、策划、美术快速拆解需求并完成交付。"
    ],
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
    period: "CMIT 国赛三等奖",
    award: "CMIT 国赛三等奖",
    priority: "normal",
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
    stack: [
      ["Engine", "Unity 3D, Physics, Raycast, UGUI"],
      ["AI", "NavMesh Agent, 僵尸状态机, 巡逻/发现/追击/攻击"],
      ["Architecture", "MVC 分层, 模块解耦, 战斗 UI 数据同步"],
      ["Optimization", "多类型对象池, Instantiate/Destroy 控制, 60FPS"]
    ],
    systems: [
      "射击系统：物理弹道、碰撞反馈、射线拾取和补给交互。",
      "僵尸 AI：巡逻、发现、追击、攻击的完整状态流。",
      "资源系统：有限弹药、医疗包和道具补给形成生存压力。",
      "性能系统：子弹、僵尸、补给和特效统一对象池调度。"
    ],
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
const cardOrder = ["vr-room", "physics-illusion", "element-knight", "wisdom-strength", "justice-raid"];
const transitionFlare = document.querySelector("#transitionFlare");

function activateView(name, origin) {
  if (origin) {
    const rect = origin.getBoundingClientRect();
    transitionFlare.style.setProperty("--flare-x", `${rect.left + rect.width / 2}px`);
    transitionFlare.style.setProperty("--flare-y", `${rect.top + rect.height / 2}px`);
    transitionFlare.classList.remove("is-running");
    void transitionFlare.offsetWidth;
    transitionFlare.classList.add("is-running");
  }

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
  const orderedProjects = projects
    .slice()
    .sort((a, b) => cardOrder.indexOf(a.id) - cardOrder.indexOf(b.id));
  const loopProjects = [...orderedProjects, ...orderedProjects];

  workGrid.innerHTML = loopProjects
    .map((project, index) => {
      const background = project.image ? `url(${project.image})` : "none";
      const placeholderClass = project.image ? "" : "placeholder-card";
      const priorityClass = project.priority === "core" ? "is-core" : project.priority === "featured" ? "is-featured" : "";
      const displayIndex = String((index % orderedProjects.length) + 1).padStart(2, "0");

      return `
        <button class="work-card ${placeholderClass} ${priorityClass}" type="button" data-project="${project.id}" style="--card-bg:${background}">
          <span class="work-card-index">${displayIndex}</span>
          ${project.priority === "core" ? '<span class="priority-ribbon">Core</span>' : ""}
          ${project.priority === "featured" ? '<span class="priority-ribbon featured-ribbon">Featured</span>' : ""}
          <div class="work-card-content">
            <span class="work-card-type">${project.type}</span>
            <h2>${project.title}</h2>
            <p>${project.award} · ${project.role}</p>
            <div class="card-tags">${renderTags(project.tags.slice(0, 4))}</div>
            <small>${project.summary}</small>
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
      activateView("detail", card);
    });
  });
}

function renderDetail(project) {
  detailPanel.innerHTML = `
    <div class="detail-hero">
      <div class="detail-media">
        ${mediaMarkup(project, "media-placeholder")}
        <span class="scanline"></span>
        <span class="corner-mark corner-a"></span>
        <span class="corner-mark corner-b"></span>
      </div>
      <div class="detail-copy">
        <p class="kicker">${project.repo}</p>
        <h2>${project.title}</h2>
        <p>${project.summary}</p>
        <div class="meta-row">
          <span>${project.type}</span>
          <span>${project.role}</span>
          <span>${project.period}</span>
          <span>${project.award}</span>
        </div>
        <div class="tag-row">${renderTags(project.tags)}</div>
        <a class="repo-link" href="${project.link}" target="_blank" rel="noreferrer">打开 GitHub README</a>
      </div>
    </div>

    <div class="detail-body">
      <section class="detail-section">
        <h3>项目简介</h3>
        <p>${project.contribution}</p>
        <div class="signal-row">
          <span>Role</span>
          <strong>${project.role}</strong>
          <span>Status</span>
          <strong>${project.award}</strong>
        </div>
        <h3>技术亮点</h3>
        <ul>${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>

      <section class="detail-section">
        <h3>技术栈与系统拆解</h3>
        <div class="stack-grid">
          ${project.stack
            .map(
              ([label, value]) => `
                <div class="stack-item">
                  <span>${label}</span>
                  <strong>${value}</strong>
                </div>
              `
            )
            .join("")}
        </div>
        <ul>${project.systems.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>

      <section class="detail-section media-section">
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

const canvas = document.querySelector("#sandCanvas");
const context = canvas.getContext("2d");
let particles = [];
let animationFrame = 0;

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = Math.min(260, Math.max(130, Math.floor(window.innerWidth / 7)));
  particles = Array.from({ length: count }, (_, index) => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 2.2 + 0.45,
    speed: Math.random() * 0.62 + 0.18,
    phase: Math.random() * Math.PI * 2,
    drift: Math.random() * 1.2 + 0.4,
    hue: index % 3
  }));
}

function drawSand(time) {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  const gradient = context.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
  gradient.addColorStop(0, "rgba(98,230,211,0.055)");
  gradient.addColorStop(0.48, "rgba(158,123,255,0.045)");
  gradient.addColorStop(1, "rgba(245,182,91,0.052)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);

  for (let band = 0; band < 5; band += 1) {
    const y = window.innerHeight * (0.18 + band * 0.17) + Math.sin(time * 0.00022 + band) * 34;
    const bandGradient = context.createLinearGradient(0, y - 80, window.innerWidth, y + 80);
    bandGradient.addColorStop(0, "rgba(98,230,211,0)");
    bandGradient.addColorStop(0.45, band % 2 === 0 ? "rgba(98,230,211,0.07)" : "rgba(158,123,255,0.065)");
    bandGradient.addColorStop(1, "rgba(245,182,91,0)");
    context.save();
    context.translate(Math.sin(time * 0.00016 + band) * 70, y);
    context.rotate(-0.16 + band * 0.018);
    context.fillStyle = bandGradient;
    context.fillRect(-160, -34, window.innerWidth + 320, 68);
    context.restore();
  }

  particles.forEach((particle) => {
    const wave = Math.sin(time * 0.00055 + particle.phase);
    const previousX = particle.x;
    const previousY = particle.y;
    particle.x += particle.speed + wave * particle.drift;
    particle.y += Math.cos(time * 0.0004 + particle.phase) * 0.32;

    if (particle.x > window.innerWidth + 20) {
      particle.x = -20;
      particle.y = Math.random() * window.innerHeight;
    }

    const colors = [
      "rgba(98,230,211,0.34)",
      "rgba(158,123,255,0.28)",
      "rgba(245,182,91,0.26)"
    ];

    context.strokeStyle = colors[particle.hue].replace("0.", "0.18");
    context.lineWidth = Math.max(0.4, particle.size * 0.45);
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(particle.x, particle.y);
    context.stroke();

    context.beginPath();
    context.fillStyle = colors[particle.hue];
    context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    context.fill();
  });

  animationFrame = requestAnimationFrame(drawSand);
}

resizeCanvas();
drawSand(0);
window.addEventListener("resize", resizeCanvas);
