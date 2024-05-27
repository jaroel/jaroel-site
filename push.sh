#!/bin/sh
docker save jaroelsite:latest | bzip2 | pv | ssh admin@web1.toffe.site sudo podman load
