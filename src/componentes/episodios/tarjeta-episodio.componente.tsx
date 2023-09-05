import './tarjeta-episodio.css';

//para resaltar los comentarios usar la extensiòn better comments

/**
 * *Tarjeta para cada episodio dentro de la vista de personaje.
 *
 * Agregar las propiedades necesarias para mostrar los datos de los episodios
 *
 * @author Diego A. Marulanda
 * @returns { JSX element}
 * @returns un JSX element 
 */
const TarjetaEpisodio = (): JSX.Element => {
  return (
    <div className="tarjeta-episodio">
      <h4>Close Rick-counters of the Rick Kind</h4>
      <div>
        <span>S01E01</span>
        <span>Lanzado el: April 7, 2014</span>
      </div>
    </div>
  );
};

export default TarjetaEpisodio;