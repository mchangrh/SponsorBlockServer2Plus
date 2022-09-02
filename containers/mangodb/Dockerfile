FROM alpine
EXPOSE 27017/tcp
RUN apk add netcat-openbsd
CMD nc -Fk -l 27017 > /dev/null