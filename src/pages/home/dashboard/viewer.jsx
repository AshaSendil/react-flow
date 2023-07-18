import React from "react";
import Expander from "../../../assets/Images/expander.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { TextField } from "@mui/material";
import { Slider, Switch } from "antd";
import { useState } from "react";
export default function Viewer() {
  const [hideDetails, setHideDetails] = useState(false);
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const formatter = (value) => `${value}%`;

  const handleHide = () => {
    setHideDetails(true);
  };
  return (
    <div>
      <div className="flex justify-between px-2 py-2 mt-2 bg-gray-700 rounded-md">
        <div>
          <img src={Expander} alt="expander" />
        </div>
        <div className="flex">
          <span className="px-2">
            <span className="font-bold text-white">
              repellat voluptates corrupti
            </span>
            <br />
            <span>magnam veniam voluptatem</span>
          </span>
          <span className="text-white">
            <button onClick={() => handleHide()}>
              <MoreHorizIcon />
            </button>
          </span>
        </div>
      </div>
      {hideDetails ? (
        <>
          <div class="border-2 border-gray-600 text-white text-center py-2">
            <span>Node Name</span>
          </div>
          <div class="border-2 border-gray-600 text-white text-center py-2">
            <span>Node Name</span>
          </div>
          <div class="border-2 border-gray-600 text-white text-center py-2">
            <span>Node Name</span>
          </div>
          <div className="flex">
            <div class="border-2 border-gray-600 text-white text-center px-7 py-2">
              <span>Node Name</span>
            </div>
            <div class="border-2 border-gray-600 text-white text-center px-7 py-2">
              <span>Node Name</span>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-white px-2 py-2">sit nihil expedita</span>
            <div className="mt-2">
              <Switch
                defaultChecked
                onChange={onChange}
                style={{ backgroundColor: "blue" }}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white">Earum dolorem</span>
            <Slider
              tooltip={{
                formatter,
              }}
            />{" "}
            <span className="text-white">Earum dolorem</span>
            <Slider
              tooltip={{
                formatter,
              }}
            />{" "}
            <span className="text-white">Earum dolorem</span>
            <Slider
              tooltip={{
                formatter,
              }}
            />{" "}
          </div>
        </>
      ) : (
        ``
      )}
    </div>
  );
}
