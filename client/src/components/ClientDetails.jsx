import React from "react";
import { users } from "../assets/users";

export default function ClientDetails({
  name,
  address,
  phone,
  inv_number,
  inv_date,
  validity,
}) {
  return (
    <section className="my-10 flex items-start justify-between p-4 border-2 rounded">
      {/* client name, address, phone, email */}
      <div>
        <p className="font-bold">Invoiced to:</p>
        <div className="ml-5">
          <h1 className="font-bold uppercase">{name}</h1>
          <p>{address}</p>
          <p>{phone}</p>
        </div>
      </div>

      {/* invoice number, invoice date, due date */}
      <div className="flex flex-col items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold">Inv Number:</span> {users[0].location}/
            {new Date().getFullYear()}/{inv_number}
          </li>
          <li className="p-1 bg-slate-100 py-1 rounded">
            <span className="font-bold">Inv Date:</span> {inv_date}
          </li>
          <li className="p-1">
            <span className="font-bold">Validity:</span> {validity} days
          </li>
        </ul>
      </div>
    </section>
  );
}
