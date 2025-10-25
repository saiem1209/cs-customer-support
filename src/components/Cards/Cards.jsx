import React, { use, useState } from "react";
import Cardsdata from "./Cardsdata";
import Banner from "../Banner/Banner";
import Taskstatus from "./Taskstatus";
import Resolvestatus from "./Resolvestatus";
import { toast } from "react-toastify";

const Cards = ({ customerPromise }) => {
  const data = use(customerPromise);

  const [donee, setdonee] = useState(data);

  const [inprogress, setInprogress] = useState([]);
  const [resolved, setResolved] = useState([]);
  const handleopen = (customerr) => {
    toast("resolved!");
    const newresolved = [...resolved, customerr];
    setResolved(newresolved);

    const remaining = inprogress.filter((item) => item.id !== customerr.id);
    setInprogress(remaining);

    const remainingdone = donee.filter((items) => items.id !== customerr.id);
    setdonee(remainingdone);
  };

  const handleclick = (customerr) => {
    toast("ticket open");
    const isExist = inprogress.find(
      (inprogres) => inprogres.id == customerr.id
    );
    if (isExist) {
      // toast("Already opened!")
      return;
    }
    const newcustomer = [...inprogress, customerr];
    setInprogress(newcustomer);
  };
  return (
    <>
      <Banner
        resolved={resolved.length}
        inprogress={inprogress.length}
      ></Banner>

      <div className="max-w-[1200px] mx-auto p-6 flex-none lg:flex gap-2">
        <div className=" w-full lg:w-9/12">
          <h2 className="font-bold text-2xl text-[#34485A]">Customer Ticket</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4">
            {donee.map((customers) => (
              <Cardsdata
                handleclick={handleclick}
                inprogress={inprogress}
                setInprogress={setInprogress}
                key={customers.id}
                customers={customers}
              ></Cardsdata>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-3/12 lg:ml-4">
          <div>
            <h2 className="font-bold text-2xl text-[#34485A]">Task Status</h2>
            <div className="grid grid-cols-1 gap-2 mt-4">
              {inprogress.length > 0 ? (
                inprogress.map((inpro) => (
                  <Taskstatus
                    handleopen={handleopen}
                    key={inpro.id}
                    inpro={inpro}
                  ></Taskstatus>
                ))
              ) : (
                <p className=" p-4 text-center text-sm text-gray-500 border border-dashed border-gray-300 rounded-lg bg-white">
                  Select a ticket to add to Task Status
                </p>
              )}
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl text-[#34485A]">Resolved Task</h2>
            <div className="grid grid-cols-1 gap-2 mt-4">
              {resolved.length > 0 ? (
                resolved.map((resolve) => (
                  <Resolvestatus
                    key={resolve.id}
                    resolve={resolve}
                  ></Resolvestatus>
                ))
              ) : (
                <p className="p-4 text-center text-sm text-gray-500 border border-dashed border-gray-300 rounded-lg bg-white">
                  No resolved tasks yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
