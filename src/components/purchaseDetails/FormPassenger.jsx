import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StyleForm } from "./StyleFormPassenger";
import Person from "../../assets/used.svg";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
    .max(15, "El nombre de usuario no debe tener más de 15 caracteres")
    .required("El nombre de usuario es obligatorio"),
  documentType: Yup.string()
    .oneOf(["CC", "TI"], "Seleccione un tipo de documento válido")
    .required("El tipo de documento es obligatorio"),
  documentId: Yup.string()
    .matches(/^[0-9]+$/, "El documento debe contener solo números")
    .min(8, "El documento debe tener al menos 8 caracteres")
    .max(10, "El documento no debe tener más de 10 caracteres")
    .required("El documento es obligatorio"),
  email: Yup.string()
    .email("El correo debe ser válido")
    .required("El correo es obligatorio"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "El teléfono debe contener solo números")
    .min(10, "El teléfono debe tener al menos 10 caracteres")
    .max(10, "El teléfono no debe tener más de 10 caracteres")
    .required("El teléfono es obligatorio"),
  address: Yup.string(),
  paymentMethod: Yup.string().required("Seleccione el medio de pago"),
});

export const FormDetailsPassenger = ({ user, handlePurchase }) => {
  const initialValues = {
    username: user?.username || "",
    documentType: user?.documentType || "",
    documentId: user?.documentId || "",
    paymentMethod: user?.paymentMethod || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handlePurchase(values);
    },
  });

  return (
    <div>
      <StyleForm onSubmit={formik.handleSubmit}>
        <div>
          <h2>
            {" "}
            <img src={Person} alt="person" /> Datos Personales
          </h2>
        </div>
        <span>Nombre</span>
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          {...formik.getFieldProps("username")}
        />
          {formik.touched.username && formik.errors.username && (
          <div className="error-message">{formik.errors.username}</div>
        )}

        <span>Documento de identidad</span>

        <select
          name="documentType"
          value={formik.values.documentType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value=""></option>
          <option value="CC">CC</option>
          <option value="TI">TI</option>
          <option value="RC">CE</option>
        </select>
        {formik.touched.documentType && formik.errors.documentType && (
          <div className="error-message">{formik.errors.documentType}</div>
        )}

        <input
          type="text"
          name="documentId"
          placeholder="Número de documento"
          {...formik.getFieldProps("documentId")}
        />
        {formik.touched.documentId && formik.errors.documentId && (
          <div className="error-message">{formik.errors.documentId}</div>
        )}

        <span>e-mail</span>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error-message">{formik.errors.email}</div>
        )}

        <span>Teléfono móvil</span>
        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          {...formik.getFieldProps("phone")}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="error-message">{formik.errors.phone}</div>
        )}

        <span>Dirección</span>
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          {...formik.getFieldProps("address")}
        />
        {formik.touched.address && formik.errors.address && (
          <div className="error-message">{formik.errors.address}</div>
        )}

        <span>Método de pago</span>
        <select
          name="paymentMethod"
          value={formik.values.paymentMethod}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value=""></option>
          <option value="tarjeta">Tarjeta</option>
          <option value="efectivo">Efectivo</option>
        </select>
        {formik.touched.paymentMethod && formik.errors.paymentMethod && (
          <div className="error-message">{formik.errors.paymentMethod}</div>
        )}

        <button type="submit" disabled={formik.isSubmitting}>
          Confirmar compra
        </button>
      </StyleForm>
    </div>
  );
};
