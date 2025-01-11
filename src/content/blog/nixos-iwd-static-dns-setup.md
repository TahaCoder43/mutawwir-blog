---
title: Setup static DNS with iwd in Nixos
description: Why your static dns is not working with iwd in Nixos
tags: [Linux,Nixos,iwd,static-dns,networking]
publishDate: 2024-01-11
dificulty: Easy
img:
    path: /blog/banners/nixos-iwd-static-dns-setup.png
    alt: Snowcaps Mountains with milkyway glaxy visible on the sky
practicalSectionId: the-solution
---

## The Problem

If your using iwd standalone (without NetworkManager and dhcpcd) then you might have tried `networking.nameservers = [ "1.1.1.1" ];`, (1.1.1.1 is cloudflare dns server) but this does not work :( 

If you `cat /etc/resolv.conf` then you would see 
```bash
nameserver 1.1.1.1
nameserver {{ some random dns server here }}
```

## The Solution

This is because your resolvconf.service has automatically appended a dynamic dns to `/etc/resolv.conf`. The solution to it is to add to configuration.nix

```nix
networking.wireless.iwd.settings.Network.NameResolvingService="none";
resolvconf.enable=false;
```

it seems like resolvconf is enabled by default when you have a `/etc/resolv.conf`
