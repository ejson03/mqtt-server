import random
import paho.mqtt.client as paho
import time
import os
from dotenv import load_dotenv
load_dotenv()

def on_publish(client, userdata, result):
    print("Device : Data published.")
    pass

print("Publisher is on job....")    

client= paho.Client("admin")
client.on_publish = on_publish
client.connect("ejson-mqtt.herokuapp.com")

while(True):
    message = str(random.randint(1,100))
    time.sleep(5)
    ret= client.publish("/data", message)

print("Stopped...")