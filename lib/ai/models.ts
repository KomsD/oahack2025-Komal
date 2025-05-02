export const DEFAULT_CHAT_MODEL: string = 'chat-model';

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'Data Extraction',
    description: 'Extract data from any document and choose your output format.',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Redaction',
    description: 'Automatic, data driven or manual redaction of any document.',
  },
];
