//agregar de service de endponint de reviews
import axios from "axios";

export const getReviews = async () => {
    const URL_API_R = ('https://66ac393ef009b9d5c7315d26.mockapi.io/apiLuisRod/reviews');
    try {
        const res = await axios.get(URL_API_R);
        if (res.status === 200) {
           // console.log('data and rev', res.data);
            return res.data;
        } else {
            return [];
        }
    } catch (e) {
        console.log('error', e);
        return [];
    }
}