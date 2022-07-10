'''iptables
iptables -I INPUT -j ACCEPT
'''
import sys
import time
import threading
import random
from flask import Flask, Blueprint, request, abort, render_template, jsonify, flash
from flask_socketio import SocketIO, emit
import json

import datetime
import pandas as pd
import mysql.connector

from views.status.status import app_status
from views.info.info import app_info


app = Flask(__name__)
app.register_blueprint(app_status)
app.register_blueprint(app_info)

blueprint = Blueprint('blueprint', __name__)
app.config['SECRET_KEY'] = 'nutcadmin5566'
socketio = SocketIO(app)


server = 'localhost'
database = 'test_database'
username = 'root'
password = '050610AIoT'

print("connecting.......")
connection = mysql.connector.connect(
    host=server,
    database=database,
    user=username,
    password=password)
cursor = connection.cursor()
print("connected!")


temp = 0.0
humi = 0.0


# @socketio.on('temp')
# def emit_temp(temp, humi):
#     j = json.dumps({'temp': temp, 'humi': humi})
#     print(j, file=sys.stderr)
#     socketio.emit('temp', json.dumps(
#         {'temp': temp, 'humi': humi}))
@socketio.on('all')
def emit_all(count, temp, humi, pm):
    socketio.emit('all', json.dumps({
        'count': count,
        'temp': temp,
        'humi': humi,
        'pm': pm
    }))


@socketio.on('temp')
def emit_temp(temp):
    socketio.emit('temp', temp)


@socketio.on('humi')
def emit_humi(humi):
    socketio.emit('humi', humi)


@socketio.on('pm')
def emit_pm(pm):
    socketio.emit('pm', pm)


@socketio.on('count')
def emit_count(count):
    socketio.emit('count', count)


@app.route("/", methods=['POST'])
def setTempHumi():
    request_data = request.get_json()
    if request_data['password'] == 'nutcadmin5566':
        count = request_data['count']
        temp = request_data['temp']
        humi = request_data['humi']
        pm = request_data['pm']
        emit_all(count, temp, humi, pm)
        now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(now)
        sql = 'insert into Stadium(set_time, people_flow, temp, humidity, air_quality) values (%s, %s, %s, %s, %s)'
        sql = sql.replace("'", '')
        cursor.execute(
            'insert into Stadium(set_time, people_flow, temp, humidity, air_quality) values (%s, %s, %s, %s, %s)', (now, count, temp, humi, pm))
        connection.commit()

        # cursor.execute(f'select * from Stadium')
        # print(cursor.fetchall())

        return jsonify({'code': 200})
    else:
        return jsonify({'code': 400})


@app.route("/")
def home():
    return render_template('index.html')
    # return render_template('static/index.html', async_mode=socketio.async_mode)


# def counting():
#     while True:
#         time.sleep(5)
#         count = 80 + random.randint(-10, 10)
#         temp = 80 + random.randint(-10, 10)
#         humi = 80 + random.randint(-10, 10)
#         print(count, temp, humi, file=sys.stderr)
#         emit_count(count)
#         emit_humi(humi)
#         emit_temp(temp)


# count_thread = threading.Thread(target=counting)
# count_thread.start()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5566")
    # socketio.run(app)
