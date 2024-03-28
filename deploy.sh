#!/bin/sh
./build.sh
./push.sh
ssh admin@dfmweb.toffe.site sudo podman restart jaroelsite nginx
