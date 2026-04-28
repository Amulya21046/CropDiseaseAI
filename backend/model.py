import pickle
from sklearn.ensemble import RandomForestClassifier
import numpy as np

# Create dummy training data (5 features)
X = np.random.rand(200, 5)
y = np.random.choice(["Healthy", "Leaf Blight", "Powdery Mildew"], 200)

model = RandomForestClassifier()
model.fit(X, y)

pickle.dump(model, open("model.pkl", "wb"))

print("Model trained")