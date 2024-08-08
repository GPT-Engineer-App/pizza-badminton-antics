import React from 'react';
import { Pizza, Racket, Code, GamepadIcon, MapPin } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-yellow-100 text-gray-800">
      <header className="bg-red-500 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Pizza className="h-8 w-8" />
            <Racket className="h-8 w-8" />
            <Code className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold">Viktor Vatn: The Pizza-Powered Badminton Coder of Västerås</h1>
        </div>
      </header>

      <nav className="bg-green-500 p-4">
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-4">
            <li className="bg-yellow-300 px-4 py-2 rounded-full">About Viktor</li>
            <li className="bg-yellow-300 px-4 py-2 rounded-full">Swedish Pizza Power</li>
            <li className="bg-yellow-300 px-4 py-2 rounded-full">Badminton Adventures</li>
            <li className="bg-yellow-300 px-4 py-2 rounded-full">League of Legends Corner</li>
            <li className="bg-yellow-300 px-4 py-2 rounded-full">Code Crushing Chronicles</li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto mt-8 p-4">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">About Viktor</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img src="/placeholder.svg" alt="Viktor Vatn" className="w-24 h-24 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-bold">Viktor Vatn</h3>
                <p className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Västerås, Sweden</p>
              </div>
            </div>
            <p>Viktor is a pizza-loving, badminton-smashing, code-crushing extraordinaire from the heart of Sweden!</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Swedish Pizza Power</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Kebab Pizza</h3>
              <p>Fuels Viktor's late-night coding sessions</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Banana Curry Pizza</h3>
              <p>Gives Viktor the edge in badminton matches</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Badminton Adventures</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">The Great Shuttlecock Incident of 2023</h3>
            <p>Viktor once hit a shuttlecock so hard it got stuck in a pizza delivery guy's helmet as he was passing by the court!</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">League of Legends Corner</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <GamepadIcon className="h-12 w-12 mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Viktor's Secret Weapon</h3>
              <p>He names all his in-game characters after different pizza toppings. Fear the mighty "Pepperoni Slayer"!</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Code Crushing Chronicles</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">The Pizza Algorithm</h3>
            <p>Viktor once won a programming competition by creating an algorithm that could optimize pizza topping distribution. It's now used by 9 out of 10 pizzerias in Västerås!</p>
          </div>
        </section>
      </main>

      <footer className="bg-red-500 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>Powered by pepperoni and semicolons. © 2023 Viktor Vatn</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
