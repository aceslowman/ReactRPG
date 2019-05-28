/**
 * @jest-environment node
 */

const mongoose = require('mongoose');
const request = require('supertest');
const app = require('./../app')



describe('Test the playercharacters path', () => {
    let server;
    beforeAll(async(done) => {
        server = app.listen(3003, () => {
            global.agent = request.agent(server);
            done();
        });    
    });
    
    test('It should response the GET method', (done) => {
        return request(app).get('/api/playercharacters').expect(200).end(done);//.end(done) solved final open handle
    });

    // describe('Test the root path', () => {
    //     test('It should response the GET method', (done) => {
    //         request(app).get('/api/playercharacters').then((response) => {
    //             expect(response.statusCode).toBe(200);
    //             done();
    //         });
    //     });
    // });

    afterAll(async() => {
        await server.close();
          
    });
});

/* To connect to database in tests add:
    to beforeAll:   await mongoose.connect(uri, {
                        dbName: 'reactrpg',
                        useNewUrlParser: true
                    });

    to afterAll:    await mongoose.disconnect();  not necesary */
