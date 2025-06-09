import Navbar from "./navbar.componet";

export default function Favorites() {
    return(
        <>
        <Navbar />
            <section class="favorites">
                <h2>🌟 Your Favorite Space Moments</h2>
                <div class="favorites-list">
                    <div class="favorite-item">
                        <p class="date">📅 June 8, 2025</p>
                        <h3 class="title">Mysteries of the Red Planet</h3>
                        <img src="https://via.placeholder.com/150" alt="Favorite Space Image" />
                        <button class="remove-btn">❌ Remove from Favorites</button>
                    </div>
                </div>
            </section>
        </>
    );
}