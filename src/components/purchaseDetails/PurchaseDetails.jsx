import React from 'react';
import { FormDetailsPassenger } from './FormPassenger';
import { post } from '../../services/PurchasePassenger';

const PurchaseDetailsPassenger = () => {
  const recivePurchaseDetailsPassenger = async (newPurchase) => {
    try {
      await post('/compra', newPurchase);
      console.log(newPurchase);
      alert('¡Compra realizada!');
    } catch (error) {
      console.log(error);
      alert('Hubo un error al procesar la compra.');
    }
  };

  return (
    <>
      <FormDetailsPassenger handlePurchase={recivePurchaseDetailsPassenger} />
    </>
  );
};

export default PurchaseDetailsPassenger;


// import React from 'react';
// import { FormDetailsPassenger } from './FormPassenger';
// import { post } from '../../services/PurchasePassenger';

// const PurchaseDetailsPassenger = () => {
//   const recivePurchaseDetailsPassenger = async (newPurchase) => {
//     console.log(newPurchase);

//     await post('/passengers', newPurchase);
//     alert('¡Lista tu compra!');
//   };

//   return (
//     <>
//       <FormDetailsPassenger handlePurchase={recivePurchaseDetailsPassenger} />
//     </>
//   );
// };

// export default PurchaseDetailsPassenger;






// import React from 'react'
// import { FormDetailsPassenger } from './FormPassenger'

// const PurchaseDetailsPassenger= () => {
//   return (
//     <>
//     <FormDetailsPassenger />
 
//      </>
//   )
// }
// export default PurchaseDetailsPassenger