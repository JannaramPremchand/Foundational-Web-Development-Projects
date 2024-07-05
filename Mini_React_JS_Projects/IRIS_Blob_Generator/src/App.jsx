import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [value, setValue] = useState({
    radiusOne: 30,
    radiusTwo: 80,
    radiusThree: 60,
    radiusFour: 40,
    blobHeight: 350,
    blobWidth: 350,
  });
  const [valueColor, setValueColor] = useState({
    colorOne: "#B6FFFA",
    colorTwo: "#80B3FF",
  });
  const [borderRadius, setBorderRadius] = useState(0);
  const [outputCode, setOutputCode] = useState("");

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: parseInt(e.target.value) });
    setValueColor({ ...valueColor, [e.target.name]: e.target.value });

    let updatedBorderRadius = `${value.radiusOne}% ${100 - value.radiusOne}% ${
      100 - value.radiusThree
    }% ${value.radiusThree}% / ${value.radiusFour}% ${value.radiusTwo}% ${
      100 - value.radiusTwo
    }% ${100 - value.radiusFour}%`;
    setBorderRadius(updatedBorderRadius);
    setOutputCode(
      `border-radius: ${updatedBorderRadius}; background: ${`linear-gradient(to bottom,  ${valueColor.colorOne} 0%,${valueColor.colorTwo} 100%)`}`
    );
  };

  return (
    <div className="container-fluid py-4 bg-dark">
      <div className="App">
        <h1 className="text-center mb-4 text-light">Blob Generator</h1>
        <div className="row justify-content-center align-items-center">
          {/* Left Side - Blob Output */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="blob-output p-4 ">
              <div
                id="blob"
                style={{
                  borderRadius: `${borderRadius}`,
                  height: `${value.blobHeight}px`,
                  width: `${value.blobWidth}px`,
                  background: `linear-gradient(to bottom,  ${valueColor.colorOne} 0%,${valueColor.colorTwo} 100%)`,
                }}
              ></div>
            </div>
          </div>

          {/* Right Side - Input Controls */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="input-controls p-4 bg-dark rounded shadow-lg">
              <div className="mb-4 d-flex align-items-center">
                <div className="me-3">
                  <label htmlFor="blob-height" className="form-label text-light">Height</label>
                  <input
                    type="number"
                    className="form-control"
                    id="blob-height"
                    name="blobHeight"
                    value={value.blobHeight}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="blob-width" className="form-label text-light">Width</label>
                  <input
                    type="number"
                    className="form-control"
                    id="blob-width"
                    name="blobWidth"
                    value={value.blobWidth}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="colors" className="form-label text-light">Select Colors</label>
                <div className="d-flex align-items-center">
                  <input
                    type="color"
                    className="form-control form-control-color me-2"
                    name="colorOne"
                    value={valueColor.colorOne}
                    onChange={handleChange}
                  />
                  <input
                    type="color"
                    className="form-control form-control-color"
                    name="colorTwo"
                    value={valueColor.colorTwo}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label text-light">Adjust Curvature</label>
                <input
                  type="range"
                  className="form-range"
                  name="radiusOne"
                  value={value.radiusOne}
                  onChange={handleChange}
                />
                <input
                  type="range"
                  className="form-range mt-2"
                  name="radiusTwo"
                  value={value.radiusTwo}
                  onChange={handleChange}
                />
                <input
                  type="range"
                  className="form-range mt-2"
                  name="radiusThree"
                  value={value.radiusThree}
                  onChange={handleChange}
                />
                <input
                  type="range"
                  className="form-range mt-2"
                  name="radiusFour"
                  value={value.radiusFour}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="form-label text-light">CSS Output</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={outputCode}
                  readOnly
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    navigator.clipboard.writeText(outputCode);
                  }}
                >
                  Copy CSS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
