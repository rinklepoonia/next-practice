'use client';
import { useState } from 'react';

export default function CardList() {
    const initialData = Array.from({ length: 42 }, (_, i) => ({
        id: i + 1,
        title: `Card ${i + 1}`,
        subtitle: "subtitle"
    }));

    const [displayedArray, setDisplayedArray] = useState(initialData.slice(0, 6)); // empty at start
    const [sourceArray, setSourceArray] = useState(initialData.slice(6)); // 40 cards initially

    const handleShowMore = () => {
        const nextCards = sourceArray.slice(0, 6); // take next 6 cards
        setDisplayedArray((prev) => [...prev, ...nextCards]); // add to displayed array
        setSourceArray((prev) => prev.slice(6)); // remove from source array
    };


    return (
        <div className="flex flex-col items-center p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {displayedArray.map((card) => (
                    <div key={card.id} className="border p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold">{card.title}</h2>
                        <p>subtitle</p>
                    </div> 
                ))}
            </div>


            <button
                onClick={handleShowMore}
                className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                {sourceArray.length > 0 ? "show more" : "show Less"}
            </button>
            {/* <p> ek array bango jis ma sara 40 data hoye
                or jo bit data show hoye vo alag array bane
                or seen more go alag alag bnae
                jab seen more pr click krga jad un 40 data array hu data see more ayra array ma jae
                fer seen more pr click krga fer vo data bit show hoy
                3 alag alag array bane
                ek jis ma saro data hoye
                40 go 40
                ek array bnae jis m un 40 hu 6 data aye or us array ga ander store hoye
                jo print krvano h
                or see more go bhi ek alag array bane jis ga ander next 6 data aye phele 6 na chhod ge</p> */}

        </div>
    );
}
