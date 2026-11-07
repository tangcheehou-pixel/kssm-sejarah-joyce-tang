export function speakText(text: string, lang: 'ms-MY' | 'zh-CN' = 'ms-MY'): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }
  try {
    window.speechSynthesis.cancel();
    const clean = text.replace(/\*\*/g, '').replace(/\[.*?\]/g, '').trim();
    if (!clean) return;
    const utterance = new SpeechSynthesisUtterance(clean);
    const voices = window.speechSynthesis.getVoices();
    if (lang === 'ms-MY') {
      const bmVoice =
        voices.find((v) => v.lang.toLowerCase().startsWith('ms')) ||
        voices.find((v) => v.lang.toLowerCase().startsWith('id'));
      if (bmVoice) utterance.voice = bmVoice;
      utterance.lang = bmVoice?.lang || 'ms-MY';
      utterance.rate = 0.92;
    } else {
      const zhVoice =
        voices.find((v) => v.lang === 'zh-CN' || v.lang === 'zh-MY' || v.lang === 'zh-SG') ||
        voices.find((v) => v.lang.toLowerCase().startsWith('zh'));
      if (zhVoice) utterance.voice = zhVoice;
      utterance.lang = zhVoice?.lang || 'zh-CN';
      utterance.rate = 0.98;
    }
    window.speechSynthesis.speak(utterance);
  } catch {
    // Ignore speech synthesis errors on unsupported browsers
  }
}

export function stopSpeaking(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
