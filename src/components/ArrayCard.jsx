'use client';

import { useSearchParams, useRouter } from 'next/navigation';
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
        { id: 32, title: 'Card 32', subtitle: 'Subtitle 32' },
        { id: 33, title: 'Card 33', subtitle: 'Subtitle 33' },
        { id: 34, title: 'Card 34', subtitle: 'Subtitle 34' },
        { id: 35, title: 'Card 35', subtitle: 'Subtitle 35' },
        { id: 36, title: 'Card 36', subtitle: 'Subtitle 36' },
        { id: 37, title: 'Card 37', subtitle: 'Subtitle 37' },
        { id: 38, title: 'Card 38', subtitle: 'Subtitle 38' },
        { id: 39, title: 'Card 39', subtitle: 'Subtitle 39' },
        { id: 40, title: 'Card 40', subtitle: 'Subtitle 40' },
    ];

    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPage = parseInt(searchParams.get('page') || '1', 10);
    const cardsPerPage = 6;
    const startIndex = (currentPage - 1) * cardsPerPage;

    const visibleCards = fullData.slice(0, startIndex + cardsPerPage);
    const seeMoreData = fullData.slice(startIndex + cardsPerPage, startIndex + cardsPerPage * 2);
    const remainingCards = fullData.slice(startIndex + cardsPerPage * 2);

    const handleShowMore = () => {
        const nextPage = currentPage + 1;
        const params = new URLSearchParams(searchParams);
        params.set('page', nextPage.toString());
        router.replace(`?${params.toString()}`, { scroll: false });
    };

    const handleShowLess = () => {
        const prevPage = Math.max(1, currentPage - 1);
        const params = new URLSearchParams(searchParams);
        params.set('page', prevPage.toString());
        router.replace(`?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-2xl font-bold mb-4">Total Cards: {fullData.length}</h1>
            <h2 className="text-xl mb-4">Remaining Cards: {remainingCards.length}</h2>
            {/* <p className="text-gray-500 mb-4">
                ID: {remainingCards.map(card => card.id).join(", ")}
            </p> */}
            <h2 className="text-xl">Visible Cards: {visibleCards.length}</h2>
            <p className="text-gray-500 mb-4">
                ID: {visibleCards.map(card => card.id).join(", ")}
            </p>

            <h2 className="text-xl">Cards in Show More: {seeMoreData.length}</h2>
            <p className="text-gray-500 mb-4">
                ID: {seeMoreData.map(card => card.id).join(", ")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
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

            <div className="mt-10 flex gap-4">
                {visibleCards.length < fullData.length && (
                    <button
                        onClick={handleShowMore}
                        className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
                    >
                        Show More
                    </button>
                )}
                {currentPage > 1 && (
                    <button
                        onClick={handleShowLess}
                        className="px-8 py-3 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition"
                    >
                        Show Less
                    </button>
                )}
            </div>
        </div>
    );
}
