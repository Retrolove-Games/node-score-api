#!/bin/sh
cd ..
if [ -d "data" ] 
then
    sudo chown -R ${USER:=$(/usr/bin/id -run)}:${GROUP:=$(/usr/bin/id -gn)} data
fi
docker-compose up -d --build
