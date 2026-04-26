export function Navbar() {
  const menuItems = [
    { label: 'Home', href: '#', active: true },
    { label: 'Studio', href: '#studio', active: false },
    { label: 'About', href: '#about', active: false },
    { label: 'Journal', href: '#journal', active: false },
    { label: 'Reach Us', href: '#contact', active: false },
  ]

  return (
    <nav className="w-full">
      <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-3xl tracking-tight"
          style={{ color: '#000000' }}
        >
          Aethera<sup className="text-xs align-super">®</sup>
        </a>

        {/* Menu Items */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-body text-sm transition-colors duration-200 hover:text-foreground"
                style={{ color: item.active ? '#000000' : '#6F6F6F' }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className="font-body rounded-full px-6 py-2.5 text-sm transition-transform duration-200 hover:scale-[1.03]"
          style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
        >
          Begin Journey
        </button>
      </div>
    </nav>
  )
}
