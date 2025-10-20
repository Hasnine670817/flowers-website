
const Flower = ({flower, handleShowDetails}) => {
    return (
        <div className="image-card">
            <figure className="overflow-hidden rounded-2xl w-full">
                <img className="h-[280px] w-full rounded-2xl object-cover object-center flower-image transition-all duration-300" src={flower?.thumbnail} alt={flower?.name} />
            </figure>
            <div className="bg-white rounded-2xl [box-shadow:22px_40px_40px_0px_#0000000D] p-5 -mt-28 relative">
                <div className="flex gap-7">
                    <p className="text-sm font-medium flex  gap-2 items-center"><span className="w-3 h-3 rounded-full bg-[#6CD889] inline-block"></span> {flower?.name}</p>
                    <p className="text-sm font-medium flex  gap-2 items-center"><span className="w-3 h-3 rounded-full bg-[#6CD889] inline-block"></span> {flower?.moreInfo?.family}</p>
                </div>

                <h3 className="truncate text-xl font-bold mt-3">{flower?.moreInfo?.fragrance}</h3>

                <p className="text-base line-clamp-3 mt-2 mb-3">{flower?.details}</p>

                <button type="button" onClick={() => handleShowDetails(flower)} className="btn w-full text-black bg-[#25D366] border-[#25D366]">Show Details</button>
            </div>
        </div>
    );
};

export default Flower;

