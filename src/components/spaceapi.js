export default async function space(date, startDate, endDate) {
    try {
        const DEMO_KEY = 'ULZvGmhpzGbOcfwBrFvrTWdJd689CviZls7q4g6W';
        if (date) {
            const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${DEMO_KEY}&date=${date}`);
            if (!data) {
                throw new Error('Network response was not ok');
            }
            const result = await data.json();
            return result;
            // console.log('NASA APOD:', result);
        }


    }
    catch (error) {
        console.error('Fetch error: ', error);
    }
}

