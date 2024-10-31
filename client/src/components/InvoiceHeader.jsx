import React from "react";

export default function InvoiceHeader({ handlePrint }) {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between mb-5 pb-2 border-b">
      <div>
        <h2 className="font-bold uppercase tracking-wide text-4xl mb-3">
          Invoicer
        </h2>
      </div>

      <div>
        <ul className="flex items-center justify-between flex-wrap gap-x-4">
          <li>
            <button
              className="text-xl bg-blue-600 text-white hover:bg-opacity-70 px-8 py-2 rounded-lg"
              onClick={handlePrint}
            >
              Print/Download
            </button>
          </li>
          <li>
            <button className="text-xl bg-green-600 hover:bg-opacity-70 text-white px-5 py-2 rounded-lg border">
              Send
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
