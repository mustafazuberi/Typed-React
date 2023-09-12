import "./style.css";

const EventExample = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Searched!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log(`Post ${id} has been deleted`);
  };

  return (
    <div className="eventExample">
      <form>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search for anything..."
        />
        <button onClick={handleClick}>Search</button>
      </form>
      <form className="post">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          reprehenderit nam illum minus labore, assumenda eligendi. Possimus
          vel, atque consequatur repellendus ducimus ea ex, iure harum
          voluptatem asperiores quos! Quis!
        </p>
        <button className="deleteBtn" onClick={(e) => handleDelete(e,1)}>
          delete
        </button>
      </form>
      <form className="post">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          reprehenderit nam illum minus labore, assumenda eligendi. Possimus
          vel, atque consequatur repellendus ducimus ea ex, iure harum
          voluptatem asperiores quos! Quis!
        </p>
        <button className="deleteBtn" onClick={(e) => handleDelete(e, 2)}>
          delete
        </button>
      </form>
    </div>
  );
};

export default EventExample;
