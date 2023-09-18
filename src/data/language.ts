import { lang as lang_nb_NO } from "./lang.no.ts";
import { lang as lang_en_US } from "./lang.en.ts";

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
}

export class Language {
	language: string;
	lang: LanguageType = new lang_en_US();

	constructor(language: string) {
		this.language = language;
		if (language === "nb-NO") {
			this.lang = new lang_nb_NO();
		} else if (language === "en-US") {
			this.lang = new lang_en_US();
		}
	}
}
