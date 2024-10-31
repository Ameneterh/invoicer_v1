import React from "react";
import { users } from "../assets/users";

export default function InvoiceFooter({ name, signature, email, phone }) {
  return (
    <footer className="flex gap-x-4 border-t-2 pt-3 justify-between">
      <div>
        <p>Invoice prepared by:</p>
        <ul className="">
          <li>
            <img src={users[0].signature} className="h-16" />
          </li>
          <li className="font-bold">@{users[0].username}</li>
          <li>{users[0].email}</li>
          <li>{users[0].phone}</li>
        </ul>
      </div>
      <div className="flex flex-col mt-5 px-3 py-2 rounded-md w-96 gap-y-8">
        <div className="flex gap-x-1">
          <p>Received by:</p>
          <p className="flex-1 border-b-2"></p>
        </div>
        <div className="flex gap-x-1">
          <p>Date:</p>
          <p className="flex-1 border-b-2"></p>
        </div>
      </div>
    </footer>
  );
}
