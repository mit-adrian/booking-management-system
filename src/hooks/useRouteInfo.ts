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
    if (!pickup || !dropoff) {
      return;
    }

    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: pickup,
        destination: dropoff,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (
          status === google.maps.DirectionsStatus.OK &&
          result?.routes?.length
        ) {
          const leg = result.routes[0].legs[0];

          setRouteInfo({
            distanceText: leg.distance?.text || "",
            durationText: leg.duration?.text || "",
          });
        } else {
          setRouteInfo(null);
        }
      },
    );
  }, [pickup, dropoff]);

  return routeInfo;
}
