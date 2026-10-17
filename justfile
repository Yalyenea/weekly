set shell := ["sh", "-eu", "-c"]

default:
    @just --list

dev port="1313": build
    uv run python -m http.server {{port}} --bind 127.0.0.1 --directory public

build:
    sh themes/yinyang-my-fork/scripts/build.sh
