import Car from "../../Components/car3d/Car";
import "./style.scss";
import { Button } from "@mui/material";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import SellIcon from "@mui/icons-material/Sell";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const SellCar = () => {
  const navigate = useNavigate();

  const handleShowRoom = (carGlb) => {
    navigate("/show-room", { state: { car: carGlb } });
  };

  return (
    <>
      <div className="container-3dcars">
        <p className="title">bmw m4 competition coupé</p>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col car">
            <Car model={"m4.glb"} />
          </div>
          <div className="col container-info">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="presentacion-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#presentacion"
                  type="button"
                  role="tab"
                  aria-controls="presentacion"
                  aria-selected="true"
                >
                  PRESENTACIÓN
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="datos-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#datos"
                  type="button"
                  role="tab"
                  aria-controls="datos"
                  aria-selected="false"
                >
                  DATOS TÉCNICOS
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active presentation"
                id="presentacion"
                role="tabpanel"
                aria-labelledby="presentacion-tab"
              >
                <p>
                  Equipamientos de diseño y dinamismo de conducción del BMW M4.
                </p>
                <p>
                  En el nuevo BMW M4 , todo está diseñado para experimentar el
                  ADN del mundo de la competición sin concesiones en el día a
                  día. El mejor BMW M4 con homologación para circular por la vía
                  pública de todos los tiempos Reducción del peso de hasta 100
                  kg en comparación con el BMW M4 Competition Coupé Motor de
                  gasolina de 6 cilindros en línea BMW M TwinPower Turbo de 405
                  kW (551 CV) de elevadas prestaciones Neumáticos Ultra Track
                  específicos para el vehículo Diseño exclusivo
                </p>
              </div>
              <div
                className="tab-pane fade mt4"
                id="datos"
                role="tabpanel"
                aria-labelledby="datos-tab"
              >
                <div className="details">
                  <p>Potencia en kW (CV)/rpm:</p>
                  <p>405 (551)/6.250</p>
                </div>
                <div className="details">
                  <p>Par máximo en Nm/rpm:</p>
                  <p>650/2.750–5.950</p>
                </div>
                <div className="details">
                  <p>Aceleración 0–100 km/h en s:</p>
                  <p>3,7</p>
                </div>
                <div className="details">
                  <p>Consumo de combustible (promedio) en l/100 km:</p>
                  <p>9,9–10,0</p>
                </div>
                <div className="details">
                  <p>Longitud/Anchura/Altura</p>
                  <p>4.794 / 1.887 / 1.393 </p>
                </div>
                <div className="details">
                  <p>Cilindro/Válvulas por cilindro</p>
                  <p>6 / 4 </p>
                </div>
              </div>
            </div>
            <div className="actions">
              <Stack spacing={1} direction={{ xs: "column", sm: "row" }}>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    handleShowRoom("m4.glb");
                  }}
                  sx={{ margin: "auto" }}
                >
                  ShowRoom &nbsp;
                  <ThreeDRotationIcon color="secondary" />
                </Button>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    alert("Reserva");
                  }}
                  sx={{ margin: "auto" }}
                >
                  Reservar &nbsp;
                  <SellIcon color="secondary" />
                </Button>
              </Stack>
            </div>
          </div>
        </div>
        <p className="title">BENTLEY CONTINENTAL GT </p>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col car">
            <Car model={"bentley.glb"} />
          </div>
          <div className="col container-info">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="presentacion-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#presentacion"
                  type="button"
                  role="tab"
                  aria-controls="presentacion"
                  aria-selected="true"
                >
                  PRESENTACIÓN
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="datos-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#datos"
                  type="button"
                  role="tab"
                  aria-controls="datos"
                  aria-selected="false"
                >
                  DATOS TÉCNICOS
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active presentation"
                id="presentacion"
                role="tabpanel"
                aria-labelledby="presentacion-tab"
              >
                <p>BEYOND THE LUXURY GRAND TOURER</p>
                <p>
                  El Continental GT es el gran turismo más exquisitamente
                  diseñado. Con una gran cantidad de detalles hechos a mano, es
                  reconocible al instante como un automóvil apto para llevar el
                  nombre de los carroceros automotrices más renombrados del
                  mundo. Sin embargo, también es un Bentley, y eso significa el
                  rendimiento de Bentley. La tecnología avanzada del motor
                  ofrece una aceleración sin esfuerzo y velocidades máximas
                  increíbles para un automóvil tan cómodo y lujoso. Mientras
                  tanto, los sistemas de chasis controlados por computadora
                  hacen que la conducción dinámica sea más segura, fácil y
                  emocionante. Un verdadero buque insignia de lujo, el
                  Continental GT Mulliner es todo lo que debe ser un gran
                  turismo, y más.
                </p>
              </div>
              <div
                className="tab-pane fade mt4"
                id="datos"
                role="tabpanel"
                aria-labelledby="datos-tab"
              >
                <div className="details">
                  <p>Potencia en kW (CV)/rpm:</p>
                  <p>485 kW</p>
                </div>
                <div className="details">
                  <p>Par máximo en Nm/rpm:</p>
                  <p>900 Nm @ 1500-5000 RPM</p>
                </div>
                <div className="details">
                  <p>Aceleración 0–100 km/h en s:</p>
                  <p>3.6 </p>
                </div>
                <div className="details">
                  <p>Consumo de combustible (promedio) en l/100 km:</p>
                  <p>9,9–10,0</p>
                </div>
                <div className="details">
                  <p>Longitud/Anchura/Altura</p>
                  <p>4.850 / 2.187 / 1.405 </p>
                </div>
                <div className="details">
                  <p>Cilindro/Válvulas por cilindro</p>
                  <p>6 / 4</p>
                </div>
              </div>
            </div>
            <div className="actions">
              <Stack spacing={1} direction={{ xs: "column", sm: "row" }}>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    handleShowRoom("bentley.glb");
                  }}
                  sx={{ margin: "auto" }}
                >
                  ShowRoom &nbsp;
                  <ThreeDRotationIcon color="secondary" />
                </Button>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    alert("Reserva");
                  }}
                  sx={{ margin: "auto" }}
                >
                  Reservar &nbsp;
                  <SellIcon color="secondary" />
                </Button>
              </Stack>
            </div>
          </div>
        </div>
        <p className="title">Ford Mustang GT</p>
        <div className="row row-cols-1 row-cols-md-2 ">
          <div className="col car">
            <Car model={"mustang.glb"} />
          </div>
          <div className="col container-info">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="presentacion-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#presentacion"
                  type="button"
                  role="tab"
                  aria-controls="presentacion"
                  aria-selected="true"
                >
                  PRESENTACIÓN
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="datos-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#datos"
                  type="button"
                  role="tab"
                  aria-controls="datos"
                  aria-selected="false"
                >
                  DATOS TÉCNICOS
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active presentation"
                id="presentacion"
                role="tabpanel"
                aria-labelledby="presentacion-tab"
              >
                <p>UNA BESTIA BAJO EL CAPÓ</p>
                <p>
                  Un icono reconocible al instante. Dos modelos. Al alucinante
                  Ford Mustang GT se le une ahora el Mustang más potente y
                  preparado para conquistar las carreteras europeas: el Ford
                  Mustang Mach 1. Los modelos Ford Mustang ofrecen emoción a la
                  carta. Ambos vienen dotados de un diseño aerodinámico, tienen
                  un estilo audaz y están equipados con funciones avanzadas y
                  tecnologías de asistencia, sin olvidar que los coches
                  deportivos ofrecen un gran rendimiento. De hecho, el motor V8
                  Mach 1 de 5,0 litros tiene una potencia de 460 CV y 529 Nm de
                  par motor, y pasa de 0 a 100 km/h en 4,4 segundos en el modo
                  automático y 4,8 segundos en el manual. La pregunta aquí es,
                  ¿cuánto te importa el rendimiento?
                </p>
              </div>
              <div
                className="tab-pane fade mt4"
                id="datos"
                role="tabpanel"
                aria-labelledby="datos-tab"
              >
                <div className="details">
                  <p>Potencia en kW (CV)/rpm:</p>
                  <p>450 (551)/6.250</p>
                </div>
                <div className="details">
                  <p>Par máximo en Nm/rpm:</p>
                  <p>529 Nm/2.750–5.950</p>
                </div>
                <div className="details">
                  <p>Aceleración 0–100 km/h en s:</p>
                  <p>3,4</p>
                </div>
                <div className="details">
                  <p>Consumo de combustible (promedio) en l/100 km:</p>
                  <p>9,9–10,0</p>
                </div>
                <div className="details">
                  <p>Longitud/Anchura/Altura</p>
                  <p>4.794 / 1.887 / 1.393 </p>
                </div>
                <div className="details">
                  <p>Cilindro/Válvulas por cilindro</p>
                  <p>6 / 4 </p>
                </div>
              </div>
            </div>
            <div className="actions">
              <Stack spacing={1} direction={{ xs: "column", sm: "row" }}>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    handleShowRoom("mustang.glb");
                  }}
                  sx={{ margin: "auto" }}
                >
                  ShowRoom &nbsp;
                  <ThreeDRotationIcon color="secondary" />
                </Button>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    alert("Reserva");
                  }}
                  sx={{ margin: "auto" }}
                >
                  Reservar &nbsp;
                  <SellIcon color="secondary" />
                </Button>
              </Stack>
            </div>
          </div>
        </div>
        <p className="title">Jaguar f-type</p>
        <div className="row row-cols-1 row-cols-md-2 ">
          <div className="col car">
            <Car model={"ftype.glb"} />
          </div>
          <div className="col container-info">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="presentacion-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#presentacion"
                  type="button"
                  role="tab"
                  aria-controls="presentacion"
                  aria-selected="true"
                >
                  PRESENTACIÓN
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="datos-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#datos"
                  type="button"
                  role="tab"
                  aria-controls="datos"
                  aria-selected="false"
                >
                  DATOS TÉCNICOS
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active presentation"
                id="presentacion"
                role="tabpanel"
                aria-labelledby="presentacion-tab"
              >
                <p>
                  Equipamientos de diseño y dinamismo de conducción del BMW M4.
                </p>
                <p>
                  En el nuevo BMW M4 , todo está diseñado para experimentar el
                  ADN del mundo de la competición sin concesiones en el día a
                  día. El mejor BMW M4 con homologación para circular por la vía
                  pública de todos los tiempos Reducción del peso de hasta 100
                  kg en comparación con el BMW M4 Competition Coupé Motor de
                  gasolina de 6 cilindros en línea BMW M TwinPower Turbo de 405
                  kW (551 CV) de elevadas prestaciones Neumáticos Ultra Track
                  específicos para el vehículo Diseño exclusivo
                </p>
              </div>
              <div
                className="tab-pane fade mt4"
                id="datos"
                role="tabpanel"
                aria-labelledby="datos-tab"
              >
                <div className="details">
                  <p>Potencia en kW (CV)/rpm:</p>
                  <p>405 (551)/6.250</p>
                </div>
                <div className="details">
                  <p>Par máximo en Nm/rpm:</p>
                  <p>650/2.750–5.950</p>
                </div>
                <div className="details">
                  <p>Aceleración 0–100 km/h en s:</p>
                  <p>3,7</p>
                </div>
                <div className="details">
                  <p>Consumo de combustible (promedio) en l/100 km:</p>
                  <p>9,9–10,0</p>
                </div>
                <div className="details">
                  <p>Longitud/Anchura/Altura</p>
                  <p>4.794 / 1.887 / 1.393 </p>
                </div>
                <div className="details">
                  <p>Cilindro/Válvulas por cilindro</p>
                  <p>6 / 4 </p>
                </div>
              </div>
            </div>
            <div className="actions">
              <Stack spacing={1} direction={{ xs: "column", sm: "row" }}>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    handleShowRoom("ftype.glb");
                  }}
                  sx={{ margin: "auto" }}
                >
                  ShowRoom &nbsp;
                  <ThreeDRotationIcon color="secondary" />
                </Button>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    alert("Reserva");
                  }}
                  sx={{ margin: "auto" }}
                >
                  Reservar &nbsp;
                  <SellIcon color="secondary" />
                </Button>
              </Stack>
            </div>
          </div>
        </div>
        <p className="title">Aston martin db11</p>
        <div className="row row-cols-1 row-cols-md-2 ">
          <div className="col car">
            <Car model={"db.glb"} />
          </div>
          <div className="col container-info">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="presentacion-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#presentacion"
                  type="button"
                  role="tab"
                  aria-controls="presentacion"
                  aria-selected="true"
                >
                  PRESENTACIÓN
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="datos-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#datos"
                  type="button"
                  role="tab"
                  aria-controls="datos"
                  aria-selected="false"
                >
                  DATOS TÉCNICOS
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active presentation"
                id="presentacion"
                role="tabpanel"
                aria-labelledby="presentacion-tab"
              >
                <p>
                  Equipamientos de diseño y dinamismo de conducción del BMW M4.
                </p>
                <p>
                  En el nuevo BMW M4 , todo está diseñado para experimentar el
                  ADN del mundo de la competición sin concesiones en el día a
                  día. El mejor BMW M4 con homologación para circular por la vía
                  pública de todos los tiempos Reducción del peso de hasta 100
                  kg en comparación con el BMW M4 Competition Coupé Motor de
                  gasolina de 6 cilindros en línea BMW M TwinPower Turbo de 405
                  kW (551 CV) de elevadas prestaciones Neumáticos Ultra Track
                  específicos para el vehículo Diseño exclusivo
                </p>
              </div>
              <div
                className="tab-pane fade mt4"
                id="datos"
                role="tabpanel"
                aria-labelledby="datos-tab"
              >
                <div className="details">
                  <p>Potencia en kW (CV)/rpm:</p>
                  <p>405 (551)/6.250</p>
                </div>
                <div className="details">
                  <p>Par máximo en Nm/rpm:</p>
                  <p>650/2.750–5.950</p>
                </div>
                <div className="details">
                  <p>Aceleración 0–100 km/h en s:</p>
                  <p>3,7</p>
                </div>
                <div className="details">
                  <p>Consumo de combustible (promedio) en l/100 km:</p>
                  <p>9,9–10,0</p>
                </div>
                <div className="details">
                  <p>Longitud/Anchura/Altura</p>
                  <p>4.794 / 1.887 / 1.393 </p>
                </div>
                <div className="details">
                  <p>Cilindro/Válvulas por cilindro</p>
                  <p>6 / 4 </p>
                </div>
              </div>
            </div>
            <div className="actions">
              <Stack spacing={1} direction={{ xs: "column", sm: "row" }}>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    handleShowRoom("db.glb");
                  }}
                  sx={{ margin: "auto" }}
                >
                  ShowRoom &nbsp;
                  <ThreeDRotationIcon color="secondary" />
                </Button>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    alert("Reserva");
                  }}
                  sx={{ margin: "auto" }}
                >
                  Reservar &nbsp;
                  <SellIcon color="secondary" />
                </Button>
              </Stack>
            </div>
          </div>
        </div>
        <p className="title">Lamborguini aventador svj</p>
        <div className="row row-cols-1 row-cols-md-2 ">
          <div className="col car">
            <Car model={"aventador.glb"} />
          </div>
          <div className="col container-info">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="presentacion-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#presentacion"
                  type="button"
                  role="tab"
                  aria-controls="presentacion"
                  aria-selected="true"
                >
                  PRESENTACIÓN
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="datos-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#datos"
                  type="button"
                  role="tab"
                  aria-controls="datos"
                  aria-selected="false"
                >
                  DATOS TÉCNICOS
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active presentation"
                id="presentacion"
                role="tabpanel"
                aria-labelledby="presentacion-tab"
              >
                <p>
                  Equipamientos de diseño y dinamismo de conducción del BMW M4.
                </p>
                <p>
                  En el nuevo BMW M4 , todo está diseñado para experimentar el
                  ADN del mundo de la competición sin concesiones en el día a
                  día. El mejor BMW M4 con homologación para circular por la vía
                  pública de todos los tiempos Reducción del peso de hasta 100
                  kg en comparación con el BMW M4 Competition Coupé Motor de
                  gasolina de 6 cilindros en línea BMW M TwinPower Turbo de 405
                  kW (551 CV) de elevadas prestaciones Neumáticos Ultra Track
                  específicos para el vehículo Diseño exclusivo
                </p>
              </div>
              <div
                className="tab-pane fade mt4"
                id="datos"
                role="tabpanel"
                aria-labelledby="datos-tab"
              >
                <div className="details">
                  <p>Potencia en kW (CV)/rpm:</p>
                  <p>405 (551)/6.250</p>
                </div>
                <div className="details">
                  <p>Par máximo en Nm/rpm:</p>
                  <p>650/2.750–5.950</p>
                </div>
                <div className="details">
                  <p>Aceleración 0–100 km/h en s:</p>
                  <p>3,7</p>
                </div>
                <div className="details">
                  <p>Consumo de combustible (promedio) en l/100 km:</p>
                  <p>9,9–10,0</p>
                </div>
                <div className="details">
                  <p>Longitud/Anchura/Altura</p>
                  <p>4.794 / 1.887 / 1.393 </p>
                </div>
                <div className="details">
                  <p>Cilindro/Válvulas por cilindro</p>
                  <p>6 / 4 </p>
                </div>
              </div>
            </div>
            <div className="actions">
              <Stack spacing={1} direction={{ xs: "column", sm: "row" }}>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    handleShowRoom("aventador.glb");
                  }}
                  sx={{ margin: "auto" }}
                >
                  ShowRoom &nbsp;
                  <ThreeDRotationIcon color="secondary" />
                </Button>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    alert("Reserva");
                  }}
                  sx={{ margin: "auto" }}
                >
                  Reservar &nbsp;
                  <SellIcon color="secondary" />
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellCar;
