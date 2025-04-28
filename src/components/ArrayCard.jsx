'use client';

import { useEffect, useState } from 'react';

export default function CardList() {
    const fullData = [
        { id: 1, title: 'Card 1', subtitle: 'Subtitle 1' },
        { id: 2, title: 'Card 2', subtitle: 'Subtitle 2' },
        { id: 3, title: 'Card 3', subtitle: 'Subtitle 3' },
        { id: 4, title: 'Card 4', subtitle: 'Subtitle 4' },
        { id: 5, title: 'Card 5', subtitle: 'Subtitle 5' },
        { id: 6, title: 'Card 6', subtitle: 'Subtitle 6' },
        { id: 7, title: 'Card 7', subtitle: 'Subtitle 7' },
        { id: 8, title: 'Card 8', subtitle: 'Subtitle 8' },
        { id: 9, title: 'Card 9', subtitle: 'Subtitle 9' },
        { id: 10, title: 'Card 10', subtitle: 'Subtitle 10' },
        { id: 11, title: 'Card 11', subtitle: 'Subtitle 11' },
        { id: 12, title: 'Card 12', subtitle: 'Subtitle 12' },
        { id: 13, title: 'Card 13', subtitle: 'Subtitle 13' },
        { id: 14, title: 'Card 14', subtitle: 'Subtitle 14' },
        { id: 15, title: 'Card 15', subtitle: 'Subtitle 15' },
        { id: 16, title: 'Card 16', subtitle: 'Subtitle 16' },
        { id: 17, title: 'Card 17', subtitle: 'Subtitle 17' },
        { id: 18, title: 'Card 18', subtitle: 'Subtitle 18' },
        { id: 19, title: 'Card 19', subtitle: 'Subtitle 19' },
        { id: 20, title: 'Card 20', subtitle: 'Subtitle 20' },
        { id: 21, title: 'Card 21', subtitle: 'Subtitle 21' },
        { id: 22, title: 'Card 22', subtitle: 'Subtitle 22' },
        { id: 23, title: 'Card 23', subtitle: 'Subtitle 23' },
        { id: 24, title: 'Card 24', subtitle: 'Subtitle 24' },
        { id: 25, title: 'Card 25', subtitle: 'Subtitle 25' },
        { id: 26, title: 'Card 26', subtitle: 'Subtitle 26' },
        { id: 27, title: 'Card 27', subtitle: 'Subtitle 27' },
        { id: 28, title: 'Card 28', subtitle: 'Subtitle 28' },
        { id: 29, title: 'Card 29', subtitle: 'Subtitle 29' },
        { id: 30, title: 'Card 30', subtitle: 'Subtitle 30' },
        { id: 31, title: 'Card 31', subtitle: 'Subtitle 31' },
    ];

    const [visibleCards, setVisibleCards] = useState(fullData.slice(0, 6));
    const [seeMoreData, setSeeMoreData] = useState(fullData.slice(6, 12));

    const handleShowMore = () => {
        const nextCards = fullData.slice(visibleCards.length, visibleCards.length + 6);
        setVisibleCards((prev) => [...prev, ...nextCards]);

        const updatedSeeMoreData = fullData.slice(visibleCards.length + 6, visibleCards.length + 12);  // Update the next 6 cards after current visible ones
        setSeeMoreData(updatedSeeMoreData);
    };

    useEffect(() => {
        console.log("Updated seeMoreData:", seeMoreData);
    }, [seeMoreData]);

    useEffect(() => {
        console.log("Updated visibleCards:", visibleCards);
    }, [visibleCards]);

    return (
        <div className="flex flex-col items-center p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {visibleCards.map((card) => (
                    <div
                        key={card.id}
                        className="border p-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
                    >
                        <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                        <p className="text-gray-600">{card.subtitle}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={handleShowMore}
                className="mt-10 px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
            >
                {visibleCards.length < fullData.length ? "Show More" : "No More Cards"}
            </button>
        </div>
    );
}
