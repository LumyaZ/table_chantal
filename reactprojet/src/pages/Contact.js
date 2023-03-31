import FormContact from "../component/form_contact/form_contact";
import Background from "../component/background/background";
import './../App.css';

function Contact() {
    return (
      <div className="App"><br /><br /><br /><br />
        <Background/>
        <div className="form">
          <h1  className="titleform">Si vous souhaitez nous contacter :</h1>
          <FormContact/>
        </div>
      </div>
    );
  }
  
  export default Contact;
  