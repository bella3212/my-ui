import time

from flask import Flask

app = Flask(__name__)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/table')
def get_table():
    return {'mdata':
                [{'pk': 1,
                  'name': 'bla',
                  'type': 'moshe'
                  },
                 {'pk': 2,
                  'name': 'bla2',
                  'type': 'moshe2'
                  },
                 ]

            }
