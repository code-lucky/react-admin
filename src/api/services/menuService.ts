import { Permission } from '#/entity';
import apiClient from '../apiClient';

export enum MenuApi {
    CreateMenu = '/menu/create',
    UpdateMenu = '/menu/update',
    DeleteMenu = '/menu/delete',
    MenuList = '/menu/list',
}

const CreateMenu = (data: Permission) => apiClient.post({ url: MenuApi.CreateMenu, data });
const UpdateMenu = (data: Permission) => apiClient.post({ url: MenuApi.CreateMenu, data });

export default {
    CreateMenu,
    UpdateMenu
};
