import React, { useState } from "react";
import logo from "./GQNN.png";
import graph from "./graph.png";
import circuit from "./Circuit.png";
import githubLogo from "./github.png";

const GQNN = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  var year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className=" bg-gradient-to-r from-blue-600 to-purple-600 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="GQNN Logo" className="rounded-full h-10 w-10 mr-2" />
            <h1 className="text-2xl font-bold text-white">GQNN</h1>
          </div>
          <ul className="hidden md:flex space-x-6 font-bold">
            <li><a href="#features" className="text-white hover:text-yellow-300">Features</a></li>
            <li><a href="#about" className="text-white hover:text-yellow-300">About</a></li>
            <li><a href="#interactive" className="text-white hover:text-yellow-300">Interactive</a></li>
            <a
            href="https://github.com/gokulraj0906/GQNN"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
            <img src={githubLogo} alt="GitHub Logo" className="h-8 w-8 rounded-full" />
          </a>
          </ul>
          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 py-2 space-y-4 fixed inset-x-0 top-16 z-40 font-bold">
          <ul>
            <li><a href="#features" className="block py-3">Features</a></li>
            <li><a href="#about" className="block py-2">About</a></li>
            <li><a href="#interactive" className="block py-2">Interactive</a></li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20 mt-17">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to GQNN</h1>
          <p className="text-lg mb-8">
            A pioneering Python library for Quantum Neural Networks (QNNs). Explore hybrid models integrating quantum computing and classical neural networks.
          </p>
          <button className="bg-yellow-300 text-purple-700 px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-yellow-400 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gradient-to-r from-yellow-100 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Quantum-Classical Integration</h3>
              <p className="text-gray-600">
                Seamlessly combine quantum models with classical architectures for groundbreaking research.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Interactive Training Graphs</h3>
              <p className="text-gray-600">
                Monitor model performance with real-time, interactive training process visualizations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Quantum Circuit Visualization</h3>
              <p className="text-gray-600">
                View detailed quantum circuit representations for in-depth analysis and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About GQNN</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            GQNN is a Python library designed for research and experimentation with Quantum Neural Networks (QNNs). Leveraging IBM Qiskit, it enables researchers to train quantum models and integrate them with classical networks for real-world applications.
          </p>
          <a
            href="https://pypi.org/project/gqnn/"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Install via PyPI
          </a>
        </div>
      </section>

      {/* Interactive Section */}
      <section id="interactive" className="py-16 bg-gradient-to-r from-pink-100 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Interactive Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Training Visualization</h3>
              <p className="text-gray-600">
                Observe the training process with interactive graphs that provide real-time insights.
              </p>
              <button
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                onClick={() => openModal(graph)}
              >
                View Graphs
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Quantum Circuit Images</h3>
              <p className="text-gray-600">
                Analyze and refine your quantum circuits with detailed visual representations.
              </p>
              <button
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                onClick={() => openModal(circuit)}
              >
                View Circuits
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Real-World Impact</h3>
              <p className="text-gray-600">
                Explore hybrid quantum-classical models and their applications in AI and beyond.
              </p>
              <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Image Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg">
            <button
              className="absolute top-0 right-0 p-2 text-black font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img src={modalImage} alt="Modal Content" className="max-w-full max-h-96 object-contain" />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {year} GQNN. Developed by <a href="http://linkedin.com/in/gokulraj0906" target="_blank" rel="noopener noreferrer">Gokulraj S </a> All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GQNN;