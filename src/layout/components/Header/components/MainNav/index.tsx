import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { GitHubLogoIcon, SunIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import routes from '@/routes';
import { Pages as RoutingPages } from '@/routes/types';

const MainNav = memo(function MainNav() {
  const { pathname } = useLocation();

  return (
    <div className="hidden md:flex items-center">
      <nav>
        <ul className="flex items-center gap-x-8">
          <li>
            <Link
              to={routes[RoutingPages.Tasks].path!}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === routes[RoutingPages.Tasks].path
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              {routes[RoutingPages.Tasks].title}
            </Link>
          </li>
          <li>
            <Link
              to={routes[RoutingPages.About].path!}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === routes[RoutingPages.About].path
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              {routes[RoutingPages.About].title}
            </Link>
          </li>
          <li>
            <Link
              to={routes[RoutingPages.Contact].path!}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === routes[RoutingPages.Contact].path
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              {routes[RoutingPages.Contact].title}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center border-l border-slate-200 ml-6 pl-6 gap-6">
        <Button variant="ghost" className="w-7 h-7 p-0">
          <SunIcon className="w-6 h-6" />
          <span className="sr-only">Switch theme</span>
        </Button>
        <Button variant="ghost" className="w-7 h-7 p-0">
          <Link to="https://github.com/aszulc/family-tasker" target="_blank">
            <GitHubLogoIcon className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
        </Button>
        <Button className="h-7">
          <Link to={routes[RoutingPages.Contact].path!}>Log in / Sign up</Link>
        </Button>
      </div>
    </div>
  );
});

export default MainNav;
