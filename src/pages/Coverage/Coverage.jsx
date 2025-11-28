import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const position = [23.6850, 90.3563];
    const service_centers = useLoaderData();
    console.log(service_centers);

    return (
        <div className='p-15 bg-white rounded-2xl my-15'>
            <h1 className='md:text-3xl text-2xl font-extrabold text-secondary'>We are available in 64 districts</h1>

            <div className='w-full h-[600px] mt-5'>
                <MapContainer center={position} zoom={8} scrollWheelZoom={false} className='h-[600px]'>
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