interface AccordionTypes {
  question: string
  answer: string | boolean
}

interface ThemesTypes {
  slug: string
  topic: string
  'question-answer': AccordionTypes[]
}

export interface NavigationDataType {
  subject: string
  themes: ThemesTypes[]
}
