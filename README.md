# perrycat
Fun, regularly updated learning project.


# 本次学习项目目标：
### 项目管理与协作
1. 明确使用Issue + Milestones 方式管理功能更新和计划
   注意点：issue格式、Milestones格式等 找个成熟项目学习并文字整理终结
```
Milestones（里程碑）
适用场景：版本发布计划、阶段性目标
位置：仓库 → "Issues" → "Milestones"
功能：

为每个目标阶段（如"v1.0 发布"）创建里程碑，设置截止日期。

将相关 Issues/PRs 关联到里程碑，跟踪进度。
示例：
里程碑名称：实现用户认证系统  
截止日期：2024-08-30  
关联Issues：登录功能 #123、注册功能 #124、密码重置 #125

Issues + Labels（问题与标签）
适用场景：详细任务分解、优先级管理
位置：仓库 → "Issues"
功能：

用 Labels（如feature, bug, high priority）分类任务。

使用 Templates 标准化目标描述（如"功能提案模板"）。
示例：
Issue标题：[Feature] 支持暗黑模式  
标签：enhancement, UI  
内容：目标描述、验收标准、参考设计链接。
```
2. 使用Issue + PR 进行功能点新增和缺陷修复工作
   注意点：PR格式、审查协作等 找个成熟项目学习并文字整理终结
```
创建功能需求 Issue
目的：明确功能目标、讨论方案、分配责任。
操作：
在仓库中点击 "Issues" → "New Issue"。
使用模板（如 Feature Request）规范描述：
## 功能描述
[详细说明功能背景和目标]
## 验收标准
- [ ] 条件1
- [ ] 条件2
## 相关资源
[设计稿链接、API文档等]

创建开发分支
分支命名规范：
feat/[简短描述]-[Issue号]（如 feat/user-auth-#123）。
操作：
git checkout -b feat/user-auth-#123

提交代码并关联 PR
提交信息规范：
类型(范围): 描述 #Issue号（如 feat(auth): 添加登录功能 #123）。
创建 PR：
推送分支后，GitHub 会提示 "Compare & Pull Request"。
在 PR 描述中：
引用关联的 Issue（输入 #123 自动链接）。
使用关键字（如 Closes #123）实现合并后自动关闭 Issue。
添加截图或测试结果证明功能完成。

步骤 5：代码审查（Code Review）
Reviewers：指定团队成员审查代码。
评论建议：
在 PR 的 "Files changed" 标签页中行内评论。
持续集成（CI）：
确保 PR 通过自动化测试（如 GitHub Actions）。

步骤 6：合并与清理
合并方式：
选择 "Squash and merge"（保持提交历史整洁）。
后续操作：
删除已合并的分支。
```

### 开发规范
1. commit信息规范化，最好带上emoji
2. 除文档类更新，其他功能类更新应当基于Issue + Milestones + PR的协作方式

### 技术选型方向
1. 前端应当要基于React v18.3.1（相对稳定、相对新的版本）
2. nodejs 16+ / 18 / 20
3. 后端1：Express.js，或者类似的主流的可以实现后端类功能的框架
4. 考虑采用monorepo
5. 后端2：java 8 + springboot，同步需要了解总结 注册中心、配置中心、redis、mq等
6. 需要支持markdown写作，例如mdx
7. （非必要）如需数据库，考虑mysql + PostgreSQL
8. （非必要）可以考虑docker部署
9. （进阶）后端3：python 或者其他可以实现ai/mcp相关功能的服务端
10. （进阶）客户端 Tauri 或者其他

### 学习文档要求
1. 要整理web发展史，本质上是实践中矛盾推动着技术发展
2. 结合更多的图表的，内容要总结归纳到工程中
3. 要有论文阅读计划和整理，可参考b站中对应视频

### 开发过程
1. 实践和基础学习并行，按过往经验：实践--学习--实践 这个顺序比较有效
2. AI协作很重要，但是如何弄懂、内化 更重要

### 输出
1. 考虑 工作流、数字人 等方式，输出视频类
2. 考虑 文件+md2card 输出图片类
3. 文字类式微，以总览图+文字形式留存底稿
