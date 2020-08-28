# Save this script to runner.sh

#!/bin/bash

docker run --name canary --rm -i \
-e SPEC=smoke.js \
-e AT_DRIVER_HOST_NAME=selen \
--net canary \
-v C:/projects/wdio-demo:/tmp/canary-tests \
rdpanek/canarytrace-developer:latest
# In some cases when you are not using TTY replace **-i** to **ti** in first line like **docker run --name canary --rm -ti \**