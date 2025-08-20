import React, { useState, useEffect } from 'react';
import { Github } from 'lucide-react';
import ProjectCard from './ProjectCards';
import { Octokit } from 'octokit';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = '';
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const octokit = new Octokit();
        const response = await octokit.request('GET /users/{username}/repos', {
          username: GITHUB_USERNAME,
          sort: 'updated',
          per_page: 3,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });

        const projectData = response.data.map((repo, index) => ({
          title: repo.name,
          description: repo.description || 'No description available',
          image: `https://via.placeholder.com/1350x900.png?text=Project+${index + 1}`,
          technologies: repo.language ? [repo.language] : ['Not specified'],
          githubLink: repo.html_url,
          liveLink: repo.homepage || null
        }));

        setProjects(projectData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        // Fallback to static projects if GitHub API fails
        setProjects([
          {
            title: "Perfect Recipe",
            description:
              "A full-featured recipe management platform with user authentication, recipe creation, and sharing capabilities.",
            image: "https://img.freepik.com/free-photo/top-view-food-ingredients-with-vegetable-soup-bowl-notebook_23-2148834720.jpg?t=st=1739118632~exp=1739122232~hmac=8716010be04903efe9e2d52a37c2ac5eebb79fc925341e13d11f88c46a3f3120&w=900",
            technologies: ["React", "Firebase"],
            githubLink: "https://github.com/issabaloach/perfect-Recipe",
            liveLink: "https://perfect-recipe-orcin.vercel.app/",
          },
          {
            title: "Unhouseddocs",
            description:
              "A web application built collaboratively for a client, aimed at helping manage and organize documentation for unhoused individuals. Developed with my friend for his client, I contributed to building and optimizing the app’s frontend and backend features to ensure a smooth and user-friendly experience.",
            image:
              "https://images.pexels.com/photos/590044/pexels-photo-590044.jpeg",
            technologies: ["Nextjs", "javaScript", "Node.js", "MongoDB"],
            githubLink: "https://github.com/issabaloach",
            liveLink: "https://unhouseddocs.com/",
          },
          {
            title: "Dynamic E-Commerce - Shop App",
            description:
              "A responsive e-commerce platform with product management, shopping cart, and secure payment integration.",
            image:
              "https://images.pexels.com/photos/167703/pexels-photo-167703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            technologies: ["React","Firebase", "MongoDB", "Tailwind CSS"],
            githubLink: "https://github.com/issabaloach/Dynamic-E-Commerce",
            liveLink: "https://dynamic-e-commerce.vercel.app/",
          },
        ]);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Projects</h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error fetching projects:', error);
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <a
            href={`https://github.com/issabaloach?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;