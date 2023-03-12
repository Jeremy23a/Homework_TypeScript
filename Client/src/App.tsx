import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { User, fetchUsers } from "./redux/actions";
import { StoreState } from "./redux/reducers";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: StoreState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <button onClick={fetchUsers}>FETCH USERS!</button>
      {users.map((user: User) => {
        return (
          <div key={user.id}>
            {user.id} {user.name}
          </div>
        );
      })}
    </div>
  );
};

export default App;
