import { useEffect, useState } from "react";
import Flower from "../Flower/Flower";
import FlowerDetails from "../FlowerDetails/FlowerDetails";

const Flowers = ({searchText}) => {

    const [flowers, setFlowers] = useState([]);
    const [selectedFlower, setSelectedFlower] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(true);

    // flowers data fetch
    useEffect(() => {
        fetch('/Flowers.json')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setFlowers(data);
                    setLoading(false)
                }, 1000);
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            })
    }, []);

    // 🔍 Show loading spinner when search text changes
    useEffect(() => {
        if (searchText !== "") {
            setLoading(true);
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [searchText])

    // filter search
    const filteredFlowers = flowers.filter(flower => 
        flower.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // handleShowDetails
    const handleShowDetails = (flower) => {
        setSelectedFlower(flower);

        document.getElementById('show_details').showModal();
    }

    // handleShowAll
    const handleShowAll = () => {
        setShowAll(true);

        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }

    // for loading spin
    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh] transition-opacity duration-700">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return (
        <div className="py-8 container mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    (showAll ? filteredFlowers : filteredFlowers.slice(0, 8)).map(flower => <Flower key={flower.id} flower={flower} handleShowDetails={handleShowDetails}></Flower>)
                }
            </div>
            
            {
                filteredFlowers.length > 8 && !showAll && (
                    <div className="text-center mt-6">
                        <button type="button" className="btn" onClick={handleShowAll}>Show All</button>
                    </div>
                )
            }

            {
                filteredFlowers.length === 0 && (
                    <p className="text-center text-gray-500 mt-6 text-3xl lg:text-4xl font-bold">No flowers found 😢</p>
                )
            }

            {selectedFlower && (
                <FlowerDetails flower={selectedFlower}></FlowerDetails>
            )}
        </div>
    );
};

export default Flowers;

