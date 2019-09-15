const bcrypt = require('bcrypt');
const truncade = require('../utils/truncade')
const { User } = require('../../src/app/models/')


describe('User', () => {
    beforeEach(async () => {
        await truncade()
    })
    it('should encrypt the password',async () => {
        const user = await User.create({
            name: 'Luis Felipe Cavalari',
            email: 'lfelipe.felipe4@gmail.com',
            password:'123456'
        })
        const compareHash = await bcrypt.compare('123456',user.password_hash);
        expect(compareHash).toBe(true);
    })
})