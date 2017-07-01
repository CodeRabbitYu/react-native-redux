/**
 * Created by Rabbit on 2017/7/1.
 */

const Request = {
    get:(url, successCallBack, failCallBack) =>{
        // console.log(url);
        return fetch(url)
            .then((response) =>response.json())
            .then((response)=>{
                // console.log(response);
                successCallBack(response);
            })
            .catch((error)=>{
                // console.log(error);
                failCallBack(error);
            })
    },
}

export default Request;

