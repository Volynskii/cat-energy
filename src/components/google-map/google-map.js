import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
    width: `100%`,
    height: `100%`
};

const center = {
lat: 59.938716,
    lng: 30.323047
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};

export default function MyMap () {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
       libraries
    });

    const [markers, setMarkers] = React.useState([]);

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps"
    return (
        <GoogleMap mapContainerStyle={mapContainerStyle}
                   zoom={17}
                   center={center}
                   options={options}
                   // onClick={(event) => {
                   //     setMarkers((current) => [
                   //         ...current,
                   //         {
                   //             lat: event.latLng.lat(),
                   //             lng: event.latLng.lng(),
                   //             time: new Date(),
                   //         },
                   //     ]);
                   // }}


        >
            {/*{markers.map(marker => */}
                    <Marker key={1}
                                           position={{lat: center.lat, lng: center.lng}}
                            icon={{
                                url: `/map-pin-cat.png`,
                                scaledSize: new window.google.maps.Size(100,100)
                            }}
                    />
                                           {/*)}*/}
        </GoogleMap>
    );
}
