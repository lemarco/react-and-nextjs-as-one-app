FROM oven/bun:slim
WORKDIR /app
RUN mkdir -p ./frontend/apps
RUN mkdir -p ./frontend/libs
RUN mkdir -p ./backend/apps
RUN mkdir -p ./backend/libs
COPY ./frontend/apps/platform/*.json /app/frontend/apps/platform/
COPY ./frontend/apps/platform/*.js /app/frontend/apps/platform/
COPY ./frontend/apps/platform/*.ts /app/frontend/apps/platform/
COPY ./frontend/apps/platform/index.html /app/frontend/apps/platform/
COPY ./package.json /app/
COPY .env /app/.env

RUN bun i 
ENV PUBLIC_FRONTEND_PLATFORM_APP_PORT $PUBLIC_FRONTEND_PLATFORM_APP_PORT

CMD ["bun","--bun", "run", "platform:dev"]
