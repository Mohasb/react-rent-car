import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CarList from "../components/carList/CarList";
import { useContext } from "react";
import ContextUser from "../Services/contextUser/ContextUser";

export default function CarListShow() {
  const savedData = JSON.parse(sessionStorage.getItem("data"));
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(sessionStorage.getItem("data"));
    if (!savedData) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <main className="main">
        {savedData && (
          <CarList cars={savedData.cars} booking={savedData.booking} />
        )}
      </main> 
    </>
  );
}
