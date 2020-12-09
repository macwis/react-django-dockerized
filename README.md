# react-django-dockerized

This is a basic boilerplate to get a quickly running React and Django in Docker.

This build consists of:

- React-scripts based React project in `frontend` folder with installed Semantic UI React lib
- Clean Django project in `backend` folder
- nginx server to handle port routing, so that there is a single entry-point

## Goal

The goal of this boilerplate was to pack full-stack
development environment into Docker Compose setup, 
so that developer has a hot reload single entry point
with front-end in React and Django as an API.

## Run

1. Clone the repo.

2. Rename `.env-example` to `.env.dev` and modify if needed.

3. Hit:

```
$ docker-compose up
```

4. Access the complete run: http://localhost:8080


## Workflow

Once you have it all running you can start editing your components in `.js` or modify Django project.

In case you need real-time logs you can can run compose in non-interactive mode and then watch the logs directly from the running containers.


## Containers, Services and Ports

Below is a summary of what is where in case you need to access each part separately:

| Container  | Service | Docker Port | Host Port |
| ---------- | ------- | ----------- | --------- |
| dev-django | django  | 8000        | 8001      |
| dev-react  | react   | 3000        | 3001      |
| dev-db     | db      | 5432        | 5432      |
| dev-nginx  | nginx   | 80          | 8080      |
