// complete the given function

function palindrome(str){

	var s = str.toLowerCase();
	var n= str.length;
	var i=0;
	var j=n-1;
	while(i<j){
		if(s.charAt(i)===s.charAt(j))
		{
			i++;
			j--;
		}
		else{
			return false
		}
	}
	return true;
}
module.exports = palindrome
