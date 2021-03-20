import { useState } from "react";
import Contact from "./Contact";
import Search from "./Search";
import listaContactos from "./contactos.json";

function App() {
  const [contactos, setContactos] = useState(listaContactos);

  const handleSearch = (e) => {
    let nuevosContactos = [];

    if (e.target.value === '') {
      nuevosContactos = contactos;
    } else {
      nuevosContactos = listaContactos.filter((contacto) => {
        console.log(contacto.Temas);
        return contacto.Temas.join().toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(
          e.target.value.toLocaleLowerCase()
        );
      });
    }



    
    setContactos(nuevosContactos);
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


