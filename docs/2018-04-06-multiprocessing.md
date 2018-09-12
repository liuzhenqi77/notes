---
id: multiprocessing
title: Multiprocessing
sidebar_label: Multiprocessing
author: Zhen-Qi Liu
authorURL: http://echoliu.me
---

## Random.random() not safe

Be careful with any simulation that involves random initialization.

### Not safe

```python
import numpy as np
import multiprocessing as mp
from collections import Counter

def get_random_numbers(_):
    return np.random.random()

pool = mp.Pool(processes=mp.cpu_count())
results = np.array(pool.map(get_random_numbers, range(100)))
pool.close()

print(results)
print(Counter(results))

# Counter({0.7402974477587317: 8, 0.9182560116758542: 8,
# 0.9889991373338736: 8, 0.42993316872975285: 8, 0.922553478848295: 6,
# 0.6132136210614764: 6, 0.9185437104462241: 6, 0.47044380590361545: 6,
# 0.9992757027520754: 6, 0.19866816377563612: 6, 0.4029619592821866: 6,
# 0.2641095378681412: 6, 0.7335364669571268: 5, 0.15184206037939552: 5,
# 0.46695325109033925: 5, 0.5052264703610879: 5})
```

There are answers on StackOverflow (that I cannot find now) suggesting using PID as the random, but it is still largely not stable.

```python
def get_random_numbers(_):
    pid = mp.current_process()._identity[0]
    local_state = np.random.mtrand.RandomState(pid)
    return local_state.rand()

# Counter({0.36618032461146066: 20, 0.90685386667433: 16,
# 0.4796492884337591: 16, 0.6919866188443934: 16, 0.005413330007831285: 12,
# 0.516936600528218: 8, 0.2147793428763879: 8, 0.6376112291529786: 4})
```

Of course we can seed with arbitary number, but this will not produce real random number between runs.

```python
def get_random_numbers(seed=None):
    local_state = np.random.RandomState(seed)
    return local_state.rand()

pool.map(get_random_numbers, range(20))
```

### Safe (but slow)

There is a possibility to use `random.SystemRandom()`, which will use `os.urandom()` function, according to official doc [here](https://docs.python.org/3.6/library/random.html#random.SystemRandom) and [here](https://docs.python.org/3.6/library/os.html#os.urandom). However, this function costs a lot of time and will not be efficient. So far, I have not found other safa methods with good performance, isn't there a 'salting' function that allows adding random factors but not seeding directly?

```python
def get_random_numbers(_):
    rng = random.SystemRandom()
    return rng.random()
```

### Workaround

Here is this workaround that I use, in which I use system random for seeding local random states, this may be the proper(only?) way for time/randomization trade-off.

```python
reseed = int.from_bytes(os.urandom(1), byteorder='little')
local_random_state = np.random.mtrand.RandomState(reseed)
```


## References

- Python 3.6.5 documentation
  - [9.6. random — Generate pseudo-random numbers](https://docs.python.org/3.6/library/random.html#random.SystemRandom)
  - [16.1. os — Miscellaneous operating system interfaces](https://docs.python.org/3.6/library/os.html#os.urandom)
- StackOverflow
  - [Seeding random number generators in parallel programs](https://stackoverflow.com/questions/29854398/seeding-random-number-generators-in-parallel-programs)