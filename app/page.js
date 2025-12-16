'use client';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '60px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
        maxWidth: '800px',
        width: '100%'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#2c3e50',
          fontSize: '2.5rem',
          marginBottom: '40px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          Business Agent
        </h1>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3498db', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#2980b9', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#bdc3c7', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#95a5a6', stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            {/* Circular background */}
            <circle cx="150" cy="150" r="140" fill="url(#blueGradient)" opacity="0.1"/>

            {/* Abstract human figure - head */}
            <circle cx="150" cy="80" r="25" fill="url(#blueGradient)"/>

            {/* Body - abstract geometric shape */}
            <path d="M 150 110 L 130 180 L 150 175 L 170 180 Z" fill="url(#blueGradient)"/>

            {/* Arms - one holding briefcase */}
            <line x1="150" y1="125" x2="110" y2="150" stroke="url(#blueGradient)" strokeWidth="8" strokeLinecap="round"/>
            <line x1="150" y1="125" x2="190" y2="155" stroke="url(#blueGradient)" strokeWidth="8" strokeLinecap="round"/>

            {/* Legs */}
            <line x1="140" y1="175" x2="130" y2="220" stroke="url(#blueGradient)" strokeWidth="8" strokeLinecap="round"/>
            <line x1="160" y1="175" x2="170" y2="220" stroke="url(#blueGradient)" strokeWidth="8" strokeLinecap="round"/>

            {/* Briefcase - main body */}
            <rect x="175" y="150" width="50" height="35" rx="3" fill="url(#silverGradient)"/>

            {/* Briefcase handle */}
            <path d="M 190 150 Q 200 140 210 150" fill="none" stroke="url(#silverGradient)" strokeWidth="4" strokeLinecap="round"/>

            {/* Briefcase details */}
            <line x1="200" y1="155" x2="200" y2="180" stroke="#7f8c8d" strokeWidth="2"/>
            <circle cx="195" cy="167" r="2" fill="#34495e"/>

            {/* Accent circles for modern touch */}
            <circle cx="220" cy="100" r="8" fill="url(#silverGradient)" opacity="0.6"/>
            <circle cx="85" cy="180" r="6" fill="url(#silverGradient)" opacity="0.6"/>
            <circle cx="240" cy="200" r="5" fill="url(#blueGradient)" opacity="0.4"/>
          </svg>
        </div>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Variations showcase */}
          <div style={{
            textAlign: 'center',
            padding: '20px',
            background: '#f8f9fa',
            borderRadius: '10px',
            flex: '1',
            minWidth: '150px'
          }}>
            <svg width="100" height="100" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blueGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#3498db', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2980b9', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="silverGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#bdc3c7', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#95a5a6', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="150" cy="80" r="25" fill="url(#blueGrad2)"/>
              <path d="M 150 110 L 130 180 L 150 175 L 170 180 Z" fill="url(#blueGrad2)"/>
              <line x1="150" y1="125" x2="110" y2="150" stroke="url(#blueGrad2)" strokeWidth="8" strokeLinecap="round"/>
              <line x1="150" y1="125" x2="190" y2="155" stroke="url(#blueGrad2)" strokeWidth="8" strokeLinecap="round"/>
              <line x1="140" y1="175" x2="130" y2="220" stroke="url(#blueGrad2)" strokeWidth="8" strokeLinecap="round"/>
              <line x1="160" y1="175" x2="170" y2="220" stroke="url(#blueGrad2)" strokeWidth="8" strokeLinecap="round"/>
              <rect x="175" y="150" width="50" height="35" rx="3" fill="url(#silverGrad2)"/>
              <path d="M 190 150 Q 200 140 210 150" fill="none" stroke="url(#silverGrad2)" strokeWidth="4" strokeLinecap="round"/>
              <line x1="200" y1="155" x2="200" y2="180" stroke="#7f8c8d" strokeWidth="2"/>
            </svg>
            <p style={{
              marginTop: '10px',
              fontSize: '0.9rem',
              color: '#7f8c8d',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>Standard</p>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '20px',
            background: '#2c3e50',
            borderRadius: '10px',
            flex: '1',
            minWidth: '150px'
          }}>
            <svg width="100" height="100" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <circle cx="150" cy="80" r="25" fill="#3498db"/>
              <path d="M 150 110 L 130 180 L 150 175 L 170 180 Z" fill="#3498db"/>
              <line x1="150" y1="125" x2="110" y2="150" stroke="#3498db" strokeWidth="8" strokeLinecap="round"/>
              <line x1="150" y1="125" x2="190" y2="155" stroke="#3498db" strokeWidth="8" strokeLinecap="round"/>
              <line x1="140" y1="175" x2="130" y2="220" stroke="#3498db" strokeWidth="8" strokeLinecap="round"/>
              <line x1="160" y1="175" x2="170" y2="220" stroke="#3498db" strokeWidth="8" strokeLinecap="round"/>
              <rect x="175" y="150" width="50" height="35" rx="3" fill="#bdc3c7"/>
              <path d="M 190 150 Q 200 140 210 150" fill="none" stroke="#bdc3c7" strokeWidth="4" strokeLinecap="round"/>
              <line x1="200" y1="155" x2="200" y2="180" stroke="#95a5a6" strokeWidth="2"/>
            </svg>
            <p style={{
              marginTop: '10px',
              fontSize: '0.9rem',
              color: '#ecf0f1',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>Dark Mode</p>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '20px',
            background: '#f8f9fa',
            borderRadius: '10px',
            flex: '1',
            minWidth: '150px'
          }}>
            <svg width="100" height="100" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <circle cx="150" cy="80" r="25" fill="none" stroke="#3498db" strokeWidth="4"/>
              <path d="M 150 110 L 130 180 L 150 175 L 170 180 Z" fill="none" stroke="#3498db" strokeWidth="4"/>
              <line x1="150" y1="125" x2="110" y2="150" stroke="#3498db" strokeWidth="4" strokeLinecap="round"/>
              <line x1="150" y1="125" x2="190" y2="155" stroke="#3498db" strokeWidth="4" strokeLinecap="round"/>
              <line x1="140" y1="175" x2="130" y2="220" stroke="#3498db" strokeWidth="4" strokeLinecap="round"/>
              <line x1="160" y1="175" x2="170" y2="220" stroke="#3498db" strokeWidth="4" strokeLinecap="round"/>
              <rect x="175" y="150" width="50" height="35" rx="3" fill="none" stroke="#95a5a6" strokeWidth="3"/>
              <path d="M 190 150 Q 200 140 210 150" fill="none" stroke="#95a5a6" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <p style={{
              marginTop: '10px',
              fontSize: '0.9rem',
              color: '#7f8c8d',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>Outline</p>
          </div>
        </div>

        <div style={{
          marginTop: '40px',
          padding: '20px',
          background: '#ecf0f1',
          borderRadius: '10px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          <h3 style={{ color: '#2c3e50', marginTop: 0 }}>Design Specifications</h3>
          <ul style={{ color: '#7f8c8d', lineHeight: '1.8' }}>
            <li><strong>Style:</strong> Clean, minimalist, professional</li>
            <li><strong>Colors:</strong> Blue (#3498db, #2980b9) and Silver (#bdc3c7, #95a5a6)</li>
            <li><strong>Format:</strong> Scalable vector (SVG)</li>
            <li><strong>Elements:</strong> Abstract human figure with briefcase</li>
            <li><strong>Use Case:</strong> Corporate branding, business cards, web assets</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
