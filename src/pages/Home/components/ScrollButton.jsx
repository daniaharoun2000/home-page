import {useEffect} from 'react';

export default function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
    

      <div style={{height: '155rem'}} />

    
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '1rem 2rem',
     
          bottom: '40px',
          right: '40px',
          backgroundColor: '#699',
          color: '#fff',
          border:'#699',
          borderRadius:'20%',
        
        }}
      >
      
      </button>
    </div>
  );
}
