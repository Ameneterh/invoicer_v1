import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineDelete, MdEditDocument } from "react-icons/md";

export default function TableForm({
  jobTitle,
  setJobTitle,
  jobDescription,
  setJobDescription,
  information,
  quantity,
  setQuantity,
  rate,
  setRate,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) {
  const [isEditing, setIsEditing] = useState(false);

  // calculate amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * rate);
    };

    calculateAmount(amount);
  }, [quantity, rate, amount, setAmount]);

  //   calculate total amount of items in the invoice
  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  });

  //   submit table
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobTitle || !jobDescription || !quantity || !rate) {
      alert("Please, fill all fields");
    } else {
      const newItem = {
        id: uuidv4(),
        jobTitle,
        jobDescription,
        quantity,
        rate,
        amount,
      };

      setJobTitle("");
      setJobDescription("");
      setQuantity("");
      setRate("");
      setAmount("");

      setList([...list, newItem]);
      setIsEditing(false);
    }
  };

  // Edit Function
  const editItem = (id) => {
    const editingItem = list.find((item) => item.id === id);
    setList(list.filter((item) => item.id !== id));
    setIsEditing(true);
    setJobTitle(editingItem.jobTitle);
    setJobDescription(editingItem.jobDescription);
    setQuantity(editingItem.quantity);
    setRate(editingItem.rate);
    setAmount(editingItem.amount);
  };

  // Delete FUnction
  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="mt-5 mb-10">
      <h1 className="mb-5 text-xl font-bold">Enter Job Details</h1>

      <form onSubmit={handleSubmit}>
        <div className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label htmlFor="job_title" className="font-bold">
              Job Title
            </label>
            <input
              type="text"
              name="job_title"
              id="job_title"
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="job_description" className="font-bold">
              Job Description
            </label>
            <input
              type="text"
              name="job_description"
              id="job_description"
              placeholder="Job Description"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="md:grid grid-cols-3 gap-10 mt-6">
          <div className="flex flex-col">
            <label htmlFor="quantity" className="font-bold">
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rate" className="font-bold">
              Rate
            </label>
            <input
              type="text"
              name="rate"
              id="rate"
              placeholder="Rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount" className="font-bold">
              Amount
            </label>
            <p className="font-bold flex flex-1 items-center bg-[#f1f1f1] px-3 py-4 md:py-0 rounded">
              {amount.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 transition-all duration-300 mt-6 mb-10"
        >
          {isEditing ? "Add Edited Item" : "Add New Invoice Item"}
        </button>
      </form>

      {/* show table items */}
      <div className="flex flex-col gap-y-3 p-5 border-2 rounded">
        <h1 className="mb-1 text-xl font-bold">Added Items</h1>
        <table width="100%">
          <thead>
            <tr className="bg-gray-100 h-10">
              <td className="font-bold">S/N</td>
              <td className="font-bold">Item Description</td>
              <td className="font-bold">Qty</td>
              <td className="font-bold">Rate</td>
              <td className="font-bold">Amount</td>
              <td className="font-bold">Actions</td>
            </tr>
          </thead>
          {list.map(
            (
              { id, jobTitle, jobDescription, quantity, rate, amount },
              index
            ) => (
              <React.Fragment key={id}>
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <p className="font-bold">
                        {jobTitle}
                        <span className="block font-normal">
                          {jobDescription}
                        </span>
                      </p>
                    </td>
                    <td>{quantity}</td>
                    <td>{rate}</td>
                    <td className="amount">{amount}</td>
                    <td className="">
                      <button onClick={() => deleteItem(id)}>
                        <MdOutlineDelete className="text-2xl text-red-600 hover:scale-150 transition-all duration-300" />
                      </button>
                      <button onClick={() => editItem(id)}>
                        <MdEditDocument className="text-2xl text-green-600 hover:scale-150 transition-all duration-300 ml-6" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            )
          )}
        </table>
        <div>
          Gross Total:{" "}
          {total.toLocaleString("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </div>
      </div>
    </div>
  );
}
