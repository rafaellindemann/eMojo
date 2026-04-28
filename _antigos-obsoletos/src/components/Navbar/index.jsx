import { Link } from "react-router-dom"
import './index.css';
import { Button } from "@mui/material";
function Navbar() {
  return (
    <nav className="navbar">
        {/* <Link to="/">Home</Link> */}
        <Link to="/">
          <Button variant="contained" color="primary">Home</Button>
        </Link>
        {/* <Link to="/cadastro">Cadastro</Link> */}
        <Link to="/cadastro">
          <Button variant="contained" color="primary">Cadastro</Button>
        </Link>
        {/* <Link to="/lista">Lista</Link> */}
        <Link to="/lista">
          <Button variant="contained" color="primary">Lista</Button>
        </Link>
    </nav>
  )
}

export default Navbar
