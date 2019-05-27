/**
 * @jest-environment node
 */

const mongoose = require('mongoose');
const request = require('supertest');
const app = require('./../app')

const uri = 'mongodb+srv://reactrpg_admin:rpgfun1@reactrpg-jd0ob.mongodb.net/test?retryWrites=true';

describe('Test the playercharacters path', () => {
    let server;
    beforeAll(async(done) => {
       await mongoose.connect(uri, {
            dbName: 'reactrpg',
            useNewUrlParser: true
        });
        server = app.listen(3003, () => {
            global.agent = request.agent(server);
            done();
        });    
    });
    
    test('It should response the GET method', (done) => {
        return request(app).get('/api/playercharacters').expect(200).end(done);///.end solved final open handle
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
        await mongoose.disconnect();
        
    });

});

