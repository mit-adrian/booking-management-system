/// <reference types="google.maps" />

import { useEffect, useState } from "react";

interface RouteInfo {
  distanceText: string;
  durationText: string;
}

export function useRouteInfo(
  pickup: string,
  dropoff: string,
): RouteInfo | null {
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);

  useEffect(() => {
    if (!pickup || !dropoff || !window.google) {
      return; // 🚀 Just exit. No setState here.
    }

    const service = new window.google.maps.DistanceMatrixService();

    service.getDistanceMatrix(
      {
        origins: [pickup],
        destinations: [dropoff],
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.IMPERIAL,
      },
      (response, status) => {
        if (
          status === "OK" &&
          response?.rows[0]?.elements[0]?.status === "OK"
        ) {
          const element = response.rows[0].elements[0];

          setRouteInfo({
            distanceText: element.distance.text,
            durationText: element.duration.text,
          });
        } else {
          setRouteInfo(null);
        }
      },
    );
  }, [pickup, dropoff]);

  return routeInfo;
}
