import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Carrito } from "./Carrito";
import { Loading } from "./Loading";
import { ProductoCard } from "./ProductoCard";

export const TiendaVirtual = () => {
  const url = "http://127.0.0.1:5000/api/products";

  const { data, loading, setvalues } = useFetch(url);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [productoEmpujar, setProductoEmpujar] = useState({});

  useEffect(() => {
    if (selectedType != "") {
      setFilteredProducts([
        ...data.filter((x) =>
          selectedType !== "" ? x.macType == selectedType : true
        ),
      ]);
    }
    if (selectedType == "" && !loading) {
      setFilteredProducts(data);
    }
  }, [selectedType]);

  useEffect(() => {
    if (!loading) {
      setFilteredProducts(data);
      setCategory([...new Set(data.map((x) => x.macType))]);
    }
  }, [loading]);

  const handleAddCard = (producto) => {
    let objeto = {
      data: [...filteredProducts.filter((x) => x.id !== producto.id)],
      loading: false,
    };
    setFilteredProducts(objeto.data);
    setProductoEmpujar(producto);
  };

  const handleOptionChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <>
      <h1>
        <div className="row">
          <div className="col-md-8">Mac Shop</div>
          <div className="col-md-2">
            <form>
              <select
                className="form-control form-control-sm"
                name=""
                id=""
                value={selectedType}
                onChange={handleOptionChange}
              >
                <option value="">-- ALL --</option>
                {!loading &&
                  category.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
              </select>
            </form>
          </div>
          <div className="col-md-2">
            <Carrito producto={productoEmpujar} />
          </div>
        </div>
      </h1>
      <hr />
      {loading ? (
        <Loading />
      ) : (
        <div style={{ float: "left" }}>
          {filteredProducts.map((data) => (
            <ProductoCard
              key={data.id}
              datos={data}
              handleAddCard={handleAddCard}
            />
          ))}
        </div>
      )}
    </>
  );
};
