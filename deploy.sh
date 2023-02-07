#!/bin/bash

docker build . -t clonecoding
docker stop clonecoding
docker rm clonecoding
docker run --name clonecoding -p 8888:3000 -d clonecoding