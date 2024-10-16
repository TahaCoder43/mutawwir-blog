---
title: Alpine Linux Installation
description: Alpine is a minimal, secure linux distro. Here's how to install it.
tags: [Linux,Alpine,Open-Rc,Musl-C]
publishDate: 2024-10-08
dificulty: Normal
img:
    path: /blog/banners/SnowycapsMilkyway.jpg
    alt: Snowcaps Mountains with milkyway glaxy visible on the sky
practicalSectionId: installation
---

## Introduction

As a runner of a potato (very slow) laptop, the KDE NEON operating system with the KDE Plasma desktop environment just was not cutting it.

Later on I got to try docker for a project, and during it I learnt about alpine linux, its minimalism and its security. So I decided to give it a try, but there was still one problem that is, it is really easy to bloat up a minimalist operating system, and a desktop environment would defeat the entire purpose of having a minimal running linux machine

So I decided to ditch DE (Desktop Environments) and switch to a standalone WM (Window Manager), but... which WM do I choose from the list of 30 something!? As a fan of wayland (the 3 finger touchpad swipe is slick) I saw with mainly SwayWM and HyperLand on the front. As I was in need of a fast and efficient to use linux machine, I went with SwayWM. You can [read about my SwayWM experience](https://example.com)

## Journey

I researched about alpine-linux, and it is more well established to run on Desktop then people anticipated. The terminal installation was kinda scary as I have never gone through one, but it was quite smooth

## Installation

1. Go to [the official alpine downloads page](https://www.alpinelinux.org/downloads/) and download alpine linux standard
2. Flash the alpine linux image on a USB Drive (If you don't know how to do this, then you should probably not use alpine, and instead start with an easier linux distro)

Now comes the terminal

1. Boot up your USB, and run `setup-alpine` {/* Confirm if this worked */}
2. [Include steps here on how to enter each of the information]

And now your Alpine is installed to hard drive. What's Next? Installing the Desktop Environment / Window Manager

1. Run `setup-desktop --help` and you'll get 5 desktops that you can setup that are gnome, plasma, xfce, mate and sway. I went with sway
2. Now you will have to install video Drives using [input video driver installation instructions]

And now run `sway`, and you got sway running on alpine. Now copy over your configuration if you have it, if you don't, then [read this guide on setting up SwayWM](https://example.com)

[Also add how to install bash, and coreutils and other basic stuff]

[discuss problems a person will face, and link your articles solving them]
