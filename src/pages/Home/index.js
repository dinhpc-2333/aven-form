import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";

import * as actions from "../../store/user/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((store) => store.user);

  useEffect(() => {
    if (!users) {
      dispatch(actions.fetchUsersStart());
    }
  }, [dispatch, users]);

  return (
    <Layout>
      <div>
        <h1>Home</h1>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <img src={user.avatar} alt={user.name} />
                <p>{user.name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default Home;
