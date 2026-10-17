set shell := ["sh", "-eu", "-c"]

default:
    @just --list

dev: build
    uv run python -m http.server 1313 --bind 127.0.0.1 --directory public

build:
    hugo --cleanDestinationDir --minify
    npx -y pagefind@1.5.2 --site public
