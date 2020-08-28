# Save this script to runner.sh

#!/bin/bash

for i in `seq 1 100`;
do
echo "spin: ${i}"

docker run --name canary --rm -i \
-e SPEC=smoke.js \
-e AT_DRIVER_HOST_NAME=selen \
-e PERFORMANCE_ENTRIES_INTERCEPT=allow \
-e ELASTIC_CLUSTER=http://elasticsearch:9200 \
--net canary \
-v $(pwd):/tmp/canary-tests \
rdpanek/canarytrace:c.2.12.1
done
# In some cases when you are not using TTY replace **-i** to **ti** in first line like **docker run --name canary --rm -ti \**
