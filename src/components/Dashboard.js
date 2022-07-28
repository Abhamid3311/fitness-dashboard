import React, { useEffect, useState } from "react";
import { MdOutlineDirectionsWalk, MdFastfood } from 'react-icons/md';
import { BiDumbbell } from 'react-icons/bi';

import UserRow from "./UserRow";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Total Users: {users.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>

              <th>
                <div className="flex flex-row items-center">
                  <MdOutlineDirectionsWalk className="text-3xl mr-2" />
                  <span className="text-2xl">Steps</span>
                </div>
              </th>

              <th>
                <div className="flex flex-row items-center">
                  <BiDumbbell className="text-3xl mr-3" />
                  <span className="text-2xl">Workout</span>
                </div>
              </th>

              <th>
                <div className="flex flex-row items-center">
                  <MdFastfood className="text-3xl mr-3" />
                  <span className="text-2xl">Nutrition</span>
                </div>
              </th>

              <th></th>
            </tr>
          </thead>
          <tbody >
            {users.map((user) => (
              <UserRow key={user.userId} user={user}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
