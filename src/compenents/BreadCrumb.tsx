import { Home, ChevronRight } from "lucide-react";

const Breadcrumbs = ({ items }: { items: any }) => {
  return (
    <nav className="flex mb-5" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {items.map((item: any, index: number) => (
          <li key={index} className="inline-flex items-center">
            {index !== 0 && <ChevronRight className="w-6 h-6 text-gray-400" />}
            {item.href ? (
              <a
                href={item.href}
                className="text-gray-700 hover:text-gray-900 inline-flex items-center ml-1 md:ml-2 text-sm font-medium"
              >
                {item.icon && <item.icon className="w-5 h-5 mr-2.5" />}
                {item.label}
              </a>
            ) : (
              <span
                className="text-gray-400 ml-1 md:ml-2 text-sm font-medium"
                aria-current="page"
              >
                {item.icon && <item.icon className="w-5 h-5 mr-2.5" />}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
