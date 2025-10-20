
const FlowerDetails = ({flower}) => {
    return (
        <div>
            {/* <button className="btn hidden" onClick={()=>document.getElementById('show_details').showModal()}>open modal</button> */}
            <dialog id="show_details" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <figure>
                        <img className="rounded-md h-[300px] object-cover object-center w-full" src={flower?.thumbnail} alt={flower?.name} />
                    </figure>
                    <h2 className="text-2xl font-bold mt-3">{flower?.name}</h2>
                    <p className="mt-2">{flower?.details}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default FlowerDetails;


/*
{
    "id": 1,
    "name": "Rose",
    "thumbnail": "https://i.ibb.co.com/p749sq9/rose.jpg",
    "details": "The rose is one of the most widely recognized and culturally significant flowers. Roses come in thousands of varieties and a broad palette of colors. They are celebrated for their layered petals, symbolic meanings (love, friendship, secrecy), and their use in perfumes, cosmetics, and ceremonial decorations. Cultivation ranges from low-growing groundcover types to tall climbing varieties. Roses require well-drained soil and regular pruning for optimal flowering.",
    "moreInfo": {
        "scientificName": "Rosa",
        "family": "Rosaceae",
        "color": [
            "red",
            "pink",
            "white",
            "yellow",
            "orange"
        ],
        "fragrance": "Strong, sweet to musky depending on variety",
        "bloomSeason": "Spring to Autumn (varies by cultivar)",
        "heightCm": 100,
        "uses": [
            "ornamental",
            "cut flowers",
            "perfumery",
            "culinary (rosewater, jams)",
            "traditional medicine"
        ],
        "origin": "Asia, Europe, North America"
    }
},
*/