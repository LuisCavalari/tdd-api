const request = require('supertest');
const { User } = require('../../src/app/models')
const app = require('../../src/app')
const truncade = require('../utils/truncade')
describe('Authenticate', () => {
    beforeEach(async () => {
        await truncade()
    })
    it('should authenticate with correct credentials', async () => {
        const user = await User.create({
            name: 'Luis Felipe Cavalari',
            email: 'lfelipe.felipe@gmail.com',
            password_hash: '123567',
        })

        const response = await request(app)
            .post('/session')
            .send({
                email: user.email,
                password: '123456'
            })
        expect(response.status).toBe(200)
    })


})