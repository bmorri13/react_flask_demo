from flask import Flask, jsonify
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

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
