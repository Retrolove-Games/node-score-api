parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "${parent_path}/.."

if [ -d "data" ] 
then
    sudo rm -rf data
fi
