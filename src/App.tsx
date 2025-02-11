import { Folder, CheckSquare, Archive, Trash2 } from 'lucide-react'
function App() {

  return (
    <div className="flex h-screen">
    <aside className="w-1/5 bg-gray-100 p-4">
        <h1 className="ml-4 text-xl font-bold">Tree Manager</h1>
      <div className="flex items-center mb-8 mt-12 w-full ">
        <img src="/logo.png" alt="Logo" className="w-24 h-24 mx-auto" />
      </div>
      <nav className="h-screen">
      <ul className='ms-4'>
      <li className="mb-4">
    <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
      <CheckSquare className="w-6 h-6" />
      <span className="ml-2">Tasks</span>
    </a>
  </li>
  <li className="mb-4">
    <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
      <Folder className="w-6 h-6" />
      <span className="ml-2">Collections</span>
    </a>
  </li>
 
  <li className="mb-4">
    <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
      <Archive className="w-6 h-6" />
      <span className="ml-2">Archived</span>
    </a>
  </li>
  <li className="mb-4">
    <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
      <Trash2 className="w-6 h-6" />
      <span className="ml-2">Deleted</span>
    </a>
  </li>
</ul>
      </nav>
    </aside>
    <main className="flex-1 p-8">
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Collection Name</h2>
        <div className="flex items-center">
          <span className="mr-4">Azhar I.</span>
          <span className="material-icons">account_circle</span>
        </div>
      </header>
      <section className="mb-8">
        <div className="flex justify-between">
          <div>
            <p>Last Added: 12/04/2021</p>
            <p>Last Modified: 21/04/2021</p>
            <p>Last Deleted: Adyl, Azhar, Arthur</p>
          </div>
          <div>
            <p>All tasks: 6</p>
            <p>Done: 0</p>
            <p>Deferred: 1</p>
          </div>
        </div>
        <p className="mt-4">Менеджер для внутреннего пользования, предназначенный для учета статистики и трекинга задач.</p>
      </section>
      <section className="grid grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Active</h3>
          <div className="bg-white p-4 rounded shadow mb-4">
            <h4 className="font-bold">CRM system design</h4>
            <p className="text-yellow-500">Medium</p>
            <p>Participant: Azhar</p>
            <p>Date added: 12/04/2021</p>
          </div>
          <div className="bg-white p-4 rounded shadow mb-4">
            <h4 className="font-bold">Statistics</h4>
            <p className="text-green-500">Low</p>
            <p>Participant: Artur</p>
            <p>Date added: 12/04/2021</p>
          </div>
          <div className="bg-white p-4 rounded shadow mb-4">
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
      </section>
    </main>
  </div>
  )
}

export default App
