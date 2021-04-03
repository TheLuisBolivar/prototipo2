import { useState } from "react";
import Contact from "./components/Contact";
import Search from "./components/Search";
import listaContactos from "./contactos.json";
import Button from '@material-ui/core/Button';
import { Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles ({
  formButton: {    
    width: 240,
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(156, 252, 183, .3)',
    height: 48,
    padding: '1%',
    marginLeft: '16%',    
  },

  backButton: {
    width:240, 
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(156, 252, 183, .3)',
    color: 'white',
    height: 48,
    padding: '1%',
    marginLeft: '16%',    
    marginTop: '5%',
    marginBottom: '5%'   
  }
})

function App() {
  const classes = useStyle()

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
      
      <div class="likefooter">
        <Button className={classes.formButton}
        startIcon={<Icon>
          manage_search
        </Icon>}
        href='https://docs.google.com/forms/d/e/1FAIpQLScQJmsuWf9TVJwN9KThfqsN5I68m7FKcanrPJg1w5w54xrYrA/viewform?embedded=true'
        target="_blank"
        >
          Te lo encontramos
        </Button>

        <Button className={classes.backButton}          
          startIcon={<Icon>
            feedback
          </Icon>}
          href="https://wa.me/573042846298"
          target="_blank"
        >
          Danos tu opinión 
        </Button>
      </div>      
    </div>    
  );
}

export default App;


