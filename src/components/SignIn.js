import { useState } from 'react';

export default function AuthSplitPage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailBlur = () => {
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign-in clicked');
  };

  const handleEmailContinue = () => {
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    console.log('Continue with email:', email);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEmailContinue();
    }
  };

  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      <div className="relative hidden lg:block order-2 lg:order-1">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop)'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))'
          }}
        />
        <div className="absolute bottom-8 left-8">
          <p className="text-white/90 text-lg font-medium">CyberQuest</p>
        </div>
      </div>

      <div 
        className="flex items-center justify-center p-6 order-1 lg:order-2"
        style={{ backgroundColor: '#0B1220' }}
      >
        <div 
          className="w-full max-w-[420px] p-8 md:p-10 rounded-2xl"
          style={{
            backgroundColor: '#0F1B31',
            borderWidth: '1px',
            borderColor: '#24344F',
            boxShadow: '0 12px 36px rgba(0,0,0,0.45)'
          }}
        >
          <div className="flex justify-center mb-6">
            <div 
              className="w-24 h-24 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: '#CBE3E1' }}
            >
              <span className="text-5xl">🤖</span>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-400 text-center mb-8">
            Continue your cybersecurity journey.
          </p>

          <button
            onClick={handleGoogleSignIn}
            aria-label="Continue with Google"
            className="w-full h-11 flex items-center justify-center gap-3 rounded-full transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2B6CFF] mb-6"
            style={{
              backgroundColor: '#111827',
              borderWidth: '1px',
              borderColor: '#2B3B59'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1F2937';
              e.currentTarget.style.borderColor = '#3B4B6F';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#111827';
              e.currentTarget.style.borderColor = '#2B3B59';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"/>
              <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"/>
              <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"/>
              <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335"/>
            </svg>
            <span className="text-white font-medium">Continue with Google</span>
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-slate-700/50" />
            <span className="text-slate-500 text-sm font-medium">OR</span>
            <div className="flex-1 h-px bg-slate-700/50" />
          </div>

          <div className="mb-6">
            <div 
              className="flex items-center gap-3 h-11 px-4 rounded-xl transition-colors focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#2B6CFF]"
              style={{
                backgroundColor: '#0C172B',
                borderWidth: '1px',
                borderColor: emailError ? '#EF4444' : '#24344F',
                ringOffsetColor: '#0F1B31'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                <path d="M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 5l-8 6-8-6" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                onKeyPress={handleKeyPress}
                placeholder="you@email.com"
                className="flex-1 bg-transparent text-white placeholder-slate-500 outline-none"
                aria-label="Email address"
                aria-invalid={!!emailError}
                aria-describedby={emailError ? 'email-error' : undefined}
              />
            </div>
            {emailError && (
              <p id="email-error" className="mt-2 text-sm text-red-400">
                {emailError}
              </p>
            )}
          </div>

          <button
            onClick={handleEmailContinue}
            aria-label="Continue with Email"
            className="w-full h-11 rounded-xl font-medium text-white transition-all hover:shadow-lg hover:shadow-blue-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2B6CFF] mb-6"
            style={{
              backgroundColor: '#2B6CFF',
              ringOffsetColor: '#0F1B31'
            }}
          >
            Continue with Email
          </button>

          <p className="text-xs text-slate-500 text-center leading-relaxed">
            By continuing, you agree to the{' '}
            <a 
              href="#" 
              className="text-slate-400 hover:underline focus-visible:outline-none focus-visible:underline"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a 
              href="#" 
              className="text-slate-400 hover:underline focus-visible:outline-none focus-visible:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}