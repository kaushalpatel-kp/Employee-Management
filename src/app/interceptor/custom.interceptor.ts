import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  //debugger;
 const token = localStorage.getItem('logintoken');
//  after fetching token we will make the copy of token via clone 
 
const clonereq = req.clone({
  setHeaders:{
    Authorization: `Bearer ${token}`
  }
 })
  return next(clonereq);
};
