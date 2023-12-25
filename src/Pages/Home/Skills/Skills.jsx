import { FaNodeJs, FaJs, FaHtml5, FaCss3, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiFirebase, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="text-center max-w-screen-2xl mx-auto mt-16">
      <div data-aos="fade-up">
        <h3 className="text-4xl font-semibold mb-8">My Skills</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* JavaScript */}
        <div data-aos="zoom-in-left" className="mx-auto">
          <FaJs className="text-6xl mb-4 text-[#3498db]" />
          <p className="text-lg font-semibold">JavaScript</p>
        </div>

        {/* TailwindCSS */}
        <div data-aos="zoom-in-left" className="mx-auto">
          <SiTailwindcss className="text-6xl mb-4 text-[#61dafb]" />
          <p className="text-lg font-semibold">TailwindCSS</p>
        </div>

        {/* Node.js */}
        <div data-aos="zoom-in-right" className="mx-auto">
          <FaNodeJs className="text-6xl mb-4 text-[#8cc84b]" />
          <p className="text-lg font-semibold">Node.js</p>
        </div>

        {/* HTML5 */}
        <div data-aos="zoom-in-right" className="mx-auto">
          <FaHtml5 className="text-6xl mb-4 text-[#3498db]" />
          <p className="text-lg font-semibold">HTML5</p>
        </div>

        {/* CSS3 */}
        <div data-aos="zoom-in-left" className="mx-auto">
          <FaCss3 className="text-6xl mb-4 text-[#3498db]" />
          <p className="text-lg font-semibold">CSS3</p>
        </div>

        {/* Git */}
        <div data-aos="zoom-in-left" className="mx-auto">
          <FaGitAlt className="text-6xl mb-4 text-[#3498db]" />
          <p className="text-lg font-semibold">Git</p>
        </div>

        {/* Firebase */}
        <div data-aos="zoom-in-right" className="mx-auto">
          <SiFirebase className="text-6xl mb-4 text-[#3498db]" />
          <p className="text-lg font-semibold">Firebase</p>
        </div>

        {/* Express */}
        <div data-aos="zoom-in-right" className="mx-auto">
          <SiExpress className="text-6xl mb-4 text-[#3498db]" />
          <p className="text-lg font-semibold">Express</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
