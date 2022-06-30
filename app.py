import sys
import time
import threading
import random
from flask import Flask, Blueprint, request, abort, render_template, jsonify
from flask_socketio import SocketIO, emit

import json
from views.status.status import app_status
from views.info.info import app_info

'''
TODO    
    - babylon.js nullengine
    - babylon.js load obj n mtl
    - websocket
    - oracle cloud
    - frontend ui
'''
# count = 80

app = Flask(__name__)
app.register_blueprint(app_status)
app.register_blueprint(app_info)

blueprint = Blueprint('blueprint', __name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)


# @app.route("")
# @app.route('')
# def get_court():


# @app.route('/count', methods=['GET'])
# def get_count():
#     return jsonify({
#         'count': count
#     })


# @app.route("/count", methods=['GET'])

# @socketio.on('send')
# def upload():
#     if not request.json:
#         abort(400)

#     d = request.json.get("data", 0)
#     print("receive data:{}".format(d))


#     socketio.emit('status_response', {'count': count})
#     return jsonify(
#         {"response": "ok"}
#     )

@socketio.on('count')
def emit_count(count):
    socketio.emit('count', count)


@app.route("/")
def home():
    return render_template('index.html')
    # return render_template('static/index.html', async_mode=socketio.async_mode)


@app.route("/babylon_render.js")
def babylon_render():
    return render_template('babylon_render.js')


def counting():
    while True:
        count = 80 + random.randint(-10, 10)
        time.sleep(5)
        print(count, file=sys.stderr)
        emit_count(count)


count_thread = threading.Thread(target=counting)
count_thread.start()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5566")
    # socketio.run(app)
