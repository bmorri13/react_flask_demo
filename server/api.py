from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/')
def hello_world():
    return 'Hello, World!'



@app.route('/api/users', methods=['GET'])
def users():
    return jsonify(
        {
            'users': [
                'bob',
                'alice',
                'joe'
            ]
        }
    )


@app.route('/api/v2/users', methods=['GET'])
def users_info():
    return jsonify(
        {
            'users': [
                {'id': 0, 'name':'bob', 'income': "25400", "city": "New York"},
                {'id': 1, 'name':'alice', 'income': "55400", "city": "Salt Lake City"},
                {'id': 2, 'name':'joe', 'income': "73244", "city": "Vegas"}
            ]
        }
    )

@app.route('/api/v3/users', methods=['GET'])
def users_info_filter():
    name_filter = request.args.get('name')

    users = [
        {'id': 0, 'name': 'bob', 'income': "25400", "city": "New York"},
        {'id': 1, 'name': 'alice', 'income': "55400", "city": "Salt Lake City"},
        {'id': 2, 'name': 'joe', 'income': "73244", "city": "Vegas"}
    ]

    if name_filter:
        filtered_users = [user for user in users if name_filter.lower() in user['name'].lower()]
    else:
        filtered_users = users

    return jsonify({'users': filtered_users})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
