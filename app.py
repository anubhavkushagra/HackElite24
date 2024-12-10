# from flask import Flask, request, jsonify
# import pandas as pd

# app = Flask(_name_)

# @app.route('/predict', methods=['POST'])
# def predict():
#     # Check if a file is in the request
#     if 'file' not in request.files:
#         return jsonify({"error": "No file provided"}), 400

#     # Read the uploaded CSV file
#     file = request.files['file']
#     data = pd.read_csv(file)

#     # Perform AI processing here
#     response = {
#         "Appliance1": 50.5,  # Example predicted values
#         "Appliance2": 30.0,
#         "Appliance3": 19.5
#     }

#     return jsonify(response)

# if _name_ == '_main_':
#     app.run(host='0.0.0.0', port=5000)