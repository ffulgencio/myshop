import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CarritoModal } from "./CarritoModal";

export const Carrito = ({ producto }) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    if (producto.id > 0) {
      setCarrito([...carrito, producto]);
    }
  }, [producto]);


  return (
    <>
      <button
        type="button"
        className="btn btn-primary position-relative"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        disabled={carrito.length == 0}
      >
        Carrito
        {carrito.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {carrito.length} +
          </span>
        )}
      </button>

      {/* <CarritoModal /> */}
      
    </>
  );
};
