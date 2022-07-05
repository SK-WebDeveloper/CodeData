import { useEffect, useState } from "react";
import fakeFetch from "../../utils/fakeFetch";
import Button from "../common/Button";
import Pagination from "../common/Pagination";
import Filters from "./Filters";
import UserCard from "./UserCard";

function Users() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [orderBy, setOrderBy] = useState("asc");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fakeFetch({
      page,
      limit,
      orderBy,
    })
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setError(true);
      });
  }, [page, limit, orderBy]);
  return (
    <div>
      {loading && <div data-testid="loading-indicator">...loading</div>}
      {error && (
        <div data-testid="error-indicator">Error: Something went wrong</div>
      )}
      {data?.data?.map((item) => (
        <UserCard key={item.id} {...item} />
      ))}
      <Filters
        order={orderBy}
        limit={limit}
        setOrderBy={setOrderBy}
        setLimit={setLimit}
      />
      <Pagination current={page} total={data?.totalPages} onChange={setPage} />
      <div style={{display:"flex"}}>
        <Button disabled={page == 1}>
          1
        </Button>
        <Button disabled={page == 2} onClick={page}>
          2
        </Button>
        <Button disabled={page == 3} onClick={page}>
          3
        </Button>
        <Button disabled={page == 4} onClick={page}>
          4
        </Button>
        <Button disabled={page == 5} onClick={page}>
          5
        </Button>
        <Button disabled={page == 6} onClick={page}>
          6
        </Button>
        <Button disabled={page == 7} onClick={page}>
          7
        </Button>
        <Button disabled={page == 8} onClick={page}>
          8
        </Button>
        <Button disabled={page == 9} onClick={page}>
          9
        </Button>
        <Button disabled={page == 10} onClick={page}>
          10
        </Button>
      </div>
    </div>
  );
}
export default Users;
