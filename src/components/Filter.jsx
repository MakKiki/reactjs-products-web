import * as React from "react";
import { useState } from "react";

const Filter = (props) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const categoryList = [
    { name: "All", value: "" },
    { name: "smartphones", value: "smartphones" },
    { name: "laptops", value: "laptops" },
    { name: "fragrances", value: "fragrances" },
    { name: "skincare", value: "skincare" },
    { name: "groceries", value: "groceries" },
    { name: "home-decoration", value: "home-decoration" },
  ];
  const [lowerPrice, setLowerPrice] = useState(0);
  const [upperPrice, setUpperPrice] = useState(5000);

  const handleFilter = (attribute, value) => {
    props.setFilteredProducts(
      props.products.filter((product) => {
        return (
          product.title
            .toLowerCase()
            .includes(
              attribute === "name" ? value.toLowerCase() : name.toLowerCase()
            ) &&
          product.brand
            .toLowerCase()
            .includes(
              attribute === "brand" ? value.toLowerCase() : brand.toLowerCase()
            ) &&
          product.category.includes(
            attribute === "category" ? value : category
          ) &&
          product.price >= (attribute === "lowerPrice" ? value : lowerPrice) &&
          product.price <= (attribute === "upperPrice" ? value : upperPrice)
        );
      })
    );
  };

  return (
    <div
      className="container pt-3 pb-4 mb-4"
      style={{ backgroundColor: "#f5f5f5", borderRadius: "10px" }}
    >
      <h5>Filter Engine</h5>
      <div className="row justify-content-center">
        <div className="col-12 mt-3">
          <label htmlFor="name" className="form-label">
            Search By Name...
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter A Model Name"
            onChange={(event) => {
              setName(event.target.value);
              handleFilter("name", event.target.value);
            }}
            value={name}
          />
        </div>

        <div className="col-md-6 mt-3">
          <label htmlFor="brand" className="form-label">
            Search By Brand...
          </label>
          <input
            type="text"
            className="form-control"
            id="brand"
            placeholder="Enter A Brand"
            onChange={(event) => {
              setBrand(event.target.value);
              handleFilter("brand", event.target.value);
            }}
            value={brand}
          />
        </div>

        <div className="col-md-6 mt-3">
          <label htmlFor="category" className="form-label">
            Search By Category...
          </label>
          <select
            className="form-select"
            id="category"
            aria-label="Search By Selecting Category"
            onChange={(event) => {
              setCategory(event.target.value);
              handleFilter("category", event.target.value);
            }}
            value={category}
          >
            {categoryList.map((element, index) => {
              return (
                <option key={index} value={element.value}>
                  {element.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-12 mt-3">
          <label className="form-label">Search By Price...</label>
          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text" id="from$">
                  From $
                </span>
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  id="lowerPrice"
                  placeholder="Enter A Lower Price"
                  aria-describedby="from$"
                  onChange={(event) => {
                    let price = event.target.value;
                    if (price === "") {
                      price = 0;
                    }
                    setLowerPrice(price);
                    handleFilter("lowerPrice", price);
                  }}
                  value={lowerPrice}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text" id="to$">
                  To $
                </span>
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  id="upperPrice"
                  placeholder="Enter A Upper Price"
                  aria-describedby="to$"
                  onChange={(event) => {
                    let price = event.target.value;
                    if (price === "") {
                      price = 5000;
                    }
                    setUpperPrice(price);
                    handleFilter("upperPrice", price);
                  }}
                  value={upperPrice}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
