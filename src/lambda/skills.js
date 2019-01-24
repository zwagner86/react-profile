import skillData from '../data/skills';

export function handler(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({data: skillData})
    });
}
