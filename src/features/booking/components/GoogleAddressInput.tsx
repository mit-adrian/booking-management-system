/// <reference types="google.maps" />

import { useRef, useEffect } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSelect: (value: string) => void;
  placeholder?: string;
  className?: string;
  types?: string[];
}

export function GoogleAddressInput({
  value,
  onChange,
  onSelect,
  placeholder,
  className,
  types = ["geocode"],
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!window.google || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types,
      },
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.formatted_address) {
        onSelect(place.formatted_address);
      }
    });
  }, [onSelect, types]);

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
    />
  );
}
