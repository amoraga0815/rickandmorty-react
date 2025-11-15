import { NavLink, Outlet } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";

export default function PageContainer() {
  return (
    <Container fluid className="p-4">

      {/* Tabs como rutas */}
      <Nav variant="tabs" defaultActiveKey="/PageContainer">
        <Nav.Item>
          <NavLink
            to="/PageContainer"
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Personajes
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            to="/PageContainer/SectionLocations"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Localidades
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            to="/PageContainer/SectionEpisodes"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Episodios
          </NavLink>
        </Nav.Item>
      </Nav>

      {/* Aquí se renderiza el contenido de cada Tab */}
      <Outlet />
    </Container>
  );
}