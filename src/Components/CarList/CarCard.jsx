import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Material UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SettingsIcon from "@mui/icons-material/Settings";
import SellIcon from "@mui/icons-material/Sell";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.scss";
import CryptoJS from "crypto-js";
import getImageByKey from "../../app/home/cars";
import { useTheme } from "@mui/material/styles";

export default function CarCard({ car, booking }) {
  const navigate = useNavigate();
  const secretKeyCripto = "Muhammad";
  const ecryptStorage = (name, data) => {
    const encrypt = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      secretKeyCripto
    ).toString();
    sessionStorage.setItem(name, encrypt);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);

  const handleReservation = (car, booking) => {
    if (car && booking) {
      const data = {
        car,
        booking,
      };
      ecryptStorage("_bghVjkKj", JSON.stringify(data));

      navigate("/booking");
    }
  };
  return (
    <div className="wraper-card" data-aos="zoom-in">
      <Card
        sx={{
          overflow: "visible",
          width: {
            xs: "320px",
            sm: "300px",
            md: "360px",
          },
        }}
        car={car}
      >
        <CardActionArea
          onClick={() => {
            handleReservation(car, booking);
          }}
          className="card-action-area"
        >
          <CardMedia
            component="img"
            className="car-img"
            image={getImageByKey(car.image)}
            alt={`car ${car.brand}`}
            data-aos="flip-left"
          />

          <CardContent>
            <Typography variant="h4" component="p">
              {car.brand} <br /> {car.model}
            </Typography>
            <Typography gutterBottom variant="h6" component="p">
              {car.price}€ /dia
            </Typography>
            <Stack
              spacing={1}
              direction={{ xs: "column", sm: "column", lg: "row" }}
              sx={{ justifyContent: "center" }}
              className="chips"
            >
              <Chip
                icon={<DirectionsCarIcon color="secondary" />}
                label={`Clase: ${car.category}`}
                variant="filled"
                color="primary"
              />
              <Chip
                icon={<SettingsIcon color="secondary" />}
                label={car.gearShiftType}
                variant="filled"
                color="primary"
              />
              <Chip
                icon={<LocalGasStationIcon color="secondary" />}
                label={car.fuelType}
                variant="filled"
                color="primary"
              />
            </Stack>
          </CardContent>
        </CardActionArea>

        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={() => {
              handleReservation(car, booking);
            }}
          >
            Reservar &nbsp;
            <SellIcon color="secondary" />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
