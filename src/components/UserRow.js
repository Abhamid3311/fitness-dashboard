import React from "react";
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PieChart } from 'react-minimal-pie-chart';
import { MdManageAccounts } from 'react-icons/md';
import { TbCalendarTime } from 'react-icons/tb';
import { BsChevronRight, BsBell } from 'react-icons/bs';

import './UserRow.css';

const UserRow = ({ user }) => {
  const {
    userId,
    name,
    email,
    img,
    stepsWalked,
    stepsTarget,
    performedDate,
    scheduledDate,
    calorieIntake,
    calorieTarget,
    proteinConsumed,
    proteinTarget,
    carbConsumed,
    carbTarget,
    fatConsumed,
    fatTarget,
  } = user;

  const percenrage = (stepsWalked / stepsTarget) * 100;

  const data =
    [
      { title: 'One', value: 10, color: '#B93160' },
      { title: 'Two', value: 15, color: '#EED180' },
      { title: 'Three', value: 20, color: '#B2A4FF' },
    ];


  return (
    <tr className="row-clr">
      <td >
        <div className="flex flex-row">
          <img src={img} className='w-16 mr-6' alt="" />
          <div>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm">{email}</p>
          </div>
        </div>
      </td>

      {/* Steps */}

      <td>
        <div className="flex flex-row items-center justify-left">
          <div style={{ width: '100px', height: '100px' }} className="mr-6">
            <CircularProgressbarWithChildren value={`${percenrage}`} styles={buildStyles({
              textColor: "black",
              pathColor: "#50C878",
              trailColor: "black"
            })}>
              <h2 className="font-bold text-xl">{stepsWalked}</h2>
              <div style={{ fontSize: 12, marginTop: -5 }}>
                <p> <small className="text-sm">Walked</small></p>
              </div>
            </CircularProgressbarWithChildren>;
          </div>
          <div>
            <button class="btn btn-xs w-full  font-bold">+</button>
            <h2 className="text-2xl font-bold ">{stepsTarget}</h2>
            <p className="font-semibold ">target</p>
            <button class="btn btn-xs w-full font-bold">-</button>
          </div>
        </div>
      </td>

      {/* Workout */}

      <td>
        <div className="flex flex-row items-center">
          <div>
            <div className="flex flex-row mb-3">
              <h3><strong><MdManageAccounts className="text-3xl mr-2" /></strong></h3>
              <h3 className="text-2xl font-bold">{performedDate}</h3>
            </div>

            <div className="flex flex-row">
              <h3><strong><TbCalendarTime className="text-3xl mr-2" /></strong></h3>
              <h3 className="text-2xl font-bold">{scheduledDate}</h3>
            </div>
          </div>

          <button class="btn h-20 ml-3"><BsChevronRight className="text-xl" /></button>
        </div>
      </td>

      {/* Nutrition */}

      <td>
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center justify-left">
            <div style={{ width: '100px', height: '100px' }} className="mr-6">
              <PieChart
                labelStyle={{
                  fontSize: "5px",
                  fill: "#000"
                }}
                labelPosition={63}
                lineWidth={20}
                label={({ dataEntry }) =>
                  `${dataEntry.title} ${Math.round(dataEntry.percentage)}%`
                }
                data={data}
              />
            </div>
            <div>
              <button class="btn btn-xs w-full  font-bold">+</button>
              <h2 className="text-2xl font-bold ">{stepsTarget}</h2>
              <p className="font-semibold ">target</p>
              <button class="btn btn-xs w-full font-bold">-</button>
            </div>
          </div>
          <button class="btn  h-20 ml-3"><BsChevronRight /></button>
        </div>
      </td>

      <td>
        <button class="btn  h-20 ml-3 bg-emerald-400 text-black text-2xl font-bold" ><BsBell /></button>
      </td>
    </tr>
  );
};

export default UserRow;
