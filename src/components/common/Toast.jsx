import React from 'react';
import { CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

export const Toast = ({ toast, onClose }) => {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isWarning = toast.type === 'warning';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div
        className={`flex items-start gap-3 p-4 rounded-xl shadow-xl border text-sm ${
          isSuccess
            ? 'bg-slate-900 text-white border-slate-800'
            : isWarning
            ? 'bg-amber-950 text-amber-50 border-amber-800'
            : 'bg-blue-950 text-blue-50 border-blue-800'
        }`}
      >
        <div className="shrink-0 mt-0.5">
          {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          {isWarning && <AlertTriangle className="w-5 h-5 text-amber-400" />}
          {!isSuccess && !isWarning && <Info className="w-5 h-5 text-blue-400" />}
        </div>
        <div className="flex-1 pr-2">
          <p className="font-medium leading-snug">{toast.message}</p>
        </div>
        <button
          onClick={onClose}
          className="shrink-0 text-slate-400 hover:text-white transition-colors p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
