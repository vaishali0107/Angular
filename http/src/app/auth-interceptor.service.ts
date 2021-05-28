import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
//Interceptors are something we comes in between bedore req leabving the app and executes the method
export class AuthInterceptorService implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler){
        console.log(req.url);
        const modifyRequest= req.clone({headers:req.headers.append('data','new-data')});//modifying request
        return next.handle(modifyRequest);//we can also modify response.handle is an observable so we can use pipe and subscribe
    }
}