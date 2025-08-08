import React from "react";
import { CalendarPlus, UsersRound, BarChart3 } from "lucide-react";
import { motion } from "motion/react";

const Features = () => {
  return (
    <div>
      <section className="py-20  px-4 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-4xl font-bold text-green-800 mb-12">
            Make a Real Difference in Your Community
          </h2>

          <motion.div
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
            className="grid gap-8 md:grid-cols-3"
          >
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full">
                <CalendarPlus size={32} className="text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Create Events
              </h3>
              <p className="text-gray-600">
                Host impactful drives like tree plantations or cleanups.
                Organize, share, and invite your community with ease.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full">
                <UsersRound size={32} className="text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Join Events
              </h3>
              <p className="text-gray-600">
                Discover and join nearby events. Connect with like-minded
                volunteers and contribute to local change.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full">
                <BarChart3 size={32} className="text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Track Your Impact
              </h3>
              <p className="text-gray-600">
                Measure your contributions: trees planted, hours served, and
                lives touched — all tracked in your profile.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;
