import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaCogs, FaFileAlt } from 'react-icons/fa';

const navItems = [
    { icon: FaHome, label: "Home", to: "/" },
    { icon: FaUser, label: "About", to: "/about" },
    { icon: FaCogs, label: "Services", to: "/services" },
    { icon: FaFileAlt, label: "Resume", to: "/resume" },
    { icon: FaBriefcase, label: "Projects", to: "/projects" },
    { icon: FaEnvelope, label: "Contact", to: "/contact" },
  ];

export default function BottomNavbar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex items-end gap-5 px-6 py-1.5 rounded-full shadow-2xl border border-white/30 bg-gradient-to-r from-[#e0e7ff] via-[#f3f4f6] to-[#f9fafb] backdrop-blur-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.label}
              to={item.to}
              className="flex flex-col items-center focus:outline-none relative group"
            >
              {/* Active bubble */}
              <span className={`absolute -top-1 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full transition-all duration-300
                ${isActive ? 'bg-[#6366F1] shadow-lg scale-100 opacity-100' : 'scale-75 opacity-0'}
                z-0`} />
              {/* Icon */}
              <span className={`relative z-10 flex items-center justify-center w-7 h-7 transition-all duration-300
                ${isActive
                  ? 'text-white scale-110'
                  : 'text-[#64748B] group-hover:text-[#6366F1] group-hover:scale-110'}
                `}>
                <Icon className="w-4 h-4" />
                {/* Badge */}
                {item.badge && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs px-1 py-0.5 rounded-full font-bold shadow">
                    {item.badge}
                  </span>
                )}
              </span>
              {/* Label */}
              <span className={`mt-0.5 text-[11px] transition-colors duration-300
                ${isActive
                  ? 'text-[#6366F1] font-bold'
                  : 'text-[#64748B] group-hover:text-[#6366F1]'}
                `}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
