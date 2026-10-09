// Who/where/when of each role, shared by the Experience section and the
// plain-text views for assistants (/llms.txt, /llms-full.txt). The prose lives
// in i18n/ui.ts under `experience.<index>.*`.
export type MonthKey = 'date.august' | 'date.february' | 'date.july' | 'date.march'

export interface Role {
  key: 0 | 1 | 2
  company: string
  link?: string
  start: [MonthKey, number]
  /** `null` = ongoing: never render a concrete end date, which reads as "left". */
  end: [MonthKey, number] | null
}

export const ROLES: Role[] = [
  {
    key: 0,
    company: 'Carver Advanced Systems',
    link: 'https://carver-as.com',
    start: ['date.august', 2025],
    end: null
  },
  {
    key: 1,
    company: 'Giesecke+Devrient',
    link: 'https://www.gi-de.com/',
    start: ['date.august', 2023],
    end: ['date.august', 2025]
  },
  {
    key: 2,
    company: 'Universitat Politècnica de Catalunya',
    start: ['date.february', 2023],
    end: ['date.july', 2023]
  }
]
