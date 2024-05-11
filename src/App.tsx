import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { Idata } from "./types";

function App() {
  const [value, setValue] = useState("");
  const [pro, setPro] = useState<Idata[]>([]);
  const [load, setload] = useState(true);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://api-v2.elchocrud.pro/api/v1/108b25820f9336f50f02a646207ae59e/product-v2`
      );
      setPro(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    } finally {
      setload(false);
    }
  };
  const postData = async () => {
    try {
      const { data } = await axios.post(
        `https://api-v2.elchocrud.pro/api/v1/108b25820f9336f50f02a646207ae59e/product-v2`,
        {
          name: value,
        }
      );
      setPro(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>hello</h1>
      <div>
        <button onClick={() => postData()}>Add</button>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {load ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {pro.map((el) => (
              <h1>{el.name}</h1>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
