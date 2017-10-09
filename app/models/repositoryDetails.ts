export class RepositoryDetails{
    
        constructor(
            public id?: number,
            public name?: string,
            public fullname?: string,
            public html_url?: string,
            public description?: string,
            public stargazers_count?: string,
            public language?: string
        ){}
    }