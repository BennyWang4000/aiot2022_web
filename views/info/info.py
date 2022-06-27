from flask import Blueprint

app_info = Blueprint('app_info', __name__)


@app_info.route('/info')
def show():
    return 'info'
