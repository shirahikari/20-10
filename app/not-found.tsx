import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontFamily: 'var(--font-caveat)',
          fontSize: '4rem',
          color: '#d63384',
          marginBottom: '20px'
        }}>
          404
        </h1>
        <h2 style={{
          fontFamily: 'var(--font-comfortaa)',
          fontSize: '1.5rem',
          color: '#495057',
          marginBottom: '20px'
        }}>
          Không tìm thấy trang này
        </h2>
        <p style={{
          fontFamily: 'var(--font-comfortaa)',
          fontSize: '1rem',
          color: '#6c757d',
          marginBottom: '30px'
        }}>
          Có vẻ như trang bạn đang tìm kiếm không tồn tại.
        </p>
        <Link 
          href="/"
          style={{
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #d63384, #ff6b9d)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '12px',
            fontFamily: 'var(--font-comfortaa)',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  )
}
