---
id: docker-basics
title: Docker Basics
sidebar_label: Docker
author: Zhen-Qi Liu
authorURL: http://echoliu.me
---

```bash
docker image list --all
docker container list --all

docker rmi [image]
docker rm [container]

docker image prune
docker container prune

docker system df

docker run -it 

docker build -t [tag] -f [dockerfile] .

docker run busybox nslookup google.com

nvidia-docker run -it -p 8888:8888 --ipc=host ufoym/deepo:all-jupyter-py36 jupyter notebook --no-browser --ip=0.0.0.0 --allow-root --NotebookApp.token= --notebook-dir='/root'

nvidia-docker run -it -p 8889:8888 -v ~/Documents/docker-sharedfolder:/root --ipc=host ufoym/deepo:all-py36-jupyter jupyter notebook --no-browser --ip=0.0.0.0 --allow-root --notebook-dir='/root'

sudo vi /etc/docker/daemon.json

sudo systemctl daemon-reload
sudo service docker restart

```