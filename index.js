$(document).ready(function(){
	// setting new variables and geting the value the user inputs
	$("#MortgageCalculator").click(function(){

		var loanBalance=$("#balanceinput").val();
		var interestRate=$("#rateInput").val();
		var loanTerm=$("#termInput").val();
		var period=$("#periodselected option:selected").val();


		// the calculations was provided i just set the variables
		var monthlyInterestRate=(interestRate/100) / period;

		var numberOfPayments=loanTerm * period;

		var compoundInterestRate= Math.pow((1 + monthlyInterestRate), numberOfPayments) ;

		var interestQuotient=(monthlyInterestRate * compoundInterestRate) / (compoundInterestRate -1);

		var monthlyPayment= Math.floor (loanBalance * interestQuotient);

		$("#results").html( "Your monthly payments witll be " + "$" + monthlyPayment);


	});
	});
