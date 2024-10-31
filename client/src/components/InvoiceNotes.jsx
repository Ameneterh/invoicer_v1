import React from "react";

export default function InvoiceNotes() {
  return (
    <section className="mb-5 flex flex-col sm:flex-row justify-between p-4 bg-slate-100 rounded max-w-96">
      <ul className="flex-1">
        <li>
          Bank Name: <span className="font-bold">Guaranty Trust Bank</span>
        </li>
        <li>
          Account Name: <span className="font-bold">Abanyi Blessing Erdoo</span>
        </li>
        <li>
          Account Number: <span className="font-bold">0022010398</span>
        </li>
      </ul>

      {/* <div className="flex-1 bg-slate-100">
        <p className="font-bold">Please Note:</p>
        <p className="">Information</p>
      </div> */}
    </section>
  );
}
