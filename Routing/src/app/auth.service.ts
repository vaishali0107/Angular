export class AuthService{
    loggedIn=false;

    isAuthenticated():Promise<boolean>{
        const promise:Promise<boolean> = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.loggedIn);
            },1000)
        });
        return promise;
    }

    login(){
        this.loggedIn=true;
    }

    logOut(){
        this.loggedIn=false;
    }

}