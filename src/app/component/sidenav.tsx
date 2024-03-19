import React from "react";
import Link from "next/link";


interface NavigationItem {
  name: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { name: 'Client', href: '/client' },
  { name: 'Dashboard', href: '/dashboard' },
  //{ name: 'Invoice', href: '/invoice' },
  // ... other items
];

const Sidenav: React.FC = () => {
  return (
    <nav className="flex flex-col space-y-2 bg-gray-800 text-white p-4">
      {navigationItems.map((item) => (
        <Link key={item.name} href={item.href}>
          <div className="px-4 py-2 rounded hover:bg-gray-700">
            {item.name}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Sidenav;



/*const  sidenav = () => {
  return (
    <>
      <div className="flex flex-col space-y-2 bg-gray-800 text-white p-4">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>Dashboard</p>
                </Link>
              </li>
              <li>
                <Link href="/client">
                  <p>Client</p>
                </Link>
              </li>
              <li>
                <Link href="/Product">
                  <p>Product</p>
                </Link>
              </li>
              <li>
                <Link href="/invoice">
                  <p>Invoice</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default sidenav;*/