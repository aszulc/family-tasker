import { useEffect, useState } from 'react';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HamburgerMenuIcon, SunIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import routes from '@/routes';
import { Pages as RoutingPages } from '@/routes/types';

const MobileNav = memo(function MobileNav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden w-7 h-7 p-0">
          <HamburgerMenuIcon className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <ul className="space-y-5">
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
          <li>
            <Link
              to="https://github.com/aszulc/family-tasker"
              target="_blank"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              GitHub
            </Link>
          </li>
        </ul>
        <div className="flex flex-col space-y-5 mt-5 pt-5 border-t border-slate-200">
          <Button variant="ghost" className="w-7 h-7 p-0">
            <SunIcon className="w-6 h-6" />
            <span className="sr-only">Switch theme</span>
          </Button>
          <Button className="h-7 w-40">
            <Link to={routes[RoutingPages.Contact].path!}>Log in / Sign up</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
});

export default MobileNav;
