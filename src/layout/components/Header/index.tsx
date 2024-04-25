import { memo } from 'react';
import { Link } from 'react-router-dom';

import { siteConfig } from '@/config/site';
import routes from '@/routes';
import { Pages as RoutingPages } from '@/routes/types';

import MainNav from './components/MainNav';
import MobileNav from './components/MobileNav';

const Header = memo(function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link to={routes[RoutingPages.Tasks].path!}>
          <span>{siteConfig.name}</span>
        </Link>
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
});

export default Header;
