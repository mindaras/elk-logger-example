# elk-logger-example
Elastic logger example.

## To test it

### prerequisites
create a deployment on elastic cloud or custom/local elasticsearch service

### start the Filebeat service
docker run --rm \
--name=filebeat \
--volume="$(pwd)/filebeat.docker.yml:/usr/share/filebeat/filebeat.yml:ro" \
--volume="/var/lib/docker/containers:/var/lib/docker/containers:ro" \
--volume="/var/run/docker.sock:/var/run/docker.sock:ro" \
--mount type=bind,src=$(pwd)/logs,target=/usr/share/filebeat/logs \
docker.elastic.co/beats/filebeat:8.6.1

### start the web server
node webserver.js

### generate log data
node webrequests.js