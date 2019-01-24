import express from 'express';

export abstract class Router {
	private readonly router: express.Router;

	protected constructor() {
		this.router = express.Router();
		this.initRouter();
	}

	getRouter(): express.Router {
		return this.router;
	}

	private initRouter() {
		for (let fieldName in this) {
			if (fieldName.endsWith('Route')) {
				let method:any = this[fieldName];
				method.call(this, this.router);
				console.debug('-> Set Route :', fieldName);
			}
		}
	}
}

