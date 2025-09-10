import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Instead of using L.Icon, we'll create a custom animated icon as a React component

const AnimatedMarkerIcon = () => (
  <div className="animated-marker">
    <img
      src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
      alt="Marker Icon"
      className="w-8 h-8"
    />
  </div>
);

const reports = [
  { id: 1, lat: 23.3441, lng: 85.3096, title: "Pothole in Ranchi" },
  { id: 2, lat: 23.3701, lng: 85.3251, title: "Streetlight Outage" },
  { id: 3, lat: 23.3561, lng: 85.3121, title: "Garbage Overflow" },
  { id: 4, lat: 23.3480, lng: 85.3150, title: "Water Leakage" },
  { id: 5, lat: 23.3605, lng: 85.3200, title: "Broken Bench in Park" },
  { id: 6, lat: 23.3350, lng: 85.2980, title: "Road Crack" },
  { id: 7, lat: 23.3420, lng: 85.3050, title: "Electric Pole Damage" },
  { id: 8, lat: 23.3650, lng: 85.3100, title: "Illegal Dumping Spot" },
  { id: 9, lat: 23.3500, lng: 85.3000, title: "Traffic Signal Not Working" },
  { id: 10, lat: 23.3400, lng: 85.3200, title: "Street Vendor Complaint" },
  { id: 11, lat: 23.3550, lng: 85.3000, title: "Public Toilet Maintenance" },
  { id: 12, lat: 23.3620, lng: 85.3180, title: "Noise Pollution Report" },
  { id: 13, lat: 23.3380, lng: 85.3100, title: "Tree Plantation Request" },
];


const MapSection = () => {
  return (
    <>
      {/* Animation styles */}
      <style>{`
        /* Popup fade & scale in */
        .leaflet-popup-content-wrapper {
          animation: popupIn 0.3s ease forwards;
          transform-origin: bottom center;
        }

        .leaflet-popup.leaflet-zoom-animated.leaflet-fade-anim.leaflet-popup-close {
          animation: popupOut 0.2s ease forwards !important;
        }

        @keyframes popupIn {
          0% {
            opacity: 0;
            transform: scale(0.7);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes popupOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.7);
          }
        }

        /* Marker grow/shrink animation */
        .animated-marker img {
          animation: pulse 2s infinite ease-in-out;
          transform-origin: center;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }
      `}</style>

      <div className="relative z-10 bg-white shadow-md rounded-2xl p-5">
        <h2 className="text-xl font-bold mb-4">Reported Issues Map</h2>
        <div className="h-[400px] w-full rounded-xl overflow-hidden relative z-0">
          <MapContainer
            center={[23.3441, 85.3096]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
            className="rounded-xl"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {reports.map((report) => (
              <Marker
                key={report.id}
                position={[report.lat, report.lng]}
                // Using a divIcon to render the custom animated React component
                icon={L.divIcon({
                  className: "custom-div-icon",
                  html: `<div class="animated-marker"><img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" style="width:32px; height:32px;" /></div>`,
                  iconSize: [32, 32],
                  iconAnchor: [16, 32],
                })}
              >
                <Popup>{report.title}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default MapSection;
