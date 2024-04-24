import { BrowserRouter,Route,Switch } from "react-router-dom/cjs/react-router-dom.min";
import StorePicker from "./StorePicker";
import App from "./App";
import Notfound from "./Notfound";

const Router = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker}/>
            <Route path="/store/:storeId" component={App}/>
            <Route component={Notfound}/>
        </Switch>
    </BrowserRouter>
)
export default Router