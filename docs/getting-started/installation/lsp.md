---
sidebar_position: 2
---




# Install LSP


### What is the Language Server Protocol (LSP)?
>Adding features like auto complete, go to definition, or documentation on hover for a programming language takes
significant effort. Traditionally this work had to be repeated for each development tool, as each tool provides
different APIs for implementing the same feature. A Language Server is meant to provide the language-specific smarts
and communicate with development tools over a protocol that enables inter-process communication.
The idea behind the Language Server Protocol (LSP) is to standardize the protocol for how such servers and development tools
communicate. This way, a single Language Server can be re-used in multiple development tools, which in turn can support
multiple languages with minimal effort. LSP is a win for both language providers and tooling vendors!.
[read more](https://microsoft.github.io/language-server-protocol/)

### Installing LSP
we use [Mason](https://github.com/williamboman/mason.nvim) to install and manage the LSPs and the other packages.
To install LSP, all you need to do is open neovim and execute `:MasonInstall <LSP_name>` command. For example,
to install `clangd` (LSP for C/C++), use following neovim's command.
```lua
MasonInstall clangd
```
to get the list of all available LSPs and other packages, use the following neovim's command
```
Mason
```

:::tip
`:Mason` will list out the all available packages. To just list out LSP,
`press 2`. Press `<C-f>` `(CTRL+F)` to apply language filter (search by languages).
:::

### Examples
```
:MasonInstall pyright                    # LSP for python
:MasonInstall lua-language-server        # LSP for lua
:MasonInstall typescript-language-server # LSP for javascript/typescript
```
