pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("model");
});
pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.length).to.eql("38");
});
pm.test("Response time is less than 1313ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1313);
});
pm.test("Vary is present", function () {
    pm.response.to.have.header("Vary");
});
