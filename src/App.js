import './App.scss';
import { BrowserRouter } from "react-router-dom";
import AuthRoutes from './routes/AuthRoutes';
import AdminRoutes from './routes/AdminRoutes';
import OperatorRoutes from './routes/OperatorRoutes';


function App() {
	return (
		<BrowserRouter>
			<AuthRoutes />
			<AdminRoutes />
			<OperatorRoutes />
		</BrowserRouter>
  );
}

export default App;
