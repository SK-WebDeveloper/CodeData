const Filters = ({ order, limit, setOrderBy, setLimit}) => {
  return (
    <div style={{ display: "flex", gap:"2rem" }}>
      <div>
        <label>
          <input
            data-testid="order-filter"
            type="checkbox"
            checked ={order === "asc"}
            onChange ={(e) => setOrderBy(e.target.checked?"asc":"desc")}
            />
            Ascending
        </label>
      </div>
      <div>
        <label>
          <select
            data-testid="per-page-filter"
            value = {limit}
            onChange = {(e) => setLimit(Number(e.target.value))}
          >
            <option value = {10}>10</option>
            <option value={20}>20</option>
          </select>
          Per page
        </label>
      </div>
    </div>
  );
};
export default Filters;
