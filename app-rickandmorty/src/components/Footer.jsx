
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="app-footer bg-dark text-light small">
      <div className="container-fluid py-2 text-center">
        © {year} Mi SPA React. Todos los derechos reservados.
      </div>
    </footer>
  )
}
