FROM oven/bun:slim
WORKDIR /app


RUN mkdir -p ./frontend/apps
RUN mkdir -p ./frontend/libs
RUN mkdir -p ./backend/apps
RUN mkdir -p ./backend/libs


COPY ./frontend/apps/blog/*.json /app/frontend/apps/blog/
COPY ./frontend/apps/blog/*.mjs /app/frontend/apps/blog/
COPY ./frontend/apps/blog/*.js /app/frontend/apps/blog/
COPY ./frontend/apps/blog/*.ts /app/frontend/apps/blog/
COPY ./package.json /app/
COPY .env /app/.env

RUN bun i 
ENV PUBLIC_FRONTEND_BLOG_APP_PORT $PUBLIC_FRONTEND_BLOG_APP_PORT

CMD ["bun", "run", "blog:dev"]


