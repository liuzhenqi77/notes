---
id: decorator-by-timeit
title: Decorator by Timeit
sidebar_label: Decorator
author: Zhen-Qi Liu
authorURL: http://echoliu.me
---

```python
def timeit(func):
    """time the function

    :param func: the function to be timed
    :return: wrapper
    """

    @wraps(func)
    def wrapper(*args, **kwargs):
        t1 = time.time()
        ret = func(*args, **kwargs)
        t2 = time.time()
        print('[LOG][time]', func.__name__, ' ', t2 - t1)
        return ret

    return wrapper
```