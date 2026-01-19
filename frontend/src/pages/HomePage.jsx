import React from 'react';

export default function HomePage({ onNavigate }) {
  return (
    <div style={{
      minHeight: 'calc(100vh - 90px)',
      background: 'linear-gradient(180deg, var(--branco-suave) 0%, var(--bege-fundo) 100%)'
    }}>
      <section style={{
        padding: '80px 60px',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontFamily: 'Georgia, serif',
          fontSize: '56px',
          color: 'var(--azul-escuro)',
          marginBottom: '24px',
          fontWeight: 'bold',
          lineHeight: '1.2'
        }}>
          Descubra novos mundos através dos livros
        </h1>
        
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: '20px',
          color: 'var(--cinza-texto)',
          marginBottom: '48px',
          lineHeight: '1.6',
          maxWidth: '700px',
          margin: '0 auto 48px'
        }}>
          Use inteligência artificial para identificar livros em sua estante e receber recomendações personalizadas baseadas no seu gosto literário.
        </p>

        <div style={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'center',
          marginBottom: '80px'
        }}>
          <button
            onClick={() => onNavigate('analisar')}
            style={{
              background: 'var(--azul-medio)',
              color: 'white',
              border: 'none',
              padding: '16px 40px',
              fontSize: '18px',
              fontFamily: 'Georgia, serif',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(107, 140, 174, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--azul-escuro)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 16px rgba(107, 140, 174, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'var(--azul-medio)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(107, 140, 174, 0.3)';
            }}
          >
            Analisar Minha Estante
          </button>

          <button
            onClick={() => onNavigate('generos')}
            style={{
              background: 'transparent',
              color: 'var(--azul-medio)',
              border: '2px solid var(--azul-medio)',
              padding: '16px 40px',
              fontSize: '18px',
              fontFamily: 'Georgia, serif',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--azul-medio)';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'var(--azul-medio)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Explorar Gêneros
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          marginTop: '80px'
        }}>
          <div style={{
            background: 'white',
            padding: '32px',
            borderRadius: '16px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
          }}>
            <svg width="64" height="64" viewBox="0 0 64 64" style={{ marginBottom: '16px' }}>
              <rect x="12" y="8" width="40" height="48" rx="2" fill="var(--azul-claro)" opacity="0.3"/>
              <rect x="16" y="12" width="32" height="40" rx="2" fill="var(--azul-medio)"/>
              <line x1="20" y1="20" x2="44" y2="20" stroke="white" strokeWidth="2"/>
              <line x1="20" y1="26" x2="44" y2="26" stroke="white" strokeWidth="2"/>
              <line x1="20" y1="32" x2="38" y2="32" stroke="white" strokeWidth="2"/>
              <circle cx="48" cy="48" r="10" fill="var(--dourado)"/>
              <path d="M44 48 L48 52 L52 44" stroke="white" strokeWidth="2" fill="none"/>
            </svg>
            <h3 style={{
              fontFamily: 'Georgia, serif',
              fontSize: '22px',
              color: 'var(--azul-escuro)',
              marginBottom: '12px',
              fontWeight: 'bold'
            }}>Identificação Inteligente</h3>
            <p style={{
              fontFamily: 'Georgia, serif',
              fontSize: '16px',
              color: 'var(--cinza-texto)',
              lineHeight: '1.6'
            }}>
              Tire uma foto da sua estante e descubra informações detalhadas sobre cada livro usando IA.
            </p>
          </div>

          <div style={{
            background: 'white',
            padding: '32px',
            borderRadius: '16px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
          }}>
            <svg width="64" height="64" viewBox="0 0 64 64" style={{ marginBottom: '16px' }}>
              <circle cx="32" cy="32" r="24" fill="var(--azul-claro)" opacity="0.3"/>
              <path d="M32 12 L38 26 L52 28 L42 38 L44 52 L32 45 L20 52 L22 38 L12 28 L26 26 Z" 
                    fill="var(--dourado)"/>
              <circle cx="48" cy="16" r="4" fill="var(--azul-medio)"/>
              <circle cx="52" cy="24" r="3" fill="var(--azul-medio)" opacity="0.7"/>
              <circle cx="44" cy="20" r="3" fill="var(--azul-medio)" opacity="0.7"/>
            </svg>
            <h3 style={{
              fontFamily: 'Georgia, serif',
              fontSize: '22px',
              color: 'var(--azul-escuro)',
              marginBottom: '12px',
              fontWeight: 'bold'
            }}>Recomendações Personalizadas</h3>
            <p style={{
              fontFamily: 'Georgia, serif',
              fontSize: '16px',
              color: 'var(--cinza-texto)',
              lineHeight: '1.6'
            }}>
              Receba sugestões de leitura baseadas no seu perfil e nos livros que você já possui.
            </p>
          </div>

          <div style={{
            background: 'white',
            padding: '32px',
            borderRadius: '16px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
          }}>
            <svg width="64" height="64" viewBox="0 0 64 64" style={{ marginBottom: '16px' }}>
              <rect x="8" y="12" width="48" height="40" rx="2" fill="var(--bege-medio)" opacity="0.5"/>
              <rect x="12" y="16" width="12" height="32" rx="1" fill="var(--azul-medio)"/>
              <rect x="26" y="16" width="12" height="32" rx="1" fill="var(--azul-claro)"/>
              <rect x="40" y="16" width="12" height="32" rx="1" fill="var(--azul-medio)"/>
              <path d="M28 4 L32 12 L36 4" stroke="var(--dourado)" strokeWidth="2" fill="none"/>
              <circle cx="32" cy="14" r="2" fill="var(--dourado)"/>
            </svg>
            <h3 style={{
              fontFamily: 'Georgia, serif',
              fontSize: '22px',
              color: 'var(--azul-escuro)',
              marginBottom: '12px',
              fontWeight: 'bold'
            }}>Biblioteca Pessoal</h3>
            <p style={{
              fontFamily: 'Georgia, serif',
              fontSize: '16px',
              color: 'var(--cinza-texto)',
              lineHeight: '1.6'
            }}>
              Organize seus favoritos e crie listas de leitura para não perder nenhum título interessante.
            </p>
          </div>
        </div>
      </section>

      <section style={{
        background: 'linear-gradient(135deg, var(--azul-medio) 0%, var(--azul-escuro) 100%)',
        padding: '60px 60px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: '36px',
          marginBottom: '24px',
          fontWeight: 'bold'
        }}>
          Comece sua jornada literária agora
        </h2>
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: '18px',
          marginBottom: '32px',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto 32px'
        }}>
          Milhares de leitores já descobriram novos autores e histórias através do Lumus
        </p>
        <button
          onClick={() => onNavigate('analisar')}
          style={{
            background: 'white',
            color: 'var(--azul-escuro)',
            border: 'none',
            padding: '16px 48px',
            fontSize: '18px',
            fontFamily: 'Georgia, serif',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
          }}
        >
          Experimentar Grátis
        </button>
      </section>
    </div>
  );
}