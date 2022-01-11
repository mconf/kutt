DOCKER_USERNAME?=mconf
REPOSITORY?=kutt
IMAGE_NAME=$(DOCKER_USERNAME)/$(REPOSITORY)
REVISION?=$(shell git rev-parse --short HEAD)

up-dev:
	docker-compose -f dev.yml up

up:
	docker-compose up

docker-build-dev:
	docker build --rm -f Dockerfile.dev -t $(IMAGE_NAME):dev-latest --build-arg git_token=$(GIT_TOKEN) .