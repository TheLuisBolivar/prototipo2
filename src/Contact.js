// const Contact = (props) => {
//   const contacto = props.contacto;

const Contact = ({ contacto }) => {
  let media;

  if (!contacto.Rating.length) {
    media = "Nuevo";
  } else {
    media = contacto.Rating.reduce((a, b) => a + b, 0) / contacto.Rating.length;
    media = `${media.toFixed(1)} (${Math.round((media / 5) * 100)}%)`;
  }

  return (
    <div className="contact">
      <div className="row align-items-center">
        <div className="col-4">
          <img
            className="icon"
            alt={`Imagen de: ${contacto.Nickname}`}
            src={contacto.foto}
          />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="name-rating col-9">
              <h3>{contacto.Nickname}</h3>
              <p className="rating">{media}</p>
            </div>
            <div className="col-3 map">
              <a
                href={`https://www.google.com/maps/place/${contacto.Ubicacion}`}
                target="_blank"
                rel="noreferrer"
              >
                {/* {<img src="img/map-pin.png" alt="map pin icon" />} */}
                {contacto.Ubicacion}
              </a>
            </div>
          </div>
        </div>
      </div>
      <ul className="row_skills">
        {contacto.Temas.map((tema) => (
          <li key={tema}>{tema}</li>
        ))}
      </ul>

      <div className="row_tooltip">
        Ver más &gt;
        <span className="tooltiptext" id="overflow">
          {contacto.Descripcion}
        </span>
      </div>

      <div className="text-center">
        <a
          href={`https://wa.me/${contacto.Contacto}`}
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">CONTACTO</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;