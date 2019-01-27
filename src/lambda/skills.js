import skillData from '../data/skills';

const headers = {
    "Access-Control-Allow-Origin" : "*",
    "Vary": "Origin"
};

export function handler(event, context, callback) {
    callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify({data: skillData})
    });
}
