#!/usr/bin/env bash

cp /vagrant/_build/sources.list /etc/apt/sources.list.d/
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys A6D3315B

apt-get update
apt-get install -y apache2 couchdb curl
rm -rf /var/www
ln -fs /vagrant /var/www
cp /vagrant/_build/couchdb/local.ini /etc/couchdb/

service couchdb restart

while ! nc -z localhost 5984; do sleep 1; done
curl -s -X PUT http://localhost:5984/cars
curl -s -X PUT http://localhost:5984/todos
