import React from "react";

export default function Tasks() {
  return (
    <main className="flex-1 pb-48 mx-8 ">
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-2xl text-gray-600">Untitled</h2>
      </header>
      <section className="mb-8 flex flex-row">
        <div className="flex justify-evenly space-x-4">
          <div className="text-sm bg-gray-200 p-2 flex-1 rounded-xl p-4">
            <p>Last Added: 12/04/2021</p>
            <p>Last Modified: 21/04/2021</p>
            <p>Last Deleted: Adyl, Azhar, Arthur</p>
          </div>
          <div className="flex flex-1 rounded-xl p-4 bg-gray-100">
            <p>
              Менеджер для внутреннего пользования, предназначенный для учета
              статистики и трекинга задач.
            </p>
          </div>

          <div className="bg-gray-100 p-4 px-8 rounded-2xl w-1/4  text-sm flex-1">
            <p>All tasks: 6</p>
            <p>Done: 0</p>
            <p>Deferred: 1</p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-8">
        <div className="bg-gray-100 p-5 rounded-2xl col-span-1">
          <h3 className="text-xl font-bold mb-4">Active</h3>
          <div className="bg-gray-200 p-4 rounded-2xl mb-4">
            <h4 className="font-bold">CRM system design</h4>
            <p className="text-yellow-500">Medium</p>
            <p>Participant: Azhar</p>
            <p>Date added: 12/04/2021</p>
          </div>
          <div className="bg-gray-200 p-4  rounded-2xl mb-4">
            <h4 className="font-bold">Statistics</h4>
            <p className="text-green-500">Low</p>
            <p>Participant: Artur</p>
            <p>Date added: 12/04/2021</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-2xl mb-4">
            <h4 className="font-bold">Priorities</h4>
            <p className="text-red-500">High</p>
            <p>Participant: Adyl, Artur</p>
            <p>Date added: 12/04/2021</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">In progress</h3>
          <div className="bg-white p-4 rounded shadow mb-4">
            <h4 className="font-bold">Notifications</h4>
            <p className="text-green-500">Low</p>
            <p>Participant: Arthur</p>
            <p>Date added: 12/04/2021</p>
          </div>
        </div>
        <div className="bg-gray-100 p-5 rounded-2xl col-span-1">
          <h3 className="text-xl font-bold mb-4">Complete</h3>
          <div className="bg-gray-200 p-4 rounded-2xl mb-4">
            <h4 className="font-bold">CRM system design</h4>
            <p className="text-yellow-500">Medium</p>
            <p>Participant: Azhar</p>
            <p>Date added: 12/04/2021</p>
          </div>
          <div className="bg-gray-200 p-4  rounded-2xl mb-4">
            <h4 className="font-bold">Statistics</h4>
            <p className="text-green-500">Low</p>
            <p>Participant: Artur</p>
            <p>Date added: 12/04/2021</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-2xl mb-4">
            <h4 className="font-bold">Priorities</h4>
            <p className="text-red-500">High</p>
            <p>Participant: Adyl, Artur</p>
            <p>Date added: 12/04/2021</p>
          </div>
        </div>
      </section>
    </main>
  );
}
