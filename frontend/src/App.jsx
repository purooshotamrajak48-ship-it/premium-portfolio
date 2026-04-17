import React, { useEffect, useState } from 'react'

const API = "https://premium-portfolio-1krr.onrender.com"

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(API + "/projects")
      .then(res => res.json())
      .then(setProjects)
  }, [])

  return (
    <div style={{ background: "#050510", color: "white", minHeight: "100vh", padding: 40 }}>
      <h1 style={{ color: "#00f5ff" }}>Purooshotam Rajak</h1>
      <p>Premium Full Stack Portfolio</p>

      <h2>Projects</h2>
      {projects.map((p, i) => (
        <div key={i} style={{ border: "1px solid #00f5ff", margin: 10, padding: 10 }}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          {p.image && <img src={p.image} width="200" />}
        </div>
      ))}
    </div>
  )
}
