---
id: multiprocessing
title: Multiprocessing
sidebar_label: Multiprocessing
author: Zhen-Qi Liu
authorURL: http://echoliu.me
---

## Random.random() not safe

Be careful with any simulation that involves random initialization.

Not safe

```python
import multiprocessing as mp
import time
def apd(i):
    return np.random.random((1,10))
pool = mp.Pool(processes=4)
list_start_vals = range(40, 50)
res = np.array(pool.map(apd, list_start_vals))
pool.close()
print(res)
```

Safe

```python
from functools import partial
import random
def fnx(seed, a=1):
    pid = mp.current_process()._identity[0]
    rng = random.SystemRandom()
    print([rng.random() for _ in range(50)])
    # or
    local_state = np.random.mtrand.RandomState(pid)
    return a* local_state.rand(10000, 1000)
f= partial(fnx, a=15)

pool = mp.Pool(processes=10)
list_start_vals = [np.random.randint(1, 1e8) for _ in range(10)]
array_2D = np.array(pool.map(f, list_start_vals))
pool.close()
```