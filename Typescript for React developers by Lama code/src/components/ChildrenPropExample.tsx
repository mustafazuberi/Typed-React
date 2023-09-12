import Child from "../children/Child";
import Parent from "../children/Parent";
import SecondChild from "../children/SecondChild";

const ChildrenPropExample = () => {
  return (
    <div>
      <Parent>
        <Child />
        <SecondChild />
      </Parent>
    </div>
  );
};

export default ChildrenPropExample;
