import * as N from "./styles"
import Rick from "../../assets/rick.png"
export const Navbar = () => {
    return(
            <N.Nav>
                <N.Menu>
                    <N.List><N.Btn to="/">Character</N.Btn></N.List>
                    <N.List><N.Btn to="/episode">Episode</N.Btn></N.List>
                    <N.List><N.Btn to="#">Location</N.Btn></N.List>
                </N.Menu>
            </N.Nav>
    )
}