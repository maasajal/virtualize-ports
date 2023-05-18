import { useEffect, useRef, useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

import "./Map.css";

// Marker with images icon
import VIP_Parking from "../assets/images/carPark.png";
import Parking_2 from "../assets/images/carPark.png";
import Parking_3 from "../assets/images/parking-icon.png";
import Parking_4 from "../assets/images/parking-icon.png";
import Parking_5 from "../assets/images/missionmarker.png";

import ChangeMapType from "./Layers/ChangeMapType";

const GoogleMaps = (props) => {
  const { isLoaded } = props;
  const [selectedMarker, setSelectedMarker] = useState("");

  const containerStyle = {
    width: "100vw",
    height: "80vh",
  };
  const center = {
    lat: 60.163712,
    lng: 24.969705,
  };

  const markers = [
    {
      name: "VIP Parking area",
      status: "VIP_Parking",
      location: {
        lat: 60.163731,
        lng: 24.97027,
      },
    },
    {
      name: "Parking area 2",
      status: "Parking_2",
      location: {
        lat: 60.164236,
        lng: 24.971627,
      },
    },
    {
      name: "Parking area 3",
      status: "Parking_3",
      location: {
        lat: 60.164046,
        lng: 24.971177,
      },
    },
    {
      name: "Parking area 4",
      status: "Parking_4",
      location: {
        lat: 60.1646,
        lng: 24.9728,
      },
    },
    {
      name: "Before check-in parking area",
      status: "Parking_5",
      location: {
        lat: 60.1651,
        lng: 24.9738,
      },
    },
  ];

  const [changeMyTypeID, setToggleChangeMyTypeID] = useState(1);
  const mapRef = useRef(null);

  const onMapLoad = (mapInstance) => {
    mapRef.current = mapInstance;
  };
  console.log("mapRefCurrent", mapRef.current);

  const MapType = {
    roadmap: "roadmap",
    satellite: "satellite",
    hybrid: "hybrid",
    terrain: "terrain",
  };
  const handleMapToggle = () => {
    if (changeMyTypeID === 0) {
      setToggleChangeMyTypeID(1);
    } else if (changeMyTypeID === 1) {
      setToggleChangeMyTypeID(2);
    } else if (changeMyTypeID === 2) {
      setToggleChangeMyTypeID(3);
    } else if (changeMyTypeID === 3) {
      setToggleChangeMyTypeID(4);
    } else if (changeMyTypeID === 4) {
      setToggleChangeMyTypeID(1);
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      if (changeMyTypeID === 1) {
        mapRef.current.setMapTypeId(MapType.roadmap);
      } else if (changeMyTypeID === 2) {
        mapRef.current.setMapTypeId(MapType.terrain);
      } else if (changeMyTypeID === 3) {
        mapRef.current.setMapTypeId(MapType.satellite);
      } else if (changeMyTypeID === 4) {
        mapRef.current.setMapTypeId(MapType.hybrid);
      }
    }
  }, [changeMyTypeID]);

  console.log(changeMyTypeID);

  return (
    isLoaded && (
      <>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          onLoad={onMapLoad}
        >
          {markers.map((marker) => {
            return (
              <div key={marker.name}>
                <Marker
                  position={marker.location}
                  options={{
                    icon:
                      marker.status === "VIP_Parking"
                        ? VIP_Parking
                        : marker.status === "Parking_3"
                        ? Parking_3
                        : marker.status === "Parking_2"
                        ? Parking_2
                        : marker.status === "Parking_5"
                        ? Parking_5
                        : marker.status === "Parking_4"
                        ? Parking_4
                        : "",
                  }}
                  onClick={() => {
                    setSelectedMarker(marker);
                  }}
                />
              </div>
            );
          })}

          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.location}
              options={{
                pixelOffset: new window.google.maps.Size(0, -40),
              }}
              onClick={props.openModal}
            >
              <div>
                <h1>Optimized: - {selectedMarker.name}</h1>
                <h1>Prioritized: - {selectedMarker.status}</h1>

                {/* <div id="packing">
                  <h2>Optimization</h2>
                  <canvas id="canvas">
                    <div id="unsupported">
                      Sorry, this example cannot be run because your browser
                      does not support the &lt;canvas&gt; element
                    </div>
                  </canvas>
                </div> */}

                <button onClick={() => setSelectedMarker("")}>Close</button>
              </div>
            </InfoWindow>
          )}

          <ChangeMapType handleMapToggle={handleMapToggle} />
        </GoogleMap>
      </>
    )
  );
};

export default GoogleMaps;
