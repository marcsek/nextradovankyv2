import React from 'react';
import HeaderLink from './HeaderLink';
import UserSection from './UserSection';

const Header = () => {
  return (
    <header className="flex justify-between border-b border-b-neutral-800 px-16 py-4 backdrop-blur-sm">
      <nav className="flex gap-8">
        <HeaderLink href="/" title="Home" />
        <HeaderLink href="/auth" title="Authentication" />
      </nav>
      <div className="flex gap-8">
        <div className="relative rounded-xl bg-blue-500/40 p-2 text-sm font-semibold leading-none text-blue-400">
          Testing aleluja
          <span className="absolute inset-[-1px]">
            <span className="absolute h-2 w-2 animate-ping rounded-full bg-blue-400"></span>
            <span className="absolute h-2 w-2 rounded-full bg-blue-400"></span>
          </span>
        </div>

        <UserSection />
      </div>
    </header>
  );
};

export default Header;
