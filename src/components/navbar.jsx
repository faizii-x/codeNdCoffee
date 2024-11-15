import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Example from "./example";

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const [open, setOpen] = useState(false);

  const handleOnClose = () => setOpen(false);

  const [clickForm, setClickForm] = useState(false);
  const handleClick = () => setClickForm(false);

  return (
    <>
      <header className="fixed max-w-full container mx-auto z-30 shadow-lg bg-white p-4">
        <main className="flex justify-between gap-12 ml-4 mr-4">
          <Link to="/">
            <h2 className="font-bold pt-1">MessagesUi</h2>
          </Link>

          <nav className="class-hide-nav">
            <div className="flex justify-center gap-6 ">
              <Link
                to="/"
                className="text-[18px]  font-Roboto text-customBlue-para font-normal "
              >
                {pathname === "/" ? (
                  <span className=" text-blue-600 ">Enquires</span>
                ) : (
                  "Enquires"
                )}
              </Link>

              <Link to="/service" className="text-[18px] font-normal ">
                {pathname === "/service" ? (
                  <span className=" text-blue-600 ">Services</span>
                ) : (
                  "Services"
                )}
              </Link>

              <Link to="/gift" className="text-[18px] font-normal  ">
                {pathname === "/gift" ? (
                  <span className="text-blue-600">Gift Cards</span>
                ) : (
                  "Gift Cards"
                )}
              </Link>

              <Link
                to="/appointment/"
                className="text-[18px] font-normal text-customBlue-para "
              >
                {pathname === "/appointment/" ? (
                  <span className="text-blue-600"> Appointments</span>
                ) : (
                  "Appointments"
                )}
              </Link>
              <Link to="/message/" className="text-[18px] font-normal ">
                {pathname === "/message/" ? (
                  <span className="text-blue-600"> Messages</span>
                ) : (
                  "Messages"
                )}
              </Link>
              <Link to="/product/" className="text-[18px] font-normal ">
                {pathname === "/product/" ? (
                  <span className="text-blue-600"> Product</span>
                ) : (
                  "Product"
                )}
              </Link>
            </div>
          </nav>

          <div className="hidden lg:block self-center">
            <p>JoelEvats</p>
          </div>

          <div className="flex lg:hidden justify-end ">
            <svg
              onClick={() => setOpen(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 rounded-md text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </main>

        <Example
          open={open}
          setOpen={handleOnClose}
          handleClick={handleClick}
        />
      </header>
    </>
  );
}

export default Navbar;
