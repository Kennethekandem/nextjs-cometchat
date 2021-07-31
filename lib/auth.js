import axios from 'axios';
import consts from '../pages/const';

const comet_chat_url = 'https://api-us.cometchat.io/v2.0/users';

export const registerUser = async (uid, name) => {
    
   const data = await axios.post(comet_chat_url, { uid, name }, { headers: { appId: consts.APP_ID, apiKey: consts.API_KEY }});
   return data;
}

export const listUsers = async () => {
    let data = await axios.get(`${comet_chat_url}`, { headers: { appId: consts.APP_ID, apiKey: consts.API_KEY }});

    let users = data.data;

    return await users.map((user, i) => {
        return (
            <li key={i} className="list-group-item">{user.name}</li>
        );
    });
}
