import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Landing from "./pages/landing";
import Service from "./pages/service";
import Gift from "./pages/gift";
import Appointment from "./pages/appointment";
import Message from "./pages/message";
import Product from "./pages/product";

const PrimaryRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="service" element={<Service />} />
          <Route path="gift" element={<Gift />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="message" element={<Message />} />
          <Route path="product" element={<Product />} />
        
        </Route>
      </Routes>
    </>
  );
};

export default PrimaryRoutes;
