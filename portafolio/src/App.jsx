import './styles.css';
import React from 'react';

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  React.useEffect(() => {
    document.body.style.background = darkMode
      ? 'url("/fondooscuro.jpg") center center / cover no-repeat fixed'
      : 'url("/fondoclaro.jpg") center center / cover no-repeat fixed';
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Enlaces y botón fuera de la tarjeta */}
      <div style={{
        display: 'flex',
        gap: 20,
        marginBottom: 24
      }}>
        <a
          href="https://www.linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: darkMode ? '#f1f1f1' : '#181818', fontWeight: 'bold' }}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/edgar-143"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: darkMode ? '#f1f1f1' : '#181818', fontWeight: 'bold' }}
        >
          GitHub
        </a>
        <a
          href="edgarmartinezcv.pdf"
          download
          style={{
            textDecoration: 'none',
            background: darkMode ? '#333' : '#eee',
            color: darkMode ? '#fff' : '#181818',
            padding: '8px 16px',
            borderRadius: 6,
            fontWeight: 'bold'
          }}
        >
          Descargar CV
        </a>
      </div>

      <button
        onClick={toggleDarkMode}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          padding: '8px 16px',
          borderRadius: 6,
          border: 'none',
          background: darkMode ? '#333' : '#eee',
          color: darkMode ? '#fff' : '#181818',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
        }}
      >
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>

      {/* Tarjeta principal */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: 600,
          width: '100%',
          background: darkMode ? '#222' : '#fff',
          color: darkMode ? '#f1f1f1' : '#181818',
          borderRadius: 12,
          padding: 24,
          transition: 'background 0.3s, color 0.3s'
        }}
      >
        {/* Foto personal dentro de la tarjeta */}
        <img
          src="/imagenportfolio.jpg" // Cambia esto por la ruta de tu foto
          alt="Foto de Edgar Martínez"
          style={{ borderRadius: '50%', width: 150, height: 150, marginBottom: 20 }}
        />
        <h1>Edgar Martínez</h1>
        <h2>Estudiante de Programación</h2>
        <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: 400 }}>
          <li><strong>Edad:</strong> 20 años</li>
          <li><strong>Dirección:</strong> Mitre 949</li>
          <li><strong>Teléfono:</strong> 1162100821</li>
          <li><strong>Email:</strong> edgrmago@gmail.com</li>
        </ul>
        <section style={{ margin: '0 auto', maxWidth: 600 }}>
          <h2>Experiencia Laboral</h2>
          <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: 500 }}>
            <li>
              <strong>Municipio de Tigre — Pasantías</strong><br />
              Turnero digital realizado como proyecto de pasantías, utilizando JavaScript, HTML, CSS, JSON y React para gestionar turnos de forma dinámica.
            </li>
          </ul>
        </section>
        <section style={{ margin: '0 auto', maxWidth: 600 }}>
          <h2>Educación</h2>
          <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: 500 }}>
            <li>UTN Facultad Regional Pacheco - Tecnicatura en Programación (En curso)</li>
            <li>Fundación Oficios - Programación en Python</li>
            <li>E.E.S.T N°3 - Técnico en Informática</li>
          </ul>
        </section>
        <section style={{ margin: '0 auto', maxWidth: 600 }}>
          <h2>Conocimientos</h2>
          <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: 500 }}>
            <li>Programación en Python (básico)</li>
            <li>Programación en C++ (básico)</li>
            <li>HTML y CSS</li>
            <li>Excel y Word</li>
          </ul>
        </section>
        <section style={{ margin: '0 auto', maxWidth: 600 }}>
          <h2>Habilidades</h2>
          <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: 500 }}>
            <li>Trabajo en equipo</li>
            <li>Rápida adaptación</li>
            <li>Capacidad para trabajar bajo presión</li>
            <li>Responsabilidad</li>
          </ul>
        </section>
        <section style={{ margin: '0 auto', maxWidth: 600 }}>
          <h2>Acerca de mí</h2>
          <p style={{ textAlign: 'center', margin: '0 auto', maxWidth: 500 }}>
            Actualmente curso el 1er año de la Tecnicatura en Programación en la UTN Facultad Regional Pacheco. Busco una oportunidad laboral relacionada con la programación para adquirir experiencia como desarrollador junior, seguir aprendiendo y crecer profesionalmente en el área tecnológica.
          </p>
        </section>
        <section style={{ margin: '0 auto', maxWidth: 600 }}>
          <h2>Disponibilidad Horaria</h2>
          <p style={{ textAlign: 'center', margin: '0 auto', maxWidth: 500 }}>Full Time</p>
        </section>
      </div>
    </div>
  );
}