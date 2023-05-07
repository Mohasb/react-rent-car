//Material UI imports
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { /*  Button, */ CardActionArea, CardActions } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SettingsIcon from "@mui/icons-material/Settings";
//import SellIcon from "@mui/icons-material/Sell";
import CardHeader from "@mui/material/CardHeader";
//import { ReservationCar } from "../../Services/ReservationCarService";
//import { useNavigate } from "react-router-dom";
import { CheckboxToggle } from "react-rainbow-components";
import { CounterInput } from "react-rainbow-components";
import { themeRainbow } from "./Theme/ThemeRainbow";
import { Application } from "react-rainbow-components";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import _ from "lodash";

export default function ConfirmationCard({ car, booking }) {
  //const navigate = useNavigate();

  /* const handleReservation = (car, booking) => {
    if (car && booking) {
      const data = {
        car, booking
      }
      sessionStorage.setItem('booking', JSON.stringify(data))

      navigate("/booking");


      //ReservationCar(car, booking);
    }
  }; */
  const [carCopy] = useState({ ...car });
  const priceIsOuterJourney = 54;
  const priceIsGps = 20;
  const priceChildSeats = 30;
  const priceExtraDrivers = 50;
  const priceDay = 60;
  const [childSeats, setChildSeats] = useState(0);
  const [drivers, setDrivers] = useState(0);
  const [extras, setExtras] = useState({
    isOuterJourney: false,
    isGps: false,
    childSeats: 0,
    drivers: 0,
  });
  const days = () => {
    const start = new Date(booking.bookingDates.startDate);
    const end = new Date(booking.bookingDates.endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  useEffect(() => {
    setExtras((prevState) => ({
      ...prevState,
      childSeats: childSeats,
    }));
  }, [childSeats]);
  useEffect(() => {
    setExtras((prevState) => ({
      ...prevState,
      drivers: drivers,
    }));
  }, [drivers]);

  const handleCheckbox = () => {
    const name = event.target.name;
    console.log(carCopy);
    switch (name) {
      case "checkbox-toggle-1":
        setExtras((prevState) => ({
          ...prevState,
          isOuterJourney: !prevState.isOuterJourney,
        }));
        !extras.isOuterJourney
          ? (carCopy.price += priceIsOuterJourney)
          : (carCopy.price -= priceIsOuterJourney);

        break;
      case "checkbox-toggle-2":
        setExtras((prevState) => ({
          ...prevState,
          isGps: !prevState.isGps,
        }));
        !extras.isGps
          ? (carCopy.price += priceIsGps)
          : (carCopy.price -= priceIsGps);
        break;
      default:
        break;
    }
  };
  const handleChildSeats = (value) => {
    if (value > 4) setChildSeats(4);
    else setChildSeats(value);
    const newValue = value;
    const seatDiff = newValue - childSeats;
    carCopy.price += seatDiff * priceChildSeats;
  };
  const handleDrivers = (value) => {
    if (value > 4) setDrivers(4);
    else setDrivers(value);
    const newValue = value;
    const driversDiff = newValue - drivers;
    carCopy.price += driversDiff * priceExtraDrivers;
  };

  return (
    <>
      <Card sx={{ maxWidth: 400, minWidth: 350 }} car={car}>
        <CardActionArea
          onClick={() => {
            //handleReservation(car, booking);
          }}
        >
          <CardHeader
            sx={{ textAlign: "center" }}
            title={`${car.brand} ${car.model}`}
            subheader=""
          />
          <CardMedia
            component="img"
            image={`./src/assets/Cars/${car.image}.webp`}
            alt={`car ${car.brand}`}
          />

          <CardContent>
            <Stack
              spacing={1}
              direction={{ xs: "column", sm: "row" }}
              sx={{ justifyContent: "center" }}
            >
              <Chip
                icon={<DirectionsCarIcon color="secondary" />}
                label={`Clase: ${car.category}`}
                variant="outlined"
              />
              <Chip
                icon={<SettingsIcon color="primary" />}
                label={car.gearShiftType}
                variant="outlined"
              />
              <Chip
                icon={<LocalGasStationIcon color="secondary" />}
                label={car.fuelType}
                variant="outlined"
              />
            </Stack>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Stack
            spacing={1}
            direction={{ xs: "column", sm: "column" }}
            sx={{ width: "100%" }}
          >
            <Application theme={themeRainbow}>
              <Stack
                spacing={1}
                direction={{ xs: "column", sm: "column" }}
                sx={{ justifyContent: "center" }}
              >
                <CheckboxToggle
                  id="isOutherJourney"
                  label="¿Vas a conducir por Portugal, Francia o Andorra?"
                  style={{
                    width: "100%",
                    justifyContent: "space-between",
                    flexDirection: "row-reverse",
                  }}
                  onChange={handleCheckbox}
                  value={extras.isOuterJourney}
                />
                <CheckboxToggle
                  label="No te pierdas y ahorra tiempo con un GPS"
                  style={{
                    width: "100%",
                    justifyContent: "space-between",
                    flexDirection: "row-reverse",
                  }}
                  onChange={handleCheckbox}
                  value={extras.isGps}
                />
                <CounterInput
                  id="input-component-1"
                  label="¿Necesitas algún asiento adecuado para niños?"
                  size="medium"
                  borderRadius="rounded"
                  className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                  value={childSeats}
                  onChange={handleChildSeats}
                  min={0}
                  max={4}
                />
                <CounterInput
                  id="input-component-1"
                  label="¿Cuantas personas van a conducir el coche?"
                  size="medium"
                  borderRadius="rounded"
                  className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                  value={drivers}
                  onChange={handleDrivers}
                  min={0}
                  max={4}
                />
              </Stack>
              <Stack
                spacing={1}
                direction={{ xs: "row", sm: "row" }}
                sx={{
                  width: "100%",
                  margin: "3rem 0 0 0",
                  justifyContent: "space-between",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  Total (impuestos incluidos)
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {carCopy.price.toFixed(2)}
                </Typography>
              </Stack>
              <Stack
                spacing={1}
                direction={{ xs: "row", sm: "row" }}
                sx={{
                  width: "100%",
                  margin: "0",
                  justifyContent: "space-between",
                }}
              >
                <Typography gutterBottom variant="p" component="div">
                  Sub Total(coche)
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                  {car.price.toFixed(2)}
                </Typography>
              </Stack>
              <Stack
                spacing={1}
                direction={{ xs: "row", sm: "row" }}
                sx={{
                  width: "100%",
                  margin: "0",
                  justifyContent: "space-between",
                }}
              >
                <Typography gutterBottom variant="p" component="div">
                  Total dias: {days()}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                  + {days() * priceDay}
                </Typography>
              </Stack>
              {extras.isOuterJourney && (
                <Stack
                  spacing={1}
                  direction={{ xs: "row", sm: "row" }}
                  sx={{
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography gutterBottom variant="p" component="div">
                    Cobertura exterior
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    + {priceIsOuterJourney.toFixed(2)}€
                  </Typography>
                </Stack>
              )}
              {extras.isGps && (
                <Stack
                  spacing={1}
                  direction={{ xs: "row", sm: "row" }}
                  sx={{
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography gutterBottom variant="p" component="div">
                    Navegador GPS
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    + {priceIsGps.toFixed(2)}€
                  </Typography>
                </Stack>
              )}
              {!!extras.childSeats && (
                <Stack
                  spacing={1}
                  direction={{ xs: "row", sm: "row" }}
                  sx={{
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography gutterBottom variant="p" component="div">
                    Asiento niño
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    + {(extras.childSeats * priceChildSeats).toFixed(2)}€
                  </Typography>
                </Stack>
              )}
              {!!extras.drivers && (
                <Stack
                  spacing={1}
                  direction={{ xs: "row", sm: "row" }}
                  sx={{
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography gutterBottom variant="p" component="div">
                    Conductor extra
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    + {(extras.drivers * priceExtraDrivers).toFixed(2)}€
                  </Typography>
                </Stack>
              )}
            </Application>
          </Stack>
        </CardActions>

        {/*         <CardActions>
          <Button
            size="large"
            color="secondary"
            variant="contained"
            className="m-auto"
            onClick={() => {
              handleReservation(car, booking);
            }}
          >
            Reservar &nbsp;
            <SellIcon color="primary" />
          </Button>
        </CardActions> */}
      </Card>
    </>
  );
}

const styles = {
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
};