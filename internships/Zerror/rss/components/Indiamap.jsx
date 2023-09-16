import { useState, useEffect, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_indiaLow from "@amcharts/amcharts5-geodata/indiaLow";
import { polygon } from "leaflet";

const IndiaMap = () => {
  useLayoutEffect(() => {
    // Create root and chart
    let root = am5.Root.new("chartdiv");
    root._logo.dispose();
    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        strokeWidth: 3,
        draggable: false,
        maxZoomLevel: 1,
        panX: false,
        panY: false,
      })
    );

    // Create polygon series
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_indiaLow,
        fillOpacity: 1, // set fill opacity to 0.5 (50% transparent)
        strokeOpacity: 1, // set stroke opacity to 0.8 (80% transparent)
        fill: am5.color(0xffffff), // set fill color to black
        stroke: am5.color(0x000000), // set stroke color to black
        strokeWidth: 10, // set stroke width to 2 pixels
        crisp: false, // set to false if you want the map to look blurry
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      // tooltipText: "{name}",
      templateField: "polygonSettings",
    });
    // Set the data for the polygons
    polygonSeries.data.setAll([
      {
        id: "IN-MH",
        polygonSettings: {
          tooltilTextsize: 30,
          tooltipText: "Maharashtra",
          fill: am5.color(0xfc903d),
        },
      },
      {
        id: "IN-GJ",
        polygonSettings: {
          tooltipText: "Gujarat",
          fill: am5.color(0xfc903d),
        },
      },
      {
        id: "IN-UP",
        polygonSettings: {
          tooltipText: "Uttar Pradesh",
          fill: am5.color(0xfc903d),
        },
      },
      {
        id: "IN-AP",
        polygonSettings: {
          tooltipText: "Andhra Pradesh",
          fill: am5.color(0xfc903d),
        },
      },
      {
        id: "IN-PB",
        polygonSettings: {
          tooltipText: "Punjab",
          fill: am5.color(0xfc903d),
        },
      },
      {
        id: "IN-AS",
        polygonSettings: {
          tooltipText: "Assam",
          fill: am5.color(0xfc903d),
        },
      },
    ]);

    // Configure series
    root.current = root; // <--- This is the line that fixed it

    // Clean up on unmount

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      id="chartdiv"
      style={{
        width: "100%",
        height: "80%",
        fontSize: "12px",
        transition: "0.3s all ease",
      }}
    ></div>
  );
  px;
};

export default IndiaMap;
