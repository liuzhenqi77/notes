---
id: favorite-packages
title: Favorite Packages
sidebar_label: Packages
author: Zhen-Qi Liu
authorURL: http://echoliu.me
---

## [tqdm](https://github.com/tqdm/tqdm) - for progress visualization

> `tqdm` means "progress" in Arabic (taqadum, تقدّم) and an abbreviation for "I love you so much" in Spanish (te quiero demasiado).

```bash
pip install tqdm
# or
conda install -c conda-forge tqdm
```

Simply use `tqdm(iterable)` in regular code.

```python
from tqdm import tqdm
for i in tqdm(range(10000)):
    ...
```

`76%|████████████████████████████         | 7568/10000 [00:33<00:10, 229.00it/s]`

## [itchat](https://github.com/littlecodersh/itchat) - for wechat API

> itchat是一个开源的微信个人号接口，使用python调用微信从未如此简单。使用不到三十行的代码，你就可以完成一个能够处理所有信息的微信机器人。

```bash
pip install itchat
```

```python
import itchat

itchat.auto_login()

itchat.send('Hello, filehelper', toUserName='filehelper')
```

## [PTable](https://github.com/kxxoling/PTable) - for pretty tabular formatting
