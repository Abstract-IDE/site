---
sidebar_position: 3
---




# Install Formatter


### Installing Formatter
we use [Mason](https://github.com/williamboman/mason.nvim) to install and manage the Formatters. To install a Formatter,
all you need to do is open neovim and execute `:MasonInstall <Formatter_name>` command.
For example, to install [`black`](https://github.com/psf/black) (LSP for python), use following neovim's command.
```lua
MasonInstall black
```
to get the list of all available Formatters, use the following neovim's command
```lua
Mason
```
actually this will list out the all available packages. `Press 5` to just list out the formatters.
you can `press <C-f>` to apply language filter (search by Languages)

:::danger Limitations
Mason has only few Formatters available for now. incase you don't see the formatter you like to install, please open a
github issue to Abstract or Mason repository.
:::
