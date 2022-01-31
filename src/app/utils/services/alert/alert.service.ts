import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  initRequest(message = 'Aguarde...'): void {
    Swal.fire({
      text: message,
      showCancelButton: false,
      showConfirmButton: false,
      allowOutsideClick: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });
  }

  showAlertError(message?: string): void {
    Swal.fire({
      title: 'Aviso',
      text: message ? message : 'Ocorreu um erro, verifique e tente novamente',
      icon: 'error',
      confirmButtonColor: '#023a8e',
      showCloseButton: false,
      showConfirmButton: true,
      timer: 2000,
    });
  }

  showAlertSuccess(message?: string): void {
    Swal.fire({
      title: 'Sucesso',
      text: message ? message : 'Sucesso',
      icon: 'success',
      confirmButtonColor: '#023a8e',
      showCloseButton: false,
      showConfirmButton: true,
      timer: 2000
    });
  }

  customMessage(title?: string, message?: string, type?: SweetAlertIcon): any {
    return Swal.fire({
      title,
      text: message,
      icon: type,
      showCancelButton: true,
      confirmButtonColor: '#023a8e',
    });
  }

  confirmMessage(title?: string, message?: string, confirmButtonText?: string): Promise<any> {
    return Swal.fire({
      title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#023a8e',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText
    });
  }

  reason(title?: string, message?: string, confirmButtonText?: string): Promise<any> {
    return Swal.fire({
      title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#023a8e',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText,
      inputLabel: 'Informe o motivo',
      input: 'textarea'
    });
  }

  closeAlert(): any {
    Swal.close();
  }

}
