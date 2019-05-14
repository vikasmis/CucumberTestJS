/**
 * calculate step
 */

module.exports = function () {
    var self = this;

    this.Given(/^the input "([^"]*)"$/, function (input) {
        self.expression = input;

    });

    this.When(/^the calculator is run$/, function () {
        self.result = self.calculator.run(self.expression);

    });

    this.Then(/^the output should be "([^"]*)"$/, function (output) {
        self.expect(Number(self.result)).to.equal(Number(output));

    });
}