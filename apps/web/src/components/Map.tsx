'use client'

import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react"

export default function Map({ lat, lng, height }: { lat: number, lng: number, height: number }) {

    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
                version: "weekly",
            })

            const { Map } = await loader.importLibrary('maps');
            const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

            const position = {
                lat: lat,
                lng: lng
            }

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 15,
                mapId: "MY_NEXTJS_MAPID"
            }

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            const marker = new Marker({
                position: position,
                map: map
            })
        }

        initMap()
    }, [lat, lng])
    return (
        <div className={`h-[${height}px]`} ref={mapRef} />
    )
}