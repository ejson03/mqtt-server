#!/bin/sh

python3 -u /app/publisher.py;

/usr/sbin/mosquitto -c /mqtt/config/mosquitto.conf ;


