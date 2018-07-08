import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import CesiumViewer from './Components/Viewer/Viewer' 


const Index = () => (
    <div>
        <CesiumViewer />
    </div>
);

ReactDOM.render(<Index />, document.getElementById("index"));