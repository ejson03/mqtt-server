import paho.mqtt.client as mqtt
from dotenv import load_dotenv
import os
load_dotenv()
from mongo import insert_one


MQTT_BROKER = os.environ.get("MQTT_BROKER")
MQTT_PORT = int(os.environ.get("MQTT_PORT"))
timelive=60

def on_connect(client, userdata, flags, rc):
  print("Connected with result code " + str(rc))
  client.subscribe("/data")

def on_disconnect(client, userdata, rc):
  if rc != 0:
    print("Unexpected disconnection.")

def on_message(client, userdata, msg):
  print("Received message '" + str(msg.payload) + "' on topic '"
        + msg.topic + "' with QoS " + str(msg.qos))
  status = insert_one(msg.payload.decode('utf-8'))

print("Subscriber is on job....")    
client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect(MQTT_BROKER, MQTT_PORT, timelive)
client.loop_forever()