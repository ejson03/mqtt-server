from dotenv import load_dotenv
load_dotenv()

import subprocess
subprocess.run("python publisher.py & python subscriber.py", shell=True)

# from flask import Flask, render_template, request, jsonify, redirect, url_for, abort, session, make_response, flash
# from flask_cors import CORS, cross_origin

# app = Flask(__name__)
# app.config['CORS_HEADERS'] = 'Content-Type'
# cors = CORS(app)

# @app.route('/')
# def index():
#     return render_template('main.html')

# @app.route('/filter')
# def filtering():
#     pass




