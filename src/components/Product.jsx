const Product = (props) => {
  return (
    <div className="row">
      {props.filteredProducts.map((element, index) => {
        return (
          <div className="col-lg-4 col-md-6 mt-4" key={index}>
            <div className="card">
              <img
                src={element.thumbnail}
                className="card-img-top"
                alt={index}
                style={{ height: "300px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <div className="card-text">Brand: {element.brand}</div>
                <div className="card-text">Category: {element.category}</div>
                <div className="card-text">Price: ${element.price}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
