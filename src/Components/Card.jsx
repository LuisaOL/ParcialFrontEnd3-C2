
const Card = ({nombre, edad, nacionalidad}) => {
  return (
    <div>
        <h3>Bienvenido</h3>
        <p>Nombre: {nombre}</p>
        <p>Edad: {edad}</p>
        <p>Nacionalidad: {nacionalidad}</p>
    </div>
  )
}

export default Card