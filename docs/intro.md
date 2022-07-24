---
sidebar_position: 1
---

# Introduction

Abstract, The NeoVim configuration to achieve the power of Modern IDE.


# Features

1. [Language Server Protocol](https://docs.microsoft.com/en-us/visualstudio/extensibility/language-server-protocol?view=vs-2022) (LSP)
2. [Debug Adapter Protocol](https://microsoft.github.io/debug-adapter-protocol/overview) (DAP)
3. Formatter
5. Linter
6. [Treesitter](https://tree-sitter.github.io/tree-sitter/)


# why Abstract?

- `Project based config loading` ( you can define configs in `.__nvim__.lua` file in the root of your working project so that you don't have to change the config everytime you work on new/seperate project `similar to .editorconfig` )
- `Your own custom configs and Mappings` (if you don't like Abstract's default config/mapping, you can change/override it on [override_defalut.lua](https://github.com/Abstract-IDE/Abstract/blob/main/lua/customs/override_defalut.lua) OR `~/.__nvim__.lua` file )
- `Separate config file for each plugins` each plugin has their own config file which is defined in lua/plugins directory
- `Easily Disable plugin` Abstract's using [packer](https://github.com/wbthomason/packer.nvim) as plugin manager. conmmenting out `config` option from plugin options in [packer config file](https://github.com/Abstract-IDE/Abstract/blob/main/lua/plugins/packer_nvim.lua) will disable that plugin
- `Easy Installation` install Abstract with single command

