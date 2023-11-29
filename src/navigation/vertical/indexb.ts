// ** Icon imports
import Login from 'mdi-material-ui/Login';
import Table from 'mdi-material-ui/Table';
import CubeOutline from 'mdi-material-ui/CubeOutline';
import HomeOutline from 'mdi-material-ui/HomeOutline';
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase';
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline';
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline';
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline';
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline';
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended';

// ** Type imports
import { VerticalNavItemsType, NavLink, NavSectionTitle } from 'src/@core/layouts/types';
import { Account, FileDocument, Shopping } from 'mdi-material-ui';


interface VerticalNavItem extends NavLink, NavSectionTitle {
  title: string;
  icon: React.ReactNode;
  path?: string;
  children?: VerticalNavItem[];
}

const navigation = (): VerticalNavItemsType => {
  return [

    {
      sectionTitle: 'Menu',
    },
    {
      
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/',
    },
    // {
    //   title: 'Profile',
    //   icon: AccountCogOutline,
    //   path: '/account-settings',
    // },
    
    {
      title: 'Products',
      icon: Shopping,
      path: '/products',
    },
    {
      title: 'Suppliers',
      icon: Account,
      path: '/suppliers',
    },
    {
      title: 'Quotations',
      icon: FileDocument,
      path: '/quotations',
    },
    {
      title: 'Messaging',
      icon: FileDocument,
      path: '/messaging',
    },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended,
    // },
    {
      title: 'Documentation',
      icon: CreditCardOutline,
      path: '/documentation',
    },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards',
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables',
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts',
    // },
  ];
};

export default navigation;