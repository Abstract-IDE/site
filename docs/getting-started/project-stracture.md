---
sidebar_position: 2
---



# Project Stracture

```txt title="~/.config/nvim/"
├── extra/
│   └── snippets/                  / custom defined snippets
│   ...
├── init.lua                       / load/source configs | heart of Abstract
├── lua/
│   ├── autocmd.lua                / auto command configs
│   ├── configs.lua                / configs that's don't depends on plugins
│   ├── mappings.lua               / mappings that don't depends on plugins
│   ├── packer_nvim.lua            / manage plugins
│   ├── customs/
│   │   ├── override_defalut.lua   / configs to override defined config
│   │   └── abstractline.lua         / i am working on it. btw it's a status line
│   └── plugins/                   / dir containing configs for plugins. each plugin has it's own config and can be locaed through init.lua file
│   ...
├── plugin/                        / auto-created by plugin manager
└── setup.py                       / python-script to install/update Abstract
```
