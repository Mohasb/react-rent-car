import { SearchCar } from "../../components/searchCar/SearchCar";
import { useEffect } from "react";
import "./Home.scss";
import {
  audiA1,
  audiA3,
  audiA4,
  audiQ2,
  fiat500,
  fordFocus,
  fordTransit,
  mercedesA,
  opelMokka,
  peugeot5008,
  peugeotSpace,
  skodaKaroq,
  VwTouran,
  VwTRock,
} from "./cars";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "../../components/testimonial/Testimonial";
import Prueba from "./prueba";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Prueba />
      {/* <div id="parallax-world-of-ugg">
        <section>
          <div className="parallax-one">
            <h2>Alquiler de coches</h2>
            <SearchCar />
          </div>
        </section>
        <section>
          <div className="block">
            <h3>El alquiler de coches baratos no está reñido con la calidad</h3>
            <p className="line-break pt-2"></p>
            <p>
              <span className="first-character sc">E</span> MHCars buscamos
              ofrecerte un servicio de alquiler de coches al mejor precio, sin
              que ello suponga un servicio de peor calidad. Por esto, ponemos a
              tu disposición un servicio de alquiler de coches baratos en España
              y en el resto del mundo con infinidad de ofertas especiales
              conservando todas nuestras garantías de servicio. <br /> <br />{" "}
              Nuestro objetivo es que nuestros clientes queden satisfechos,
              deseen volver a contratar nuestros servicios y disfrutar de
              nuestras ofertas en alquiler de coches baratos. A día de hoy más
              de las 111.588 opiniones recibidas de nuestros clientes, el 90% se
              muestran satisfechos con nuestro servicio de alquiler de coches,
              lo que sin duda es la mejor garantía de calidad que podemos
              ofrecerte.
            </p>
            <p className="line-break "></p>
          </div>
        </section>
        <section>
          <div className="parallax-two">
            <h2 style={{ padding: "1rem 0 2rem 0" }} data-aos="zoom-in">
              Nuestros Coches
            </h2>
            <div className="car-images slideshow">
              <img className="slideshow-image" src={audiA1} alt="AudiA1Image" />
              <img className="slideshow-image" src={audiA3} alt="AudiA3Image" />
              <img
                className="slideshow-image"
                src={mercedesA}
                alt="MercedesClaseAImage"
              />
              <img className="slideshow-image" src={audiA4} alt="AudiA4Image" />
              <img className="slideshow-image" src={audiQ2} alt="AudiQ2Image" />
              <img
                className="slideshow-image"
                src={fiat500}
                alt="Fiat500Cabrio"
              />
              <img
                className="slideshow-image"
                src={fordFocus}
                alt="FordFocusImage"
              />
              <img
                className="slideshow-image"
                src={VwTRock}
                alt="VolkswagenTROCCabrioletImage"
              />
              <img
                className="slideshow-image"
                src={VwTouran}
                alt="VolkswagenTouranImage"
              />
              <img
                className="slideshow-image"
                src={skodaKaroq}
                alt="SkodaKaroqoImage"
              />
              <img
                className="slideshow-image"
                src={peugeotSpace}
                alt="PeugeotSpaceImage"
              />
              <img
                className="slideshow-image"
                src={peugeot5008}
                alt="Peugeot5008Image"
              />
              <img
                className="slideshow-image"
                src={opelMokka}
                alt="OpelMokkaImage"
              />
              <img
                className="slideshow-image"
                src={fordTransit}
                alt="FordTransitXlImage"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="block">
            <p className="line-break"></p>
            <p>
              <span className="first-character ny">O</span>frecemos los mejores
              servicios complementarios para que tu alquiler de coche sea de la
              mayor calidad posible. Para ello, damos la posibilidad de:
              contratar una cobertura a todo riesgo, elegir la política de
              combustible que mejor se adecúe a tus necesidades, contratar una
              cobertura exterior para poder viajar a otros países, contratar un
              alquiler para jóvenes a partir de 19 años, un alquiler senior para
              las personas de 75 años o más, alquilar sillas para bebés y niños,
              contratar la recogida del coche sin esperas, añadir conductores
              adicionales, alquilar un GPS o cadenas para la nieve.
            </p>
            <p className="line-break "></p>
          </div>
        </section>
        <section>
          <div className="parallax-three">
            <Testimonials />
          </div>
        </section>
        <section>
          <div className="block">
            <p className="line-break"></p>
            <p>
              <span className="first-character atw">P</span>ara MHCars la
              innovación es especialmente relevante y transversal en todos los
              ámbitos de nuestra actividad. Por ello, la compañía ha ido
              evolucionando en línea con el mercado para adaptarse a las
              necesidades de movilidad de nuestros clientes. En los últimos
              años, hemos sumado nuestros esfuerzos en mejorar la experiencia
              del cliente en nuestra web y app, apostando por una interfaz más
              sencilla e intuitiva, que conecte con el usuario y facilite al
              máximo cualquier tipo de consulta o gestión. En esa línea, durante
              esta última etapa estamos apostando por la creación de servicios
              que aprovechan los últimos adelantos tecnológicos para conseguir
              la recogida de vehículo más rápida del mercado
            </p>
            <p className="line-break"></p>
          </div>
        </section>
      </div> */}
    </main>
  );
}
