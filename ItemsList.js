import ItemDesign from "./Itemdesign";
import Items from "./Items";
const ItemsList = (props) => {
  return (
    <div>
      <ItemDesign
        name={props.pro[0].name}
        price={props.pro[0].price}
        company={props.pro[0].company}
      />
      <ItemDesign
        name={props.pro[1].name}
        price={props.pro[1].price}
        company={props.pro[1].company}
      />
      <ItemDesign
        name={props.pro[2].name}
        price={props.pro[2].price}
        company={props.pro[2].company}
      />
      <ItemDesign
        name={props.pro[3].name}
        price={props.pro[3].price}
        company={props.pro[3].company}
      />
    </div>
  );
};
export default ItemsList;
