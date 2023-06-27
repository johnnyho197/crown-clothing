import HomePage from "./routes/homepage/homepage.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import CheckOut from "./routes/check-out/check-out.component";
import { Routes, Route} from "react-router-dom";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<HomePage/>}/>
        <Route path="shop/*" element= {<Shop/>}/>
        <Route path="auth" element= {<Authentication/>}/>
        <Route path="checkout" element={<CheckOut/>}/>
      </Route>     
    </Routes>
  );
}

export default App;
