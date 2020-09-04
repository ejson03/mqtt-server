import random
import paho.mqtt.client as paho
import time
import os
from dotenv import load_dotenv
load_dotenv()

MQTT_BROKER = "localhost" or "192.168.99.100"#os.environ.get("MQTT_BROKER")
MQTT_PORT = int(os.environ.get("MQTT_PORT")) or 1883

def on_publish(client, userdata, result):
    print("Device : Data published.")
    pass

print("Publisher is on job....")    

client= paho.Client("admin")
client.on_publish = on_publish
client.connect("192.168.99.100", 1883)

while(True):
    message = str(random.randint(1,100))
    time.sleep(5)
    ret= client.publish("/data", message)

print("Stopped...")