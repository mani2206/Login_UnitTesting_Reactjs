// import Contact from "./components/layerComponents/Contact";
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Header from "./components/layerComponents/HeaderLayouts";
// import Booking from "./components/layerComponents/SectionLayouts";
// import Sign from "./components/layerComponents/Sign";
// import { CustomerAdd } from "./components/pageComponents/CustomerAdd";
// import { Provider } from "react-redux";
// import { store } from "./Redux/store";
// import { CustomerView } from "./components/pageComponents/CustomerView";
import Login from "./components/pageComponents/Login";
function App() {
  return (
    <div className="app text-center">
      {/* <BrowserRouter>
         <Routes>
             <Route exact path="/" element={<Booking/>}/>
             <Route path="/header" element={<Header/>}/>
             <Route path="/contact" element={<Contact
              title ="Contact us"
             />}/>
             <Route path="/sign" element={<Sign/>}/>             
         </Routes>
         </BrowserRouter>
        */}
      {/* <Provider store={store}>
        <h1>React Redux Customer </h1>
        <CustomerAdd />
        <CustomerView />
      </Provider> */}
      <Login />
    </div>
  );
}

export default App;
