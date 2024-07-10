import SocialNetworkContainer from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/fotoMarcos.jpg"

import "../styles/components/sidebar.sass";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Marcos Eric" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworkContainer />
            <InformationContainer />
            <a href="doc/Curriculo-Marcos.pdf" className="btn" aria-label="Download Curriculum Vitae" download>
                Visualizar CV
            </a>
        </aside>
    );
};
    
export default Sidebar;