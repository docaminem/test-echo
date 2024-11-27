import React from 'react';
import { Layout } from './components/layout/Layout';
import { PatientForm } from './components/patient/PatientForm';
import { EvaluationValvulaire } from './components/EvaluationValvulaire';

function App() {
  return (
    <Layout>
      <div className="space-y-8">
        <PatientForm onSubmit={console.log} />
        <EvaluationValvulaire />
      </div>
    </Layout>
  );
}

export default App;