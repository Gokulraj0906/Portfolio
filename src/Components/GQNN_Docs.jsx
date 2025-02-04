import React from 'react';

const GQNN_docs = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center mb-8">GQNN: Quantum Neural Network for Classification</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Dependencies</h2>
        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600">
          <li><code>GQNN.data.dataset.Data_Read</code>: Contains functions for loading and preprocessing data.</li>
          <li><code>GQNN.models.data_split.DataSplitter</code>: Splits the dataset into training and testing subsets.</li>
          <li><code>GQNN.models.classification_model</code>: Includes various quantum classifier models (e.g., Estimator QNN, Sampler QNN, and Variational QNN).</li>
          <li><code>numpy</code>: A fundamental package for numerical computing in Python.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Step-by-Step Breakdown</h2>

        <h3 className="text-xl font-semibold mt-4">1. Import Required Libraries</h3>
        <pre className="bg-gray-100 p-4 rounded-lg mt-2">
          <code className="text-sm text-gray-800">
            {`from GQNN import Data_Read, DataSplitter, QuantumClassifier_EstimatorQNN_CPU, QuantumClassifier_SamplerQNN_CPU, VariationalQuantumClassifier_CPU `}
          </code>
        </pre>
        <p className="text-gray-600 mt-2">
          This section imports the necessary classes and modules for data handling and model definition.
        </p>

        <h3 className="text-xl font-semibold mt-4">2. Load and Preprocess Data</h3>
        <pre className="bg-gray-100 p-4 rounded-lg mt-2">
          <code className="text-sm text-gray-800">
            {`df = Data_Read.Read_csv(data_dir)  // Read CSV data\n
df_with_encoded_columns = Data_Read.convert_strings_to_numeric()  // Convert categorical strings to numeric\n
scaled_df = Data_Read.Scale_data(method='minmax')  // Scale data`}
          </code>
        </pre>
        <p className="text-gray-600 mt-2">
          This section loads the dataset, converts categorical columns to numeric, and scales the data using Min-Max Scaling.
        </p>

        <h3 className="text-xl font-semibold mt-4">3. Define Features and Target</h3>
        <pre className="bg-gray-100 p-4 rounded-lg mt-2">
          <code className="text-sm text-gray-800">
            {`x = scaled_df.drop('Gender_Male', axis=1)\n
y = scaled_df['Gender_Male'].astype(int)`}
          </code>
        </pre>
        <p className="text-gray-600 mt-2">
          Features are defined by dropping the target column, while the target variable is set to `Gender_Male`.
        </p>

        <h3 className="text-xl font-semibold mt-4">4. Split Data into Training and Testing Sets</h3>
        <pre className="bg-gray-100 p-4 rounded-lg mt-2">
          <code className="text-sm text-gray-800">
            {`split = DataSplitter(x, y, train_size=0.75, shuffle=True, random_state=43)\n
x_train, x_test, y_train, y_test = split.split()`}
          </code>
        </pre>
        <p className="text-gray-600 mt-2">
          The dataset is split into training and testing sets, with 75% used for training and 25% for testing.
        </p>

        <h3 className="text-xl font-semibold mt-4">5. Train Quantum Neural Network Models</h3>

        <h4 className="text-lg font-semibold mt-4">Estimator QNN</h4>
        <pre className="bg-gray-100 p-4 rounded-lg mt-2">
          <code className="text-sm text-gray-800">
            {`model = QuantumClassifier_EstimatorQNN_CPU(num_qubits=4, maxiter=60)\n
model.fit(x_train, y_train)\n
model.print_model()\n
score = model.score(x_test, y_test)`}
          </code>
        </pre>
        <p className="text-gray-600 mt-2">
          This part initializes and trains the Estimator QNN model, printing its parameters and evaluating its accuracy.
        </p>

        <h4 className="text-lg font-semibold mt-4">Sampler QNN</h4>
        <pre className="bg-gray-100 p-4 rounded-lg mt-2">
          <code className="text-sm text-gray-800">
            {`model_1 = QuantumClassifier_SamplerQNN_CPU(num_inputs=4, output_shape=2, ansatz_reps=1, maxiter=35)\n
model_1.fit(x_train, y_train)\n
model_1.print_model()\n
model_1_score = model_1.score(x_test, y_test)`}
          </code>
        </pre>
        <p className="text-gray-600 mt-2">
          The Sampler QNN model is trained and evaluated similarly, providing its accuracy on the test set.
        </p>

        <h4 className="text-lg font-semibold mt-4">Variational QNN</h4>
        <pre className="bg-gray-100 p-4 rounded-lg mt-2">
          <code className="text-sm text-gray-800">
            {`model_2 = VariationalQuantumClassifier_CPU(num_inputs=num_qubits, max_iter=40)\n
model_2.fit(x_train, y_train)\n
model_2.print_model()\n
model_2_score = model_2.score(x_test, y_test)`}
          </code>
        </pre>
        <p className="text-gray-600 mt-2">
          This section trains the Variational QNN model and evaluates its performance.
        </p>

      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Summary of Outputs</h2>
        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600">
          <li>The code prints the scaled data after preprocessing.</li>
          <li>The accuracy of the three models (Estimator QNN, Sampler QNN, and Variational QNN) is evaluated and displayed after training.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Potential Improvements & Extensions</h2>
        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600">
          <li>Hyperparameter Tuning: Adjust number of qubits, iterations, etc., for better performance.</li>
          <li>Data Augmentation: Use additional techniques like noise reduction or feature selection.</li>
          <li>Quantum Hardware: If using quantum hardware, include configurations for the quantum backend.</li>
        </ul>
      </section>
    </div>
  );
}

export default GQNN_docs;
