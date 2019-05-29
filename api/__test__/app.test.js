/**
 * @jest-environment node
 */

const mongoose = require('mongoose');
const request = require('supertest');
const app = require('./../app')


describe('Test the playercharacters paths', () => {
    let server;
    beforeAll(async(done) => {
        server = app.listen(3003, () => {
            global.agent = request.agent(server);
            done();
        });    
    });
    
    // test('It should response the GET method', (done) => {
    //     return request(app).get('/api/playercharacters').expect(200).end(done);//.end(done) solved final open handle
    // });

    describe('Test GET /api/playercharacters', () => {
        let playerId;
        test('It should response the GET method', function(done){
            request(app).get('/api/playercharacters').then(function(response){
                expect(response.statusCode).toBe(200);
                console.log('TEST:',response.body[0].name);
                playerId = response.body[0]._id;
                done();
            });
        });    
        test('It should response the GET method', (done) => {
            return request(app).get(`/api/playercharacters/${playerId}`).expect(200).end(done);
        });   
    });

// How should I handle testing post routes w/o cluttering mongoDB? 
    describe('Test POST /api/playercharacters', () => {

        test('It should response the POST method', function(done){
            request(app)
            .post('/api/playercharacters')
            .send('name=Art&AP=10&HP=3&XP=2&level=1')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
        });
    });

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
