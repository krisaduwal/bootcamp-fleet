// import { serialize } from "v8";


export async function request(url, method = "GET", data = {}){
    switch (method) {
        case "GET":
            return await HandleGetRequest(url);
        case "POST":
            return await HandlePostRequest(url, data);
        default:
            console.log("invalid http request");
          
    }

    async function HandleGetRequest(url) {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const data = await response.json();
            return serialization(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    async function HandlePostRequest(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',

                },

            });
            return await response.json();

        } 
        catch (error) {
            console.log(error);
        }
    }
}

// function serialize(data) {
//     return data.map((datum) => ({
//         id: datum.id,
//         userId: datum.userId,
//         title: datum.title,
//         description: datum.body,
//     }));

// }

function serialization(data) {
    let finalMapData;
    if(Array.isArray(data)){
        finalMapData = data.map((datum) => {
            const mapData = {};
            mapData['userId'] = datum['userId']
            mapData['blogTitle'] = datum['title']
            mapData['blogDescription'] = datum['body']
            return mapData;
        });
    }
    else{
        finalMapData = {
            "userID" : data.userID,
            "blogTitle" : data.title,
            "blogDescription" : data.body
        }
    }
    return finalMapData;    
}