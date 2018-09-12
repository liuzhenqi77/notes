---
id: docker-basics
title: Docker Basics
sidebar_label: Docker
author: Zhen-Qi Liu
authorURL: http://echoliu.me
---

```bash
# I_NAME for image name
# C_NAME for container name

docker image list --all
docker container list --all
docker run -it I_NAME
docker start C_NAME
docker exec -it C_NAME bash
docker rm C_NAME

```