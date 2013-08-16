#!/usr/bin/env bash

cp /vagrant/_build/sources.list /etc/apt/sources.list.d/
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys A6D3315B

apt-get update
apt-get install -y apache2 couchdb
rm -rf /var/www
ln -fs /vagrant /var/www
cp /vagrant/_build/couchdb/local.ini /etc/couchdb/
service couchdb restart
