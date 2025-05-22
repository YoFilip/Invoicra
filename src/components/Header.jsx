import TopBanner from '@/components/TopBanner';
import { navigationTabs } from '@/lib/navigationTabs';

export default function Header() {
  return (
    <header>
      <TopBanner />
      <nav className="py-10 px-4">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent rounded-full" />
            <span className="text-xl font-bold">Invoicra</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 text-base font-medium text-gray-800">
              {navigationTabs.map(tab => (
                <li key={tab.label}>
                  <a href={tab.href}>{tab.label}</a>
                </li>
              ))}
            </ul>
            <button className="border border-gray-300 rounded px-4 py-1 text-base hover:bg-gray-50">
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
