import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load dataset
data = pd.read_csv("sensor_data.csv")

# Features and target
X = data[["Light1", "Light2", "Fan", "Temp", "Presence"]]
y = data["Action"]

# Train the model
model = RandomForestClassifier()
model.fit(X, y)

# Save the trained model
joblib.dump(model, "energy_saving_model.pkl")
print("Model trained and saved as energy_saving_model.pkl")
