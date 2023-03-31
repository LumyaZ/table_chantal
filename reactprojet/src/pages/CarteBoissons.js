import AfficheBoissons from "../component/affiche_boissons/affiche_boissons";
import Background from "../component/background/background";
import ChoiceBoissons from "../component/choice_boissons/boissons_choice";

function CarteBoissons() {
    return (
      <div className="App"><br /><br /><br /><br />
        <Background/>
        <ChoiceBoissons/>
        <AfficheBoissons/>
      </div>
    );
  }
  
  export default CarteBoissons;
  