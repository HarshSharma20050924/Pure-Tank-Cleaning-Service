import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw, Phone } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border-t-4 border-red-500">
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={32} />
            </div>
            <h1 className="text-2xl font-black text-slate-900 mb-2">Something went wrong</h1>
            <p className="text-slate-600 mb-6">
              कुछ तकनीकी समस्या आ गई है। कृपया पेज को रीफ्रेश करें या हमें कॉल करें।
            </p>
            
            <div className="flex flex-col gap-3">
                <button
                onClick={() => window.location.reload()}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-bold transition-all"
                >
                <RefreshCcw size={18} />
                Reload Page (पेज रीफ्रेश करें)
                </button>
                
                <a 
                href={`tel:${COMPANY_PHONE}`}
                className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:bg-slate-50 text-slate-700 py-3 px-6 rounded-xl font-bold transition-all"
                >
                <Phone size={18} />
                Call Support
                </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;