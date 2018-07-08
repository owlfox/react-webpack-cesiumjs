import React, {Component} from "react";
import classes from './Viewer.css'
import Cesium from 'cesium/Cesium';

class Viewer extends Component {
    componentDidMount(){
        var viewer = new Cesium.Viewer('cesiumContainer');
    }
    

    render() {
        return (
        <div id="cesiumContainer">
            
        </div>
        )
    }
}
export default Viewer