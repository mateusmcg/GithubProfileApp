import { User } from '../models/user.interface';

const userList: User[] = [
    {
        name: 'Mateus Cerqueira',
        company: "Ci&T",
        location: 'Belo Horizonte - MG',
        bio: 'I like to make some apps',
        avatar_url: 'http://i.imgur.com/NbMFOe3.png',
        email: 'mateus.mcg@gmail.com'
    },
    {
        name: 'Nathalia Armond',
        company: "Tenda",
        location: 'Belo Horizonte - MG',
        bio: 'I like to build some buildings',
        avatar_url: 'http://i.imgur.com/X2S0Wbm.png',
        email: 'nathalia.armond@gmail.com'
    }
];

export const USER_LIST = userList;