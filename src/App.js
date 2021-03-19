import { useState } from "react";
import Contact from "./Contact";
import Search from "./Search";
import listaContactos from "./contactos.json";

function App() {
  const [contactos, setContactos] = useState(listaContactos);

  const handleSearch = (e) => {
    const newContactos = !e.target.value
      ? contactos
      : listaContactos.filter((contacto) =>
          contacto.Temas.join().toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(
            e.target.value.toLocaleLowerCase()
          ));
    setContactos(newContactos);
  };

  return (
    <div className="App container">
      <Search handleSearch={handleSearch} />
      <div className="contact-container">
        {contactos.map((contacto) => (
          <Contact contacto={contacto} key={contacto.id} />
        ))}
      </div>
    </div>
  );
}

export default App;


