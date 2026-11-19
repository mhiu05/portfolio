import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../../content/navigation";
import { profile } from "../../content/profile";
import { useActiveSection } from "../../hooks/useActiveSection";
import { assetUrl } from "../../lib/assets";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  const active = useActiveSection();
  const { pathname } = useLocation();
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        !nav.current?.contains(event.target as Node) &&
        !button.current?.contains(event.target as Node)
      )
        setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const resize = () => setOpen(false);
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link
          className="wordmark"
          to="/"
          aria-label={`${profile.name} — home`}
          onClick={() => setOpen(false)}
        >
          {profile.initials}
          <span className="wordmark-dot">.</span>
        </Link>
        <nav
          ref={nav}
          id="main-navigation"
          aria-label="Main navigation"
          className={`main-nav ${open ? "is-open" : ""}`}
        >
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              className={active === item.id ? "is-active" : ""}
              aria-current={
                active === item.id && pathname === "/" ? "location" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {profile.resume && (
            <a href={assetUrl(profile.resume)} className="nav-resume">
              Resume <ArrowUpRight size={15} />
            </a>
          )}
        </nav>
        <Link to="/#contact" className="nav-contact">
          Let’s talk <ArrowUpRight size={16} />
        </Link>
        <button
          ref={button}
          type="button"
          className="menu-toggle"
          aria-controls="main-navigation"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
