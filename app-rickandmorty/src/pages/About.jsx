export default function About() {
  return (
    <section className="container py-4">
      <h1 className="h3 mb-3">Acerca de</h1>
      <p>
        Esta es una SPA construida con React, Vite, react-router-dom y Bootstrap.
        El layout utiliza CSS Grid para garantizar una estructura de pantalla completa
        sin desbordes, con header y footer fijos en el flujo del documento.
      </p>
      <p className="mb-0">
        Puedes extender esta sección con misión, visión, equipo, etc.
      </p>
    </section>
  )
}
