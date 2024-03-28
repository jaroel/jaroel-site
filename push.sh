#!/bin/sh
docker save jaroelsite:latest | bzip2 | pv | ssh admin@dfmweb.toffe.site sudo podman load
