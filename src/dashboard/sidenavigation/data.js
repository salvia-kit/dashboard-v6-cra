import HomeIcon from './icons/home';
import MediasIcon from './icons/medias';
import ContactIcon from './icons/contact';
import ServersIcon from './icons/servers';
import TerminalIcon from './icons/terminal';
import SettingsIcon from './icons/settings';
import RecycleBinIcon from './icons/recycle-bin';
import DocumentationIcon from './icons/documentation';

const data = [
  {
    title: 'Users',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Medias',
    icon: <MediasIcon />,
    link: '/admin/medias',
  },
  {
    title: 'Contacts',
    icon: <ContactIcon />,
    link: '/admin/contacts',
  },
  {
    title: 'Servers',
    icon: <ServersIcon />,
    link: '/admin/servers',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/admin/settings',
  },
  {
    title: 'Terminal',
    icon: <TerminalIcon />,
    link: '/admin/terminal',
  },
  {
    title: 'Recycle Bin',
    icon: <RecycleBinIcon />,
    link: '/admin/recycle-bin',
  },
  {
    title: 'Documentation',
    icon: <DocumentationIcon />,
    link: '/admin/documentation',
  },
];

export default data;
