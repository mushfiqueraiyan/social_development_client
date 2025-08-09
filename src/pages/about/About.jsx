import React from "react";
import {
  Leaf,
  Users,
  Calendar,
  TreePine,
  Heart,
  Globe,
  TreePineIcon,
} from "lucide-react";
import useTheme from "../../hook/useTheme";

export default function About() {
  const theme = useTheme();

  return (
    <div className={`min-h-screen ${theme == "dark" ? "text-white" : ""}`}>
      {/* Hero Section */}
      <div
        className="relative bg-gradient-to-br from-green-800 to-green-600 text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #016630 0%, #02854a 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <TreePineIcon className="w-16 h-16 text-green-800" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">About Plantation Events</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Connecting communities through tree plantation events to create a
              greener, more sustainable future for generations to come.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold  mb-4 ${
                theme == "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Our Mission
            </h2>
            <p className="text-lg  max-w-3xl mx-auto">
              We believe in the power of collective action to combat climate
              change and create sustainable communities through organized tree
              plantation events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div
                className="bg-green-50 p-6 rounded-xl mb-4 group-hover:bg-green-100 transition-colors duration-300"
                style={{ backgroundColor: "#f0f9ff" }}
              >
                <Globe
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: "#016630" }}
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Environmental Impact
                </h3>
                <p className="text-gray-600">
                  Every tree planted contributes to carbon sequestration, air
                  purification, and biodiversity conservation.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div
                className="bg-green-50 p-6 rounded-xl mb-4 group-hover:bg-green-100 transition-colors duration-300"
                style={{ backgroundColor: "#f0f9ff" }}
              >
                <Users
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: "#016630" }}
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Community Building
                </h3>
                <p className="text-gray-600">
                  Bringing together like-minded individuals to work towards a
                  common goal of environmental stewardship.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div
                className="bg-green-50 p-6 rounded-xl mb-4 group-hover:bg-green-100 transition-colors duration-300"
                style={{ backgroundColor: "#f0f9ff" }}
              >
                <Heart
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: "#016630" }}
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Legacy Building
                </h3>
                <p className="text-gray-600">
                  Creating lasting positive change that will benefit future
                  generations and preserve our planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold  mb-4 ${
                theme == "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              How It Works
            </h2>
            <p className="text-lg  max-w-3xl mx-auto">
              Our platform makes it easy for organizers to create tree
              plantation events and for volunteers to discover and participate
              in them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className=" p-3 rounded-lg shadow-md">
                  <Calendar className="w-6 h-6" style={{ color: "#016630" }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Create Events</h3>
                  <p className="text-gray-600">
                    Event organizers can easily post detailed information about
                    upcoming tree plantation drives, including date, location,
                    and requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className=" p-3 rounded-lg shadow-md">
                  <Users className="w-6 h-6" style={{ color: "#016630" }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold  mb-2">
                    Join Community
                  </h3>
                  <p className="text-gray-600">
                    Volunteers can browse events in their area, register to
                    participate, and connect with other environmental
                    enthusiasts.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className=" p-3 rounded-lg shadow-md">
                  <Leaf className="w-6 h-6" style={{ color: "#016630" }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold  mb-2">Make Impact</h3>
                  <p className="text-gray-600">
                    Together, we plant trees, restore ecosystems, and track our
                    collective environmental impact over time.
                  </p>
                </div>
              </div>
            </div>

            <div className=" p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <div
                  className="inline-block p-4 rounded-full mb-6"
                  style={{ backgroundColor: "#016630" }}
                >
                  <TreePine className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold  mb-4">Join the Movement</h3>
                <p className="text-gray-600 mb-6">
                  Be part of a growing community dedicated to environmental
                  conservation and sustainable living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 text-white" style={{ backgroundColor: "#016630" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact So Far</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Together, our community has made significant strides in
              environmental conservation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white text-green-800 bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-lg opacity-90">Trees Planted</div>
            </div>
            <div className="bg-white text-green-800 bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Events Organized</div>
            </div>
            <div className="bg-white text-green-800 bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">25,000+</div>
              <div className="text-lg opacity-90">Volunteers</div>
            </div>
            <div className="bg-white text-green-800 bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold  mb-4">Our Values</h2>
            <p className="text-lg  max-w-3xl mx-auto">
              The principles that guide everything we do in our mission to
              create a greener world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We promote long-term environmental solutions that benefit both
                current and future generations while maintaining ecological
                balance.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Inclusivity
              </h3>
              <p className="text-gray-600">
                Everyone is welcome to participate regardless of age,
                background, or experience. Environmental conservation is a
                collective responsibility.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                We maintain open communication about our impact, challenges, and
                progress, ensuring accountability in all our environmental
                initiatives.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We embrace new technologies and creative approaches to make tree
                plantation events more effective and engaging for communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 text-white" style={{ backgroundColor: "#016630" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of environmental champions who are actively working
            to create a more sustainable future through tree plantation events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Browse Events
            </button>
            <button className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors duration-300">
              Create Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
