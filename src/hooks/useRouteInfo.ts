import { useEffect, useState } from "react";

interface RouteInfo {
  distanceText: string;
  durationText: string;
}

export function useRouteInfo(pickupAddress: string, dropoffAddress: string) {
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);

  useEffect(() => {
    if (!window.google) return;
    if (!pickupAddress || !dropoffAddress) return;

    const service = new window.google.maps.DirectionsService();

    service.route(
      {
        origin: pickupAddress,
        destination: dropoffAddress,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result?.routes[0]?.legs[0]) {
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
  }, [pickupAddress, dropoffAddress]);

  if (!pickupAddress || !dropoffAddress) {
    return null;
  }

  return routeInfo;
}
