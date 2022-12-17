import "./styles.css";

export default function App() {
  const list = [1, 2, 3, 4];
  const dataList = [
    {
      name: "あかり",
      age: "22"
    },
    {
      name: "ゆうか",
      age: "25"
    }
  ];
  return (
    <div className="App">
      <h1>map-practice</h1>
      <h2>
        {list.map((number) => (
          <div>{number * 2}</div>
        ))}
      </h2>
      <h3>
        {dataList.map((data) => (
          <div>
            {data.name}は、{data.age}歳です。
          </div>
        ))}
      </h3>
    </div>
  );
}
