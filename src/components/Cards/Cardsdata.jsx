
import { Dot, Calendar } from "lucide-react";
const Cardsdata = ({customers,handleclick}) => {
    const customerr = customers;

    
  return (
    <div className="bg-white rounded-lg shadow-sm p-4" onClick={()=>handleclick(customerr)}>
      <div className="flex justify-between ">
        <h2 className="font-semibold">{customerr.title}</h2>
        <button
          className={`text-sm  text-[#0B5E06] font-medium px-2 rounded-xl 
             inline-flex items-center space-x-0.5 ${customerr.status==="Open"?"bg-[#B9F8CF]":"bg-amber-300"}`

          }
        >
          <Dot className="w-4 h-4 fill-current" />
          <span>{customerr.status}</span>
        </button>
      </div>
      <p className="text-[#627382] mt-1.5">
        {customerr.description}
      </p>
      <div className="flex justify-between mt-1.5">
        <p className="text-[#627382]">{customerr.id}</p>
        <p className="text-red-500 ">{customerr.priority}</p>
        <p className="text-[#627382]">{customerr.customer}</p>
        <p className="text-[#627382] inline-flex items-center space-x-1">
          <Calendar />
          <span>{customerr.createdAt}</span>
        </p>
      </div>
    </div>
  );
};

export default Cardsdata;
