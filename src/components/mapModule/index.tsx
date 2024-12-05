'use client'

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import locations from '@/data/locations.json';

// SVG иконки маркеров
const defaultIcon = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="32px" viewBox="0 0 24 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Oval Copy 10</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <path d="M317,219 C323.666667,211.348565 327,205.681898 327,202 C327,196.477153 322.522847,192 317,192 C311.477153,192 307,196.477153 307,202 C307,205.681898 310.333333,211.348565 317,219 Z" id="path-1"></path>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-908.000000, -421.000000)" stroke-width="2">
            <g transform="translate(303.000000, 231.000000)">
                <g transform="translate(300.000000, 0.000000)">
                    <path stroke="#325F6A" d="M317,217.469442 C323.009533,210.437185 326,205.22639 326,202 C326,197.029437 321.970563,193 317,193 C312.029437,193 308,197.029437 308,202 C308,205.22639 310.990467,210.437185 317,217.469442 Z"></path>
                    <path stroke="#EFEFEF" d="M316.246041,219.656922 C309.426101,211.829572 306,206.005201 306,202 C306,195.924868 310.924868,191 317,191 C323.075132,191 328,195.924868 328,202 C328,206.005201 324.573899,211.829572 317.753959,219.656922 L317,220.522252 L316.246041,219.656922 Z"></path>
                </g>
            </g>
        </g>
    </g>
</svg>`;

const activeIcon = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="32px" viewBox="0 0 24 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Oval Copy 2</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <path d="M146,163 C152.666667,155.348565 156,149.681898 156,146 C156,140.477153 151.522847,136 146,136 C140.477153,136 136,140.477153 136,146 C136,149.681898 139.333333,155.348565 146,163 Z" id="path-1"></path>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-737.000000, -365.000000)">
            <g transform="translate(303.000000, 231.000000)">
                <g transform="translate(300.000000, 0.000000)">
                    <g>
                        <use fill="#325F6A" fill-rule="evenodd" xlink:href="#path-1"></use>
                        <path stroke="#EFEFEF" stroke-width="2" d="M145.246041,163.656922 C138.426101,155.829572 135,150.005201 135,146 C135,139.924868 139.924868,135 146,135 C152.075132,135 157,139.924868 157,146 C157,150.005201 153.573899,155.829572 146.753959,163.656922 L146,164.522252 L145.246041,163.656922 Z"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`;

// Стили карты
const mapStyles = [
    {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#d3d3d3" }]
    },
    {
        featureType: "transit",
        stylers: [{ color: "#808080" }, { visibility: "off" }]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ visibility: "on" }, { color: "#b3b3b3" }]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffffff" }]
    },
    {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [{ visibility: "on" }, { color: "#ffffff" }, { weight: 1.8 }]
    },
    {
        featureType: "road.local",
        elementType: "geometry.stroke",
        stylers: [{ color: "#d7d7d7" }]
    },
    {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [{ visibility: "on" }, { color: "#ebebeb" }]
    },
    {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [{ color: "#a7a7a7" }]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffffff" }]
    },
    {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [{ visibility: "on" }, { color: "#efefef" }]
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#696969" }]
    },
    {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{ visibility: "on" }, { color: "#737373" }]
    },
    {
        featureType: "poi",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
    },
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [{ color: "#d6d6d6" }]
    },
    {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
    },
    {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [{ color: "#dadada" }]
    }
];


interface MapModuleProps {
    selectedLocation?: typeof locations[0];
    userPosition?: { lat: number; lng: number } | null;
    onLocationSelect?: (location: typeof locations[0]) => void;
}

export const MapModule: React.FC<MapModuleProps> = ({ 
    selectedLocation, 
    userPosition,
    onLocationSelect 
 }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const markersRef = useRef<google.maps.Marker[]>([]);
    const currentInfoWindow = useRef<google.maps.InfoWindow | null>(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: 'AIzaSyAsH3BExP_FXmwSJrwoUIMLEU02KEFFSVA' || '',
                version: 'weekly',
                libraries: ['maps', 'marker', 'places', 'geometry']
            });

            try {
                await loader.load();

                const mapInstance = new google.maps.Map(mapRef.current!, {
                    center: selectedLocation
                        ? { lat: parseFloat(selectedLocation.lat), lng: parseFloat(selectedLocation.lng) }
                        : { lat: 39.8283, lng: -98.5795 },
                    zoom: selectedLocation ? 15 : 4,
                    maxZoom: 16,
                    mapTypeId: 'styled_map',
                    fullscreenControl: false,
                    mapTypeControl: true,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                        position: google.maps.ControlPosition.TOP_LEFT,
                        mapTypeIds: ['styled_map', 'satellite']
                    },
                    zoomControl: false,
                    streetViewControl: false,
                    styles: []
                });

                const styledMapType = new google.maps.StyledMapType(
                    mapStyles,
                    { name: 'Styled Map' } as google.maps.StyledMapTypeOptions
                );

                mapInstance.mapTypes.set('styled_map', styledMapType);
                mapInstance.setMapTypeId('styled_map');

                const bounds = new google.maps.LatLngBounds();

                // Очищаем старые маркеры
                markersRef.current.forEach(marker => marker.setMap(null));
                markersRef.current = [];

                if (selectedLocation) {
                    const position = new google.maps.LatLng(
                        parseFloat(selectedLocation.lat),
                        parseFloat(selectedLocation.lng)
                    );

                    const marker = new google.maps.Marker({
                        position,
                        map: mapInstance,
                        title: selectedLocation.name,
                        icon: {
                            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(activeIcon),
                            scaledSize: new google.maps.Size(20, 27),
                            labelOrigin: new google.maps.Point(10, 12)
                        },
                        zIndex: 2
                    });

                    const content = `
                        <div class="p-4">
                            <p class="font-bold mb-2">${selectedLocation.name}</p>
                            ${selectedLocation.phone ? `<p class="text-sm text-gray-600">Phone: ${selectedLocation.phone}</p>` : ''}
                            <p class="text-sm mt-2">${selectedLocation.address}</p>
                        </div>
                    `;

                    const infoWindow = new google.maps.InfoWindow({ content });
                    infoWindow.open(mapInstance, marker);
                    currentInfoWindow.current = infoWindow;

                    markersRef.current.push(marker);
                    mapInstance.setCenter(position);
                } else if (userPosition) {
                    // Ищем ближайший магазин
                    let nearestStore = locations[0];
                    let shortestDistance = Number.MAX_VALUE;
    
                    locations.forEach(location => {
                        const distance = google.maps.geometry.spherical.computeDistanceBetween(
                            new google.maps.LatLng(userPosition.lat, userPosition.lng),
                            new google.maps.LatLng(parseFloat(location.lat), parseFloat(location.lng))
                        );
    
                        if (distance < shortestDistance) {
                            shortestDistance = distance;
                            nearestStore = location;
                        }
                    });
    
                    if (onLocationSelect) {
                        onLocationSelect(nearestStore);
                    }
    
                    // Показываем ближайший магазин
                    const position = new google.maps.LatLng(
                        parseFloat(nearestStore.lat),
                        parseFloat(nearestStore.lng)
                    );
    
                    const marker = new google.maps.Marker({
                        position,
                        map: mapInstance,
                        title: nearestStore.name,
                        icon: {
                            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(activeIcon),
                            scaledSize: new google.maps.Size(20, 27),
                            labelOrigin: new google.maps.Point(10, 12)
                        },
                        zIndex: 2
                    });
    
                    const content = `
                        <div class="p-4">
                            <p class="font-bold mb-2">${nearestStore.name}</p>
                            ${nearestStore.phone ? `<p class="text-sm">Phone: ${nearestStore.phone}</p>` : ''}
                            <p class="text-sm mt-2">${nearestStore.address}</p>
                            <p class="text-sm mt-2">Ближайший к вам магазин</p>
                        </div>
                    `;
    
                    const infoWindow = new google.maps.InfoWindow({ content });
                    infoWindow.open(mapInstance, marker);
                    currentInfoWindow.current = infoWindow;
    
                    markersRef.current.push(marker);
                    mapInstance.setCenter(position);
                } else {
                    locations.forEach((location) => {
                        if (location.lat && location.lng) {
                            const position = new google.maps.LatLng(
                                parseFloat(location.lat),
                                parseFloat(location.lng)
                            );

                            bounds.extend(position);

                            const marker = new google.maps.Marker({
                                position,
                                map: mapInstance,
                                title: location.name,
                                icon: {
                                    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(defaultIcon),
                                    scaledSize: new google.maps.Size(20, 27),
                                    labelOrigin: new google.maps.Point(10, 12)
                                },
                                zIndex: 1
                            });

                            markersRef.current.push(marker);

                            const content = `
                                <div class="p-4">
                                    <p class="font-bold mb-2">${location.name}</p>
                                    ${location.phone ? `<p class="text-sm text-gray-600">Phone: ${location.phone}</p>` : ''}
                                    <p class="text-sm mt-2">${location.address}</p>
                                </div>
                            `;

                            const infoWindow = new google.maps.InfoWindow({ content });

                            marker.addListener('click', () => {
                                if (currentInfoWindow.current) {
                                    currentInfoWindow.current.close();
                                }

                                markersRef.current.forEach(m => {
                                    m.setZIndex(1);
                                    m.setIcon({
                                        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(defaultIcon),
                                        scaledSize: new google.maps.Size(20, 27),
                                        labelOrigin: new google.maps.Point(10, 12)
                                    });
                                });

                                marker.setZIndex(2);
                                marker.setIcon({
                                    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(activeIcon),
                                    scaledSize: new google.maps.Size(20, 27),
                                    labelOrigin: new google.maps.Point(10, 12)
                                });

                                infoWindow.open(mapInstance, marker);
                                currentInfoWindow.current = infoWindow;
                            });
                        }
                    });

                    mapInstance.fitBounds(bounds);
                }

                setMap(mapInstance);

            } catch (error) {
                console.error('Error loading Google Maps:', error);
            }
        };

        initMap();

        // Очистка при размонтировании
        return () => {
            if (currentInfoWindow.current) {
                currentInfoWindow.current.close();
            }
            markersRef.current.forEach(marker => marker.setMap(null));
            markersRef.current = [];
        };
    }, [selectedLocation, userPosition]);

    return (
        <div className="relative w-full h-[600px] bg-gray-100 text-black">
            {/* Контейнер карты */}
            <div ref={mapRef} className="absolute inset-0" />

            {/* Кнопки зума */}
            <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
                <button
                    onClick={() => map?.setZoom((map.getZoom() || 0) + 1)}
                    className="w-8 h-8 bg-white rounded-md shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50"
                >
                    +
                </button>
                <button
                    onClick={() => map?.setZoom((map.getZoom() || 0) - 1)}
                    className="w-8 h-8 bg-white rounded-md shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50"
                >
                    −
                </button>
            </div>
        </div>
    );
};