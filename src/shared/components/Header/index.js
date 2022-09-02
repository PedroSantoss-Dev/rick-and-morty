import * as N from "./styles"
import Rick from "../../assets/rick.png"
export const Header = () => {
    return(
        <N.Navbar>
            <N.Logo src={Rick} alt='logo rick and morty'/>
            <N.Nav>
                <N.Menu>
                    <N.List><N.Btn>home</N.Btn></N.List>
                    <N.List><N.Btn>info</N.Btn></N.List>
                    <N.List><N.Btn>sobre</N.Btn></N.List>
                </N.Menu>
            </N.Nav>
        </N.Navbar>
    )
}