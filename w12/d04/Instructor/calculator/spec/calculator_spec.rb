require_relative "../models/calculator.rb"

describe Calculator do
	let(:calculator) {Calculator.new}
	describe "#add" do
		it "should add 2 numbers" do
			expect(calculator.add(2, 2)).to eq 4
		end
	end

	describe "#subtract" do
		it "should subtract 2 numbers" do
			expect(subject.subtract(10, 8)).to eq 2
		end
	end

	describe "#multiply" do
		it "should multiply 2 numbers" do
			expect(subject.multiply(2, 2)).to eq 4
		end
	end

	describe "#divide" do
		it "should divide 2 numbers" do
			expect(subject.divide(10, 5)).to eq 2
		end

		it "should protect from 0 as a divisor" do
			expect(subject.divide(2, 0)).to eq "You can't divide by 0!"
		end
	end

end