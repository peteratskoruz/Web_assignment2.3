/**declare authenticated user**/
let userName="Employee@11";

/**function class**/

class UserAuth{

    /***private member**/

    private _fullName: string;

    /**get function**/

    get fullName(): string{

        return this._fullName;

    }

    /**set function**/

    set fullName(newName: string){

        if(userName && userName == newName){

            this._fullName = newName;

            console.log("Valid user");

            document.getElementById("user").innerHTML=`${newName} is a Valid User`
        }

        else{

            console.log("Invalid User");

            document.getElementById("user").innerHTML=`${newName} Invalid User`;

        }
    }
}

let User = new UserAuth();

User.fullName = document.getElementById('inputVal').value;