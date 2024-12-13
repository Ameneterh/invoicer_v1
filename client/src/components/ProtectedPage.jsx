import { message } from "antd";
import React, { useEffect, useState } from "react";
import { GetLoggedBusiness } from "../apiCalls/business";
import { useNavigate } from "react-router-dom";

export default function ProtectedPage({ children }) {
  const [business, setBusiness] = useState(null);
  const navigate = useNavigate();

  const validToken = async () => {
    try {
      const response = await GetLoggedBusiness();
      if (response.success) {
        setBusiness(response.data);
      } else {
        navigate("/login");
        message.error(response.message);
      }
    } catch (error) {
      navigate("/login");
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validToken();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      {business && (
        <div className="p-5">
          {business.business_name}
          {children}
        </div>
      )}
    </div>
  );
}
