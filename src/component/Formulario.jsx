import { useState } from 'react';
import './Formulario.css'; 

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [tipoEntrega, setTipoEntrega] = useState('');
  const [terminos, setTerminos] = useState(false);

  const mostrar = (e) => {
    e.preventDefault();
    console.log({
      nombre,
      correo,
      cantidad,
      tipoEntrega,
      terminos,
    });
  };

  return (
    <div className="formulario-container"> {}
      <div className="formulario-header">
        <img src="./src/assets/logo.jpg" alt="Logo" className="logo" /> {}
      </div>
      <div className="formContainer"> {}
        <form onSubmit={mostrar} className="formulario"> {}
          <h1 className="title">Cotizar Producto</h1>
          <h2 className="subtitle">Obtén tu cotización personalizada en segundos</h2>
          <h3 className="subtitle">¡Informacion de contactoc!</h3>
          <div className="fieldGroup">
            <div className="field">
              <label>Nombre:</label>
              <input 
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                required 
              />
            </div>
            <div className="field">
              <label>Correo:</label>
              <input 
                type="email" 
                value={correo} 
                onChange={(e) => setCorreo(e.target.value)} 
                required 
              />
            </div>
          </div>
          <h3 className="subtitle">¡Informacion adicional!</h3>
          <div className="fieldGroup">
            <div className="field">
              <label>Cantidad de productos:</label>
              <input 
                type="number" 
                value={cantidad} 
                onChange={(e) => setCantidad(e.target.value)} 
                required 
              />
            </div>
            <div className="field">
              <label>Tipo de entrega:</label>
              <select 
                value={tipoEntrega} 
                onChange={(e) => setTipoEntrega(e.target.value)} 
                required
              >
                <option value="">Seleccione...</option>
                <option value="normal">Normal</option>
                <option value="urgente">Urgente</option>
              </select>
            </div>
          </div>
          <div className="checkboxContainer">
            <input 
              type="checkbox" 
              checked={terminos} 
              onChange={() => setTerminos(!terminos)} 
              required 
            />
            <label>Acepto los términos y condiciones</label>
          </div>
          <button type="submit">Enviar Cotización</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;


