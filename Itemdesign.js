import ItemsList from "./ItemsList";
import "./ItemDesgin.css";
const ItemDesign = (props) => {
  return (
    <div className="expense-item">
      <div className="expense-name">
        <h1>{props.name}</h1>
      </div>
      <div className="expense-item__description">
        <h1>{props.company}</h1>
      </div>
      <div className="expense-item__price">
        <h2>${props.price}</h2>
      </div>
    </div>
  );
};

export default ItemDesign;
