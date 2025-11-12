
const products = [
  { id: 1, name: 'Producto A', desc: 'Descripción breve del producto A', price: '$10.00' },
  { id: 2, name: 'Producto B', desc: 'Descripción breve del producto B', price: '$15.00' },
  { id: 3, name: 'Producto C', desc: 'Descripción breve del producto C', price: '$20.00' },
  { id: 4, name: 'Producto D', desc: 'Descripción breve del producto D', price: '$25.00' },
  { id: 5, name: 'Producto E', desc: 'Descripción breve del producto E', price: '$30.00' },
  { id: 6, name: 'Producto F', desc: 'Descripción breve del producto F', price: '$35.00' },
]

export default function Products() {
  return (
    <section className="container py-4">
      <h1 className="h3 mb-3">Productos</h1>

      <div className="row g-3">
        {products.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text text-secondary">{p.desc}</p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <button className="btn btn-primary w-100">Agregar — {p.price}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
