---
id: logging-recipe
title: Logging Recipe
sidebar_label: Logging
author: Zhen-Qi Liu
authorURL: http://echoliu.me
---

## Basic Modules

It is sometimes necessary to use Python logging module in a scientific computing context. The advantage of `logging` compared to `print` function is obvious.

We sometimes want more customized logging settings, however, there is seldom any working snippets on the internet, while the [Logging Cookbook](https://docs.python.org/3/howto/logging-cookbook.html) only covers some advanced cases.

Here, the recipe has the following configs:

- customized output
- controlled output console/file and level
- filter for certain conditions

### logging - Python logging module

In the simplist setting, we want to use Python's logging module like this.

```python
import logging

# config (can be omitted)
logging.basicConfig(filename='example.log',level=logging.DEBUG)

# use
logging.debug()
logging.info()
logging.warning()

logging.error()
logging.critical()
```

### dictConfig - Configuration dictionary schema

### handler - Control output

### loggers - Register logger

### formatters - Message format

### filters - Filter instance

## Full Recipe

### Usage

```python
import logging
logger = configure_logger(__name__, log_file_name)
logger.debug()
logger.info()
logger.warning()
logger.error()
logger.critical()
```

### A battery-included sample logger configuration

```python
# put the next line in code files to use logger
logger = configure_logger(__name__, 'my_logger.log')


# setup the logger using the following scripts
class word_filter(logging.Filter):
    """
    This is a auxillary class for function configure_logger()
    Defines a logging.Filter tool to filter certain words from the log
    Use record.property to access the log and self.param to store a black list
    """
    def __init__(self, param=None):
        self.param = list(param)

    def filter(self, record):
        if self.param is None:
            allow = True
        else:
            allow = not any(_ in record.name for _ in self.param)
        # if allow:
            # record.msg = 'changed: ' + record.msg
        return allow


def configure_logger(name, log_path):
    """custom logger
    This is a custom logger tuned for best debugging.
    Please also include the word_filter class above.
    :param name: name to show in the log
    :param log_path: path to save the log file
    :return:
    """
    logging.config.dictConfig({
        'version': 1,
        'disable_existing_loggers': False,
        'formatters': {
            'default': {
                'format': '[%(asctime)s][%(levelname)s][%(name)s][%(funcName)s():%(lineno)s] - %(message)s',
                'datefmt': '%Y-%m-%d %H:%M:%S'
            }
        },
        'filters': {
            'word_filter': {
                '()': word_filter,
                'param': ['PIL'],
            }
        },
        'handlers': {
            'console': {
                'level': 'INFO',
                'filters': ['word_filter'],
                'class': 'logging.StreamHandler',
                'formatter': 'default'
            },
            'file': {
                'level': 'DEBUG',
                'filters':['word_filter'],
                'class': 'logging.handlers.RotatingFileHandler',
                'formatter': 'default',
                'filename': log_path,
                'mode': 'w',
                'backupCount': 3
            }
        },
        'loggers': {
            '': {
                'level': 'DEBUG',
                'handlers': ['console', 'file'],
                'propagate': True
            }
        }
    })
    return logging.getLogger(name)
```

## How to Monitor Log on Ubuntu

In vim, use `:e!` to reload.

Use `tail -f FILE_NAME`

Use `less +F FILE_NAME`

## References

- Python 3.6.5rc1 documentation
  - [Logging HOWTO](https://docs.python.org/3/howto/logging.html)
  - [Logging Cookbook](https://docs.python.org/3/howto/logging-cookbook.html)
  - [16.6. logging — Logging facility for Python](https://docs.python.org/3/library/logging.html)
  - [16.7. logging.config — Logging configuration](https://docs.python.org/3/library/logging.config.html)
- Stack Overflow
  - [python: complete example of dict for logging.config.dictConfig?](https://stackoverflow.com/questions/7507825/python-complete-example-of-dict-for-logging-config-dictconfig)
  - [What is a correct way to filter different loggers using python logging?](https://stackoverflow.com/questions/17275334/what-is-a-correct-way-to-filter-different-loggers-using-python-logging)
  - [logging - How do I add custom field to Python log format string?](https://stackoverflow.com/questions/17558552/how-do-i-add-custom-field-to-python-log-format-string)
- Tail/Less
  - [Stop using tail -f (mostly)](https://www.brianstorti.com/stop-using-tail/)
  - [View a log file in Linux dynamically](https://stackoverflow.com/questions/2099149/view-a-log-file-in-linux-dynamically)