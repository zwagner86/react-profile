import resumeData from '../data/resume';

export function handler(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({data: resumeData})
    });
}
