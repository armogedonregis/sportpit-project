'use client'

import React, { useState } from 'react';
import { MapModule } from '@/components/mapModule';
import locations from '@/data/locations.json';
import { Modal } from '@/components/Modal';
import Image from 'next/image';

export const StoreLocatorScreen = () => {
    const [country, setCountry] = useState('United States');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const locationsPerPage = 24;
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);
    const [userPosition, setUserPosition] = useState<{ lat: number, lng: number } | null>(null);

    const handleFindInStores = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    setIsMapModalOpen(true);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setIsMapModalOpen(true);
                }
            );
        } else {
            setIsMapModalOpen(true);
        }
    };

    const handleMapOpen = (location?: typeof locations[0]) => {
        setSelectedLocation(location || null);
        setIsMapModalOpen(true);
    };

    // Фильтрация локаций
    const filteredLocations = locations.filter(location => {
        const searchLower = searchQuery.toLowerCase();
        return (
            location.name.toLowerCase().includes(searchLower) ||
            location.address.toLowerCase().includes(searchLower)
        );
    });

    // Пагинация
    const totalPages = Math.ceil(filteredLocations.length / locationsPerPage);
    const indexOfLastLocation = currentPage * locationsPerPage;
    const indexOfFirstLocation = indexOfLastLocation - locationsPerPage;
    const currentLocations = filteredLocations.slice(indexOfFirstLocation, indexOfLastLocation);

    // Генерация массива страниц для пагинации
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 10; // Максимальное количество видимых страниц

        if (totalPages <= maxVisiblePages) {
            // Если общее количество страниц меньше максимального, показываем все
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Если текущая страница близка к началу
            if (currentPage <= 6) {
                for (let i = 1; i <= 8; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
            // Если текущая страница близка к концу
            else if (currentPage >= totalPages - 5) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 7; i <= totalPages; i++) {
                    pages.push(i);
                }
            }
            // Если текущая страница в середине
            else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
        }
        return pages;
    };

    return (
        <>
        <div className="lg:max-w-7xl w-full px-5 lg:px-24 mx-auto">
                <h1 className="text-3xl font-bold mb-8">Store locator</h1>

                <div className="mb-8 space-y-4">
                    <div>
                        <label className="block text-sm mb-2">Type your country to find stores and shipping options:</label>
                        <input
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full p-3 border rounded"
                            placeholder="United States"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-3 border rounded"
                            placeholder="Fine tune your search by store name or location (optional)"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <h2 className="text-lg font-semibold">
                        FIND OUR PRODUCTS IN THESE STORES IN {country.toUpperCase()}
                    </h2>
                </div>

                <div className="flex gap-4 mb-6">
                    <button onClick={() => handleMapOpen()} className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50">
                        <span>
                            <Image src={'/icons/on_map_icon.svg'} alt="" width={22} height={22} />
                        </span>
                        Show stores on map
                    </button>
                    <button onClick={handleFindInStores} className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50">
                        <span>
                            <Image src={'/icons/marker_map_icon.svg'} alt="" width={12} height={12} />
                        </span>
                        Find stores near me
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {currentLocations.map((store, index) => (
                        <div key={index} className="border p-4 rounded">
                            <h3 className="font-bold mb-2">{store.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{store.address}</p>
                            {store.phone && (
                                <p className="text-sm text-gray-600 mb-2">{store.phone}</p>
                            )}
                            <div className="flex justify-between items-center">
                                <a
                                    href={'/'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4"
                                >
                                    store website
                                </a>
                                <button onClick={() => handleMapOpen(store)} className="flex items-center gap-1.5">
                                    <span>
                                        <Image src={'/icons/marker_map_icon.svg'} alt="" width={12} height={12} />
                                    </span>
                                    <span className="underline underline-offset-4">
                                        Map
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center gap-2 mb-8">
                    <div className="text-sm text-gray-600">
                        Showing {indexOfFirstLocation + 1}-{Math.min(indexOfLastLocation, filteredLocations.length)} out of total {filteredLocations.length} stores
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 mb-8">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-2 py-1 text-black hover:underline disabled:text-gray-400 disabled:no-underline"
                    >
                        «
                    </button>

                    {getPageNumbers().map((number, index) => (
                        number === '...' ? (
                            <span key={`dots-${index}`} className="px-2">...</span>
                        ) : (
                            <button
                                key={number}
                                onClick={() => setCurrentPage(number as number)}
                                className={`px-2 py-1 ${currentPage === number
                                    ? 'font-bold bg-black text-white'
                                    : 'text-black hover:bg-gray-100'
                                    }`}
                            >
                                {number}
                            </button>
                        )
                    ))}

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-2 py-1 text-black hover:underline disabled:text-gray-400 disabled:no-underline"
                    >
                        »
                    </button>
                </div>

            </div>

            <Modal
                isOpen={isMapModalOpen}
                onClose={() => {
                    setIsMapModalOpen(false);
                    setSelectedLocation(null);
                    setUserPosition(null)
                }}
            >
                <MapModule selectedLocation={selectedLocation || undefined} onLocationSelect={setSelectedLocation}
                    userPosition={userPosition} />
            </Modal>
        </>
    );
};