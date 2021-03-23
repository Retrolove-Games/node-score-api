#!/bin/sh
cd ..
sudo chown -R ${USER:=$(/usr/bin/id -run)}:users data
/usr/bin/docker-compose up -d --build
