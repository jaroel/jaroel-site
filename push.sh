#!/bin/sh
docker save jaroelsite:latest | bzip2 | pv | ssh admin@web1.jaroel.nl sudo podman load
