import ItemsList from "./ItemsList";
const Items = () => {
  const products = [
    {
      id: "id1",
      name: "toothbresh",
      price: 50,
      company: "colgate",
    },
    {
      id: "id2",
      name: "teapowder",
      price: 34,
      company: "avt",
    },
    {
      id: "id3",
      name: "rice",
      price: 45,
      company: "vasumadhi",
    },
    {
      id: "id4",
      name: "soap",
      rollno: 15,
      company: "sandoor",
    },
  ];
  return (
    <div>
      <h1>It just a sample</h1>
      <ItemsList pro={products} />
    </div>
  );
};
export default Items;
