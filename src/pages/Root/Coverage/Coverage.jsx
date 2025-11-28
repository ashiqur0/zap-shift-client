import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
import { IoSearchOutline } from "react-icons/io5";

const Coverage = () => {
    const position = [23.6850, 90.3563];
    const service_centers = useLoaderData();
    const mapRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();

        const location = e.target.location.value;
        const district = service_centers.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
        if (district) {
            const coord = [district.latitude, district.longitude];
            // console.log(district, coord);
            mapRef.current.flyTo(coord, 13);
        }
    }

    return (
        <div className='md:p-15 p-5 bg-white rounded-2xl my-15'>
            <h1 className='md:text-3xl text-2xl font-extrabold text-secondary mb-5'>We are available in 64 districts</h1>

            <form onSubmit={handleSearch}>
                <label className='flex items-center'>
                    <div className='flex items-center bg-gray-200 md:w-1/3 px-4 py-3 rounded-4xl text-[1rem]'>
                        <IoSearchOutline size={24} />
                        <input
                            placeholder="Search"
                            name='location'
                            type="text"
                            className='outline-none pl-4'
                        />
                    </div>
                    <button className='btn btn-primary text-black text-xl font-semibold rounded-4xl py-[23px] -ml-15 px-4 w-30'>Search</button>
                </label>
            </form>

            <h1 className='md:text-2xl text-xl font-extrabold text-secondary mb-10 mt-10'>We deliver almost all over Bangladesh</h1>

            <div className='w-full h-[400px] mt-5'>
                <MapContainer
                    center={position}
                    zoom={8}
                    scrollWheelZoom={false}
                    className='h-[400px]'
                    ref={mapRef}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        service_centers.map((center, index) => <Marker key={index} position={[center.latitude, center.longitude]}>
                            <Popup>
                                <strong>{center.district}</strong> <br /> Service Area: {center.covered_area.join(', ')}
                            </Popup>
                        </Marker>
                        )
                    }

                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;