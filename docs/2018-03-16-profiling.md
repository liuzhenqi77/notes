---
id: profiling
title: Profiling Python
sidebar_label: Profiling
author: Zhen-Qi Liu
authorURL: http://echoliu.me
---

## [line_profiler and kernprof](https://github.com/rkern/line_profiler)

> line_profiler is a module for doing line-by-line profiling of functions. kernprof is a convenient script for running either line_profiler or the Python standard library's cProfile or profile modules, depending on what is available.

Install the package by `pip` as follows,

```bash
pip install line_profiler
```
The command will be included in the `PATH`.

```bash
kernprof -l -v script_to_profile.py
```
where, `-l` means 'use the line-by-line profiler', `-v` means 'view the results of the profile'.


```python
@profile
def slow_function(a, b, c):
    ...
```

In practice, I recommend that use this decorator by comment/uncomment the line, so it will not interfere with IDE's static code analysis.




