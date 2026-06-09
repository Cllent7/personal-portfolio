const projects = [
  {
    title: "动作 Demo：角色战斗系统",
    summary: "展示角色移动、连招、受击反馈、镜头震动和技能冷却。这里可以替换成你的真实项目描述。",
    initial: "A",
    color: "#0e7c86",
    tags: ["Unity", "C#", "Gameplay", "Camera"]
  },
  {
    title: "移动端 UI：背包与任务系统",
    summary: "展示 UI 架构、数据绑定、列表优化、弹窗管理和移动端交互适配。",
    initial: "U",
    color: "#d95d39",
    tags: ["UGUI", "MVC", "Mobile", "Optimization"]
  },
  {
    title: "WebGL 展示：在线交互场景",
    summary: "展示 WebGL 发布、资源加载、首屏体验优化和网页嵌入能力。",
    initial: "W",
    color: "#c99325",
    tags: ["WebGL", "Addressables", "Build Pipeline"]
  }
];

const projectGrid = document.querySelector("#projectGrid");

projectGrid.innerHTML = projects
  .map(
    (project) => `
      <article class="project-card">
        <div class="project-visual" style="background:${project.color}">
          <span>${project.initial}</span>
        </div>
        <div class="project-body">
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
      </article>
    `
  )
  .join("");

document.querySelector("#year").textContent = new Date().getFullYear();
