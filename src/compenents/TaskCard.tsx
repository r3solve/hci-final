import React from "react";

function createPrirityBadge(priority: string) {
  switch (priority) {
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
  name,
  descriptions,
  priority,
  dateAdded,
}: {
  name: string;
  priority: string;
  descriptions: string;
  dateAdded: string;
}) {
  return (
    <div className="bg-gray-200 p-4  rounded-2xl mb-4">
      <h4 className="font-bold">{name}</h4>
      <p className={`${createPrirityBadge(priority)}`}>Low</p>
      <p>{descriptions}</p>
      <p>{dateAdded}</p>
    </div>
  );
}
