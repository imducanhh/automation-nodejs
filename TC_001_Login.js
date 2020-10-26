describe('Login', () => {
    it('Login OK', () => {
        browser.url("https://the-internet.herokuapp.com/login");
        expect(1).to.equal(2, '[ERR] Lỗi cmnr');
    });
});