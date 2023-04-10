FROM mongo
COPY ./init.js /docker-entrypoint-initdb.d
COPY ./keyfile.key /data
RUN chmod 400 /data/keyfile.key
RUN chown 999:999 /data/keyfile.key
EXPOSE 27017
ENV MONGO_INITDB_DATABASE=qatar-2022
CMD ["mongod", "--auth", "--replSet", "rs0", "--keyFile", "/data/keyfile.key" ]

