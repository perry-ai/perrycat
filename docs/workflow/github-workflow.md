# GitHub 协作开发流程指南

## 1. 问题发现与Issue创建

1. 发现问题或新需求时，在GitHub仓库创建Issue
2. Issue标题应清晰描述问题/需求
3. Issue内容应包含：
   - 问题描述（如果是bug）
   - 需求背景和目标（如果是新功能）
   - 预期行为
   - 复现步骤（如果是bug）
   - 相关截图或日志（如有）

## 2. Issue拆解与子任务

1. 对于复杂Issue，拆分为多个子Issue：
   - 每个子Issue应聚焦单一任务
   - 在父Issue中列出所有子Issue链接
   - 使用`#`引用相关Issue（如`#123`）

## 3. 里程碑规划

1. 创建里程碑(Milestone)：
   - 命名规范：`vX.Y.Z`（遵循语义化版本）
   - 设置合理的截止日期
   - 将相关Issue分配到里程碑

## 4. 使用Projects功能

1. 创建或使用现有Project看板
2. 将Issue添加到看板中
3. 使用列表示不同状态（如：待办、进行中、已完成）
4. 定期更新看板状态

## 5. 开发流程

1. 创建开发分支：
   ```bash
   git checkout -b feat/issue-123-short-description
   ```
   - 分支命名：`类型/issue编号-简短描述`
   - 类型前缀：`feat/`(功能)、`fix/`(修复)、`docs/`(文档)等

2. 开发完成后提交PR：
   - 从开发分支向`main`分支提PR
   - PR标题格式：`类型: 简短描述 (#Issue编号)`
   - PR描述应包含：
     - 变更内容
     - 相关Issue链接
     - 测试说明
     - 截图（如有UI变更）

3. Code Review：
   - 至少需要1个核心成员批准
   - 解决所有评论后才能合并

4. 合并PR并关闭Issue：
   - 使用`Squash and merge`方式合并
   - 在合并信息中引用Issue（如`Closes #123`）

## 6. 版本发布

1. 当里程碑中所有Issue完成后：
   - 从`main`分支创建发布分支`release/vX.Y.Z`
   - 更新CHANGELOG.md：
     - 按类别列出所有变更（功能、修复、优化等）
     - 每个变更项引用相关PR/Issue

2. 创建GitHub Release：
   - 版本号：`vX.Y.Z`
   - 标题：`版本 X.Y.Z`
   - 描述内容：
     - 主要变更摘要
     - 完整变更日志（可链接到CHANGELOG.md）
     - 升级说明（如有不兼容变更）
   - 附加编译后的产物（如二进制文件）

## 附录

- [语义化版本规范](docs/语义化版本.md)
- [GitHub角色与职责](docs/workflow/github-roles.md)
- [代码贡献指南](CONTRIBUTING.md)
