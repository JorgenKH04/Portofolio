import { Lang as LANG_NB_NO } from './lang.no';
import { Lang as LANG_EN_US } from './lang.en';

export interface LanguageType extends Array<string> {
  greeting: string;
  introparagraph1: string;
  introparagraph2: string;
  introparagraph3: string;
  contactbutton: string;
  contact: string;
  projectsbutton: string;
  projects: string;
  aboutme: string;
  communicator: string;
  flexible: string;
  criticalthinker: string;
  problemsolver: string;
  organized: string;
  adaptable: string;
  myskills: string;
  collaborationheader: string;
  collaborationpart1: string;
  collaborationemail: string;
  collaborationpart2: string;
  ctacontact: string;
  moreprojects: string;
  misc: string;
  attribution: string;
  icons8: string;
  animation: string;
  getintouch: string;
  language: string;
  formname: string;
  formemail: string;
  formmessage: string;
  formsubmit: string;
  cv: string;
}

export class Language {
  language: string;
  lang: LanguageType = new LANG_EN_US();

  constructor(language: string) {
    this.language = language;
    if (language === 'nb-NO') {
      this.lang = new LANG_NB_NO();
    } else if (language === 'en-US') {
      this.lang = new LANG_EN_US();
    }
  }
}
