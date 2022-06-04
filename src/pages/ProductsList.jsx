import { Link } from "react-router-dom";

function ProductsList(/* { allProducts } */) {
  return (
    <div>Products List</div>
    /* { <div>
      {allProducts.map((element) => {
        return (
          <div className="list-group" key={element}>
            <Link to={`/${element...}`}
            >
              <img
                src={/${element}.png`}
                alt={element.name}
              />
              <p>{element.name}</p>
              <p>{element.price}</p>
              <p>{element.size}</p>
              <p>{element.brand}</p>


            </Link>
          </div>
        );
      })}
    </div> }*/
  );
}

export default ProductsList;
