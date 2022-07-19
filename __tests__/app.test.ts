import supertest from 'supertest';

import { app } from '../src/app.js';

describe('Express app', () => {
  describe('Routing', () => {
    it(`should return 'Server ${process.env.NODE_ENV} environment!' when GET index`, async () => {
      const response = await supertest(app).get('/');

      expect(response.statusCode).toEqual(200);
      expect(response.body.msg).toEqual(
        `Server ${process.env.NODE_ENV} environment!`,
      );
    });

    it('should return `NOT FOUND` when GET a not found route', async () => {
      const response = await supertest(app).get('/random-page');

      expect(response.statusCode).toEqual(404);
      expect(response.body.error).toEqual('NOT FOUND');
    });
  });
});
