import logo from './logo.svg';
import './App.css';
import DeleteTable from './components/DeleteTable';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
      <SignUpForm/>
      <DeleteTable/>
    </div>
  );
}

export default App;
