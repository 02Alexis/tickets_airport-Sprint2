import React, { useState, useEffect } from "react";
import { ContainerCity, Modal, ModalContent, ModalHeader, CloseIcon, ModalTitle, SearchContainer, SearchInput, SearchIcon, CityList, CityItem, Error } from './StyButtonModalCity';

import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const ButtonModalCity = ({ cities, error, selectedCity, setSelectedCity  }) => {
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visualización del modal. Inicialmente se establece en 'false'.
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda. Inicialmente está vacío.

  // Función para abrir el modal
  // 'openModal' es una función que se llama al hacer clic en el contenedor y establece el estado 'showModal' en 'true'.
  const openModal = () => {
    setShowModal(true);
  };

  // Función para cerrar el modal
  // 'closeModal' es una función que se llama para cerrar el modal y establece el estado 'showModal' en 'false'.
  const closeModal = () => {
    setShowModal(false);
  };

  // Función para manejar la selección de una ciudad
  // 'handleCityClick' es una función que se llama cuando se selecciona una ciudad en el modal. Establece la ciudad seleccionada en el estado 'selectedCity' y cierra el modal.
  const handleCityClick = (city) => {
    setSelectedCity(city);
    closeModal();
  };

  useEffect(()=>{
    console.log("errores", error);
  },[error])

  // 'handleSearchChange' es una funcion para realizar acciones adicionales, como filtrar las ciudades en base al término de búsqueda
  // la función 'handleSearchChange' se utiliza en el input para manejar los cambios en el término de búsqueda. Cada vez que el usuario escribe en el 'input', se llama a la función 'handleSearchChange', que actualiza el estado 'searchTerm' con el valor ingresado.
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <ContainerCity  onClick={openModal}>
        {selectedCity ? <h1>{selectedCity}</h1> : <h1>---</h1>} 
        <p>Origen</p>     
      </ContainerCity>
      
      {!showModal && !selectedCity ? <Error>{"Este campo es obligatorio"} </Error> : null} 

      {/* Renderizar el componente Modal solo si 'showModal' es verdadero */}
      {/* El componente 'Modal' se renderiza solo si 'showModal' es 'true'. Se pasa la función 'closeModal' al componente Modal a través de la propiedad 'closeModal', y se pasa la función 'handleCityClick' a través de la propiedad 'handleCityClick'. */}
      {showModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>¿A dónde viajas?</ModalTitle>
              <CloseIcon onClick={closeModal}>
                <AiOutlineClose size={24} />
              </CloseIcon>
            </ModalHeader>

            <SearchContainer>
              <SearchIcon>
                <FaSearch size={18} />
              </SearchIcon>
              <SearchInput
                type="text"
                // value={value}
                // name="origen" id="origen"
                // onChange={onChange}
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </SearchContainer>

            <CityList>
              {cities
                .filter((city) =>
                  city.cityorigen
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )

                .map((city) => (
                  <CityItem
                    key={city.id}
                    value={`${city.cityorigen}`}
                    onClick={() => handleCityClick(`${city.cityorigen} ${city.initialor}`)}
                  >
                    {city.cityorigen}      {city.initialor}
                  </CityItem>
                ))}
            </CityList>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default ButtonModalCity;
