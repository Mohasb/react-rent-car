import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CarList from "../components/carList/CarList";

export default function CarListShow() {
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(sessionStorage.getItem("data"));
    if (!savedData) {
      navigate("/");
    }
  }, [navigate]);

  const savedData = JSON.parse(sessionStorage.getItem("data"));

  return (
    <>
      <main>
        {savedData && (
          <CarList cars={savedData.cars} booking={savedData.booking} />
        )}
      </main>
    </>
  );
}