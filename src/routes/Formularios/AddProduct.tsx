interface AddProductProps {
  onClose: () => void;
}

export default function AddProduct({ onClose }: AddProductProps) {
  return (
    <div className="add-product-content">
      <form>
        <div className="mb-3">
          <h2>Agregar Productos</h2>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nombre del Producto
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
          ></input>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Descripcion del Producto
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
          ></textarea>
          <label>Precio</label>
          <input
            type="text"
            className="form-control"
            aria-label="Dollar amount (with dot and two decimal places)"
          ></input>
          <button type="submit" className="float btn btn-primary btn-lg">
            Agregar Producto
          </button>
        </div>
      </form>
    </div>
  );
}