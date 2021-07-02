import React, { useRef, useEffect } from "react";

import Graphic from '@arcgis/core/Graphic';

import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';

import Legend from '@arcgis/core/widgets/Legend';
import ScaleBar from '@arcgis/core/widgets/ScaleBar';
// import Directions from '@arcgis/core/widgets/Directions';
import LayerList from '@arcgis/core/widgets/LayerList';
import Home from '@arcgis/core/widgets/Home';
import Locate from '@arcgis/core/widgets/Locate';
// import Expand from '@arcgis/core/widgets/Expand';

import config from '../config.json';

function MyMap(props) {

  const mapDiv = useRef(null);

  useEffect(function () {
    console.log("mapa");

    const webmap = new WebMap({
      portalItem: {
        // autocasts as new PortalItem()
        id: config.IDwebMap
      }
    });

    webmap.load().then(() => {
      console.log("webmap", webmap);
      console.log("webmap.layers", webmap.layers);
      // const layer = webmap.layers.find(({ id }) => {
      //   return id.indexOf("CensusTractPoliticalAffiliation Totals") > -1;
      // });
      // layer.definitionExpression = "TOTPOP_CY > 10000"
      const view = new MapView({
        map: webmap,
        // container: "viewDiv"
        container: mapDiv.current
        // ,
        // ui: {
        //   components: ["attribution"] // empty the UI, except for attribution
        // }
      });

      var scaleBar = new ScaleBar({
        unit: "metric",
        view: view
      });

      // Add widget to the bottom left corner of the view
      view.ui.add(scaleBar, {
        position: "bottom-left"
      });

      var locateWidget = new Locate({
        view: view,   // Attaches the Locate button to the view
        graphic: new Graphic({
          symbol: { type: "simple-marker" }  // overwrites the default symbol used for the
          // graphic placed at the location of the user when found
        })
      });

      view.ui.add(locateWidget, "top-left");

      var homeWidget = new Home({
        view: view
      });

      // adds the home widget to the top left corner of the MapView
      view.ui.add(homeWidget, "top-left");

      var layerList = new LayerList({
        view: view
      });
      // Adds widget below other elements in the top left corner of the view
      view.ui.add(layerList, {
        position: "top-left"
      });

      view.when(function () {
        // get the first layer in the collection of operational layers in the WebMap
        // when the resources in the MapView have loaded.
        console.log("webmap", webmap);
        console.log("webmap.layers", webmap.layers);

        var featureLayer = webmap.layers.getItemAt(0);

        var legend = new Legend({
          view: view,
          layerInfos: [{
            layer: featureLayer,
            title: "Puntos"
          }]
        });

        // Add widget to the bottom right corner of the view
        view.ui.add(legend, "bottom-right");
      });

    });

    // const view = new MapView({
    //   map: webmap,
    //   container: "viewDiv"
    // });

  }, []);

  const myMapStyle = {
    // padding: 0,
    // margin: 0,
    // height: "400px",
    // width: "100%",
    border: "solid 2px blue"
  }
  return <div style={myMapStyle} ref={mapDiv}></div>
}
export default MyMap;