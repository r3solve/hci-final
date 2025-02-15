import { ArrowUp, ArrowDown } from "lucide-react";

function createPriorityBadge(priority: string) {
  switch (priority.toLowerCase()) {
    case "low":
      return "bg-green-500";
    case "medium":
      return "bg-yellow-500";
    case "high":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
}

export default function TaskCard({
  title,
  description,
  priority,
  dateAdded,
}: {
  title: string;
  priority: string;
  description: string;
  dateAdded: string;
}) {
  return (
    <div className="bg-gray-200 p-4 rounded-2xl mb-4">
      <button className="flex space-x-2 ms-auto p-2 justify-end items-end ">
        <ArrowUp className="w-6 h-6 text-green-500" />
      </button>
      <h4 className="font-bold">{title}</h4>
      <p
        className={`font-bold text-white px-2 py-1 rounded ${createPriorityBadge(
          priority
        )}`}
      >
        {priority}
      </p>
      <p className="p-4 text-gray-900">{description}</p>
      <p className="text-gray-500 text-sm">Date added: {dateAdded}</p>
      <button className="flex space-x-2 ms-auto justify-end p-2 items-end ">
        <ArrowDown className="w-6 h-6 text-red-500" />
      </button>
    </div>
  );
}
