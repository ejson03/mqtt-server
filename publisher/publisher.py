import random
import paho.mqtt.client as paho
import time
import os
from dotenv import load_dotenv
load_dotenv()

print("Started mqttt.....")
os.system("/usr/sbin/mosquitto -c /mqtt/config/mosquitto.conf &")


MQTT_BROKER = "localhost"
MQTT_PORT = int(os.environ.get("MQTT_PORT"))

def on_publish(client, userdata, result):
    print("Device : Data published.")
    pass

print("Publisher is on job....")  

client= paho.Client("admin")
client.on_publish = on_publish

while True:
    try:
        client.connect(MQTT_BROKER, MQTT_PORT)
        break
    except: 
        pass

while(True):
    message = str(random.randint(1,100))
    time.sleep(5)
    ret= client.publish("/data", message)

print("Stopped...")