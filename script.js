// complete the given function

function palindrome(str){

	let s = str.toLowerCase();
	let n= str.length;
	let i=0;
	let j=n-1;
	while(i<j){
		if(str.charAt(i)===str.charAt(j))
		{
			i++;
			j--
		}
		else{
			return false
		}
	}
	return true;
}
module.exports = palindrome
