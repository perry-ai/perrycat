# PNPM Workspace 工作机制详解

## 1. 基本概念

PNPM Workspace 是 pnpm 提供的 monorepo 管理方案，允许在单个代码库中管理多个相互依赖的包。本工程 `perrycat` 就是一个典型的 pnpm workspace 项目。

## 2. 项目结构分析

从 `pnpm-workspace.yaml` 可以看到本项目的 workspace 配置：
```yaml
packages:
  - 'libs/*'
  - 'apps/*'
```

对应实际目录结构：
```
perrycat/
├── apps/
│   └── perry-node/     # 应用包
├── libs/
│   └── utils/          # 工具库包
└── package.json        # 根package.json
```

## 3. 依赖存储方案

PNPM 采用独特的存储机制：

1. **全局存储**：
   - 所有依赖实际存储在 `~/.pnpm-store` 目录
   - 可通过 `pnpm store path` 查看具体位置

2. **项目级链接**：
   - 每个项目的 `node_modules` 包含的是到全局存储的硬链接
   - 根目录 `node_modules` 包含公共依赖
   - 子包目录下的 `node_modules` 包含特定依赖

3. **硬链接优势**：
   - 节省磁盘空间（同一文件只存储一份）
   - 保持依赖隔离性
   - 安装速度快（无需重复下载）

## 4. 本工程示例

以 `libs/utils` 为例：
1. 其依赖会安装在 `libs/utils/node_modules`
2. 如果其他包（如 `apps/perry-node`）也依赖相同版本，会复用全局存储
3. 通过 `pnpm -F libs/utils add [package]` 可以给特定包添加依赖

## 5. 常用命令

```bash
# 查看全局存储位置
pnpm store path

# 查看项目node_modules位置
pnpm root

# 给特定包添加依赖
pnpm -F libs/utils add lodash

# 安装所有workspace依赖
pnpm install
