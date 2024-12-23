import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Task Tracker</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-r from-blue-500 to-blue-400 text-white">
        <div className="container mx-auto text-center py-16 px-6">
          <h2 className="text-4xl font-bold mb-4">Stay Organized, Stay Productive</h2>
          <p className="text-lg mb-6">Track your tasks efficiently and never miss a deadline again.</p>
          <a href="/signup" className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 bg-white">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-2xl font-bold mb-6">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Task Prioritization</h4>
              <p>Organize tasks based on their priority and due date.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Deadline Reminders</h4>
              <p>Receive timely reminders for upcoming deadlines.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Collaboration Tools</h4>
              <p>Work with your team and achieve goals together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-gray-50">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-2xl font-bold mb-6">About Task Tracker</h3>
          <p className="text-lg">
            Task Tracker is your go-to app for managing personal and team tasks efficiently.
            Our mission is to help you stay organized and productive.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-white">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <p className="text-lg mb-6">Have questions or feedback? Reach out to us!</p>
          <a href="mailto:support@tasktracker.com" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Task Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
