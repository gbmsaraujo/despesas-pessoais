import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
  useParams
} from "react-router-dom";
import Despesas from "./Pages/Despesas";

export default function Routes() {

	return (
		<Router>
			<Switch>
				<Route path='/despesas'>
					<Despesas></Despesas>
				</Route>
				<Redirect to={{pathname:'/despesas'}} />
			</Switch>

		</Router>
	);
}
