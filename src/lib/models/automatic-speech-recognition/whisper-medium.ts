import { AutomaticSpeechRecognitionBaseModel } from "@/lib/models/base";

export class WhisperMedium extends AutomaticSpeechRecognitionBaseModel {
  public static readonly endpoint =
    "https://api.deepinfra.com/v1/inference/openai/whisper-medium";

  constructor(authToken: string) {
    super(WhisperMedium.endpoint, authToken);
  }
}
