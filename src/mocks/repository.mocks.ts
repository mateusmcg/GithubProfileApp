import {Repository} from '../models/repository.interface';
import {USER_LIST} from './user.mocks';

const repositoryList: Repository[] = [
    {
        name: 'Ionic 3 Camera',
        description: 'Descrição teste 1',
        owner: USER_LIST[0]
    },
    {
        name: 'Angular 4 Testing',
        description: 'Descrição teste 2',
        owner: USER_LIST[0]
    },
    {
        name: 'Hahaha Repo',
        description: 'Descrição teste 3',
        owner: USER_LIST[1]
    },
    {
        name: 'Cursos Udemy',
        description: 'Descrição teste 4',
        owner: USER_LIST[1]
    }
]

export const REPOSITORY_LIST = repositoryList;