import RegistrationForm from './components/registration';
import FormikForm from './components/formikForm';
function App() {
  return (
    <div>
      <h1>User Registration</h1>
      <RegistrationForm />
      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;