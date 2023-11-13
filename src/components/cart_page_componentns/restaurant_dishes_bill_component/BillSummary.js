const BillSummary = () => {
  return (
    <div className="flex flex-col gap-2 py-4 mr-4  border-b-[2px] border-black ">
      <div>
        <span className="font-semibold text-[1rem]">Bill Details</span>
      </div>
      <div className=" border-b-[1px] border-gray-200 my-1">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Item Total</span>
          <span>Rs. 2113</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Delivery Fee | 2.0 kms</span>
          <span>Rs. 32</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Delivery Tip</span>
          <span>Add tip</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Platform fee</span>
          <span>Rs. 3</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>GST and Restaurant Charges</span>
          <span>Rs. 1442.34</span>
        </div>
      </div>
    </div>
  );
};

export default BillSummary;
