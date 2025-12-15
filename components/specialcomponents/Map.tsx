"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Ward {
  name: string;
  latitude: number;
  longitude: number;
}

interface LGA {
  name: string;
  wards: Ward[];
}

interface StateData {
  state: string;
  lgas: LGA[];
}

export default function NigeriaThreatMap() {
  const [data, setData] = useState<StateData[]>([]);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  // Demo hotspot for AI threat
  const hotspot = "Borno";

  // Load JSON from public folder
  useEffect(() => {
    fetch("/full.json")
      .then((res) => res.json())
      .then((json: StateData[]) => setData(json))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  // Optional: Generate state polygons (if you have a separate states GeoJSON file)
  const [statesGeoJson, setStatesGeoJson] = useState<any>(null);

  useEffect(() => {
    // Replace this URL with a real Nigeria states GeoJSON
    fetch("/nigeria_states.geojson")
      .then((res) => res.json())
      .then((geo) => setStatesGeoJson(geo))
      .catch((err) => console.warn("States GeoJSON not loaded", err));
  }, []);

  const stateStyle = (feature: any) => ({
    fillColor:
      feature.properties.name === hotspot
        ? "#dc2626"
        : "#d1d5db", // default gray
    weight: 1,
    color: "#1f2937",
    fillOpacity: 0.7,
  });

  const onEachState = (feature: any, layer: any) => {
    layer.on({
      mouseover: () => setHoveredState(feature.properties.name),
      mouseout: () => setHoveredState(null),
    });
  };

  return (
    <div className="w-full h-[700px]">
      <MapContainer
        center={[9.082, 8.6753]}
        zoom={6}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* State polygons */}
        {statesGeoJson && (
          <GeoJSON
            data={statesGeoJson}
            style={stateStyle}
            onEachFeature={onEachState}
          />
        )}

        {/* Ward markers */}
        {/* {data.map((state) =>
          state.lgas.map((lga) =>
            lga.wards.map((ward) => (
              <CircleMarker
                key={`${state.state}-${lga.name}-${ward.name}`}
                center={[ward.latitude, ward.longitude]}
                radius={5}
                pathOptions={{
                  color:
                    state.state === hotspot ? "#dc2626" : "#2563eb", // red hotspot, blue otherwise
                  fillOpacity: 0.8,
                }}
                eventHandlers={{
                  mouseover: () => setHoveredState(state.state),
                  mouseout: () => setHoveredState(null),
                }}
              />
            ))
          )
        )} */}
      </MapContainer>

      <p className="text-center mt-4 font-semibold text-lg">
        {hoveredState ? hoveredState : "Hover over a state"}
      </p>
    </div>
  );
}
