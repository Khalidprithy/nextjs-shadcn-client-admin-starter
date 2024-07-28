import { NavItem } from '@/types';

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};

export interface SideLink extends NavItem {
  sub?: NavItem[];
}

export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    company: 'Dell',
    role: 'Frontend Developer',
    verified: false,
    status: 'Active'
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'TechCorp',
    role: 'Backend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'UI Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Product Manager',
    verified: true,
    status: 'Active'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'QA Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'UX Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'DevOps Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Frontend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Data Analyst',
    verified: false,
    status: 'Active'
  }
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const clientNavItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: 'dashboard',
    label: 'Home'
  },
  {
    title: 'About',
    href: '/about',
    icon: 'user',
    label: 'About'
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: 'employee',
    label: 'Contact'
  }
];

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'User',
    href: '/admin/user',
    icon: 'user',
    label: 'user'
  },
  {
    title: 'Employee',
    href: '/admin/employee',
    icon: 'employee',
    label: 'employee'
  },
  {
    title: 'Profile',
    href: '/admin/profile',
    icon: 'profile',
    label: 'profile'
  },
  {
    title: 'Kanban',
    href: '/admin/kanban',
    icon: 'kanban',
    label: 'kanban'
  },
  {
    title: 'Login',
    href: '/admin-login',
    icon: 'login',
    label: 'login'
  }
];

export const sidebarItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'User',
    href: '/admin/user',
    icon: 'user',
    label: 'user'
  },
  {
    title: 'Employee',
    href: '/admin/employee',
    icon: 'employee',
    label: 'employee'
  },
  {
    title: 'Profile',
    href: '/admin/profile',
    icon: 'profile',
    label: 'profile'
  },
  {
    title: 'Kanban',
    href: '/admin/kanban',
    icon: 'kanban',
    label: 'kanban'
  },
  {
    title: 'Login',
    href: '/admin-login',
    icon: 'login',
    label: 'login'
  }
];

export const sideLinks: SideLink[] = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'User',
    href: '/admin/user',
    icon: 'user',
    label: 'user'
  },
  {
    title: 'Employee',
    href: '/admin/employee',
    icon: 'employee',
    label: 'employee'
  },
  {
    title: 'Profile',
    href: '/admin/profile',
    icon: 'profile',
    label: 'profile'
  },
  {
    title: 'Kanban',
    href: '/admin/kanban',
    icon: 'kanban',
    label: 'kanban'
  },
  {
    title: 'Login',
    href: '/admin-login',
    icon: 'login',
    label: 'login'
  },
  {
    title: 'Authentication',
    label: '',
    href: '',
    icon: 'login',
    sub: [
      {
        title: 'Sign In (email + password)',
        label: '',
        href: '/sign-in',
        icon: 'login'
      },
      {
        title: 'Sign In (Box)',
        label: '',
        href: '/sign-in-2',
        icon: 'login'
      },
      {
        title: 'Sign Up',
        label: '',
        href: '/sign-up',
        icon: 'login'
      },
      {
        title: 'Forgot Password',
        label: '',
        href: '/forgot-password',
        icon: 'login'
      }
    ]
  }
];
