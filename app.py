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
import pyodbc

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
connection = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER=' +
                            server+';DATABASE='+database+';UID='+username+';PWD=' + password + ';Trusted_Connection=no;')
cursor = connection.cursor()

print("connected!")
sql = 'select * from test_table'
cursor.execute(sql)

df = pd.DataFrame.from_records(cursor.fetchall(), columns=[
    col[0] for col in cursor.description])
print(df)


temp = 0.0
humi = 0.0


# @socketio.on('temp')
# def emit_temp(temp, humi):
#     j = json.dumps({'temp': temp, 'humi': humi})
#     print(j, file=sys.stderr)
#     socketio.emit('temp', json.dumps(
#         {'temp': temp, 'humi': humi}))


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
        count = 80 + random.randint(-10, 10)
        temp = request_data['temp']
        humi = request_data['humi']
        pm = request_data['pm']
        emit_count(count)
        emit_temp(temp)
        emit_humi(humi)
        emit_pm(pm)
        now = datetime.datetime.now()

        cursor.execute(
            f'insert into test_table(set_time, people_flow, temp, humidity, air_quality) values ({now}, {count}, {temp}, {humi}, {pm})')

        # emit_humi(humi)
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
