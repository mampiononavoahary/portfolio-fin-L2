import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen text-white flex items-center justify-center px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
        {/* Left side - Contact Info */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Contactez Moi</h1>
          <p className="mb-2">
            <span className="font-bold">Email:</span> developer@javascript.com
          </p>
          <p className="mb-4">
            <span className="font-bold">Phone:</span> +65 XXX XXX
          </p>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet
            pharetra.
          </p>
        </div>

        {/* Right side - Form */}
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 p-2 bg-black border border-gray-600 rounded text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-1/2 p-2 bg-black border border-gray-600 rounded text-white focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full p-2 bg-black border border-gray-600 rounded text-white focus:outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="border border-white px-4 py-1 hover:bg-white hover:text-black transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
