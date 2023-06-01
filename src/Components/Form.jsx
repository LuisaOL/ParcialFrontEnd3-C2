import { useState } from 'react';
import './Styles.css';
import Card from './Card';

const Form = () => {

    const urlImage = 'https://www.servnet.mx/hubfs/imagenes%20art%20sept/00%20Co%CC%81digo%20html_%20que%CC%81%20es%20y%20todo%20lo%20que%20debes%20saber.png';

    const [user, setUser] = useState({
        nombre: '',
        edad: 0,
        nacionalidad: ''
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        user.nombre.trim()

        if(user.nombre.length >= 3 && user.nacionalidad.length >=6) {
             setShow(true)
             setErr(false)
         }else {
             setShow(false)
             setErr(true)
         }
        console.log('Se enviaron los datos');
    }
  
    return (
    
    <>
     <h1>Parcial FrontEnd 3 - C2</h1>
     <h3>Luisa Fernanda Ortiz Libreros</h3>
     <img className='img' src={urlImage} alt="" />
     
     <form onSubmit={handleSubmit} className='form'>
        <label>Nombre completo</label>
        <input className='input-container' type="text" onChange={(e) => setUser({...user, nombre:(e.target.value)})}/>
        <label>Edad</label>
        <input className='input-container' type="number" required onChange={(e) => setUser({...user, edad:(e.target.value)})} />
        <label>Nacionalidad</label>
        <input className='input-container' type="text" onChange={(e) => setUser({...user, nacionalidad:(e.target.value)})}/>
        <button className='submit-btn'>Enviar</button>
     </form>

      {err ? <h4>Existen datos inválidos</h4> : null}
      {show ? <Card nombre={user.nombre} edad={user.edad} nacionalidad={user.nacionalidad}/> : null}
    </>

  )
}

export default Form