import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";
import { Suspense} from "react";
import { ToastContainer } from "react-toastify";

const fetchCustomer = async () => {
  const res = await fetch("/customers.json");
  return res.json();
};

function App() {
  const customerPromise = fetchCustomer();
  return (
    <>
      <div className="bg-[#F5F5F5]">
        {/* nav bar */}
        <Navbar></Navbar>
        {/* cards section */}
        <Suspense fallback={<p>loading...</p>}>
          <Cards customerPromise={customerPromise}></Cards>
        </Suspense>
         <ToastContainer></ToastContainer>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
