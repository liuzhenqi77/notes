---
id: deep-learning-misc
title: Deep Learning Misc
sidebar_label: DL Misc
author: Zhen-Qi Liu
authorURL: http://echoliu.me
---

## Monitor memory usage

You can monitor usage of NVIDIA graphic cards by

```bash
watch -n 1 nvidia-smi
```

## View devices

For Tensorflow,

```python
from tensorflow.python.client import device_lib
print(device_lib.list_local_devices())
```

This should output something like

```bash
[name: "/device:CPU:0"
device_type: "CPU"
memory_limit: 268435456
locality {
}
incarnation: 17931212115963290366
, name: "/device:GPU:0"
device_type: "GPU"
memory_limit: 3828678656
locality {
  bus_id: 1
}
incarnation: 17257174845493155419
physical_device_desc: "device: 0, name: GeForce GTX TITAN X, pci bus id: 0000:01:00.0, compute capability: 5.2"
]
```

For Keras,

```python
from keras import backend as K
K.tensorflow_backend._get_available_gpus()
```

This should output something like

```bash
['/job:localhost/replica:0/task:0/device:GPU:0']
```

## Specify the device

```python
import os

os.environ["CUDA_VISIBLE_DEVICES"] = "0"
```

## Enable need-based usage

For Tensorflow,

```python
import tensorflow as tf

gpu_options = tf.GPUOptions(allow_growth=True)
sess = tf.Session(config=tf.ConfigProto(gpu_options=gpu_options))
```

For Keras,

```python
import tensorflow as tf
import keras.backend.tensorflow_backend as KTF

config = tf.ConfigProto()
config.gpu_options.allow_growth=True   #不全部占满显存, 按需分配
sess = tf.Session(config=config)

KTF.set_session(sess)
```
