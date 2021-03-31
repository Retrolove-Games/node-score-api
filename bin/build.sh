#!/bin/bash
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "${parent_path}/.."

if [ -d "data" ] 
then
    sudo chown -R ${USER:=$(/usr/bin/id -run)}:${GROUP:=$(/usr/bin/id -gn)} data
fi

docker-compose up -d --build
