export const DEFAULT_CHAT_MODEL: string = 'chat-model';

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'Glyph Helper',
    description: 'The default mode allowing a QnA style interaction with Glyph.',
  },
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
  {
    id: 'chat-model',
    name: 'Document Conversion',
    description: 'Convert any document from one format to another, such as a PDF to a PNG, or DOCX to PDF.',
  },
  {
    id: 'chat-model',
    name: 'Barcode Recognition',
    description: 'Detect for and read the value of a barcode on a Document.',
  },
  {
    id: 'chat-model',
    name: 'Re-orientate',
    description: 'Convert a document and or selected pages from Landscape to Portrait, or vice versa.',
  },
  {
    id: 'chat-model',
    name: 'Split',
    description: 'Split a document and or selected pages into new documents.',
  },
  {
    id: 'chat-model',
    name: 'Merge',
    description: 'Merge documents and or selected pages into new documents.',
  },
  {
    id: 'chat-model',
    name: 'Distribute',
    description: 'Email documents as attachments accompanied by content templates.',
  },
  {
    id: 'chat-model',
    name: 'Integrate',
    description: 'Send your document to a pre-configured integration where it\'s then created.',
  }
];
