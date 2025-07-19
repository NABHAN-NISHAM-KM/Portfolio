import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const repoDetails = {
  "Portfolio": {
    image: "/assets/preview.png",
  },
  "E-commerce-Platform": {
    image: "/assets/me1.jpg",
  },
};

// Helper to generate a unique placeholder image for a repo
function getRepoImage(repo) {
  if (repoDetails[repo.name] && repoDetails[repo.name].image) {
    return repoDetails[repo.name].image;
  }
  // Use the repo owner's avatar as a fallback
  return repo.owner.avatar_url;
}

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/NABHAN-NISHAM-KM/repos', {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json'
      }
    })
      .then(res => res.json())
      .then(async data => {
        // For each repo, fetch its languages
        const reposWithLangs = await Promise.all(
          data.map(async repo => {
            const langRes = await fetch(repo.languages_url);
            const langs = await langRes.json();
            return { ...repo, languages: Object.keys(langs) };
          })
        );
        setRepos(reposWithLangs);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide">
            Projects
          </h2>
          <div className="mx-auto mt-2 w-24 h-1 bg-gray-200 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-1 bg-[#6366F1] rounded"></div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Explore some of my best work. Click on a project to view the code or see it live!
          </p>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center text-lg text-gray-500">Loading projects...</div>
        ) : error ? (
          <div className="text-center text-lg text-red-500">{error}</div>
        ) : (
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => {
              return (
                <div
                  key={repo.id}
                  className="group bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={getRepoImage(repo)}
                      alt={repo.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#6366F1] transition-colors duration-300">
                      {repo.name}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1 text-base">
                      {repo.description || 'No description provided.'}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {(Array.isArray(repo.languages) ? repo.languages : []).map((lang, i) => (
                        <span
                          key={i}
                          className="bg-[#6366F1]/10 text-[#6366F1] px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-5 mt-auto">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#6366F1] text-2xl transition"
                        title="View Code"
                      >
                        <FaGithub />
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#6366F1] text-2xl transition"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
