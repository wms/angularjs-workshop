# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "precise32"
  config.vm.provision :shell, :path => "_build/provision.sh"
  config.vm.network :forwarded_port, host: 8080, guest: 80
end
