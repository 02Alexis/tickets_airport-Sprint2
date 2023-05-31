import React from 'react';
import { FormDetailsPassenger } from './FormPassenger';
import { post } from '../../services/PurchasePassenger';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PurchaseDetailsPassenger = () => {
  const navigate = useNavigate();
  const handlePurchase = async (formData) => {
    try {
      console.log(formData); // Agregar esta línea para imprimir los datos en la consola
      await post('/compra', formData);
      Swal.fire('¡Compra realizada!', '', 'success').then(() => {
        navigate('/ticket'); // Ruta a la que deseas redirigir después de la compra exitosa
      });
      
    
    } catch (error) {
      console.log(error);
      Swal.fire('Hubo un error al procesar la compra.', '', 'error');
    }
  };

  
  return (
    <>
      <FormDetailsPassenger handlePurchase={handlePurchase} />
    </>
  );
};

export default PurchaseDetailsPassenger;


