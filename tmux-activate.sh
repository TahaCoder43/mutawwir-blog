#!/usr/bin/env sh

tmux send-keys "nvim" C-m
tmux split-window -h
tmux send-keys "npm run dev" C-m
tmux split-window -v
tmux new-window -d


