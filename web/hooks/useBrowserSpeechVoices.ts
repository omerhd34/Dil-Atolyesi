"use client";

import { useEffect, useState } from "react";
import {
  getBrowserSpeechVoices,
  warmSpeechSynthesisVoices,
} from "@/lib/speechVoiceGender";

export function useBrowserSpeechVoices(): SpeechSynthesisVoice[] {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    setVoices(getBrowserSpeechVoices());
    const stop = warmSpeechSynthesisVoices(setVoices);
    return stop;
  }, []);

  return voices;
}
