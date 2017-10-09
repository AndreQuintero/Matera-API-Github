export class User {
	constructor(
        public id?: number,
        public login?: string, 
		public name?: string,
        public email?: string,
        public followers?: number,
        public following?: number,
        public bio?: string,
        public avatar_url?: string) {}
}