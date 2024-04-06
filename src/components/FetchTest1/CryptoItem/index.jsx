export const CryptoItem = ({ id, symbol, name, index }) => {
  const itemStyle = {
    backgroundColor: index < 5 ? (symbol === "usdt" ? "green" : "blue") : "none"
  };
  return (
    <>
      <thead className="border">
        <tr className="border">
          <th className="border">ID</th>
          <th className="border">Symbol</th>
          <th className="border">Name</th>
        </tr>
      </thead>
      <tbody className="border">
        <tr style={itemStyle}>
          <td className="border">{id}</td>
          <td className="border">{symbol}</td>
          <td className="border">{name}</td>
        </tr>
      </tbody>
    </>
  );
};


