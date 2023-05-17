import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

const Container = styled.div`

  h2{
    
  color: black;
  width: 100%;
    font-size: 2.3rem;
    line-height: 3.7rem;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 15px;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CloseIcon = styled.span`
  background: none;
  border: none;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const SearchContainer = styled.div`
position: relative;
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  padding-left: 30px; /* Aumentamos el padding para dejar espacio para el icono */
`;

const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

const CityList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-self: start;
  flex-direction: column;
`;

const CityItem = styled.li`
  margin-bottom: 5px;
  cursor: pointer;
`;

const ButtonModalCity = () => {
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visualización del modal. Inicialmente se establece en 'false'.
  const [selectedCity, setSelectedCity] = useState(''); // Estado para almacenar la ciudad seleccionada. Inicialmente está vacío.
  const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el término de búsqueda. Inicialmente está vacío.
  const cities = ['Mexico', 'Medellin', 'Bogota', 'Popayan'];

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

  // 'handleSearchChange' es una funcion para realizar acciones adicionales, como filtrar las ciudades en base al término de búsqueda
  // la función 'handleSearchChange' se utiliza en el input para manejar los cambios en el término de búsqueda. Cada vez que el usuario escribe en el 'input', se llama a la función 'handleSearchChange', que actualiza el estado 'searchTerm' con el valor ingresado.
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Container onClick={openModal}>
        {/* Mostrar el mensaje correspondiente dependiendo de si se ha seleccionado una ciudad */}
        {selectedCity ? <h2>Ciudad de {selectedCity}</h2> : <h2>selecciona una ciudad</h2>}
      </Container>

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
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </SearchContainer>

            <CityList>
              {cities
                .filter((city) =>
                  city.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((city) => (
                  <CityItem key={city} onClick={() => handleCityClick(city)}>{city}</CityItem>
                ))}
            </CityList>
            
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default ButtonModalCity;