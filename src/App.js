import { useState } from "react";
import Contact from "./components/Contact";
import Search from "./components/Search";
import listaContactos from "./contactos.json";
import Button from '@material-ui/core/Button';
import { Icon } from '@material-ui/core';

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
    <div className="container">
      <Search handleSearch={handleSearch} />          
       
      <div className="contact-container">
        {contactos.map((contacto) => (
          <Contact contacto={contacto} key={contacto.id} />
        ))}
      </div>
      <div class="form-feedback">  
        <Button      
          color="inherint"
          size= "large"
          variant='secondary'
          startIcon={<Icon>
            manage_search
          </Icon>}       
          href='https://docs.google.com/forms/d/e/1FAIpQLScQJmsuWf9TVJwN9KThfqsN5I68m7FKcanrPJg1w5w54xrYrA/viewform?embedded=true'
          >
            Te lo encontramos
        </Button>

        <Button      
          color="inherint"
          size= "large"
          variant='contained'
          startIcon={<Icon>
            feedback
          </Icon>}
          href="https://wa.me/573042846298"
          >
            Danos tu opinión
        </Button>
      </div>   
      
    </div>
    
  );
}

export default App;


