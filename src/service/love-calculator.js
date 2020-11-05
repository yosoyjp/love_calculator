import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://love-calculator.p.rapidapi.com/getPercentage',
    
    headers: {
        'x-rapidapi-key': 'a777371354msh69c01d601652cf4p1e799bjsnee85caa67ed2',
        'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
    }
};

export const getResults = async (nameMe, nameYou) => {
    const response = await axios.get('https://love-calculator.p.rapidapi.com/getPercentage', {
        ...options,
        params: {
            fname: nameMe,
            sname: nameYou
        },
    });
    return response.data;
}