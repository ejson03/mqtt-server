from dotenv import load_dotenv
load_dotenv()
import os
import eventlet
from flask import Flask, render_template, request, jsonify, redirect, url_for, abort, make_response, copy_current_request_context
from flask_cors import CORS, cross_origin
from flask_socketio import SocketIO, emit
from flask_mqtt import Mqtt
from mongo import insert_one, filter_records
eventlet.monkey_patch()

app = Flask(__name__)
app.config['MQTT_BROKER_URL'] = "worker" #os.environ.get("MQTT_BROKER")
app.config['MQTT_BROKER_PORT'] = int(os.environ.get("PORT"))
app.config['MQTT_REFRESH_TIME'] = 1.0
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={ "/*": {"origins":"*"} })
mqtt = Mqtt(app, True, True)
socketio = SocketIO(app)


@mqtt.on_connect()
def handle_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))
    mqtt.subscribe('/data')

@mqtt.on_message()
def handle_mqtt_message(client, userdata, message):
    print("Received message " + str(message.payload.decode()) )
    #insert_one(message.payload.decode())
    socketio.emit("message", {'data': str(message.payload.decode()) })

@mqtt.on_log()
def handle_logging(client, userdata, level, buf):
    pass

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/report", methods=["GET","POST"])
def report():
    if request.method == "GET":
        return render_template("admin.html")
    else:
        data = filter_records(request.form.get("start"), request.form.get("end"))
        return {"data" : data}

if __name__ == "__main__":
    socketio.run(app, host='0.0.0.0', debug=True)




