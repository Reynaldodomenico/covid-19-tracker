import axios from "axios";

const url = 'https://covid19.mathdro.id/';

export const fetchData = async () => {
try{
    const response = await axios.getUri(url);
    return response;
}
catch(error){

}
}

