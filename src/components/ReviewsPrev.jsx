import React, { useEffect, useState } from 'react';
import { getReviews } from '../services/review'

function ReviewsPrev() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getReviwesPrev();
    }, [0]);

    const getReviwesPrev = async () => {
        const data = await getReviews();
        setReviews(data);
    };

    if (reviews.length === 0) {
        return <>
            <div>Aun no existen registros</div>
        </>
    }

    return (
        <div >
            <br />
            <div>
                {reviews.map((element, index) => {
                    return (
                        <div key={index}>
                            <div>{element.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ReviewsPrev