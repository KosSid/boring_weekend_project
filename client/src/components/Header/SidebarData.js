import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-menu-text'
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-menu-text'
    },
    {
        title: 'Places',
        path: '/places',
        icon: <IoIcons.IoIosHeart />,
        cName: 'nav-menu-text'
    },
    {
        title: 'LogIn',
        path: '/login',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-menu-text'
    },
    {
        title: 'Questions',
        path: '/questions',
        icon: <AiIcons.AiTwotoneTool />,
        cName: 'nav-menu-text'
    }
];