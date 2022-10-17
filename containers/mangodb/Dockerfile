FROM alpine:3
EXPOSE 27017/tcp
RUN apk add --no-cache netcat-openbsd
CMD nc -Fk -l 27017 > /dev/null