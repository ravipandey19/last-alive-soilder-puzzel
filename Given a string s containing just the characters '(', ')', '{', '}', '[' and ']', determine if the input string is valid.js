function isValid1(inp) {

    var openArr = [];

    for(var i = 0; i < inp.length; i++) {

        if(inp[i] == '{' || inp[i] == '(' || inp[i] == '[') {
            openArr.push(inp[i])
        }

        if(openArr.length == 0) return false;

        let check;
        switch(inp[i]) {
            case ')':
                check = openArr.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = openArr.pop();
                if (check == '(' || check == '[')
                    return false;
                break;
 
            case ']':
                check = openArr.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }

    }

    return (openArr.length == 0);
}

console.log(isValid1("{[(&)]}"));
console.log(isValid1("{[(])}"));
console.log(isValid1("{{[[(())]]}}"));
