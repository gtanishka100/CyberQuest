import { useState } from 'react';
import { Shield, ShieldAlert } from 'lucide-react';

export default function EmailSandbox() {
  const [emailContent, setEmailContent] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeEmail = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const spamIndicators = [
        /urgent/i,
        /click here/i,
        /verify your account/i,
        /suspended/i,
        /winner/i,
        /congratulations/i,
        /claim your/i,
        /act now/i,
        /limited time/i,
        /nigerian prince/i,
        /bitcoin/i,
        /password.*reset/i
      ];

      const hasSpamIndicators = spamIndicators.some(pattern => 
        pattern.test(emailContent)
      );

      const hasLinks = /http|www\.|\.com|\.net|\.org/i.test(emailContent);
      const hasUrgentLanguage = /urgent|immediately|act now/i.test(emailContent);
      
      const isSafe = !hasSpamIndicators && !(hasLinks && hasUrgentLanguage);
      
      setAnalysisResult(isSafe);
      setIsAnalyzing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-md mx-auto">

        <div className="flex items-center gap-3 p-4 bg-gray-800">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold">Email Sandbox</h1>
        </div>

        <div className="p-4">
          <label className="block text-sm font-medium mb-2">Email Content</label>
          <textarea
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            className="w-full h-48 bg-white text-gray-900 rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Paste email content here..."
          />
        </div>

        <div className="px-4">
          <button
            onClick={analyzeEmail}
            disabled={!emailContent.trim() || isAnalyzing}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:opacity-50 text-white font-semibold py-4 rounded-lg transition-colors"
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Email'}
          </button>
        </div>

        {analysisResult !== null && (
          <div className="p-4 space-y-4">
            {analysisResult ? (
              <div className="border-2 border-green-500 rounded-lg p-4 bg-gray-800">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-6 h-6 text-green-500" />
                  <h2 className="text-green-500 font-bold text-lg">Safe Email</h2>
                </div>
                <p className="text-gray-400 text-sm mb-2">No threats detected</p>
                <p className="text-gray-300 text-sm">
                  This email appears to be legitimate. No suspicious links, urgent language, or other common phishing tactics were detected.
                </p>
              </div>
            ) : (
              <div className="border-2 border-red-500 rounded-lg p-4 bg-gray-800">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert className="w-6 h-6 text-red-500" />
                  <h2 className="text-red-500 font-bold text-lg">Spam Detected</h2>
                </div>
                <p className="text-gray-400 text-sm mb-2">Potential phishing attempt</p>
                <p className="text-gray-300 text-sm">
                  Suspicious links, urgent language, and spelling discrepancies detected. This email shows signs of a phishing attack.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}