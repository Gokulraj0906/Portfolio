import React, { useEffect,useState } from "react";
import * as THREE from "three";
import emailjs from "emailjs-com";

function App() {
  useEffect(() => {
    const container = document.getElementById("threejs-bg");
    if (!container) {
      console.error("Three.js container element not found");
      return;
    }

    // Three.js Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Add a Rotating Cube
    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x007bff });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    // Add a Rotating Sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff5733 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 3;
    scene.add(sphere);

    // Add a Rotating Torus
    const torusGeometry = new THREE.TorusGeometry(1.5, 0.5, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.y = -2;
    scene.add(torus);

    // Add a Floating Tetrahedron
    const tetraGeometry = new THREE.TetrahedronGeometry();
    const tetraMaterial = new THREE.MeshStandardMaterial({ color: 0xffd700 });
    const tetrahedron = new THREE.Mesh(tetraGeometry, tetraMaterial);
    tetrahedron.position.set(-3, 2, 0);
    scene.add(tetrahedron);

    // Background Particles
    const particleGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const particlesPosition = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      particlesPosition[i] = (Math.random() - 0.5) * 10;
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlesPosition, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Camera Position
    camera.position.z = 8;

    // Add Mouse Interaction
    const mouse = { x: 0, y: 0 };
    window.addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      sphere.rotation.y += 0.02;

      torus.rotation.x += 0.02;
      torus.rotation.z += 0.02;

      tetrahedron.rotation.y += 0.015;
      tetrahedron.position.y = Math.sin(Date.now() * 0.002) * 2;

      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    // Cleanup on Unmount
    return () => {
      renderer.dispose();
      container.innerHTML = "";
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("mousemove", null);
    };
  }, []);

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_dmsevdd",
        "template_zsrzhc9",
        formData,
        "S9qJMJ9QAALjkJ515"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const achievements = [
    "Best Student Performer Award, IBM Career Education",
    "Organizing Committee Member, 3.0 Award by MGR-ACSSpace Technology Centre",
    "4th Place, Let's Code India Hackathon, KGISL College 2022",
    "15th Place, Hackest 5.0, DTDL Association with AWS 2024",
    "4th Place ,HackAtom At Russian House At Chennai 2024"
  ];

  const skills = [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "React.js",
    "Node.js",
    "Machine Learning",
    "Deep Learning",
    "Data Visualization",
    "TensorFlow",
    "PyTorch",
    "Firebase",
    "Three.js",
    "Git/GitHub",
    "Blockchain Development",
  ]; 
  

  return (
     <div>
      <section
        id="hero"
        className="relative w-full h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white flex items-center justify-center"
      >
        <div id="threejs-bg" className="absolute inset-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm GokulRaj .S</h1>
          <p className="text-2xl mb-6">
            A passionate Data Scientist and AI enthusiast striving to solve
            real-world problems through innovative solutions.
          </p>
          <div className="space-x-4">
            <a
              href="https://drive.google.com/file/d/16hVZ0AkmkLWo1T4-eB_6keT19wvgbYEe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold"
              download="GokulRaj_S_Resume.pdf"
            >
              Resume
            </a>
            <a href="#contact">
              <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105">
                Hire Me
              </button>
            </a>
            <a href="http://linkedin.com/in/gokulraj0906" target="_blank" rel="noopener noreferrer">
              <button className="bg-red-500 hover:bg red-600 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105">
                Linkedin
              </button>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold mb-8 text-gray-900">About Me</h2>
    <p className="text-lg leading-relaxed">
      I am currently pursuing a <span className="font-bold text-indigo-600">Bachelor of Technology in Data Science and Artificial Intelligence</span>, driven by an unwavering passion for harnessing the power of data to solve real-world challenges. My expertise lies in developing cutting-edge, data-driven models and AI systems that deliver transformative solutions across diverse industries. With a strong foundation in <span className="font-semibold text-indigo-600">machine learning, data modeling, and AI development</span>, coupled with proficiency in tools like Python, TensorFlow, and scikit-learn, I am well-equipped to tackle complex technical problems.
    </p>
    <p className="text-lg leading-relaxed mt-6">
      Over the years, I’ve spearheaded impactful projects that highlight the potential of AI to revolutionize industries. One such achievement includes leading the development of a <span className="font-semibold text-indigo-600">medical imaging system</span> capable of detecting brain tumors with an impressive <span className="font-bold text-indigo-600">95.68% accuracy</span>. This involved leveraging deep learning models and optimizing data pipelines to enhance diagnostic efficiency. Another accomplishment is my work in <span className="font-semibold text-indigo-600">financial analytics</span>, where I created an algorithmic trading platform that boosted portfolio returns by <span className="font-bold text-indigo-600">15%</span>, showcasing a perfect blend of technical proficiency and strategic insight.
    </p>
    <p className="text-lg leading-relaxed mt-6">
      Beyond technical expertise, I am deeply passionate about making a tangible impact in the tech industry. My collaborative spirit has led me to design user-centric solutions, including an <span className="font-semibold text-indigo-600">AI-powered micro-loan platform</span> that reduced loan processing time by <span className="font-bold text-indigo-600">30%</span> and empowered entrepreneurs through financial education. These experiences have honed my ability to innovate, adapt, and deliver meaningful results.
    </p>
    <p className="text-lg leading-relaxed mt-6">
      I thrive in dynamic environments where creativity and problem-solving converge. My ultimate goal is to leverage the power of <span className="font-semibold text-indigo-600">data and AI</span> to address complex challenges, improve decision-making, and create solutions that positively impact lives. I am excited to contribute to transformative projects that shape the future of technology.
    </p>
  </div>
</section>


    {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition transform hover:-translate-y-2"
            >
              <span className="text-lg font-semibold text-gray-800">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="py-20 px-6 bg-white text-gray-800"
        style={{ background: "url('/path-to-image.jpg') center/cover" }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Medcura",
              description: "Brain Tumor Detection with 95.68% accuracy Using SVM.",
              imageUrl: "https://cdn.prod.website-files.com/65315329e28538e3f531ea89/65987ce1c8a2f33ffb0c9e71_Medcura%20Social%20Graph.png",
              link: "https://github.com/Gokulraj0906/medcura.git",
              try:"https://github.com/Gokulraj0906/medcura.git",
            },
            {
              title: "Foresight",
              description: "Algorithmic Trading with 15% ROI increase.",
              imageUrl: "https://theforexscalpers.com/wp-content/uploads/2024/08/Yellow-Black-Modern-Gaming-Youtube-Thumbnail-YouTube-bannerafbeelding-26.png", // Add the image URL here
              link: "https://github.com/Gokulraj0906/Foresight",
              try:"https://foresight-kf0g.onrender.com/",
            },
            {
              title: "MicroVentures",
              description: "Streamlined loan applications by 30%.",
              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0b1YrQthhlsP3uHWFdHZn8PwbM4gU-QjgA&s",
              link: "https://github.com/Gokulraj0906/MicroVentures",
              try:"https://micro-ventures.vercel.app",
            },
            {
              title: "CareChain",
              description: "Take control of your health information with secure access and ownership using the BlockChain.",
              imageUrl: "https://ca.carechain.app/wp-content/uploads/2022/12/WITH-WORKMARK-02.png", // Add the image URL here
              link: "https://github.com/Gokulraj0906/Carechain",
              try:"https://medcura-backend.vercel.app",
              
            },
            {
              title: "For More Projects",
              description: "Take a Look At My Github ",
              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtk570HKSLfdmQRKnVqujHuI63zpyZDnnCJg&s", // Add the image URL here
              link: "https://github.com/Gokulraj0906",
              try:"https://github.com/Gokulraj0906",
              
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-md rounded-lg p-4 hover:shadow-lg transition transform hover:-translate-y-2"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              <a
                href={project.try}
                className="text-blue-500 pl-20  hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Take a Look 
              </a>
            </div>
          ))}
        </div>
      </section>


      <section id="achievements" className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Achievements</h2>
        <ul className="list-disc max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          {achievements.map((achievement, index) => (
            <li key={index} className="mb-2">
              {achievement}
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-800 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form className="max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-md" onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded-md bg-gray-800 text-white"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded-md bg-gray-800 text-white"
          />
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded-md bg-gray-800 text-white"
          ></textarea>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-md">
            Send
          </button>
        </form>
      </section>

      <footer className="bg-black text-white text-center py-4">
        &copy; {new Date().getFullYear()} GokulRaj .S. All rights reserved.
      </footer>
    </div>
  );
}

export default App;