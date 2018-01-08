export class UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    headline: string;
    summary: string;
    skills: string;
    experience: Experience[] = new Array();
    education: Education[] = new Array();
}

export class Experience {
    organisationName: string;
    joinedOn: Date;
    leftOn: Date;
    jobDescription: string;
}

export class Education {
    institutionName: string;
    startedOn: Date;
    graduatedOn: Date;
    degree: string;
}