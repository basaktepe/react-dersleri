import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./redux/UserSlice";
import User from "./redux/User";

function UserList() {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      {users && users.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
}

export default UserList;
