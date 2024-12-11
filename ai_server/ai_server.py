# from flask import Flask, request, jsonify
# import torch
# import joblib

# app = Flask(__name__)

# # Load your pre-trained model (example: Random Forest or Neural Network)
# model = joblib.load("energy_saving_model.pkl")  # Replace with your model file

# @app.route('/ai/predict', methods=['POST'])
# def predict():
#     try:
#         data = request.get_json()

#         # Extract features
#         features = [
#             data["light1_current_consumption_value"],
#             data["light2_current_consumption_value"],
#             data["fan_current_consumption_value"],
#             data["temperature"],
#             1 if data["human_presence"] else 0
#         ]

#         # Predict suggestions (replace model.predict() with your model's function)
#         prediction = model.predict([features])

#         # Generate a suggestion based on prediction
#         suggestions = {
#             0: "Turn off the lights. No human presence detected.",
#             1: "Turn off the fan, it's already cold.",
#             2: "All appliances are operating optimally."
#         }

#         return jsonify({
#             "suggestion": suggestions.get(prediction[0], "No suggestion available.")
#         })

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)



from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load("energy_saving_model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json  # Get JSON data from the request
    try:
        # Extract features from the request
        features = [[
            data["Light1"],
            data["Light2"],
            data["Fan"],
            data["Temp"],
            data["Presence"]
        ]]

        # Make prediction
        prediction = model.predict(features)
        return jsonify({"suggestion": prediction[0]})

    except KeyError as e:
        return jsonify({"error": f"Missing key: {str(e)}"}), 400

if __name__ == "__main__":
    app.run(port=5000)
