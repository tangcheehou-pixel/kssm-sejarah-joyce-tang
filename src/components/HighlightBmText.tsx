import React from 'react';
import { Volume2 } from 'lucide-react';
import { speakText } from '../services/speechService';

interface HighlightBmTextProps {
  text: string;
  tone?: 'FAKTA' | 'HURAIAN' | 'CONTOH' | 'PERHATIAN' | 'DEFAULT';
  className?: string;
}

export const HighlightBmText: React.FC<HighlightBmTextProps> = ({
  text,
  tone = 'DEFAULT',
  className = '',
}) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  const getMarkStyle = (): React.CSSProperties => {
    switch (tone) {
      case 'HURAIAN':
        return {
          background: '#E0F2FE',
          color: '#0C4A6E',
          borderBottom: '2px solid #38BDF8',
          padding: '1px 6px',
          borderRadius: '5px',
          fontWeight: 800,
        };
      case 'CONTOH':
        return {
          background: '#D1FAE5',
          color: '#064E3B',
          borderBottom: '2px solid #34D399',
          padding: '1px 6px',
          borderRadius: '5px',
          fontWeight: 800,
        };
      case 'PERHATIAN':
        return {
          background: '#FFE4E6',
          color: '#881337',
          borderBottom: '2px solid #FB7185',
          padding: '1px 6px',
          borderRadius: '5px',
          fontWeight: 800,
        };
      default:
        return {
          background: '#FEF08A',
          color: '#713F12',
          borderBottom: '2px solid #FACC15',
          padding: '1px 6px',
          borderRadius: '5px',
          fontWeight: 800,
        };
    }
  };

  const markStyle = getMarkStyle();

  return (
    <span className={className}>
      {parts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const inner = part.slice(2, -2);
          return (
            <mark key={idx} style={markStyle}>
              {inner}
            </mark>
          );
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </span>
  );
};

export const SpeakBmButton: React.FC<{ text: string; label?: string; compact?: boolean }> = ({
  text,
  label = 'Sebut BM',
  compact = false,
}) => (
  <button
    type="button"
    onClick={(e) => {
      e.stopPropagation();
      speakText(text, 'ms-MY');
    }}
    title="Dengar sebutan Bahasa Melayu (点击聆听马来文发音)"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: compact ? '3px' : '5px',
      background: '#EFF6FF',
      color: '#1D4ED8',
      border: '1.5px solid #93C5FD',
      borderRadius: '999px',
      padding: compact ? '2px 8px' : '4px 10px',
      fontSize: compact ? '11px' : '12px',
      fontWeight: 700,
      cursor: 'pointer',
      flexShrink: 0,
    }}
  >
    <Volume2 size={compact ? 12 : 14} />
    <span>{label}</span>
  </button>
);
