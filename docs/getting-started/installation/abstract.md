---
sidebar_position: 1
---




# Install Abstract


## Requirements

- `neovim >= v0.7` is required.

you can install Abstract in two ways,
- Manually
- Using `setup.py` script


## Installing using `setup.py` script

```bash
python <(curl -s https://raw.githubusercontent.com/Abstract-IDE/Abstract/main/setup.py)
```


## Installing Manually

```bash
git clone https://github.com/Abstract-IDE/Abstract
cd Abstract
python setup.py
```


:::tip NOTE

- pass `--delete 1` as an argument if you don't want to keep `.git`, `README.md`, `LICENSE` and `setup.py` files. Example:
```bash
python setup.py --delete 1
```
it could take some time depending on you connection (it's going to install plugins and some Languages Servers).
So, be patient and follow the output throws by setup.py script<br/><br/>

:::

:::tip NOTE

only some Language Servers are going to be installed. for more, install with [mason.nvim](https://github.com/williamboman/mason.nvim) <br/>
for example: to install C/C++'s LS ``` :MasonInstall clangd ```

:::

