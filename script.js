const playableHubUrl = "https://github.com/Cllent7/Cllent_Completed_projects";

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
    category: "personal",
    playLabel: "试玩构建合集",
    summary:
      "以元素反应与随机成长为核心的 2D Roguelike 动作射击作品，围绕战斗反馈、关卡生成与长期可扩展内容结构展开。",
    contribution:
      "负责核心战斗、元素状态、Roguelike 构筑、程序化地牢接入、数据驱动配置与整体玩法调优，作为作品集中最完整的代表项目展示。",
    highlights: [
      "构建水、冰等元素叠加与状态转化机制，让攻击反馈和构筑路线形成联动。",
      "接入 Edgar.Unity 程序化地牢方案，组织普通房、精英房、宝箱房与 Boss 房推进节奏。",
      "将角色、敌人、技能、掉落与难度拆分为 ScriptableObject 数据资产，便于后期扩展。"
    ],
    tags: ["Unity", "C#", "Roguelike", "Dungeon", "Combat", "ScriptableObject"],
    stack: [
      ["Engine", "Unity 2022.3 LTS / 2D Physics / Animator"],
      ["Gameplay", "元素反应 / 随机增益 / Boss 节奏控制"],
      ["Architecture", "MVC / 状态机 / 事件分发 / 数据驱动"],
      ["Tools", "Edgar.Unity / Cinemachine / 粒子反馈"]
    ],
    systems: [
      "元素状态系统：湿润、冻结、减速、易伤等状态可叠加、转换与解除。",
      "Roguelike 构筑系统：围绕属性成长、元素强化与续航能力形成多流派路线。",
      "关卡推进系统：大关与小关节奏分层，Boss 阶段设计与掉落反馈联动。",
      "数据工作流：以可配置资产统一角色、敌人、关卡与掉落参数。 "
    ],
    image: "./assets/images/optimized/element-knight-cover-latest.webp",
    gallery: [
      "./assets/images/optimized/element-knight-gallery-01.webp",
      "./assets/images/optimized/element-knight-gallery-02.webp",
      "./assets/images/optimized/element-knight-gallery-03.webp",
      "./assets/images/optimized/element-knight-gallery-04.webp",
      "./assets/images/optimized/element-knight-gallery-05.webp",
      "./assets/images/optimized/element-knight-gallery-06.webp",
      "./assets/images/optimized/element-knight-gallery-07.webp",
      "./assets/images/optimized/element-knight-gallery-08.webp",
      "./assets/images/optimized/element-knight-gallery-09.webp",
      "./assets/images/optimized/element-knight-gallery-10.webp",
      "./assets/images/optimized/element-knight-gallery-11.webp",
      "./assets/images/optimized/element-knight-gallery-12.webp"
    ],
    video: "https://cllent-personal-portfolic.oss-cn-beijing.aliyuncs.com/Video/element-knight.mp4",
    videoFallback: "./assets/videos/element-knight.mp4",
    link: "https://github.com/cllent/ElementKnight",
    playLink: playableHubUrl
  },
  {
    id: "vr-room",
    title: "VR 心理疗愈",
    repo: "VR_Psychological_Room",
    type: "VR Psychological Support System",
    role: "VR 交互 / AI 语音闭环",
    period: "PICO / Unity VR",
    award: "重点作品",
    priority: "featured",
    category: "personal",
    playLabel: "试玩构建合集",
    summary:
      "将 VR 沉浸空间、自然语音交互与 AI 心理支持流程结合的疗愈型体验，强调真实表达、陪伴式反馈与空间氛围设计。",
    contribution:
      "负责 AI 虚拟心理导师交互链路、VR 场景体验流、语音输入输出闭环与整体体验调性，让用户能在 VR 空间中以自然语言完成表达与反馈。",
    highlights: [
      "结合 Deepseek 大模型与精细化 Prompt，塑造稳定的陪伴式 AI 人设。",
      "接入科大讯飞 STT/TTS，形成语音识别、AI 推理、语音播报的完整闭环。",
      "优化识别、推理、合成与播放之间的异步时序，降低交互等待感。"
    ],
    tags: ["Unity VR", "PICO", "Deepseek", "STT", "TTS", "AI"],
    stack: [
      ["Engine", "Unity VR / XR Interaction / PICO"],
      ["AI", "Deepseek LLM / Prompt Design / 对话引导"],
      ["Voice", "科大讯飞 STT / TTS / 音频链路管理"],
      ["Experience", "沉浸空间 / 情绪释放 / 正念放松"]
    ],
    systems: [
      "AI 心理支持系统：围绕倾听、回应、引导建立陪伴式对话流程。",
      "语音交互管线：识别、请求、合成、播放与状态过渡统一管理。",
      "VR 体验空间：通过节奏、环境与视觉引导降低表达压力。",
      "场景反馈系统：将语言、声音与空间氛围联动，形成完整疗愈感。 "
    ],
    image: "./assets/images/optimized/vr-room-cover.webp",
    gallery: [
      "./assets/images/optimized/vr-room-gallery-01.webp",
      "./assets/images/optimized/vr-room-gallery-02.webp",
      "./assets/images/optimized/vr-room-gallery-03.webp",
      "./assets/images/optimized/vr-room-gallery-04.webp",
      "./assets/images/optimized/vr-room-gallery-05.webp",
      "./assets/images/optimized/vr-room-gallery-06.webp",
      "./assets/images/optimized/vr-room-gallery-07.webp",
      "./assets/images/optimized/vr-room-gallery-08.webp",
      "./assets/images/optimized/vr-room-gallery-09.webp",
      "./assets/images/optimized/vr-room-gallery-10.webp",
      "./assets/images/optimized/vr-room-gallery-11.webp",
      "./assets/images/optimized/vr-room-gallery-12.webp",
      "./assets/images/optimized/vr-room-gallery-13.webp"
    ],
    video: "https://cllent-personal-portfolic.oss-cn-beijing.aliyuncs.com/Video/vr-room.mp4",
    videoFallback: "./assets/videos/vr-room.mp4",
    link: "https://github.com/cllent/VR_Psychological_Room",
    playLink: playableHubUrl
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
    category: "personal",
    playLabel: "试玩构建合集",
    summary:
      "面向课堂场景的 3D 交互式物理实验仿真软件，把抽象公式与危险或难以复现实验转化为可观察、可操作、可验证的体验。",
    contribution:
      "负责多个实验舱的交互流程与物理表现实现，围绕浮力、热学、自由落体和摩擦力建立教学可视化反馈。",
    highlights: [
      "实现浮力实验中排开体积与动态浮力施加的实时计算。",
      "用 FSM 管理大厅、任务接取、传送门与实验验证流程。",
      "以教学理解为目标设计交互反馈，让结论从公式转化为可感知过程。"
    ],
    tags: ["Unity 3D", "C#", "Physics", "FSM", "Education", "Simulation"],
    stack: [
      ["Engine", "Unity 3D / Rigidbody / Collider / Raycast"],
      ["Simulation", "浮力 / 热学 / 自由落体 / 摩擦力"],
      ["Flow", "FSM / 任务引导 / 实验验证 / 场景切换"],
      ["Delivery", "PC 教学软件 / Git 协作 / 场景组织"]
    ],
    systems: [
      "浮力系统：根据排开液体体积与物体姿态逐帧计算并施加浮力。",
      "热学系统：通过热气球、加热器与密度变化构建可见的实验反馈。",
      "实验流程系统：大厅、任务、传送门与验证阶段形成完整闭环。",
      "教学反馈系统：帮助学习者从观察、操作到验证理解物理结论。 "
    ],
    image: "./assets/images/optimized/physics-illusion-cover-latest.webp",
    gallery: [
      "./assets/images/optimized/physics-illusion-gallery-01.webp",
      "./assets/images/optimized/physics-illusion-gallery-02.webp",
      "./assets/images/optimized/physics-illusion-gallery-03.webp"
    ],
    video: "https://cllent-personal-portfolic.oss-cn-beijing.aliyuncs.com/Video/physics-illusion.mp4",
    videoFallback: "./assets/videos/physics-illusion.mp4",
    link: "https://github.com/cllent/Journey-through-the-Physical-Illusion",
    playLink: playableHubUrl
  },
  {
    id: "wisdom-strength",
    title: "预制力逃",
    repo: "The-Great-Escape-of-Wisdom-and-Strength",
    type: "72h GameJam Puzzle Game",
    role: "副程序 / 关卡机制 / UI 框架",
    period: "省级优秀奖",
    award: "省级优秀奖",
    priority: "normal",
    category: "personal",
    playLabel: "试玩构建合集",
    summary:
      "72 小时 GameJam 双人合作解谜作品，以力量与智慧角色的非对称能力配合为主题，兼顾剧情推进与关卡协作。",
    contribution:
      "负责中后期第四、第五关白盒搭建与机关实现，完成多节点联动、状态同步与基础 UI 框架支持。",
    highlights: [
      "获省级大学生 GameJam 游戏创作赛事优秀奖。",
      "围绕双角色差异化能力设计协作路线与机关解法。",
      "在高压节奏中完成机制验证、关卡迭代与团队协同交付。"
    ],
    tags: ["Unity", "C#", "GameJam", "Puzzle", "UI", "Teamwork"],
    stack: [
      ["Engine", "Unity 2D / Pixel Art / UGUI"],
      ["Gameplay", "双人合作 / 非对称能力 / 机关联动"],
      ["Architecture", "状态同步 / 触发器 / UI 框架"],
      ["Production", "72h GameJam / Git 协作 / 快速迭代"]
    ],
    systems: [
      "双角色机制：力量角色负责重物与平台，智慧角色负责精细机关触发。",
      "后期关卡系统：多节点机关链、同步门锁与白盒验证配合推进。",
      "UI 框架：在极短开发周期内提供必要提示与交互反馈。",
      "团队工作流：程序、策划、美术快速对齐需求并及时交付。 "
    ],
    image: "./assets/images/optimized/wisdom-strength-cover.webp",
    gallery: [
      "./assets/images/optimized/wisdom-strength-gallery-01.webp",
      "./assets/images/optimized/wisdom-strength-gallery-02.webp",
      "./assets/images/optimized/wisdom-strength-gallery-03.webp",
      "./assets/images/optimized/wisdom-strength-gallery-04.webp",
      "./assets/images/optimized/wisdom-strength-gallery-05.webp",
      "./assets/images/optimized/wisdom-strength-gallery-06.webp",
      "./assets/images/optimized/wisdom-strength-gallery-07.webp",
      "./assets/images/optimized/wisdom-strength-gallery-08.webp",
      "./assets/images/optimized/wisdom-strength-gallery-09.webp"
    ],
    video: "https://cllent-personal-portfolic.oss-cn-beijing.aliyuncs.com/Video/wisdom-strength.mp4",
    videoFallback: "./assets/videos/wisdom-strength.mp4",
    link: "https://github.com/cllent/The-Great-Escape-of-Wisdom-and-Strength",
    playLink: playableHubUrl
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
    category: "personal",
    playLabel: "试玩构建合集",
    summary:
      "第一人称 3D 生存射击作品，围绕有限资源、僵尸追击与场景压迫感构建高强度战斗节奏。",
    contribution:
      "独立完成射击体验、僵尸 AI 状态机、MVC 分层、战斗 UI 与对象池优化，确保项目既能跑通玩法，也能稳定演示。",
    highlights: [
      "获得 CMIT 全国赛事三等奖。",
      "使用 NavMesh Agent 组织巡逻、发现、追击、攻击等敌人 AI 行为。",
      "通过对象池管理子弹、敌人、补给与特效，保证战斗阶段表现稳定。"
    ],
    tags: ["Unity", "C#", "FPS", "MVC", "NavMesh", "Object Pool"],
    stack: [
      ["Engine", "Unity 3D / Physics / Raycast / UGUI"],
      ["AI", "NavMesh Agent / 敌人状态机 / 追击逻辑"],
      ["Architecture", "MVC 分层 / 模块拆分 / 战斗 UI 同步"],
      ["Optimization", "对象池 / 特效复用 / 性能控制"]
    ],
    systems: [
      "射击系统：射线命中、碰撞反馈、补给拾取与资源压力共同塑造节奏。",
      "敌人 AI：巡逻、发现、追击、攻击与失去目标后的状态回退完整闭环。",
      "资源系统：弹药、医疗包与道具限制提升生存紧张感。",
      "性能系统：统一对象池调度战斗中高频生成与销毁对象。 "
    ],
    image: "./assets/images/optimized/justice-raid-cover-latest.webp",
    gallery: [
      "./assets/images/optimized/justice-raid-gallery-01.webp",
      "./assets/images/optimized/justice-raid-gallery-02.webp",
      "./assets/images/optimized/justice-raid-gallery-03.webp",
      "./assets/images/optimized/justice-raid-gallery-04.webp",
      "./assets/images/optimized/justice-raid-gallery-05.webp",
      "./assets/images/optimized/justice-raid-gallery-06.webp",
      "./assets/images/optimized/justice-raid-gallery-07.webp",
      "./assets/images/optimized/justice-raid-gallery-08.webp",
      "./assets/images/optimized/justice-raid-gallery-09.webp",
      "./assets/images/optimized/justice-raid-gallery-10.webp",
      "./assets/images/optimized/justice-raid-gallery-11.webp",
      "./assets/images/optimized/justice-raid-gallery-12.webp",
      "./assets/images/optimized/justice-raid-gallery-13.webp",
      "./assets/images/optimized/justice-raid-gallery-14.webp"
    ],
    video: "https://cllent-personal-portfolic.oss-cn-beijing.aliyuncs.com/Video/justice-raid.mp4",
    videoFallback: "./assets/videos/justice-raid.mp4",
    link: "https://github.com/cllent/The-Justice-Raid-of-the-Abandoned-Factory",
    playLink: playableHubUrl
  }
];

const views = {
  home: document.querySelector("#homeView"),
  detail: document.querySelector("#detailView"),
  profile: document.querySelector("#profileView")
};

const featuredProject = document.querySelector("#featuredProject");
const showcaseRail = document.querySelector("#showcaseRail");
const mobileProjectFeed = document.querySelector("#mobileProjectFeed");
const workGrid = document.querySelector("#workGrid");
const workViewport = document.querySelector("#workViewport");
const detailPanel = document.querySelector("#detailPanel");
const transitionFlare = document.querySelector("#transitionFlare");
const cardOrder = ["vr-room", "physics-illusion", "element-knight", "wisdom-strength", "justice-raid"];

function getProjectVideoSource(project) {
  return project.video || project.videoFallback || "";
}

function openProjectById(projectId, origin) {
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return;
  }

  renderDetail(project);
  activateView("detail", origin);
}

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

function projectCategoryLabel(project) {
  return project.category === "commercial" ? "Commercial Project" : "Personal / Academic Project";
}

function projectActionMarkup(project, compact = false) {
  const playText = compact ? "试玩" : project.playLabel || "打开可试玩版本";
  return `
    <div class="project-actions">
      <a href="${project.playLink || playableHubUrl}" target="_blank" rel="noreferrer">${playText}</a>
      <a href="${project.link}" target="_blank" rel="noreferrer">${compact ? "源码" : "打开 GitHub README"}</a>
    </div>
  `;
}

function renderHomeShowcase() {
  const primary = projects.find((project) => project.priority === "core") || projects[0];
  const featured = projects.find((project) => project.priority === "featured");
  const orderedProjects = projects
    .slice()
    .sort((a, b) => cardOrder.indexOf(a.id) - cardOrder.indexOf(b.id));

  featuredProject.innerHTML = `
    <button class="feature-case-media" type="button" data-project="${primary.id}" style="--feature-bg:url(${primary.image})">
      <span>${primary.award}</span>
    </button>
    <div class="feature-case-copy">
      <p class="kicker">Featured Case</p>
      <h2>${primary.title}</h2>
      <p>${primary.summary}</p>
      <div class="meta-row">
        <span>${projectCategoryLabel(primary)}</span>
        <span>${primary.type}</span>
        <span>${primary.period}</span>
      </div>
      ${projectActionMarkup(primary)}
    </div>
  `;

  const railItems = [
    featured,
    {
      title: "可试玩构建合集",
      award: "Playable Builds",
      summary: "集中收纳作品集中可直接下载或打包试玩的版本，让招聘方和面试官能从展示页继续进入真实体验。",
      tags: ["GitHub", "Builds", "Playable", "Portfolio"],
      image: primary.image,
      href: playableHubUrl
    }
  ].filter(Boolean);

  showcaseRail.innerHTML = railItems
    .map((project) => {
      const cardContent = `
        <span class="rail-label">${project.award}</span>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="card-tags">${renderTags(project.tags.slice(0, 4))}</div>
      `;

      if (project.href) {
        return `
          <a class="rail-card" href="${project.href}" target="_blank" rel="noreferrer" style="--rail-bg:url(${project.image})">
            ${cardContent}
          </a>
        `;
      }

      return `
        <button class="rail-card" type="button" data-project="${project.id}" style="--rail-bg:url(${project.image})">
          ${cardContent}
        </button>
      `;
    })
    .join("");

  mobileProjectFeed.innerHTML = `
    <div class="mobile-feed-heading">
      <p class="kicker">Selected Work</p>
      <a href="${playableHubUrl}" target="_blank" rel="noreferrer">打开可试玩构建合集</a>
    </div>
    <div class="mobile-feature-stack">
      ${orderedProjects
        .map(
          (project) => `
            <button class="mobile-project-card ${project.priority === "core" ? "is-core" : project.priority === "featured" ? "is-featured" : ""}" type="button" data-project="${project.id}">
              <img src="${project.image}" alt="${project.title} 项目封面" loading="lazy" />
              <span>${project.award}</span>
              <h3>${project.title}</h3>
              <p>${project.summary}</p>
              <div class="mobile-card-footer">
                <small>${project.type}</small>
                <strong>查看案例</strong>
              </div>
            </button>
          `
        )
        .join("")}
    </div>
  `;

  document.querySelectorAll("[data-project]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      const projectId = event.currentTarget.dataset.project;
      if (projectId) {
        openProjectById(projectId, event.currentTarget);
      }
    });
  });
}

function mediaMarkup(project, className) {
  if (project.image) {
    return `<img src="${project.image}" alt="${project.title} 项目封面" loading="lazy" />`;
  }

  return `
    <div class="${className}">
      <strong>${project.title}</strong>
      <small>封面占位，后续可替换为项目主视觉</small>
    </div>
  `;
}

function galleryMarkup(project) {
  if (!project.gallery || project.gallery.length === 0) {
    return `<div class="gallery-placeholder">演示图占位，后续可继续补充截图</div>`;
  }

  if (project.gallery.length === 1) {
    return `
      <div class="gallery-static">
        <img src="${project.gallery[0]}" alt="${project.title} 项目截图" loading="lazy" />
      </div>
    `;
  }

  const loopGallery = [...project.gallery, ...project.gallery];

  return `
    <div class="detail-gallery-viewport" id="detailGalleryViewport" aria-label="${project.title} 演示图集">
      <div class="detail-gallery-track" id="detailGalleryTrack">
        ${loopGallery
          .map(
            (image, index) => `
              <figure class="gallery-item">
                <img src="${image}" alt="${project.title} 项目截图 ${index + 1}" loading="lazy" />
              </figure>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function handleVideoError(videoId, externalUrl) {
  const wrapper = document.getElementById(videoId + "-wrapper");
  if (!wrapper || wrapper.querySelector(".video-error-fallback")) {
    return;
  }

  const fallback = document.createElement("div");
  fallback.className = "video-error-fallback";
  fallback.innerHTML = `
    <span class="play-core"></span>
    <strong>视频暂时无法加载</strong>
    <small>可以尝试刷新页面或打开项目仓库查看演示说明。</small>
    ${
      externalUrl
        ? `<a class="external-video-link" href="${externalUrl}" target="_blank" rel="noreferrer">打开视频外链</a>`
        : ""
    }
  `;
  wrapper.replaceWith(fallback);
}

function videoMarkup(project) {
  const source = getProjectVideoSource(project);

  if (source) {
    const videoId = `video-${project.id}`;
    return `
      <div class="video-wrapper" id="${videoId}-wrapper">
        <video class="project-video" src="${source}" poster="${project.image || ""}" controls playsinline preload="none" onerror="handleVideoError('${videoId}', '${project.video || ""}')"></video>
      </div>`;
  }

  return `
    <div class="video-placeholder">
      <span class="play-core"></span>
      <strong>视频占位</strong>
      <small>后续把 ${project.title} 的演示视频放到 assets/videos 即可</small>
    </div>
  `;
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
      const priorityClass =
        project.priority === "core" ? "is-core" : project.priority === "featured" ? "is-featured" : "";
      const displayIndex = String((index % orderedProjects.length) + 1).padStart(2, "0");

      return `
        <button class="work-card ${placeholderClass} ${priorityClass}" type="button" data-project="${project.id}" style="--card-bg:${background}">
          <span class="work-card-index">${displayIndex}</span>
          ${project.priority === "core" ? '<span class="priority-ribbon">核心项目</span>' : ""}
          ${project.priority === "featured" ? '<span class="priority-ribbon featured-ribbon">重点作品</span>' : ""}
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
        ${projectActionMarkup(project)}
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
        <h3>视频与演示图</h3>
        ${videoMarkup(project)}
        <div class="gallery-strip">${galleryMarkup(project)}</div>
      </section>
    </div>
  `;

  setupDetailGallery();
}

document.querySelector("#openProfile").addEventListener("click", (event) => activateView("profile", event.currentTarget));
function stopDetailMedia() {
  detailPanel.querySelectorAll(".project-video").forEach(function (video) {
    video.pause();
    video.removeAttribute("src");
    video.load();
  });
}

document.querySelector("#backToHome").addEventListener("click", (event) => {
  stopDetailGallery();
  stopDetailMedia();
  activateView("home", event.currentTarget);
});
document.querySelector("#backFromProfile").addEventListener("click", (event) => activateView("home", event.currentTarget));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !views.home.classList.contains("is-active")) {
    stopDetailGallery();
    stopDetailMedia();
    activateView("home");
  }
});

renderHomeShowcase();
renderWorkCards();

let carouselOffset = 0;
let carouselHalfWidth = 0;
let carouselLastTime = 0;
let carouselFrame = 0;
let isSnappingCarousel = false;
let isDraggingCarousel = false;
let isHoveringCarousel = false;
let carouselDragStartX = 0;
let carouselDragStartOffset = 0;
let carouselDragDistance = 0;
let carouselPointerDownProjectId = "";

function normalizeCarouselOffset() {
  if (carouselHalfWidth <= 0) {
    return;
  }

  while (carouselOffset > 0) {
    carouselOffset -= carouselHalfWidth;
  }

  while (carouselOffset <= -carouselHalfWidth) {
    carouselOffset += carouselHalfWidth;
  }
}

function measureCarousel() {
  carouselHalfWidth = workGrid.scrollWidth / 2;
  normalizeCarouselOffset();
  workGrid.style.transform = `translate3d(${carouselOffset}px, 0, 0)`;
}

function animateCarousel(time) {
  if (!carouselLastTime) {
    carouselLastTime = time;
  }

  const delta = time - carouselLastTime;
  carouselLastTime = time;

  if (!isDraggingCarousel && !isHoveringCarousel && !isSnappingCarousel) {
    carouselOffset -= delta * 0.028;
    normalizeCarouselOffset();
    workGrid.style.transform = `translate3d(${carouselOffset}px, 0, 0)`;
  }

  carouselFrame = requestAnimationFrame(animateCarousel);
}

function getPointerX(event) {
  return event.touches ? event.touches[0].clientX : event.clientX;
}

function startCarouselDrag(event) {
  event.preventDefault();
  isDraggingCarousel = true;
  carouselDragStartX = getPointerX(event);
  carouselDragStartOffset = carouselOffset;
  carouselDragDistance = 0;
  carouselPointerDownProjectId = event.target.closest(".work-card")?.dataset.project || "";

  const touchedCard = event.target.closest(".work-card");
  if (touchedCard) {
    document.querySelectorAll(".work-card.is-touched").forEach(function (c) { c.classList.remove("is-touched"); });
    touchedCard.classList.add("is-touched");
  }

  workViewport.classList.add("is-dragging");
}

function moveCarouselDrag(event) {
  if (!isDraggingCarousel) {
    return;
  }

  event.preventDefault();
  const currentX = getPointerX(event);
  carouselDragDistance = Math.max(carouselDragDistance, Math.abs(currentX - carouselDragStartX));
  carouselOffset = carouselDragStartOffset + currentX - carouselDragStartX;
  normalizeCarouselOffset();
  workGrid.style.transform = `translate3d(${carouselOffset}px, 0, 0)`;
}

function endCarouselDrag(event) {
  let releasedProjectId = "";

  if (event && typeof event.clientX === "number" && typeof event.clientY === "number") {
    releasedProjectId = document.elementFromPoint(event.clientX, event.clientY)?.closest(".work-card")?.dataset.project || "";
  }

  if (event && typeof event.pointerId === "number" && workViewport.hasPointerCapture(event.pointerId)) {
    workViewport.releasePointerCapture(event.pointerId);
  }

  const shouldOpenProject =
    carouselDragDistance <= 8 &&
    carouselPointerDownProjectId &&
    releasedProjectId &&
    carouselPointerDownProjectId === releasedProjectId;

  isDraggingCarousel = false;
  workViewport.classList.remove("is-dragging");
  carouselPointerDownProjectId = "";

  document.querySelectorAll(".work-card.is-touched").forEach(function (c) { c.classList.remove("is-touched"); });

  if (shouldOpenProject) {
    openProjectById(releasedProjectId, document.querySelector(`[data-project="${releasedProjectId}"]`));
  }
}

workViewport.addEventListener("mouseenter", () => {
  isHoveringCarousel = true;
});

workViewport.addEventListener("mouseleave", () => {
  isHoveringCarousel = false;
  endCarouselDrag();
});

workViewport.addEventListener("pointerdown", (event) => {
  if (event.button !== 0) {
    return;
  }

  if (window.innerWidth <= 680) {
    carouselPointerDownProjectId = event.target.closest(".work-card")?.dataset.project || "";
    carouselDragDistance = 0;
    return;
  }

  workViewport.setPointerCapture(event.pointerId);
  startCarouselDrag(event);
});

workViewport.addEventListener("pointermove", moveCarouselDrag);
workViewport.addEventListener("pointerup", endCarouselDrag);
workViewport.addEventListener("pointercancel", endCarouselDrag);

measureCarousel();
carouselFrame = requestAnimationFrame(animateCarousel);

/* 手机端左右箭头按钮 */
function getCardStep() {
  const card = workGrid.querySelector(".work-card");
  if (!card) {
    return 300;
  }
  const gap = 18;
  return card.offsetWidth + gap;
}

function snapCarousel(direction) {
  var step = getCardStep();
  var card = workGrid.querySelector(".work-card");
  var cardWidth = card ? card.offsetWidth : 280;
  var viewportWidth = workViewport.clientWidth;
  // Center the current card in the viewport
  var centerOffset = (viewportWidth - cardWidth) / 2;

  // Find nearest aligned card index, account for center offset
  var rawIndex = Math.round((centerOffset - carouselOffset) / step);
  var targetIndex = rawIndex + direction;
  carouselOffset = centerOffset - (targetIndex * step);
  normalizeCarouselOffset();

  isSnappingCarousel = true;
  workGrid.style.transition = "transform 360ms cubic-bezier(0.2, 0.8, 0.2, 1)";
  workGrid.style.transform = "translate3d(" + carouselOffset + "px, 0, 0)";
  setTimeout(function () {
    workGrid.style.transition = "";
    isSnappingCarousel = false;
  }, 360);
}

var carouselLeftBtn = document.getElementById("carouselLeft");
var carouselRightBtn = document.getElementById("carouselRight");

if (carouselLeftBtn) {
  carouselLeftBtn.addEventListener("click", function () {
    snapCarousel(1);
  });
}

if (carouselRightBtn) {
  carouselRightBtn.addEventListener("click", function () {
    snapCarousel(-1);
  });
}

let detailGalleryViewport = null;
let detailGalleryTrack = null;
let detailGalleryOffset = 0;
let detailGalleryHalfWidth = 0;
let detailGalleryLastTime = 0;
let detailGalleryFrame = 0;
let isHoveringDetailGallery = false;
let isDraggingDetailGallery = false;
let detailGalleryDragStartX = 0;
let detailGalleryDragStartOffset = 0;

function stopDetailGallery() {
  if (detailGalleryFrame) {
    cancelAnimationFrame(detailGalleryFrame);
    detailGalleryFrame = 0;
  }
}

function normalizeDetailGalleryOffset() {
  if (detailGalleryHalfWidth <= 0) {
    return;
  }

  while (detailGalleryOffset > 0) {
    detailGalleryOffset -= detailGalleryHalfWidth;
  }

  while (detailGalleryOffset <= -detailGalleryHalfWidth) {
    detailGalleryOffset += detailGalleryHalfWidth;
  }
}

function syncDetailGalleryTransform() {
  if (detailGalleryTrack) {
    detailGalleryTrack.style.transform = `translate3d(${detailGalleryOffset}px, 0, 0)`;
  }
}

function measureDetailGallery() {
  if (!detailGalleryTrack) {
    return;
  }

  detailGalleryHalfWidth = detailGalleryTrack.scrollWidth / 2;
  normalizeDetailGalleryOffset();
  syncDetailGalleryTransform();
}

function animateDetailGallery(time) {
  if (!detailGalleryTrack) {
    return;
  }

  if (!detailGalleryLastTime) {
    detailGalleryLastTime = time;
  }

  const delta = time - detailGalleryLastTime;
  detailGalleryLastTime = time;

  if (!isHoveringDetailGallery && !isDraggingDetailGallery) {
    detailGalleryOffset -= delta * 0.024;
    normalizeDetailGalleryOffset();
    syncDetailGalleryTransform();
  }

  detailGalleryFrame = requestAnimationFrame(animateDetailGallery);
}

function startDetailGalleryDrag(event) {
  event.preventDefault();
  isDraggingDetailGallery = true;
  detailGalleryDragStartX = getPointerX(event);
  detailGalleryDragStartOffset = detailGalleryOffset;
  detailGalleryViewport.classList.add("is-dragging");
}

function moveDetailGalleryDrag(event) {
  if (!isDraggingDetailGallery) {
    return;
  }

  event.preventDefault();
  const currentX = getPointerX(event);
  detailGalleryOffset = detailGalleryDragStartOffset + currentX - detailGalleryDragStartX;
  normalizeDetailGalleryOffset();
  syncDetailGalleryTransform();
}

function endDetailGalleryDrag(event) {
  if (!detailGalleryViewport) {
    return;
  }

  if (event && typeof event.pointerId === "number" && detailGalleryViewport.hasPointerCapture(event.pointerId)) {
    detailGalleryViewport.releasePointerCapture(event.pointerId);
  }

  isDraggingDetailGallery = false;
  detailGalleryViewport.classList.remove("is-dragging");
}

function setupDetailGallery() {
  stopDetailGallery();

  detailGalleryViewport = detailPanel.querySelector("#detailGalleryViewport");
  detailGalleryTrack = detailPanel.querySelector("#detailGalleryTrack");
  detailGalleryOffset = 0;
  detailGalleryHalfWidth = 0;
  detailGalleryLastTime = 0;
  isHoveringDetailGallery = false;
  isDraggingDetailGallery = false;

  if (!detailGalleryViewport || !detailGalleryTrack) {
    return;
  }

  measureDetailGallery();

  detailGalleryViewport.addEventListener("mouseenter", () => {
    isHoveringDetailGallery = true;
  });

  detailGalleryViewport.addEventListener("mouseleave", () => {
    isHoveringDetailGallery = false;
    isDraggingDetailGallery = false;
    detailGalleryViewport.classList.remove("is-dragging");
  });

  detailGalleryViewport.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) {
      return;
    }

    detailGalleryViewport.setPointerCapture(event.pointerId);
    startDetailGalleryDrag(event);
  });

  detailGalleryViewport.addEventListener("pointermove", moveDetailGalleryDrag);
  detailGalleryViewport.addEventListener("pointerup", endDetailGalleryDrag);
  detailGalleryViewport.addEventListener("pointercancel", endDetailGalleryDrag);

  detailGalleryFrame = requestAnimationFrame(animateDetailGallery);
}

window.addEventListener("resize", () => {
  measureCarousel();
  measureDetailGallery();
  resizeCanvas();
});

const canvas = document.querySelector("#sandCanvas");
const context = canvas.getContext("2d");
let particles = [];
let animationFrame = 0;

let isMobileDevice = false;

function resizeCanvas() {
  isMobileDevice = window.innerWidth < 768;

  if (isMobileDevice) {
    canvas.style.display = "none";
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    }
    return;
  }

  canvas.style.display = "";
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
  if (isMobileDevice) {
    return;
  }

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

    const colors = ["rgba(98,230,211,0.34)", "rgba(158,123,255,0.28)", "rgba(245,182,91,0.26)"];

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
