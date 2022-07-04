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
import pymssql

from views.status.status import app_status
from views.info.info import app_info


app = Flask(__name__)
app.register_blueprint(app_status)
app.register_blueprint(app_info)

blueprint = Blueprint('blueprint', __name__)
app.config['SECRET_KEY'] = 'nutcadmin5566'
socketio = SocketIO(app)


print('connecting...')
conn = pymssql.connect(
    host='localhost',
		# localhost:3306
    user='root',
    password='050610AIoT',
    database='test_database',
    charset='big5'
)
cursor = conn.cursor(as_dict=True)
print('connected!')

temp = 0.0
humi = 0.0

@socketio.on('temp')
def emit_temp(temp, humi):
    j = json.dumps({'temp': temp, 'humi': humi})
    print(j, file=sys.stderr)
    socketio.emit('temp', json.dumps(
        {'temp': temp, 'humi': humi}))


# @socketio.on('humi')
# def emit_humi(humi):
#     socketio.emit('humi', humi)


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
        emit_temp(temp, humi)
        now= datetime.datetime.now()

        cusor.execute(f'insert into test_table(set_time, people_flow, temp, humidity, air_quality) values ({now}, {count}, {temp}, {humi}, -1)')

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
#         print(count, file=sys.stderr)
#         emit_count(count)
#         # emit_humi(humi)
#         # emit_temp(30, 50)


# count_thread = threading.Thread(target=counting)
# count_thread.start()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5566")
    # socketio.run(app)
