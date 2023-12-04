interface AddCustomerProps {
  onClose: () => void;
}

export default function AddClient({ onClose }: AddCustomerProps) {
  return (
    <div className="add-product-content">
      <div className="mb-3">
        <h2>Agregar Cliente</h2>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Nombre del Cliente
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
        ></input>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Numero de telefono
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
        ></input>
        <button type="submit" className="float btn btn-primary btn-lg">
          Agregar Cliente
        </button>
      </div>
    </div>
  );
}
