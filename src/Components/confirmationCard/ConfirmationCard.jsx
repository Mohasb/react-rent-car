//Material UI imports
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SettingsIcon from "@mui/icons-material/Settings";
import SellIcon from "@mui/icons-material/Sell";
import UndoIcon from "@mui/icons-material/Undo";
import CardHeader from "@mui/material/CardHeader";
import { ReservationCar } from "../../services/apiRequest/ReservationCarService";
import { CheckboxToggle } from "react-rainbow-components";
import { CounterInput } from "react-rainbow-components";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

import { Accordion, AccordionSection, Input } from "react-rainbow-components";

//import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useEffect, useState, useContext } from "react";

import Context from "../../services/contextUser/ContextUser";
import ConfirmationModal from "../modals/ConfirmationModal";
import "./style.scss";

export default function ConfirmationCard({ car, booking }) {
  const { user, setUser } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleReservation = (car, booking) => {
    if (user !== null && typeof user !== "undefined" && car && booking) {
      ReservationCar(car, booking, user).then((response) => {
        if (response.status === 200) {
          setShowModal(true);
        }
      });
    } else {
      document.querySelector("#Iniciar").click();
    }
  };
  const priceIsOuterJourney = 54;
  const priceIsGps = 20;
  const priceChildSeats = 30;
  const priceExtraDrivers = 50;
  const [priceExtras, setPriceExtras] = useState(0);

  const [childSeats, setChildSeats] = useState(0);
  const [drivers, setDrivers] = useState(1);
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
    const name = window.event.target.name;
    switch (name) {
      case "isOutherJourney":
        setExtras((prevState) => ({
          ...prevState,
          isOuterJourney: !prevState.isOuterJourney,
        }));
        !extras.isOuterJourney
          ? setPriceExtras(priceExtras + priceIsOuterJourney)
          : setPriceExtras(priceExtras - priceIsOuterJourney);
        break;

      case "isGps":
        setExtras((prevState) => ({
          ...prevState,
          isGps: !prevState.isGps,
        }));
        !extras.isGps
          ? setPriceExtras(priceExtras + priceIsGps)
          : setPriceExtras(priceExtras - priceIsGps);
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
    setPriceExtras(priceExtras + seatDiff * priceChildSeats);
  };
  const handleDrivers = (value) => {
    if (/\d/.test(value))
      if (value == 1) setDrivers(1);
      else if (value > 4) setDrivers(4);
      else setDrivers(value);
    const newValue = value;
    const driversDiff = newValue - drivers;
    setPriceExtras(priceExtras + driversDiff * priceExtraDrivers);
  };

  const handleKeyDownNumbers = () => {
    if (!/\d|ArrowLeft|ArrowRight/.test(window.event.key)) {
      // Cancelar la acción predeterminada si es un carácter no válido
      window.event.preventDefault();
    }
  };

  return (
    <>
      <main className="confirmation-card">
        <div className="card">
          <Card car={car}>
            <CardHeader
              title={`${car.brand} ${car.model}`}
              className="confirmation-header"
            />
            <div className="row">
              <div className="col">
                <CardMedia
                  component="img"
                  image={`./src/assets/Cars/${car.image}.webp`}
                  alt={`car ${car.brand}`}
                />
                <CardContent>
                  <Stack
                    spacing={1}
                    direction={{ xs: "column", sm: "row" }}
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
              </div>
              <div className="col">
                <CardActions>
                  <Stack
                    spacing={1}
                    direction={{ xs: "column", sm: "column" }}
                    className="container-extras"
                  >
                    <Stack
                      spacing={1}
                      direction={{ xs: "column", sm: "column" }}
                    >
                      <CheckboxToggle
                        id="isOutherJourney"
                        name="isOutherJourney"
                        label="¿Vas a conducir por Portugal, Francia o Andorra?"
                        className="checkboxes"
                        onChange={handleCheckbox}
                        value={extras.isOuterJourney}
                      />
                      <CheckboxToggle
                        id="isGps"
                        name="isGps"
                        label="No te pierdas y ahorra tiempo con un GPS"
                        className="checkboxes"
                        onChange={handleCheckbox}
                        value={extras.isGps}
                      />
                      <CounterInput
                        id="input-component-1"
                        label="¿Necesitas algún asiento adecuado para niños?"
                        size="medium"
                        borderRadius="rounded"
                        className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto counter-input"
                        value={childSeats}
                        onChange={handleChildSeats}
                        onKeyDown={handleKeyDownNumbers}
                        min={0}
                        max={4}
                      />
                      <CounterInput
                        id="input-component-1"
                        label="¿Cuantas personas van a conducir el coche?"
                        size="medium"
                        borderRadius="rounded"
                        className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto counter-input"
                        value={drivers}
                        onChange={handleDrivers}
                        onKeyDown={handleKeyDownNumbers}
                        min={1}
                        max={4}
                      />
                    </Stack>
                    <Stack
                      spacing={1}
                      direction={{ xs: "row", sm: "row" }}
                      className="total"
                    >
                      <Typography gutterBottom variant="h3" component="div">
                        Total
                      </Typography>
                      <Typography gutterBottom variant="h3" component="div">
                        {(car.price * days() + priceExtras).toFixed(2)}€
                      </Typography>
                    </Stack>
                    <div className="extras">
                      {/* <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon color="primary" />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>Detalles Reserva</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Stack
                            spacing={1}
                            direction={{ xs: "row", sm: "row" }}
                          >
                            <Typography
                              gutterBottom
                              variant="p"
                              component="div"
                            >
                              ({car.price.toFixed(2)} * {days()} dias)
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="p"
                              component="div"
                            >
                              {(car.price.toFixed(2) * days()).toFixed(2)}
                            </Typography>
                          </Stack>
                          {extras.isOuterJourney && (
                            <Stack
                              spacing={1}
                              direction={{ xs: "row", sm: "row" }}
                            >
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                Cobertura exterior
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                + {priceIsOuterJourney.toFixed(2)}€
                              </Typography>
                            </Stack>
                          )}
                          {extras.isGps && (
                            <Stack
                              spacing={1}
                              direction={{ xs: "row", sm: "row" }}
                            >
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                Navegador GPS
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                + {priceIsGps.toFixed(2)}€
                              </Typography>
                            </Stack>
                          )}
                          {!!extras.childSeats && (
                            <Stack
                              spacing={1}
                              direction={{ xs: "row", sm: "row" }}
                            >
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                Asiento niño
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                +{" "}
                                {(extras.childSeats * priceChildSeats).toFixed(
                                  2
                                )}
                                €
                              </Typography>
                            </Stack>
                          )}
                          {extras.drivers > 1 && (
                            <Stack
                              spacing={1}
                              direction={{ xs: "row", sm: "row" }}
                            >
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                Conductor extra
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                +{" "}
                                {(
                                  (extras.drivers - 1) *
                                  priceExtraDrivers
                                ).toFixed(2)}
                                €
                              </Typography>
                            </Stack>
                          )}
                        </AccordionDetails>
                      </Accordion> */}
                      <Accordion id="accordion-1">
                        <AccordionSection label="Detalles Reserva">
                          <Stack
                            spacing={1}
                            direction={{ xs: "row", sm: "row" }}
                          >
                            <Typography
                              gutterBottom
                              variant="p"
                              component="div"
                            >
                              ({car.price.toFixed(2)} * {days()} dias)
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="p"
                              component="div"
                            >
                              {(car.price.toFixed(2) * days()).toFixed(2)}
                            </Typography>
                          </Stack>
                          {extras.isOuterJourney && (
                            <Stack
                              spacing={1}
                              direction={{ xs: "row", sm: "row" }}
                            >
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                Cobertura exterior
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                + {priceIsOuterJourney.toFixed(2)}€
                              </Typography>
                            </Stack>
                          )}
                          {extras.isGps && (
                            <Stack
                              spacing={1}
                              direction={{ xs: "row", sm: "row" }}
                            >
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                Navegador GPS
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                + {priceIsGps.toFixed(2)}€
                              </Typography>
                            </Stack>
                          )}
                          {!!extras.childSeats && (
                            <Stack
                              spacing={1}
                              direction={{ xs: "row", sm: "row" }}
                            >
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                Asiento niño
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                +{" "}
                                {(extras.childSeats * priceChildSeats).toFixed(
                                  2
                                )}
                                €
                              </Typography>
                            </Stack>
                          )}
                          {extras.drivers > 1 && (
                            <Stack
                              spacing={1}
                              direction={{ xs: "row", sm: "row" }}
                            >
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                Conductor extra
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                              >
                                +{" "}
                                {(
                                  (extras.drivers - 1) *
                                  priceExtraDrivers
                                ).toFixed(2)}
                                €
                              </Typography>
                            </Stack>
                          )}
                        </AccordionSection>
                      </Accordion>
                      {/*  /////////////////// */}
                    </div>
                  </Stack>
                </CardActions>
              </div>
            </div>

            <CardActions>
              <Button
                size="large"
                color="secondary"
                variant="contained"
                onClick={() => {
                  navigate(-1);
                }}
                sx={{ margin: "auto" }}
              >
                Volver al listado &nbsp;
                <UndoIcon color="primary" />
              </Button>
              <Button
                size="large"
                color="secondary"
                variant="contained"
                onClick={() => {
                  handleReservation(car, booking);
                }}
                sx={{ margin: "auto" }}
              >
                CONFIRMAR RESERVA &nbsp;
                <SellIcon color="primary" />
              </Button>
            </CardActions>
            <Box sx={{ textAlign: "center" }} className="">
              <Typography gutterBottom variant="h6" component="div">
                <strong>
                  <u>Recogida:</u>
                </strong>{" "}
                {booking.branch.name} (
                {new Date(booking.bookingDates.startDate).toLocaleDateString(
                  "es-ES"
                )}{" "}
                {booking.bookingDates.pickupTime})
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                <strong>
                  <u>Devolución:</u>
                </strong>{" "}
                {booking.returnBranch.name} (
                {new Date(booking.bookingDates.endDate).toLocaleDateString(
                  "es-ES"
                )}{" "}
                {booking.bookingDates.returnTime})
              </Typography>
            </Box>
          </Card>
        </div>
        {showModal && (
          <ConfirmationModal
            openModal={showModal}
            text={"Reserva realizada correctamente"}
          />
        )}
      </main>
    </>
  );
}
