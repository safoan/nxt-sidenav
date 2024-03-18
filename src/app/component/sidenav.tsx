/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Link from 'next/link';
import { usePathname , useRouter} from 'next/navigation'


interface NavigationItem {
  name: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { name: 'Dashboard', href: '/' }, // Use root path for dashboard
  { name: 'Client', href: '/client' },
  { name: 'Product', href: '/product' },
  { name: 'Invoice', href: '/invoice' },
  { name: 'User', href: '/user' },
  // ... other items
];

const isActive = (href: string) => {
  const router = useRouter();
  return router.pathname === href;
};

const Sidenav: React.FC = () => {
  return (
    <nav className="flex flex-col space-y-2 bg-gray-800 text-white p-4">
      {navigationItems.map((item) => (
        <Link key={item.name} href={item.href}>
          <a
            className={`px-4 py-2 rounded hover:bg-gray-700 ${
              isActive(item.href) ? 'bg-blue-500 text-white' : ''
            }`}
          >
            {item.name}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Sidenav;
