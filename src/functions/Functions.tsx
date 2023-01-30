const Functions ={
    GetNumbers(text){
        if (!text)
			return "";
		return text.replace(/\D+/g, '');
    }
}

export default Functions;