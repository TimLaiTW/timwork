export enum ProjectType {
    RWD = "RWD",
    ONE_PAGE_WEBSITE = "one page website",
    STATIC_WEBSITE = "static website",
    DYNAMIC_WEBSITE = "dynamic website"
}

export interface ProjectData {
    name: string;
    img: string;
    url: string;
    types: ProjectType[]
}

export const Projects: ProjectData[] = [
    {
        name: 'first project',
        img: '../../../assets/timwork_logo.svg',
        url: 'www.google.com',
        types: [ProjectType.DYNAMIC_WEBSITE, ProjectType.ONE_PAGE_WEBSITE]
    },
    {
        name: 'second project',
        img: '../../../assets/Home.png',
        url: 'https://material.angular.io/components/card/overview',
        types: [ProjectType.RWD, ProjectType.ONE_PAGE_WEBSITE, ProjectType.STATIC_WEBSITE,ProjectType.DYNAMIC_WEBSITE, ProjectType.STATIC_WEBSITE]
    },
    {
        name: 'first project',
        img: '../../../assets/timwork_logo.svg',
        url: 'www.google.com',
        types: [ProjectType.DYNAMIC_WEBSITE, ProjectType.ONE_PAGE_WEBSITE]
    },
    {
        name: 'second project',
        img: '../../../assets/Home.png',
        url: 'https://material.angular.io/components/card/overview',
        types: [ProjectType.RWD, ProjectType.ONE_PAGE_WEBSITE, ProjectType.STATIC_WEBSITE,ProjectType.DYNAMIC_WEBSITE, ProjectType.STATIC_WEBSITE]
    },
    {
        name: 'first project',
        img: '../../../assets/timwork_logo.svg',
        url: 'www.google.com',
        types: [ProjectType.DYNAMIC_WEBSITE, ProjectType.ONE_PAGE_WEBSITE]
    },
    {
        name: 'second project',
        img: '../../../assets/Home.png',
        url: 'https://material.angular.io/components/card/overview',
        types: [ProjectType.RWD, ProjectType.ONE_PAGE_WEBSITE, ProjectType.STATIC_WEBSITE,ProjectType.DYNAMIC_WEBSITE, ProjectType.STATIC_WEBSITE]
    }
]