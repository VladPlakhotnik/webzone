interface AccordionTypes {
  question: string
  answer: string
}

export interface ThemesTypes {
  slug: string
  topic: string
  'question-answer': AccordionTypes[]
}

export interface ContentDataType {
  subject: string
  themes: ThemesTypes[]
}
