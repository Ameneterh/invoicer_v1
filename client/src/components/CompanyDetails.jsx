import React from "react";

export default function CompanyDetails() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-b-gray-300 text-center uppercase tracking-wide py-1">
        graphics | printing | web design/hosting | consultanccy
      </div>
      <div className="flex justify-between mt-3">
        <img src="invoice_header.png" className="w-96 h-20" />
        <div className="hidden sm:flex w-1/2 gap-x-3">
          <p className="font-bold flex-1">
            Corporate Office:{" "}
            <span className="block font-normal">
              25 Liberty Street, Gonin-Gora, Kaduna South, Kaduna State, Nigeria
            </span>
          </p>
          <p className="font-bold flex-1">
            Locations:
            <span className="block font-normal">
              Ado-Ekiti | Gboko | Makurdi
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
