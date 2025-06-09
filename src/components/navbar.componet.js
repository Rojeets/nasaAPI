import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav class="api-nav">
                <label for="apiSelect">🔭 Choose a NASA API:</label>
                <select id="apiSelect" onChange={(e) => {
                    const selectedApi = e.target.value;
                    if (selectedApi) {
                        window.location.href = `/${selectedApi}`;
                    }
                }} >
                    <option disabled selected>Select an API...</option>
                    <option value="apod">APOD: Astronomy Picture of the Day</option>
                    <option value="neows">Asteroids NeoWs: Near Earth Object Web Service</option>
                    <option value="donki">DONKI: Space Weather Database</option>
                    <option value="earth">Earth: Earth Observation Data</option>
                    <option value="eonet">EONET: Natural Event Tracker</option>
                    <option value="epic">EPIC: Earth Polychromatic Imaging Camera</option>
                    <option value="exoplanet">Exoplanet Archive</option>
                    <option value="openscience">Open Science Data Repository</option>
                    <option value="insight">Insight: Mars Weather</option>
                    <option value="mars-photos">Mars Rover Photos</option>
                    <option value="image-video">NASA Image and Video Library</option>
                    <option value="techtransfer">TechTransfer: Patents & Software</option>
                    <option value="ssc">Satellite Situation Center</option>
                    <option value="ssd-cneos">SSD/CNEOS: Solar System Dynamics</option>
                    <option value="techport">Techport: Technology Projects</option>
                    <option value="tle">TLE API: Orbital Elements</option>
                    <option value="trek">Trek WMTS: Vesta/Moon/Mars</option>
                </select>
            </nav>

        </>
    );
}